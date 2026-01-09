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
} from 'lucide-react'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

type ProductTab = {
  id: string
  label: string
  icon: React.ElementType
  heading: string
  description: string
  codeLabel: string
  code: string
  footerHref: string
  footerLabel: string
}

type ProductDashboardDemoProps = {
  productId: 'neurondb' | 'neuronmcp' | 'neuronagent' | 'neurondesktop'
  tabs: ProductTab[]
  title: string
  subtitle: string
}

function Pill({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'ok' | 'warn' }) {
  const cls =
    tone === 'ok'
      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
      : tone === 'warn'
      ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-800'
      : 'bg-slate-50 text-slate-700 dark:bg-slate-900 dark:text-slate-300 border-slate-200 dark:border-slate-800'

  return <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${cls}`}>{children}</span>
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
      fontSize: '12px',
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
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-100 overflow-hidden h-full flex flex-col">
      <div className="px-4 py-2 border-b border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between flex-shrink-0">
        <span>{title}</span>
        <span className="text-slate-400">demo</span>
      </div>
      <div className="overflow-x-auto overflow-y-auto w-full flex-1 min-h-0">
        <SyntaxHighlighter
          language={language}
          style={customStyle}
          customStyle={{
            margin: 0,
            background: '#0f172a',
            padding: '0.75rem',
            whiteSpace: 'pre',
            overflowX: 'auto',
            minWidth: '100%',
          }}
          codeTagProps={{
            style: {
              fontFamily: 'SF Mono, Consolas, Monaco, monospace',
              fontSize: '11px',
              lineHeight: '1.5',
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
  
  let selectedTab = tabs[0]
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].id === active) {
      selectedTab = tabs[i]
      break
    }
  }
  const tab = selectedTab

  return (
    <section className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left - tabs */}
          <div className="lg:col-span-3 flex flex-col h-full">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {title}
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              {subtitle}
            </p>

            <div className="mt-8 space-y-2 flex-grow">
              {tabs.map((t) => {
                const TIcon = t.icon
                const isActive = t.id === active
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={[
                      'w-full text-left rounded-xl border px-3 py-2.5 transition-colors',
                      isActive
                        ? 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-950',
                    ].join(' ')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                        <TIcon className="w-4 h-4 text-slate-700 dark:text-slate-200" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">{t.label}</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{t.heading}</div>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: "demo panel" */}
          <div className="lg:col-span-9 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden flex flex-col h-full">
            {/* App topbar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                  {(() => {
                    const Icon = tab.icon
                    return <Icon className="w-4 h-4 text-slate-700 dark:text-slate-200" />
                  })()}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{productId}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">demo</div>
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
              <div className="p-4 bg-slate-50 dark:bg-slate-950 flex flex-col h-full overflow-hidden">
                <div className="flex items-start justify-between gap-4 mb-3 flex-shrink-0">
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{tab.heading}</div>
                    <div className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">{tab.description}</div>
                  </div>
                  <Pill>{tab.codeLabel}</Pill>
                </div>

                {/* Content by tab */}
                <div key={tab.id} className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden" style={{ maxHeight: '100%' }}>
                  <div className="h-[500px]">
                    <CodePanel title={tab.label} code={tab.code} />
                  </div>
                </div>

                <div className="mt-4">
                  <Link
                    href={tab.footerHref}
                    target={tab.footerHref.startsWith('http') ? '_blank' : undefined}
                    rel={tab.footerHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
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

