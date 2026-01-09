'use client'

import React from 'react'
import { TrendingUp, Users, Code, Zap } from 'lucide-react'

interface Metric {
  label: string
  value: string
  change: string
  icon: React.ElementType
  color: string
}

export default function GrowthMetrics() {
  const metrics: Metric[] = [
    {
      label: 'SQL Functions',
      value: '473',
      change: '+120 this release',
      icon: Code,
      color: 'var(--primary-600)',
    },
    {
      label: 'ML Algorithms',
      value: '52+',
      change: 'Production ready',
      icon: Zap,
      color: 'var(--secondary-600)',
    },
    {
      label: 'MCP Tools',
      value: '100+',
      change: 'Claude Desktop',
      icon: TrendingUp,
      color: 'var(--primary-600)',
    },
    {
      label: 'Background Workers',
      value: '4',
      change: 'Auto-managed',
      icon: Users,
      color: 'var(--secondary-600)',
    },
  ]

  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          Ecosystem Stats
        </h3>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Current version 2.0.0 metrics
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border p-6 hover-lift transition-all duration-300"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border-light)',
              }}
            >
              {/* Icon */}
              <div
                className="absolute top-4 right-4 w-12 h-12 rounded-lg flex items-center justify-center opacity-10"
                style={{ backgroundColor: metric.color }}
              >
                <Icon className="w-6 h-6" />
              </div>

              {/* Value */}
              <div className="relative z-10">
                <div
                  className="text-4xl font-bold mb-2 tracking-tight"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </div>
                <div className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                  {metric.label}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {metric.change}
                </div>
              </div>

              {/* Animated border glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${metric.color}10, transparent)`,
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Additional Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: 'var(--border-light)' }}>
        <div className="text-center">
          <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
            3
          </div>
          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            PostgreSQL Versions
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
            5
          </div>
          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            Vector Types
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
            10+
          </div>
          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            Distance Metrics
          </div>
        </div>
      </div>
    </div>
  )
}


