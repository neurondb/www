'use client'

import React from 'react'

export default function ArchitectureDiagramSVG() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <svg 
        viewBox="0 0 1200 600" 
        className="w-full h-auto"
        style={{ fontFamily: 'SF Mono, Monaco, monospace' }}
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path 
              d="M 20 0 L 0 0 0 20" 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="0.5" 
              opacity="0.3"
              className="dark:stroke-slate-700"
            />
          </pattern>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#64748b" className="dark:fill-slate-500" />
          </marker>
        </defs>

        {/* Background Grid */}
        <rect width="1200" height="600" fill="url(#grid)" />

        {/* Layer 1: Applications */}
        <g id="applications">
          <rect 
            x="100" 
            y="40" 
            width="1000" 
            height="100" 
            rx="8"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            className="dark:stroke-slate-700"
          />
          <text 
            x="600" 
            y="85" 
            textAnchor="middle"
            fontSize="20"
            fontWeight="600"
            fill="#0f172a"
            className="dark:fill-white"
          >
            Applications
          </text>
          <text 
            x="600" 
            y="115" 
            textAnchor="middle"
            fontSize="14"
            fill="#64748b"
            className="dark:fill-slate-400"
          >
            Python • TypeScript • JavaScript • SQL
          </text>
        </g>

        {/* Arrow down */}
        <line 
          x1="600" 
          y1="140" 
          x2="600" 
          y2="180" 
          stroke="#64748b"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          className="dark:stroke-slate-500"
        />

        {/* Layer 2: NeuronAgent & NeuronMCP */}
        <g id="agent-layer">
          {/* NeuronAgent */}
          <rect 
            x="150" 
            y="200" 
            width="400" 
            height="140" 
            rx="8"
            fill="#eef2ff"
            stroke="#6366f1"
            strokeWidth="2"
            className="dark:fill-slate-800 dark:stroke-indigo-400"
          />
          <text 
            x="350" 
            y="235" 
            textAnchor="middle"
            fontSize="18"
            fontWeight="600"
            fill="#4338ca"
            className="dark:fill-indigo-300"
          >
            NeuronAgent
          </text>
          <text 
            x="350" 
            y="260" 
            textAnchor="middle"
            fontSize="12"
            fill="#475569"
            className="dark:fill-slate-300"
          >
            Agent Runtime
          </text>
          <text 
            x="350" 
            y="285" 
            textAnchor="middle"
            fontSize="12"
            fill="#475569"
            className="dark:fill-slate-300"
          >
            Tool Execution
          </text>
          <text 
            x="350" 
            y="310" 
            textAnchor="middle"
            fontSize="12"
            fill="#475569"
            className="dark:fill-slate-300"
          >
            LLM Integration
          </text>

          {/* NeuronMCP */}
          <rect 
            x="650" 
            y="200" 
            width="400" 
            height="140" 
            rx="8"
            fill="#fefce8"
            stroke="#eab308"
            strokeWidth="2"
            className="dark:fill-slate-800 dark:stroke-yellow-400"
          />
          <text 
            x="850" 
            y="235" 
            textAnchor="middle"
            fontSize="18"
            fontWeight="600"
            fill="#a16207"
            className="dark:fill-yellow-300"
          >
            NeuronMCP
          </text>
          <text 
            x="850" 
            y="260" 
            textAnchor="middle"
            fontSize="12"
            fill="#475569"
            className="dark:fill-slate-300"
          >
            MCP Server
          </text>
          <text 
            x="850" 
            y="285" 
            textAnchor="middle"
            fontSize="12"
            fill="#475569"
            className="dark:fill-slate-300"
          >
            100+ Tools
          </text>
          <text 
            x="850" 
            y="310" 
            textAnchor="middle"
            fontSize="12"
            fill="#475569"
            className="dark:fill-slate-300"
          >
            Claude Desktop
          </text>
        </g>

        {/* Arrows down */}
        <line 
          x1="350" 
          y1="340" 
          x2="350" 
          y2="380" 
          stroke="#6366f1"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          className="dark:stroke-indigo-400"
        />
        <line 
          x1="850" 
          y1="340" 
          x2="850" 
          y2="380" 
          stroke="#eab308"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          className="dark:stroke-yellow-400"
        />

        {/* Layer 3: NeuronDB Core */}
        <g id="core-layer">
          <rect 
            x="200" 
            y="400" 
            width="800" 
            height="160" 
            rx="8"
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="2"
            className="dark:fill-slate-900 dark:stroke-slate-700"
          />
          
          {/* Vector Engine */}
          <rect 
            x="220" 
            y="420" 
            width="180" 
            height="60" 
            rx="4"
            fill="#eef2ff"
            stroke="#6366f1"
            strokeWidth="1.5"
            className="dark:fill-slate-800 dark:stroke-indigo-400"
          />
          <text 
            x="310" 
            y="445" 
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="#4338ca"
            className="dark:fill-indigo-300"
          >
            Vector Engine
          </text>
          <text 
            x="310" 
            y="465" 
            textAnchor="middle"
            fontSize="11"
            fill="#64748b"
            className="dark:fill-slate-400"
          >
            HNSW • IVF • GPU
          </text>

          {/* ML Engine */}
          <rect 
            x="420" 
            y="420" 
            width="180" 
            height="60" 
            rx="4"
            fill="#fefce8"
            stroke="#eab308"
            strokeWidth="1.5"
            className="dark:fill-slate-800 dark:stroke-yellow-400"
          />
          <text 
            x="510" 
            y="445" 
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="#a16207"
            className="dark:fill-yellow-300"
          >
            ML Engine
          </text>
          <text 
            x="510" 
            y="465" 
            textAnchor="middle"
            fontSize="11"
            fill="#64748b"
            className="dark:fill-slate-400"
          >
            52 Algorithms
          </text>

          {/* RAG Pipeline */}
          <rect 
            x="620" 
            y="420" 
            width="180" 
            height="60" 
            rx="4"
            fill="#eef2ff"
            stroke="#6366f1"
            strokeWidth="1.5"
            className="dark:fill-slate-800 dark:stroke-indigo-400"
          />
          <text 
            x="710" 
            y="445" 
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="#4338ca"
            className="dark:fill-indigo-300"
          >
            RAG Pipeline
          </text>
          <text 
            x="710" 
            y="465" 
            textAnchor="middle"
            fontSize="11"
            fill="#64748b"
            className="dark:fill-slate-400"
          >
            Document • Chunk • Search
          </text>

          {/* Main Label */}
          <text 
            x="600" 
            y="515" 
            textAnchor="middle"
            fontSize="18"
            fontWeight="600"
            fill="#0f172a"
            className="dark:fill-white"
          >
            NeuronDB PostgreSQL Extension
          </text>
          <text 
            x="600" 
            y="540" 
            textAnchor="middle"
            fontSize="12"
            fill="#64748b"
            className="dark:fill-slate-400"
          >
            Pure C • 520+ SQL Functions • 4 Background Workers
          </text>
        </g>
      </svg>
    </div>
  )
}
