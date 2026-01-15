import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'NeuronAgent Installation | Docker and Source Build Guide',
  description: 'NeuronAgent installation guide: Deploy with Docker or build from source. Complete setup instructions for PostgreSQL AI agent runtime.',
  keywords: [
    'NeuronAgent installation',
    'agent runtime installation',
    'Docker neuronagent',
    'source build neuronagent',
    'agent runtime setup'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent/getting-started/installation',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'docker-installation', title: 'Docker Installation' },
  { id: 'source-build', title: 'Source Build' },
  { id: 'configuration', title: 'Configuration' },
  { id: 'verification', title: 'Verification' },
]

const prevLink: NavLink = {
  href: '/docs/neuronagent/getting-started',
  label: 'Getting Started',
}
const nextLink: NavLink = {
  href: '/docs/neuronagent/getting-started/quickstart',
  label: 'Quick Start',
}

export default function NeuronAgentInstallation() {
  return (
    <PostgresDocsLayout
      title="NeuronAgent Installation"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="docker-installation">
        <h2>Docker Installation</h2>
        <p>
          The fastest way to get NeuronAgent running is with Docker Compose. This method includes NeuronAgent with NeuronDB integration.
        </p>

        <BashCodeBlock
          title="Start NeuronAgent with Docker Compose"
          code={`# Clone repository
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb

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
      </section>

      <section id="source-build">
        <h2>Source Build</h2>
        <p>
          For production deployments or custom builds, install from source. This requires Go 1.21+, PostgreSQL 16-18 with NeuronDB extension, and build dependencies.
        </p>

        <BashCodeBlock
          title="Build from source (Ubuntu/Debian)"
          code={`# Install dependencies
sudo apt-get install -y postgresql-17 postgresql-server-dev-17 build-essential golang-go

# Clone repository
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb

# Build NeuronAgent
cd NeuronAgent
go build -o neuronagent ./cmd/server

# Run NeuronAgent
./neuronagent --config configs/config.yaml.example`}
        />
      </section>

      <section id="configuration">
        <h2>Configuration</h2>
        <p>
          Configure NeuronAgent to connect to your NeuronDB instance. See the <a href="/docs/neuronagent/getting-started/configuration">Configuration Guide</a> for detailed instructions.
        </p>
      </section>

      <section id="verification">
        <h2>Verification</h2>
        <p>
          Verify NeuronAgent is running correctly:
        </p>

        <BashCodeBlock
          title="Check health endpoint"
          code={`curl -sS http://localhost:8080/health

# Expected output: {"status":"ok"}`}
        />
      </section>

    </PostgresDocsLayout>
  )
}
