import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'Getting Started with NeuronAgent | AI Agent Runtime Installation Guide',
  description: 'NeuronAgent installation guide. Deploy the AI agent runtime system with REST API, WebSocket, multi-agent collaboration, workflow engine, and long-term memory.',
  keywords: [
    'NeuronAgent installation',
    'AI agent runtime',
    'agent runtime postgresql',
    'postgresql agent',
    'agentic AI postgresql',
    'NeuronAgent quick start',
    'AI agent setup',
    'agent runtime setup',
    'NeuronAgent configuration',
    'autonomous agents',
    'multi-agent collaboration',
    'agent workflow engine',
    'agent memory',
    'agent tools',
    'REST API agent',
    'WebSocket agent'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent',
  },
  openGraph: {
    title: 'Getting Started with NeuronAgent | Installation and Quick Start',
    description: 'NeuronAgent installation guide. Build AI agents with REST API, WebSocket, and PostgreSQL-backed memory.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neuronagent',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'choose-your-path', title: 'Choose Your Path' },
  { id: 'docker-quickstart', title: 'Docker Quick Start' },
  { id: 'source-build', title: 'Source Build (Advanced)' },
  { id: 'next-steps', title: 'Next Steps' },
]

const prevLink: NavLink | undefined = undefined
const nextLink: NavLink = {
  href: '/docs/neuronagent/getting-started/quickstart',
  label: 'Quick Start',
}

