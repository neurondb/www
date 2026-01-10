import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'Simple Start Guide | NeuronDB Beginner Tutorial',
  description: 'Beginner-friendly guide to get NeuronDB running quickly. Step-by-step instructions for Docker and native installation with minimal friction.',
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondb/getting-started/simple-start',
  },
  openGraph: {
    title: 'Simple Start Guide | NeuronDB',
    description: 'Get NeuronDB running in minutes with this beginner-friendly guide.',
    type: 'article',
    url: 'https://neurondb.ai/docs/getting-started/simple-start',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'choose-path', title: 'Choose Your Path' },
  { id: 'docker-quickstart', title: 'Docker Quickstart' },
  { id: 'native-quickstart', title: 'Native Quickstart (Advanced)' },
  { id: 'next-steps', title: 'Next Steps' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/getting-started',
  label: 'Getting Started',
}

const nextLink: NavLink = {
  href: '/docs/neurondb/getting-started/quickstart',
  label: 'Quick Start Guide',
}

export default function SimpleStartPage() {
  return (
    <PostgresDocsLayout
      title="Simple Start"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          <strong>Goal:</strong> Get a working local environment with minimal friction.
        </p>
        <p>
          This guide provides step-by-step instructions to get NeuronDB up and running quickly. Choose the method that works best for you:
        </p>
      </section>

      <section id="choose-path">
        <h2>Choose Your Path</h2>
        <p>Pick the method that works best for you:</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Method</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Best For</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Time</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><strong>Docker</strong></td>
              <td style={{ padding: '0.75rem' }}>Fastest start</td>
              <td style={{ padding: '0.75rem' }}>5 min</td>
              <td style={{ padding: '0.75rem' }}>Easy</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}><strong>Native build</strong></td>
              <td style={{ padding: '0.75rem' }}>Custom setup</td>
              <td style={{ padding: '0.75rem' }}>30+ min</td>
              <td style={{ padding: '0.75rem' }}>Advanced</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="docker-quickstart">
        <h2>Docker Quickstart</h2>
        <p>Docker provides the easiest and most consistent setup.</p>

        <h3>Prerequisites Checklist</h3>
        <ul>
          <li>✅ Docker 20.10+ installed</li>
          <li>✅ Docker Compose 2.0+ installed</li>
          <li>✅ 4GB+ RAM available</li>
        </ul>

        <h3>Steps</h3>

        <h4>1. From repo root, start all services:</h4>
        <BashCodeBlock
          title="Start all services (CPU profile, default)"
          code={`# Start all services (CPU profile, default)
docker compose up -d

# Or start just NeuronDB extension
docker compose up -d neurondb

# Or start with GPU support (CUDA)
docker compose --profile cuda up -d`}
        />

        <h4>2. Wait for services to be healthy (30-60 seconds):</h4>
        <BashCodeBlock
          title="Check service status"
          code={`docker compose ps`}
        />
        <p>All services should show "healthy" status.</p>

        <h4>3. Verify Postgres is reachable and extension is installed:</h4>
        <BashCodeBlock
          title="Create extension and check version"
          code={`# Create extension (if not already created)
docker compose exec neurondb psql -U neurondb -d neurondb -c "CREATE EXTENSION IF NOT EXISTS neurondb;"

# Check version
docker compose exec neurondb psql -U neurondb -d neurondb -c "SELECT neurondb.version();"`}
        />
        <p><strong>Expected output:</strong> <code>2.0</code> (or current version)</p>

        <h4>4. Test with a simple vector query:</h4>
        <BashCodeBlock
          title="Create test table and insert vectors"
          code={`docker compose exec neurondb psql -U neurondb -d neurondb <<EOF
CREATE TABLE test_vectors (
  id SERIAL PRIMARY KEY,
  name TEXT,
  embedding vector(3)
);
INSERT INTO test_vectors (name, embedding) VALUES
  ('apple', '[1.0, 0.0, 0.0]'::vector),
  ('banana', '[0.0, 1.0, 0.0]'::vector);
SELECT name, embedding FROM test_vectors;
DROP TABLE test_vectors;
EOF`}
        />
        <p><strong>Expected output:</strong></p>
        <pre style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto' }}>
{` name  |   embedding    
-------+----------------
 apple | [1,0,0]
 banana | [0,1,0]
(2 rows)`}
        </pre>
      </section>

      <section id="native-quickstart">
        <h2>Native Quickstart (Outline)</h2>
        <p>
          <strong>For advanced users only</strong> - Requires PostgreSQL development headers
        </p>

        <details>
          <summary style={{ cursor: 'pointer', color: '#fbbf24', marginBottom: '1rem' }}>
            <strong>Native Installation Steps</strong>
          </summary>

          <h4>1. Build the extension</h4>
          <p>
            In <code>NeuronDB/</code> (see <a href="https://github.com/neurondb-ai/neurondb/tree/main/NeuronDB/INSTALL.md" target="_blank" rel="noopener noreferrer">NeuronDB/INSTALL.md</a>)
          </p>

          <h4>2. Install it into your Postgres</h4>
          <p>
            Add to <code>shared_preload_libraries</code> / extension directory
          </p>

          <h4>3. Create extension:</h4>
          <SqlCodeBlock
            title="Enable NeuronDB extension"
            code={`CREATE EXTENSION neurondb;`}
          />

          <h4>4. Verify installation:</h4>
          <SqlCodeBlock
            title="Check version"
            code={`SELECT neurondb.version();`}
          />
          <p><strong>Expected output:</strong> <code>2.0</code></p>

          <h4>5. Test with a basic query or load sample data:</h4>
          <SqlCodeBlock
            title="Quick test"
            code={`-- Quick test
CREATE TABLE test (id SERIAL, vec vector(3));
INSERT INTO test (vec) VALUES ('[1,2,3]'::vector);
SELECT * FROM test;
DROP TABLE test;`}
          />
        </details>
      </section>

      <section id="next-steps">
        <h2>Next Steps</h2>
        <p><strong>Continue your journey:</strong></p>
        <ul>
          <li>
            ✅ Read <a href="/docs/neurondb/getting-started/quickstart">Quick Start Guide</a> to understand how to create your first vector table and run semantic searches
          </li>
          <li>
            ✅ Try examples from <a href="https://github.com/neurondb-ai/neurondb/tree/main/examples" target="_blank" rel="noopener noreferrer">examples/</a>
          </li>
          <li>
            ✅ Use the <a href="/docs">complete documentation</a>
          </li>
          <li>
            ✅ If something fails, check <a href="/docs/neurondb/troubleshooting">troubleshooting guide</a>
          </li>
        </ul>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1.5rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#fbbf24' }}>💡 Quick Tips</h3>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>Docker</strong> for the easiest setup</li>
            <li><strong>Read the architecture guide</strong> to understand how components work together</li>
            <li><strong>Check troubleshooting</strong> if you encounter issues</li>
            <li><strong>Start simple</strong> - get it running first, then add advanced features</li>
          </ul>
        </div>
      </section>
    </PostgresDocsLayout>
  )
}

