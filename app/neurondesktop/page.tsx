import React from 'react';
import Link from 'next/link';
import ProductPageTemplate from '@/components/templates/ProductPageTemplate';
import ProductDashboardDemo from '@/components/product/ProductDashboardDemo';
import { generateDocsMetadata } from '@/config/products';
import { Monitor, Server, Bot, Database, LineChart, Settings, Shield } from 'lucide-react';

export const metadata = generateDocsMetadata('neurondesktop', 'NeuronDesktop: Unified Web Interface');

const neurondesktopDashboardTabs = [
  {
    id: 'dashboard',
    label: 'Unified Dashboard',
    iconName: 'Monitor',
    heading: 'Single interface',
    description: 'Manage all NeuronDB components from one place',
    codeLabel: 'UI',
    code: `// Dashboard features:\n\n- Real-time component status\n- Quick actions for common tasks\n- Metric summaries and charts\n- Recent activity feed\n- System health indicators\n\n// Profile-based configuration:\n- Multiple environment support\n- Auto-detection of components\n- Custom connection strings\n- Environment variables`,
    footerHref: '/neurondesktop',
    footerLabel: 'Dashboard Docs',
    results: [
      { id: 1, text: 'NeuronDB: connected, 12 active queries', category: 'status' },
      { id: 2, text: 'NeuronAgent: running, 4 agents active', category: 'status' },
      { id: 3, text: 'NeuronMCP: listening on port 8080', category: 'status' },
      { id: 4, text: 'System health: all components healthy', category: 'health' },
      { id: 5, text: 'Recent activity: 1,247 operations today', category: 'activity' },
    ],
  },
  {
    id: 'neurondb',
    label: 'NeuronDB Manager',
    iconName: 'Database',
    heading: 'Database management',
    description: 'Browse tables, run queries, manage indexes',
    codeLabel: 'UI',
    code: `// NeuronDB management features:\n\n- Query editor with syntax highlighting\n- Table browser with schema info\n- Index management and monitoring\n- Vector search testing\n- Extension management\n- Performance metrics\n- Connection pool monitoring`,
    footerHref: '/neurondesktop',
    footerLabel: 'NeuronDB Manager Docs',
    results: [
      { id: 1, text: 'embeddings: 1.2M rows, HNSW index active', category: 'table' },
      { id: 2, text: 'documents: 45K rows, vector(384) column', category: 'table' },
      { id: 3, text: 'users: 12K rows, full-text search enabled', category: 'table' },
      { id: 4, text: 'Indexes: 8 active, avg query time 8.2ms', category: 'index' },
      { id: 5, text: 'Connections: 12/100 active, pool healthy', category: 'connection' },
    ],
  },
  {
    id: 'agents',
    label: 'Agent Interface',
    iconName: 'Bot',
    heading: 'Agent management',
    description: 'Create agents, view sessions, monitor performance',
    codeLabel: 'UI',
    code: `// Agent management features:\n\n- Create and configure agents\n- Session management and history\n- Message viewer with context\n- Tool execution logs\n- Memory search interface\n- Performance analytics\n- Real-time chat testing`,
    footerHref: '/neurondesktop',
    footerLabel: 'Agent Manager Docs',
    results: [
      { id: 1, text: 'support-agent: active, 89 sessions', category: 'agent' },
      { id: 2, text: 'sales-agent: active, 124 sessions', category: 'agent' },
      { id: 3, text: 'Total messages: 12,456, Avg response: 342ms', category: 'stats' },
      { id: 4, text: 'Tool executions: 8,234, Success: 99.8%', category: 'tools' },
      { id: 5, text: 'Memory searches: 1,247, Avg latency: 8.2ms', category: 'memory' },
    ],
  },
  {
    id: 'mcp',
    label: 'MCP Inspector',
    iconName: 'Server',
    heading: 'MCP server testing',
    description: 'Test tools, browse resources, monitor protocol',
    codeLabel: 'UI',
    code: `// MCP inspector features:\n\n- Tool listing and inspection\n- Tool execution with arguments\n- Resource browser\n- Protocol message viewer\n- Request/response logging\n- Performance metrics\n- Error tracking and debugging`,
    footerHref: '/neurondesktop',
    footerLabel: 'MCP Inspector Docs',
    results: [
      { id: 1, text: 'vector_search: called 1,247 times, avg 8.2ms', category: 'tool' },
      { id: 2, text: 'ml_predict: called 342 times, avg 12.5ms', category: 'tool' },
      { id: 3, text: 'rag_query: called 89 times, avg 245ms', category: 'tool' },
      { id: 4, text: 'Resources: 12 available, 5 accessed today', category: 'resource' },
      { id: 5, text: 'Protocol: 2,456 messages, 0 errors', category: 'protocol' },
    ],
  },
  {
    id: 'metrics',
    label: 'Metrics Dashboard',
    iconName: 'LineChart',
    heading: 'Real-time monitoring',
    description: 'System metrics, query performance, health checks',
    codeLabel: 'UI',
    code: `// Metrics dashboard features:\n\n- Real-time metrics collection\n- Query performance charts\n- Resource utilization graphs\n- Request rate and latency\n- Error rate tracking\n- Health check status\n- Custom metric widgets`,
    footerHref: '/neurondesktop',
    footerLabel: 'Metrics Docs',
    results: [
      { id: 1, text: 'QPS: 8.2k, P95 latency: 12.5ms', category: 'performance' },
      { id: 2, text: 'CPU: 45%, Memory: 2.4GB / 8GB', category: 'resources' },
      { id: 3, text: 'Error rate: 0.2%, Success: 99.8%', category: 'reliability' },
      { id: 4, text: 'Cache hit: 96.2%, Index usage: 98%', category: 'efficiency' },
      { id: 5, text: 'Uptime: 7d 14h 23m, Health: healthy', category: 'status' },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    iconName: 'Settings',
    heading: 'Configuration',
    description: 'Manage profiles, connections, and preferences',
    codeLabel: 'UI',
    code: `// Settings features:\n\n- Profile management\n- Connection configuration\n- API key management\n- Authentication setup\n- Rate limiting config\n- Logging preferences\n- Theme customization\n- Export/import settings`,
    footerHref: '/neurondesktop',
    footerLabel: 'Settings Docs',
    results: [
      { id: 1, text: 'Profiles: 3 configured, 1 active', category: 'profile' },
      { id: 2, text: 'Connections: 4 databases, all healthy', category: 'connection' },
      { id: 3, text: 'API keys: 2 configured, 1 active', category: 'api' },
      { id: 4, text: 'Theme: dark mode, auto-sync enabled', category: 'preferences' },
      { id: 5, text: 'Last backup: 2h ago, Export ready', category: 'backup' },
    ],
  },
];

const neurondesktopConfig = {
  productId: 'neurondesktop' as const,
  hero: {
    subtitle: 'Unified web interface providing a single dashboard for managing and interacting with MCP servers, NeuronDB, and NeuronAgent. Real-time WebSocket communication, secure API key authentication, logging, and built-in metrics collection.',
  },
  demo: null,
  badges: [
    'Unified Dashboard',
    'Real-time Updates',
    'MCP Integration',
    'Agent Management',
    'Metrics & Logging',
    'Professional UI',
  ],
  componentCards: [],
  architecture: {
    title: 'Architecture',
    subtitle: 'Unified web interface architecture with MCP proxy, NeuronDB client, and Agent client integration',
    content: (
      <div className="w-full max-w-full bg-slate-900/60 rounded-lg p-8 border border-slate-700">
        <div className="space-y-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="bg-slate-800/60 rounded-lg p-6 border border-slate-700 w-full">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                Frontend (Next.js)
              </h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• React + TypeScript</li>
                <li>• Real-time WebSocket</li>
                <li>• Modern responsive UI</li>
                <li>• Component-based architecture</li>
              </ul>
            </div>
            <div className="bg-slate-800/60 rounded-lg p-6 border border-slate-700 w-full">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Server className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                Backend API (Go)
              </h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• REST API + WebSocket</li>
                <li>• MCP Proxy Client</li>
                <li>• NeuronDB Client</li>
                <li>• Agent Client</li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-800/60 rounded-lg p-6 border border-slate-700 w-full">
            <h4 className="text-white font-semibold mb-3">Integration Layer</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="text-center p-4 bg-slate-900/60 rounded border border-slate-700">
                <Database className="w-8 h-8 text-yellow-400 mx-auto mb-2 flex-shrink-0" />
                <p className="text-sm text-slate-300">NeuronDB</p>
                <p className="text-xs text-slate-400 mt-1">PostgreSQL</p>
              </div>
              <div className="text-center p-4 bg-slate-900/60 rounded border border-slate-700">
                <Bot className="w-8 h-8 text-yellow-400 mx-auto mb-2 flex-shrink-0" />
                <p className="text-sm text-slate-300">NeuronAgent</p>
                <p className="text-xs text-slate-400 mt-1">HTTP API</p>
              </div>
              <div className="text-center p-4 bg-slate-900/60 rounded border border-slate-700">
                <Server className="w-8 h-8 text-yellow-400 mx-auto mb-2 flex-shrink-0" />
                <p className="text-sm text-slate-300">NeuronMCP</p>
                <p className="text-xs text-slate-400 mt-1">stdio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  dashboard: (
    <ProductDashboardDemo 
      productId="neurondesktop"
      tabs={neurondesktopDashboardTabs}
      title="NeuronDesktop Interface"
      subtitle="Unified web interface for the complete NeuronDB ecosystem"
    />
  ),
  featurePillars: {
    kicker: 'Web Interface Features',
    items: [
      { 
        title: 'Unified Dashboard', 
        desc: [
          'Single interface for managing all NeuronDB ecosystem components',
          'Profile-based configuration for multiple environments',
          'Automated setup with default profile creation',
          'Centralized settings and configuration management',
          'Environment variable support for flexible configuration'
        ]
      },
      { 
        title: 'Real-time Communication', 
        desc: [
          'WebSocket support for live updates and streaming responses',
          'Real-time metrics and monitoring',
          'Live log streaming from all components',
          'Event-driven UI updates with instant feedback'
        ]
      },
      { 
        title: 'MCP Server Integration', 
        desc: [
          'Full MCP server integration and testing',
          'Tool inspection and execution',
          'Resource browsing and management',
          'MCP protocol debugging and monitoring'
        ]
      },
      { 
        title: 'Agent Management', 
        desc: [
          'Create and manage AI agents through the UI',
          'Session management and monitoring',
          'Message history and context viewing',
          'Agent performance analytics'
        ]
      },
      { 
        title: 'Vector Search Interface', 
        desc: [
          'Perform vector searches through intuitive UI',
          'Collection and index management',
          'Query builder for complex searches',
          'Search result visualization'
        ]
      },
      { 
        title: 'Secure Authentication', 
        desc: [
          'API key-based authentication with rate limiting',
          'Role-based access control (RBAC)',
          'Secure credential management',
          'Audit logging for security compliance'
        ]
      },
      { 
        title: 'Metrics & Monitoring', 
        desc: [
          'Built-in metrics collection and health checks for all components',
          'Performance dashboards with real-time updates',
          'Request/response analytics with detailed breakdowns',
          'System resource monitoring and alerting'
        ]
      },
      { 
        title: 'Comprehensive Logging', 
        desc: [
          'Request/response logging with detailed analytics',
          'Structured logging with search and filtering capabilities',
          'Error tracking and alerting',
          'Historical log analysis with retention policies'
        ]
      },
      {
        title: 'Automated Setup',
        desc: [
          'Automated setup script for easy deployment',
          'Auto-detection of NeuronMCP binary location',
          'Default profile creation with NeuronMCP configuration',
          'Sample NeuronAgent creation when available',
          'Database migrations and verification'
        ],
      },
    ],
  },
  featureMatrix: {
    title: 'Capabilities',
    subtitle: 'Web interface features',
    content: (
    <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
      <thead className="bg-slate-800/60">
        <tr className="text-left">
          <th className="px-4 py-3 font-semibold text-white">Capability</th>
          <th className="px-4 py-3 font-semibold text-white">Description</th>
          <th className="px-4 py-3 font-semibold text-white">Performance</th>
          <th className="px-4 py-3 font-semibold text-white">Production Ready</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-700 bg-slate-800/40">
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Unified Dashboard
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Single interface for all components</td>
          <td className="px-4 py-3 text-slate-300">Real-time updates</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              WebSocket Communication
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Real-time updates and streaming</td>
          <td className="px-4 py-3 text-slate-300">Low-latency</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              MCP Integration
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Full MCP server integration</td>
          <td className="px-4 py-3 text-slate-300">Protocol compliant</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Agent Management
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Create and manage agents</td>
          <td className="px-4 py-3 text-slate-300">Full CRUD operations</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Vector Search UI
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Intuitive search interface</td>
          <td className="px-4 py-3 text-slate-300">Optimized queries</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Authentication
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">API keys, rate limiting, RBAC</td>
          <td className="px-4 py-3 text-slate-300">Secure & scalable</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Metrics & Monitoring
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Health checks, analytics</td>
          <td className="px-4 py-3 text-slate-300">Real-time dashboards</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Logging & Analytics
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Request/response logging</td>
          <td className="px-4 py-3 text-slate-300">Searchable logs</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Automated Setup
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Auto-detection, migrations, default profile</td>
          <td className="px-4 py-3 text-slate-300">One-command setup</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
      </tbody>
    </table>
  ),
  },
  ctaSection: {
    kicker: 'Get Started',
    title: 'Manage Your NeuronDB Ecosystem',
    description: 'Deploy NeuronDesktop. Unified web interface for managing NeuronDB, NeuronAgent, and NeuronMCP with real-time monitoring and analytics.',
    primaryCTA: { href: '/neurondesktop', label: 'View Documentation' },
    secondaryCTA: { href: 'https://github.com/neurondb-ai/neurondb', label: 'View on GitHub', external: true },
  },
};

export default function NeuronDesktopPage() {
  return (
    <>
      <ProductPageTemplate {...neurondesktopConfig} />
    </>
  );
}

