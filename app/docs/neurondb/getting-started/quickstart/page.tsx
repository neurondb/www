import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'

export const metadata: Metadata = {
  title: 'NeuronDB Quick Start Guide | PostgreSQL AI Vector Extension',
  description: 'Get up and running with NeuronDB quickly. Create your first vector table, generate embeddings, create indexes, and perform semantic search.',
}

const tableOfContents: TocItem[] = [
  { id: 'prerequisites', title: 'Prerequisites' },
  { id: 'step-1', title: 'Step 1: Create Extension' },
  { id: 'step-2', title: 'Step 2: Create Vector Table' },
  { id: 'step-3', title: 'Step 3: Generate Embeddings' },
  { id: 'step-4', title: 'Step 4: Create Index' },
  { id: 'step-5', title: 'Step 5: Search' },
  { id: 'next-steps', title: 'Next Steps' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/getting-started',
  label: 'Getting Started',
}

const nextLink: NavLink = {
  href: '/docs/neurondb/features/vector-types',
  label: 'Vector Types',
}

export default function QuickStartPage() {
  return (
    <PostgresDocsLayout
      title="Quick Start Guide"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="prerequisites">
        <h2>Prerequisites</h2>
        <p>
          <strong>💡 New to NeuronDB?</strong> For the fastest setup, use the{' '}
          <a href="/docs/neurondb/getting-started/docker">Docker Quick Start</a> which sets up the complete ecosystem (NeuronDB + NeuronAgent + NeuronMCP + NeuronDesktop) in 5 minutes.
        </p>
        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <p>
            <strong>📦 Branch & Version Information:</strong> This guide covers NeuronDB version <strong>2.0.0</strong> from the <code style={{ backgroundColor: '#1e293b', padding: '0.15rem 0.4rem', borderRadius: '0.25rem' }}>main</code> branch (latest). 
            For version <strong>1.0.0</strong> (stable release from <code style={{ backgroundColor: '#1e293b', padding: '0.15rem 0.4rem', borderRadius: '0.25rem' }}>REL1_STABLE</code> branch), see the <a href="/docs/neurondb/installation" style={{ color: '#fbbf24' }}>Installation Guide</a> for branch-specific instructions.
          </p>
        </div>
        <p>For native installation, you'll need:</p>
        <ul>
          <li>PostgreSQL 16, 17, or 18 installed</li>
          <li>NeuronDB extension installed (see <a href="/docs/neurondb/installation">Installation Guide</a>)</li>
        </ul>
      </section>

      <section id="step-1">
        <h2>Step 1: Create Extension</h2>
        <p>Enable NeuronDB in your database:</p>
        <SqlCodeBlock
          title="Create extension"
          code={`CREATE EXTENSION neurondb;`}
        />
      </section>

      <section id="step-2">
        <h2>Step 2: Create Vector Table</h2>
        <p>Create a table with a vector column to store embeddings:</p>
        <SqlCodeBlock
          title="Create vector table"
          code={`CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    title TEXT,
    content TEXT,
    embedding vector(384)
);`}
        />
      </section>

      <section id="step-3">
        <h2>Step 3: Generate Embeddings</h2>
        <p>Insert documents with automatically generated embeddings:</p>
        <SqlCodeBlock
          title="Generate embeddings"
          code={`INSERT INTO articles (title, content, embedding)
VALUES (
    'Machine Learning',
    'Machine learning is a subset of AI',
    embed_text('Machine learning is a subset of AI')
);`}
        />
      </section>

      <section id="step-4">
        <h2>Step 4: Create Index</h2>
        <p>Create an HNSW index for fast similarity search:</p>
        <SqlCodeBlock
          title="Create HNSW index"
          code={`SELECT hnsw_create_index('articles', 'embedding', 'articles_idx', 16, 200);`}
        />
      </section>

      <section id="step-5">
        <h2>Step 5: Search</h2>
        <p>Perform semantic search using vector similarity:</p>
        <SqlCodeBlock
          title="Semantic search"
          code={`SELECT id, title,
       embedding <-> embed_text('artificial intelligence') AS distance
FROM articles
ORDER BY distance
LIMIT 5;`}
        />
      </section>

      <section id="next-steps">
        <h2>Next Steps</h2>
        <ul>
          <li><a href="/docs/neurondb/features/vector-types">Vector Types</a> - Different vector formats</li>
          <li><a href="/docs/neurondb/ml/embeddings">Embeddings</a> - Embedding generation</li>
          <li><a href="/docs/neurondb/hybrid/overview">Hybrid Search</a> - Combine semantic and keyword search</li>
          <li><a href="/docs/neurondb/configuration">Configuration</a> - Configuration options</li>
        </ul>
      </section>

      <section>
        <h2>Learn More</h2>
        <p>
          For detailed documentation, examples, and comprehensive guides, visit:{' '}
          <a href="https://neurondb.ai/docs/neurondb" target="_blank" rel="noopener noreferrer">
            Detailed Documentation
          </a>
        </p>
      </section>
    </PostgresDocsLayout>
  )
}

