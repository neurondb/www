import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import FAQSchema from '@/components/SEO/FAQSchema'
import HomeHero from '@/components/home/HomeHero'
import HomeFeatureGrid from '@/components/home/HomeFeatureGrid'
import HomeDashboardDemo from '@/components/home/HomeDashboardDemo'
import HomeProducts from '@/components/home/HomeProducts'
import HomeModules from '@/components/home/HomeModules'
import { generatePageMetadata } from '@/config/seo'

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

      {/* "Stay productive…" demo-style section with benchmarks */}
      <HomeDashboardDemo />

      {/* Four products: NeuronDB, NeuronMCP, NeuronAgent, NeuronDesktop */}
      <HomeProducts />

      {/* NeuronDB internals: Vector, ML, RAG, Workers, etc. */}
      <HomeModules />

      {/* CTA */}
      <section className="bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 p-10 sm:p-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Build with SQL.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              CREATE EXTENSION. Scale to production with Helm charts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-6 py-3 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Build <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
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

