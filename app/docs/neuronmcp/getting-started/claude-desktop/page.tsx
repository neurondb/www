import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'NeuronMCP Claude Desktop Setup | Connect Claude Desktop to NeuronDB',
  description: 'Configure Claude Desktop to connect to NeuronMCP server. Step-by-step guide for setting up MCP integration with Claude Desktop.',
  keywords: [
    'Claude Desktop MCP',
    'MCP Claude Desktop setup',
    'Claude Desktop configuration',
    'MCP server Claude Desktop',
    'anthropic MCP',
    'Claude Desktop integration'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronmcp/getting-started/claude-desktop',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'configuration', title: 'Configuration' },
  { id: 'verification', title: 'Verification' },
  { id: 'usage', title: 'Usage' },
]

const prevLink: NavLink = {
  href: '/docs/neuronmcp/getting-started/installation',
  label: 'Installation',
}
const nextLink: NavLink | undefined = undefined

export default function NeuronMCPClaudeDesktop() {
  return (
    <PostgresDocsLayout
      title="Claude Desktop Setup"
      version="NeuronMCP Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          Connect Claude Desktop to NeuronMCP to access 100+ tools for vector search, ML training, RAG pipelines, and PostgreSQL administration.
        </p>
      </section>

      <section id="configuration">
        <h2>Configuration</h2>
        <p>
          Edit Claude Desktop configuration file:
        </p>
        <ul>
          <li><strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
          <li><strong>Windows:</strong> <code>%APPDATA%\Claude\claude_desktop_config.json</code></li>
        </ul>

        <BashCodeBlock
          title="Claude Desktop Configuration"
          code={`{
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

        <p>
          After configuration:
        </p>
        <ol>
          <li>Restart Claude Desktop</li>
          <li>NeuronMCP tools will be available in Claude Desktop</li>
          <li>Use tools for vector search, ML training, RAG, and database management</li>
        </ol>
      </section>

      <section id="verification">
        <h2>Verification</h2>
        <p>
          Verify the connection:
        </p>
        <ul>
          <li>Check Claude Desktop shows NeuronMCP server in MCP settings</li>
          <li>Verify tools are listed and accessible</li>
          <li>Test a simple tool call (e.g., list databases)</li>
        </ul>
      </section>

      <section id="usage">
        <h2>Usage</h2>
        <p>
          Once connected, you can use NeuronMCP tools in Claude Desktop:
        </p>
        <ul>
          <li>Vector search: "Search for similar vectors using the vector_search tool"</li>
          <li>ML training: "Train a classification model using the train_model tool"</li>
          <li>RAG operations: "Process documents and build a RAG pipeline"</li>
          <li>Database management: "List all tables in the database"</li>
        </ul>
        <p>
          See the <a href="/docs/neuronmcp/tools">Tool Catalog</a> for complete list of available tools.
        </p>
      </section>

    </PostgresDocsLayout>
  )
}
