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
      {/* Hero Section - Exact Homepage Size */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[420px] md:min-h-[450px] flex items-center pt-16 pb-12">
        {/* Subtle clean background */}
        <div className="absolute inset-0 neuron-tech-bg"></div>
        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge - Exact Homepage Style */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 animate-fade-in-up">
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold">Documentation</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono">Complete Guide</span>
            </div>

            {/* Main Title - Exact Homepage Style */}
            <div className="mt-5 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">
                NeuronDB Documentation
              </h1>
            </div>

            {/* Description - Exact Homepage Style */}
            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-slate-300 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Complete documentation for the NeuronDB ecosystem. Build AI applications in PostgreSQL with vector search, ML inference, and RAG pipelines.
            </p>

            {/* Quick Stats - Exact Homepage Style */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="font-mono transition-all duration-300 hover:text-slate-200">4 Products</span>
              <span className="font-mono transition-all duration-300 hover:text-slate-200">520+ SQL Functions</span>
              <span className="font-mono transition-all duration-300 hover:text-slate-200">52 ML Algorithms</span>
            </div>

            {/* Search Bar / Quick Actions - Exact Homepage Style */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/search"
                className="group flex items-center gap-3 w-full sm:w-auto max-w-md rounded-lg border border-slate-700 bg-slate-900/40 backdrop-blur-sm px-5 py-3 text-left text-slate-200 hover:bg-slate-900/60 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Search className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                <span className="flex-1 text-sm font-semibold">Search documentation...</span>
                <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-slate-600 bg-slate-800 px-2 py-0.5 text-xs font-mono text-slate-400">
                  <span className="text-[10px]">⌘</span>K
                </kbd>
              </Link>
              <Link
                href="/docs/neurondb/getting-started/docker"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-lg group whitespace-nowrap"
              >
                Quick Start
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Quickstart Code Snippet - Exact Homepage Style */}
            <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800">
                <div className="text-xs font-mono text-slate-300">Terminal</div>
                <div className="text-xs text-slate-400">Quickstart</div>
              </div>
              <pre className="px-4 py-4 text-sm font-mono overflow-x-auto">
                <code>
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
