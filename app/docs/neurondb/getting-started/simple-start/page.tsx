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
  { id: 'understanding', title: 'Understanding What You Just Did' },
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
          This guide walks you through setup step by step. If you know Docker and PostgreSQL, use the <a href="/docs/neurondb/getting-started/quickstart">Technical Quickstart</a>.
        </p>
        <p>
          <strong>What you&apos;ll accomplish:</strong>
        </p>
        <ul>
          <li>✅ Get NeuronDB running locally</li>
          <li>✅ Create your first vector table</li>
          <li>✅ Perform your first similarity search</li>
          <li>✅ Understand the basic concepts</li>
        </ul>
        <p>
          <strong>Time required:</strong> 5-10 minutes
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
        <p>Before you begin, make sure you have:</p>
        <ul>
          <li>✅ <strong>Docker</strong> 20.10+ installed</li>
          <li>✅ <strong>Docker Compose</strong> 2.0+ installed</li>
          <li>✅ <strong>4GB+ RAM</strong> available</li>
          <li>✅ <strong>5-10 minutes</strong> of time</li>
          <li>✅ <strong>Ports available</strong>: 5433, 8080, 8081, 3000 (optional)</li>
        </ul>

        <details>
          <summary style={{ cursor: 'pointer', color: '#fbbf24', marginTop: '1rem', marginBottom: '1rem' }}>
            <strong>🔍 Verify Docker Installation</strong>
          </summary>
          <p>Run these commands to verify Docker is installed correctly:</p>
          <BashCodeBlock
            title="Verify Docker installation"
            code={`# Check Docker version
docker --version

# Check Docker Compose version
docker compose version

# Verify Docker is running
docker ps`}
          />
          <p><strong>Expected output:</strong></p>
          <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto', marginTop: '0.5rem' }}>
{`Docker version 20.10.0 or higher
Docker Compose version v2.0.0 or higher
CONTAINER ID   IMAGE   COMMAND   CREATED   STATUS   PORTS   NAMES`}
          </pre>
          <p style={{ marginTop: '0.5rem' }}>
            If you see errors, install Docker from <a href="https://www.docker.com/get-started" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>docker.com</a>.
          </p>
        </details>

        <h3>Step-by-Step Instructions</h3>

        <h4>Step 1: Start the Database</h4>
        <p><strong>From the repository root</strong>, start NeuronDB:</p>
        <BashCodeBlock
          title="Start NeuronDB"
          code={`# Start just the database (simplest option)
docker compose up -d neurondb

# Or start all services (database + agent + MCP + desktop)
docker compose up -d`}
        />
        <p>
          Docker downloads and starts a PostgreSQL container with the NeuronDB extension. The <code>-d</code> flag runs it in the background.
        </p>
        <p><strong>What to expect:</strong></p>
        <ul>
          <li>First time: Downloads images (may take 2-5 minutes)</li>
          <li>Subsequent runs: Starts immediately (30-60 seconds)</li>
        </ul>

        <h4>Step 2: Wait for Services to Be Healthy</h4>
        <p>Check that the service is running:</p>
        <BashCodeBlock
          title="Check service status"
          code={`# Check service status
docker compose ps`}
        />
        <p><strong>Expected output:</strong></p>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto', marginTop: '0.5rem' }}>
{`NAME                STATUS
neurondb-cpu        healthy (or running)`}
        </pre>
        <p>Wait for &quot;healthy&quot; status. This means PostgreSQL initialized and accepts connections. This takes 30 to 60 seconds.</p>

        <details>
          <summary style={{ cursor: 'pointer', color: '#fbbf24', marginTop: '1rem', marginBottom: '1rem' }}>
            <strong>🔍 What if it&apos;s not healthy?</strong>
          </summary>
          <p>If the service shows as &quot;unhealthy&quot; or keeps restarting:</p>
          <ol>
            <li>
              <strong>Check logs:</strong>
              <BashCodeBlock
                title="View logs"
                code={`docker compose logs neurondb`}
              />
            </li>
            <li>
              <strong>Common issues:</strong>
              <ul>
                <li>Port 5433 already in use → Stop the conflicting service</li>
                <li>Not enough memory → Allocate more RAM to Docker</li>
                <li>Disk space full → Free up disk space</li>
              </ul>
            </li>
            <li>
              <strong>Get help:</strong> See <a href="/docs/neurondb/troubleshooting" style={{ color: '#fbbf24' }}>Troubleshooting Guide</a>
            </li>
          </ol>
        </details>

        <h4>Step 3: Verify Installation</h4>
        <p>Connect to the database and verify NeuronDB is installed:</p>
        <BashCodeBlock
          title="Create extension and check version"
          code={`# Create the extension (if not already created)
docker compose exec neurondb psql -U neurondb -d neurondb -c "CREATE EXTENSION IF NOT EXISTS neurondb;"

# Check the version
docker compose exec neurondb psql -U neurondb -d neurondb -c "SELECT neurondb.version();"`}
        />
        <p><strong>Expected output:</strong></p>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto', marginTop: '0.5rem' }}>
{`CREATE EXTENSION
 version
---------
 3.0
(1 row)`}
        </pre>
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
          <p style={{ margin: 0 }}>
            <strong>✅ Great!</strong> If you see version <code>3.0</code> (or similar), NeuronDB is installed and working correctly.
          </p>
        </div>

        <h4>Step 4: Your First Vector Search</h4>
        <p>Let&apos;s create a simple example to understand how vector search works:</p>
        <BashCodeBlock
          title="Create test table and perform vector search"
          code={`docker compose exec neurondb psql -U neurondb -d neurondb <<EOF
-- Step 1: Create a table to store documents with embeddings
CREATE TABLE test_vectors (
  id SERIAL PRIMARY KEY,
  name TEXT,
  embedding vector(3)  -- 3-dimensional vectors for this example
);

-- Step 2: Insert some sample data
INSERT INTO test_vectors (name, embedding) VALUES
  ('apple', '[1.0, 0.0, 0.0]'::vector),
  ('banana', '[0.0, 1.0, 0.0]'::vector),
  ('orange', '[0.5, 0.5, 0.0]'::vector);

-- Step 3: Query the data
SELECT name, embedding FROM test_vectors;

-- Step 4: Find the most similar vector to a query
SELECT 
  name,
  embedding <=> '[0.9, 0.1, 0.0]'::vector AS distance
FROM test_vectors
ORDER BY embedding <=> '[0.9, 0.1, 0.0]'::vector
LIMIT 3;

-- Step 5: Clean up
DROP TABLE test_vectors;
EOF`}
        />
        <p><strong>Expected output:</strong></p>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto', marginTop: '0.5rem' }}>
{` name   |   embedding    
--------+----------------
 apple  | [1,0,0]
 banana | [0,1,0]
 orange | [0.5,0.5,0]
(3 rows)

 name   |     distance      
--------+-------------------
 apple  | 0.141421356237309
 orange | 0.424264068711929
 banana | 0.905538513813742
(3 rows)`}
        </pre>
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
          <p style={{ margin: 0 }}>
            <strong>📝 Understanding the results:</strong> The <code>&lt;=&gt;</code> operator calculates cosine distance. Lower distance = more similar. Apple is closest to <code>[0.9, 0.1, 0.0]</code> because both are close to <code>[1, 0, 0]</code>.
          </p>
        </div>
      </section>

      <section id="native-quickstart">
        <h2>Native Quickstart (Advanced)</h2>
        <p>
          <strong>For advanced users only</strong> - Requires PostgreSQL development headers and C compiler
        </p>

        <details>
          <summary style={{ cursor: 'pointer', color: '#fbbf24', marginBottom: '1rem' }}>
            <strong>📦 Native Installation Steps</strong>
          </summary>

          <h4>Prerequisites</h4>
          <ul>
            <li>PostgreSQL 16, 17, or 18 installed</li>
            <li>PostgreSQL development headers (<code>postgresql-dev</code> or <code>postgresql-devel</code>)</li>
            <li>C compiler (gcc or clang)</li>
            <li>Make utility</li>
          </ul>

          <h4>1. Build the Extension</h4>
          <BashCodeBlock
            title="Build and install"
            code={`# Navigate to NeuronDB directory
cd NeuronDB

# Build the extension
make

# Install the extension
sudo make install`}
          />
          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '0.5rem' }}>
            <p style={{ margin: 0 }}>
              <strong>📝 What&apos;s happening?</strong> The <code>make</code> command compiles the C code into a PostgreSQL extension. <code>make install</code> copies the compiled files to PostgreSQL&apos;s extension directory.
            </p>
          </div>

          <h4>2. Configure PostgreSQL</h4>
          <p>Add to <code>postgresql.conf</code>:</p>
          <SqlCodeBlock
            title="Enable the extension"
            code={`# Enable the extension
shared_preload_libraries = 'neurondb'`}
          />
          <p>Then restart PostgreSQL:</p>
          <BashCodeBlock
            title="Restart PostgreSQL"
            code={`# On Linux (systemd)
sudo systemctl restart postgresql

# On macOS (Homebrew)
brew services restart postgresql@16`}
          />

          <h4>3. Create the Extension</h4>
          <p>Connect to your database:</p>
          <BashCodeBlock
            title="Connect to database"
            code={`psql -d your_database_name`}
          />
          <p>Then run:</p>
          <SqlCodeBlock
            title="Create extension and verify"
            code={`-- Create the extension
CREATE EXTENSION neurondb;

-- Verify installation
SELECT neurondb.version();`}
          />
          <p><strong>Expected output:</strong> <code>3.0</code> (or current version)</p>

          <h4>4. Test with a Basic Query</h4>
          <SqlCodeBlock
            title="Quick test"
            code={`-- Create a test table
CREATE TABLE test (
  id SERIAL,
  vec vector(3)
);

-- Insert a vector
INSERT INTO test (vec) VALUES ('[1,2,3]'::vector);

-- Query it
SELECT * FROM test;

-- Clean up
DROP TABLE test;`}
          />
        </details>
      </section>

      <section id="understanding">
        <h2>Understanding What You Just Did</h2>
        
        <details>
          <summary style={{ cursor: 'pointer', color: '#fbbf24', marginBottom: '1rem' }}>
            <strong>📚 Key Concepts Explained</strong>
          </summary>

          <h4>What is a Vector?</h4>
          <p>
            A <strong>vector</strong> is an array of numbers that represents data in a multi-dimensional space. For example:
          </p>
          <ul>
            <li><code>[1.0, 0.0, 0.0]</code> is a 3-dimensional vector</li>
            <li>In AI, vectors often represent embeddings (dense numerical representations of text, images, etc.)</li>
          </ul>

          <h4>What is Vector Search?</h4>
          <p>
            <strong>Vector search</strong> finds similar vectors by calculating distances. The <code>&lt;=&gt;</code> operator uses cosine distance:
          </p>
          <ul>
            <li><strong>Lower distance</strong> = more similar</li>
            <li><strong>Higher distance</strong> = less similar</li>
          </ul>

          <h4>What is an Embedding?</h4>
          <p>
            An <strong>embedding</strong> is a vector representation of data (text, images, etc.) that captures semantic meaning. Similar concepts have similar embeddings.
          </p>

          <h4>Why Use NeuronDB?</h4>
          <p>
            NeuronDB adds vector search capabilities directly to PostgreSQL, so you can:
          </p>
          <ul>
            <li>Store vectors alongside your regular data</li>
            <li>Use SQL to query vectors</li>
            <li>Combine vector search with traditional SQL filters</li>
            <li>Leverage PostgreSQL&apos;s ACID guarantees</li>
          </ul>
        </details>
      </section>

      <section id="next-steps">
        <h2>Next Steps</h2>
        <p><strong>Continue your journey:</strong></p>
        <ul>
          <li>
            📐 Read <a href="/docs/neurondb/getting-started/quickstart">Quick Start Guide</a> to understand how to create your first vector table and run semantic searches
          </li>
          <li>
            🧪 Try examples from <a href="https://github.com/neurondb-ai/neurondb/tree/main/examples" target="_blank" rel="noopener noreferrer">examples/</a>
          </li>
          <li>
            📚 Explore the <a href="/docs">complete documentation</a>
          </li>
          <li>
            🔍 If something fails, check <a href="/docs/neurondb/troubleshooting">troubleshooting guide</a>
          </li>
          <li>
            🚀 Try the <a href="https://github.com/neurondb-ai/neurondb/tree/main/examples/quickstart" target="_blank" rel="noopener noreferrer">Quickstart Data Pack</a> for sample data
          </li>
        </ul>

        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '1.5rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#fbbf24' }}>💡 Quick Tips</h3>
          <h4 style={{ marginTop: '0.5rem', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 'bold' }}>Docker Tips</h4>
          <ul style={{ marginBottom: '1rem' }}>
            <li><strong>Docker is recommended</strong> for the easiest setup</li>
            <li><strong>Keep containers running</strong> - They use minimal resources when idle</li>
            <li><strong>Use <code>docker compose logs</code></strong> to see what&apos;s happening</li>
            <li><strong>Port conflicts?</strong> Change ports in <code>docker-compose.yml</code></li>
          </ul>
          <h4 style={{ marginTop: '0.5rem', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 'bold' }}>Learning Tips</h4>
          <ul style={{ marginBottom: '1rem' }}>
            <li><strong>Start simple</strong> - Get it running first, then explore advanced features</li>
            <li><strong>Read the architecture guide</strong> to understand how components work together</li>
            <li><strong>Try the examples</strong> - They&apos;re designed to teach concepts</li>
            <li><strong>Check troubleshooting</strong> if you encounter issues</li>
          </ul>
          <h4 style={{ marginTop: '0.5rem', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 'bold' }}>Development Tips</h4>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>Use the SQL recipes</strong> - Ready-to-run examples in <code>Docs/getting-started/recipes/</code></li>
            <li><strong>Try the CLI helpers</strong> - Scripts in <code>scripts/</code> for common tasks</li>
            <li><strong>Explore the examples</strong> - Working code in <code>examples/</code></li>
          </ul>
        </div>

        <details style={{ marginTop: '1.5rem' }}>
          <summary style={{ cursor: 'pointer', color: '#fbbf24', marginBottom: '1rem' }}>
            <strong>❓ Common Questions</strong>
          </summary>

          <h4>Q: Do I need all services running?</h4>
          <p>
            <strong>A:</strong> No! You can run just NeuronDB (the database) if you only need vector search. The other services (Agent, MCP, Desktop) are optional.
          </p>

          <h4>Q: Can I use my existing PostgreSQL?</h4>
          <p>
            <strong>A:</strong> Yes! You can install NeuronDB into your existing PostgreSQL installation. See <a href="/docs/neurondb/installation" style={{ color: '#fbbf24' }}>Native Installation</a>.
          </p>

          <h4>Q: What&apos;s the difference between Docker and native install?</h4>
          <p>
            <strong>A:</strong>
          </p>
          <ul>
            <li><strong>Docker:</strong> Everything is isolated, easy to remove, no system changes</li>
            <li><strong>Native:</strong> Direct integration with your PostgreSQL, more control, production-like</li>
          </ul>

          <h4>Q: How do I stop everything?</h4>
          <BashCodeBlock
            title="Stop services"
            code={`# Stop all services (keeps data)
docker compose down

# Stop and remove all data
docker compose down -v`}
          />

          <h4>Q: Where is my data stored?</h4>
          <p>
            <strong>A:</strong> In Docker volumes. Use <code>docker volume ls</code> to see them. Data persists even if you stop containers.
          </p>
        </details>
      </section>
    </PostgresDocsLayout>
  )
}

