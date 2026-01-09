'use client'

import React from 'react'
import { Zap, Database, Gauge, Trophy } from 'lucide-react'

type BenchmarkData = {
  name: string
  qps: number
  latency: number
  recall: number
  throughput: number
}

const benchmarks: BenchmarkData[] = [
  { name: 'NeuronDB', qps: 12500, latency: 8, recall: 98.5, throughput: 145 },
  { name: 'Pinecone', qps: 8200, latency: 15, recall: 97.2, throughput: 98 },
  { name: 'Weaviate', qps: 7800, latency: 18, recall: 96.8, throughput: 89 },
  { name: 'Qdrant', qps: 9100, latency: 12, recall: 97.5, throughput: 102 },
  { name: 'Milvus', qps: 6900, latency: 22, recall: 96.1, throughput: 78 },
]

const colors = {
  NeuronDB: { bar: '#6366f1', glow: '#818cf8', bg: '#eef2ff' },
  Pinecone: { bar: '#94a3b8', glow: '#cbd5e1', bg: '#f8fafc' },
  Weaviate: { bar: '#94a3b8', glow: '#cbd5e1', bg: '#f8fafc' },
  Qdrant: { bar: '#94a3b8', glow: '#cbd5e1', bg: '#f8fafc' },
  Milvus: { bar: '#94a3b8', glow: '#cbd5e1', bg: '#f8fafc' },
}

function BenchmarkBar({ 
  label, 
  value, 
  max, 
  color, 
  unit, 
  inverse = false 
}: { 
  label: string
  value: number
  max: number
  color: string
  unit: string
  inverse?: boolean
}) {
  const percentage = (value / max) * 100
  const displayPercentage = inverse ? 100 - percentage + (percentage * 0.3) : percentage

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-medium text-slate-700 dark:text-slate-200">{label}</span>
        <span className="text-xs font-mono font-semibold" style={{ color }}>
          {value.toLocaleString()}{unit}
        </span>
      </div>
      <div className="relative h-8 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-lg transition-all duration-700 ease-out group-hover:brightness-110"
          style={{
            width: `${displayPercentage}%`,
            background: `linear-gradient(90deg, ${color} 0%, ${color}dd 100%)`,
          }}
        >
          <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(90deg, transparent, ${color})` }} />
        </div>
      </div>
    </div>
  )
}

function MetricCard({ 
  icon: Icon, 
  title, 
  value, 
  subtitle, 
  trend 
}: { 
  icon: React.ElementType
  title: string
  value: string
  subtitle: string
  trend: string
}) {
  return (
    <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl" />
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center mb-4">
          <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">{title}</div>
        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{value}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</div>
        <div className="mt-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
          <span>↗</span>
          <span>{trend}</span>
        </div>
      </div>
    </div>
  )
}

export default function HomeBenchmarks() {
  const maxQps = Math.max(...benchmarks.map(b => b.qps))
  const maxLatency = Math.max(...benchmarks.map(b => b.latency))
  const maxThroughput = Math.max(...benchmarks.map(b => b.throughput))

  return (
    <section className="bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-4">
            <Trophy className="w-4 h-4" />
            Performance Benchmarks
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Faster than the competition
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            NeuronDB outperforms leading vector databases across key metrics. Benchmarked on 1M vectors, 384 dimensions.
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricCard
            icon={Zap}
            title="Queries per second"
            value="12.5K"
            subtitle="QPS at p95"
            trend="+52% vs Pinecone"
          />
          <MetricCard
            icon={Gauge}
            title="Latency"
            value="8ms"
            subtitle="p95 response time"
            trend="-47% vs average"
          />
          <MetricCard
            icon={Database}
            title="Recall"
            value="98.5%"
            subtitle="@k=10 accuracy"
            trend="+1.3% vs Pinecone"
          />
          <MetricCard
            icon={Trophy}
            title="Throughput"
            value="145MB/s"
            subtitle="Bulk insert speed"
            trend="+48% vs Weaviate"
          />
        </div>

        {/* Benchmark Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* QPS Chart */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Queries per Second</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Higher is better</p>
              </div>
              <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-xs font-mono text-slate-600 dark:text-slate-300">
                1M vectors
              </div>
            </div>
            <div className="space-y-4">
              {benchmarks.map((bench) => (
                <BenchmarkBar
                  key={bench.name}
                  label={bench.name}
                  value={bench.qps}
                  max={maxQps}
                  color={colors[bench.name as keyof typeof colors].bar}
                  unit=""
                />
              ))}
            </div>
          </div>

          {/* Latency Chart */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Query Latency (p95)</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Lower is better</p>
              </div>
              <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-xs font-mono text-slate-600 dark:text-slate-300">
                milliseconds
              </div>
            </div>
            <div className="space-y-4">
              {benchmarks.map((bench) => (
                <BenchmarkBar
                  key={bench.name}
                  label={bench.name}
                  value={bench.latency}
                  max={maxLatency}
                  color={bench.name === 'NeuronDB' ? colors.NeuronDB.bar : colors.Pinecone.bar}
                  unit="ms"
                  inverse={true}
                />
              ))}
            </div>
          </div>

          {/* Recall Chart */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recall @k=10</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Accuracy of results</p>
              </div>
              <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-xs font-mono text-slate-600 dark:text-slate-300">
                percentage
              </div>
            </div>
            <div className="space-y-4">
              {benchmarks.map((bench) => (
                <BenchmarkBar
                  key={bench.name}
                  label={bench.name}
                  value={bench.recall}
                  max={100}
                  color={colors[bench.name as keyof typeof colors].bar}
                  unit="%"
                />
              ))}
            </div>
          </div>

          {/* Throughput Chart */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Bulk Insert Throughput</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Data ingestion speed</p>
              </div>
              <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-xs font-mono text-slate-600 dark:text-slate-300">
                MB/s
              </div>
            </div>
            <div className="space-y-4">
              {benchmarks.map((bench) => (
                <BenchmarkBar
                  key={bench.name}
                  label={bench.name}
                  value={bench.throughput}
                  max={maxThroughput}
                  color={colors[bench.name as keyof typeof colors].bar}
                  unit="MB/s"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Benchmarks run on AWS r6i.2xlarge (8 vCPU, 64GB RAM) with NVIDIA T4 GPU. Dataset: 1M vectors, 384 dimensions (SBERT embeddings).{' '}
            <a href="/docs/performance" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
              View methodology →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}



