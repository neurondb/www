import React from 'react'

type Kind = 'neurondb' | 'neuronmcp' | 'neuronagent' | 'neurondesktop'

export default function ProductArt({ kind }: { kind: Kind }) {
  // Supabase-style: realistic UI mockups with muted professional colors
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
      <defs>
        <filter id={`shadow-${kind}`}>
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
        </filter>
      </defs>

      {kind === 'neurondb' && (
        <g className="neurondb-art">
          {/* Database cylinder with neural connections - clean artistic style */}
          <defs>
            <linearGradient id="db-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Central database cylinder */}
          <g transform="translate(200, 200)">
            {/* Database stack */}
            <ellipse cx="0" cy="-60" rx="70" ry="18" fill="none" stroke="url(#db-gradient)" strokeWidth="3" opacity="0.9" />
            <path d="M -70 -60 v80 c0 10 31 18 70 18 s70-8 70-18 v-80" fill="none" stroke="url(#db-gradient)" strokeWidth="3" opacity="0.9" />
            <ellipse cx="0" cy="20" rx="70" ry="18" fill="none" stroke="url(#db-gradient)" strokeWidth="3" opacity="0.9" />
            
            {/* Middle disk */}
            <ellipse cx="0" cy="-20" rx="70" ry="18" fill="none" stroke="url(#db-gradient)" strokeWidth="2" opacity="0.6" />
            <ellipse cx="0" cy="0" rx="70" ry="18" fill="none" stroke="url(#db-gradient)" strokeWidth="2" opacity="0.6" />
          </g>

          {/* Neural network nodes orbiting database */}
          <g className="orbit-nodes">
            {/* Top arc */}
            <circle cx="200" cy="80" r="10" fill="#3b82f6" opacity="0.8">
              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="270" cy="120" r="8" fill="#8b5cf6" opacity="0.7">
              <animate attributeName="r" values="6;10;6" dur="2.3s" repeatCount="indefinite" />
            </circle>
            <circle cx="130" cy="120" r="8" fill="#8b5cf6" opacity="0.7">
              <animate attributeName="r" values="6;10;6" dur="2.5s" repeatCount="indefinite" />
            </circle>
            
            {/* Side nodes */}
            <circle cx="80" cy="200" r="9" fill="#10b981" opacity="0.8">
              <animate attributeName="r" values="7;11;7" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="320" cy="200" r="9" fill="#10b981" opacity="0.8">
              <animate attributeName="r" values="7;11;7" dur="2.4s" repeatCount="indefinite" />
            </circle>
            
            {/* Bottom arc */}
            <circle cx="200" cy="320" r="10" fill="#3b82f6" opacity="0.8">
              <animate attributeName="r" values="8;12;8" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="270" cy="280" r="8" fill="#8b5cf6" opacity="0.7">
              <animate attributeName="r" values="6;10;6" dur="2.1s" repeatCount="indefinite" />
            </circle>
            <circle cx="130" cy="280" r="8" fill="#8b5cf6" opacity="0.7">
              <animate attributeName="r" values="6;10;6" dur="2.7s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Connection lines - elegant curves */}
          <g className="connections" opacity="0.3" stroke="url(#neural-gradient)" strokeWidth="2">
            <path d="M 200 80 Q 200 140 200 140" fill="none" />
            <path d="M 270 120 Q 235 160 200 180" fill="none" />
            <path d="M 130 120 Q 165 160 200 180" fill="none" />
            <path d="M 80 200 Q 140 200 155 200" fill="none" />
            <path d="M 320 200 Q 260 200 245 200" fill="none" />
            <path d="M 200 320 Q 200 260 200 220" fill="none" />
            <path d="M 270 280 Q 235 240 200 220" fill="none" />
            <path d="M 130 280 Q 165 240 200 220" fill="none" />
          </g>

          {/* Pulsing rings around center */}
          <circle cx="200" cy="200" r="100" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.2">
            <animate attributeName="r" values="100;120;100" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="200" r="80" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.2">
            <animate attributeName="r" values="80;100;80" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0;0.2" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </g>
      )}

      {kind === 'neuronmcp' && (
        <g className="neuronmcp-art">
          {/* MCP Server - hub and spoke network topology */}
          <defs>
            <linearGradient id="server-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
            <linearGradient id="tool-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          {/* Central server hexagon */}
          <g transform="translate(200, 200)">
            <polygon 
              points="0,-50 43,-25 43,25 0,50 -43,25 -43,-25" 
              fill="none" 
              stroke="url(#server-gradient)" 
              strokeWidth="4" 
              opacity="0.9"
            />
            <polygon 
              points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" 
              fill="none" 
              stroke="url(#server-gradient)" 
              strokeWidth="2" 
              opacity="0.5"
            />
            
            {/* Server core pulse */}
            <circle cx="0" cy="0" r="15" fill="url(#server-gradient)" opacity="0.6">
              <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Tools in circular arrangement - 8 nodes */}
          <g className="tool-nodes">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const radius = 120
              const x = 200 + Math.cos(rad) * radius
              const y = 200 + Math.sin(rad) * radius
              return (
                <g key={i}>
                  {/* Tool node */}
                  <circle cx={x} cy={y} r="12" fill="url(#tool-gradient)" opacity="0.8">
                    <animate 
                      attributeName="opacity" 
                      values="0.6;1;0.6" 
                      dur={`${2 + i * 0.2}s`} 
                      repeatCount="indefinite" 
                    />
                  </circle>
                  <circle cx={x} cy={y} r="18" fill="none" stroke="url(#tool-gradient)" strokeWidth="2" opacity="0.3" />
                  
                  {/* Connection line to center */}
                  <line 
                    x1={200} 
                    y1={200} 
                    x2={x} 
                    y2={y} 
                    stroke="url(#tool-gradient)" 
                    strokeWidth="2" 
                    opacity="0.3"
                  >
                    <animate 
                      attributeName="opacity" 
                      values="0.1;0.4;0.1" 
                      dur={`${2.5 + i * 0.2}s`} 
                      repeatCount="indefinite" 
                    />
                  </line>
                </g>
              )
            })}
          </g>

          {/* Data flow particles */}
          <g className="data-particles">
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              return (
                <circle 
                  key={i} 
                  cx={200 + Math.cos(rad) * 60} 
                  cy={200 + Math.sin(rad) * 60} 
                  r="4" 
                  fill="#10b981" 
                  opacity="0.7"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,0; ${Math.cos(rad) * 60},${Math.sin(rad) * 60}; 0,0`}
                    dur="3s"
                    begin={`${i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                  <animate 
                    attributeName="opacity" 
                    values="0;0.7;0" 
                    dur="3s" 
                    begin={`${i * 0.5}s`} 
                    repeatCount="indefinite" 
                  />
                </circle>
              )
            })}
          </g>

          {/* Outer ring - protocol boundary */}
          <circle cx="200" cy="200" r="150" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.2" strokeDasharray="10 5" />
          <circle cx="200" cy="200" r="160" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.1">
            <animate attributeName="r" values="160;170;160" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0;0.1" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>
      )}

      {kind === 'neuronagent' && (
        <g className="neuronagent-art">
          {/* Agent workflow - brain/decision tree visualization */}
          <defs>
            <linearGradient id="agent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Central agent brain */}
          <g transform="translate(200, 130)">
            {/* Brain-like circular structure */}
            <circle cx="0" cy="0" r="40" fill="none" stroke="url(#agent-gradient)" strokeWidth="3" opacity="0.9" />
            <circle cx="0" cy="0" r="30" fill="none" stroke="url(#agent-gradient)" strokeWidth="2" opacity="0.6" />
            
            {/* Neural pathways in brain */}
            <path d="M -25 -15 Q 0 -20 25 -15" fill="none" stroke="url(#agent-gradient)" strokeWidth="2" opacity="0.5" />
            <path d="M -20 0 Q 0 5 20 0" fill="none" stroke="url(#agent-gradient)" strokeWidth="2" opacity="0.5" />
            <path d="M -25 15 Q 0 20 25 15" fill="none" stroke="url(#agent-gradient)" strokeWidth="2" opacity="0.5" />
            
            {/* Thinking pulse */}
            <circle cx="0" cy="0" r="15" fill="url(#agent-gradient)" opacity="0.4">
              <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Decision flow tree below */}
          <g className="decision-tree">
            {/* Main trunk from brain */}
            <line x1="200" y1="170" x2="200" y2="220" stroke="url(#flow-gradient)" strokeWidth="3" opacity="0.7" />
            
            {/* First level branches */}
            <line x1="200" y1="220" x2="140" y2="260" stroke="url(#flow-gradient)" strokeWidth="2.5" opacity="0.6" />
            <line x1="200" y1="220" x2="200" y2="270" stroke="url(#flow-gradient)" strokeWidth="2.5" opacity="0.6" />
            <line x1="200" y1="220" x2="260" y2="260" stroke="url(#flow-gradient)" strokeWidth="2.5" opacity="0.6" />
            
            {/* Decision nodes - level 1 */}
            <circle cx="140" cy="260" r="10" fill="#3b82f6" opacity="0.8">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="270" r="10" fill="#8b5cf6" opacity="0.8">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="260" cy="260" r="10" fill="#3b82f6" opacity="0.8">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite" />
            </circle>
            
            {/* Second level branches */}
            <line x1="140" y1="260" x2="110" y2="310" stroke="url(#flow-gradient)" strokeWidth="2" opacity="0.5" />
            <line x1="140" y1="260" x2="170" y2="310" stroke="url(#flow-gradient)" strokeWidth="2" opacity="0.5" />
            <line x1="260" y1="260" x2="230" y2="310" stroke="url(#flow-gradient)" strokeWidth="2" opacity="0.5" />
            <line x1="260" y1="260" x2="290" y2="310" stroke="url(#flow-gradient)" strokeWidth="2" opacity="0.5" />
            
            {/* Action nodes - level 2 */}
            <circle cx="110" cy="310" r="8" fill="#10b981" opacity="0.7">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.3s" repeatCount="indefinite" />
            </circle>
            <circle cx="170" cy="310" r="8" fill="#10b981" opacity="0.7">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="230" cy="310" r="8" fill="#10b981" opacity="0.7">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.1s" repeatCount="indefinite" />
            </circle>
            <circle cx="290" cy="310" r="8" fill="#10b981" opacity="0.7">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.7s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Execution arrows flowing down */}
          <g className="flow-arrows" opacity="0.4">
            {[0, 1, 2].map((i) => (
              <path 
                key={i}
                d="M 200 180 l -3 -8 l 6 0 z" 
                fill="#3b82f6"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 0,60; 0,120; 0,180"
                  dur="3s"
                  begin={`${i * 1}s`}
                  repeatCount="indefinite"
                />
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0" 
                  dur="3s" 
                  begin={`${i * 1}s`}
                  repeatCount="indefinite" 
                />
              </path>
            ))}
          </g>

          {/* Surrounding context indicators */}
          <g className="context-rings" opacity="0.2">
            <circle cx="200" cy="130" r="70" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="5 5">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 200 130"
                to="360 200 130"
                dur="20s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="200" cy="130" r="85" fill="none" stroke="#ec4899" strokeWidth="1" strokeDasharray="8 3">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="360 200 130"
                to="0 200 130"
                dur="25s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>
      )}

      {kind === 'neurondesktop' && (
        <g className="neurondesktop-art">
          {/* Desktop interface - window with data visualization */}
          <defs>
            <linearGradient id="window-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="chart-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          {/* Window frame */}
          <g transform="translate(200, 200)">
            {/* Main window border */}
            <rect 
              x="-140" 
              y="-110" 
              width="280" 
              height="220" 
              rx="16" 
              fill="none" 
              stroke="url(#window-gradient)" 
              strokeWidth="3" 
              opacity="0.8"
            />
            
            {/* Window decorations - 3 dots */}
            <circle cx="-120" cy="-90" r="5" fill="#ef4444" opacity="0.8" />
            <circle cx="-100" cy="-90" r="5" fill="#f59e0b" opacity="0.8" />
            <circle cx="-80" cy="-90" r="5" fill="#10b981" opacity="0.8" />
            
            {/* Title bar separator line */}
            <line x1="-140" y1="-70" x2="140" y2="-70" stroke="url(#window-gradient)" strokeWidth="1" opacity="0.4" />
          </g>

          {/* Data visualization - bar chart */}
          <g transform="translate(120, 220)">
            {[
              { h: 40, x: 0, delay: 0 },
              { h: 60, x: 25, delay: 0.2 },
              { h: 35, x: 50, delay: 0.4 },
              { h: 75, x: 75, delay: 0.6 },
              { h: 50, x: 100, delay: 0.8 },
              { h: 65, x: 125, delay: 1 },
            ].map((bar, i) => (
              <g key={i}>
                <rect 
                  x={bar.x} 
                  y={-bar.h} 
                  width="18" 
                  height={bar.h} 
                  rx="3" 
                  fill="url(#chart-gradient)" 
                  opacity="0.7"
                >
                  <animate 
                    attributeName="height" 
                    values={`${bar.h};${bar.h + 10};${bar.h}`} 
                    dur="2s" 
                    begin={`${bar.delay}s`} 
                    repeatCount="indefinite" 
                  />
                  <animate 
                    attributeName="y" 
                    values={`${-bar.h};${-bar.h - 10};${-bar.h}`} 
                    dur="2s" 
                    begin={`${bar.delay}s`} 
                    repeatCount="indefinite" 
                  />
                </rect>
                {/* Glow effect */}
                <rect 
                  x={bar.x - 2} 
                  y={-bar.h - 2} 
                  width="22" 
                  height={bar.h + 2} 
                  rx="4" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="1" 
                  opacity="0.3"
                />
              </g>
            ))}
            {/* Baseline */}
            <line x1="-10" y1="0" x2="160" y2="0" stroke="url(#window-gradient)" strokeWidth="2" opacity="0.4" />
          </g>

          {/* Dashboard metrics - circular progress indicators */}
          <g transform="translate(80, 140)">
            {/* First metric circle */}
            <circle cx="0" cy="0" r="22" fill="none" stroke="#e2e8f0" strokeWidth="4" className="dark:stroke-slate-800" />
            <circle 
              cx="0" 
              cy="0" 
              r="22" 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="4" 
              strokeDasharray="138.23" 
              strokeDashoffset="35" 
              strokeLinecap="round" 
              opacity="0.8"
              transform="rotate(-90 0 0)"
            >
              <animate 
                attributeName="stroke-dashoffset" 
                values="35;20;35" 
                dur="3s" 
                repeatCount="indefinite" 
              />
            </circle>
            <circle cx="0" cy="0" r="12" fill="#3b82f6" opacity="0.3" />
          </g>

          <g transform="translate(320, 140)">
            {/* Second metric circle */}
            <circle cx="0" cy="0" r="22" fill="none" stroke="#e2e8f0" strokeWidth="4" className="dark:stroke-slate-800" />
            <circle 
              cx="0" 
              cy="0" 
              r="22" 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="4" 
              strokeDasharray="138.23" 
              strokeDashoffset="50" 
              strokeLinecap="round" 
              opacity="0.8"
              transform="rotate(-90 0 0)"
            >
              <animate 
                attributeName="stroke-dashoffset" 
                values="50;30;50" 
                dur="2.5s" 
                repeatCount="indefinite" 
              />
            </circle>
            <circle cx="0" cy="0" r="12" fill="#10b981" opacity="0.3" />
          </g>

          {/* Activity indicators - pulsing dots */}
          <g className="activity-dots">
            <circle cx="80" cy="300" r="6" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="r" values="6;8;6" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="310" r="6" fill="#10b981" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="r" values="6;8;6" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="320" cy="300" r="6" fill="#8b5cf6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.1s" repeatCount="indefinite" />
              <animate attributeName="r" values="6;8;6" dur="2.1s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Connection lines between elements */}
          <g className="connections" opacity="0.2" stroke="url(#window-gradient)">
            <line x1="80" y1="140" x2="150" y2="200" strokeWidth="1.5" />
            <line x1="320" y1="140" x2="250" y2="200" strokeWidth="1.5" />
            <line x1="80" y1="300" x2="200" y2="270" strokeWidth="1.5" />
            <line x1="320" y1="300" x2="200" y2="270" strokeWidth="1.5" />
          </g>
        </g>
      )}
    </svg>
  )
}
