'use client'

import React from 'react'
import { Check, X } from 'lucide-react'

interface Feature {
  name: string
  neurondb: boolean
  pgvector: boolean
  pgai: boolean
}

export default function FeatureCoverageChart() {
  const features: Feature[] = [
    { name: 'Vector Search', neurondb: true, pgvector: true, pgai: false },
    { name: 'ML Algorithms (52+)', neurondb: true, pgvector: false, pgai: false },
    { name: 'GPU Acceleration', neurondb: true, pgvector: false, pgai: false },
    { name: 'RAG Pipeline', neurondb: true, pgvector: false, pgai: true },
    { name: 'Hybrid Search', neurondb: true, pgvector: false, pgai: false },
    { name: 'ONNX Models', neurondb: true, pgvector: false, pgai: false },
    { name: 'Agent Runtime', neurondb: true, pgvector: false, pgai: false },
    { name: 'MCP Server', neurondb: true, pgvector: false, pgai: false },
  ]

  const coverage = {
    neurondb: (features.filter(f => f.neurondb).length / features.length) * 100,
    pgvector: (features.filter(f => f.pgvector).length / features.length) * 100,
    pgai: (features.filter(f => f.pgai).length / features.length) * 100,
  }

  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          Feature Coverage Matrix
        </h3>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Comprehensive AI/ML capabilities comparison
        </p>
      </div>

      {/* Coverage Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--primary-50)' }}>
          <div className="text-3xl font-bold mb-1" style={{ color: 'var(--primary-600)' }}>
            {coverage.neurondb.toFixed(0)}%
          </div>
          <div className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
            NeuronDB
          </div>
        </div>
        <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--gray-100)' }}>
          <div className="text-3xl font-bold mb-1" style={{ color: 'var(--gray-600)' }}>
            {coverage.pgvector.toFixed(0)}%
          </div>
          <div className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
            pgvector
          </div>
        </div>
        <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--gray-100)' }}>
          <div className="text-3xl font-bold mb-1" style={{ color: 'var(--gray-600)' }}>
            {coverage.pgai.toFixed(0)}%
          </div>
          <div className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
            pgai
          </div>
        </div>
      </div>

      {/* Feature Matrix */}
      <div className="rounded-lg border overflow-hidden" style={{ borderColor: 'var(--border-light)' }}>
        <table className="w-full">
          <thead>
            <tr style={{ backgroundColor: 'var(--gray-50)' }}>
              <th className="text-left px-4 py-3 text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                Feature
              </th>
              <th className="text-center px-4 py-3 text-xs font-semibold" style={{ color: 'var(--primary-600)' }}>
                NeuronDB
              </th>
              <th className="text-center px-4 py-3 text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                pgvector
              </th>
              <th className="text-center px-4 py-3 text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                pgai
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={index}
                className="border-t hover:bg-opacity-50 transition-colors"
                style={{ borderColor: 'var(--border-light)' }}
              >
                <td className="px-4 py-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {feature.name}
                </td>
                <td className="text-center px-4 py-3">
                  {feature.neurondb ? (
                    <Check className="w-5 h-5 mx-auto" style={{ color: 'var(--primary-600)' }} />
                  ) : (
                    <X className="w-5 h-5 mx-auto" style={{ color: 'var(--gray-300)' }} />
                  )}
                </td>
                <td className="text-center px-4 py-3">
                  {feature.pgvector ? (
                    <Check className="w-5 h-5 mx-auto" style={{ color: 'var(--gray-500)' }} />
                  ) : (
                    <X className="w-5 h-5 mx-auto" style={{ color: 'var(--gray-300)' }} />
                  )}
                </td>
                <td className="text-center px-4 py-3">
                  {feature.pgai ? (
                    <Check className="w-5 h-5 mx-auto" style={{ color: 'var(--gray-500)' }} />
                  ) : (
                    <X className="w-5 h-5 mx-auto" style={{ color: 'var(--gray-300)' }} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}



