import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'NeuronAgent Features | Complete Feature Reference',
  description: 'Complete feature reference for NeuronAgent: agent runtime, multi-agent collaboration, workflow engine, memory management, budget & cost management, evaluation framework, and 20+ tools.',
  keywords: [
    'NeuronAgent features',
    'agent runtime features',
    'multi-agent collaboration',
    'workflow engine',
    'agent memory',
    'agent tools',
    'budget management',
    'evaluation framework',
    'HITL workflows',
    'agent planning',
    'agent reflection'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent/features',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'core-features', title: 'Core Features' },
  { id: 'agent-runtime', title: 'Agent Runtime' },
  { id: 'multi-agent', title: 'Multi-Agent Collaboration' },
  { id: 'workflow', title: 'Workflow Engine' },
  { id: 'memory', title: 'Memory Management' },
  { id: 'tools', title: 'Tool System' },
  { id: 'planning', title: 'Planning & Reflection' },
  { id: 'evaluation', title: 'Evaluation Framework' },
  { id: 'budget', title: 'Budget & Cost Management' },
  { id: 'api', title: 'API & WebSocket' },
]

const prevLink: NavLink = {
  href: '/docs/neuronagent',
  label: 'NeuronAgent Documentation',
}
const nextLink: NavLink = {
  href: '/docs/neuronagent/troubleshooting',
  label: 'Troubleshooting',
}

export default function NeuronAgentFeatures() {
  return (
    <PostgresDocsLayout
      title="NeuronAgent Features"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="core-features">
        <h2>Core Features</h2>
        <p>
          NeuronAgent is a comprehensive AI agent runtime system with advanced capabilities for building autonomous agent applications.
        </p>
      </section>

      <section id="agent-runtime">
        <h2>Agent Runtime</h2>
        <ul>
          <li><strong>State Machine</strong> - Complete state machine for autonomous task execution</li>
          <li><strong>Persistent Memory</strong> - Long-term memory with HNSW-based vector search</li>
          <li><strong>Tool Execution</strong> - Extensible tool registry with 20+ built-in tools</li>
          <li><strong>Streaming Responses</strong> - Real-time streaming via WebSocket</li>
          <li><strong>Multi-Model Support</strong> - Support for GPT-4, Claude, Gemini, Llama, and custom models</li>
        </ul>
      </section>

      <section id="multi-agent">
        <h2>Multi-Agent Collaboration</h2>
        <ul>
          <li><strong>Workspaces</strong> - Create shared workspaces for agent collaboration</li>
          <li><strong>Agent-to-Agent Communication</strong> - Direct communication between agents</li>
          <li><strong>Task Delegation</strong> - Delegate tasks to specialized agents</li>
          <li><strong>Hierarchical Structures</strong> - Parent-child agent relationships</li>
          <li><strong>Participant Management</strong> - Add users and agents to workspaces</li>
        </ul>
      </section>

      <section id="workflow">
        <h2>Workflow Engine</h2>
        <ul>
          <li><strong>DAG-Based Workflows</strong> - Directed acyclic graph workflow execution</li>
          <li><strong>Step Types</strong> - Agent, Tool, HTTP, SQL, Approval, and Custom steps</li>
          <li><strong>Conditional Logic</strong> - Conditional branching in workflows</li>
          <li><strong>Retry Logic</strong> - Configurable retry policies</li>
          <li><strong>Idempotency</strong> - Idempotent workflow execution</li>
          <li><strong>Compensation</strong> - Compensation steps for rollback</li>
          <li><strong>Scheduled Execution</strong> - Cron-based workflow scheduling</li>
          <li><strong>Execution Monitoring</strong> - Track workflow execution status and history</li>
        </ul>
      </section>

      <section id="memory">
        <h2>Memory Management</h2>
        <ul>
          <li><strong>Hierarchical Memory</strong> - Multi-level memory organization</li>
          <li><strong>Vector Search</strong> - HNSW-based semantic search</li>
          <li><strong>Memory Promotion</strong> - Promote important memories to long-term storage</li>
          <li><strong>Memory Summarization</strong> - Summarize memory chunks</li>
          <li><strong>Memory Search</strong> - Search memory by semantic similarity</li>
        </ul>
      </section>

      <section id="tools">
        <h2>Tool System (20+ Tools)</h2>
        <ul>
          <li><strong>Built-in Tools</strong> - SQL, HTTP, Code, Shell, Browser, Visualization, Filesystem, Memory, Collaboration</li>
          <li><strong>NeuronDB Tools</strong> - ML, Vector, RAG, Analytics, Hybrid Search, Reranking</li>
          <li><strong>Multimodal Processing</strong> - Image and multimedia processing with embedding generation</li>
          <li><strong>Custom Tools</strong> - Register custom tools with JSON Schema validation</li>
        </ul>
      </section>

      <section id="planning">
        <h2>Planning & Reflection</h2>
        <ul>
          <li><strong>LLM-Based Planning</strong> - Generate execution plans from tasks</li>
          <li><strong>Task Decomposition</strong> - Break down complex tasks into subtasks</li>
          <li><strong>Self-Reflection</strong> - Agents can reflect on their own responses</li>
          <li><strong>Quality Assessment</strong> - Evaluate response quality</li>
          <li><strong>Plan Execution</strong> - Execute and track plan progress</li>
        </ul>
      </section>

      <section id="evaluation">
        <h2>Evaluation Framework</h2>
        <ul>
          <li><strong>Automated Evaluation</strong> - Evaluate agent performance automatically</li>
          <li><strong>Quality Scoring</strong> - Score responses for quality metrics</li>
          <li><strong>Retrieval Evaluation</strong> - Evaluate RAG retrieval performance</li>
          <li><strong>Evaluation Runs</strong> - Batch evaluation across multiple tasks</li>
          <li><strong>Evaluation Results</strong> - Detailed evaluation results and metrics</li>
        </ul>
      </section>

      <section id="budget">
        <h2>Budget & Cost Management</h2>
        <ul>
          <li><strong>Per-Agent Budgets</strong> - Set budgets for individual agents</li>
          <li><strong>Per-Session Budgets</strong> - Budget controls per conversation</li>
          <li><strong>Real-Time Tracking</strong> - Track costs in real-time</li>
          <li><strong>Budget Alerts</strong> - Alerts when approaching budget limits</li>
          <li><strong>Cost Analytics</strong> - Detailed cost breakdowns and analytics</li>
        </ul>
      </section>

      <section id="api">
        <h2>API & WebSocket</h2>
        <ul>
          <li><strong>REST API</strong> - Full CRUD operations for all resources</li>
          <li><strong>WebSocket</strong> - Real-time streaming responses and bidirectional communication</li>
          <li><strong>Authentication</strong> - API key-based authentication with rate limiting and RBAC</li>
          <li><strong>Rate Limiting</strong> - Configure rate limits per API key and endpoint</li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
