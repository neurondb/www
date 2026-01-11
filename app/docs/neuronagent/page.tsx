'use client'

import { BookOpen, Download, ExternalLink, Bot, Database, Zap, Server, GitBranch } from 'lucide-react'
import ProductDocsLanding from '@/components/ProductDocsLanding'
import { getProductTheme } from '@/config/theme'

export default function NeuronAgentDocsPage() {
  const theme = getProductTheme('neuronagent')
  
  return (
    <ProductDocsLanding
      hero={{
        badgeLabel: 'AI Agent Runtime',
        badgeIcon: null,
        badgeGradient: theme.badgeGradient,
        title: 'NeuronAgent Documentation',
        description:
          'REST API and WebSocket agent runtime system with multi-agent collaboration, workflow engine, human-in-the-loop (HITL), hierarchical memory, planning & reflection, evaluation framework, budget management, and 20+ tools. Build autonomous AI agents with persistent memory, extensible tool capabilities, and advanced collaboration features.',
        ctas: [
          {
            label: 'Get Started',
            href: 'https://github.com/neurondb-ai/neurondb',
            icon: BookOpen,
            variant: 'primary'
          },
          {
            label: 'View on GitHub',
            href: 'https://github.com/neurondb-ai/neurondb',
            icon: ExternalLink,
            external: true,
            variant: 'secondary'
          }
        ]
      }}
      features={[
        {
          icon: Bot,
          title: 'Agent State Machine',
          description: 'Complete state machine for autonomous task execution with state persistence and recovery.',
        },
        {
          icon: Database,
          title: 'Multi-Agent Collaboration',
          description: 'Agent-to-agent communication, task delegation, shared workspaces, and hierarchical agent structures.',
        },
        {
          icon: GitBranch,
          title: 'Workflow Engine',
          description: 'DAG-based workflow execution with agent, tool, HTTP, approval, and conditional steps with HITL support.',
        },
        {
          icon: Database,
          title: 'Hierarchical Memory',
          description: 'Multi-level memory organization with HNSW-based vector search for better context retrieval.',
        },
        {
          icon: Zap,
          title: '20+ Tools',
          description: 'SQL, HTTP, Code, Shell, Browser (Playwright), Filesystem (virtual), Memory, Collaboration, NeuronDB tools, Multimodal.',
        },
        {
          icon: Server,
          title: 'Budget & Evaluation',
          description: 'Real-time cost tracking, budget controls, evaluation framework, and quality scoring.',
        }
      ]}
      docSections={[
        {
          title: 'Getting Started',
          description: 'Deploy NeuronAgent and create your first autonomous agent with memory and tool execution capabilities.',
          items: [
            { title: 'Installation', href: 'https://github.com/neurondb-ai/neurondb', description: 'Deploy NeuronAgent with Docker or from source.', external: true },
            { title: 'Quick Start', href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/agent-tools', description: 'Create your first agent with tools and memory in minutes.', external: true },
            { title: 'Configuration', href: 'https://github.com/neurondb-ai/neurondb', description: 'Configure API keys, rate limiting, and database connections.', external: true },
            { title: 'NeuronDB Integration', href: '/docs/neurondb', description: 'Integrate with NeuronDB for vector search and embeddings generation.' }
          ]
        },
        {
          title: 'Agent Management',
          description: 'Create, configure, and manage AI agents with custom prompts, models, and tool sets.',
          items: [
            { title: 'Agent Lifecycle', href: 'https://github.com/neurondb-ai/neurondb', description: 'Create, update, list, and delete agents via REST API.', external: true },
            { title: 'State Machine', href: 'https://github.com/neurondb-ai/neurondb', description: 'State persistence, recovery, and transition management for complex workflows.', external: true },
            { title: 'System Prompts', href: 'https://github.com/neurondb-ai/neurondb', description: 'Configure agent behavior with custom system prompts and instructions.', external: true },
            { title: 'Model Configuration', href: 'https://github.com/neurondb-ai/neurondb', description: 'Select and configure LLM models (GPT-4, Claude, etc.) for agent responses.', external: true }
          ]
        },
        {
          title: 'Session Management',
          description: 'Manage agent sessions with context preservation and message history tracking.',
          items: [
            { title: 'Session Creation', href: 'https://github.com/neurondb-ai/neurondb', description: 'Create and manage agent sessions with user IDs and metadata.', external: true },
            { title: 'Message History', href: 'https://github.com/neurondb-ai/neurondb', description: 'Track conversation history with pagination and filtering.', external: true },
            { title: 'Multi-Agent Sessions', href: 'https://github.com/neurondb-ai/neurondb', description: 'Support for multiple agents in a single session.', external: true },
            { title: 'Session Cleanup', href: 'https://github.com/neurondb-ai/neurondb', description: 'Automatic timeout and cleanup policies for idle sessions.', external: true }
          ]
        },
        {
          title: 'Long-term Memory',
          description: 'HNSW-based semantic memory search for context retrieval across sessions and knowledge bases.',
          items: [
            { title: 'Memory Search', href: 'https://github.com/neurondb-ai/neurondb', description: 'Semantic search across historical conversations and knowledge base.', external: true },
            { title: 'Memory Persistence', href: 'https://github.com/neurondb-ai/neurondb', description: 'Persistent memory storage across agent sessions and restarts.', external: true },
            { title: 'Context Retrieval', href: 'https://github.com/neurondb-ai/neurondb', description: 'Retrieve relevant context from memory for improved responses.', external: true },
            { title: 'NeuronDB Integration', href: '/docs/neurondb/ml/embeddings', description: 'Use NeuronDB embeddings for memory vectorization and search.' }
          ]
        },
        {
          title: 'Multi-Agent Collaboration',
          description: 'Agent-to-agent communication, task delegation, shared workspaces, and hierarchical agent structures.',
          items: [
            { title: 'Agent Communication', href: 'https://github.com/neurondb-ai/neurondb', description: 'Enable agents to communicate with each other and delegate tasks.', external: true },
            { title: 'Shared Workspaces', href: 'https://github.com/neurondb-ai/neurondb', description: 'Shared workspaces for collaborative agent environments.', external: true },
            { title: 'Hierarchical Structures', href: 'https://github.com/neurondb-ai/neurondb', description: 'Organize agents in hierarchical structures with parent-child relationships.', external: true },
            { title: 'Task Delegation', href: 'https://github.com/neurondb-ai/neurondb', description: 'Delegate tasks between agents with automatic routing and coordination.', external: true }
          ]
        },
        {
          title: 'Workflow Engine',
          description: 'DAG-based workflow execution with agent, tool, HTTP, approval, and conditional steps with HITL support.',
          items: [
            { title: 'Workflow Definition', href: 'https://github.com/neurondb-ai/neurondb', description: 'Define DAG-based workflows with agent, tool, HTTP, approval, and conditional steps.', external: true },
            { title: 'Human-in-the-Loop', href: 'https://github.com/neurondb-ai/neurondb', description: 'Approval gates, feedback loops, and human oversight in workflows with email/webhook notifications.', external: true },
            { title: 'Workflow Execution', href: 'https://github.com/neurondb-ai/neurondb', description: 'Execute workflows with state management, error handling, and retries.', external: true },
            { title: 'Conditional Logic', href: 'https://github.com/neurondb-ai/neurondb', description: 'Conditional steps and branching logic based on workflow state and results.', external: true }
          ]
        },
        {
          title: 'Planning & Reflection',
          description: 'LLM-based planning with task decomposition, agent self-reflection, and quality assessment.',
          items: [
            { title: 'LLM-Based Planning', href: 'https://github.com/neurondb-ai/neurondb', description: 'Generate plans using LLM with task decomposition and sequencing.', external: true },
            { title: 'Task Decomposition', href: 'https://github.com/neurondb-ai/neurondb', description: 'Break down complex tasks into manageable sub-tasks automatically.', external: true },
            { title: 'Self-Reflection', href: 'https://github.com/neurondb-ai/neurondb', description: 'Agent self-reflection and quality assessment of its own actions.', external: true },
            { title: 'Quality Assessment', href: 'https://github.com/neurondb-ai/neurondb', description: 'Evaluate task completion quality and adjust strategies accordingly.', external: true }
          ]
        },
        {
          title: 'Evaluation Framework',
          description: 'Built-in evaluation system for agent performance with automated quality scoring.',
          items: [
            { title: 'Performance Metrics', href: 'https://github.com/neurondb-ai/neurondb', description: 'Track agent performance metrics including success rate, latency, and quality scores.', external: true },
            { title: 'Automated Scoring', href: 'https://github.com/neurondb-ai/neurondb', description: 'Automated quality scoring for agent responses and task completion.', external: true },
            { title: 'Evaluation Reports', href: 'https://github.com/neurondb-ai/neurondb', description: 'Generate evaluation reports with detailed performance analysis.', external: true },
            { title: 'Continuous Improvement', href: 'https://github.com/neurondb-ai/neurondb', description: 'Use evaluation results to improve agent performance over time.', external: true }
          ]
        },
        {
          title: 'Budget & Cost Management',
          description: 'Real-time cost tracking, per-agent and per-session budget controls, and budget alerts.',
          items: [
            { title: 'Cost Tracking', href: 'https://github.com/neurondb-ai/neurondb', description: 'Real-time cost tracking for LLM API calls, compute resources, and operations.', external: true },
            { title: 'Budget Controls', href: 'https://github.com/neurondb-ai/neurondb', description: 'Set per-agent and per-session budget limits with automatic enforcement.', external: true },
            { title: 'Budget Alerts', href: 'https://github.com/neurondb-ai/neurondb', description: 'Configure alerts for budget thresholds and spending limits.', external: true },
            { title: 'Cost Analytics', href: 'https://github.com/neurondb-ai/neurondb', description: 'Analyze cost trends and optimize agent usage for cost efficiency.', external: true }
          ]
        },
        {
          title: 'Tool System (20+ Tools)',
          description: 'Extensible tool registry with SQL, HTTP, Code, Shell, Browser, Filesystem, Memory, Collaboration, NeuronDB tools, and Multimodal processing.',
          items: [
            { title: 'Built-in Tools', href: 'https://github.com/neurondb-ai/neurondb', description: 'SQL, HTTP, Code, Shell, Browser (Playwright), Filesystem (virtual), Memory, Collaboration tools.', external: true },
            { title: 'NeuronDB Tools', href: 'https://github.com/neurondb-ai/neurondb', description: 'RAG, Hybrid Search, Reranking, Vector, ML, Analytics, Visualization tools from NeuronDB.', external: true },
            { title: 'Multimodal Processing', href: 'https://github.com/neurondb-ai/neurondb', description: 'Multimodal tools for processing text, images, and combined content.', external: true },
            { title: 'Custom Tools', href: 'https://github.com/neurondb-ai/neurondb', description: 'Register custom tools with custom execution logic and validation.', external: true }
          ]
        },
        {
          title: 'API & WebSocket',
          description: 'REST API and WebSocket endpoints for agent management and real-time communication.',
          items: [
            { title: 'REST API', href: 'https://github.com/neurondb-ai/neurondb', description: 'Full CRUD operations for agents, sessions, and messages via REST.', external: true },
            { title: 'WebSocket', href: 'https://github.com/neurondb-ai/neurondb', description: 'Real-time streaming responses and bidirectional communication.', external: true },
            { title: 'Authentication', href: 'https://github.com/neurondb-ai/neurondb', description: 'API key-based authentication with rate limiting and RBAC.', external: true },
            { title: 'Rate Limiting', href: 'https://github.com/neurondb-ai/neurondb', description: 'Configure rate limits per API key and endpoint.', external: true }
          ]
        },
        {
          title: 'Background Jobs',
          description: 'PostgreSQL-based job queue with worker pool, retries, and crash recovery.',
          items: [
            { title: 'Job Queue', href: 'https://github.com/neurondb-ai/neurondb', description: 'PostgreSQL-based job queue with SKIP LOCKED for concurrent processing.', external: true },
            { title: 'Retries', href: 'https://github.com/neurondb-ai/neurondb', description: 'Automatic retry logic with exponential backoff and poison message handling.', external: true },
            { title: 'Crash Recovery', href: 'https://github.com/neurondb-ai/neurondb', description: 'Recovery from crashes with job state persistence and resumption.', external: true },
            { title: 'Worker Pool', href: 'https://github.com/neurondb-ai/neurondb', description: 'Configurable worker pool for parallel job processing.', external: true }
          ]
        },
        {
          title: 'Examples & Tutorials',
          description: 'Working examples and tutorials for building agents with NeuronAgent.',
          items: [
            { title: 'Agent Tools Example', href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/agent-tools', description: 'Complete example with multiple tools (SQL, HTTP, custom) for complex agent workflows.', external: true },
            { title: 'Memory Example', href: 'https://github.com/neurondb-ai/neurondb', description: 'Example demonstrating long-term memory with context retrieval.', external: true },
            { title: 'WebSocket Example', href: 'https://github.com/neurondb-ai/neurondb', description: 'Real-time streaming example with WebSocket communication.', external: true },
            { title: 'State Machine Example', href: 'https://github.com/neurondb-ai/neurondb', description: 'Complex workflow example using agent state machine.', external: true }
          ]
        }
      ]}
      quickLinks={[
        {
          title: 'Get Started',
          description: 'Deploy NeuronAgent and create your first agent with tools and memory.',
          href: 'https://github.com/neurondb-ai/neurondb',
          icon: BookOpen,
          external: true
        },
        {
          title: 'Agent Tools Example',
          description: 'Complete working example with multiple tools and agent workflows.',
          href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/agent-tools',
          icon: ExternalLink,
          external: true
        },
        {
          title: 'GitHub Repository',
          description: 'Source code, issues, and contribution guide for NeuronAgent.',
          href: 'https://github.com/neurondb-ai/neurondb',
          icon: ExternalLink,
          external: true
        }
      ]}
      theme={{
        featureIconClass: theme.featureIconClass,
        linkHoverClass: theme.linkHover,
        quickLinkCardClass: theme.quickLinkCardClass,
        quickLinkIconClass: theme.quickLinkIconClass,
        quickLinkHoverLabelClass: theme.quickLinkHoverLabelClass,
        docCardClass: theme.docCardClass,
        primaryButtonClass: theme.buttonPrimary,
        secondaryButtonClass: theme.buttonSecondary,
      }}
    />
  )
}
