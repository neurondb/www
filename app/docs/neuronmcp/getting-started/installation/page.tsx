import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'NeuronMCP Installation | Docker and Source Build Guide',
  description: 'NeuronMCP installation guide: Deploy with Docker or build from source. Complete setup instructions for MCP server.',
  keywords: [
    'NeuronMCP installation',
    'MCP server installation',
    'Docker neuronmcp',
    'source build neuronmcp',
    'MCP server setup'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronmcp/getting-started/installation',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'docker-installation', title: 'Docker Installation' },
  { id: 'source-build', title: 'Source Build' },
  { id: 'configuration', title: 'Configuration' },
  { id: 'verification', title: 'Verification' },
]

const prevLink: NavLink = {
  href: '/docs/neuronmcp/getting-started',
  label: 'Getting Started',
}
const nextLink: NavLink = {
  href: '/docs/neuronmcp/getting-started/claude-desktop',
  label: 'Claude Desktop Setup',
}

export default function NeuronMCPInstallation() {
  return (
    <PostgresDocsLayout
      title="NeuronMCP Installation"
      version="NeuronMCP Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="docker-installation">
        <h2>Docker Installation</h2>
        <p>
          The fastest way to get NeuronMCP running is with Docker Compose.
        </p>

        <BashCodeBlock
          title="Start NeuronMCP with Docker Compose"
          code={`# Clone repository
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb

# Start NeuronMCP with NeuronDB
docker compose up -d neuronmcp neurondb

# Verify services
docker compose ps`}
        />
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

# Build NeuronMCP
cd NeuronMCP
go build -o neuronmcp ./cmd/server

# Run setup script to configure database schema
./scripts/neuronmcp-setup.sh

# Run NeuronMCP server
./neuronmcp --transport stdio`}
        />
      </section>

      <section id="configuration">
        <h2>Configuration</h2>
        <p>
          Configure NeuronMCP to connect to your NeuronDB instance and set up the configuration schema. See the <a href="/docs/neuronmcp/setup">Setup Guide</a> for complete instructions.
        </p>
      </section>

      <section id="verification">
        <h2>Verification</h2>
        <p>
          Verify NeuronMCP is running correctly:
        </p>

        <BashCodeBlock
          title="Test MCP server"
          code={`# Test stdio mode
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}}}' | ./neuronmcp`}
        />
      </section>

    </PostgresDocsLayout>
  )
}
