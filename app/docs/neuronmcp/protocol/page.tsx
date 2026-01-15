import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'MCP Protocol | JSON-RPC 2.0 Implementation | NeuronMCP',
  description: 'Model Context Protocol server with JSON-RPC 2.0 implementation, stdio/HTTP/SSE transport, batch operations, progress tracking, and tool discovery.',
  keywords: [
    'MCP protocol',
    'JSON-RPC 2.0',
    'Model Context Protocol',
    'MCP server',
    'stdio transport',
    'HTTP transport',
    'SSE transport',
    'batch operations',
    'progress tracking',
    'tool discovery'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronmcp/protocol',
  },
  openGraph: {
    title: 'MCP Protocol | JSON-RPC 2.0 Implementation',
    description: 'Model Context Protocol server with JSON-RPC 2.0 and multiple transport modes.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neuronmcp/protocol',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'json-rpc', title: 'JSON-RPC 2.0' },
  { id: 'transport', title: 'Transport Modes' },
  { id: 'batch-operations', title: 'Batch Operations' },
  { id: 'progress-tracking', title: 'Progress Tracking' },
  { id: 'tool-discovery', title: 'Tool Discovery' },
  { id: 'resources', title: 'Resources & Subscriptions' },
]

const prevLink: NavLink = {
  href: '/docs/neuronmcp',
  label: 'NeuronMCP Documentation',
}

const nextLink: NavLink = {
  href: '/docs/neuronmcp/tools',
  label: 'MCP Tools',
}

export default function MCPProtocolPage() {
  return (
    <PostgresDocsLayout
      title="MCP Protocol"
      version="NeuronMCP Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          NeuronMCP implements the Model Context Protocol (MCP) with full JSON-RPC 2.0 support,
          providing a standardized interface for MCP-compatible clients to interact with NeuronDB.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>JSON-RPC 2.0:</strong> Full protocol implementation with stdio, HTTP, and SSE transport</li>
          <li><strong>Batch Operations:</strong> Transactional batch tool calls for efficient bulk operations</li>
          <li><strong>Progress Tracking:</strong> Long-running operation progress with progress/get for monitoring</li>
          <li><strong>Tool Discovery:</strong> Search and filter tools with categorization and metadata</li>
          <li><strong>Prompts Protocol:</strong> Full prompts/list and prompts/get with template engine support</li>
          <li><strong>Sampling/Completions:</strong> sampling/createMessage with streaming support for LLM interactions</li>
        </ul>
      </section>

      <section id="json-rpc">
        <h2>JSON-RPC 2.0</h2>
        <p>
          NeuronMCP implements the JSON-RPC 2.0 specification, providing a standardized protocol
          for remote procedure calls.
        </p>

        <h3>Protocol Features</h3>
        <ul>
          <li><strong>Request/Response:</strong> Standard JSON-RPC request/response format</li>
          <li><strong>Error Handling:</strong> Comprehensive error codes and messages</li>
          <li><strong>Notifications:</strong> Support for notification messages</li>
          <li><strong>Batching:</strong> Batch request support for multiple operations</li>
        </ul>
      </section>

      <section id="transport">
        <h2>Transport Modes</h2>
        <p>
          NeuronMCP supports multiple transport modes, enabling flexible deployment and integration
          patterns.
        </p>

        <h3>stdio Transport</h3>
        <p>
          Standard input/output transport for direct process communication, ideal for local
          deployments and CLI integration.
        </p>

        <h3>HTTP Transport</h3>
        <p>
          HTTP-based transport for remote access and web integration, supporting RESTful
          API patterns.
        </p>

        <h3>SSE Transport</h3>
        <p>
          Server-Sent Events transport for real-time streaming and progress updates,
          enabling live monitoring of long-running operations.
        </p>
      </section>

      <section id="batch-operations">
        <h2>Batch Operations</h2>
        <p>
          Batch operations enable efficient bulk processing by executing multiple tool calls
          in a single transaction.
        </p>

        <h3>Batch Tool Calls</h3>
        <p>
          The <code>tools/call_batch</code> method enables transactional batch execution of
          multiple tool calls, improving efficiency and ensuring consistency.
        </p>

        <h3>Transaction Support</h3>
        <p>
          Batch operations are executed within transactions, ensuring atomicity and
          rollback on failure.
        </p>
      </section>

      <section id="progress-tracking">
        <h2>Progress Tracking</h2>
        <p>
          Progress tracking enables monitoring of long-running operations through the
          <code>progress/get</code> method.
        </p>

        <h3>Progress Updates</h3>
        <p>
          Long-running operations emit progress updates, providing visibility into
          operation status and completion.
        </p>

        <h3>Progress Monitoring</h3>
        <p>
          Clients can poll or subscribe to progress updates, enabling real-time
          monitoring of operation progress.
        </p>
      </section>

      <section id="tool-discovery">
        <h2>Tool Discovery</h2>
        <p>
          Tool discovery enables clients to search and filter available tools based on
          categories, metadata, and capabilities.
        </p>

        <h3>Tool Metadata</h3>
        <p>
          Each tool includes comprehensive metadata including name, description, parameters,
          categories, and capabilities.
        </p>

        <h3>Tool Filtering</h3>
        <p>
          Tools can be filtered by category, capability, or metadata, enabling clients to
          discover relevant tools efficiently.
        </p>
      </section>

      <section id="resources">
        <h2>Resources & Subscriptions</h2>
        <p>
          NeuronMCP provides resources and subscriptions for real-time updates on schema,
          models, indexes, configuration, workers, and statistics.
        </p>

        <h3>Resource Types</h3>
        <ul>
          <li><strong>Schema Resources:</strong> Database schema information with real-time updates</li>
          <li><strong>Model Resources:</strong> ML model information and status</li>
          <li><strong>Index Resources:</strong> Vector index configurations and statistics</li>
          <li><strong>Config Resources:</strong> Server configuration and settings</li>
          <li><strong>Worker Resources:</strong> Background worker status and metrics</li>
          <li><strong>Stats Resources:</strong> Database and system statistics with subscriptions</li>
        </ul>

        <h3>Subscriptions</h3>
        <p>
          Resources support real-time subscriptions, enabling clients to receive updates
          when resources change.
        </p>
      </section>
    </PostgresDocsLayout>
  )
}
