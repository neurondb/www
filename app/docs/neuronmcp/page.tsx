import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'Getting Started with NeuronMCP | MCP Server Installation Guide',
  description: 'NeuronMCP installation guide. Deploy the Model Context Protocol server with 100+ tools for MCP-compatible clients like Claude Desktop.',
  keywords: [
    'NeuronMCP installation',
    'MCP server postgresql',
    'MCP server setup',
    'Claude Desktop MCP',
    'Model Context Protocol',
    'MCP tools postgresql',
    'NeuronMCP quick start',
    'MCP server configuration',
    'MCP protocol server',
    'MCP integration',
    'anthropic MCP',
    'MCP client setup',
    'JSON-RPC MCP',
    'MCP resources',
    'MCP tools catalog'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronmcp',
  },
  openGraph: {
    title: 'Getting Started with NeuronMCP | MCP Server Installation',
    description: 'NeuronMCP installation guide. Connect Claude Desktop to NeuronDB with 100+ MCP tools.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neuronmcp',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'choose-your-path', title: 'Choose Your Path' },
  { id: 'docker-quickstart', title: 'Docker Quick Start' },
  { id: 'claude-desktop-setup', title: 'Claude Desktop Setup' },
  { id: 'source-build', title: 'Source Build (Advanced)' },
  { id: 'next-steps', title: 'Next Steps' },
]

const prevLink: NavLink | undefined = undefined
const nextLink: NavLink = {
  href: '/docs/neuronmcp/getting-started/claude-desktop',
  label: 'Claude Desktop Setup',
}

