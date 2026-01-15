import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NeuronDesktop Documentation | Unified Web Interface for NeuronDB Ecosystem',
  description: 'NeuronDesktop is a unified web interface providing a single dashboard for managing and interacting with MCP servers, NeuronDB, and NeuronAgent. Real-time WebSocket communication, secure authentication, comprehensive logging, and built-in metrics collection.',
  keywords: [
    'NeuronDesktop',
    'unified web interface',
    'NeuronDB dashboard',
    'agent management UI',
    'MCP console',
    'web interface postgresql',
    'NeuronDesktop setup',
    'dashboard configuration',
    'profile management',
    'real-time monitoring',
    'web UI postgresql',
    'agent console',
    'vector search UI',
    'database management UI'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondesktop',
  },
  openGraph: {
    title: 'NeuronDesktop Documentation | Unified Web Interface',
    description: 'Unified web interface for managing the NeuronDB ecosystem with real-time monitoring and comprehensive management.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neurondesktop',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'key-features', title: 'Key Features' },
  { id: 'core-capabilities', title: 'Core Capabilities' },
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'documentation', title: 'Documentation' },
]

const prevLink: NavLink | undefined = undefined
const nextLink: NavLink = {
  href: '/docs/neurondesktop/getting-started',
  label: 'Getting Started',
}

