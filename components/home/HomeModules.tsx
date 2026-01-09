import Link from 'next/link'
import { ArrowRight, Boxes, Cpu, Database, GitBranch, Layers, Network, Zap, Cloud, Box, Bot } from 'lucide-react'
import ModuleArt from '@/components/home/ModuleArt'

type ModuleCard = {
  title: string
  art: 'vector' | 'ml' | 'rag' | 'workers' | 'sql' | 'mcp' | 'k8s'
  kicker: string
  description: string
  bullets: string[]
  codeLabel: string
  code: string
  href: string
  icon: React.ElementType
}

const modules: ModuleCard[] = [
  {
    title: 'Vector engine',
    art: 'vector',
    kicker: 'Index and search embeddings.',
    description:
      'HNSW/IVF indexing, multiple distance metrics, and pgvector-compatible workflows.',
    bullets: ['HNSW + IVF indexes', '10+ distance metrics', 'GPU batch acceleration', 'pgvector compatible', 'Async index builds'],
    codeLabel: 'SQL',
    code: "SELECT * FROM vector_search('embeddings', q, 10);",
    href: '/docs/vector-engine',
    icon: Layers,
  },
  {
    title: 'ML engine',
    art: 'ml',
    kicker: 'Inference and classical ML.',
    description:
      'Train/evaluate/predict inside the database with 52+ algorithms implemented in C.',
    bullets: ['52+ algorithms', 'Model management', 'Feature store', 'Train in SQL', 'GPU inference'],
    codeLabel: 'SQL',
    code: "SELECT neurondb.ml.predict('model', features);",
    href: '/docs/ml',
    icon: Cpu,
  },
  {
    title: 'RAG pipeline',
    art: 'rag',
    kicker: 'Retrieval + rerank.',
    description:
      'Document ingestion, chunking, retrieval, reranking, and answer assembly.',
    bullets: ['Chunk + embed', 'Hybrid retrieval', 'Reranking', 'LLM integration', 'Context assembly'],
    codeLabel: 'SQL',
    code: "SELECT neurondb.rag.query('docs', q, top_k => 5);",
    href: '/docs/rag',
    icon: Zap,
  },
  {
    title: 'Background workers',
    art: 'workers',
    kicker: 'Async tasks.',
    description:
      '4 background workers handle indexing, ingestion, monitoring, and queue processing.',
    bullets: ['4 workers', 'Queue + scheduler', 'Metrics hooks', 'Async indexing', 'Auto-scaling'],
    codeLabel: 'Docs',
    code: 'docs/background-workers',
    href: '/docs/background-workers',
    icon: GitBranch,
  },
  {
    title: 'Kubernetes Helm',
    art: 'k8s',
    kicker: 'Cloud-native deployment.',
    description:
      'Official Helm charts for production deployments with observability.',
    bullets: ['StatefulSets', 'HPA + PDB', 'Prometheus + Grafana', 'Jaeger tracing', 'Auto-backup'],
    codeLabel: 'Helm',
    code: 'helm install neurondb',
    href: '/docs/deployment/kubernetes',
    icon: Cloud,
  },
  {
    title: 'Hugging Face',
    art: 'sql',
    kicker: 'Dataset loading.',
    description:
      'Load datasets and generate embeddings using Hugging Face libraries.',
    bullets: ['Datasets API', 'sentence-transformers', 'Batch loading', 'Model caching', 'Auto-download'],
    codeLabel: 'Python',
    code: 'examples/data_loading/',
    href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/data_loading',
    icon: Box,
  },
]

export default function HomeModules() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Inside NeuronDB
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Engines, pipelines, and deployment tools
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => {
            const Icon = m.icon
            return (
              <Link
                key={m.title}
                href={m.href}
                className="group relative rounded-2xl border border-slate-700 bg-transparent overflow-hidden hover:shadow-xl card-smooth"
              >
                {/* Large visual artwork - takes up most of the card */}
                <div className="h-64 bg-transparent flex items-center justify-center relative overflow-hidden">
                  {/* Large artwork */}
                  <div className="relative w-56 h-56 opacity-95 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 ease-out">
                    <ModuleArt kind={m.art} />
                  </div>
                </div>

                {/* Minimal text content */}
                <div className="p-6 bg-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-slate-200" />
                    <h3 className="text-xl font-semibold text-white">{m.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">{m.kicker}</p>

                  {/* Bullets list */}
                  <ul className="space-y-2 mb-4">
                    {m.bullets.slice(0, 5).map((bullet, idx) => (
                      <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="text-slate-500 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-slate-200 group-hover:text-white transition-all duration-300">
                    <span className="transition-transform group-hover:translate-x-1">Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
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