export default function NeuronMCPDocsPage() {
  return (
    <PostgresDocsLayout
      title="Getting Started with NeuronMCP"
      version="NeuronMCP Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#fbbf24' }}>📌 Branch & Version Selection</h3>
          <p style={{ marginBottom: '1rem' }}>
            NeuronMCP has three branches with different versions. Choose based on your needs:
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
          NeuronMCP is a Model Context Protocol (MCP) server providing comprehensive tools and resources for MCP-compatible clients to interact with NeuronDB. It includes:
        </p>
        <ul>
          <li><strong>MCP Protocol Server</strong> - Full JSON-RPC 2.0 implementation with stdio, HTTP, and SSE transport</li>
          <li><strong>100+ Tools</strong> - 27 PostgreSQL administration tools + 70+ NeuronDB tools for vector operations, ML, RAG, and dataset loading</li>
          <li><strong>Resource Provider</strong> - Schema, models, indexes, config, workers, and stats with real-time subscriptions</li>
          <li><strong>Enterprise Features</strong> - Middleware, authentication, caching, metrics, webhooks, and resilience</li>
        </ul>
        <p>
          <strong>What you can build:</strong> Connect Claude Desktop and other MCP clients to NeuronDB for vector search, ML training, RAG pipelines, and complete database management - all through the MCP protocol.
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
                  <a href="/docs/neuronmcp/getting-started/claude-desktop">Claude Desktop Setup</a>
                </strong>
              </td>
              <td style={{ padding: '0.75rem' }}>Connect Claude Desktop to NeuronDB</td>
              <td style={{ padding: '0.75rem' }}>5 minutes</td>
              <td style={{ padding: '0.75rem' }}>⭐ Easy</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>
                <strong>
                  <a href="/docs/neuronmcp/getting-started/installation">Docker Installation</a>
                </strong>
              </td>
              <td style={{ padding: '0.75rem' }}>Complete setup with Docker Compose</td>
              <td style={{ padding: '0.75rem' }}>5 minutes</td>
              <td style={{ padding: '0.75rem' }}>⭐ Easy</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}>
                <strong>
                  <a href="/docs/neuronmcp/setup">Source Build</a>
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
            <strong>💡 Note:</strong> Using Claude Desktop? Start with <a href="/docs/neuronmcp/getting-started/claude-desktop" style={{ color: '#fbbf24' }}>Claude Desktop Setup</a> for the fastest integration. 
            For Docker deployment, use <a href="/docs/neuronmcp/getting-started/installation" style={{ color: '#fbbf24' }}>Docker Installation</a>. 
            Production deployments should use <a href="/docs/neuronmcp/setup" style={{ color: '#fbbf24' }}>Source Build</a>.
          </p>
        </div>
      </section>

      <section id="docker-quickstart">
        <h2>Docker Quick Start</h2>
        <p>
          Complete NeuronMCP setup running in under 5 minutes with Docker Compose. This method includes NeuronMCP server with NeuronDB integration.
        </p>

        <BashCodeBlock
          title="Start NeuronMCP with Docker Compose"
          code={`# Clone repository (main branch = 3.0.0-devel)
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb

# For stable 1.0.0 release, checkout REL1_STABLE branch:
# git checkout REL1_STABLE

# Start NeuronMCP with NeuronDB
docker compose up -d neuronmcp neurondb

# Verify services
docker compose ps

# Test MCP server (stdio mode)
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}}}' | ./NeuronMCP/bin/neuronmcp`}
        />

        <p>This starts:</p>
        <ul>
          <li>NeuronMCP (MCP server) with stdio, HTTP, and SSE transport</li>
          <li>NeuronDB (PostgreSQL with extension) on port 5433</li>
          <li>100+ MCP tools available for clients</li>
          <li>Resource provider for schema, models, and indexes</li>
        </ul>

        <p>
          <strong>
            <a href="/docs/neuronmcp/getting-started/claude-desktop">Continue to Claude Desktop Setup →</a>
          </strong>
        </p>
      </section>

      <section id="claude-desktop-setup">
        <h2>Claude Desktop Setup</h2>
        <p>
          Connect Claude Desktop to NeuronMCP to access 100+ tools for vector search, ML training, RAG pipelines, and PostgreSQL administration.
        </p>

        <BashCodeBlock
          title="Configure Claude Desktop"
          code={`# Edit Claude Desktop configuration
# macOS: ~/Library/Application Support/Claude/claude_desktop_config.json
# Windows: %APPDATA%\\Claude\\claude_desktop_config.json

{
  "mcpServers": {
    "neurondb": {
      "command": "neuronmcp",
      "args": ["--transport", "stdio"],
      "env": {
        "DB_HOST": "localhost",
        "DB_PORT": "5433",
        "DB_NAME": "neurondb",
        "DB_USER": "postgres",
        "DB_PASSWORD": "postgres"
      }
    }
  }
}`}
        />

        <p>After configuration:</p>
        <ol>
          <li>Restart Claude Desktop</li>
          <li>NeuronMCP tools will be available in Claude Desktop</li>
          <li>Use tools for vector search, ML training, RAG, and database management</li>
        </ol>

        <p>
          See the <a href="/docs/neuronmcp/getting-started/claude-desktop">Claude Desktop Setup Guide</a> for detailed configuration instructions.
        </p>
      </section>

      <section id="source-build">
        <h2>Source Build (Advanced)</h2>
        <p>
          For production deployments or custom builds, install from source. This requires Go 1.21+, PostgreSQL 16-18 with NeuronDB extension, and build dependencies.
        </p>
        <p>
          See the <a href="/docs/neuronmcp/setup">Setup Guide</a> for detailed platform-specific instructions and configuration schema setup.
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

# Build NeuronMCP
cd NeuronMCP
go build -o neuronmcp ./cmd/server

# Run setup script to configure database schema
./scripts/neuronmcp-setup.sh

# Run NeuronMCP server
./neuronmcp --transport stdio`}
        />

        <p>
          After building NeuronMCP, configure it to connect to your NeuronDB instance and set up the configuration schema. See the <a href="/docs/neuronmcp/setup">Setup Guide</a> for complete instructions.
        </p>
      </section>

      <section id="next-steps">
        <h2>Next Steps</h2>
        <p>After installation, use these guides:</p>
        <ul>
          <li>
            <a href="/docs/neuronmcp/getting-started/claude-desktop">Claude Desktop Setup</a> - Configure Claude Desktop to connect to NeuronMCP
          </li>
          <li>
            <a href="/docs/neuronmcp/tools">Tool Catalog</a> - Browse all 100+ available MCP tools
          </li>
          <li>
            <a href="/docs/neuronmcp/features">Features Documentation</a> - Complete feature reference for MCP protocol and tools
          </li>
          <li>
            <a href="/docs/neuronmcp/setup">Setup Guide</a> - Complete configuration schema and setup instructions
          </li>
          <li>
            <a href="/docs/neurondb">NeuronDB Documentation</a> - Vector search, ML inference, and RAG pipelines
          </li>
          <li>
            <a href="https://github.com/neurondb-ai/neurondb/tree/main/examples/mcp-integration">MCP Integration Example</a> - Complete example showing Claude Desktop configuration
          </li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
