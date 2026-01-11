'use client'

import React from 'react'
import { CardGrid } from '@/components/ui/cards'
import { 
  Monitor, 
  Radio, 
  Server, 
  Bot, 
  Search, 
  Shield, 
  Activity, 
  FileText, 
  Zap
} from 'lucide-react'

interface Feature {
  title: string
  desc: string[]
  icon: React.ElementType
  svg: React.ReactNode
}

const features: Feature[] = [
  {
    title: 'Unified Dashboard',
    desc: [
      'Single interface for managing all NeuronDB ecosystem components',
      'Profile-based configuration for multiple environments',
      'Automated setup with default profile creation',
      'Centralized settings and configuration management',
      'Environment variable support for flexible configuration'
    ],
    icon: Monitor,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Dashboard panels */}
        <rect x="20" y="20" width="48" height="32" rx="4" fill="url(#dashboardGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="44" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">DB</text>
        
        <rect x="76" y="20" width="48" height="32" rx="4" fill="url(#dashboardGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Agent</text>
        
        <rect x="132" y="20" width="48" height="32" rx="4" fill="url(#dashboardGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="156" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">MCP</text>
        
        {/* Unified interface */}
        <rect x="50" y="68" width="100" height="32" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="85" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Dashboard</text>
        <text x="100" y="95" textAnchor="middle" fill="#64748b" fontSize="7">Single Interface</text>
        
        {/* Connections */}
        <line x1="44" y1="52" x2="75" y2="68" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="52" x2="100" y2="68" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="156" y1="52" x2="125" y2="68" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
  {
    title: 'Real-time Communication',
    desc: [
      'WebSocket support for live updates and streaming responses',
      'Real-time metrics and monitoring',
      'Live log streaming from all components',
      'Event-driven UI updates with instant feedback'
    ],
    icon: Radio,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="realtimeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* WebSocket connection */}
        <circle cx="50" cy="40" r="14" fill="url(#realtimeGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="50" y="45" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">WS</text>
        
        <circle cx="150" cy="40" r="14" fill="url(#realtimeGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="150" y="45" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">UI</text>
        
        {/* Signal waves */}
        <path d="M 64 40 Q 100 30 136 40" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
        <path d="M 64 40 Q 100 50 136 40" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
        
        {/* Real-time indicator */}
        <rect x="70" y="72" width="60" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="88" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Real-time</text>
        <text x="100" y="98" textAnchor="middle" fill="#64748b" fontSize="7">Live Updates</text>
      </svg>
    )
  },
  {
    title: 'MCP Server Integration',
    desc: [
      'Full MCP server integration and testing',
      'Tool inspection and execution',
      'Resource browsing and management',
      'MCP protocol debugging and monitoring'
    ],
    icon: Server,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="mcpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* MCP server */}
        <rect x="70" y="20" width="60" height="38" rx="4" fill="url(#mcpGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">MCP</text>
        <text x="100" y="52" textAnchor="middle" fill="#e2e8f0" fontSize="7">Server</text>
        
        {/* Tools */}
        <rect x="35" y="72" width="42" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="56" y="88" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">Tools</text>
        
        {/* Resources */}
        <rect x="87" y="72" width="50" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="112" y="88" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">Resources</text>
        
        {/* Protocol */}
        <rect x="147" y="72" width="42" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="168" y="88" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">Protocol</text>
        
        {/* Connections */}
        <line x1="88" y1="58" x2="56" y2="72" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="58" x2="112" y2="72" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="112" y1="58" x2="168" y2="72" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
  {
    title: 'Agent Management',
    desc: [
      'Create and manage AI agents through the UI',
      'Session management and monitoring',
      'Message history and context viewing',
      'Agent performance analytics'
    ],
    icon: Bot,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="agentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Agent */}
        <circle cx="100" cy="35" r="16" fill="url(#agentGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="600">🤖</text>
        
        {/* Management panels */}
        <rect x="30" y="68" width="48" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="54" y="84" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">Sessions</text>
        
        <rect x="86" y="68" width="50" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="111" y="84" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">Messages</text>
        
        <rect x="144" y="68" width="42" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="165" y="84" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">Analytics</text>
        
        {/* Connections */}
        <line x1="88" y1="51" x2="54" y2="68" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="51" x2="111" y2="68" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="112" y1="51" x2="165" y2="68" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
  {
    title: 'Vector Search Interface',
    desc: [
      'Perform vector searches through intuitive UI',
      'Collection and index management',
      'Query builder for complex searches',
      'Search result visualization'
    ],
    icon: Search,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="searchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Search input */}
        <rect x="40" y="25" width="120" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="145" cy="39" r="6" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="149" y1="43" x2="152" y2="46" stroke="#94a3b8" strokeWidth="1.5" />
        
        {/* Results */}
        <rect x="20" y="68" width="75" height="32" rx="4" fill="url(#searchGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="57.5" y="85" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Results</text>
        
        <rect x="105" y="68" width="75" height="32" rx="4" fill="url(#searchGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="142.5" y="85" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Visualize</text>
        
        {/* Arrow */}
        <path d="M 100 39 L 100 68" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadSearch)" />
        <path d="M 95 68 L 105 68" stroke="#94a3b8" strokeWidth="1.5" />
        
        <defs>
          <marker id="arrowheadSearch" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    )
  },
  {
    title: 'Secure Authentication',
    desc: [
      'API key-based authentication with rate limiting',
      'Role-based access control (RBAC)',
      'Secure credential management',
      'Audit logging for security compliance'
    ],
    icon: Shield,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="authGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Shield */}
        <path d="M 100 25 L 115 32 L 115 52 Q 115 68 100 78 Q 85 68 85 52 L 85 32 Z" fill="url(#authGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="55" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="600">🔒</text>
        
        {/* Auth methods */}
        <rect x="40" y="88" width="45" height="22" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="62.5" y="101" textAnchor="middle" fill="#94a3b8" fontSize="7">API Keys</text>
        
        <rect x="95" y="88" width="50" height="22" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="120" y="101" textAnchor="middle" fill="#94a3b8" fontSize="7">RBAC</text>
        
        <rect x="155" y="88" width="42" height="22" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="176" y="101" textAnchor="middle" fill="#94a3b8" fontSize="7">Audit</text>
      </svg>
    )
  },
  {
    title: 'Metrics & Monitoring',
    desc: [
      'Built-in metrics collection and health checks for all components',
      'Performance dashboards with real-time updates',
      'Request/response analytics with detailed breakdowns',
      'System resource monitoring and alerting'
    ],
    icon: Activity,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="metricsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Metrics graph */}
        <polyline points="25,75 45,65 65,70 85,55 105,60 125,50 145,58 165,52 175,55" fill="none" stroke="url(#metricsGradient)" strokeWidth="2" />
        <polyline points="25,85 45,80 65,85 85,75 105,80 125,70 145,78 165,72 175,75" fill="none" stroke="url(#metricsGradient)" strokeWidth="1.5" opacity="0.7" />
        
        {/* Dashboard */}
        <rect x="50" y="92" width="100" height="20" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="104" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">Dashboard</text>
        
        {/* Title */}
        <text x="100" y="25" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600">Monitoring</text>
      </svg>
    )
  },
  {
    title: 'Comprehensive Logging',
    desc: [
      'Request/response logging with detailed analytics',
      'Structured logging with search and filtering capabilities',
      'Error tracking and alerting',
      'Historical log analysis with retention policies'
    ],
    icon: FileText,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="logGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Log entries */}
        <rect x="25" y="25" width="150" height="12" rx="2" fill="url(#logGradient)" stroke="#64748b" strokeWidth="1" />
        <rect x="25" y="42" width="150" height="12" rx="2" fill="url(#logGradient)" stroke="#64748b" strokeWidth="1" />
        <rect x="25" y="59" width="150" height="12" rx="2" fill="url(#logGradient)" stroke="#64748b" strokeWidth="1" />
        
        {/* Search/filter */}
        <rect x="60" y="82" width="80" height="26" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="96" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">Search & Filter</text>
        <text x="100" y="106" textAnchor="middle" fill="#64748b" fontSize="6">Structured Logs</text>
      </svg>
    )
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
    icon: Zap,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="setupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Setup flow */}
        <rect x="20" y="25" width="48" height="32" rx="4" fill="url(#setupGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="44" y="42" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Detect</text>
        
        <rect x="76" y="25" width="48" height="32" rx="4" fill="url(#setupGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="42" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Config</text>
        
        <rect x="132" y="25" width="48" height="32" rx="4" fill="url(#setupGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="156" y="42" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Deploy</text>
        
        {/* Automated indicator */}
        <rect x="65" y="72" width="70" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="88" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Automated</text>
        <text x="100" y="98" textAnchor="middle" fill="#64748b" fontSize="7">One Command</text>
        
        {/* Arrows */}
        <path d="M 68 41 L 76 41" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadSetup)" />
        <path d="M 124 41 L 132 41" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadSetup)" />
        
        <defs>
          <marker id="arrowheadSetup" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    )
  },
]

export default function NeuronDesktopFeatures() {
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
