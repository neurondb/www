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
          'REST API and WebSocket agent runtime system with long-term memory, tool execution, and streaming responses. Build autonomous AI agents with state management, persistent memory, and extensible tool capabilities. Integrates seamlessly with NeuronDB for vector search and embeddings.',
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
          title: 'Long-term Memory',
          description: 'HNSW-based vector search for context retrieval across sessions and conversations.',
        },
        {
          icon: Zap,
          title: 'Tool Execution',
          description: 'Extensible tool registry: SQL, HTTP, Code, and Shell operations with streaming responses.',
        },
        {
          icon: Server,
          title: 'REST API & WebSocket',
          description: 'Full CRUD API and real-time WebSocket support for agent, session, and message management.',
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
          title: 'Tool System',
          description: 'Extensible tool registry with SQL, HTTP, Code, and Shell execution capabilities.',
          items: [
            { title: 'Built-in Tools', href: 'https://github.com/neurondb-ai/neurondb', description: 'SQL, HTTP, Code, and Shell tools with validation and error handling.', external: true },
            { title: 'Custom Tools', href: 'https://github.com/neurondb-ai/neurondb', description: 'Register custom tools with custom execution logic and validation.', external: true },
            { title: 'Tool Execution', href: 'https://github.com/neurondb-ai/neurondb', description: 'Execute tools with timeout, validation, and streaming responses.', external: true },
            { title: 'Tool Registry', href: 'https://github.com/neurondb-ai/neurondb', description: 'Manage tool registry with versioning and access control.', external: true }
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
