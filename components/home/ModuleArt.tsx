import React from 'react'

type Kind = 'vector' | 'ml' | 'rag' | 'workers' | 'sql' | 'mcp' | 'k8s'

export default function ModuleArt({ kind }: { kind: Kind }) {
  // Clean, artistic SVG illustrations - no text, no tables, pure visual art
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id={`gradient-${kind}-1`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id={`gradient-${kind}-2`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id={`gradient-${kind}-3`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>

      {kind === 'vector' && (
        <g className="vector-art">
          {/* Vector space visualization - 3D cube with points */}
          {/* Cube wireframe */}
          <g stroke={`url(#gradient-${kind}-1)`} strokeWidth="2" fill="none" opacity="0.6">
            {/* Front face */}
            <rect x="100" y="150" width="200" height="200" />
            {/* Back face */}
            <rect x="140" y="110" width="200" height="200" />
            {/* Connecting lines */}
            <line x1="100" y1="150" x2="140" y2="110" />
            <line x1="300" y1="150" x2="340" y2="110" />
            <line x1="100" y1="350" x2="140" y2="310" />
            <line x1="300" y1="350" x2="340" y2="310" />
          </g>

          {/* Vector points inside cube */}
          <g>
            {[
              { x: 150, y: 200, r: 8, delay: 0 },
              { x: 250, y: 180, r: 7, delay: 0.2 },
              { x: 180, y: 250, r: 6, delay: 0.4 },
              { x: 270, y: 240, r: 9, delay: 0.6 },
              { x: 200, y: 300, r: 7, delay: 0.8 },
              { x: 220, y: 220, r: 10, delay: 1 },
              { x: 260, y: 280, r: 6, delay: 1.2 },
              { x: 190, y: 270, r: 8, delay: 1.4 },
            ].map((point, i) => (
              <circle 
                key={i}
                cx={point.x} 
                cy={point.y} 
                r={point.r} 
                fill={`url(#gradient-${kind}-1)`} 
                opacity="0.8"
              >
                <animate 
                  attributeName="opacity" 
                  values="0.6;1;0.6" 
                  dur={`${2 + point.delay}s`} 
                  repeatCount="indefinite" 
                />
              </circle>
            ))}
            {/* Query point - yellow */}
            <circle cx="220" cy="250" r="12" fill="#fbbf24" opacity="0.9">
              <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Similarity lines */}
          <g stroke="#10b981" strokeWidth="1.5" opacity="0.3">
            <line x1="220" y1="250" x2="150" y2="200" />
            <line x1="220" y1="250" x2="270" y2="240" />
            <line x1="220" y1="250" x2="220" y2="220" />
          </g>
        </g>
      )}

      {kind === 'ml' && (
        <g className="ml-art">
          {/* Neural network layers visualization */}
          {/* Input layer */}
          <g>
            {[0, 1, 2, 3, 4].map((i) => (
              <circle 
                key={`input-${i}`} 
                cx="80" 
                cy={120 + i * 40} 
                r="12" 
                fill={`url(#gradient-${kind}-1)`} 
                opacity="0.7"
              >
                <animate 
                  attributeName="opacity" 
                  values="0.5;0.9;0.5" 
                  dur={`${2 + i * 0.2}s`} 
                  repeatCount="indefinite" 
                />
              </circle>
            ))}
          </g>

          {/* Hidden layer 1 */}
          <g>
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <circle 
                key={`hidden1-${i}`} 
                cx="200" 
                cy={90 + i * 35} 
                r="10" 
                fill={`url(#gradient-${kind}-1)`} 
                opacity="0.7"
              >
                <animate 
                  attributeName="opacity" 
                  values="0.5;0.9;0.5" 
                  dur={`${2.2 + i * 0.15}s`} 
                  repeatCount="indefinite" 
                />
              </circle>
            ))}
          </g>

          {/* Hidden layer 2 */}
          <g>
            {[0, 1, 2, 3, 4].map((i) => (
              <circle 
                key={`hidden2-${i}`} 
                cx="310" 
                cy={120 + i * 40} 
                r="12" 
                fill={`url(#gradient-${kind}-2)`} 
                opacity="0.7"
              >
                <animate 
                  attributeName="opacity" 
                  values="0.5;0.9;0.5" 
                  dur={`${2.4 + i * 0.2}s`} 
                  repeatCount="indefinite" 
                />
              </circle>
            ))}
          </g>

          {/* Connection lines */}
          <g stroke={`url(#gradient-${kind}-1)`} strokeWidth="1" opacity="0.2">
            {[0, 1, 2, 3, 4].map((i) => (
              <React.Fragment key={`connections-${i}`}>
                {[0, 1, 2, 3, 4, 5, 6].map((j) => (
                  <line 
                    key={`line-${i}-${j}`} 
                    x1="80" 
                    y1={120 + i * 40} 
                    x2="200" 
                    y2={90 + j * 35} 
                  />
                ))}
              </React.Fragment>
            ))}
          </g>
        </g>
      )}

      {kind === 'rag' && (
        <g className="rag-art">
          {/* RAG pipeline flow - document to answer */}
          {/* Documents stack */}
          <g transform="translate(80, 150)">
            {[0, 1, 2].map((i) => (
              <rect 
                key={`doc-${i}`}
                x={i * 8} 
                y={i * 8} 
                width="100" 
                height="120" 
                rx="8" 
                fill="none" 
                stroke={`url(#gradient-${kind}-1)`} 
                strokeWidth="3" 
                opacity={0.8 - i * 0.2}
              />
            ))}
          </g>

          {/* Arrow pointing right */}
          <g transform="translate(220, 200)">
            <path 
              d="M 0 0 L 40 0 M 30 -10 L 40 0 L 30 10" 
              stroke={`url(#gradient-${kind}-2)`} 
              strokeWidth="3" 
              fill="none" 
              opacity="0.7"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 10,0; 0,0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          {/* Query bubble */}
          <ellipse 
            cx="200" 
            cy="100" 
            rx="60" 
            ry="35" 
            fill="none" 
            stroke={`url(#gradient-${kind}-3)`} 
            strokeWidth="3" 
            opacity="0.8"
          >
            <animate 
              attributeName="opacity" 
              values="0.6;0.9;0.6" 
              dur="2.5s" 
              repeatCount="indefinite" 
            />
          </ellipse>

          {/* Answer bubble */}
          <g transform="translate(280, 150)">
            <path 
              d="M 0 0 Q 40 0 40 30 Q 40 60 0 60 Q -40 60 -40 30 Q -40 0 0 0" 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="3" 
              opacity="0.8"
            >
              <animate 
                attributeName="opacity" 
                values="0.6;1;0.6" 
                dur="2s" 
                repeatCount="indefinite" 
              />
            </path>
          </g>

          {/* Data particles flowing */}
          {[0, 1, 2].map((i) => (
            <circle 
              key={`particle-${i}`} 
              cx="190" 
              cy="200" 
              r="4" 
              fill="#3b82f6"
            >
              <animateMotion
                dur="3s"
                begin={`${i * 1}s`}
                repeatCount="indefinite"
                path="M 0 0 Q 30 -20 70 0"
              />
              <animate 
                attributeName="opacity" 
                values="0;0.8;0" 
                dur="3s" 
                begin={`${i * 1}s`}
                repeatCount="indefinite" 
              />
            </circle>
          ))}
        </g>
      )}

      {kind === 'workers' && (
        <g className="workers-art">
          {/* Background workers - gears/cogs system */}
          {/* Large central gear */}
          <g transform="translate(200, 200)">
            <circle cx="0" cy="0" r="60" fill="none" stroke={`url(#gradient-${kind}-1)`} strokeWidth="4" opacity="0.8" />
            <circle cx="0" cy="0" r="40" fill="none" stroke={`url(#gradient-${kind}-1)`} strokeWidth="3" opacity="0.6" />
            {/* Gear teeth */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const x1 = Math.cos(rad) * 55
              const y1 = Math.sin(rad) * 55
              const x2 = Math.cos(rad) * 70
              const y2 = Math.sin(rad) * 70
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`url(#gradient-${kind}-1)`} strokeWidth="6" opacity="0.8" />
            })}
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 200 200"
              to="360 200 200"
              dur="8s"
              repeatCount="indefinite"
            />
          </g>

          {/* Smaller gear - top right */}
          <g transform="translate(310, 120)">
            <circle cx="0" cy="0" r="40" fill="none" stroke={`url(#gradient-${kind}-2)`} strokeWidth="3" opacity="0.7" />
            <circle cx="0" cy="0" r="28" fill="none" stroke={`url(#gradient-${kind}-2)`} strokeWidth="2" opacity="0.5" />
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const x1 = Math.cos(rad) * 37
              const y1 = Math.sin(rad) * 37
              const x2 = Math.cos(rad) * 47
              const y2 = Math.sin(rad) * 47
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`url(#gradient-${kind}-2)`} strokeWidth="5" opacity="0.7" />
            })}
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 310 120"
              to="0 310 120"
              dur="6s"
              repeatCount="indefinite"
            />
          </g>

          {/* Smaller gear - bottom left */}
          <g transform="translate(90, 280)">
            <circle cx="0" cy="0" r="40" fill="none" stroke={`url(#gradient-${kind}-3)`} strokeWidth="3" opacity="0.7" />
            <circle cx="0" cy="0" r="28" fill="none" stroke={`url(#gradient-${kind}-3)`} strokeWidth="2" opacity="0.5" />
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const x1 = Math.cos(rad) * 37
              const y1 = Math.sin(rad) * 37
              const x2 = Math.cos(rad) * 47
              const y2 = Math.sin(rad) * 47
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`url(#gradient-${kind}-3)`} strokeWidth="5" opacity="0.7" />
            })}
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 90 280"
              to="0 90 280"
              dur="6s"
              repeatCount="indefinite"
            />
          </g>

          {/* Connection lines */}
          <line x1="200" y1="200" x2="310" y2="120" stroke={`url(#gradient-${kind}-1)`} strokeWidth="2" opacity="0.3" />
          <line x1="200" y1="200" x2="90" y2="280" stroke={`url(#gradient-${kind}-1)`} strokeWidth="2" opacity="0.3" />
        </g>
      )}

      {kind === 'sql' && (
        <g className="sql-art">
          {/* Database layers with query path */}
          {/* Database cylinder stack */}
          <g transform="translate(200, 200)">
            {/* Bottom disk */}
            <ellipse cx="0" cy="80" rx="80" ry="25" fill="none" stroke={`url(#gradient-${kind}-1)`} strokeWidth="3" opacity="0.9" />
            {/* Side */}
            <path d="M -80 80 v-100 c0-14 36-25 80-25 s80 11 80 25 v100" fill="none" stroke={`url(#gradient-${kind}-1)`} strokeWidth="3" opacity="0.9" />
            {/* Top disk */}
            <ellipse cx="0" cy="-20" rx="80" ry="25" fill="none" stroke={`url(#gradient-${kind}-1)`} strokeWidth="3" opacity="0.9" />
            {/* Middle disks */}
            <ellipse cx="0" cy="10" rx="80" ry="25" fill="none" stroke={`url(#gradient-${kind}-1)`} strokeWidth="2" opacity="0.5" />
            <ellipse cx="0" cy="40" rx="80" ry="25" fill="none" stroke={`url(#gradient-${kind}-1)`} strokeWidth="2" opacity="0.5" />
          </g>

          {/* Query symbol - lightning bolt */}
          <g transform="translate(100, 100)">
            <path 
              d="M 0 0 L 15 30 L 5 30 L 20 60 L -15 25 L -5 25 Z" 
              fill="#fbbf24" 
              opacity="0.8"
            >
              <animate 
                attributeName="opacity" 
                values="0.5;1;0.5" 
                dur="1.5s" 
                repeatCount="indefinite" 
              />
            </path>
          </g>

          {/* Result indicators - checkmarks */}
          <g transform="translate(300, 150)">
            {[0, 1, 2].map((i) => (
              <path 
                key={i}
                d={`M 0 ${i * 30} L 8 ${i * 30 + 10} L 20 ${i * 30 - 10}`} 
                stroke="#10b981" 
                strokeWidth="3" 
                fill="none" 
                opacity="0.7"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;0.9;0" 
                  dur="3s" 
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite" 
                />
              </path>
            ))}
          </g>

          {/* Data flow particles */}
          {[0, 1, 2, 3].map((i) => (
            <circle 
              key={i} 
              cx="120" 
              cy="130" 
              r="5" 
              fill="#3b82f6" 
              opacity="0.7"
            >
              <animateMotion
                dur="2.5s"
                begin={`${i * 0.6}s`}
                repeatCount="indefinite"
                path="M 0 0 Q 40 30 80 70"
              />
              <animate 
                attributeName="opacity" 
                values="0;0.8;0" 
                dur="2.5s" 
                begin={`${i * 0.6}s`}
                repeatCount="indefinite" 
              />
            </circle>
          ))}
        </g>
      )}

      {kind === 'mcp' && (
        <g className="mcp-art">
          {/* MCP hub and spoke - already created in ProductArt, reuse similar pattern */}
          {/* Central hexagon */}
          <g transform="translate(200, 200)">
            <polygon 
              points="0,-50 43,-25 43,25 0,50 -43,25 -43,-25" 
              fill="none" 
              stroke={`url(#gradient-${kind}-3)`} 
              strokeWidth="4" 
              opacity="0.9"
            />
            <polygon 
              points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" 
              fill="none" 
              stroke={`url(#gradient-${kind}-3)`} 
              strokeWidth="2" 
              opacity="0.5"
            />
            
            {/* Core pulse */}
            <circle cx="0" cy="0" r="15" fill={`url(#gradient-${kind}-3)`} opacity="0.6">
              <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Tools nodes in circle */}
          <g>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const radius = 100
              const x = 200 + Math.cos(rad) * radius
              const y = 200 + Math.sin(rad) * radius
              return (
            <g key={i}>
                  <circle cx={x} cy={y} r="10" fill={`url(#gradient-${kind}-1)`} opacity="0.8">
                    <animate 
                      attributeName="opacity" 
                      values="0.6;1;0.6" 
                      dur={`${2 + i * 0.2}s`} 
                      repeatCount="indefinite" 
                    />
                  </circle>
                  <line 
                    x1={200} 
                    y1={200} 
                    x2={x} 
                    y2={y} 
                    stroke={`url(#gradient-${kind}-2)`} 
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

          {/* Outer ring */}
          <circle cx="200" cy="200" r="130" fill="none" stroke={`url(#gradient-${kind}-3)`} strokeWidth="1" opacity="0.2" strokeDasharray="10 5" />
        </g>
      )}

      {kind === 'k8s' && (
        <g className="k8s-art">
          {/* Kubernetes cluster visualization - pods and services */}
          {/* Central control plane - hexagon (K8s wheel) */}
          <g transform="translate(200, 200)">
            <polygon 
              points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" 
              fill="none" 
              stroke="#326CE5" 
              strokeWidth="4" 
              opacity="0.9"
            />
            <circle cx="0" cy="0" r="20" fill="#326CE5" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
            </circle>
            {/* Spokes of K8s wheel */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const x = Math.cos(rad) * 40
              const y = Math.sin(rad) * 40
              return (
                <line 
                  key={i} 
                  x1="0" 
                  y1="0" 
                  x2={x} 
                  y2={y} 
                  stroke="#326CE5" 
                  strokeWidth="2" 
                  opacity="0.5"
                />
              )
            })}
          </g>

          {/* Pod containers in 3 groups (nodes) */}
          {/* Node 1 - top left */}
          <g transform="translate(80, 80)">
            <rect x="-30" y="-30" width="60" height="60" rx="8" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.7" />
            <rect x="-20" y="-20" width="18" height="18" rx="4" fill="#10b981" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="2" y="-20" width="18" height="18" rx="4" fill="#10b981" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" begin="0.3s" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="-20" y="2" width="18" height="18" rx="4" fill="#10b981" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" begin="0.6s" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="2" y="2" width="18" height="18" rx="4" fill="#10b981" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" begin="0.9s" dur="2s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Node 2 - top right */}
          <g transform="translate(320, 80)">
            <rect x="-30" y="-30" width="60" height="60" rx="8" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.7" />
            <rect x="-20" y="-20" width="18" height="18" rx="4" fill="#3b82f6" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" begin="0.2s" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="2" y="-20" width="18" height="18" rx="4" fill="#3b82f6" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" begin="0.5s" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="-20" y="2" width="18" height="18" rx="4" fill="#3b82f6" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" begin="0.8s" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="2" y="2" width="18" height="18" rx="4" fill="#3b82f6" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" begin="1.1s" dur="2s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Node 3 - bottom center */}
          <g transform="translate(200, 320)">
            <rect x="-30" y="-30" width="60" height="60" rx="8" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.7" />
            <rect x="-20" y="-20" width="18" height="18" rx="4" fill="#8b5cf6" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" begin="0.4s" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="2" y="-20" width="18" height="18" rx="4" fill="#8b5cf6" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" begin="0.7s" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="-20" y="2" width="18" height="18" rx="4" fill="#8b5cf6" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" begin="1.0s" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="2" y="2" width="18" height="18" rx="4" fill="#8b5cf6" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" begin="1.3s" dur="2s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Connection lines from control plane to nodes */}
          <line x1="200" y1="200" x2="80" y2="80" stroke="#326CE5" strokeWidth="2" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="200" y1="200" x2="320" y2="80" stroke="#326CE5" strokeWidth="2" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.5;0.2" begin="0.5s" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="200" y1="200" x2="200" y2="320" stroke="#326CE5" strokeWidth="2" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.5;0.2" begin="1s" dur="3s" repeatCount="indefinite" />
          </line>

          {/* Network traffic particles */}
          {[0, 1, 2].map((i) => (
            <circle key={`traffic-${i}`} cx="200" cy="200" r="3" fill="#fbbf24" opacity="0.8">
              <animateMotion
                dur="2s"
                begin={`${i * 0.7}s`}
                repeatCount="indefinite"
                path="M 0 0 L -120 -120"
              />
              <animate 
                attributeName="opacity" 
                values="0;0.8;0" 
                dur="2s" 
                begin={`${i * 0.7}s`}
                repeatCount="indefinite" 
              />
            </circle>
          ))}
        </g>
      )}
    </svg>
  )
}
