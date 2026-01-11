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
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* State boxes */}
        <rect x="10" y="50" width="45" height="32" rx="4" fill="url(#stateGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="32.5" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">Init</text>
        
        <rect x="70" y="50" width="50" height="32" rx="4" fill="url(#stateGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="95" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">Running</text>
        
        <rect x="135" y="50" width="50" height="32" rx="4" fill="url(#stateGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="160" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">Complete</text>
        
        {/* Arrows */}
        <path d="M 55 66 L 70 66" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadState)" />
        <path d="M 120 66 L 135 66" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadState)" />
        
        {/* Error state */}
        <rect x="75" y="10" width="40" height="28" rx="4" fill="#64748b" fillOpacity="0.3" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="95" y="28" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="600">Error</text>
        <path d="M 95 50 L 95 38" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadError)" />
        
        <defs>
          <marker id="arrowheadState" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
          </marker>
          <marker id="arrowheadError" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
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
            <stop offset="0%" stopColor="#475569" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* Memory nodes */}
        <circle cx="50" cy="40" r="14" fill="url(#memoryGradient)" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="100" cy="30" r="14" fill="url(#memoryGradient)" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="150" cy="40" r="14" fill="url(#memoryGradient)" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="75" cy="70" r="14" fill="url(#memoryGradient)" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="125" cy="70" r="14" fill="url(#memoryGradient)" stroke="#64748b" strokeWidth="1.5" />
        
        {/* Connections */}
        <line x1="50" y1="40" x2="100" y2="30" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="30" x2="150" y2="40" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="50" y1="40" x2="75" y2="70" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="30" x2="125" y2="70" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="150" y1="40" x2="125" y2="70" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        
        {/* Search query */}
        <circle cx="100" cy="100" r="11" fill="#475569" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="105" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">Q</text>
        <line x1="100" y1="89" x2="100" y2="84" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2,2" />
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
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Tool icons */}
        <rect x="15" y="28" width="38" height="32" rx="4" fill="url(#toolGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="34" y="50" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="600">SQL</text>
        
        <rect x="62" y="28" width="38" height="32" rx="4" fill="url(#toolGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="81" y="50" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="600">HTTP</text>
        
        <rect x="109" y="28" width="38" height="32" rx="4" fill="url(#toolGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="128" y="50" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="600">Code</text>
        
        <rect x="156" y="28" width="38" height="32" rx="4" fill="url(#toolGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="175" y="50" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="600">Shell</text>
        
        {/* Registry center */}
        <circle cx="100" cy="90" r="18" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="95" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Registry</text>
        
        {/* Connections */}
        <line x1="34" y1="60" x2="88" y2="90" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="81" y1="60" x2="100" y2="90" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="128" y1="60" x2="112" y2="90" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="175" y1="60" x2="122" y2="90" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
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
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* REST API */}
        <rect x="15" y="18" width="65" height="38" rx="4" fill="url(#apiGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="47.5" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="600">REST API</text>
        <text x="47.5" y="50" textAnchor="middle" fill="#cbd5e1" fontSize="7">GET POST PUT</text>
        
        {/* WebSocket */}
        <rect x="100" y="18" width="75" height="38" rx="4" fill="url(#apiGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="137.5" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="600">WebSocket</text>
        <text x="137.5" y="50" textAnchor="middle" fill="#cbd5e1" fontSize="7">Real-time</text>
        
        {/* Server */}
        <rect x="65" y="72" width="60" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="95" y="90" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Server</text>
        
        {/* Connections */}
        <line x1="47.5" y1="56" x2="85" y2="72" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="137.5" y1="56" x2="105" y2="72" stroke="#94a3b8" strokeWidth="1.5" />
        
        {/* Data flow */}
        <circle cx="25" cy="105" r="3" fill="#64748b" />
        <circle cx="45" cy="105" r="3" fill="#64748b" />
        <circle cx="65" cy="105" r="3" fill="#64748b" />
        <text x="100" y="109" textAnchor="middle" fill="#94a3b8" fontSize="7">Streaming</text>
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
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Queue */}
        <rect x="18" y="18" width="48" height="78" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="42" y="36" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Queue</text>
        
        {/* Jobs */}
        <rect x="23" y="48" width="38" height="11" rx="2" fill="url(#jobGradient)" />
        <rect x="23" y="62" width="38" height="11" rx="2" fill="url(#jobGradient)" />
        <rect x="23" y="76" width="38" height="11" rx="2" fill="url(#jobGradient)" />
        
        {/* Workers */}
        <rect x="88" y="28" width="42" height="23" rx="4" fill="url(#jobGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="109" y="43" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Worker 1</text>
        
        <rect x="88" y="57" width="42" height="23" rx="4" fill="url(#jobGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="109" y="72" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Worker 2</text>
        
        <rect x="88" y="86" width="42" height="23" rx="4" fill="url(#jobGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="109" y="101" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Worker 3</text>
        
        {/* Arrows */}
        <path d="M 66 53.5 L 88 39" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadJob)" />
        <path d="M 66 67.5 L 88 68" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadJob)" />
        <path d="M 66 81.5 L 88 97" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadJob)" />
        
        <defs>
          <marker id="arrowheadJob" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
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
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Shield */}
        <path d="M 100 18 L 118 27 L 118 56 Q 118 75 100 84 Q 82 75 82 56 L 82 27 Z" 
              fill="url(#securityGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="58" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="600">🔒</text>
        
        {/* API Keys */}
        <rect x="28" y="48" width="36" height="18" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="46" y="60" textAnchor="middle" fill="#94a3b8" fontSize="7">API Key</text>
        
        <rect x="128" y="48" width="36" height="18" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="146" y="60" textAnchor="middle" fill="#94a3b8" fontSize="7">RBAC</text>
        
        {/* Rate Limiter */}
        <rect x="68" y="82" width="56" height="22" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="96" y="97" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">Rate Limiter</text>
        
        {/* Connections */}
        <line x1="46" y1="66" x2="82" y2="82" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="146" y1="66" x2="112" y2="82" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="84" x2="96" y2="82" stroke="#94a3b8" strokeWidth="1.5" />
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
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Sessions */}
        <rect x="18" y="18" width="48" height="32" rx="4" fill="url(#sessionGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="42" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Session 1</text>
        <text x="42" y="47" textAnchor="middle" fill="#cbd5e1" fontSize="7">Active</text>
        
        <rect x="76" y="18" width="48" height="32" rx="4" fill="url(#sessionGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Session 2</text>
        <text x="100" y="47" textAnchor="middle" fill="#cbd5e1" fontSize="7">Active</text>
        
        <rect x="134" y="18" width="48" height="32" rx="4" fill="url(#sessionGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="158" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Session 3</text>
        <text x="158" y="47" textAnchor="middle" fill="#cbd5e1" fontSize="7">Idle</text>
        
        {/* Message History */}
        <rect x="18" y="68" width="164" height="38" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="84" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Message History</text>
        <line x1="28" y1="93" x2="172" y2="93" stroke="#64748b" strokeWidth="1" opacity="0.3" />
        <text x="100" y="103" textAnchor="middle" fill="#94a3b8" fontSize="7">Context preserved</text>
        
        {/* Connections */}
        <line x1="42" y1="50" x2="58" y2="68" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="50" x2="100" y2="68" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="158" y1="50" x2="142" y2="68" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
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
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* NeuronAgent */}
        <rect x="18" y="18" width="68" height="38" rx="4" fill="url(#integrationGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="52" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="600">NeuronAgent</text>
        
        {/* NeuronDB */}
        <rect x="108" y="18" width="68" height="38" rx="4" fill="url(#integrationGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="142" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="600">NeuronDB</text>
        
        {/* Integration Layer */}
        <rect x="48" y="72" width="98" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="97" y="88" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Integration</text>
        <text x="97" y="97" textAnchor="middle" fill="#64748b" fontSize="6">Vector | Embeddings | LLM</text>
        
        {/* Connections */}
        <line x1="52" y1="56" x2="83" y2="72" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="142" y1="56" x2="111" y2="72" stroke="#94a3b8" strokeWidth="1.5" />
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
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Agents */}
        <circle cx="50" cy="38" r="16" fill="url(#collabGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="50" y="43" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">Agent 1</text>
        
        <circle cx="100" cy="28" r="16" fill="url(#collabGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="33" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">Agent 2</text>
        
        <circle cx="150" cy="38" r="16" fill="url(#collabGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="150" y="43" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">Agent 3</text>
        
        {/* Connections */}
        <line x1="66" y1="38" x2="84" y2="28" stroke="#94a3b8" strokeWidth="1.5" opacity="0.5" />
        <line x1="132" y1="28" x2="134" y2="38" stroke="#94a3b8" strokeWidth="1.5" opacity="0.5" />
        <line x1="50" y1="54" x2="150" y2="54" stroke="#94a3b8" strokeWidth="1.5" opacity="0.5" />
        
        {/* Shared State */}
        <rect x="58" y="72" width="78" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="97" y="88" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Shared State</text>
        <text x="97" y="97" textAnchor="middle" fill="#64748b" fontSize="7">Memory & Context</text>
        
        {/* Connections to shared state */}
        <line x1="50" y1="54" x2="78" y2="72" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="44" x2="97" y2="72" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="150" y1="54" x2="118" y2="72" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
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
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Start */}
        <circle cx="28" cy="58" r="11" fill="url(#workflowGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="28" y="63" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Start</text>
        
        {/* Tasks */}
        <rect x="58" y="43" width="28" height="28" rx="4" fill="url(#workflowGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="72" y="61" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Task 1</text>
        
        <rect x="108" y="18" width="28" height="28" rx="4" fill="url(#workflowGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="122" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Task 2</text>
        
        <rect x="108" y="68" width="28" height="28" rx="4" fill="url(#workflowGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="122" y="86" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Task 3</text>
        
        <rect x="158" y="43" width="28" height="28" rx="4" fill="url(#workflowGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="172" y="61" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">End</text>
        
        {/* Arrows */}
        <path d="M 39 58 L 58 58" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadWorkflow)" />
        <path d="M 86 58 L 108 32" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadWorkflow)" />
        <path d="M 86 58 L 108 82" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadWorkflow)" />
        <path d="M 136 32 L 158 47" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadWorkflow)" />
        <path d="M 136 82 L 158 67" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadWorkflow)" />
        
        <defs>
          <marker id="arrowheadWorkflow" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
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
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Agent */}
        <rect x="18" y="28" width="48" height="38" rx="4" fill="url(#hitlGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="42" y="50" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">Agent</text>
        
        {/* Human */}
        <circle cx="148" cy="48" r="23" fill="url(#hitlGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="148" y="56" textAnchor="middle" fill="#e2e8f0" fontSize="12">👤</text>
        
        {/* Approval Flow */}
        <rect x="78" y="48" width="48" height="18" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="102" y="60" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">Approval</text>
        
        {/* Arrows */}
        <path d="M 66 48 L 78 57" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadHITL)" />
        <path d="M 126 57 L 122 48" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadHITL)" />
        
        {/* Feedback Loop */}
        <path d="M 148 73 Q 118 88 105 68" stroke="#94a3b8" strokeWidth="1" fill="none" strokeDasharray="2,2" opacity="0.5" />
        
        <defs>
          <marker id="arrowheadHITL" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
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
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Budget Dashboard */}
        <rect x="18" y="18" width="164" height="48" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="36" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600">Budget Dashboard</text>
        <line x1="28" y1="48" x2="172" y2="48" stroke="#64748b" strokeWidth="1" opacity="0.3" />
        
        {/* Metrics */}
        <text x="50" y="62" textAnchor="middle" fill="#94a3b8" fontSize="7">Tokens: 1.2M</text>
        <text x="100" y="62" textAnchor="middle" fill="#94a3b8" fontSize="7">API: 5.4K</text>
        <text x="150" y="62" textAnchor="middle" fill="#94a3b8" fontSize="7">Cost: $45</text>
        
        {/* Budget Bar */}
        <rect x="18" y="82" width="164" height="18" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <rect x="23" y="85" width="120" height="12" rx="2" fill="url(#budgetGradient)" />
        <text x="100" y="94" textAnchor="middle" fill="#e2e8f0" fontSize="7" fontWeight="600">75% Used</text>
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
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Chart Bars */}
        <rect x="28" y="68" width="18" height="28" rx="2" fill="url(#evalGradient)" />
        <rect x="58" y="48" width="18" height="48" rx="2" fill="url(#evalGradient)" />
        <rect x="88" y="38" width="18" height="58" rx="2" fill="url(#evalGradient)" />
        <rect x="118" y="58" width="18" height="38" rx="2" fill="url(#evalGradient)" />
        <rect x="148" y="43" width="18" height="53" rx="2" fill="url(#evalGradient)" />
        
        {/* Metrics Labels */}
        <text x="37" y="103" textAnchor="middle" fill="#94a3b8" fontSize="7">Success</text>
        <text x="67" y="103" textAnchor="middle" fill="#94a3b8" fontSize="7">Latency</text>
        <text x="97" y="103" textAnchor="middle" fill="#94a3b8" fontSize="7">Quality</text>
        <text x="127" y="103" textAnchor="middle" fill="#94a3b8" fontSize="7">A/B Test</text>
        <text x="157" y="103" textAnchor="middle" fill="#94a3b8" fontSize="7">Benchmark</text>
        
        {/* Title */}
        <text x="100" y="23" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600">Performance</text>
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
