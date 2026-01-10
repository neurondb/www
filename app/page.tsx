import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import FAQSchema from '@/components/SEO/FAQSchema'
import HomeHero from '@/components/home/HomeHero'
import HomeFeatureGrid from '@/components/home/HomeFeatureGrid'
import { generatePageMetadata } from '@/config/seo'

// Dynamic imports for heavy components - load after initial render
const HomeDashboardDemo = dynamic(() => import('@/components/home/HomeDashboardDemo'), {
  loading: () => <div className="min-h-[600px] bg-slate-900" />,
  ssr: true,
})

const HomeProducts = dynamic(() => import('@/components/home/HomeProducts'), {
  loading: () => <div className="min-h-[400px] bg-slate-900" />,
  ssr: true,
})

const HomeModules = dynamic(() => import('@/components/home/HomeModules'), {
  loading: () => <div className="min-h-[400px] bg-slate-900" />,
  ssr: true,
})

export const metadata: Metadata = generatePageMetadata({
  title: 'NeuronDB PostgreSQL AI Extension',
  description:
    'PostgreSQL extension for vector search, machine learning inference, and RAG pipelines. Runs in-process with a SQL-first surface.',
  keywords: ['neurondb', 'postgresql', 'vector search', 'machine learning', 'rag', 'gpu acceleration'],
  path: '/',
})

const faqs = [
  {
    question: 'What is NeuronDB?',
    answer: 'NeuronDB is a PostgreSQL extension that adds vector search, machine learning inference, and RAG pipeline capabilities directly in your database. Implemented in pure C with zero dependencies.',
  },
  {
    question: 'How does NeuronDB work?',
    answer: 'NeuronDB extends PostgreSQL with 473 SQL functions for vector operations, ML inference, and RAG workflows. It uses HNSW indexing for fast vector search and supports GPU acceleration for batch operations.',
  },
  {
    question: 'Why is NeuronDB different?',
    answer: 'NeuronDB provides a complete AI stack in PostgreSQL: vector search, 52 ML algorithms, RAG pipelines, and agent infrastructure. No external services required. Everything runs in your database.',
  },
  {
    question: 'Where does NeuronDB run?',
    answer: 'NeuronDB runs as a PostgreSQL extension on PostgreSQL 16, 17, and 18. Supports Linux, macOS, and Windows. GPU acceleration available for CUDA, ROCm, and Metal.',
    },
]

export default function Home() {
  return (
    <PageTemplate>
      <FAQSchema faqs={faqs} />

      {/* Hero (Supabase-style split) */}
      <HomeHero />

      {/* Feature Grid - SQL-first capabilities */}
      <HomeFeatureGrid />

      {/* "Stay productive…" demo-style section with benchmarks */}
      <HomeDashboardDemo />

      {/* Stats Section */}
      <section className="bg-slate-950 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">473</div>
              <div className="text-xs sm:text-sm text-slate-400">SQL Functions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">52</div>
              <div className="text-xs sm:text-sm text-slate-400">ML Algorithms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">5</div>
              <div className="text-xs sm:text-sm text-slate-400">Vector Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">4</div>
              <div className="text-xs sm:text-sm text-slate-400">Background Workers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Four products: NeuronDB, NeuronMCP, NeuronAgent, NeuronDesktop */}
      <HomeProducts />

      {/* NeuronDB internals: Vector, ML, RAG, Workers, etc. */}
      <HomeModules />

      {/* Use Cases Section */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
              Use Cases
            </h2>
            <p className="text-sm text-slate-400">
              Powering AI applications with PostgreSQL
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Semantic Search', desc: 'Build semantic search engines with HNSW indexing and hybrid retrieval', href: '/docs/neurondb/features/vector-types' },
              { title: 'RAG Applications', desc: 'Create RAG pipelines with document processing, reranking, and LLM integration', href: '/docs/neurondb/rag' },
              { title: 'Recommendation Systems', desc: 'Build recommendation engines with collaborative filtering and ML algorithms', href: '/docs/neurondb/ml/recommendation-systems' },
              { title: 'AI Agents', desc: 'Deploy autonomous agents with long-term memory and tool execution via NeuronAgent', href: '/docs/neuronagent' },
              { title: 'Claude Desktop Integration', desc: 'Connect Claude Desktop to your database with 100+ MCP tools', href: '/docs/neuronmcp' },
              { title: 'Unified Management', desc: 'Manage your entire NeuronDB ecosystem from a single dashboard', href: '/docs/neurondesktop' },
            ].map((useCase, i) => (
              <Link
                key={i}
                href={useCase.href}
                className="group rounded-xl border border-slate-700 bg-slate-950/50 p-5 hover:border-slate-600 hover:bg-slate-900/50 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {useCase.desc}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-slate-300 group-hover:text-yellow-400 transition-colors">
                  Learn more <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Build with SQL.
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl mx-auto">
              CREATE EXTENSION. Scale to production with Helm charts.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/docs/neurondb/getting-started"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold hover:bg-slate-100 transition-colors"
              >
                Build <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterTemplate />
    </PageTemplate>
  )
}