export default function NeuronAgentDocsPage() {
  return (
    <PostgresDocsLayout
      title="Getting Started with NeuronAgent"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#fbbf24' }}>📌 Branch & Version Selection</h3>
          <p style={{ marginBottom: '1rem' }}>
            NeuronAgent has two branches with different versions. Choose based on your needs:
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #4b5563' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Branch</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Version</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Use When</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #374151' }}>
                <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>main</code></td>
                <td style={{ padding: '0.75rem' }}><strong>3.0.0-devel</strong></td>
                <td style={{ padding: '0.75rem' }}><span style={{ color: '#10b981' }}>Latest</span></td>
                <td style={{ padding: '0.75rem' }}>New projects, development, latest features (default)</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>REL1_STABLE</code></td>
                <td style={{ padding: '0.75rem' }}><strong>1.0.0</strong></td>
                <td style={{ padding: '0.75rem' }}><span style={{ color: '#3b82f6' }}>Stable</span></td>
                <td style={{ padding: '0.75rem' }}>Production, maximum stability required</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
            <strong>Note:</strong> This documentation reflects version <strong>3.0.0-devel</strong> from the <code style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '0.15rem 0.4rem', borderRadius: '0.25rem' }}>main</code> branch. 
            For the stable 1.0.0 release, use the <code style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '0.15rem 0.4rem', borderRadius: '0.25rem' }}>REL1_STABLE</code> branch. See{' '}
            <a href="https://github.com/neurondb-ai/neurondb" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>GitHub repository</a> for branch details.
          </p>
        </div>

        <p>
          NeuronAgent is an AI agent runtime system providing REST API and WebSocket endpoints for building autonomous agent applications. It includes:
        </p>
        <ul>
          <li><strong>Agent Runtime</strong> - Complete state machine for autonomous task execution with persistent memory</li>
          <li><strong>Multi-Agent Collaboration</strong> - Agent-to-agent communication, task delegation, and shared workspaces</li>
          <li><strong>Workflow Engine</strong> - DAG-based workflow execution with human-in-the-loop (HITL) support</li>
          <li><strong>Long-term Memory</strong> - HNSW-based vector search for context retrieval across sessions</li>
          <li><strong>20+ Tools</strong> - SQL, HTTP, Code, Shell, Browser, Filesystem, Memory, Collaboration, NeuronDB tools, Multimodal</li>
          <li><strong>Budget & Evaluation</strong> - Real-time cost tracking, budget controls, and quality scoring</li>
        </ul>
        <p>
          <strong>What you can build:</strong> Autonomous AI agents with persistent memory, multi-agent systems, workflow automation, and agentic AI applications - all backed by PostgreSQL.
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
                  <a href="/docs/neuronagent/getting-started/quickstart">Quick Start</a>
                </strong>
              </td>
              <td style={{ padding: '0.75rem' }}>Create your first agent with tools and memory</td>
              <td style={{ padding: '0.75rem' }}>10 minutes</td>
              <td style={{ padding: '0.75rem' }}>⭐⭐ Medium</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>
                <strong>
                  <a href="/docs/neuronagent/getting-started/installation">Docker Installation</a>
                </strong>
              </td>
              <td style={{ padding: '0.75rem' }}>Complete setup with Docker Compose</td>
              <td style={{ padding: '0.75rem' }}>5 minutes</td>
              <td style={{ padding: '0.75rem' }}>⭐ Easy</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}>
                <strong>
                  <a href="/docs/neuronagent/getting-started/configuration">Source Build</a>
                </strong>
              </td>
              <td style={{ padding: '0.75rem' }}>Production, custom builds, developers</td>
              <td style={{ padding: '0.75rem' }}>30+ minutes</td>
              <td style={{ padding: '0.75rem' }}>⭐⭐⭐ Advanced</td>
            </tr>
          </tbody>
        </table>

        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <p>
            <strong>💡 Note:</strong> New here? Start with <a href="/docs/neuronagent/getting-started/quickstart" style={{ color: '#fbbf24' }}>Quick Start</a> to create your first agent. 
            For Docker deployment, use <a href="/docs/neuronagent/getting-started/installation" style={{ color: '#fbbf24' }}>Docker Installation</a>. 
            Production deployments should use <a href="/docs/neuronagent/getting-started/configuration" style={{ color: '#fbbf24' }}>Source Build</a>.
          </p>
        </div>
      </section>

      <section id="docker-quickstart">
        <h2>Docker Quick Start</h2>
        <p>
          Complete NeuronAgent setup running in under 5 minutes with Docker Compose. This method includes NeuronAgent with NeuronDB integration and requires minimal configuration.
        </p>

        <BashCodeBlock
          title="Start NeuronAgent with Docker Compose"
          code={`# Clone repository (main branch = 3.0.0-devel)
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb

# For stable 1.0.0 release, checkout REL1_STABLE branch:
# git checkout REL1_STABLE

# Start NeuronAgent with NeuronDB
docker compose up -d neuronagent neurondb

# Verify services
docker compose ps

# Check health endpoint
curl -sS http://localhost:8080/health`}
        />

        <p>This starts:</p>
        <ul>
          <li>NeuronAgent (REST API) on port 8080</li>
          <li>NeuronDB (PostgreSQL with extension) on port 5433</li>
          <li>WebSocket support for real-time streaming</li>
          <li>Background workers for memory promotion and async tasks</li>
        </ul>

        <p>
          <strong>
            <a href="/docs/neuronagent/getting-started/quickstart">Continue to Quick Start guide →</a>
          </strong>
        </p>
      </section>

      <section id="source-build">
        <h2>Source Build (Advanced)</h2>
        <p>
          For production deployments or custom builds, install from source. This requires Go 1.21+, PostgreSQL 16-18 with NeuronDB extension, and build dependencies.
        </p>
        <p>
          See the <a href="/docs/neuronagent/getting-started/installation">Installation Guide</a> for detailed platform-specific instructions.
        </p>

        <BashCodeBlock
          title="Quick reference (Ubuntu/Debian)"
          code={`# Install dependencies
sudo apt-get install -y postgresql-17 postgresql-server-dev-17 build-essential golang-go

# Clone repository
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb

# For stable 1.0.0 release, checkout REL1_STABLE branch:
# git checkout REL1_STABLE

# Build NeuronAgent
cd NeuronAgent
go build -o neuronagent ./cmd/server

# Run NeuronAgent
./neuronagent --config configs/config.yaml.example`}
        />

        <p>
          After building NeuronAgent, configure it to connect to your NeuronDB instance. See the <a href="/docs/neuronagent/getting-started/configuration">Configuration Guide</a> for details.
        </p>
      </section>

      <section id="next-steps">
        <h2>Next Steps</h2>
        <p>After installation, use these guides:</p>
        <ul>
          <li>
            <a href="/docs/neuronagent/getting-started/quickstart">Quick Start Guide</a> - Create your first agent with tools and memory
          </li>
          <li>
            <a href="/docs/neuronagent/getting-started/configuration">Configuration Guide</a> - Configure API keys, rate limiting, and database connections
          </li>
          <li>
            <a href="/docs/neuronagent/getting-started/neurondb-integration">NeuronDB Integration</a> - Integrate with NeuronDB for vector search and embeddings
          </li>
          <li>
            <a href="/docs/neuronagent/features">Features Documentation</a> - Complete feature reference for agents, workflows, and tools
          </li>
          <li>
            <a href="/docs/neurondb">NeuronDB Documentation</a> - Vector search, ML inference, and RAG pipelines
          </li>
          <li>
            <a href="https://github.com/neurondb-ai/neurondb/tree/main/examples/agent-tools">Agent Tools Example</a> - Complete working example with multiple tools
          </li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
