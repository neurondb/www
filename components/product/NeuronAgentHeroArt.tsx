'use client'

import React from 'react'

/**
 * NeuronAgent Hero Art - Clean SVG illustration for hero sections
 * Shows AI agent with memory, tools, and state management
 */
export default function NeuronAgentHeroArt({ 
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
      aria-label="NeuronAgent: AI Agent Runtime"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="agentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="memoryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="toolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.6" />
        </linearGradient>
        <filter id="agentShadow" x="-50%" y="-50%" width="200%" height="200%">
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

      {/* Main agent bot icon */}
      <g transform="translate(100, 100)">
        {/* Bot head */}
        <rect
          x="-30"
          y="-40"
          width="60"
          height="50"
          rx="8"
          fill="url(#agentGradient)"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-700 dark:text-slate-300"
          filter="url(#agentShadow)"
        />
        
        {/* Bot eyes */}
        <circle cx="-12" cy="-20" r="4" fill="currentColor" className="text-blue-500 dark:text-blue-400" />
        <circle cx="12" cy="-20" r="4" fill="currentColor" className="text-blue-500 dark:text-blue-400" />
        <circle cx="-12" cy="-20" r="1.5" fill="#ffffff" />
        <circle cx="12" cy="-20" r="1.5" fill="#ffffff" />
        
        {/* Bot antenna */}
        <line x1="0" y1="-40" x2="0" y2="-50" stroke="currentColor" strokeWidth="2" className="text-slate-600 dark:text-slate-300" />
        <circle cx="0" cy="-50" r="3" fill="url(#memoryGradient)" stroke="#3b82f6" strokeWidth="1.5" />
        
        {/* Bot body */}
        <rect
          x="-25"
          y="10"
          width="50"
          height="60"
          rx="6"
          fill="url(#agentGradient)"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-700 dark:text-slate-300"
          filter="url(#agentShadow)"
        />
        
        {/* Bot chest panel */}
        <rect
          x="-15"
          y="20"
          width="30"
          height="20"
          rx="3"
          fill="url(#memoryGradient)"
          stroke="#3b82f6"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <path d="M -8,30 L 8,30 M 0,22 L 0,38" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      </g>

      {/* Memory icon (top left) */}
      <g transform="translate(35, 35)">
        <circle cx="0" cy="0" r="18" fill="url(#memoryGradient)" stroke="#3b82f6" strokeWidth="2" opacity="0.9" />
        <path
          d="M -8,-6 Q -10,-8 -8,-10 Q -6,-12 -4,-10 Q -2,-8 -4,-6 Q -6,-4 -8,-6 Z M 4,-6 Q 2,-8 4,-10 Q 6,-12 8,-10 Q 10,-8 8,-6 Q 6,-4 4,-6 Z M -6,2 Q -8,4 -6,6 Q -4,8 -2,6 Q 0,4 -2,2 Q -4,0 -6,2 Z M 2,2 Q 0,4 2,6 Q 4,8 6,6 Q 8,4 6,2 Q 4,0 2,2 Z"
          fill="#ffffff"
          opacity="0.8"
        />
      </g>

      {/* Tool icon (top right) */}
      <g transform="translate(165, 35)">
        <rect x="-18" y="-12" width="36" height="24" rx="4" fill="url(#toolGradient)" stroke="#f59e0b" strokeWidth="2" opacity="0.9" />
        <path d="M -10,0 L 10,0 M 0,-8 L 0,8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="-5" cy="-5" r="2" fill="#ffffff" />
        <circle cx="5" cy="5" r="2" fill="#ffffff" />
      </g>

      {/* State machine icon (bottom left) */}
      <g transform="translate(35, 165)">
        <circle cx="0" cy="0" r="18" fill="url(#agentGradient)" stroke="currentColor" strokeWidth="2" className="text-slate-600 dark:text-slate-300" opacity="0.9" />
        <circle cx="-8" cy="-8" r="4" fill="currentColor" className="text-slate-700 dark:text-slate-300" />
        <circle cx="8" cy="-8" r="4" fill="currentColor" className="text-slate-700 dark:text-slate-300" />
        <circle cx="0" cy="8" r="4" fill="currentColor" className="text-slate-700 dark:text-slate-300" />
        <path d="M -8,-8 L 0,8 M 8,-8 L 0,8" stroke="currentColor" strokeWidth="1.5" className="text-slate-500 dark:text-slate-400" />
      </g>

      {/* WebSocket/API icon (bottom right) */}
      <g transform="translate(165, 165)">
        <rect x="-18" y="-12" width="36" height="24" rx="4" fill="url(#agentGradient)" stroke="currentColor" strokeWidth="2" className="text-slate-600 dark:text-slate-300" opacity="0.9" />
        <path d="M -10,-6 L -5,-6 L 0,0 L 5,-6 L 10,-6 M -10,6 L -5,6 L 0,0 L 5,6 L 10,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-slate-700 dark:text-slate-300" fill="none" />
      </g>

      {/* Connection lines */}
      <path
        d="M 50,100 Q 30,60 35,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-slate-400 dark:text-slate-500"
        opacity="0.3"
        strokeDasharray="3,3"
      />
      <path
        d="M 150,100 Q 170,60 165,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-slate-400 dark:text-slate-500"
        opacity="0.3"
        strokeDasharray="3,3"
      />
      <path
        d="M 70,130 Q 30,150 35,170"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-slate-400 dark:text-slate-500"
        opacity="0.3"
        strokeDasharray="3,3"
      />
      <path
        d="M 130,130 Q 170,150 165,170"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-slate-400 dark:text-slate-500"
        opacity="0.3"
        strokeDasharray="3,3"
      />
    </svg>
  )
}



