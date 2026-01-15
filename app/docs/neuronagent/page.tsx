import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NeuronAgent Documentation | AI Agent Runtime for PostgreSQL',
  description: 'NeuronAgent is an AI agent runtime system with REST API and WebSocket endpoints. Build autonomous AI agents with persistent memory, multi-agent collaboration, workflow engine, and 20+ tools.',
  keywords: [
    'NeuronAgent',
    'AI agent runtime',
    'agent runtime postgresql',
    'postgresql agent',
    'agentic AI postgresql',
    'autonomous agents',
    'multi-agent collaboration',
    'agent workflow engine',
    'agent memory',
    'agent tools',
    'REST API agent',
    'WebSocket agent',
    'agent state machine',
    'hierarchical memory',
    'agent planning',
    'agent evaluation',
    'budget management',
    'HITL workflows'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent',
  },
  openGraph: {
    title: 'NeuronAgent Documentation | AI Agent Runtime',
    description: 'Build autonomous AI agents with REST API, WebSocket, persistent memory, and 20+ tools.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neuronagent',
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
  href: '/docs/neuronagent/getting-started',
  label: 'Getting Started',
}

export default function NeuronAgentDocsPage() {
  return (
    <PostgresDocsLayout
      title="NeuronAgent Documentation"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        
        <p>
          NeuronAgent is an AI agent runtime system providing REST API and WebSocket endpoints for building autonomous agent applications. It includes persistent memory, tool execution, multi-agent collaboration, workflow automation, and complete integration with NeuronDB.
        </p>

        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#fbbf24' }}>🎯 What You Can Build</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Autonomous AI agents with long-term memory and context retrieval</li>
            <li>Multi-agent systems with collaboration and task delegation</li>
            <li>Workflow automation with human-in-the-loop (HITL) support</li>
            <li>Agentic AI applications backed by PostgreSQL</li>
            <li>Research agents, data analysis agents, customer support agents, and content generation agents</li>
          </ul>
        </div>
      </section>

      <section id="key-features">
        <h2>Key Features</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>🤖 Agent State Machine</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Complete state machine for autonomous task execution with state persistence and recovery.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>👥 Multi-Agent Collaboration</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Agent-to-agent communication, task delegation, shared workspaces, and hierarchical agent structures.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>🔄 Workflow Engine</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              DAG-based workflow execution with agent, tool, HTTP, approval, and conditional steps with HITL support.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>🧠 Hierarchical Memory</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Multi-level memory organization with HNSW-based vector search for better context retrieval.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>🛠️ 20+ Tools</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              SQL, HTTP, Code, Shell, Browser (Playwright), Filesystem (virtual), Memory, Collaboration, NeuronDB tools, Multimodal.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>💰 Budget & Evaluation</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Real-time cost tracking, budget controls, evaluation framework, and quality scoring.
            </p>
          </div>
        </div>
      </section>

      <section id="core-capabilities">
        <h2>Core Capabilities</h2>

        <h3>Agent Runtime</h3>
        <ul>
          <li><strong>State Machine</strong> - Complete state machine for autonomous task execution</li>
          <li><strong>Persistent Memory</strong> - Long-term memory with HNSW-based vector search</li>
          <li><strong>Tool Execution</strong> - Extensible tool registry with 20+ built-in tools</li>
          <li><strong>Streaming Responses</strong> - Real-time streaming via WebSocket</li>
          <li><strong>Multi-Model Support</strong> - Support for GPT-4, Claude, Gemini, Llama, and custom models</li>
        </ul>

        <h3>Multi-Agent Collaboration</h3>
        <ul>
          <li><strong>Workspaces</strong> - Create shared workspaces for agent collaboration</li>
          <li><strong>Agent-to-Agent Communication</strong> - Direct communication between agents</li>
          <li><strong>Task Delegation</strong> - Delegate tasks to specialized agents</li>
          <li><strong>Hierarchical Structures</strong> - Parent-child agent relationships</li>
          <li><strong>Participant Management</strong> - Add users and agents to workspaces</li>
        </ul>

        <h3>Workflow Engine</h3>
        <ul>
          <li><strong>DAG-Based Workflows</strong> - Directed acyclic graph workflow execution</li>
          <li><strong>Step Types</strong> - Agent, Tool, HTTP, SQL, Approval, and Custom steps</li>
          <li><strong>Conditional Logic</strong> - Conditional branching in workflows</li>
          <li><strong>Retry Logic</strong> - Configurable retry policies</li>
          <li><strong>Human-in-the-Loop (HITL)</strong> - Approval gates with email/webhook notifications</li>
          <li><strong>Scheduled Execution</strong> - Cron-based workflow scheduling</li>
        </ul>

        <h3>Planning & Reflection</h3>
        <ul>
          <li><strong>LLM-Based Planning</strong> - Generate execution plans from tasks</li>
          <li><strong>Task Decomposition</strong> - Break down complex tasks into subtasks</li>
          <li><strong>Self-Reflection</strong> - Agents can reflect on their own responses</li>
          <li><strong>Quality Assessment</strong> - Evaluate response quality</li>
          <li><strong>Plan Execution</strong> - Execute and track plan progress</li>
        </ul>

        <h3>Memory Management</h3>
        <ul>
          <li><strong>Hierarchical Memory</strong> - Multi-level memory organization</li>
          <li><strong>Vector Search</strong> - HNSW-based semantic search</li>
          <li><strong>Memory Promotion</strong> - Promote important memories to long-term storage</li>
          <li><strong>Memory Summarization</strong> - Summarize memory chunks</li>
          <li><strong>Memory Search</strong> - Search memory by semantic similarity</li>
        </ul>

        <h3>Budget & Cost Management</h3>
        <ul>
          <li><strong>Per-Agent Budgets</strong> - Set budgets for individual agents</li>
          <li><strong>Per-Session Budgets</strong> - Budget controls per conversation</li>
          <li><strong>Real-Time Tracking</strong> - Track costs in real-time</li>
          <li><strong>Budget Alerts</strong> - Alerts when approaching budget limits</li>
          <li><strong>Cost Analytics</strong> - Detailed cost breakdowns and analytics</li>
        </ul>

        <h3>Evaluation Framework</h3>
        <ul>
          <li><strong>Automated Evaluation</strong> - Evaluate agent performance automatically</li>
          <li><strong>Quality Scoring</strong> - Score responses for quality metrics</li>
          <li><strong>Retrieval Evaluation</strong> - Evaluate RAG retrieval performance</li>
          <li><strong>Evaluation Runs</strong> - Batch evaluation across multiple tasks</li>
          <li><strong>Evaluation Results</strong> - Detailed evaluation results and metrics</li>
        </ul>

        <h3>Tool System (20+ Tools)</h3>
        <ul>
          <li><strong>Built-in Tools</strong> - SQL, HTTP, Code, Shell, Browser, Visualization, Filesystem, Memory, Collaboration</li>
          <li><strong>NeuronDB Tools</strong> - ML, Vector, RAG, Analytics, Hybrid Search, Reranking</li>
          <li><strong>Multimodal Processing</strong> - Image and multimedia processing with embedding generation</li>
          <li><strong>Custom Tools</strong> - Register custom tools with JSON Schema validation</li>
        </ul>
      </section>

      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>Deploy NeuronAgent and create your first autonomous agent with memory and tool execution capabilities.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <Link
            href="/docs/neuronagent/getting-started"
            className="block rounded-lg border border-slate-700 bg-slate-900/60 p-6 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400 transition-colors"
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#fbbf24' }}>🚀 Getting Started</h3>
            <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Installation guide and quick start for NeuronAgent
            </p>
          </Link>

          <Link
            href="/docs/neuronagent/getting-started/quickstart"
            className="block rounded-lg border border-slate-700 bg-slate-900/60 p-6 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400 transition-colors"
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#fbbf24' }}>⚡ Quick Start</h3>
            <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Create your first agent with tools and memory in minutes
            </p>
          </Link>

          <Link
            href="/docs/neuronagent/getting-started/configuration"
            className="block rounded-lg border border-slate-700 bg-slate-900/60 p-6 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400 transition-colors"
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#fbbf24' }}>⚙️ Configuration</h3>
            <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Configure API keys, rate limiting, and database connections
            </p>
          </Link>

          <Link
            href="/docs/neuronagent/getting-started/neurondb-integration"
            className="block rounded-lg border border-slate-700 bg-slate-900/60 p-6 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400 transition-colors"
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#fbbf24' }}>🔗 NeuronDB Integration</h3>
            <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Integrate with NeuronDB for vector search and embeddings
            </p>
          </Link>
        </div>
      </section>

      <section id="documentation">
        <h2>Documentation Library</h2>

        <h3>Agent Management</h3>
        <ul>
          <li><strong>Agent Lifecycle</strong> - Create, update, list, and delete agents via REST API</li>
          <li><strong>State Machine</strong> - State persistence, recovery, and transition management</li>
          <li><strong>System Prompts</strong> - Configure agent behavior with custom prompts</li>
          <li><strong>Model Configuration</strong> - Select and configure LLM models (GPT-4, Claude, etc.)</li>
        </ul>

        <h3>Session Management</h3>
        <ul>
          <li><strong>Session Creation</strong> - Create and manage agent sessions with user IDs and metadata</li>
          <li><strong>Message History</strong> - Track conversation history with pagination and filtering</li>
          <li><strong>Multi-Agent Sessions</strong> - Support for multiple agents in a single session</li>
          <li><strong>Session Cleanup</strong> - Automatic timeout and cleanup policies</li>
        </ul>

        <h3>Long-term Memory</h3>
        <ul>
          <li><strong>Memory Search</strong> - Semantic search across historical conversations</li>
          <li><strong>Memory Persistence</strong> - Persistent memory storage across sessions</li>
          <li><strong>Context Retrieval</strong> - Retrieve relevant context from memory</li>
          <li><strong>NeuronDB Integration</strong> - Use NeuronDB embeddings for memory vectorization</li>
        </ul>

        <h3>Multi-Agent Collaboration</h3>
        <ul>
          <li><strong>Agent Communication</strong> - Enable agents to communicate and delegate tasks</li>
          <li><strong>Shared Workspaces</strong> - Shared workspaces for collaborative environments</li>
          <li><strong>Hierarchical Structures</strong> - Organize agents in hierarchical structures</li>
          <li><strong>Task Delegation</strong> - Delegate tasks between agents with automatic routing</li>
        </ul>

        <h3>Workflow Engine</h3>
        <ul>
          <li><strong>Workflow Definition</strong> - Define DAG-based workflows with multiple step types</li>
          <li><strong>Human-in-the-Loop</strong> - Approval gates and feedback loops with notifications</li>
          <li><strong>Workflow Execution</strong> - Execute workflows with state management and retries</li>
          <li><strong>Conditional Logic</strong> - Conditional steps and branching logic</li>
        </ul>

        <h3>Planning & Reflection</h3>
        <ul>
          <li><strong>LLM-Based Planning</strong> - Generate plans using LLM with task decomposition</li>
          <li><strong>Task Decomposition</strong> - Break down complex tasks into sub-tasks</li>
          <li><strong>Self-Reflection</strong> - Agent self-reflection and quality assessment</li>
          <li><strong>Quality Assessment</strong> - Evaluate task completion quality</li>
        </ul>

        <h3>Evaluation Framework</h3>
        <ul>
          <li><strong>Performance Metrics</strong> - Track success rate, latency, and quality scores</li>
          <li><strong>Automated Scoring</strong> - Automated quality scoring for responses</li>
          <li><strong>Evaluation Reports</strong> - Generate evaluation reports with analysis</li>
          <li><strong>Continuous Improvement</strong> - Use evaluation results to improve performance</li>
        </ul>

        <h3>Budget & Cost Management</h3>
        <ul>
          <li><strong>Cost Tracking</strong> - Real-time cost tracking for LLM API calls</li>
          <li><strong>Budget Controls</strong> - Set per-agent and per-session budget limits</li>
          <li><strong>Budget Alerts</strong> - Configure alerts for budget thresholds</li>
          <li><strong>Cost Analytics</strong> - Analyze cost trends and optimize usage</li>
        </ul>

        <h3>API & WebSocket</h3>
        <ul>
          <li><strong>REST API</strong> - Full CRUD operations for agents, sessions, and messages</li>
          <li><strong>WebSocket</strong> - Real-time streaming responses and bidirectional communication</li>
          <li><strong>Authentication</strong> - API key-based authentication with rate limiting and RBAC</li>
          <li><strong>Rate Limiting</strong> - Configure rate limits per API key and endpoint</li>
        </ul>

        <h3>Background Jobs</h3>
        <ul>
          <li><strong>Job Queue</strong> - PostgreSQL-based job queue with SKIP LOCKED</li>
          <li><strong>Retries</strong> - Automatic retry logic with exponential backoff</li>
          <li><strong>Crash Recovery</strong> - Recovery from crashes with job state persistence</li>
          <li><strong>Worker Pool</strong> - Configurable worker pool for parallel processing</li>
        </ul>

        <h3>Examples & Tutorials</h3>
        <ul>
          <li><a href="https://github.com/neurondb-ai/neurondb/tree/main/examples/agent-tools" target="_blank" rel="noopener noreferrer">Agent Tools Example</a> - Complete example with multiple tools</li>
          <li><a href="https://github.com/neurondb-ai/neurondb" target="_blank" rel="noopener noreferrer">Memory Example</a> - Long-term memory with context retrieval</li>
          <li><a href="https://github.com/neurondb-ai/neurondb" target="_blank" rel="noopener noreferrer">WebSocket Example</a> - Real-time streaming example</li>
          <li><a href="https://github.com/neurondb-ai/neurondb" target="_blank" rel="noopener noreferrer">State Machine Example</a> - Complex workflow example</li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
