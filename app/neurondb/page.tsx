import React from 'react';
import Link from 'next/link';
import ProductPageTemplate from '@/components/templates/ProductPageTemplate';
import ProductDashboardDemo from '@/components/product/ProductDashboardDemo';
import NeuronDBArchitectureDiagram from '@/components/NeuronDBArchitectureDiagram';
import ProductSchema from '@/components/SEO/ProductSchema';
import { generateProductPageMetadata } from '@/config/seo';

export const metadata = generateProductPageMetadata('neurondb');

const neurondbDashboardTabs = [
  {
    id: 'vector',
    label: 'Vector Search',
    iconName: 'Search',
    heading: 'HNSW + IVF indexing',
    description: 'High-performance vector search with multiple distance metrics',
    codeLabel: 'SQL',
    code: `-- Create vector table\nCREATE TABLE embeddings (\n  id SERIAL PRIMARY KEY,\n  embedding vector(384),\n  metadata JSONB\n);\n\n-- Create HNSW index\nCREATE INDEX ON embeddings \nUSING hnsw (embedding vector_cosine_ops);\n\n-- Vector search\nSELECT id, 1 - (embedding <=> query_vec) as similarity\nFROM embeddings\nORDER BY embedding <=> query_vec\nLIMIT 10;`,
    footerHref: '/docs/vector-engine',
    footerLabel: 'Vector Engine Docs',
    results: [
      { id: 42, sim: 0.9523, text: 'Vector search enables semantic similarity matching in high-dimensional spaces using embeddings to find related content…' },
      { id: 38, sim: 0.9234, text: 'HNSW indexes provide fast approximate nearest neighbor search for vector databases with logarithmic query time…' },
      { id: 35, sim: 0.8945, text: 'RAG combines retrieval with generation for accurate LLM responses by finding relevant context first…' },
      { id: 31, sim: 0.8656, text: 'Embeddings convert text into numerical vectors for machine learning models to process semantic meaning…' },
      { id: 28, sim: 0.8367, text: 'PostgreSQL extensions enable vector operations directly in the database without external services…' },
    ],
  },
  {
    id: 'ml',
    label: 'ML Inference',
    iconName: 'Cpu',
    heading: '52 ML algorithms',
    description: 'Train and predict with Random Forest, XGBoost, and more',
    codeLabel: 'SQL',
    code: `-- Train a model\nSELECT neurondb.ml.train(\n  'sentiment_model',\n  'random_forest',\n  'SELECT features, label FROM training_data'\n);\n\n-- Make predictions\nSELECT \n  id,\n  neurondb.ml.predict(\n    'sentiment_model',\n    features\n  ) as prediction\nFROM test_data;`,
    footerHref: '/docs/ml',
    footerLabel: 'ML Engine Docs',
    results: [
      { id: 1001, prediction: 'positive', sim: 0.95, text: '' },
      { id: 1002, prediction: 'negative', sim: 0.88, text: '' },
      { id: 1003, prediction: 'neutral', sim: 0.76, text: '' },
      { id: 1004, prediction: 'positive', sim: 0.92, text: '' },
      { id: 1005, prediction: 'negative', sim: 0.84, text: '' },
    ],
  },
  {
    id: 'rag',
    label: 'RAG Pipeline',
    iconName: 'Zap',
    heading: 'Retrieval Augmented Generation',
    description: 'Complete RAG pipeline with document processing',
    codeLabel: 'SQL',
    code: `-- RAG query with reranking\nSELECT neurondb.rag.query(\n  'knowledge_base',\n  'What is vector search?',\n  top_k := 5,\n  rerank := 'cross-encoder',\n  llm := 'gpt-4'\n);\n\n-- Returns structured answer with sources`,
    footerHref: '/docs/neurondb/rag',
    footerLabel: 'RAG Docs',
    results: [
      { id: 42, sim: 0.9523, text: 'Vector search enables semantic similarity matching in high-dimensional spaces using embeddings to find related content…' },
      { id: 38, sim: 0.9234, text: 'HNSW indexes provide fast approximate nearest neighbor search for vector databases with logarithmic query time…' },
      { id: 35, sim: 0.8945, text: 'RAG combines retrieval with generation for accurate LLM responses by finding relevant context first…' },
      { id: 31, sim: 0.8656, text: 'Embeddings convert text into numerical vectors for machine learning models to process semantic meaning…' },
      { id: 28, sim: 0.8367, text: 'PostgreSQL extensions enable vector operations directly in the database without external services…' },
    ],
  },
  {
    id: 'hybrid',
    label: 'Hybrid Search',
    iconName: 'Layers',
    heading: 'Vector + Full-text',
    description: 'Combine vector similarity with keyword search',
    codeLabel: 'SQL',
    code: `-- Hybrid search combining vector + BM25\nSELECT \n  id,\n  text,\n  (0.7 * vector_score + 0.3 * text_score) as final_score\nFROM hybrid_search(\n  'documents',\n  query_vector,\n  'search terms',\n  top_k := 10\n)\nORDER BY final_score DESC;`,
    footerHref: '/docs/hybrid',
    footerLabel: 'Hybrid Search Docs',
    results: [
      { id: 502, sim: 0.9234, text: 'PostgreSQL vector extension for AI applications with GPU acceleration…', category: 'tech' },
      { id: 489, sim: 0.9012, text: 'NeuronDB provides 520+ SQL functions for vector operations and ML inference…', category: 'tech' },
      { id: 456, sim: 0.8876, text: 'HNSW indexing enables sub-millisecond search on millions of high-dimensional vectors…', category: 'tech' },
      { id: 423, sim: 0.8754, text: 'RAG pipeline with reranking improves LLM response accuracy using semantic retrieval…', category: 'tech' },
      { id: 389, sim: 0.8621, text: 'Background workers handle async embedding generation and index maintenance automatically…', category: 'tech' },
    ],
  },
  {
    id: 'workers',
    label: 'Background Workers',
    iconName: 'GitBranch',
    heading: '4 production workers',
    description: 'Async job queue, auto-tuning, and index maintenance',
    codeLabel: 'SQL',
    code: `-- Check worker status\nSELECT * FROM neurondb.worker_status();\n\n-- Queue async job\nSELECT neurondb.queue_job(\n  'embed_documents',\n  '{"table": "documents", "model": "all-MiniLM-L6-v2"}'\n);\n\n-- Monitor jobs\nSELECT * FROM neurondb.job_queue\nWHERE status = 'running';`,
    footerHref: '/docs/background-workers',
    footerLabel: 'Workers Docs',
    results: [
      { id: 1, text: 'neuranq: running, processed 1,247 jobs', category: 'queue' },
      { id: 2, text: 'neuranmon: active, tuned 342 queries', category: 'tuner' },
      { id: 3, text: 'neurandefrag: completed, rebuilt 5 indexes', category: 'maintenance' },
      { id: 4, text: 'neuranllm: processing, 12 LLM jobs queued', category: 'llm' },
      { id: 5, text: 'All workers healthy, avg latency 8.2ms', category: 'status' },
    ],
  },
  {
    id: 'gpu',
    label: 'GPU Acceleration',
    iconName: 'Database',
    heading: 'CUDA + ROCm + Metal',
    description: 'GPU-accelerated batch operations',
    codeLabel: 'SQL',
    code: `-- Enable GPU acceleration\nSET neurondb.gpu_enabled = true;\n\n-- Batch distance computation (100x faster)\nSELECT neurondb.batch_distance(\n  ARRAY(SELECT embedding FROM vectors),\n  query_embedding,\n  'cosine'\n);\n\n-- Check GPU status\nSELECT * FROM neurondb.gpu_info();`,
    footerHref: '/docs/gpu',
    footerLabel: 'GPU Docs',
    results: [
      { id: 0, text: 'NVIDIA RTX 4090: 24GB, 78% utilization', category: 'cuda' },
      { id: 1, text: 'Batch distance: 100x speedup vs CPU', category: 'performance' },
      { id: 2, text: 'GPU memory: 18.5GB used / 24GB total', category: 'memory' },
      { id: 3, text: 'Compute capability: 8.9, CUDA 12.0', category: 'info' },
      { id: 4, text: 'Throughput: 2.1M vectors/sec', category: 'throughput' },
    ],
  },
];

