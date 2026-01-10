'use client'

import React, { useState, useEffect, useMemo } from 'react'
import {
  Terminal,
  Sparkles,
  FileText,
  BrainCircuit,
  Rocket,
  Table2,
  LineChart,
  Settings,
  ArrowRight,
  Trophy,
  Bot,
  Server,
  Database,
  Zap,
  Layers,
  GitBranch,
} from 'lucide-react'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

type TabData = {
  id: string
  label: string
  iconName: 'Terminal' | 'Sparkles' | 'FileText' | 'BrainCircuit' | 'Rocket' | 'Table2' | 'LineChart' | 'Settings' | 'Trophy' | 'Bot' | 'Server' | 'Database' | 'Zap' | 'Layers' | 'GitBranch'
  heading: string
  description: string
  codeLabel: string
}

const tabsData: TabData[] = [
  {
    id: 'sql',
    label: 'SQL Console',
    iconName: 'Terminal',
    heading: 'Run vector + RAG queries in SQL',
    description: 'Execute queries, view data, and compose workflows directly from the console.',
    codeLabel: 'SQL',
  },
  {
    id: 'embeddings',
    label: 'Embeddings',
    iconName: 'Sparkles',
    heading: 'Generate and store embeddings at scale',
    description: 'Use Hugging Face models, OpenAI, or custom transformers to create vector embeddings.',
    codeLabel: 'Python',
  },
  {
    id: 'rag',
    label: 'RAG Pipeline',
    iconName: 'FileText',
    heading: 'Retrieval-Augmented Generation built-in',
    description: 'Connect LLMs with your data using semantic search, reranking, and prompt composition.',
    codeLabel: 'SQL',
  },
  {
    id: 'hf',
    label: 'Hugging Face',
    iconName: 'BrainCircuit',
    heading: 'Load datasets from Hugging Face Hub',
    description: 'Import pre-trained models and datasets directly into NeuronDB with one command.',
    codeLabel: 'Python',
  },
  {
    id: 'helm',
    label: 'Kubernetes',
    iconName: 'Rocket',
    heading: 'Deploy with Helm charts',
    description: 'Production-ready Kubernetes deployment with auto-scaling, monitoring, and backups.',
    codeLabel: 'Shell',
  },
  {
    id: 'tables',
    label: 'Tables',
    iconName: 'Table2',
    heading: 'Browse tables and schemas',
    description: 'View your vector tables, embeddings, and indexed columns in a spreadsheet-like interface.',
    codeLabel: 'Table view',
  },
  {
    id: 'obs',
    label: 'Observability',
    iconName: 'LineChart',
    heading: 'Monitor performance and health',
    description: 'Track query latency, index build progress, and system metrics in real time with Prometheus & Grafana.',
    codeLabel: 'Metrics',
  },
  {
    id: 'settings',
    label: 'Settings',
    iconName: 'Settings',
    heading: 'Configure extension and workers',
    description: 'Manage background workers, tune HNSW index parameters, and control GPU acceleration.',
    codeLabel: 'Config',
  },
  {
    id: 'benchmarks',
    label: 'Benchmarks',
    iconName: 'Trophy',
    heading: 'Performance benchmarks',
    description: 'NeuronDB outperforms leading vector databases across all key metrics.',
    codeLabel: 'Benchmarks',
  },
  {
    id: 'agents',
    label: 'Agents',
    iconName: 'Bot',
    heading: 'NeuronAgent runtime and API',
    description: 'Build AI agents with REST API, WebSocket support, and long-term memory.',
    codeLabel: 'HTTP',
  },
  {
    id: 'mcp',
    label: 'MCP Server',
    iconName: 'Server',
    heading: 'Model Context Protocol server',
    description: 'Connect Claude Desktop and other MCP clients with 100+ PostgreSQL and NeuronDB tools.',
    codeLabel: 'JSON-RPC',
  },
  {
    id: 'vector',
    label: 'Vector Engine',
    iconName: 'Database',
    heading: 'HNSW + IVF indexing',
    description: 'High-performance vector search with 10+ distance metrics and GPU acceleration.',
    codeLabel: 'SQL',
  },
  {
    id: 'ml',
    label: 'ML Engine',
    iconName: 'Zap',
    heading: '52 ML algorithms',
    description: 'Train and predict with Random Forest, XGBoost, and more directly in SQL.',
    codeLabel: 'SQL',
  },
  {
    id: 'workers',
    label: 'Background Workers',
    iconName: 'GitBranch',
    heading: '4 production workers',
    description: 'Async job queue, auto-tuning, and index maintenance with metrics hooks.',
    codeLabel: 'SQL',
  },
  {
    id: 'hybrid',
    label: 'Hybrid Search',
    iconName: 'Layers',
    heading: 'Vector + Full-text',
    description: 'Combine vector similarity with keyword search for best of both worlds.',
    codeLabel: 'SQL',
  },
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Terminal,
  Sparkles,
  FileText,
  BrainCircuit,
  Rocket,
  Table2,
  LineChart,
  Settings,
  Trophy,
  Bot,
  Server,
  Database,
  Zap,
  Layers,
  GitBranch,
}

