import DocsPageClient from './docs-page-client'

export const metadata = {
  title: 'NeuronDB Documentation | AI PostgreSQL Extension',
  description:
    'NeuronDB: AI PostgreSQL extension for vector search, machine learning, and AI workloads. GPU-accelerated vector search, HNSW indexing, ML inference, hybrid retrieval, RAG pipelines, and ONNX model deployment in PostgreSQL.',
  keywords: [
    'NeuronDB',
    'AI PostgreSQL',
    'AI Postgres',
    'PostgreSQL AI extension',
    'PostgreSQL.ai',
    'PostgreSQL.ai alternative',
    'pgml',
    'pgml alternative',
    'PostgreSQLml',
    'PostgreSQL ML',
    'PostgreSQL machine learning',
    'AI extension for PostgreSQL',
    'PostgreSQL vector search',
    'GPU-accelerated vector database',
    'HNSW index',
    'vector similarity search',
    'machine learning in PostgreSQL',
    'ONNX inference',
    'hybrid search',
    'RAG pipeline',
    'vector embeddings',
    'semantic search',
    'neural network database',
    'vector indexing',
    'cosine similarity',
    'L2 distance',
    'approximate nearest neighbor',
    'ANN search',
    'embedding generation',
    'PostgreSQL AI',
    'Postgres AI',
    'AI database extension'
  ].join(', '),
  alternates: {
    canonical: 'https://www.neurondb.ai/docs/neurondb',
  },
  openGraph: {
    title: 'NeuronDB Documentation | PostgreSQL AI Vector Extension',
    description: 'Guide to GPU-accelerated vector search, ML inference, and RAG pipelines in PostgreSQL with NeuronDB.',
    type: 'website',
    url: 'https://www.neurondb.ai/docs/neurondb',
    siteName: 'NeuronDB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuronDB Documentation | PostgreSQL AI Vector Extension',
    description: 'Guide to GPU-accelerated vector search, ML inference, and RAG pipelines in PostgreSQL.',
  },
}

export default function Page() {
  return <DocsPageClient />
}

