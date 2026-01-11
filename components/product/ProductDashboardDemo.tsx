'use client'

import React, { useMemo, useState, useEffect } from 'react'
import {
  ArrowRight,
  Box,
  Database,
  GitBranch,
  LineChart,
  ShieldCheck,
  Table2,
  Settings,
  Layers,
  Terminal,
  Sparkles,
  BrainCircuit,
  FileText,
  Rocket,
  Trophy,
  Server,
  Bot,
  Search,
  Cpu,
  Zap,
  Monitor,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Sparkles,
  FileText,
  BrainCircuit,
  Rocket,
  Table2,
  LineChart,
  Settings,
  Trophy,
  Database,
  Search,
  Cpu,
  Zap,
  Bot,
  Server,
  ShieldCheck,
  Layers,
  GitBranch,
  Box,
  Monitor,
}
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { getProduct } from '@/config/products'

type ProductTab = {
  id: string
  label: string
  iconName: string
  heading: string
  description: string
  codeLabel: string
  code: string
  footerHref: string
  footerLabel: string
  results?: Array<{ id: number; sim?: number; text?: string; prediction?: string; category?: string }>
}

type ProductDashboardDemoProps = {
  productId: 'neurondb' | 'neuronmcp' | 'neuronagent' | 'neurondesktop'
  tabs: ProductTab[]
  title: string
  subtitle: string
}

