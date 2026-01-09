'use client'

import React from 'react'

/**
 * NeuronDB Hero Art - Clean SVG illustration for hero sections
 * Shows database with AI/ML capabilities (vector search, ML, RAG)
 */
export default function NeuronDBHeroArt({ 
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
      aria-label="NeuronDB: PostgreSQL AI Extension"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="dbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="vectorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="mlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.6" />
        </linearGradient>
        <filter id="artShadow" x="-50%" y="-50%" width="200%" height="200%">
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

      {/* Main database cylinder */}
      <ellipse
        cx="100"
        cy="140"
        rx="50"
        ry="15"
        fill="url(#dbGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-700 dark:text-slate-300"
        filter="url(#artShadow)"
      />
      <rect
        x="50"
        y="80"
        width="100"
        height="60"
        rx="25"
        fill="url(#dbGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-700 dark:text-slate-300"
        filter="url(#artShadow)"
      />
      <ellipse
        cx="100"
        cy="80"
        rx="50"
        ry="15"
        fill="url(#dbGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-700 dark:text-slate-300"
        filter="url(#artShadow)"
      />

      {/* Database lines (data) */}
      <line x1="65" y1="95" x2="135" y2="95" stroke="currentColor" strokeWidth="1.5" className="text-slate-500 dark:text-slate-400" opacity="0.5" />
      <line x1="70" y1="110" x2="130" y2="110" stroke="currentColor" strokeWidth="1.5" className="text-slate-500 dark:text-slate-400" opacity="0.5" />
      <line x1="65" y1="125" x2="135" y2="125" stroke="currentColor" strokeWidth="1.5" className="text-slate-500 dark:text-slate-400" opacity="0.5" />

      {/* Vector search icon (top left) */}
      <g transform="translate(30, 30)">
        <circle cx="0" cy="0" r="18" fill="url(#vectorGradient)" stroke="#8b5cf6" strokeWidth="2" opacity="0.9" />
        <path d="M -8,-8 L 8,8 M 8,-8 L -8,8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="-5" cy="-5" r="2" fill="#ffffff" />
        <circle cx="5" cy="5" r="2" fill="#ffffff" />
      </g>

      {/* ML/Brain icon (top right) */}
      <g transform="translate(170, 35)">
        <path
          d="M -12,-8 Q -15,-12 -12,-15 Q -8,-18 -5,-15 Q -2,-12 -5,-8 Q -8,-5 -12,-8 Z M 5,-8 Q 2,-12 5,-15 Q 8,-18 12,-15 Q 15,-12 12,-8 Q 8,-5 5,-8 Z M -8,0 Q -10,3 -8,6 Q -5,9 -2,6 Q 0,3 -2,0 Q -5,-3 -8,0 Z M 2,0 Q 0,3 2,6 Q 5,9 8,6 Q 10,3 8,0 Q 5,-3 2,0 Z"
          fill="url(#mlGradient)"
          stroke="#10b981"
          strokeWidth="1.5"
          opacity="0.9"
        />
      </g>

      {/* RAG/Spark icon (bottom left) */}
      <g transform="translate(25, 160)">
        <path
          d="M 0,-12 L 3,-3 L 12,-3 L 4,2 L 7,11 L 0,5 L -7,11 L -4,2 L -12,-3 L -3,-3 Z"
          fill="#fbbf24"
          stroke="#f59e0b"
          strokeWidth="1.5"
          opacity="0.9"
        />
      </g>

      {/* Connection lines from database to features */}
      <path
        d="M 50,110 Q 20,80 30,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-slate-400 dark:text-slate-500"
        opacity="0.3"
        strokeDasharray="3,3"
      />
      <path
        d="M 150,110 Q 180,80 170,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-slate-400 dark:text-slate-500"
        opacity="0.3"
        strokeDasharray="3,3"
      />
      <path
        d="M 50,130 Q 20,150 25,170"
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



