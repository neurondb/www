import Link from 'next/link'
import { ArrowRight, Database, Cpu, Layers, Network, Zap } from 'lucide-react'

type Tile = {
  title: string
  description: string
  icon: React.ElementType
  href: string
  meta: string
  code: string
}

const tiles: Tile[] = [
  {
    title: 'Vector search',
    description: 'HNSW and IVF indexing with multiple distance metrics. Compatible with pgvector.',
    icon: Layers,
    href: '/docs/vector-engine',
    meta: 'index + query',
    code: "SELECT * FROM vector_search('embeddings', q, 10);",
  },
  {
    title: 'ML inference',
    description: 'In-database inference and classical ML algorithms as SQL functions.',
    icon: Cpu,
    href: '/docs/ml',
    meta: 'predict() in SQL',
    code: "SELECT neurondb.ml.predict('model', features);",
  },
  {
    title: 'RAG pipeline',
    description: 'Chunking, retrieval, reranking, and answer assembly as database steps.',
    icon: Zap,
    href: '/docs/rag',
    meta: 'retrieve + rerank',
    code: "SELECT neurondb.rag.query('docs', q, top_k => 5);",
  },
  {
    title: 'PostgreSQL-native',
    description: 'Runs in-process as an extension. No sidecars required.',
    icon: Database,
    href: '/docs',
    meta: 'in-process',
    code: 'CREATE EXTENSION neurondb;',
  },
  {
    title: 'Agent runtime',
    description: 'Tool execution and workflows via NeuronAgent for database AI apps.',
    icon: Network,
    href: '/neuronagent',
    meta: 'tools + workflows',
    code: 'pip install neuronagent',
  },
  {
    title: 'MCP tools',
    description: 'Model Context Protocol server for tool access from Claude Desktop and other clients.',
    icon: Layers,
    href: '/neuronmcp',
    meta: '100+ tools',
    code: 'npx @neurondb/neuronmcp',
  },
]

export default function HomeFeatureGrid() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              One platform. SQL-first.
            </h2>
            <p className="mt-2 text-slate-300 max-w-2xl">
              Vector, ML, and RAG primitives that run where your data lives.
            </p>
          </div>
          <Link
            href="/docs"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-white"
          >
            Browse docs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiles.map((t) => {
            const Icon = t.icon
            return (
              <Link
                key={t.title}
                href={t.href}
                className="group block rounded-2xl border border-slate-800 bg-slate-950 p-6 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-slate-200" />
                  </div>
                  <div className="text-xs font-mono text-slate-400">{t.meta}</div>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {t.description}
                </p>

                <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900 p-3">
                  <code className="text-xs font-mono text-slate-200">
                    {t.code}
                  </code>
                </div>

                <div className="mt-4 text-sm font-semibold text-slate-200 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-white"
          >
            Browse docs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}


