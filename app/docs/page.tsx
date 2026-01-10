'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, Search, Zap, Database, Code2 } from 'lucide-react'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { getAllProducts, getProductIds } from '@/config/products'
import { getProductTheme } from '@/config/theme'
import { NeuronDBIcon, NeuronAgentIcon, NeuronMCPIcon, NeuronDesktopIcon } from '@/components/ProductIcons'

const productIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  neurondb: NeuronDBIcon,
  neuronagent: NeuronAgentIcon,
  neuronmcp: NeuronMCPIcon,
  neurondesktop: NeuronDesktopIcon,
}

export default function DocsPage() {
  const products = getAllProducts()
  const productIds = getProductIds()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[480px] md:min-h-[520px] flex items-center pt-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Subtle background effect */}
        <div className="absolute inset-0 neuron-tech-bg opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-16">
          <div className="mx-auto max-w-4xl text-center w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-1.5 text-xs text-slate-300 mb-6 animate-fade-in-up">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span className="font-semibold">Documentation</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono">Complete Guide</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-slide-up">
              NeuronDB
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Documentation
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Complete documentation for the NeuronDB ecosystem. Build AI applications in PostgreSQL with vector search, ML inference, and RAG pipelines.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-10 text-sm text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-indigo-400" />
                <span className="font-mono font-semibold text-slate-200">4 Products</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span className="font-mono font-semibold text-slate-200">473 SQL Functions</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-pink-400" />
                <span className="font-mono font-semibold text-slate-200">52 ML Algorithms</span>
              </div>
            </div>

            {/* Search Bar / Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/search"
                className="group flex items-center gap-3 w-full sm:w-auto max-w-md rounded-xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm px-5 py-3.5 text-left text-slate-300 hover:border-indigo-500 hover:bg-slate-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <Search className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                <span className="flex-1 text-sm">Search documentation...</span>
                <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-slate-600 bg-slate-800 px-2 py-0.5 text-xs font-mono text-slate-400">
                  <span className="text-[10px]">⌘</span>K
                </kbd>
              </Link>
              <Link
                href="/docs/neurondb/getting-started/docker"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-6 py-3.5 text-sm font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-xl group whitespace-nowrap"
              >
                Quick Start
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Quickstart Code Snippet */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 backdrop-blur-sm text-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-slate-700 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800 bg-slate-900/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono text-slate-400">Terminal</div>
              </div>
              <pre className="px-5 py-4 text-sm font-mono overflow-x-auto">
                <code className="text-slate-200">
                  <span className="text-green-400">$</span> docker run -d --name neurondb \
                  <br className="hidden sm:block" />
                  <span className="ml-6 sm:ml-8">-e POSTGRES_PASSWORD=postgres \</span>
                  <br className="hidden sm:block" />
                  <span className="ml-6 sm:ml-8">neurondb/neurondb:latest</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-white mb-12">
            Select a Product
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {productIds.map((productId) => {
              const product = products.find(p => p.id === productId)
              if (!product) return null

              const theme = getProductTheme(productId as any)
              const Icon = productIcons[productId] || BookOpen

              return (
                <Link
                  key={productId}
                  href={product.docsUrl}
                  className="group rounded-2xl border border-slate-700/60 bg-slate-900/60 p-8 shadow-sm transition-all hover:border-opacity-100 hover:shadow-lg hover:-translate-y-1"
                  style={{
                    borderColor: `var(--color-${theme.primaryColor})`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 ${theme.featureIconClass}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-white group-hover:text-opacity-90">
                          {product.displayName}
                        </h3>
                        <ArrowRight className={`h-5 w-5 ${theme.featureIconClass} opacity-0 group-hover:opacity-100 transition-opacity`} />
                      </div>
                      <p className="mt-2 text-sm text-slate-400">
                        {product.tagline}
                      </p>
                      <p className="mt-3 text-sm text-slate-300">
                        {product.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.badges.slice(0, 3).map((badge, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-md bg-slate-800/60 px-2.5 py-0.5 text-xs font-medium text-slate-300 border border-slate-700/60"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-white mb-10">
            Quick Links
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/docs/neurondb/getting-started"
              className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-sm transition hover:border-indigo-300"
            >
              <BookOpen className="h-6 w-6 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                NeuronDB Quick Start
              </h3>
              <p className="text-sm text-slate-400">
                Get started with NeuronDB in 5 minutes with Docker.
              </p>
            </Link>
            <Link
              href="https://github.com/neurondb-ai/neurondb"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-sm transition hover:border-indigo-300"
            >
              <ArrowRight className="h-6 w-6 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                GitHub Repository
              </h3>
              <p className="text-sm text-slate-400">
                View source code, examples, and contribute to NeuronDB.
              </p>
            </Link>
            <Link
              href="/docs/neurondb/getting-started/docker"
              className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-sm transition hover:border-indigo-300"
            >
              <BookOpen className="h-6 w-6 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Docker Quick Start
              </h3>
              <p className="text-sm text-slate-400">
                Run the complete ecosystem with Docker Compose.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <FooterTemplate />
    </div>
  )
}
