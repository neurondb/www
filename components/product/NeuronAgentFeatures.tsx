'use client'

import React from 'react'
import { CardGrid } from '@/components/ui/cards'
import { 
  Workflow, 
  Database, 
  Wrench, 
  Globe, 
  GitBranch, 
  Shield, 
  MessageSquare, 
  Layers, 
  Users, 
  GitMerge, 
  UserCheck, 
  DollarSign, 
  BarChart3 
} from 'lucide-react'

interface Feature {
  title: string
  desc: string[]
  icon: React.ElementType
  svg: React.ReactNode
}

const features: Feature[] = [
  {
    title: 'Agent State Machine',
    desc: [
      'Complete state machine for autonomous task execution',
      'State persistence, recovery, and transition management',
      'Supports complex workflows with conditional branching',
      'State validation and error handling',
      'Multi-agent collaboration with shared state management',
      'Workflow engine for orchestrating multi-step agent tasks'
    ],
    icon: Workflow,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="stateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* State boxes */}
        <rect x="10" y="50" width="40" height="30" rx="4" fill="url(#stateGradient)" stroke="#06b6d4" strokeWidth="2" />
        <text x="30" y="70" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Init</text>
        
        <rect x="70" y="50" width="40" height="30" rx="4" fill="url(#stateGradient)" stroke="#06b6d4" strokeWidth="2" />
        <text x="90" y="70" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Running</text>
        
        <rect x="130" y="50" width="40" height="30" rx="4" fill="url(#stateGradient)" stroke="#06b6d4" strokeWidth="2" />
        <text x="150" y="70" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Complete</text>
        
        {/* Arrows */}
        <path d="M 50 65 L 70 65" stroke="#06b6d4" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M 110 65 L 130 65" stroke="#06b6d4" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        
        {/* Error state */}
        <rect x="70" y="10" width="40" height="30" rx="4" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="2" />
        <text x="90" y="30" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">Error</text>
        <path d="M 90 50 L 90 40" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrowheadRed)" />
        
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" />
          </marker>
          <marker id="arrowheadRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
          </marker>
        </defs>
      </svg>
    )
  },
  {
    title: 'Long-term Memory',
    desc: [
      'HNSW-based vector search for context retrieval',
      'Semantic search across historical conversations and knowledge base',
      'Memory persistence across sessions',
      'Temporal relevance weighting for context ranking'
    ],
    icon: Database,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="memoryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Memory nodes */}
        <circle cx="50" cy="40" r="15" fill="url(#memoryGradient)" stroke="#8b5cf6" strokeWidth="2" />
        <circle cx="100" cy="30" r="15" fill="url(#memoryGradient)" stroke="#8b5cf6" strokeWidth="2" />
        <circle cx="150" cy="40" r="15" fill="url(#memoryGradient)" stroke="#8b5cf6" strokeWidth="2" />
        <circle cx="75" cy="70" r="15" fill="url(#memoryGradient)" stroke="#8b5cf6" strokeWidth="2" />
        <circle cx="125" cy="70" r="15" fill="url(#memoryGradient)" stroke="#8b5cf6" strokeWidth="2" />
        
        {/* Connections */}
        <line x1="50" y1="40" x2="100" y2="30" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="30" x2="150" y2="40" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
        <line x1="50" y1="40" x2="75" y2="70" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="30" x2="125" y2="70" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
        <line x1="150" y1="40" x2="125" y2="70" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
        
        {/* Search query */}
        <circle cx="100" cy="100" r="12" fill="#10b981" stroke="#10b981" strokeWidth="2" />
        <text x="100" y="105" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Q</text>
        <line x1="100" y1="88" x2="100" y2="70" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
      </svg>
    )
  },
  {
    title: 'Tool System',
    desc: [
      'Extensible tool registry: SQL, HTTP, Code, and Shell operations',
      'Tool execution with timeout, validation, and error handling',
      'Streaming responses for long-running operations',
      'Custom tool registration API'
    ],
    icon: Wrench,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="toolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Tool icons */}
        <rect x="20" y="30" width="35" height="35" rx="4" fill="url(#toolGradient)" stroke="#f59e0b" strokeWidth="2" />
        <text x="37.5" y="52" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SQL</text>
        
        <rect x="70" y="30" width="35" height="35" rx="4" fill="url(#toolGradient)" stroke="#f59e0b" strokeWidth="2" />
        <text x="87.5" y="52" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">HTTP</text>
        
        <rect x="120" y="30" width="35" height="35" rx="4" fill="url(#toolGradient)" stroke="#f59e0b" strokeWidth="2" />
        <text x="137.5" y="52" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Code</text>
        
        <rect x="170" y="30" width="35" height="35" rx="4" fill="url(#toolGradient)" stroke="#f59e0b" strokeWidth="2" />
        <text x="187.5" y="52" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Shell</text>
        
        {/* Registry center */}
        <circle cx="100" cy="90" r="20" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        <text x="100" y="96" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Registry</text>
        
        {/* Connections */}
        <line x1="37.5" y1="65" x2="90" y2="90" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
        <line x1="87.5" y1="65" x2="100" y2="90" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
        <line x1="137.5" y1="65" x2="110" y2="90" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
        <line x1="187.5" y1="65" x2="120" y2="90" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
      </svg>
    )
  },
  {
    title: 'REST API & WebSocket',
    desc: [
      'Full CRUD API for agents, sessions, and messages',
      'WebSocket support for real-time streaming responses',
      'RESTful endpoints with OpenAPI documentation',
      'Rate limiting and authentication middleware'
    ],
    icon: Globe,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* REST API */}
        <rect x="20" y="20" width="70" height="40" rx="4" fill="url(#apiGradient)" stroke="#10b981" strokeWidth="2" />
        <text x="55" y="42" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">REST API</text>
        <text x="55" y="55" textAnchor="middle" fill="white" fontSize="8">GET POST PUT DELETE</text>
        
        {/* WebSocket */}
        <rect x="110" y="20" width="70" height="40" rx="4" fill="url(#apiGradient)" stroke="#10b981" strokeWidth="2" />
        <text x="145" y="42" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">WebSocket</text>
        <text x="145" y="55" textAnchor="middle" fill="white" fontSize="8">Real-time Stream</text>
        
        {/* Server */}
        <rect x="70" y="75" width="60" height="30" rx="4" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        <text x="100" y="93" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Server</text>
        
        {/* Connections */}
        <line x1="55" y1="60" x2="90" y2="75" stroke="#10b981" strokeWidth="2" />
        <line x1="145" y1="60" x2="110" y2="75" stroke="#10b981" strokeWidth="2" />
        
        {/* Data flow */}
        <circle cx="30" cy="100" r="4" fill="#10b981" />
        <circle cx="50" cy="100" r="4" fill="#10b981" />
        <circle cx="70" cy="100" r="4" fill="#10b981" />
        <text x="100" y="108" textAnchor="middle" fill="#10b981" fontSize="8">Streaming Data</text>
      </svg>
    )
  },
  {
    title: 'Background Jobs',
    desc: [
      'PostgreSQL-based job queue with worker pool',
      'Retries and poison message handling',
      'SKIP LOCKED for concurrent processing',
      'Crash recovery and job state persistence',
      'Tenant-aware job isolation'
    ],
    icon: GitBranch,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="jobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Queue */}
        <rect x="20" y="20" width="50" height="80" rx="4" fill="#1e293b" stroke="#ec4899" strokeWidth="2" />
        <text x="45" y="40" textAnchor="middle" fill="#ec4899" fontSize="10" fontWeight="bold">Queue</text>
        
        {/* Jobs */}
        <rect x="25" y="50" width="40" height="12" rx="2" fill="url(#jobGradient)" />
        <rect x="25" y="65" width="40" height="12" rx="2" fill="url(#jobGradient)" />
        <rect x="25" y="80" width="40" height="12" rx="2" fill="url(#jobGradient)" />
        
        {/* Workers */}
        <rect x="90" y="30" width="45" height="25" rx="4" fill="url(#jobGradient)" stroke="#ec4899" strokeWidth="2" />
        <text x="112.5" y="47" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Worker 1</text>
        
        <rect x="90" y="60" width="45" height="25" rx="4" fill="url(#jobGradient)" stroke="#ec4899" strokeWidth="2" />
        <text x="112.5" y="77" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Worker 2</text>
        
        <rect x="90" y="90" width="45" height="25" rx="4" fill="url(#jobGradient)" stroke="#ec4899" strokeWidth="2" />
        <text x="112.5" y="107" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Worker 3</text>
        
        {/* Arrows */}
        <path d="M 70 56 L 90 42" stroke="#ec4899" strokeWidth="2" fill="none" markerEnd="url(#arrowheadPink)" />
        <path d="M 70 71 L 90 72" stroke="#ec4899" strokeWidth="2" fill="none" markerEnd="url(#arrowheadPink)" />
        <path d="M 70 86 L 90 102" stroke="#ec4899" strokeWidth="2" fill="none" markerEnd="url(#arrowheadPink)" />
        
        <defs>
          <marker id="arrowheadPink" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#ec4899" />
          </marker>
        </defs>
      </svg>
    )
  },
  {
    title: 'Authentication & Security',
    desc: [
      'API key-based authentication with rate limiting',
      'Role-based access control (RBAC)',
      'Request validation and sanitization',
      'Audit logging for security compliance',
      'Multi-tenant isolation at the database level'
    ],
    icon: Shield,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Shield */}
        <path d="M 100 20 L 120 30 L 120 60 Q 120 80 100 90 Q 80 80 80 60 L 80 30 Z" 
              fill="url(#securityGradient)" stroke="#3b82f6" strokeWidth="2" />
        <text x="100" y="60" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">🔒</text>
        
        {/* API Keys */}
        <rect x="30" y="50" width="40" height="20" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="50" y="63" textAnchor="middle" fill="#3b82f6" fontSize="8">API Key</text>
        
        <rect x="130" y="50" width="40" height="20" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="150" y="63" textAnchor="middle" fill="#3b82f6" fontSize="8">RBAC</text>
        
        {/* Rate Limiter */}
        <rect x="70" y="85" width="60" height="25" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="100" y="102" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">Rate Limiter</text>
        
        {/* Connections */}
        <line x1="50" y1="70" x2="85" y2="85" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
        <line x1="150" y1="70" x2="115" y2="85" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="90" x2="100" y2="85" stroke="#3b82f6" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: 'Session Management',
    desc: [
      'Session lifecycle management with context preservation',
      'Message history tracking and pagination',
      'Multi-agent session support',
      'Session timeout and cleanup policies'
    ],
    icon: MessageSquare,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="sessionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Sessions */}
        <rect x="20" y="20" width="50" height="35" rx="4" fill="url(#sessionGradient)" stroke="#06b6d4" strokeWidth="2" />
        <text x="45" y="38" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Session 1</text>
        <text x="45" y="50" textAnchor="middle" fill="white" fontSize="7">Active</text>
        
        <rect x="80" y="20" width="50" height="35" rx="4" fill="url(#sessionGradient)" stroke="#06b6d4" strokeWidth="2" />
        <text x="105" y="38" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Session 2</text>
        <text x="105" y="50" textAnchor="middle" fill="white" fontSize="7">Active</text>
        
        <rect x="140" y="20" width="50" height="35" rx="4" fill="url(#sessionGradient)" stroke="#06b6d4" strokeWidth="2" />
        <text x="165" y="38" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Session 3</text>
        <text x="165" y="50" textAnchor="middle" fill="white" fontSize="7">Idle</text>
        
        {/* Message History */}
        <rect x="20" y="70" width="160" height="40" rx="4" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
        <text x="100" y="88" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="bold">Message History</text>
        <line x1="30" y1="95" x2="170" y2="95" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
        <text x="100" y="105" textAnchor="middle" fill="#06b6d4" fontSize="8">Context preserved across sessions</text>
        
        {/* Connections */}
        <line x1="45" y1="55" x2="60" y2="70" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6" />
        <line x1="105" y1="55" x2="100" y2="70" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6" />
        <line x1="165" y1="55" x2="140" y2="70" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6" />
      </svg>
    )
  },
  {
    title: 'NeuronDB Integration',
    desc: [
      'Deep integration with NeuronDB for embeddings generation',
      'Vector search and LLM operations',
      'Direct SQL tool access to NeuronDB functions',
      'Efficient context retrieval using HNSW indexes'
    ],
    icon: Layers,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="integrationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* NeuronAgent */}
        <rect x="20" y="20" width="70" height="40" rx="4" fill="url(#integrationGradient)" stroke="#8b5cf6" strokeWidth="2" />
        <text x="55" y="42" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">NeuronAgent</text>
        
        {/* NeuronDB */}
        <rect x="110" y="20" width="70" height="40" rx="4" fill="url(#integrationGradient)" stroke="#8b5cf6" strokeWidth="2" />
        <text x="145" y="42" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">NeuronDB</text>
        
        {/* Integration Layer */}
        <rect x="50" y="75" width="100" height="30" rx="4" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
        <text x="100" y="92" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="bold">Integration Layer</text>
        <text x="100" y="102" textAnchor="middle" fill="#8b5cf6" fontSize="7">Vector Search | Embeddings | LLM</text>
        
        {/* Connections */}
        <line x1="55" y1="60" x2="85" y2="75" stroke="#8b5cf6" strokeWidth="2" />
        <line x1="145" y1="60" x2="115" y2="75" stroke="#8b5cf6" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: 'Multi-Agent Collaboration',
    desc: [
      'Multi-agent collaboration with shared state and communication',
      'Agent-to-agent messaging and coordination',
      'Distributed task execution across multiple agents',
      'Shared memory and context across agent sessions'
    ],
    icon: Users,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="collabGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Agents */}
        <circle cx="50" cy="40" r="18" fill="url(#collabGradient)" stroke="#f59e0b" strokeWidth="2" />
        <text x="50" y="46" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Agent 1</text>
        
        <circle cx="100" cy="30" r="18" fill="url(#collabGradient)" stroke="#f59e0b" strokeWidth="2" />
        <text x="100" y="36" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Agent 2</text>
        
        <circle cx="150" cy="40" r="18" fill="url(#collabGradient)" stroke="#f59e0b" strokeWidth="2" />
        <text x="150" y="46" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Agent 3</text>
        
        {/* Connections */}
        <line x1="68" y1="40" x2="82" y2="30" stroke="#f59e0b" strokeWidth="2" opacity="0.6" />
        <line x1="132" y1="30" x2="132" y2="40" stroke="#f59e0b" strokeWidth="2" opacity="0.6" />
        <line x1="50" y1="58" x2="150" y2="58" stroke="#f59e0b" strokeWidth="2" opacity="0.6" />
        
        {/* Shared State */}
        <rect x="60" y="75" width="80" height="30" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        <text x="100" y="92" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Shared State</text>
        <text x="100" y="102" textAnchor="middle" fill="#f59e0b" fontSize="7">Memory & Context</text>
        
        {/* Connections to shared state */}
        <line x1="50" y1="58" x2="80" y2="75" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="48" x2="100" y2="75" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
        <line x1="150" y1="58" x2="120" y2="75" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
      </svg>
    )
  },
  {
    title: 'Workflow Engine',
    desc: [
      'Workflow engine for orchestrating complex multi-step tasks',
      'Conditional branching and parallel execution',
      'Task dependencies and scheduling',
      'Workflow state management and recovery'
    ],
    icon: GitMerge,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="workflowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Start */}
        <circle cx="30" cy="60" r="12" fill="url(#workflowGradient)" stroke="#10b981" strokeWidth="2" />
        <text x="30" y="65" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Start</text>
        
        {/* Tasks */}
        <rect x="60" y="45" width="30" height="30" rx="4" fill="url(#workflowGradient)" stroke="#10b981" strokeWidth="2" />
        <text x="75" y="63" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Task 1</text>
        
        <rect x="110" y="20" width="30" height="30" rx="4" fill="url(#workflowGradient)" stroke="#10b981" strokeWidth="2" />
        <text x="125" y="38" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Task 2</text>
        
        <rect x="110" y="70" width="30" height="30" rx="4" fill="url(#workflowGradient)" stroke="#10b981" strokeWidth="2" />
        <text x="125" y="88" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Task 3</text>
        
        <rect x="160" y="45" width="30" height="30" rx="4" fill="url(#workflowGradient)" stroke="#10b981" strokeWidth="2" />
        <text x="175" y="63" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">End</text>
        
        {/* Arrows */}
        <path d="M 42 60 L 60 60" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowheadGreen)" />
        <path d="M 90 60 L 110 35" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowheadGreen)" />
        <path d="M 90 60 L 110 85" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowheadGreen)" />
        <path d="M 140 35 L 160 50" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowheadGreen)" />
        <path d="M 140 85 L 160 70" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowheadGreen)" />
        
        <defs>
          <marker id="arrowheadGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
        </defs>
      </svg>
    )
  },
  {
    title: 'Human-in-the-Loop (HITL)',
    desc: [
      'Human-in-the-loop integration for approval workflows',
      'Interactive prompts for user feedback and guidance',
      'Manual intervention points in automated processes',
      'Human review and approval mechanisms'
    ],
    icon: UserCheck,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="hitlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Agent */}
        <rect x="20" y="30" width="50" height="40" rx="4" fill="url(#hitlGradient)" stroke="#3b82f6" strokeWidth="2" />
        <text x="45" y="52" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Agent</text>
        
        {/* Human */}
        <circle cx="150" cy="50" r="25" fill="url(#hitlGradient)" stroke="#3b82f6" strokeWidth="2" />
        <text x="150" y="58" textAnchor="middle" fill="white" fontSize="12">👤</text>
        
        {/* Approval Flow */}
        <rect x="80" y="50" width="50" height="20" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="105" y="63" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">Approval</text>
        
        {/* Arrows */}
        <path d="M 70 50 L 80 60" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrowheadBlue)" />
        <path d="M 130 60 L 125 50" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrowheadBlue)" />
        
        {/* Feedback Loop */}
        <path d="M 150 75 Q 120 90 105 70" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeDasharray="3,3" opacity="0.6" />
        
        <defs>
          <marker id="arrowheadBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
          </marker>
        </defs>
      </svg>
    )
  },
  {
    title: 'Budget Management',
    desc: [
      'Budget management with cost tracking per agent and session',
      'Token usage monitoring and limits',
      'API call budget enforcement',
      'Cost analytics and reporting'
    ],
    icon: DollarSign,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="budgetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Budget Dashboard */}
        <rect x="20" y="20" width="160" height="50" rx="4" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        <text x="100" y="40" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">Budget Dashboard</text>
        <line x1="30" y1="50" x2="170" y2="50" stroke="#10b981" strokeWidth="1" opacity="0.3" />
        
        {/* Metrics */}
        <text x="50" y="65" textAnchor="middle" fill="#10b981" fontSize="8">Tokens: 1.2M</text>
        <text x="100" y="65" textAnchor="middle" fill="#10b981" fontSize="8">API Calls: 5.4K</text>
        <text x="150" y="65" textAnchor="middle" fill="#10b981" fontSize="8">Cost: $45.20</text>
        
        {/* Budget Bar */}
        <rect x="20" y="85" width="160" height="20" rx="4" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        <rect x="25" y="88" width="120" height="14" rx="2" fill="url(#budgetGradient)" />
        <text x="100" y="98" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">75% Used</text>
      </svg>
    )
  },
  {
    title: 'Evaluation Framework',
    desc: [
      'Evaluation framework for agent performance assessment',
      'Metrics collection: success rate, latency, quality scores',
      'A/B testing capabilities for agent configurations',
      'Automated testing and benchmarking tools'
    ],
    icon: BarChart3,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="evalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Chart Bars */}
        <rect x="30" y="70" width="20" height="30" rx="2" fill="url(#evalGradient)" />
        <rect x="60" y="50" width="20" height="50" rx="2" fill="url(#evalGradient)" />
        <rect x="90" y="40" width="20" height="60" rx="2" fill="url(#evalGradient)" />
        <rect x="120" y="60" width="20" height="40" rx="2" fill="url(#evalGradient)" />
        <rect x="150" y="45" width="20" height="55" rx="2" fill="url(#evalGradient)" />
        
        {/* Metrics Labels */}
        <text x="40" y="105" textAnchor="middle" fill="#8b5cf6" fontSize="7">Success</text>
        <text x="70" y="105" textAnchor="middle" fill="#8b5cf6" fontSize="7">Latency</text>
        <text x="100" y="105" textAnchor="middle" fill="#8b5cf6" fontSize="7">Quality</text>
        <text x="130" y="105" textAnchor="middle" fill="#8b5cf6" fontSize="7">A/B Test</text>
        <text x="160" y="105" textAnchor="middle" fill="#8b5cf6" fontSize="7">Benchmark</text>
        
        {/* Title */}
        <text x="100" y="25" textAnchor="middle" fill="#8b5cf6" fontSize="11" fontWeight="bold">Performance Metrics</text>
      </svg>
    )
  }
]

export default function NeuronAgentFeatures() {
  return (
    <div className="w-full">
      <CardGrid columns={3} gap="md">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="group bg-slate-800/60 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              {/* Icon and SVG */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900/60 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                </div>
              </div>
              
              {/* SVG Illustration */}
              <div className="mb-4 rounded-lg bg-slate-950/50 p-4 border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors">
                {feature.svg}
              </div>
              
              {/* Description */}
              <ul className="space-y-2 text-slate-300">
                {feature.desc.map((item, idx) => (
                  <li key={idx} className="flex items-start leading-relaxed text-sm">
                    <span className="text-cyan-400 mr-2 mt-1.5 flex-shrink-0 font-bold">•</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </CardGrid>
    </div>
  )
}
