'use client'

import React from 'react'

/**
 * NeuronDesktop Hero Art - Clean SVG illustration for hero sections
 * Shows unified desktop interface with dashboard and components
 */
export default function NeuronDesktopHeroArt({ 
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
      aria-label="NeuronDesktop: Unified Web Interface"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="desktopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.7" />
        </linearGradient>
        <filter id="desktopShadow" x="-50%" y="-50%" width="200%" height="200%">
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

      {/* Main monitor screen */}
      <g transform="translate(100, 80)">
        {/* Screen frame */}
        <rect
          x="-50"
          y="-35"
          width="100"
          height="70"
          rx="6"
          fill="url(#desktopGradient)"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-700 dark:text-slate-300"
          filter="url(#desktopShadow)"
        />
        
        {/* Screen content */}
        <rect
          x="-45"
          y="-30"
          width="90"
          height="60"
          rx="3"
          fill="url(#screenGradient)"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          opacity="0.9"
        />
        
        {/* Screen content lines (dashboard UI) */}
        <line x1="-40" y1="-20" x2="40" y2="-20" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
        <line x1="-40" y1="-5" x2="20" y2="-5" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        <line x1="-40" y1="10" x2="35" y2="10" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        <line x1="-40" y1="25" x2="30" y2="25" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        
        {/* Dashboard widgets */}
        <rect x="-35" y="-15" width="12" height="8" rx="1" fill="#ffffff" opacity="0.3" />
        <rect x="-20" y="-15" width="12" height="8" rx="1" fill="#ffffff" opacity="0.3" />
        <rect x="-35" y="0" width="25" height="6" rx="1" fill="#ffffff" opacity="0.2" />
      </g>

      {/* Monitor stand */}
      <rect
        x="85"
        y="115"
        width="30"
        height="8"
        rx="2"
        fill="url(#desktopGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-700 dark:text-slate-300"
        filter="url(#desktopShadow)"
      />
      <rect
        x="92"
        y="123"
        width="16"
        height="25"
        rx="2"
        fill="url(#desktopGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-700 dark:text-slate-300"
        filter="url(#desktopShadow)"
      />

      {/* Component icons around monitor */}
      {/* Database icon (top left) */}
      <g transform="translate(30, 30)">
        <ellipse cx="0" cy="-5" rx="10" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-500 dark:text-slate-300" />
        <rect x="-10" y="-5" width="20" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-500 dark:text-slate-300" />
        <ellipse cx="0" cy="7" rx="10" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-500 dark:text-slate-300" />
      </g>

      {/* Agent icon (top right) */}
      <g transform="translate(170, 30)">
        <rect x="-8" y="-10" width="16" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-500 dark:text-slate-300" />
        <circle cx="0" cy="-5" r="2" fill="currentColor" className="text-slate-500 dark:text-slate-300" />
        <rect x="-4" y="2" width="8" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-500 dark:text-slate-300" />
      </g>

      {/* MCP icon (bottom left) */}
      <g transform="translate(30, 170)">
        <rect x="-8" y="-8" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-500 dark:text-slate-300" />
        <circle cx="0" cy="0" r="4" fill="currentColor" className="text-slate-500 dark:text-slate-300" opacity="0.5" />
        <rect x="-6" y="-6" width="4" height="4" rx="1" fill="currentColor" className="text-slate-500 dark:text-slate-300" />
        <rect x="2" y="2" width="4" height="4" rx="1" fill="currentColor" className="text-slate-500 dark:text-slate-300" />
      </g>

      {/* Metrics icon (bottom right) */}
      <g transform="translate(170, 170)">
        <path
          d="M -8,8 L -4,4 L 0,6 L 4,0 L 8,2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-slate-500 dark:text-slate-300"
        />
        <circle cx="-4" cy="4" r="1.5" fill="currentColor" className="text-slate-500 dark:text-slate-400" />
        <circle cx="0" cy="6" r="1.5" fill="currentColor" className="text-slate-500 dark:text-slate-400" />
        <circle cx="4" cy="0" r="1.5" fill="currentColor" className="text-slate-500 dark:text-slate-400" />
        <circle cx="8" cy="2" r="1.5" fill="currentColor" className="text-slate-500 dark:text-slate-400" />
      </g>

      {/* Connection lines from monitor to components */}
      <path
        d="M 50,80 Q 30,50 30,35"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-slate-400 dark:text-slate-500"
        opacity="0.3"
        strokeDasharray="3,3"
      />
      <path
        d="M 150,80 Q 170,50 170,35"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-slate-400 dark:text-slate-500"
        opacity="0.3"
        strokeDasharray="3,3"
      />
      <path
        d="M 50,115 Q 30,140 30,165"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-slate-400 dark:text-slate-500"
        opacity="0.3"
        strokeDasharray="3,3"
      />
      <path
        d="M 150,115 Q 170,140 170,165"
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



