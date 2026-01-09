'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Github } from 'lucide-react'
import PostgresElephant from '@/components/home/PostgresElephant'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 min-h-[480px] md:min-h-[500px] flex items-center pt-20">
      {/* Subtle clean background */}
      <div className="absolute inset-0 neuron-tech-bg"></div>
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
              <span className="font-mono">CREATE EXTENSION</span>
              <span className="text-slate-300 dark:text-slate-600">/</span>
              <span className="font-mono">neurondb</span>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white">
                AI inside PostgreSQL.
              </h1>
              <div className="hidden sm:block flex-shrink-0 -mt-4 opacity-80 hover:opacity-100 transition-opacity">
                <PostgresElephant size={80} className="text-slate-600 dark:text-slate-400" />
              </div>
            </div>
            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
              PostgreSQL extension for vector search, ML inference, and RAG pipelines.
              Runs in-process with SQL functions.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Start
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300/80 dark:border-slate-700 px-5 py-3 text-sm font-semibold text-slate-900 dark:text-white bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-900/60 transition-colors"
              >
                Read docs
              </Link>
              <Link
                href="https://github.com/neurondb-ai/neurondb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300/80 dark:border-slate-700 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-900/50 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            </div>

            {/* Quickstart snippet */}
            <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-100 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800">
                <div className="text-xs font-mono text-slate-300">psql</div>
                <div className="text-xs text-slate-400">Quickstart</div>
              </div>
              <pre className="px-4 py-4 text-sm font-mono overflow-x-auto">
                <code>CREATE EXTENSION neurondb;</code>
              </pre>
            </div>

            {/* Technical facts */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-mono">PostgreSQL 16 to 18</span>
              <span className="font-mono">Pure C</span>
              <span className="font-mono">GPU: CUDA / ROCm / Metal</span>
              <span className="font-mono">473 SQL functions</span>
            </div>
          </div>

          {/* Right: architecture visual */}
          <div className="relative">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PostgresElephant size={24} className="text-slate-500 dark:text-slate-500 opacity-60" />
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">NeuronDB Ecosystem</div>
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">3 Products • Complete AI Stack</div>
            </div>
            <div className="relative w-full rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg bg-white dark:bg-slate-900">
              <Image
                src="/hero.png"
                alt="NeuronDB Ecosystem: NeuronDB, NeuronAgent, and NeuronMCP"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


