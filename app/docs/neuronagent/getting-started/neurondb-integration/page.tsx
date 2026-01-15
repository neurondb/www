import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'NeuronAgent NeuronDB Integration | Vector Search and Embeddings',
  description: 'Integrate NeuronAgent with NeuronDB for vector search, embeddings generation, and RAG operations. Complete integration guide.',
  keywords: [
    'NeuronAgent NeuronDB integration',
    'agent vector search',
    'agent embeddings',
    'agent RAG',
    'NeuronDB agent tools',
    'vector search agent'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent/getting-started/neurondb-integration',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'vector-operations', title: 'Vector Operations' },
  { id: 'embeddings', title: 'Embeddings' },
  { id: 'rag-operations', title: 'RAG Operations' },
]

const prevLink: NavLink = {
  href: '/docs/neuronagent/getting-started/configuration',
  label: 'Configuration',
}
const nextLink: NavLink | undefined = undefined

export default function NeuronAgentNeuronDBIntegration() {
  return (
    <PostgresDocsLayout
      title="NeuronAgent NeuronDB Integration"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          NeuronAgent integrates directly with NeuronDB to provide vector search, embeddings generation, and RAG operations through agent tools.
        </p>
      </section>

      <section id="vector-operations">
        <h2>Vector Operations</h2>
        <p>
          Use NeuronDB vector search tools in your agents:
        </p>
        <ul>
          <li>Vector similarity search with multiple distance metrics</li>
          <li>HNSW and IVF index management</li>
          <li>Multi-vector and hybrid search</li>
          <li>Vector quantization operations</li>
        </ul>
      </section>

      <section id="embeddings">
        <h2>Embeddings</h2>
        <p>
          Generate embeddings using NeuronDB:
        </p>
        <ul>
          <li>Text embeddings with 50+ pre-configured models</li>
          <li>Image and multimodal embeddings</li>
          <li>Batch embedding generation</li>
          <li>Embedding caching for performance</li>
        </ul>
      </section>

      <section id="rag-operations">
        <h2>RAG Operations</h2>
        <p>
          Build RAG pipelines with NeuronAgent and NeuronDB:
        </p>
        <ul>
          <li>Document processing and chunking</li>
          <li>Semantic search and retrieval</li>
          <li>Reranking with multiple methods</li>
          <li>LLM integration for response generation</li>
        </ul>
        <p>
          See <a href="/docs/neurondb/rag">NeuronDB RAG Documentation</a> for complete RAG pipeline details.
        </p>
      </section>

    </PostgresDocsLayout>
  )
}