function Pill({ children, tone = 'neutral', className = '' }: { children: React.ReactNode; tone?: 'neutral' | 'ok' | 'warn'; className?: string }) {
  const cls =
    tone === 'ok'
      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
      : tone === 'warn'
      ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-800'
      : 'bg-slate-900 text-slate-300 border-slate-800'

  return <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${cls} ${className}`}>{children}</span>
}

function ResultsTable({ results }: { results: Array<{ id: number; sim?: number; text?: string; prediction?: string; category?: string }> }) {
  // Ensure exactly 5 results
  const displayResults = results.slice(0, 5)
  
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
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
    <div className="rounded-xl border border-slate-800 bg-slate-950 text-slate-100 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="px-4 py-2 border-b border-slate-800 text-sm font-mono text-slate-300 flex items-center justify-between flex-shrink-0">
        <span className="transition-colors duration-300">{title}</span>
        <span className="text-slate-400 transition-opacity duration-300">demo</span>
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

export default function ProductDashboardDemo({ productId, tabs, title, subtitle }: ProductDashboardDemoProps) {
  const [active, setActive] = useState(tabs[0]?.id || '')
  const [variantIndex, setVariantIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const product = getProduct(productId)
  const productDisplayName = product?.displayName || productId
  
  // Generate variants for each tab (code and results variations)
  const generateVariants = useMemo(() => {
    const variants: Record<string, Array<{ code: string; results?: Array<{ id: number; sim?: number; text?: string; prediction?: string; category?: string }> }>> = {}
    
    tabs.forEach((tab, tabIdx) => {
      const tabVariants: Array<{ code: string; results?: Array<{ id: number; sim?: number; text?: string; prediction?: string; category?: string }> }> = []
      
      // Base variant
      tabVariants.push({
        code: tab.code,
        results: tab.results ? tab.results.map(r => ({ ...r })) : undefined,
      })
      
      // Generate 2-3 more variants per tab
      if (tab.results && tab.results.length > 0) {
        // Variant 1: Different IDs and adjusted similarity scores
        tabVariants.push({
          code: tab.code,
          results: tab.results.map((r, i) => ({
            ...r,
            id: r.id + 100 + (tabIdx * 10) + i,
            sim: r.sim ? Math.min(0.99, Math.max(0.80, r.sim - 0.01 + (i * 0.005))) : r.sim,
            text: r.text,
          })),
        })
        
        // Variant 2: Different IDs and scores
        tabVariants.push({
          code: tab.code,
          results: tab.results.map((r, i) => ({
            ...r,
            id: r.id + 200 + (tabIdx * 10) + i,
            sim: r.sim ? Math.min(0.99, Math.max(0.75, r.sim - 0.02 + (i * 0.003))) : r.sim,
            text: r.text,
          })),
        })
        
        // Variant 3: Another variation
        tabVariants.push({
          code: tab.code,
          results: tab.results.map((r, i) => ({
            ...r,
            id: r.id + 300 + (tabIdx * 10) + i,
            sim: r.sim ? Math.min(0.99, Math.max(0.82, r.sim - 0.015 + (i * 0.004))) : r.sim,
            text: r.text,
          })),
        })
      } else {
        // For tabs without results, just use the same code
        tabVariants.push({ code: tab.code })
        tabVariants.push({ code: tab.code })
        tabVariants.push({ code: tab.code })
      }
      
      variants[tab.id] = tabVariants
    })
    
    return variants
  }, [tabs])

  // Reset variant index when switching tabs
  useEffect(() => {
    setVariantIndex(0)
    setIsTransitioning(false)
  }, [active])

  // Rotate variants every 3 seconds with smooth transition
  useEffect(() => {
    const variants = generateVariants[active]
    if (!variants || variants.length <= 1) return
    
    const interval = setInterval(() => {
      setIsTransitioning(true)
      requestAnimationFrame(() => {
        setTimeout(() => {
          setVariantIndex((prev) => (prev + 1) % variants.length)
          requestAnimationFrame(() => {
            setIsTransitioning(false)
          })
        }, 150)
      })
    }, 3000)
    
    return () => clearInterval(interval)
  }, [active, generateVariants])

  let selectedTab = tabs[0]
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].id === active) {
      selectedTab = tabs[i]
      break
    }
  }
  
  const variants = generateVariants[active] || []
  const currentVariant = variants[variantIndex % variants.length] || variants[0] || { code: selectedTab.code, results: selectedTab.results }
  const tab = {
    ...selectedTab,
    code: currentVariant.code,
    results: currentVariant.results || selectedTab.results,
  }

  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch" style={{ minHeight: '650px' }}>
          {/* Left - tabs */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white flex-shrink-0">
              {title}
            </h2>
            <p className="mt-3 text-slate-300 flex-shrink-0">
              {subtitle}
            </p>

            <div className="mt-8 space-y-2 flex-grow min-h-0 overflow-y-auto">
              {tabs.map((t) => {
                const Icon = iconMap[t.iconName] || Database
                const isActive = t.id === active
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={[
                      'w-full text-left rounded-xl border px-3 py-2.5 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-md flex-shrink-0',
                      isActive
                        ? 'border-slate-700 bg-slate-950 shadow-sm'
                        : 'border-slate-800 bg-slate-900 hover:bg-slate-950',
                    ].join(' ')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-4 h-4 text-slate-200 transition-transform duration-300 group-hover:rotate-3" />
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
          <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden flex flex-col h-full">
            {/* App topbar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  {(() => {
                    const Icon = iconMap[tab.iconName] || Database
                    return <Icon className="w-4 h-4 text-slate-200" />
                  })()}
                </div>
                <div>
                  <div className="text-base font-semibold text-white">{productDisplayName}</div>
                  <div className="text-sm text-slate-400">console • demo</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Pill>v1.0</Pill>
                <Pill tone="ok">ready</Pill>
              </div>
            </div>

            {/* App body */}
            <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
              {/* Main */}
              <div className="p-4 bg-slate-950 flex flex-col h-full overflow-hidden">
                <div className="flex items-start justify-between gap-4 mb-3 flex-shrink-0">
                  <div>
                    <div className="text-base font-semibold text-white">{tab.heading}</div>
                    <div className="mt-0.5 text-sm text-slate-300">{tab.description}</div>
                  </div>
                  <Pill>{tab.codeLabel}</Pill>
                </div>

                {/* Content by tab */}
                <div key={`${tab.id}-${variantIndex}`} className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
                  <div className={`flex flex-col gap-6 pb-4 h-full transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-40' : 'opacity-100'}`}>
                    {/* Code Panel - expandable */}
                    <div className="min-h-[320px] flex-[2] overflow-hidden">
                      <CodePanel title={tab.label} code={tab.code} />
                    </div>
                    
                    {/* Results Table - expandable */}
                    {tab.results && tab.results.length > 0 && (
                      <div className="min-h-[220px] flex-[1.5]">
                        <ResultsTable results={tab.results} />
                      </div>
                    )}

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
                          <div className="text-xs text-slate-400">Status</div>
                          <div className="flex items-center gap-2">
                            <Pill tone="ok" className="text-xs px-2 py-0.5">ready</Pill>
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
                              <span className="font-mono font-semibold">{tab.results?.length || 5}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Cache Hit</span>
                              <Pill tone="ok" className="text-xs px-2 py-0.5">96%</Pill>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Plan</span>
                              <span className="font-mono text-xs text-slate-400">Optimized</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 flex flex-col justify-center">
                          <div className="text-xs text-slate-400 mb-2">Connection</div>
                          <div className="space-y-1.5 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Database</span>
                              <span className="font-mono text-xs">{productId}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Version</span>
                              <span className="font-mono text-xs">v1.0</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Status</span>
                              <Pill className="text-xs px-2 py-0.5">active</Pill>
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
                              <span className="text-slate-400">Avg Latency</span>
                              <span className="font-mono text-xs">8.2ms</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex-shrink-0">
                  <Link
                    href={tab.footerHref}
                    target={tab.footerHref.startsWith('http') ? '_blank' : undefined}
                    rel={tab.footerHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-white"
                  >
                    {tab.footerLabel} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

