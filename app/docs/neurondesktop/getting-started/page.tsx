import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'Getting Started with NeuronDesktop | Unified Web Interface Installation Guide',
  description: 'NeuronDesktop installation guide. Deploy the unified web interface for managing NeuronDB, NeuronAgent, and NeuronMCP with real-time updates and comprehensive monitoring.',
  keywords: [
    'NeuronDesktop installation',
    'unified web interface',
    'NeuronDB dashboard',
    'agent management UI',
    'MCP console',
    'NeuronDesktop quick start',
    'web interface setup',
    'NeuronDesktop configuration',
    'profile management',
    'dashboard setup',
    'real-time monitoring',
    'web UI postgresql',
    'agent console',
    'vector search UI'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondesktop/getting-started',
  },
  openGraph: {
    title: 'Getting Started with NeuronDesktop | Installation and Quick Start',
    description: 'NeuronDesktop installation guide. Unified web interface for managing the NeuronDB ecosystem.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neurondesktop/getting-started',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'choose-your-path', title: 'Choose Your Path' },
  { id: 'docker-quickstart', title: 'Docker Quick Start' },
  { id: 'profile-setup', title: 'Profile Configuration' },
  { id: 'source-build', title: 'Source Build (Advanced)' },
  { id: 'next-steps', title: 'Next Steps' },
]

const prevLink: NavLink | undefined = undefined
const nextLink: NavLink = {
  href: '/docs/neurondesktop/getting-started/profiles',
  label: 'Profile Configuration',
}

