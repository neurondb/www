import React from 'react';
import Link from 'next/link';
import ProductPageTemplate from '@/components/templates/ProductPageTemplate';
import ProductDashboardDemo from '@/components/product/ProductDashboardDemo';
import NeuronAgentArchitectureDiagram from '@/components/NeuronAgentArchitectureDiagram';
import { generateDocsMetadata } from '@/config/products';

export const metadata = generateDocsMetadata('neurondb', 'NeuronAgent: AI Agent Runtime');

const neuronagentDashboardTabs = [
  {
    id: 'agents',
    label: 'Agent Creation',
    iconName: 'Bot',
    heading: 'Create & manage agents',
    description: 'REST API for agent lifecycle management',
    codeLabel: 'HTTP',
    code: `POST /api/v1/agents\n{\n  "name": "support-agent",\n  "system_prompt": "You are a helpful support agent...",\n  "model": "gpt-4",\n  "tools": ["sql", "http", "search"],\n  "memory_config": {\n    "enabled": true,\n    "max_context": 10\n  }\n}\n\n// Response\n{\n  "id": "agent_123",\n  "status": "active"\n}`,
    footerHref: '/neuronagent',
    footerLabel: 'Agent API Docs',
    results: [
      { id: 1, text: 'agent_123: support-agent, status: active', category: 'agent' },
      { id: 2, text: 'agent_456: sales-agent, status: active', category: 'agent' },
      { id: 3, text: 'agent_789: support-agent, status: idle', category: 'agent' },
      { id: 4, text: 'agent_101: support-agent, status: active', category: 'agent' },
      { id: 5, text: 'Total agents: 4, Active: 3', category: 'summary' },
    ],
  },
  {
    id: 'sessions',
    label: 'Sessions',
    iconName: 'Server',
    heading: 'Session management',
    description: 'Create and manage agent sessions',
    codeLabel: 'HTTP',
    code: `POST /api/v1/agents/agent_123/sessions\n{\n  "user_id": "user_456",\n  "metadata": {\n    "channel": "web"\n  }\n}\n\nGET /api/v1/sessions/session_789/messages\n// Returns message history with context`,
    footerHref: '/neuronagent',
    footerLabel: 'Session Docs',
    results: [
      { id: 789, text: 'session_789: user_456, 12 messages, active', category: 'session' },
      { id: 790, text: 'session_790: user_457, 8 messages, active', category: 'session' },
      { id: 791, text: 'session_791: user_458, 15 messages, idle', category: 'session' },
      { id: 792, text: 'session_792: user_459, 3 messages, active', category: 'session' },
      { id: 793, text: 'Total sessions: 124, Active: 89', category: 'summary' },
    ],
  },
  {
    id: 'memory',
    label: 'Long-term Memory',
    iconName: 'Database',
    heading: 'Context retrieval',
    description: 'HNSW-based semantic memory search',
    codeLabel: 'HTTP',
    code: `POST /api/v1/agents/agent_123/memory/search\n{\n  "query": "previous conversation about pricing",\n  "top_k": 5,\n  "time_range": "7d"\n}\n\n// Returns relevant context from history`,
    footerHref: '/neuronagent',
    footerLabel: 'Memory Docs',
    results: [
      { id: 42, sim: 0.9523, text: 'Previous conversation about pricing plans and features…' },
      { id: 38, sim: 0.9234, text: 'User asked about enterprise pricing last week…' },
      { id: 35, sim: 0.8945, text: 'Discussion about subscription tiers and discounts…' },
      { id: 31, sim: 0.8656, text: 'Conversation regarding payment methods and billing…' },
      { id: 28, sim: 0.8367, text: 'Query about annual vs monthly pricing options…' },
    ],
  },
  {
    id: 'tools',
    label: 'Tool Execution',
    iconName: 'Zap',
    heading: 'SQL, HTTP, Code, Shell',
    description: 'Extensible tool system with validation',
    codeLabel: 'HTTP',
    code: `POST /api/v1/tools/execute\n{\n  "tool": "sql",\n  "arguments": {\n    "query": "SELECT * FROM users WHERE active = true",\n    "timeout": 5000\n  }\n}\n\n// Tool executes with error handling`,
    footerHref: '/neuronagent',
    footerLabel: 'Tools Docs',
    results: [
      { id: 1, text: 'sql: executed successfully, 42 rows returned', category: 'sql' },
      { id: 2, text: 'http: GET request completed, status 200', category: 'http' },
      { id: 3, text: 'code: Python script executed, output captured', category: 'code' },
      { id: 4, text: 'shell: command completed, exit code 0', category: 'shell' },
      { id: 5, text: 'Total tool executions: 1,247, Success: 99.8%', category: 'summary' },
    ],
  },
  {
    id: 'jobs',
    label: 'Background Jobs',
    iconName: 'GitBranch',
    heading: 'Async task processing',
    description: 'PostgreSQL-based job queue with retries',
    codeLabel: 'HTTP',
    code: `POST /api/v1/jobs\n{\n  "type": "batch_embedding",\n  "payload": {\n    "table": "documents",\n    "model": "all-MiniLM-L6-v2"\n  },\n  "priority": "high"\n}\n\nGET /api/v1/jobs/job_456/status`,
    footerHref: '/neuronagent',
    footerLabel: 'Jobs Docs',
    results: [
      { id: 456, text: 'job_456: batch_embedding, status: completed', category: 'job' },
      { id: 457, text: 'job_457: index_rebuild, status: running', category: 'job' },
      { id: 458, text: 'job_458: data_export, status: queued', category: 'job' },
      { id: 459, text: 'job_459: model_training, status: completed', category: 'job' },
      { id: 460, text: 'Total jobs: 1,247, Running: 3, Queued: 12', category: 'summary' },
    ],
  },
  {
    id: 'websocket',
    label: 'WebSocket',
    iconName: 'Server',
    heading: 'Real-time streaming',
    description: 'Stream agent responses in real-time',
    codeLabel: 'WebSocket',
    code: `// Connect to WebSocket\nws://localhost:8080/ws/agents/agent_123/sessions/session_789\n\n// Send message\n{\n  "type": "message",\n  "content": "What are the sales this month?"\n}\n\n// Receive streaming response\n{"type": "token", "content": "Based"}\n{"type": "token", "content": " on"}`,
    footerHref: '/neuronagent',
    footerLabel: 'WebSocket Docs',
    results: [
      { id: 1, text: 'ws_001: connected, agent_123, session_789', category: 'connection' },
      { id: 2, text: 'ws_002: streaming, 1,247 tokens sent', category: 'stream' },
      { id: 3, text: 'ws_003: message received, processing', category: 'message' },
      { id: 4, text: 'ws_004: response complete, 342ms latency', category: 'complete' },
      { id: 5, text: 'Active connections: 89, Avg latency: 245ms', category: 'stats' },
    ],
  },
];

