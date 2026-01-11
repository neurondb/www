'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Github } from 'lucide-react'
import PostgresElephant from '@/components/home/PostgresElephant'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[420px] md:min-h-[450px] flex items-center pt-16 pb-12">
      {/* Subtle clean background */}
      <div className="absolute inset-0 neuron-tech-bg"></div>
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
              <span className="font-mono">CREATE EXTENSION</span>
              <span className="text-slate-600">/</span>
              <span className="font-mono">neurondb</span>
            </div>

            <div className="mt-5 flex items-center gap-4 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">
                AI inside PostgreSQL.
              </h1>
              <div className="hidden sm:block flex-shrink-0 -mt-4 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 hover:rotate-3">
                <PostgresElephant size={80} className="text-slate-400" />
              </div>
            </div>
            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-slate-300 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              PostgreSQL extension for vector search, ML inference, and RAG pipelines.
              Runs in-process with SQL functions.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/docs/neurondb/getting-started"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                Start
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-white bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Read docs
              </Link>
              <Link
                href="https://github.com/neurondb-ai/neurondb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/30 backdrop-blur-sm hover:bg-slate-900/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <Github className="w-4 h-4 transition-transform group-hover:rotate-12" />
                GitHub
              </Link>
            </div>

            {/* Quickstart snippet */}
            <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800">
                <div className="text-xs font-mono text-slate-300">psql</div>
                <div className="text-xs text-slate-400">Quickstart</div>
              </div>
              <pre className="px-4 py-4 text-sm font-mono overflow-x-auto">
                <code>CREATE EXTENSION neurondb;</code>
              </pre>
            </div>

            {/* Technical facts */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="font-mono transition-all duration-300 hover:text-slate-200">PostgreSQL 16 to 18</span>
              <span className="font-mono transition-all duration-300 hover:text-slate-200">Pure C</span>
              <span className="font-mono transition-all duration-300 hover:text-slate-200">GPU: CUDA / ROCm / Metal</span>
              <span className="font-mono transition-all duration-300 hover:text-slate-200">520+ SQL functions</span>
            </div>
          </div>

          {/* Right: architecture visual */}
          <div className="relative">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PostgresElephant size={24} className="text-slate-500 opacity-60" />
                <div className="text-xs font-semibold text-slate-300">NeuronDB Ecosystem</div>
              </div>
              <div className="text-xs font-mono text-slate-400">4 Products • Complete AI Stack</div>
            </div>
            <div className="relative w-full rounded-2xl border border-slate-800 overflow-hidden shadow-lg bg-slate-900 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-slide-in-from-right-full">
              <Image
                src="/hero.png"
                alt="NeuronDB Ecosystem: NeuronDB, NeuronAgent, and NeuronMCP"
                width={1200}
                height={800}
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


