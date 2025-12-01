import React from 'react';
import Link from 'next/link';
import ProductPageTemplate from '@/components/templates/ProductPageTemplate';
import NeuronAgentDemoTerminal from '@/components/NeuronAgentDemoTerminal';
import NeuronAgentArchitectureDiagram from '@/components/NeuronAgentArchitectureDiagram';
import { generateDocsMetadata } from '@/config/products';
import { Bot, Server, Database } from 'lucide-react';

export const metadata = generateDocsMetadata('neurondb', 'NeuronAgent: AI Agent Runtime');

const neuronagentConfig = {
  productId: 'neurondb' as const,
  hero: {
    subtitle: 'REST API and WebSocket agent runtime system with long-term memory, tool execution, and streaming responses. Integrates seamlessly with NeuronDB.',
  },
  demo: <NeuronAgentDemoTerminal />,
  badges: [
    'REST API',
    'WebSocket',
    'Long-term Memory',
    'Tool Execution',
    'State Machine',
    'Background Jobs',
  ],
  componentCards: [],
  architecture: {
    title: 'Architecture',
    subtitle: 'AI agent runtime architecture with state management, memory store, and tool execution',
    content: <NeuronAgentArchitectureDiagram />,
  },
  featurePillars: {
    kicker: 'Agent Runtime Features',
    items: [
      { 
        title: 'Agent State Machine', 
        desc: 'Complete state machine for autonomous task execution with state persistence, recovery, and transition management. Supports complex workflows with conditional branching and state validation.' 
      },
      { 
        title: 'Long-term Memory', 
        desc: 'HNSW-based vector search for context retrieval from historical conversations and knowledge base. Semantic search across agent interactions. Memory persistence across sessions with temporal relevance weighting.' 
      },
      { 
        title: 'Tool System', 
        desc: 'Extensible tool registry supporting SQL, HTTP, Code, and Shell operations. Tool execution with timeout, validation, and error handling. Streaming responses for long-running operations. Custom tool registration API.' 
      },
      { 
        title: 'REST API & WebSocket', 
        desc: 'Full CRUD API for agents, sessions, and messages. WebSocket support for real-time streaming responses. RESTful endpoints with OpenAPI documentation. Rate limiting and authentication middleware.' 
      },
      { 
        title: 'Background Jobs', 
        desc: 'PostgreSQL-based job queue with worker pool, retries, and poison message handling. SKIP LOCKED for concurrent processing. Crash recovery and job state persistence. Tenant-aware job isolation.' 
      },
      { 
        title: 'Authentication & Security', 
        desc: 'API key-based authentication with rate limiting and role-based access control. Request validation and sanitization. Audit logging for security compliance. Multi-tenant isolation at the database level.' 
      },
      { 
        title: 'Session Management', 
        desc: 'Session lifecycle management with context preservation. Message history tracking and pagination. Multi-agent session support. Session timeout and cleanup policies.' 
      },
      { 
        title: 'NeuronDB Integration', 
        desc: 'Deep integration with NeuronDB for embeddings generation, vector search, and LLM operations. Direct SQL tool access to NeuronDB functions. Efficient context retrieval using HNSW indexes.' 
      },
    ],
  },
  featureMatrix: {
    title: 'Capabilities',
    subtitle: 'Agent runtime features',
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
            <Link href="/docs/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Agent State Machine
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">State persistence, recovery, transitions</td>
          <td className="px-4 py-3 text-slate-300">Sub-second state changes</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Long-term Memory
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">HNSW vector search, semantic retrieval</td>
          <td className="px-4 py-3 text-slate-300">Millisecond context lookup</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Tool Registry
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">SQL, HTTP, Code, Shell tools</td>
          <td className="px-4 py-3 text-slate-300">Concurrent execution</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              REST API
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Full CRUD operations for agents, sessions</td>
          <td className="px-4 py-3 text-slate-300">High-throughput requests</td>
          <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
              <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              WebSocket
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Real-time streaming responses</td>
          <td className="px-4 py-3 text-slate-300">Low-latency streaming</td>
          <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Background Jobs
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Job queue with retries, SKIP LOCKED</td>
          <td className="px-4 py-3 text-slate-300">Non-blocking async ops</td>
          <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
              <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Authentication
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">API keys, rate limiting, RBAC</td>
          <td className="px-4 py-3 text-slate-300">OAuth-ready</td>
          <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
            </tbody>
          </table>
  ),
  },
  ctaSection: {
    kicker: 'Get Started',
    title: 'Build AI Agents with NeuronAgent',
    description: 'Deploy NeuronAgent. Create autonomous agent systems with persistent memory, tool execution, and streaming responses.',
    primaryCTA: { href: '/docs/neuronagent', label: 'View Documentation' },
    secondaryCTA: { href: 'https://github.com/neurondb-ai/neurondb', label: 'View on GitHub', external: true },
  },
};

export default function NeuronAgentPage() {
  return (
    <>
      <ProductPageTemplate {...neuronagentConfig} />
    </>
  );
}
