import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { getAllProducts, getProductIds } from '@/config/products'
import { getProductTheme } from '@/config/theme'
import { NeuronDBIcon, NeuronAgentIcon, NeuronMCPIcon, NeuronDesktopIcon } from '@/components/ProductIcons'

export const metadata: Metadata = {
  title: 'Documentation | NeuronDB',
  description: 'Documentation for NeuronDB ecosystem: NeuronDB PostgreSQL AI extension, NeuronAgent runtime, NeuronMCP protocol server, and NeuronDesktop web interface.',
  keywords: [
    'NeuronDB documentation',
    'PostgreSQL AI documentation',
    'vector search documentation',
    'NeuronAgent docs',
    'NeuronMCP docs',
    'NeuronDesktop docs',
  ].join(', '),
  alternates: {
    canonical: 'https://www.neurondb.ai/docs',
  },
  openGraph: {
    title: 'Documentation | NeuronDB',
    description: 'Documentation for the complete NeuronDB ecosystem.',
    type: 'website',
    url: 'https://www.neurondb.ai/docs',
    siteName: 'NeuronDB',
  },
}

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
      <section className="relative overflow-hidden min-h-[400px] flex items-center pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
          <div className="mx-auto max-w-3xl text-center w-full">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              NeuronDB Documentation
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Complete documentation for the NeuronDB ecosystem. Choose a product to get started.
            </p>
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
