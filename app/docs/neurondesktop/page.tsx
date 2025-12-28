import React from 'react';
import Link from 'next/link';
import ProductPageTemplate from '@/components/templates/ProductPageTemplate';
import { generateDocsMetadata } from '@/config/products';
import { Monitor, Server, Bot, Database } from 'lucide-react';

export const metadata = generateDocsMetadata('neurondesktop', 'NeuronDesktop: Unified Web Interface');

const neurondesktopConfig = {
  productId: 'neurondesktop' as const,
  hero: {
    subtitle: 'Unified web interface providing a single dashboard for managing and interacting with MCP servers, NeuronDB, and NeuronAgent. Real-time WebSocket communication, secure API key authentication, comprehensive logging, and built-in metrics collection.',
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
      <div className="bg-slate-900/60 rounded-lg p-8 border border-slate-700">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/60 rounded-lg p-6 border border-slate-700">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-yellow-400" />
                Frontend (Next.js)
              </h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• React + TypeScript</li>
                <li>• Real-time WebSocket</li>
                <li>• Modern responsive UI</li>
                <li>• Component-based architecture</li>
              </ul>
            </div>
            <div className="bg-slate-800/60 rounded-lg p-6 border border-slate-700">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Server className="w-5 h-5 text-yellow-400" />
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
          <div className="bg-slate-800/60 rounded-lg p-6 border border-slate-700">
            <h4 className="text-white font-semibold mb-3">Integration Layer</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-900/60 rounded border border-slate-700">
                <Database className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300">NeuronDB</p>
                <p className="text-xs text-slate-400 mt-1">PostgreSQL</p>
              </div>
              <div className="text-center p-4 bg-slate-900/60 rounded border border-slate-700">
                <Bot className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300">NeuronAgent</p>
                <p className="text-xs text-slate-400 mt-1">HTTP API</p>
              </div>
              <div className="text-center p-4 bg-slate-900/60 rounded border border-slate-700">
                <Server className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300">NeuronMCP</p>
                <p className="text-xs text-slate-400 mt-1">stdio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  featurePillars: {
    kicker: 'Web Interface Features',
    items: [
      { 
        title: 'Unified Dashboard', 
        desc: 'Single interface for managing all NeuronDB ecosystem components including NeuronDB, NeuronAgent, and NeuronMCP. Profile-based configuration for multiple environments. Automated setup with default profile creation. Centralized settings and configuration management with environment variable support.' 
      },
      { 
        title: 'Real-time Communication', 
        desc: 'WebSocket support for live updates and streaming responses. Real-time metrics and monitoring. Live log streaming from all components. Event-driven UI updates with instant feedback.' 
      },
      { 
        title: 'MCP Server Integration', 
        desc: 'Full MCP server integration and testing. Tool inspection and execution. Resource browsing and management. MCP protocol debugging and monitoring.' 
      },
      { 
        title: 'Agent Management', 
        desc: 'Create and manage AI agents through the UI. Session management and monitoring. Message history and context viewing. Agent performance analytics.' 
      },
      { 
        title: 'Vector Search Interface', 
        desc: 'Perform vector searches through intuitive UI. Collection and index management. Query builder for complex searches. Search result visualization.' 
      },
      { 
        title: 'Secure Authentication', 
        desc: 'API key-based authentication with rate limiting. Role-based access control. Secure credential management. Audit logging for security compliance.' 
      },
      { 
        title: 'Metrics & Monitoring', 
        desc: 'Built-in metrics collection and health checks for all components. Performance dashboards with real-time updates. Request/response analytics with detailed breakdowns. System resource monitoring and alerting.' 
      },
      { 
        title: 'Comprehensive Logging', 
        desc: 'Request/response logging with detailed analytics for debugging and auditing. Structured logging with search and filtering capabilities. Error tracking and alerting. Historical log analysis with retention policies.' 
      },
      {
        title: 'Automated Setup',
        desc: 'Automated setup script for easy deployment. Auto-detection of NeuronMCP binary location. Default profile creation with NeuronMCP configuration. Sample NeuronAgent creation when NeuronAgent is available. Database migrations and verification.',
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
            <Link href="/docs/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Unified Dashboard
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Single interface for all components</td>
          <td className="px-4 py-3 text-slate-300">Real-time updates</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              WebSocket Communication
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Real-time updates and streaming</td>
          <td className="px-4 py-3 text-slate-300">Low-latency</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              MCP Integration
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Full MCP server integration</td>
          <td className="px-4 py-3 text-slate-300">Protocol compliant</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Agent Management
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Create and manage agents</td>
          <td className="px-4 py-3 text-slate-300">Full CRUD operations</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Vector Search UI
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Intuitive search interface</td>
          <td className="px-4 py-3 text-slate-300">Optimized queries</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Authentication
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">API keys, rate limiting, RBAC</td>
          <td className="px-4 py-3 text-slate-300">Secure & scalable</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Metrics & Monitoring
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Health checks, analytics</td>
          <td className="px-4 py-3 text-slate-300">Real-time dashboards</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Logging & Analytics
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Request/response logging</td>
          <td className="px-4 py-3 text-slate-300">Searchable logs</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neurondesktop" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
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
    description: 'Deploy NeuronDesktop. Unified web interface for managing NeuronDB, NeuronAgent, and NeuronMCP with real-time monitoring and comprehensive analytics.',
    primaryCTA: { href: '/docs/neurondesktop', label: 'View Documentation' },
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

