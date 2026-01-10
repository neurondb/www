'use client'

import React from 'react'

/**
 * NeuronMCP Hero Art - Clean SVG illustration for hero sections
 * Shows MCP protocol server with tools and connections
 */
export default function NeuronMCPHeroArt({ 
  className = '',
  size = 200 
}: { 
  className?: string
  size?: number 
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="NeuronMCP: Model Context Protocol Server"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mcpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="toolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.6" />
        </linearGradient>
        <filter id="mcpShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="1" dy="1" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Central server/plug icon */}
      <g transform="translate(100, 100)">
        {/* Main plug body */}
        <rect
          x="-25"
          y="-30"
          width="50"
          height="60"
          rx="8"
          fill="url(#mcpGradient)"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-700 dark:text-slate-300"
          filter="url(#mcpShadow)"
        />
        
        {/* Plug prongs */}
        <rect x="-20" y="-40" width="8" height="12" rx="2" fill="currentColor" className="text-slate-600 dark:text-slate-300" />
        <rect x="12" y="-40" width="8" height="12" rx="2" fill="currentColor" className="text-slate-600 dark:text-slate-300" />
        
        {/* Center connection point */}
        <circle cx="0" cy="0" r="8" fill="url(#toolGradient)" stroke="#10b981" strokeWidth="2" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" opacity="0.8" />
      </g>

      {/* Tool icons around the server */}
      {/* Tool 1 - Vector Search (top) */}
      <g transform="translate(100, 30)">
        <rect x="-15" y="-10" width="30" height="20" rx="4" fill="url(#toolGradient)" stroke="#10b981" strokeWidth="1.5" opacity="0.9" />
        <path d="M -8,0 L 8,0 M 0,-8 L 0,8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="-4" cy="-4" r="1.5" fill="#ffffff" />
        <circle cx="4" cy="4" r="1.5" fill="#ffffff" />
      </g>

      {/* Tool 2 - ML (right) */}
      <g transform="translate(170, 100)">
        <rect x="-15" y="-10" width="30" height="20" rx="4" fill="url(#toolGradient)" stroke="#10b981" strokeWidth="1.5" opacity="0.9" />
        <path
          d="M -8,-5 Q -10,-8 -8,-10 Q -5,-12 -2,-10 Q 0,-8 -2,-5 Q -5,-3 -8,-5 Z M 2,-5 Q 0,-8 2,-10 Q 5,-12 8,-10 Q 10,-8 8,-5 Q 5,-3 2,-5 Z"
          fill="#ffffff"
          opacity="0.8"
        />
      </g>

      {/* Tool 3 - RAG (bottom) */}
      <g transform="translate(100, 170)">
        <rect x="-15" y="-10" width="30" height="20" rx="4" fill="url(#toolGradient)" stroke="#10b981" strokeWidth="1.5" opacity="0.9" />
        <path
          d="M 0,-8 L 4,-2 L 8,-2 L 5,2 L 6,8 L 0,4 L -6,8 L -5,2 L -8,-2 L -4,-2 Z"
          fill="#ffffff"
          opacity="0.8"
        />
      </g>

      {/* Tool 4 - Database (left) */}
      <g transform="translate(30, 100)">
        <rect x="-15" y="-10" width="30" height="20" rx="4" fill="url(#toolGradient)" stroke="#10b981" strokeWidth="1.5" opacity="0.9" />
        <ellipse cx="0" cy="-3" rx="8" ry="3" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
        <rect x="-8" y="-3" width="16" height="8" rx="2" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
        <ellipse cx="0" cy="5" rx="8" ry="3" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
      </g>

      {/* Connection lines from server to tools */}
      <line x1="100" y1="70" x2="100" y2="50" stroke="currentColor" strokeWidth="1.5" className="text-slate-400 dark:text-slate-500" opacity="0.3" strokeDasharray="2,2" />
      <line x1="130" y1="100" x2="155" y2="100" stroke="currentColor" strokeWidth="1.5" className="text-slate-400 dark:text-slate-500" opacity="0.3" strokeDasharray="2,2" />
      <line x1="100" y1="130" x2="100" y2="160" stroke="currentColor" strokeWidth="1.5" className="text-slate-400 dark:text-slate-500" opacity="0.3" strokeDasharray="2,2" />
      <line x1="70" y1="100" x2="45" y2="100" stroke="currentColor" strokeWidth="1.5" className="text-slate-400 dark:text-slate-500" opacity="0.3" strokeDasharray="2,2" />

      {/* Protocol indicator (JSON-RPC) */}
      <g transform="translate(100, 140)">
        <rect x="-30" y="-8" width="60" height="16" rx="3" fill="url(#mcpGradient)" stroke="currentColor" strokeWidth="1" className="text-slate-600 dark:text-slate-300" opacity="0.7" />
        <text 
          x="0" 
          y="4" 
          textAnchor="middle" 
          fontSize="8"
          fontFamily="monospace"
          fill="currentColor"
          className="text-slate-700 dark:text-slate-300"
          opacity="0.9"
        >
          JSON-RPC 2.0
        </text>
      </g>
    </svg>
  )
}

