import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'Getting Started with NeuronDB | AI PostgreSQL Extension Installation Guide',
  description: 'NeuronDB installation guide for PostgreSQL 16-18. Install the AI PostgreSQL extension and run GPU-accelerated vector search queries with embeddings, semantic search, and RAG workflows.',
  keywords: [
    'NeuronDB installation',
    'AI PostgreSQL installation',
    'PostgreSQL AI extension setup',
    'PostgreSQL.ai alternative',
    'pgml alternative',
    'PostgreSQL ML extension',
    'NeuronDB quick start',
    'vector search tutorial',
    'PostgreSQL AI setup',
    'GPU vector search setup',
    'NeuronDB configuration',
    'vector database installation',
    'semantic search PostgreSQL',
    'embedding generation setup',
    'AI extension for PostgreSQL',
    'Postgres AI extension'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/getting-started',
  },
  openGraph: {
    title: 'Getting Started with NeuronDB | Installation and Quick Start',
    description: 'NeuronDB installation guide for PostgreSQL. Learn vector search, embeddings, and RAG workflows.',
    type: 'article',
    url: 'https://neurondb.ai/docs/getting-started',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'choose-your-path', title: 'Choose Your Path' },
  { id: 'docker-quickstart', title: 'Docker Quick Start (Recommended)' },
  { id: 'source-build', title: 'Source Build (Advanced)' },
  { id: 'next-steps', title: 'Next Steps' },
]

const prevLink: NavLink | undefined = undefined
const nextLink: NavLink = {
  href: '/docs/getting-started/quickstart',
  label: 'Quick Start',
}

export default function NeuronDBGettingStarted() {
  return (
    <PostgresDocsLayout
      title="Getting Started with NeuronDB"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          NeuronDB is a PostgreSQL AI ecosystem that provides GPU-accelerated vector search, ML inference, hybrid retrieval, and complete agent infrastructure. The ecosystem includes:
        </p>
        <ul>
          <li><strong>NeuronDB</strong> - PostgreSQL extension with vector search, ONNX model inference, and GPU acceleration</li>
          <li><strong>NeuronAgent</strong> - REST API and WebSocket agent runtime with long-term memory and tool execution</li>
          <li><strong>NeuronMCP</strong> - Model Context Protocol server with 100+ tools for MCP-compatible clients (like Claude Desktop)</li>
          <li><strong>NeuronDesktop</strong> - Unified web interface for managing all components</li>
        </ul>
        <p>
          <strong>What you can build:</strong> Semantic search, RAG pipelines, AI agents with PostgreSQL-backed memory, and MCP integrations - all in one unified ecosystem.
        </p>
      </section>

      <section id="choose-your-path">
        <h2>Choose Your Path</h2>
        <p>Pick the installation method that best fits your needs:</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Method</th>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Best For</th>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Time</th>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>
                <strong>
                  <a href="/docs/getting-started/quickstart">Quick Start</a>
                </strong>
              </td>
              <td style={{ padding: '0.75rem' }}>Most users, development, testing</td>
              <td style={{ padding: '0.75rem' }}>5 minutes</td>
              <td style={{ padding: '0.75rem' }}>⭐ Easy</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>
                <strong>
                  <a href="/docs/installation">Source Build</a>
                </strong>
              </td>
              <td style={{ padding: '0.75rem' }}>Production, custom builds, developers</td>
              <td style={{ padding: '0.75rem' }}>30+ minutes</td>
              <td style={{ padding: '0.75rem' }}>⭐⭐⭐ Advanced</td>
            </tr>
          </tbody>
        </table>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <p>
            <strong>💡 Recommendation:</strong> Start with the <a href="/docs/getting-started/quickstart" style={{ color: '#fbbf24' }}>Quick Start</a> to validate your setup quickly. Then follow the installation guide for production deployments.
          </p>
        </div>
      </section>

      <section id="docker-quickstart">
        <h2>Docker Quick Start (Recommended)</h2>
        <p>
          Get the complete NeuronDB ecosystem running in under 5 minutes with Docker Compose. This method includes all components with GPU support (CUDA, ROCm, Metal) and requires no manual configuration.
        </p>

        <BashCodeBlock
          title="Start complete ecosystem"
          code={`# Clone repository
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb

# Start all services
docker compose up -d

# Verify services
docker compose ps`}
        />

        <p>This starts:</p>
        <ul>
          <li>NeuronDB (PostgreSQL with extension) on port 5433</li>
          <li>NeuronAgent (REST API) on port 8080</li>
          <li>NeuronMCP (MCP server)</li>
          <li>NeuronDesktop (Web UI) on port 3000</li>
        </ul>

        <p>
          <strong>
            <a href="/docs/getting-started/quickstart">Continue to Quick Start guide →</a>
          </strong>
        </p>
      </section>

      <section id="source-build">
        <h2>Source Build (Advanced)</h2>
        <p>
          For production deployments or custom builds, install from source. This requires PostgreSQL 16-18, a C toolchain, and build dependencies.
        </p>
        <p>
          See the <a href="/docs/installation">Installation Guide</a> for detailed platform-specific instructions (Ubuntu/Debian, macOS, Rocky Linux/RHEL).
        </p>

        <BashCodeBlock
          title="Quick reference (Ubuntu/Debian)"
          code={`sudo apt-get install -y postgresql-17 postgresql-server-dev-17 build-essential

git clone https://github.com/neurondb-ai/neurondb.git
cd NeuronDB
make PG_CONFIG=/usr/lib/postgresql/17/bin/pg_config
sudo make install PG_CONFIG=/usr/lib/postgresql/17/bin/pg_config`}
        />

        <p>
          After installing the extension, you'll need to separately build and run NeuronAgent, NeuronMCP, and NeuronDesktop. See component documentation for details.
        </p>
      </section>

      <section id="next-steps">
        <h2>Next Steps</h2>
        <p>After installation, explore these guides:</p>
        <ul>
          <li>
            <a href="/docs/getting-started/quickstart">Quick Start Guide</a> - Create your first vector table, generate embeddings, and run semantic search
          </li>
          <li>
            <a href="/docs/neuronagent">NeuronAgent</a> - Build AI agents with REST API and WebSocket
          </li>
          <li>
            <a href="/docs/neuronmcp">NeuronMCP</a> - Use 100+ MCP tools with Claude Desktop
          </li>
          <li>
            <a href="/docs/indexing">Vector Indexing</a> - Configure HNSW, IVF, and quantization
          </li>
          <li>
            <a href="/docs/rag">RAG Pipelines</a> - Build retrieval augmented generation workflows
          </li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
