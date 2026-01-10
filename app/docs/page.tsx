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
      <section className="relative overflow-hidden min-h-[560px] md:min-h-[600px] flex items-center pt-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Animated gradient background */}
        <div className="absolute inset-0 neuron-tech-bg opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-purple-950/20 to-pink-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-950"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
          <div className="mx-auto max-w-4xl text-center w-full">
            {/* Badge with glow effect */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm px-5 py-2 text-xs text-slate-200 mb-8 animate-fade-in-up shadow-lg shadow-indigo-500/20">
              <BookOpen className="w-4 h-4 text-indigo-400 animate-pulse" />
              <span className="font-semibold">Documentation</span>
              <span className="text-slate-500">•</span>
              <span className="font-mono text-indigo-300">Complete Guide</span>
            </div>

            {/* Main Title with enhanced gradient */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 animate-slide-up leading-none">
              <span className="block drop-shadow-2xl">NeuronDB</span>
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 via-pink-400 to-orange-400 animate-gradient">
                Documentation
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Complete documentation for the NeuronDB ecosystem. Build AI applications in PostgreSQL with vector search, ML inference, and RAG pipelines.
            </p>

            {/* Quick Stats with glow effects */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-12 text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-indigo-500/20 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300 hover:scale-105 group">
                <Database className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <span className="font-mono font-semibold text-slate-200">4</span>
                <span className="text-slate-400">Products</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group">
                <Code2 className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="font-mono font-semibold text-slate-200">473</span>
                <span className="text-slate-400">SQL Functions</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-pink-500/20 backdrop-blur-sm hover:border-pink-500/40 transition-all duration-300 hover:scale-105 group">
                <Zap className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors" />
                <span className="font-mono font-semibold text-slate-200">52</span>
                <span className="text-slate-400">ML Algorithms</span>
              </div>
            </div>

            {/* Search Bar / Quick Actions with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/search"
                className="group flex items-center gap-3 w-full sm:w-auto max-w-md rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-purple-950/40 to-pink-950/40 backdrop-blur-md px-5 py-3.5 text-left text-slate-200 hover:border-indigo-500/60 hover:bg-gradient-to-r hover:from-indigo-950/60 hover:via-purple-950/60 hover:to-pink-950/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <Search className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors animate-pulse" />
                <span className="flex-1 text-sm font-medium">Search documentation...</span>
                <kbd className="hidden sm:inline-flex items-center gap-1 rounded-md border border-indigo-500/30 bg-slate-900/60 px-2.5 py-1 text-xs font-mono text-indigo-300 shadow-lg">
                  <span className="text-[10px]">⌘</span>K
                </kbd>
              </Link>
              <Link
                href="/docs/neurondb/getting-started/docker"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-7 py-3.5 text-sm font-bold hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 group whitespace-nowrap relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative">Quick Start</span>
                <ArrowRight className="w-4 h-4 relative transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Enhanced Quickstart Code Snippet */}
            <div className="rounded-xl border border-indigo-500/30 bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-slate-950/90 backdrop-blur-md text-slate-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/50 hover:scale-[1.01] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between px-4 py-3 border-b border-indigo-500/20 bg-gradient-to-r from-slate-900/80 to-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-lg shadow-red-500/50 animate-pulse"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                </div>
                <div className="text-xs font-mono text-indigo-300 font-semibold">Terminal</div>
              </div>
              <pre className="px-5 py-4 text-sm font-mono overflow-x-auto bg-slate-950/50">
                <code className="text-slate-200">
                  <span className="text-green-400 font-semibold">$</span> docker run -d --name neurondb \
                  <br className="hidden sm:block" />
                  <span className="ml-6 sm:ml-8 text-slate-300">-e POSTGRES_PASSWORD=postgres \</span>
                  <br className="hidden sm:block" />
                  <span className="ml-6 sm:ml-8 text-indigo-300">neurondb/neurondb:latest</span>
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
