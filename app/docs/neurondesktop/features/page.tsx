import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'NeuronDesktop Features | Complete Feature Reference',
  description: 'Complete feature reference for NeuronDesktop: unified dashboard, MCP console, NeuronDB management, agent management, metrics & monitoring, and logging & analytics.',
  keywords: [
    'NeuronDesktop features',
    'unified dashboard',
    'MCP console',
    'agent management UI',
    'vector search UI',
    'database management UI',
    'real-time monitoring'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondesktop/features',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'unified-interface', title: 'Unified Interface' },
  { id: 'mcp-console', title: 'MCP Console' },
  { id: 'neurondb-console', title: 'NeuronDB Console' },
  { id: 'agent-management', title: 'Agent Management' },
  { id: 'metrics', title: 'Metrics & Monitoring' },
  { id: 'logging', title: 'Logging & Analytics' },
]

const prevLink: NavLink = {
  href: '/docs/neurondesktop',
  label: 'NeuronDesktop Documentation',
}
const nextLink: NavLink | undefined = undefined

export default function NeuronDesktopFeatures() {
  return (
    <PostgresDocsLayout
      title="NeuronDesktop Features"
      version="NeuronDesktop Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="unified-interface">
        <h2>Unified Interface</h2>
        <ul>
          <li><strong>Single Dashboard</strong> - Single dashboard for all NeuronDB ecosystem components</li>
          <li><strong>Profile Management</strong> - Multiple profile support for different environments</li>
          <li><strong>Real-Time Updates</strong> - Real-time updates via WebSocket</li>
          <li><strong>Modern UI</strong> - Modern, responsive design with smooth animations</li>
        </ul>
      </section>

      <section id="mcp-console">
        <h2>MCP Console</h2>
        <ul>
          <li><strong>Tool Inspection</strong> - Inspect MCP server tools</li>
          <li><strong>Tool Testing</strong> - Test tools directly from the UI</li>
          <li><strong>Real-Time Communication</strong> - WebSocket support for real-time tool calling</li>
          <li><strong>Response Viewing</strong> - View tool responses in real-time</li>
          <li><strong>Tool Discovery</strong> - Discover available tools</li>
        </ul>
      </section>

      <section id="neurondb-console">
        <h2>NeuronDB Console</h2>
        <ul>
          <li><strong>Collection Management</strong> - View and manage collections</li>
          <li><strong>Vector Search</strong> - Perform vector searches</li>
          <li><strong>Index Management</strong> - View and manage indexes</li>
          <li><strong>SQL Console</strong> - Execute SQL queries (SELECT only)</li>
          <li><strong>Schema Browsing</strong> - Browse database schemas</li>
        </ul>
      </section>

      <section id="agent-management">
        <h2>Agent Management</h2>
        <ul>
          <li><strong>Agent Creation</strong> - Create and configure agents</li>
          <li><strong>Session Management</strong> - Manage agent sessions</li>
          <li><strong>Message History</strong> - View conversation history</li>
          <li><strong>Real-Time Chat</strong> - Real-time chat interface</li>
          <li><strong>Streaming Responses</strong> - Stream agent responses</li>
        </ul>
      </section>

      <section id="metrics">
        <h2>Metrics & Monitoring</h2>
        <ul>
          <li><strong>Metrics Dashboard</strong> - Real-time metrics collection with charts, graphs, and performance indicators</li>
          <li><strong>Health Checks</strong> - Automatic health checks for all components with status indicators</li>
          <li><strong>Query Performance</strong> - Query performance charts, latency analysis, and resource utilization graphs</li>
          <li><strong>Request Analytics</strong> - Request rate, latency, error rate tracking with detailed breakdowns</li>
        </ul>
      </section>

      <section id="logging">
        <h2>Logging & Analytics</h2>
        <ul>
          <li><strong>Request/Response Logging</strong> - Detailed request and response logging with analytics and search capabilities</li>
          <li><strong>Structured Logging</strong> - Structured logging with search, filtering, and export capabilities</li>
          <li><strong>Error Tracking</strong> - Error tracking and alerting with historical log analysis</li>
          <li><strong>Live Log Streaming</strong> - Real-time log streaming from all components with live updates</li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