const neurondbConfig = {
  productId: 'neurondb' as const,
  hero: {
    subtitle: 'PostgreSQL AI Extension for Vector Search, ML Inference and RAG Pipeline. AI applications in PostgreSQL with GPU acceleration, 52 ML algorithms, and hybrid search.',
  },
  demo: null,
  badges: [
    'PostgreSQL 16 to 18',
    '5 Vector Types',
    '52 ML Algorithms',
    '520+ SQL Functions',
    'GPU Acceleration',
    '4 Background Workers',
  ],
  componentCards: [],
  architecture: {
    title: 'Architecture',
    subtitle: 'Architecture with vector search, ML inference, and RAG pipeline',
    content: null as any, // Will be set in component
  },
  dashboard: null as any, // Will be set in component
  featurePillars: {
    kicker: 'AI Database Features',
    items: [
      { 
        title: 'Vector Search & Indexing', 
        desc: [
          '5 vector types: vector (float32, up to 16K dims), vectorp (Product Quantization), vecmap (sparse vectors), vgraph (graph-based), rtext (retrieval text)',
          'HNSW and IVF indexing with automatic tuning',
          '10+ distance metrics: L2, Cosine, Inner Product, Manhattan, Hamming, Jaccard, and more',
          'Product Quantization (PQ) and Optimized PQ (OPQ) for 2x-32x compression',
          'DiskANN support for billion-scale vectors on SSD'
        ]
      },
      { 
        title: 'ML & Embeddings', 
        desc: [
          '52 ML algorithms in pure C: Random Forest, XGBoost, LightGBM, CatBoost, SVM, KNN, Neural Networks, and more',
          'Built-in embedding generation with intelligent caching',
          'ONNX runtime integration for model inference',
          'Batch processing with GPU acceleration',
          'Model catalog with versioning and A/B testing'
        ]
      },
      { 
        title: 'Hybrid Search & Retrieval', 
        desc: [
          'Combine vector similarity with full-text search (BM25)',
          'Configurable weighted scoring (e.g., 70% vector + 30% text)',
          'Multi-vector document support',
          'Faceted search with category filters',
          'Temporal decay for time-sensitive relevance ranking'
        ]
      },
      { 
        title: 'Reranking', 
        desc: [
          'Cross-encoder neural reranking for precision improvement',
          'LLM-powered scoring (GPT-4, Claude integration)',
          'ColBERT late interaction models',
          'MMR (Maximal Marginal Relevance) for diversity',
          'Ensemble strategies combining multiple rankers',
          'Sub-10ms latency for production workloads'
        ]
      },
      { 
        title: 'RAG Pipeline', 
        desc: [
          'Complete Retrieval Augmented Generation in PostgreSQL',
          'Intelligent document chunking and processing',
          'Semantic retrieval with automatic reranking',
          'LLM integration for answer generation',
          'Context management and guardrails for content safety',
          'RAG operations available directly in SQL'
        ]
      },
      { 
        title: 'Background Workers', 
        desc: [
          'neuranq: Async job queue executor with SKIP LOCKED, retries, and batch processing',
          'neuranmon: Live query auto-tuner for search params and cache optimization',
          'neurandefrag: Automatic index maintenance, compaction, and rebuild scheduling',
          'neuranllm: LLM job processing with crash recovery',
          'All workers are tenant-aware with QPS and cost budgets'
        ]
      },
      { 
        title: 'ML Analytics Suite', 
        desc: [
          '19 clustering algorithms: K-means, DBSCAN, GMM, Hierarchical (all GPU-accelerated)',
          'Dimensionality reduction: PCA, PCA Whitening, OPQ',
          'Outlier detection: Z-score, Modified Z-score, IQR',
          'Quality metrics: Recall@K, Precision@K, F1@K, MRR, Silhouette Score',
          'Drift detection: Centroid drift, Distribution divergence, Temporal monitoring',
          'Analytics: Topic discovery, Similarity histograms, KNN graph building'
        ]
      },
      { 
        title: 'GPU Acceleration', 
        desc: [
          'Multi-platform support: CUDA (NVIDIA), ROCm (AMD), Metal (Apple Silicon)',
          'GPU-accelerated ML algorithms: Random Forest, XGBoost, LightGBM, SVM, KNN, and more',
          'Batch distance computation with 100x speedup',
          'Automatic GPU detection with intelligent CPU fallback',
          'Multi-stream compute overlap for maximum throughput',
          'Efficient memory management and allocation'
        ]
      },
      { 
        title: 'Performance & Optimization', 
        desc: [
          'HNSW index building: 606ms for 50K vectors (128-dim), 10.1x faster than pgvector',
          'SIMD-optimized distance calculations (AVX2, AVX-512, NEON)',
          'In-memory graph building using maintenance_work_mem for optimal index construction',
          'Efficient neighbor finding during insert (not after flush) for faster builds',
          'Squared distance optimization avoiding sqrt() overhead in comparisons',
          'Intelligent query planning with accurate cost estimates',
          'ANN buffer cache for hot centroids and frequent queries',
          'WAL compression with delta encoding',
          'Parallel kNN execution across multiple cores',
          'Predictive prefetching for reduced latency',
          'Sub-millisecond searches on millions of vectors'
        ]
      },
      { 
        title: 'Security', 
        desc: [
          'Vector encryption using AES-GCM via OpenSSL',
          'Differential privacy for embedding protection',
          'Row-level security (RLS) integration',
          'Multi-tenant isolation with resource quotas',
          'HMAC-SHA256 signed results for integrity verification',
          'Audit logging with tamper detection',
          'GDPR-compliant data handling and governance'
        ]
      },
      { 
        title: 'Monitoring & Observability', 
        desc: [
          'pg_stat_neurondb view with real-time performance metrics',
          'Worker heartbeats and watchdog monitoring',
          'Query latency histograms and percentile tracking',
          'Cache hit rate tracking and optimization insights',
          'Recall@K monitoring for search quality',
          'Model cost accounting and usage analytics',
          'Prometheus exporter ready for integration',
          'Structured JSON logging with neurondb: prefix'
        ]
      },
      { 
        title: 'PostgreSQL Native Architecture', 
        desc: [
          'Pure C implementation following 100% PostgreSQL coding standards',
          '520+ SQL functions, types, and operators',
          '7 new monitoring views for comprehensive observability',
          'Shared memory for efficient caching',
          'WAL integration for durability and crash recovery',
          'SPI for safe operations and transaction handling',
          'Background worker framework integration',
          'Standard extension with zero external dependencies',
          'SIMD-optimized (AVX2, AVX-512, NEON) with runtime CPU detection'
        ]
      },
    ],
  },
  featureMatrix: null as any, // Will be set in component
  featureComparison: null as any, // Will be set in component
  ctaSection: {
    kicker: 'Start',
    title: 'Add AI Capabilities to PostgreSQL',
    description: 'Install NeuronDB. Build semantic search, RAG applications, and ML features in your PostgreSQL infrastructure.',
    primaryCTA: { href: '/docs/neurondb/getting-started', label: 'View Documentation' },
    secondaryCTA: { href: 'https://github.com/neurondb-ai/neurondb', label: 'View on GitHub', external: true },
  },
};

export default function NeurondBPage() {
  return (
    <>
      <ProductSchema productId="neurondb" />
      <ProductPageTemplate 
        {...neurondbConfig}
        architecture={{
          ...neurondbConfig.architecture,
          content: <NeuronDBArchitectureDiagram />,
        }}
        dashboard={
          <ProductDashboardDemo 
            productId="neurondb"
            tabs={neurondbDashboardTabs}
            title="NeuronDB Capabilities"
            subtitle="PostgreSQL AI Extension for Vector Search, ML Inference and RAG Pipeline. AI applications in PostgreSQL with GPU acceleration, 52 ML algorithms, and hybrid search."
          />
        }
      />
    </>
  );
}

