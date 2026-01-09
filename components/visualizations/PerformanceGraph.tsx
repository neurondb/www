'use client'

import React from 'react'

interface DataPoint {
  name: string
  value: number
  color: string
}

export default function PerformanceGraph() {
  const data: DataPoint[] = [
    { name: 'NeuronDB', value: 95, color: 'var(--primary-600)' },
    { name: 'pgvector', value: 65, color: 'var(--gray-400)' },
    { name: 'pgvectorscale', value: 75, color: 'var(--gray-400)' },
    { name: 'pgai', value: 55, color: 'var(--gray-400)' },
  ]

  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          Performance Benchmark Comparison
        </h3>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          QPS (Queries Per Second) - SIFT-128 Dataset, HNSW Index
        </p>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                {item.name}
              </span>
              <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                {item.value.toFixed(1)} QPS
              </span>
            </div>
            <div className="relative h-10 rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--gray-200)' }}>
              <div
                className="absolute inset-y-0 left-0 rounded-lg transition-all duration-1000 ease-out flex items-center justify-end px-4"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color,
                  boxShadow: item.name === 'NeuronDB' ? '0 0 20px rgba(99, 102, 241, 0.4)' : 'none'
                }}
              >
                {item.name === 'NeuronDB' && (
                  <span className="text-xs font-semibold text-white">
                    ⚡ GPU Accelerated
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t text-xs text-center" style={{ borderColor: 'var(--border-light)', color: 'var(--text-tertiary)' }}>
        Benchmark: 1M vectors, 128 dimensions, ef_construction=200, M=16
      </div>
    </div>
  )
}


