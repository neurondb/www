import Link from 'next/link'
import { ArrowRight, Database, Network, Bot, Monitor } from 'lucide-react'
import ProductArt from '@/components/home/ProductArt'

type Product = {
  name: string
  tagline: string
  description: string
  art: 'neurondb' | 'neuronmcp' | 'neuronagent' | 'neurondesktop'
  href: string
  icon: React.ElementType
  bullets: string[]
}

const products: Product[] = [
  {
    name: 'NeuronDB',
    tagline: 'PostgreSQL extension for AI',
    description: 'Vector search, ML inference, and RAG pipelines. Pure C, 473 SQL functions, GPU-accelerated.',
    art: 'neurondb',
    href: '/neurondb',
    icon: Database,
    bullets: [
      'Vector search with HNSW/IVF indexing',
      '52+ ML algorithms in pure C',
      'RAG pipeline with reranking',
      'GPU acceleration (CUDA/ROCm/Metal)',
      '473 SQL functions',
    ],
  },
  {
    name: 'NeuronMCP',
    tagline: 'MCP server with 100+ tools',
    description: 'Model Context Protocol server for Claude Desktop and compatible clients. Full database access.',
    art: 'neuronmcp',
    href: '/neuronmcp',
    icon: Network,
    bullets: [
      '100+ MCP tools for database operations',
      'Claude Desktop integration',
      'Vector search and ML inference tools',
      'Real-time query execution',
      'Full PostgreSQL access',
    ],
  },
  {
    name: 'NeuronAgent',
    tagline: 'Agent runtime for workflows',
    description: 'Execute multi-step agent workflows with tool calls, state management, and orchestration.',
    art: 'neuronagent',
    href: '/neuronagent',
    icon: Bot,
    bullets: [
      'Multi-step workflow execution',
      'Tool call orchestration',
      'State management and persistence',
      'Error handling and retries',
      'Python and TypeScript SDKs',
    ],
  },
  {
    name: 'NeuronDesktop',
    tagline: 'Desktop app for management',
    description: 'Visual interface for managing databases, running queries, and monitoring agent workflows.',
    art: 'neurondesktop',
    href: '/neurondesktop',
    icon: Monitor,
    bullets: [
      'Visual query builder',
      'Agent workflow monitoring',
      'Real-time performance metrics',
      'Database schema explorer',
      'Cross-platform (Mac/Windows/Linux)',
    ],
  },
]

export default function HomeProducts() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                    NeuronDB PostgreSQL AI Ecosystem
                  </h2>
                </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {products.map((p) => {
            const Icon = p.icon
            return (
              <Link
                key={p.name}
                href={p.href}
                className="group relative rounded-2xl border border-slate-700 bg-transparent overflow-hidden hover:shadow-xl transition-all"
                      >
                        {/* Large visual artwork - takes up most of the card */}
                        <div className="h-48 bg-transparent flex items-center justify-center relative overflow-hidden">
                          {/* Large artwork - centered and increased SVG size */}
                          <div className="relative w-72 h-72 opacity-95 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                            <ProductArt kind={p.art} />
                          </div>
                        </div>

                        {/* Compact product info at bottom */}
                        <div className="p-4 bg-transparent">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-xl bg-transparent border border-slate-700 flex items-center justify-center">
                              <Icon className="w-4 h-4 text-slate-200" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                              <p className="text-xs text-slate-400">{p.tagline}</p>
                            </div>
                          </div>

                          {/* Bullet points */}
                          <ul className="mt-3 space-y-1.5">
                            {p.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                                <span className="text-yellow-400 mt-0.5">•</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-3 flex items-center gap-1 text-xs font-medium text-slate-200 group-hover:text-white transition-colors">
                            <span>Learn more</span>
                            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

