'use client'

import React from 'react'

/**
 * PostgreSQL Elephant Mascot - Clean SVG sketch for hero sections
 * Styled to match NeuronDB's modern, technical aesthetic
 */
export default function PostgresElephant({ 
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
      aria-label="PostgreSQL elephant mascot"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradient for depth */}
        <linearGradient id="elephantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.75" />
        </linearGradient>
        
        {/* Subtle shadow filter */}
        <filter id="elephantShadow" x="-50%" y="-50%" width="200%" height="200%">
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

      {/* Elephant body - main shape */}
      <ellipse
        cx="100"
        cy="130"
        rx="65"
        ry="45"
        fill="url(#elephantGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-300"
        filter="url(#elephantShadow)"
      />

      {/* Head */}
      <ellipse
        cx="145"
        cy="100"
        rx="40"
        ry="35"
        fill="url(#elephantGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-300"
        filter="url(#elephantShadow)"
      />

      {/* Trunk */}
      <path
        d="M 180 105 Q 195 125, 190 150 Q 188 165, 185 170 Q 182 175, 178 172 Q 175 170, 177 165 Q 180 150, 175 140 Q 170 130, 175 120 Q 180 110, 180 105 Z"
        fill="url(#elephantGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-300"
        filter="url(#elephantShadow)"
      />

      {/* Ear (left) */}
      <ellipse
        cx="115"
        cy="75"
        rx="25"
        ry="35"
        fill="url(#elephantGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-300"
        filter="url(#elephantShadow)"
      />

      {/* Ear (right) */}
      <ellipse
        cx="135"
        cy="80"
        rx="22"
        ry="30"
        fill="url(#elephantGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-300"
        filter="url(#elephantShadow)"
      />

      {/* Eye */}
      <circle
        cx="155"
        cy="95"
        r="4"
        fill="currentColor"
        className="text-white"
      />
      <circle
        cx="156"
        cy="94"
        r="1.5"
        fill="currentColor"
        className="text-slate-900"
      />

      {/* Tusk (left) */}
      <ellipse
        cx="165"
        cy="115"
        rx="3"
        ry="12"
        fill="currentColor"
        className="text-slate-500"
        opacity="0.9"
      />

      {/* Tusk (right) - slightly visible */}
      <ellipse
        cx="170"
        cy="118"
        rx="2.5"
        ry="10"
        fill="currentColor"
        className="text-slate-500"
        opacity="0.7"
      />

      {/* Leg (front left) */}
      <ellipse
        cx="75"
        cy="170"
        rx="12"
        ry="25"
        fill="url(#elephantGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-300"
        filter="url(#elephantShadow)"
      />

      {/* Leg (front right) */}
      <ellipse
        cx="95"
        cy="172"
        rx="12"
        ry="23"
        fill="url(#elephantGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-300"
        filter="url(#elephantShadow)"
      />

      {/* Leg (back left) */}
      <ellipse
        cx="115"
        cy="173"
        rx="12"
        ry="22"
        fill="url(#elephantGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-300"
        filter="url(#elephantShadow)"
      />

      {/* Leg (back right) */}
      <ellipse
        cx="135"
        cy="171"
        rx="12"
        ry="24"
        fill="url(#elephantGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-300"
        filter="url(#elephantShadow)"
      />

      {/* Tail */}
      <path
        d="M 35 140 Q 20 130, 15 125 Q 12 122, 10 125 Q 8 128, 12 130 Q 18 135, 25 138 Q 30 140, 35 140 Z"
        fill="url(#elephantGradient)"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-300"
        filter="url(#elephantShadow)"
      />

      {/* Tail tip */}
      <ellipse
        cx="12"
        cy="128"
        rx="3"
        ry="4"
        fill="currentColor"
        className="text-slate-300"
      />

      {/* Wrinkles/details on body for texture */}
      <path
        d="M 70 125 Q 80 120, 90 125"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-slate-500"
        opacity="0.4"
      />
      <path
        d="M 75 135 Q 85 130, 95 135"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-slate-500"
        opacity="0.4"
      />
      <path
        d="M 110 90 Q 120 85, 130 90"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-slate-500"
        opacity="0.4"
      />

      {/* Ear detail lines */}
      <ellipse
        cx="115"
        cy="75"
        rx="18"
        ry="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-slate-300"
        opacity="0.5"
      />
    </svg>
  )
}