export default function NeuronDesktopDocsPage() {
  return (
    <PostgresDocsLayout
      title="NeuronDesktop Documentation"
      version="NeuronDesktop Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        
        <p>
          NeuronDesktop is a unified web interface providing a single dashboard for managing and interacting with MCP servers, NeuronDB, and NeuronAgent. It offers real-time WebSocket communication, secure authentication, comprehensive logging, and built-in metrics collection.
        </p>

        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#fbbf24' }}>🎯 What You Can Build</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Complete management interface for your NeuronDB ecosystem</li>
            <li>Real-time monitoring and query execution through web UI</li>
            <li>Agent management with session monitoring and performance analytics</li>
            <li>MCP tool testing and resource browsing</li>
            <li>Vector search and index management through intuitive interface</li>
          </ul>
        </div>
      </section>

      <section id="key-features">
        <h2>Key Features</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>🖥️ Unified Dashboard</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Single interface for managing all NeuronDB ecosystem components with profile-based configuration.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>⚡ Real-Time Updates</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              WebSocket support for live updates, streaming responses, and instant feedback.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>🗄️ NeuronDB Management</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Browse tables, run queries, manage indexes, and perform vector searches through intuitive UI.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>🤖 Agent Management</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Create agents, view sessions, monitor performance, and test agent interactions.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>🔌 MCP Integration</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Full MCP server integration and testing through the web interface.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>📊 Metrics & Monitoring</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Built-in metrics collection, health checks, and performance dashboards.
            </p>
          </div>
        </div>
      </section>

      <section id="core-capabilities">
        <h2>Core Capabilities</h2>

        <h3>Unified Interface</h3>
        <ul>
          <li><strong>Single Dashboard</strong> - Single dashboard for all NeuronDB ecosystem components</li>
          <li><strong>Profile Management</strong> - Multiple profile support for different environments</li>
          <li><strong>Real-Time Updates</strong> - Real-time updates via WebSocket</li>
          <li><strong>Modern UI</strong> - Modern, responsive design with smooth animations</li>
        </ul>

        <h3>MCP Console</h3>
        <ul>
          <li><strong>Tool Inspection</strong> - Inspect MCP server tools</li>
          <li><strong>Tool Testing</strong> - Test tools directly from the UI</li>
          <li><strong>Real-Time Communication</strong> - WebSocket support for real-time tool calling</li>
          <li><strong>Response Viewing</strong> - View tool responses in real-time</li>
          <li><strong>Tool Discovery</strong> - Discover available tools</li>
        </ul>

        <h3>NeuronDB Console</h3>
        <ul>
          <li><strong>Collection Management</strong> - View and manage collections</li>
          <li><strong>Vector Search</strong> - Perform vector searches</li>
          <li><strong>Index Management</strong> - View and manage indexes</li>
          <li><strong>SQL Console</strong> - Execute SQL queries (SELECT only)</li>
          <li><strong>Schema Browsing</strong> - Browse database schemas</li>
        </ul>

        <h3>Agent Management</h3>
        <ul>
          <li><strong>Agent Creation</strong> - Create and configure agents</li>
          <li><strong>Session Management</strong> - Manage agent sessions</li>
          <li><strong>Message History</strong> - View conversation history</li>
          <li><strong>Real-Time Chat</strong> - Real-time chat interface</li>
          <li><strong>Streaming Responses</strong> - Stream agent responses</li>
        </ul>

        <h3>Integration Features</h3>
        <ul>
          <li><strong>NeuronMCP Integration</strong> - Spawns NeuronMCP server processes, handles JSON-RPC 2.0 protocol</li>
          <li><strong>NeuronAgent Integration</strong> - Proxies REST API and WebSocket connections</li>
          <li><strong>NeuronDB Integration</strong> - Direct database access for queries and management</li>
        </ul>

        <h3>Metrics & Monitoring</h3>
        <ul>
          <li><strong>Metrics Dashboard</strong> - Real-time metrics collection with charts and graphs</li>
          <li><strong>Health Checks</strong> - Automatic health checks for all components</li>
          <li><strong>Query Performance</strong> - Query performance charts and latency analysis</li>
          <li><strong>Request Analytics</strong> - Request rate, latency, error rate tracking</li>
        </ul>

        <h3>Logging & Analytics</h3>
        <ul>
          <li><strong>Request/Response Logging</strong> - Detailed logging with analytics and search</li>
          <li><strong>Structured Logging</strong> - Structured logging with search and filtering</li>
          <li><strong>Error Tracking</strong> - Error tracking and alerting with historical analysis</li>
          <li><strong>Live Log Streaming</strong> - Real-time log streaming from all components</li>
        </ul>
      </section>

      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>Install and configure NeuronDesktop, set up profiles, and connect to your NeuronDB ecosystem.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <Link
            href="/docs/neurondesktop/getting-started"
            className="block rounded-lg border border-slate-700 bg-slate-900/60 p-6 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400 transition-colors"
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#fbbf24' }}>🚀 Getting Started</h3>
            <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Installation guide and quick start for NeuronDesktop
            </p>
          </Link>

          <Link
            href="/docs/neurondesktop/getting-started/profiles"
            className="block rounded-lg border border-slate-700 bg-slate-900/60 p-6 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400 transition-colors"
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#fbbf24' }}>⚙️ Profile Configuration</h3>
            <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Create and manage profiles for multiple environments
            </p>
          </Link>

          <Link
            href="/docs/neurondesktop/features"
            className="block rounded-lg border border-slate-700 bg-slate-900/60 p-6 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400 transition-colors"
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#fbbf24' }}>📋 Features</h3>
            <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Complete feature reference for dashboard and management
            </p>
          </Link>
        </div>
      </section>

      <section id="documentation">
        <h2>Documentation Library</h2>

        <h3>Dashboard Overview</h3>
        <ul>
          <li><strong>Dashboard Features</strong> - Real-time component status, quick actions, metric summaries, and activity feed</li>
          <li><strong>Profile Management</strong> - Multiple environment support with profile-based configuration and auto-detection</li>
          <li><strong>Quick Actions</strong> - Common tasks accessible directly from the dashboard with one-click actions</li>
          <li><strong>Health Monitoring</strong> - System health indicators and component status monitoring</li>
        </ul>

        <h3>NeuronDB Management</h3>
        <ul>
          <li><strong>Query Editor</strong> - SQL query editor with syntax highlighting and result visualization</li>
          <li><strong>Table Browser</strong> - Browse database tables with schema information and data preview</li>
          <li><strong>Index Management</strong> - Create, monitor, and manage vector indexes (HNSW, IVF) with performance metrics</li>
          <li><strong>Vector Search</strong> - Perform vector searches with query builder and result visualization</li>
        </ul>

        <h3>Agent Management</h3>
        <ul>
          <li><strong>Agent Creation</strong> - Create and configure agents through the web interface with visual tools</li>
          <li><strong>Session Management</strong> - View and manage agent sessions with message history and context viewing</li>
          <li><strong>Message Viewer</strong> - View agent messages with context, tool executions, and response streaming</li>
          <li><strong>Performance Analytics</strong> - Monitor agent performance with analytics, latency metrics, and success rates</li>
        </ul>

        <h3>MCP Integration</h3>
        <ul>
          <li><strong>MCP Inspector</strong> - Tool listing, inspection, and execution with argument validation</li>
          <li><strong>Resource Browser</strong> - Browse MCP resources (schema, models, indexes, stats) with real-time updates</li>
          <li><strong>Protocol Viewer</strong> - View MCP protocol messages, requests, and responses for debugging</li>
          <li><strong>Tool Testing</strong> - Test MCP tools with custom arguments and view execution results</li>
        </ul>

        <h3>Metrics & Monitoring</h3>
        <ul>
          <li><strong>Metrics Dashboard</strong> - Real-time metrics collection with charts, graphs, and performance indicators</li>
          <li><strong>Health Checks</strong> - Automatic health checks for all components with status indicators</li>
          <li><strong>Query Performance</strong> - Query performance charts, latency analysis, and resource utilization graphs</li>
          <li><strong>Request Analytics</strong> - Request rate, latency, error rate tracking with detailed breakdowns</li>
        </ul>

        <h3>Logging & Analytics</h3>
        <ul>
          <li><strong>Request/Response Logging</strong> - Detailed request and response logging with analytics and search capabilities</li>
          <li><strong>Structured Logging</strong> - Structured logging with search, filtering, and export capabilities</li>
          <li><strong>Error Tracking</strong> - Error tracking and alerting with historical log analysis</li>
          <li><strong>Live Log Streaming</strong> - Real-time log streaming from all components with live updates</li>
        </ul>

        <h3>Settings & Configuration</h3>
        <ul>
          <li><strong>Profile Settings</strong> - Manage profiles, connection strings, and environment variables</li>
          <li><strong>Authentication</strong> - API key management, authentication setup, and access control configuration</li>
          <li><strong>Preferences</strong> - Theme customization, logging preferences, and export/import settings</li>
          <li><strong>Connection Management</strong> - Manage database connections, API endpoints, and connection pooling</li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