function Pill({ children, tone = 'neutral', className = '' }: { children: React.ReactNode; tone?: 'neutral' | 'ok' | 'warn'; className?: string }) {
  const cls =
    tone === 'ok'
      ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800'
      : tone === 'warn'
      ? 'bg-amber-950/40 text-amber-300 border-amber-800'
      : 'bg-slate-900 text-slate-300 border-slate-800'

  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${cls} ${className}`}>{children}</span>
}

function CodePanel({ title, code }: { title: string; code: string }) {
  const language = title.toLowerCase().includes('sql') || code.toLowerCase().includes('select') || code.toLowerCase().includes('create extension')
    ? 'sql'
    : title.toLowerCase().includes('python') || code.includes('from neurondb') || code.includes('import')
    ? 'python'
    : title.toLowerCase().includes('shell') || code.includes('helm install') || code.includes('kubectl')
    ? 'bash'
    : title.toLowerCase().includes('json') || code.includes('{')
    ? 'json'
    : 'sql'

  const customStyle = {
    ...vscDarkPlus,
    'code[class*="language-"]': {
      ...vscDarkPlus['code[class*="language-"]'],
      background: '#0f172a',
      color: '#e2e8f0',
      fontFamily: 'SF Mono, Consolas, Monaco, monospace',
      fontSize: '16px',
      whiteSpace: 'pre',
    },
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      background: '#0f172a',
      padding: '1rem',
      margin: 0,
      borderRadius: 0,
      overflow: 'visible',
      whiteSpace: 'pre',
    },
    '.token.keyword': {
      color: '#a78bfa',
    },
    '.token.string': {
      color: '#34d399',
    },
    '.token.function': {
      color: '#fbbf24',
    },
    '.token.comment': {
      color: '#64748b',
      fontStyle: 'italic',
    },
    '.token.number': {
      color: '#f472b6',
    },
    '.token.operator': {
      color: '#e2e8f0',
    },
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 text-slate-100 overflow-hidden h-full flex flex-col">
      <div className="px-4 py-2 border-b border-slate-800 text-sm font-mono text-slate-300 flex items-center justify-between flex-shrink-0">
        <span>{title}</span>
        <span className="text-slate-400">demo</span>
      </div>
      <div className="overflow-x-auto overflow-y-auto w-full flex-1 min-h-0 max-h-full">
        <SyntaxHighlighter
          language={language}
          style={customStyle}
          customStyle={{
            margin: 0,
            background: '#0f172a',
            padding: '1rem',
            whiteSpace: 'pre',
            overflowX: 'auto',
            minWidth: '100%',
            height: '100%',
            maxHeight: '100%',
          }}
          codeTagProps={{
            style: {
              fontFamily: 'SF Mono, Consolas, Monaco, monospace',
              fontSize: '16px',
              lineHeight: '1.7',
              whiteSpace: 'pre',
              display: 'block',
            },
          }}
          PreTag="div"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

function ResultsTable({ results }: { results: Array<{ id: number; sim?: number; text?: string; prediction?: string; category?: string }> }) {
  // Ensure exactly 5 results
  const displayResults = results.slice(0, 5)
  
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden h-full flex flex-col">
      <div className="px-4 py-2 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
        <span className="text-sm font-semibold text-slate-200">Results</span>
        <Pill tone="ok" className="text-xs px-2 py-0.5">5 rows</Pill>
      </div>
      <div className="overflow-auto flex-1 min-h-0">
        <table className="w-full text-sm">
          <thead className="bg-slate-900 sticky top-0">
            <tr className="border-b border-slate-800">
              <th className="px-4 py-2.5 text-left text-slate-400 font-semibold">id</th>
              {displayResults[0]?.prediction !== undefined && (
                <>
                  <th className="px-4 py-2.5 text-left text-slate-400 font-semibold">prediction</th>
                  <th className="px-4 py-2.5 text-left text-slate-400 font-semibold">confidence</th>
                </>
              )}
              {displayResults[0]?.sim !== undefined && (
                <>
                  <th className="px-4 py-2.5 text-left text-slate-400 font-semibold">similarity</th>
                  <th className="px-4 py-2.5 text-left text-slate-400 font-semibold">text</th>
                </>
              )}
              {displayResults[0]?.category !== undefined && (
                <th className="px-4 py-2.5 text-left text-slate-400 font-semibold">category</th>
              )}
            </tr>
          </thead>
          <tbody className="text-slate-200 bg-slate-950">
            {displayResults.map((r, i) => (
              <tr key={r.id || i} className="border-t border-slate-800">
                <td className="px-4 py-3 font-mono text-sm">{r.id != null && r.id !== 0 ? r.id : ''}</td>
                {r.prediction !== undefined && (
                  <>
                    <td className="px-4 py-3 text-sm">{r.prediction || ''}</td>
                    <td className="px-4 py-3 font-mono text-sm">
                      {r.sim != null && r.sim !== 0 ? r.sim.toFixed(2) : ''}
                    </td>
                  </>
                )}
                {r.sim !== undefined && r.category !== undefined && (
                  <>
                    <td className="px-4 py-3 font-mono text-sm">
                      {r.sim != null && r.sim !== 0 ? r.sim.toFixed(4) : ''}
                    </td>
                    <td className="px-4 py-3 text-sm max-w-[20rem] truncate">{r.text || ''}</td>
                    <td className="px-4 py-3 text-sm">{r.category || ''}</td>
                  </>
                )}
                {r.sim !== undefined && r.category === undefined && (
                  <>
                    <td className="px-4 py-3 font-mono text-sm">
                      {r.sim != null && r.sim !== 0 ? r.sim.toFixed(4) : ''}
                    </td>
                    <td className="px-4 py-3 text-sm max-w-[20rem] truncate">{r.text || ''}</td>
                  </>
                )}
                {r.category !== undefined && r.sim === undefined && (
                  <>
                    <td className="px-4 py-3 text-sm max-w-[20rem] truncate">{r.text || ''}</td>
                    <td className="px-4 py-3 text-sm">{r.category || ''}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function HomeDashboardDemo() {
  const [active, setActive] = useState('sql')
  const [queryIndex, setQueryIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const sqlQueries = useMemo(() => [
    `-- Vector similarity search
SELECT id, similarity, text
FROM vector_search('embeddings', 
  '[0.12, -0.45, 0.78, ...]'::vector(384), 
  5
);`,
    `-- RAG query with reranking
SELECT id, similarity, text
FROM neurondb.rag.query(
  'docs',
  'What is vector search?',
  top_k => 5,
  rerank => true
);`,
    `-- ML sentiment prediction
SELECT id, 
  neurondb.ml.predict('sentiment_model', features) as prediction,
  neurondb.ml.confidence('sentiment_model', features) as confidence
FROM reviews
LIMIT 5;`,
    `-- Hybrid search (vector + keyword)
SELECT id, similarity, text, category
FROM hybrid_search(
  'documents',
  'PostgreSQL vector extension',
  5,
  filters => 'category = ''tech'''
);`,
  ], [])

  const resultsData = useMemo(() => [
    [
      { id: 1042, sim: 0.9134, text: 'kubernetes helm chart with prometheus grafana jaeger observability stack…' },
      { id: 991, sim: 0.9011, text: 'hnsw index build parameters and ef_search tuning for optimal performance…' },
      { id: 807, sim: 0.8876, text: 'hugging face dataset loader inserts embeddings into vector(384) columns…' },
      { id: 523, sim: 0.8754, text: 'background workers for async embedding generation and indexing tasks…' },
      { id: 389, sim: 0.8621, text: 'GPU acceleration for batch vector operations with CUDA support enabled…' },
    ],
    [
      { id: 42, sim: 0.9523, text: 'Vector search enables semantic similarity matching in high-dimensional spaces using embeddings to find related content…' },
      { id: 38, sim: 0.9234, text: 'HNSW indexes provide fast approximate nearest neighbor search for vector databases with logarithmic query time…' },
      { id: 35, sim: 0.8945, text: 'RAG combines retrieval with generation for accurate LLM responses by finding relevant context first…' },
      { id: 31, sim: 0.8656, text: 'Embeddings convert text into numerical vectors for machine learning models to process semantic meaning…' },
      { id: 28, sim: 0.8367, text: 'PostgreSQL extensions enable vector operations directly in the database without external services…' },
    ],
    [
      { id: 1001, prediction: 'positive', sim: 0.95, text: '' },
      { id: 1002, prediction: 'negative', sim: 0.88, text: '' },
      { id: 1003, prediction: 'neutral', sim: 0.76, text: '' },
      { id: 1004, prediction: 'positive', sim: 0.92, text: '' },
      { id: 1005, prediction: 'negative', sim: 0.84, text: '' },
    ],
    [
      { id: 502, sim: 0.9234, text: 'PostgreSQL vector extension for AI applications with GPU acceleration…', category: 'tech' },
      { id: 489, sim: 0.9012, text: 'NeuronDB provides 473 SQL functions for vector operations and ML inference…', category: 'tech' },
      { id: 456, sim: 0.8876, text: 'HNSW indexing enables sub-millisecond search on millions of high-dimensional vectors…', category: 'tech' },
      { id: 423, sim: 0.8754, text: 'RAG pipeline with reranking improves LLM response accuracy using semantic retrieval…', category: 'tech' },
      { id: 389, sim: 0.8621, text: 'Background workers handle async embedding generation and index maintenance automatically…', category: 'tech' },
    ],
  ], [])

  // Reset query index when switching to SQL tab
  useEffect(() => {
    if (active === 'sql') {
      setQueryIndex(0)
      setIsTransitioning(false)
    }
  }, [active])

  // Rotate queries every 3 seconds with smooth transition
  useEffect(() => {
    if (active !== 'sql') return
    
    const interval = setInterval(() => {
      setIsTransitioning(true)
      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        setTimeout(() => {
          setQueryIndex((prev) => (prev + 1) % sqlQueries.length)
          requestAnimationFrame(() => {
            setIsTransitioning(false)
          })
        }, 150)
      })
    }, 3000)
    
    return () => clearInterval(interval)
  }, [active, sqlQueries.length])

  const tab = useMemo(() => {
    const found = tabsData.find((t) => t.id === active)
    return found || tabsData[0]
  }, [active])
  const TIcon = iconMap[tab.iconName] || Terminal
  const currentQuery = sqlQueries[queryIndex] || sqlQueries[0]
  const currentResults = resultsData[queryIndex] || resultsData[0]

  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch" style={{ minHeight: '550px' }}>
          {/* Left - tabs */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white flex-shrink-0">
              NeuronDB Console
            </h2>
            <p className="mt-3 text-slate-300 flex-shrink-0">
              Manage your database and workflows from a unified interface
            </p>

            <div className="mt-8 space-y-2 flex-grow">
              {tabsData.map((t) => {
                const Icon = iconMap[t.iconName]
                const isActive = t.id === active
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={[
                      'w-full text-left rounded-xl border px-3 py-2.5 transition-colors flex-shrink-0',
                      isActive
                        ? 'border-slate-700 bg-slate-950'
                        : 'border-slate-800 bg-slate-900 hover:bg-slate-950',
                    ].join(' ')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-slate-200" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-white">{t.label}</div>
                        <div className="text-xs text-slate-400 line-clamp-2">{t.heading}</div>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: "demo panel" */}
          <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden flex flex-col">
            {/* App topbar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  <TIcon className="w-4 h-4 text-slate-200" />
                </div>
                <div>
                  <div className="text-base font-semibold text-white">neurondb</div>
                  <div className="text-sm text-slate-400">console • demo</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Pill>pg17</Pill>
                <Pill tone="ok">healthy</Pill>
              </div>
            </div>

            {/* App body */}
            <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
              <div className="p-4 bg-slate-950 flex flex-col h-full overflow-hidden">
                <div className="flex items-start justify-between gap-4 mb-3 flex-shrink-0">
                  <div>
                    <div className="text-base font-semibold text-white">{tab.heading}</div>
                    <div className="mt-0.5 text-sm text-slate-300">{tab.description}</div>
                  </div>
                  <Pill>{tab.codeLabel}</Pill>
                </div>

                {/* Content by tab */}
                <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
                  {active === 'sql' && (
                    <div className="flex flex-col gap-6 pb-4 h-full">
                      {/* SQL Editor - expandable */}
                      <div className="min-h-[320px] flex-[2] overflow-hidden">
                        <div className={`h-full transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-40' : 'opacity-100'}`}>
                          <CodePanel title="SQL Editor" code={currentQuery} />
                        </div>
                      </div>
                      
                      {/* Results Table - expandable */}
                      <div className="min-h-[220px] flex-[1.5]">
                        <div className={`h-full transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-40' : 'opacity-100'}`}>
                          <ResultsTable results={currentResults} />
                        </div>
                      </div>

                      {/* Performance Block - expandable */}
                      <div className="min-h-[140px] flex-1 rounded-xl border border-slate-800 bg-slate-950 p-4 flex flex-col">
                        <div className="text-sm font-semibold text-slate-200 mb-3">Performance</div>
                        <div className="grid grid-cols-4 gap-4 flex-1">
                          <div className="space-y-2 text-sm flex flex-col justify-center">
                            <div className="text-xs text-slate-400">Query Time</div>
                            <div className="font-mono font-semibold text-lg text-emerald-400">8.42ms</div>
                          </div>
                          <div className="space-y-2 text-sm flex flex-col justify-center">
                            <div className="text-xs text-slate-400">Latency (P95)</div>
                            <div className="font-mono font-semibold text-lg">12.5ms</div>
                          </div>
                          <div className="space-y-2 text-sm flex flex-col justify-center">
                            <div className="text-xs text-slate-400">QPS</div>
                            <div className="font-mono font-semibold text-lg text-indigo-400">8.2k</div>
                          </div>
                          <div className="space-y-2 text-sm flex flex-col justify-center">
                            <div className="text-xs text-slate-400">GPU Status</div>
                            <div className="flex items-center gap-2">
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                              <span className="text-xs text-slate-400">78% util</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stats Block - expandable, consolidated */}
                      <div className="min-h-[180px] flex-1 rounded-xl border border-slate-800 bg-slate-950 p-4 flex flex-col">
                        <div className="text-sm font-semibold text-slate-200 mb-3">Query Statistics</div>
                        <div className="grid grid-cols-3 gap-6 flex-1">
                          <div className="space-y-2 flex flex-col justify-center">
                            <div className="text-xs text-slate-400 mb-2">Execution</div>
                            <div className="space-y-1.5 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Rows Returned</span>
                              <span className="font-mono font-semibold">5</span>
                            </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400">Cache Hit</span>
                                <Pill tone="ok" className="text-xs px-2 py-0.5">96%</Pill>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400">Plan</span>
                                <span className="font-mono text-xs text-slate-400">Index Scan (HNSW)</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2 flex flex-col justify-center">
                            <div className="text-xs text-slate-400 mb-2">Connection</div>
                            <div className="space-y-1.5 text-sm">
                              <div className="flex justify-between">
                                <span className="text-slate-400">Database</span>
                                <span className="font-mono text-xs">neurondb</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400">Version</span>
                                <span className="font-mono text-xs">PostgreSQL 17</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400">Index Type</span>
                                <Pill className="text-xs px-2 py-0.5">HNSW</Pill>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2 flex flex-col justify-center">
                            <div className="text-xs text-slate-400 mb-2">Summary</div>
                            <div className="space-y-1.5 text-sm">
                              <div className="flex justify-between">
                                <span className="text-slate-400">Total Queries</span>
                                <span className="font-mono font-semibold">1,247</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400">Success Rate</span>
                                <Pill tone="ok" className="text-xs px-2 py-0.5">99.8%</Pill>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400">Vector Dim</span>
                                <span className="font-mono text-xs">384</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'embeddings' && (
                    <div className="flex flex-col gap-4">
                      {/* Code Panel - fixed size */}
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel title="embed.py" code={`from neurondb import embed

# Hugging Face transformer
embed.generate(
  'all-MiniLM-L6-v2',
  texts=['document text...'],
  table='embeddings'
)

# Batch insert 1M+ vectors
embed.bulk_insert('embeddings', vectors)`} />
                      </div>
                      {/* Results Table - fixed size, fixed position */}
                      <div className="h-[220px] flex-shrink-0">
                        <ResultsTable results={[
                          { id: 1, text: 'Document 1: Introduction to vector databases...', category: 'processed' },
                          { id: 2, text: 'Document 2: Machine learning embeddings guide...', category: 'processed' },
                          { id: 3, text: 'Document 3: Semantic search techniques...', category: 'processed' },
                          { id: 4, text: 'Document 4: RAG pipeline architecture...', category: 'processed' },
                          { id: 5, text: 'Document 5: HNSW indexing explained...', category: 'processed' },
                        ]} />
                      </div>
                      {/* Stats panels - fixed size, fixed position */}
                      <div className="grid grid-cols-4 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Model</div>
                          <div className="space-y-2 text-sm">
                            <div className="text-slate-400">all-MiniLM-L6-v2</div>
                            <Pill className="text-xs px-2 py-0.5">384 dims</Pill>
                            <Pill tone="ok" className="text-xs px-2 py-0.5">GPU</Pill>
                            <div className="flex justify-between mt-2">
                              <span className="text-slate-400">Provider</span>
                              <span className="font-mono text-xs">Hugging Face</span>
                          </div>
                        </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Performance</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Throughput</span>
                              <span className="font-mono font-semibold text-emerald-400">2.1k/s</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Latency</span>
                              <span className="font-mono font-semibold">0.12ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">GPU util</span>
                              <span className="font-mono font-semibold text-indigo-400">78%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Batch Size</span>
                              <span className="font-mono text-xs">512</span>
                          </div>
                        </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Progress</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Processed</span>
                              <span className="font-mono font-semibold">1.02M</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Total</span>
                              <span className="font-mono text-xs">1.2M</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">ETA</span>
                              <span className="font-mono font-semibold text-emerald-400">3m 24s</span>
                            </div>
                            <Pill tone="ok" className="text-xs px-2 py-0.5 w-full justify-center">85%</Pill>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">System</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Memory</span>
                              <span className="font-mono text-xs">4.2GB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">VRAM</span>
                              <span className="font-mono text-xs">8.5GB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Temp</span>
                              <span className="font-mono text-xs">62°C</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Status</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">healthy</Pill>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'rag' && (
                    <div className="flex flex-col gap-4">
                      {/* Code Panel - fixed size */}
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel title="rag_query.sql" code={`-- RAG query with reranking
SELECT neurondb.rag.query(
  'knowledge_base',
  'What is vector search?',
  top_k => 5,
  rerank => 'cross-encoder',
  llm => 'gpt-4'
);`} />
                      </div>
                      {/* Response panel - fixed size */}
                      <div className="h-[240px] flex-shrink-0 rounded-xl border border-slate-800 bg-slate-950 p-4 overflow-auto">
                        <div className="text-base font-semibold text-slate-200 mb-3">RAG Response</div>
                        <div className="text-sm text-slate-300 space-y-3">
                          <p>Vector search is a technique for finding similar items in high-dimensional spaces using mathematical representations called embeddings. It enables semantic similarity matching beyond keyword-based search...</p>
                          <div>
                            <div className="font-semibold mb-2">Sources (Top 5):</div>
                            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
                              <li>doc_42 (similarity: 0.9523) - Vector search fundamentals</li>
                              <li>doc_38 (similarity: 0.9234) - HNSW index architecture</li>
                              <li>doc_35 (similarity: 0.8945) - Embedding generation techniques</li>
                              <li>doc_28 (similarity: 0.8756) - RAG pipeline implementation</li>
                              <li>doc_24 (similarity: 0.8601) - Semantic similarity metrics</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* RAG Pipeline Stats - fixed size */}
                      <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                        <div className="text-sm font-semibold text-slate-200 mb-3">Pipeline Performance</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Retrieval</span>
                              <span className="font-mono font-semibold text-emerald-400">8.2ms</span>
                          </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Reranking</span>
                              <span className="font-mono font-semibold">12.5ms</span>
                          </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">LLM Gen</span>
                              <span className="font-mono font-semibold text-indigo-400">245ms</span>
                          </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Total Latency</span>
                              <span className="font-mono font-semibold">266ms</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">RAG Configuration</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Knowledge Base</span>
                              <span className="font-mono text-xs">knowledge_base</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Top-K</span>
                              <span className="font-mono font-semibold">5</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Reranker</span>
                              <Pill className="text-xs px-2 py-0.5">cross-encoder</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">LLM Model</span>
                              <span className="font-mono text-xs">gpt-4</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Statistics</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Queries</span>
                              <span className="font-mono font-semibold">1,247</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Avg Response</span>
                              <span className="font-mono font-semibold text-emerald-400">268ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Success Rate</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">99.5%</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Tokens/min</span>
                              <span className="font-mono font-semibold text-indigo-400">12.4k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'hf' && (
                    <div className="flex flex-col gap-4">
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel 
                          title="huggingface_loader.py" 
                          code={`from neurondb.loaders import huggingface

# Load dataset from HF Hub
hf = huggingface.load(
  'sentence-transformers/all-MiniLM-L6-v2'
)

# Auto-generate embeddings
hf.embed_dataset('ag_news', table='docs')`}
                        />
                      </div>
                      {/* Results Table - fixed size, fixed position */}
                      <div className="h-[220px] flex-shrink-0">
                        <ResultsTable results={[
                          { id: 1, text: 'sentence-transformers/all-MiniLM-L6-v2', category: 'downloaded' },
                          { id: 2, text: 'sentence-transformers/all-mpnet-base-v2', category: 'cached' },
                          { id: 3, text: 'intfloat/e5-base-v2', category: 'available' },
                          { id: 4, text: 'BAAI/bge-small-en-v1.5', category: 'available' },
                          { id: 5, text: 'text-embedding-3-small', category: 'cached' },
                        ]} />
                      </div>
                      <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Model Info</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Model ID</span>
                              <span className="font-mono text-xs truncate ml-2">all-MiniLM-L6-v2</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Dimensions</span>
                              <span className="font-mono text-xs">384</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Tasks</span>
                              <Pill className="text-xs px-2 py-0.5">embedding</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Downloads</span>
                              <span className="font-mono text-xs">12.4M</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Dataset Stats</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Dataset</span>
                              <span className="font-mono text-xs">ag_news</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Rows</span>
                              <span className="font-mono font-semibold">120,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Processed</span>
                              <span className="font-mono text-emerald-400">98,450</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">ETA</span>
                              <span className="font-mono text-xs">2m 15s</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Performance</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Throughput</span>
                              <span className="font-mono font-semibold text-emerald-400">1.8k/s</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Avg Latency</span>
                              <span className="font-mono font-semibold">0.55ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Batch Size</span>
                              <span className="font-mono text-xs">512</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">GPU Util</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">82%</Pill>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'helm' && (
                    <div className="flex flex-col gap-4">
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel 
                          title="helm_install.sh" 
                          code={`helm repo add neurondb https://helm.neurondb.ai
helm install neurondb neurondb/neurondb \\
  --set replicas=3 \\
  --set gpu.enabled=true \\
  --set monitoring.enabled=true`}
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Deployment Status</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Replicas</span>
                              <span className="font-mono font-semibold">3/3</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Ready</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">3/3</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Namespace</span>
                              <span className="font-mono text-xs">neurondb-prod</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Status</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">healthy</Pill>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Resources</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">CPU (req)</span>
                              <span className="font-mono text-xs">4 cores</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Memory</span>
                              <span className="font-mono text-xs">16GB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">GPU</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Storage</span>
                              <span className="font-mono text-xs">500GB</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Monitoring</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Prometheus</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">active</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Grafana</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">active</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Jaeger</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">active</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">HPA</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">2-10 pods</Pill>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'tables' && (
                    <div className="flex flex-col gap-4">
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel 
                          title="tables.sql" 
                          code={`-- embeddings table
SELECT id, embedding, metadata
FROM embeddings
LIMIT 10;`}
                        />
                      </div>
                      {/* Results Table - fixed size, fixed position */}
                      <div className="h-[220px] flex-shrink-0">
                        <ResultsTable results={[
                          { id: 1, text: 'Document about vector search...', category: 'tech' },
                          { id: 2, text: 'Tutorial on embeddings...', category: 'tutorial' },
                          { id: 3, text: 'Guide to HNSW indexing...', category: 'guide' },
                          { id: 4, text: 'Overview of RAG pipelines...', category: 'overview' },
                          { id: 5, text: 'Best practices for similarity...', category: 'best-practices' },
                        ]} />
                      </div>
                      <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Table Stats</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Table Name</span>
                              <span className="font-mono text-xs">embeddings</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Rows</span>
                              <span className="font-mono font-semibold">2.4M</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Size</span>
                              <span className="font-mono text-xs">12.8GB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Columns</span>
                              <span className="font-mono text-xs">3</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Indexes</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Index Type</span>
                              <Pill className="text-xs px-2 py-0.5">HNSW</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Index Size</span>
                              <span className="font-mono text-xs">4.2GB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Dimensions</span>
                              <span className="font-mono text-xs">384</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Status</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">ready</Pill>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Query Performance</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Avg Query Time</span>
                              <span className="font-mono font-semibold text-emerald-400">8.5ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">P95 Latency</span>
                              <span className="font-mono font-semibold">12.3ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">QPS</span>
                              <span className="font-mono font-semibold text-indigo-400">7.8k</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Cache Hit</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">94%</Pill>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'obs' && (
                    <div className="flex flex-col gap-4">
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel 
                          title="metrics.sql" 
                          code={`-- current metrics
SELECT * FROM neurondb.metrics()
WHERE metric_name IN (
  'query_latency_p95',
  'index_size',
  'active_workers',
  'vector_ops_per_sec',
  'gpu_utilization'
);`}
                        />
                      </div>
                      {/* Results Table - fixed size, fixed position */}
                      <div className="h-[220px] flex-shrink-0">
                        <ResultsTable results={[
                          { id: 1, text: 'query_latency_p95: 12ms', category: 'metric' },
                          { id: 2, text: 'index_size: 2.3GB', category: 'metric' },
                          { id: 3, text: 'active_workers: 4/4', category: 'metric' },
                          { id: 4, text: 'vector_ops_per_sec: 8.2k', category: 'metric' },
                          { id: 5, text: 'gpu_utilization: 67%', category: 'metric' },
                        ]} />
                      </div>
                      <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Query Metrics</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Latency P95</span>
                              <span className="font-mono font-semibold">12ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Latency P99</span>
                              <span className="font-mono font-semibold">18ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">QPS</span>
                              <span className="font-mono font-semibold text-emerald-400">8.2k</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Error Rate</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">0.02%</Pill>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">System Resources</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Index Size</span>
                              <span className="font-mono text-xs">2.3GB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Memory Used</span>
                              <span className="font-mono text-xs">8.4GB / 16GB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Active Workers</span>
                              <span className="font-mono font-semibold">4/4</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Vector Ops/sec</span>
                              <span className="font-mono font-semibold text-indigo-400">8.2k</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">GPU Metrics</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Utilization</span>
                              <span className="font-mono font-semibold text-emerald-400">67%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Memory</span>
                              <span className="font-mono text-xs">6.2GB / 8GB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Temperature</span>
                              <span className="font-mono text-xs">64°C</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Power</span>
                              <span className="font-mono text-xs">185W</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'settings' && (
                    <div className="flex flex-col gap-4">
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel 
                          title="settings.sql" 
                          code={`-- extension settings
SET neurondb.hnsw_m = 16;
SET neurondb.hnsw_ef_construction = 200;
SET neurondb.gpu_enabled = true;
SET neurondb.workers = 4;`}
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Index Settings</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">HNSW M</span>
                              <span className="font-mono text-xs">16</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">EF Construction</span>
                              <span className="font-mono text-xs">200</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">EF Search</span>
                              <span className="font-mono text-xs">40</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Distance Metric</span>
                              <span className="font-mono text-xs">cosine</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">System Settings</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">GPU Enabled</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">true</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Workers</span>
                              <span className="font-mono text-xs">4</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Batch Size</span>
                              <span className="font-mono text-xs">512</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Max Connections</span>
                              <span className="font-mono text-xs">100</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Advanced Settings</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Cache Size</span>
                              <span className="font-mono text-xs">2GB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Log Level</span>
                              <span className="font-mono text-xs">INFO</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Auto-Tune</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Telemetry</span>
                              <Pill className="text-xs px-2 py-0.5">disabled</Pill>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'benchmarks' && (
                    <div className="flex flex-col gap-4">
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel 
                          title="benchmark_results.txt" 
                          code={`QPS: 12.5K vs 8.2K (Pinecone)
Latency: 8ms vs 15ms (Pinecone)
Recall: 98.5% vs 97.2%
Throughput: 145MB/s vs 98MB/s`}
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Performance Comparison</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">QPS</span>
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-semibold text-emerald-400">12.5K</span>
                                <span className="text-xs text-slate-400">vs 8.2K</span>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Latency (P95)</span>
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-semibold text-emerald-400">8ms</span>
                                <span className="text-xs text-slate-400">vs 15ms</span>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Recall</span>
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-semibold text-emerald-400">98.5%</span>
                                <span className="text-xs text-slate-400">vs 97.2%</span>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Throughput</span>
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-semibold text-emerald-400">145MB/s</span>
                                <span className="text-xs text-slate-400">vs 98MB/s</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Test Configuration</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Dataset Size</span>
                              <span className="font-mono text-xs">10M vectors</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Dimensions</span>
                              <span className="font-mono text-xs">384</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Query Count</span>
                              <span className="font-mono text-xs">100,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Top-K</span>
                              <span className="font-mono text-xs">10</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Benchmark Results</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Speedup</span>
                              <span className="font-mono font-semibold text-emerald-400">1.52x</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Cost Efficiency</span>
                              <span className="font-mono font-semibold text-emerald-400">2.1x</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Memory Usage</span>
                              <span className="font-mono text-xs">24% less</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Index Build</span>
                              <span className="font-mono text-xs">3.2x faster</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'agents' && (
                    <div className="flex flex-col gap-4">
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel 
                          title="agent_api.py" 
                          code={`import requests

# Create agent
response = requests.post('http://localhost:8000/agents', json={
  'name': 'research_agent',
  'profile': 'You are a research assistant',
  'tools': ['vector_search', 'sql_query', 'http_request']
})

# Send message
response = requests.post(
  f'http://localhost:8000/agents/{agent_id}/messages',
  json={'message': 'Find papers about vector search'}
)`}
                        />
                </div>
                      <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Agent Status</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Active Agents</span>
                              <span className="font-mono font-semibold">12</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Sessions</span>
                              <span className="font-mono font-semibold">247</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Messages</span>
                              <span className="font-mono font-semibold">8.2k</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Status</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">healthy</Pill>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">API Performance</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Avg Response</span>
                              <span className="font-mono font-semibold text-emerald-400">245ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">P95 Latency</span>
                              <span className="font-mono font-semibold">420ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">RPS</span>
                              <span className="font-mono font-semibold text-indigo-400">1.2k</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Error Rate</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">0.1%</Pill>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Features</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">REST API</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">WebSocket</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Memory</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Tools</span>
                              <span className="font-mono text-xs">100+</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'mcp' && (
                    <div className="flex flex-col gap-4">
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel 
                          title="mcp_config.json" 
                          code={`{
  "mcpServers": {
    "neurondb": {
      "command": "neurondb-mcp",
      "args": ["--database", "neurondb"]
    }
  }
}

# 100+ tools available:
# - 27 PostgreSQL tools
# - 70+ NeuronDB tools
# - Resources, Prompts, Sampling`}
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">MCP Server</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Protocol</span>
                              <span className="font-mono text-xs">JSON-RPC 2.0</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Transport</span>
                              <span className="font-mono text-xs">stdio • HTTP</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Status</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">active</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Clients</span>
                              <span className="font-mono font-semibold">3</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Tools Available</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">PostgreSQL</span>
                              <span className="font-mono font-semibold">27</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">NeuronDB</span>
                              <span className="font-mono font-semibold text-emerald-400">70+</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Resources</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Prompts</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Usage Stats</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Requests</span>
                              <span className="font-mono font-semibold">12.4k</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Avg Latency</span>
                              <span className="font-mono font-semibold text-emerald-400">8.5ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Success Rate</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">99.9%</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Claude Desktop</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">connected</Pill>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'vector' && (
                    <div className="flex flex-col gap-4">
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel 
                          title="vector_search.sql" 
                          code={`-- Create HNSW index
CREATE INDEX ON embeddings 
USING hnsw (embedding vector_cosine_ops);

-- Vector similarity search
SELECT id, 1 - (embedding <=> query_vec) as similarity
FROM embeddings
ORDER BY embedding <=> query_vec
LIMIT 5;`}
                        />
                      </div>
                      {/* Results Table - fixed size, fixed position */}
                      <div className="h-[220px] flex-shrink-0">
                        <ResultsTable results={[
                          { id: 42, sim: 0.9523, text: 'Vector search fundamentals' },
                          { id: 38, sim: 0.9234, text: 'HNSW index architecture' },
                          { id: 35, sim: 0.8945, text: 'Embedding generation techniques' },
                          { id: 28, sim: 0.8756, text: 'RAG pipeline implementation' },
                          { id: 24, sim: 0.8601, text: 'Semantic similarity metrics' },
                        ]} />
                      </div>
                      <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Index Types</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">HNSW</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">IVF</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">pgvector</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">compatible</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">GPU Build</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Distance Metrics</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Cosine</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">default</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">L2</span>
                              <Pill className="text-xs px-2 py-0.5">available</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Inner Product</span>
                              <Pill className="text-xs px-2 py-0.5">available</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Total Metrics</span>
                              <span className="font-mono font-semibold text-emerald-400">10+</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Performance</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Query Time</span>
                              <span className="font-mono font-semibold text-emerald-400">8.2ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Recall</span>
                              <span className="font-mono font-semibold">98.5%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">GPU Batch</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Throughput</span>
                              <span className="font-mono font-semibold text-indigo-400">8.2k QPS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'ml' && (
                    <div className="flex flex-col gap-4">
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel 
                          title="ml_inference.sql" 
                          code={`-- Train a model
SELECT neurondb.ml.train(
  'sentiment_model',
  'random_forest',
  'SELECT features, label FROM training_data'
);

-- Make predictions
SELECT id, 
  neurondb.ml.predict('sentiment_model', features) as prediction
FROM test_data;`}
                        />
                      </div>
                      {/* Results Table - fixed size, fixed position */}
                      <div className="h-[220px] flex-shrink-0">
                        <ResultsTable results={[
                          { id: 1, prediction: 'positive', sim: 0.94 },
                          { id: 2, prediction: 'negative', sim: 0.87 },
                          { id: 3, prediction: 'positive', sim: 0.91 },
                          { id: 4, prediction: 'neutral', sim: 0.78 },
                          { id: 5, prediction: 'positive', sim: 0.96 },
                        ]} />
                      </div>
                      <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Algorithms</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Random Forest</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">XGBoost</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Linear Models</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Total</span>
                              <span className="font-mono font-semibold text-emerald-400">52+</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Model Management</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Models</span>
                              <span className="font-mono font-semibold">8</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Feature Store</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Train in SQL</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">GPU Inference</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Performance</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Inference Time</span>
                              <span className="font-mono font-semibold text-emerald-400">0.8ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Batch Size</span>
                              <span className="font-mono text-xs">512</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Throughput</span>
                              <span className="font-mono font-semibold text-indigo-400">2.1k/s</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Accuracy</span>
                              <span className="font-mono font-semibold">94.2%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'workers' && (
                    <div className="flex flex-col gap-4">
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel 
                          title="workers.sql" 
                          code={`-- Check worker status
SELECT * FROM neurondb.worker_status();

-- Queue async job
SELECT neurondb.queue_job(
  'embed_documents',
  '{"table": "documents", "model": "all-MiniLM-L6-v2"}'
);

-- Monitor jobs
SELECT * FROM neurondb.job_queue WHERE status = 'running';`}
                        />
                      </div>
                      {/* Results Table - fixed size, fixed position */}
                      <div className="h-[220px] flex-shrink-0">
                        <ResultsTable results={[
                          { id: 101, text: 'embed_documents', category: 'running' },
                          { id: 102, text: 'build_index', category: 'running' },
                          { id: 103, text: 'ml_training', category: 'queued' },
                          { id: 104, text: 'bulk_insert', category: 'running' },
                          { id: 105, text: 'vectorize_batch', category: 'completed' },
                        ]} />
                      </div>
                      <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Worker Status</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Active Workers</span>
                              <span className="font-mono font-semibold">4/4</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Queue Size</span>
                              <span className="font-mono font-semibold">127</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Processing</span>
                              <span className="font-mono font-semibold text-emerald-400">8</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Status</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">healthy</Pill>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Job Types</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Embedding</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">active</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Index Build</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">active</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">ML Training</span>
                              <Pill className="text-xs px-2 py-0.5">available</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Auto-scaling</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Metrics</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Jobs/min</span>
                              <span className="font-mono font-semibold text-emerald-400">245</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Avg Duration</span>
                              <span className="font-mono font-semibold">12.5s</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Success Rate</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">99.2%</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Hooks</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active === 'hybrid' && (
                    <div className="flex flex-col gap-4">
                      <div className="h-[220px] flex-shrink-0">
                        <CodePanel 
                          title="hybrid_search.sql" 
                          code={`-- Hybrid search combining vector + BM25
SELECT id, text,
  (0.7 * vector_score + 0.3 * text_score) as final_score
FROM hybrid_search(
  'documents',
  query_vector,
  'search terms',
  top_k => 5
)
ORDER BY final_score DESC;`}
                        />
                      </div>
                      {/* Results Table - fixed size, fixed position */}
                      <div className="h-[220px] flex-shrink-0">
                        <ResultsTable results={[
                          { id: 42, sim: 0.9523, text: 'Vector search fundamentals' },
                          { id: 38, sim: 0.9234, text: 'HNSW index architecture' },
                          { id: 35, sim: 0.8945, text: 'Embedding generation techniques' },
                          { id: 28, sim: 0.8756, text: 'RAG pipeline implementation' },
                          { id: 24, sim: 0.8601, text: 'Semantic similarity metrics' },
                        ]} />
                      </div>
                      <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Search Types</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Vector</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">enabled</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Full-text</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">BM25</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Weighted</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">configurable</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Reranking</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">optional</Pill>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Performance</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Query Time</span>
                              <span className="font-mono font-semibold text-emerald-400">15.2ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Recall</span>
                              <span className="font-mono font-semibold">96.8%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Precision</span>
                              <span className="font-mono font-semibold">94.5%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">QPS</span>
                              <span className="font-mono font-semibold text-indigo-400">6.8k</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[200px] rounded-xl border border-slate-800 bg-slate-950 p-4 flex-shrink-0">
                          <div className="text-sm font-semibold text-slate-200 mb-3">Configuration</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Vector Weight</span>
                              <span className="font-mono text-xs">0.7</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Text Weight</span>
                              <span className="font-mono text-xs">0.3</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Top-K</span>
                              <span className="font-mono text-xs">5</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Mode</span>
                              <Pill className="text-xs px-2 py-0.5">hybrid</Pill>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {['hf', 'helm', 'tables', 'obs', 'settings', 'benchmarks'].includes(active) && (
                <div className="mt-4 flex-shrink-0">
                  <Link
                    href={
                      active === 'sql' ? '/docs/sql-api' :
                      active === 'embeddings' ? '/docs/ml/embeddings' :
                      active === 'rag' ? '/docs/rag' :
                      active === 'hf' ? '/docs/ml/embeddings' :
                      active === 'helm' ? '/docs/deployment/kubernetes' :
                      active === 'tables' ? '/docs/vector-engine' :
                      active === 'obs' ? '/docs/deployment/observability' :
                      active === 'settings' ? '/docs/configuration' :
                      active === 'benchmarks' ? '/docs/performance' :
                      active === 'agents' ? '/neuronagent' :
                      active === 'mcp' ? '/neuronmcp' :
                      active === 'vector' ? '/docs/vector-engine' :
                      active === 'ml' ? '/docs/ml' :
                      active === 'workers' ? '/docs/background-workers' :
                      active === 'hybrid' ? '/docs/hybrid-search' :
                      '/docs'
                    }
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-white"
                  >
                    {active === 'sql' ? 'SQL API' :
                     active === 'embeddings' ? 'Embedding engine' :
                     active === 'rag' ? 'RAG documentation' :
                     active === 'hf' ? 'Hugging Face integration' :
                     active === 'helm' ? 'Kubernetes deployment' :
                     active === 'tables' ? 'Vector tables' :
                     active === 'obs' ? 'Observability' :
                     active === 'settings' ? 'Configuration' :
                     active === 'benchmarks' ? 'Performance docs' :
                     active === 'agents' ? 'NeuronAgent docs' :
                     active === 'mcp' ? 'NeuronMCP docs' :
                     active === 'vector' ? 'Vector engine' :
                     active === 'ml' ? 'ML engine' :
                     active === 'workers' ? 'Background workers' :
                     active === 'hybrid' ? 'Hybrid search' :
                     'Documentation'} <ArrowRight className="w-4 h-4" />
                  </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
