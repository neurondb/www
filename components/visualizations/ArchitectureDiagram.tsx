'use client'

import React from 'react'
import { Database, Cpu, Network, Layers } from 'lucide-react'

export default function ArchitectureDiagram() {
  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          Architecture Overview
        </h3>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Integrated AI stack in PostgreSQL
        </p>
      </div>

      <div className="relative">
        {/* Architecture Flow */}
        <div className="space-y-4">
          {/* Top Layer - Applications */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-md rounded-xl border p-6 text-center transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--primary-500)',
                borderWidth: '2px',
              }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Layers className="w-6 h-6" style={{ color: 'var(--primary-500)' }} />
                <h4 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                  Applications
                </h4>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Python, TypeScript, JavaScript
              </p>
            </div>
          </div>

          {/* Connection Line */}
          <div className="flex justify-center">
            <div className="w-0.5 h-8" style={{ backgroundColor: 'var(--border-light)' }} />
          </div>

          {/* Middle Layer - Agent & ML */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="rounded-xl border p-6 text-center transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--secondary-500)',
                borderWidth: '2px',
              }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Network className="w-6 h-6" style={{ color: 'var(--secondary-500)' }} />
                <h4 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                  Agent Runtime
                </h4>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                NeuronAgent + MCP
              </p>
            </div>

            <div
              className="rounded-xl border p-6 text-center transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--primary-600)',
                borderWidth: '2px',
              }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Cpu className="w-6 h-6" style={{ color: 'var(--primary-600)' }} />
                <h4 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                  ML Engine
                </h4>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                52+ Algorithms
              </p>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="flex justify-center gap-4">
            <div className="w-0.5 h-8" style={{ backgroundColor: 'var(--border-light)' }} />
            <div className="w-0.5 h-8" style={{ backgroundColor: 'var(--border-light)' }} />
          </div>

          {/* Bottom Layer - PostgreSQL */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-md rounded-xl border p-6 text-center transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--gray-700)',
                borderWidth: '2px',
              }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Database className="w-6 h-6" style={{ color: 'var(--gray-700)' }} />
                <h4 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                  PostgreSQL
                </h4>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                NeuronDB Extension
              </p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 pt-6 border-t flex items-center justify-center gap-6 text-xs" style={{ borderColor: 'var(--border-light)' }}>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--primary-500)' }} />
            <span style={{ color: 'var(--text-secondary)' }}>Application Layer</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--secondary-500)' }} />
            <span style={{ color: 'var(--text-secondary)' }}>Processing Layer</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--gray-700)' }} />
            <span style={{ color: 'var(--text-secondary)' }}>Storage Layer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