export default function NeuronDesktopGettingStarted() {
  return (
    <PostgresDocsLayout
      title="Getting Started with NeuronDesktop"
      version="NeuronDesktop Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#fbbf24' }}>📌 Branch & Version Selection</h3>
          <p style={{ marginBottom: '1rem' }}>
            NeuronDesktop has three branches with different versions. Choose based on your needs:
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
              <tr style={{ borderBottom: '1px solid #374151' }}>
                <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>REL2_STABLE</code></td>
                <td style={{ padding: '0.75rem' }}><strong>2.0.0</strong></td>
                <td style={{ padding: '0.75rem' }}><span style={{ color: '#3b82f6' }}>Stable</span></td>
                <td style={{ padding: '0.75rem' }}>Production, stable v2.0 features</td>
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
            For stable releases, use <code style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '0.15rem 0.4rem', borderRadius: '0.25rem' }}>REL2_STABLE</code> (v2.0.0) or <code style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '0.15rem 0.4rem', borderRadius: '0.25rem' }}>REL1_STABLE</code> (v1.0.0). See{' '}
            <a href="https://github.com/neurondb-ai/neurondb" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>GitHub repository</a> for branch details.
          </p>
        </div>

        <p>
          NeuronDesktop is a unified web interface providing a single dashboard for managing and interacting with MCP servers, NeuronDB, and NeuronAgent. It includes:
        </p>
        <ul>
          <li><strong>Unified Dashboard</strong> - Single interface for managing all NeuronDB ecosystem components with profile-based configuration</li>
          <li><strong>Real-Time Updates</strong> - WebSocket support for live updates, streaming responses, and instant feedback</li>
          <li><strong>NeuronDB Management</strong> - Browse tables, run queries, manage indexes, and perform vector searches through intuitive UI</li>
          <li><strong>Agent Management</strong> - Create agents, view sessions, monitor performance, and test agent interactions</li>
          <li><strong>MCP Integration</strong> - Full MCP server integration and testing through the web interface</li>
          <li><strong>Metrics & Monitoring</strong> - Built-in metrics collection, health checks, and performance dashboards</li>
        </ul>
        <p>
          <strong>What you can build:</strong> A complete management interface for your NeuronDB ecosystem with real-time monitoring, query execution, agent management, and MCP tool testing - all in one unified web application.
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
                  <a href="/docs/neurondesktop/getting-started/profiles">Profile Setup</a>
                </strong>
              </td>
              <td style={{ padding: '0.75rem' }}>Configure profiles and connect to components</td>
              <td style={{ padding: '0.75rem' }}>5 minutes</td>
              <td style={{ padding: '0.75rem' }}>⭐ Easy</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>
                <strong>
                  <a href="/docs/neurondesktop/getting-started/installation">Docker Installation</a>
                </strong>
              </td>
              <td style={{ padding: '0.75rem' }}>Complete setup with Docker Compose</td>
              <td style={{ padding: '0.75rem' }}>5 minutes</td>
              <td style={{ padding: '0.75rem' }}>⭐ Easy</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}>
                <strong>
                  <a href="/docs/neurondesktop/getting-started/installation">Source Build</a>
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
            <strong>💡 Note:</strong> New here? Start with <a href="/docs/neurondesktop/getting-started/profiles" style={{ color: '#fbbf24' }}>Profile Setup</a> to configure your first profile. 
            For Docker deployment, use <a href="/docs/neurondesktop/getting-started/installation" style={{ color: '#fbbf24' }}>Docker Installation</a>. 
            Production deployments should use <a href="/docs/neurondesktop/getting-started/installation" style={{ color: '#fbbf24' }}>Source Build</a>.
          </p>
        </div>
      </section>

      <section id="docker-quickstart">
        <h2>Docker Quick Start</h2>
        <p>
          Complete NeuronDesktop setup running in under 5 minutes with Docker Compose. This method includes the web interface with API backend.
        </p>

        <BashCodeBlock
          title="Start NeuronDesktop with Docker Compose"
          code={`# Clone repository (main branch = 3.0.0-devel)
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb

# For stable 1.0.0 release, checkout REL1_STABLE branch:
# git checkout REL1_STABLE

# Start NeuronDesktop with NeuronDB
docker compose up -d neurondesk-api neurondesk-frontend neurondb

# Verify services
docker compose ps

# Access web interface
# API: http://localhost:8081/
# UI: http://localhost:3000/`}
        />

        <p>This starts:</p>
        <ul>
          <li>NeuronDesktop API on port 8081</li>
          <li>NeuronDesktop Frontend (Web UI) on port 3000</li>
          <li>NeuronDB (PostgreSQL with extension) on port 5433</li>
          <li>WebSocket support for real-time updates</li>
        </ul>

        <p>
          <strong>
            <a href="/docs/neurondesktop/getting-started/profiles">Continue to Profile Configuration →</a>
          </strong>
        </p>
      </section>

      <section id="profile-setup">
        <h2>Profile Configuration</h2>
        <p>
          NeuronDesktop uses profiles to manage connections to different environments and components. Create your first profile to connect to NeuronDB, NeuronAgent, and NeuronMCP.
        </p>

        <BashCodeBlock
          title="Create Profile via API"
          code={`# Create a profile via API
curl -X POST http://localhost:8081/api/v1/profiles \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "default",
    "neurondb": {
      "host": "localhost",
      "port": 5433,
      "database": "neurondb",
      "user": "postgres",
      "password": "postgres"
    },
    "neuronagent": {
      "url": "http://localhost:8080",
      "apiKey": "your-api-key"
    },
    "neuronmcp": {
      "command": "neuronmcp",
      "args": ["--transport", "stdio"]
    }
  }'`}
        />

        <p>Profile features:</p>
        <ul>
          <li>Multiple environment support (development, staging, production)</li>
          <li>Auto-detection of components</li>
          <li>Connection string management</li>
          <li>API key and authentication configuration</li>
        </ul>

        <p>
          See the <a href="/docs/neurondesktop/getting-started/profiles">Profile Configuration Guide</a> for detailed instructions.
        </p>
      </section>

      <section id="source-build">
        <h2>Source Build (Advanced)</h2>
        <p>
          For production deployments or custom builds, install from source. This requires Node.js 18+, Go 1.21+, and build dependencies.
        </p>
        <p>
          See the <a href="/docs/neurondesktop/getting-started/installation">Installation Guide</a> for detailed platform-specific instructions.
        </p>

        <BashCodeBlock
          title="Quick reference (Ubuntu/Debian)"
          code={`# Install dependencies
sudo apt-get install -y nodejs npm golang-go build-essential

# Clone repository
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb

# For stable 1.0.0 release, checkout REL1_STABLE branch:
# git checkout REL1_STABLE

# Build API
cd NeuronDesktop/api
go build -o neurondesk-api ./cmd/server

# Build Frontend
cd ../frontend
npm install
npm run build

# Run API
cd ../api
./neurondesk-api --config configs/config.yaml.example

# Run Frontend (in another terminal)
cd ../frontend
npm run start`}
        />

        <p>
          After building NeuronDesktop, configure it to connect to your NeuronDB, NeuronAgent, and NeuronMCP instances. See the <a href="/docs/neurondesktop/getting-started/profiles">Profile Configuration Guide</a> for details.
        </p>
      </section>

      <section id="next-steps">
        <h2>Next Steps</h2>
        <p>After installation, use these guides:</p>
        <ul>
          <li>
            <a href="/docs/neurondesktop/getting-started/profiles">Profile Configuration</a> - Create and manage profiles for multiple environments
          </li>
          <li>
            <a href="/docs/neurondesktop/features">Features Documentation</a> - Complete feature reference for dashboard, console, and management
          </li>
          <li>
            <a href="/docs/neurondb">NeuronDB Documentation</a> - Vector search, ML inference, and RAG pipelines
          </li>
          <li>
            <a href="/docs/neuronagent">NeuronAgent Documentation</a> - AI agent runtime with REST API and WebSocket
          </li>
          <li>
            <a href="/docs/neuronmcp">NeuronMCP Documentation</a> - MCP server with 100+ tools
          </li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
