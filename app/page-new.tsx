import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Code2, Database, Zap, Layers, Cpu, ArrowRight } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import FAQSchema from '@/components/SEO/FAQSchema'
import ArchitectureDiagramSVG from '@/components/ArchitectureDiagramSVG'
import { generatePageMetadata } from '@/config/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'NeuronDB PostgreSQL AI Extension',
  description: 'PostgreSQL extension for vector search, machine learning inference, and RAG pipelines. Pure C implementation with GPU acceleration.',
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
    answer: 'NeuronDB extends PostgreSQL with 520+ SQL functions for vector operations, ML inference, and RAG workflows. It uses HNSW indexing for fast vector search and supports GPU acceleration for batch operations.',
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

      {/* Hero: What it is */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-slate-900 dark:text-white">NeuronDB</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              PostgreSQL extension for vector search, machine learning, and RAG pipelines.
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-500 max-w-2xl mx-auto mb-12 font-mono">
              520+ SQL functions • 52 ML algorithms • GPU acceleration • Pure C
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/neurondb/getting-started"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Start
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Documentation
              </Link>
            </div>
          </div>
          
          {/* Architecture Diagram */}
          <div className="mt-20">
            <ArchitectureDiagramSVG />
          </div>
        </div>
      </section>

      {/* Section: How it works */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto w-full py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            How it works
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 text-center mb-16 max-w-2xl mx-auto">
            Everything runs inside PostgreSQL. No external services. No network calls.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-slate-600 dark:text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                SQL Functions
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                520+ functions for vector operations, ML inference, and document processing.
              </p>
              <code className="text-sm text-slate-500 dark:text-slate-500 font-mono">
                SELECT vector_search(...)
              </code>
            </div>

            <div className="p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-slate-600 dark:text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                Background Workers
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                4 workers handle indexing, embedding generation, and ML training automatically.
              </p>
              <code className="text-sm text-slate-500 dark:text-slate-500 font-mono">
                neurondb.index.create(...)
              </code>
            </div>

            <div className="p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-slate-600 dark:text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                GPU Acceleration
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                CUDA, ROCm, and Metal support for 10-100x faster batch operations.
              </p>
              <code className="text-sm text-slate-500 dark:text-slate-500 font-mono">
                SET neurondb.gpu = true;
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why different */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto w-full py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            Why NeuronDB
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 text-center mb-16 max-w-2xl mx-auto">
            Complete AI stack in one place. No data leaves your database.
          </p>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
                  Vector Search + ML + RAG
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                  Most PostgreSQL extensions do one thing. NeuronDB does everything:
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 dark:text-slate-600 mt-1">•</span>
                    <span>Vector search with HNSW and IVF indexing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 dark:text-slate-600 mt-1">•</span>
                    <span>52 machine learning algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 dark:text-slate-600 mt-1">•</span>
                    <span>Complete RAG pipeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 dark:text-slate-600 mt-1">•</span>
                    <span>Agent runtime and MCP server</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 p-8 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                <pre className="text-sm font-mono text-slate-900 dark:text-slate-100 overflow-x-auto">
                  <code>{`-- Vector search
SELECT * FROM vector_search(
  'embeddings',
  query_vector,
  limit => 10
);

-- ML inference
SELECT neurondb.ml.predict(
  'model_name',
  features
);

-- RAG pipeline
SELECT neurondb.rag.query(
  'docs',
  user_query,
  top_k => 5
);`}</code>
                </pre>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                  Pure C Implementation
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Zero dependencies. No external processes. Runs entirely in PostgreSQL.
                </p>
                <div className="flex gap-4 text-sm font-mono text-slate-500 dark:text-slate-500">
                  <span>No Python</span>
                  <span>•</span>
                  <span>No Java</span>
                  <span>•</span>
                  <span>No Rust</span>
                </div>
              </div>

              <div className="p-8 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                  Production Ready
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Battle-tested with comprehensive benchmarks and Kubernetes deployment.
                </p>
                <div className="flex gap-4 text-sm font-mono text-slate-500 dark:text-slate-500">
                  <span>PostgreSQL 16, 17, 18</span>
                  <span>•</span>
                  <span>Kubernetes ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Where it runs */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto w-full py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            Where it runs
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 text-center mb-16 max-w-2xl mx-auto">
            Same PostgreSQL. Same deployment. No changes to your infrastructure.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
                PostgreSQL
              </div>
              <div className="text-lg text-slate-600 dark:text-slate-300 mb-4 font-mono">
                16, 17, 18
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Extension loads with CREATE EXTENSION. No server restart needed.
              </p>
            </div>

            <div className="text-center p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
                Operating Systems
              </div>
              <div className="text-lg text-slate-600 dark:text-slate-300 mb-4 font-mono">
                Linux, macOS, Windows
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Native builds for all platforms. Docker images available.
              </p>
            </div>

            <div className="text-center p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
                GPU Backends
              </div>
              <div className="text-lg text-slate-600 dark:text-slate-300 mb-4 font-mono">
                CUDA, ROCm, Metal
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Optional GPU acceleration. Falls back to CPU automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: How to start */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto w-full py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            How to start
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Install the extension. Start using SQL functions.
          </p>

          <div className="space-y-8">
            <div className="p-8 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                1. Install
              </h3>
              <pre className="text-sm font-mono text-slate-900 dark:text-slate-100 bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-green-400">{`# Download and compile
git clone https://github.com/neurondb-ai/neurondb
cd neurondb && make install`}</code>
              </pre>
            </div>

            <div className="p-8 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                2. Enable
              </h3>
              <pre className="text-sm font-mono text-slate-900 dark:text-slate-100 bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-blue-400">{`-- In PostgreSQL
CREATE EXTENSION neurondb;`}</code>
              </pre>
            </div>

            <div className="p-8 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                3. Use
              </h3>
              <pre className="text-sm font-mono text-slate-900 dark:text-slate-100 bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-yellow-400">{`-- Create vector table
CREATE TABLE embeddings (
  id SERIAL PRIMARY KEY,
  vector vector(128),
  text TEXT
);

-- Insert vectors
INSERT INTO embeddings (vector, text)
VALUES (array_to_vector(...), 'text');

-- Search
SELECT * FROM vector_search('embeddings', query_vector, 10);`}</code>
              </pre>
            </div>

            <div className="text-center pt-8">
              <Link
                href="/docs/neurondb/getting-started"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Read Documentation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterTemplate />
    </PageTemplate>
  )
}