const neuronagentConfig = {
  productId: 'neuronagent' as const,
  hero: {
    subtitle: 'REST API and WebSocket agent runtime system with long-term memory, tool execution, and streaming responses. Integrates seamlessly with NeuronDB.',
  },
  demo: null,
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
    content: null as any, // Will be set in component
  },
  dashboard: null as any, // Will be set in component
  featurePillars: {
    kicker: 'Agent Runtime Features',
    items: [
      { 
        title: 'Agent State Machine', 
        desc: [
          'Complete state machine for autonomous task execution',
          'State persistence, recovery, and transition management',
          'Supports complex workflows with conditional branching',
          'State validation and error handling',
          'Multi-agent collaboration with shared state management',
          'Workflow engine for orchestrating multi-step agent tasks'
        ]
      },
      { 
        title: 'Long-term Memory', 
        desc: [
          'HNSW-based vector search for context retrieval',
          'Semantic search across historical conversations and knowledge base',
          'Memory persistence across sessions',
          'Temporal relevance weighting for context ranking'
        ]
      },
      { 
        title: 'Tool System', 
        desc: [
          'Extensible tool registry: SQL, HTTP, Code, and Shell operations',
          'Tool execution with timeout, validation, and error handling',
          'Streaming responses for long-running operations',
          'Custom tool registration API'
        ]
      },
      { 
        title: 'REST API & WebSocket', 
        desc: [
          'Full CRUD API for agents, sessions, and messages',
          'WebSocket support for real-time streaming responses',
          'RESTful endpoints with OpenAPI documentation',
          'Rate limiting and authentication middleware'
        ]
      },
      { 
        title: 'Background Jobs', 
        desc: [
          'PostgreSQL-based job queue with worker pool',
          'Retries and poison message handling',
          'SKIP LOCKED for concurrent processing',
          'Crash recovery and job state persistence',
          'Tenant-aware job isolation'
        ]
      },
      { 
        title: 'Authentication & Security', 
        desc: [
          'API key-based authentication with rate limiting',
          'Role-based access control (RBAC)',
          'Request validation and sanitization',
          'Audit logging for security compliance',
          'Multi-tenant isolation at the database level'
        ]
      },
      { 
        title: 'Session Management', 
        desc: [
          'Session lifecycle management with context preservation',
          'Message history tracking and pagination',
          'Multi-agent session support',
          'Session timeout and cleanup policies'
        ]
      },
      { 
        title: 'NeuronDB Integration', 
        desc: [
          'Deep integration with NeuronDB for embeddings generation',
          'Vector search and LLM operations',
          'Direct SQL tool access to NeuronDB functions',
          'Efficient context retrieval using HNSW indexes'
        ]
      },
      { 
        title: 'Multi-Agent Collaboration', 
        desc: [
          'Multi-agent collaboration with shared state and communication',
          'Agent-to-agent messaging and coordination',
          'Distributed task execution across multiple agents',
          'Shared memory and context across agent sessions'
        ]
      },
      { 
        title: 'Workflow Engine', 
        desc: [
          'Workflow engine for orchestrating complex multi-step tasks',
          'Conditional branching and parallel execution',
          'Task dependencies and scheduling',
          'Workflow state management and recovery'
        ]
      },
      { 
        title: 'Human-in-the-Loop (HITL)', 
        desc: [
          'Human-in-the-loop integration for approval workflows',
          'Interactive prompts for user feedback and guidance',
          'Manual intervention points in automated processes',
          'Human review and approval mechanisms'
        ]
      },
      { 
        title: 'Budget Management', 
        desc: [
          'Budget management with cost tracking per agent and session',
          'Token usage monitoring and limits',
          'API call budget enforcement',
          'Cost analytics and reporting'
        ]
      },
      { 
        title: 'Evaluation Framework', 
        desc: [
          'Evaluation framework for agent performance assessment',
          'Metrics collection: success rate, latency, quality scores',
          'A/B testing capabilities for agent configurations',
          'Automated testing and benchmarking tools'
        ]
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
            <Link href="/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Agent State Machine
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">State persistence, recovery, transitions</td>
          <td className="px-4 py-3 text-slate-300">Sub-second state changes</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Long-term Memory
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">HNSW vector search, semantic retrieval</td>
          <td className="px-4 py-3 text-slate-300">Millisecond context lookup</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Tool Registry
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">SQL, HTTP, Code, Shell tools</td>
          <td className="px-4 py-3 text-slate-300">Concurrent execution</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              REST API
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Full CRUD operations for agents, sessions</td>
          <td className="px-4 py-3 text-slate-300">High-throughput requests</td>
          <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
              <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              WebSocket
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Real-time streaming responses</td>
          <td className="px-4 py-3 text-slate-300">Low-latency streaming</td>
          <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Background Jobs
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Job queue with retries, SKIP LOCKED</td>
          <td className="px-4 py-3 text-slate-300">Non-blocking async ops</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Multi-Agent Collaboration
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Shared state, agent-to-agent messaging</td>
          <td className="px-4 py-3 text-slate-300">Distributed task execution</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Workflow Engine
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Multi-step task orchestration, conditional branching</td>
          <td className="px-4 py-3 text-slate-300">Parallel execution support</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Human-in-the-Loop (HITL)
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Approval workflows, interactive prompts</td>
          <td className="px-4 py-3 text-slate-300">Manual intervention support</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Budget Management
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Cost tracking, token limits, API call budgets</td>
          <td className="px-4 py-3 text-slate-300">Real-time cost analytics</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Evaluation Framework
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Performance metrics, A/B testing, benchmarking</td>
          <td className="px-4 py-3 text-slate-300">Automated testing tools</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
              <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronagent" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
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
    primaryCTA: { href: '/neuronagent', label: 'View Documentation' },
    secondaryCTA: { href: 'https://github.com/neurondb-ai/neurondb', label: 'View on GitHub', external: true },
  },
};

export default function NeuronAgentPage() {
  return (
    <>
      <ProductPageTemplate 
        {...neuronagentConfig}
        architecture={{
          ...neuronagentConfig.architecture,
          content: <NeuronAgentArchitectureDiagram />,
        }}
        dashboard={
          <ProductDashboardDemo 
            productId="neuronagent"
            tabs={neuronagentDashboardTabs}
            title="NeuronAgent Runtime"
            subtitle="Build autonomous agents with memory and tool execution"
          />
        }
      />
    </>
  );
}
