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
      { id: 489, sim: 0.9012, text: 'NeuronDB provides 473 SQL functions for vector operations and ML inference…', category: 'tech' },
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
    '473 SQL Functions',
    'GPU Acceleration',
    '4 Background Workers',
  ],
  componentCards: [],
  architecture: {
    title: 'Architecture',
    subtitle: 'Architecture with vector search, ML inference, and RAG pipeline',
    content: <NeuronDBArchitectureDiagram />,
  },
  dashboard: (
    <ProductDashboardDemo 
      productId="neurondb"
      tabs={neurondbDashboardTabs}
      title="NeuronDB Features"
      subtitle="Explore vector search, ML inference, RAG, and more"
    />
  ),
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
          'SIMD-optimized distance calculations (AVX2, AVX-512, NEON)',
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
          '473 SQL functions, types, and operators',
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
  featureMatrix: {
    title: 'Capabilities',
    subtitle: 'AI database features',
    content: (
    <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
      <thead className="bg-slate-800/60">
        <tr className="text-left">
          <th className="px-4 py-3 font-semibold text-white">Capability</th>
          <th className="px-4 py-3 font-semibold text-white">Description</th>
          <th className="px-4 py-3 font-semibold text-white">Performance</th>
          <th className="px-4 py-3 font-semibold text-white">Production Ready</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-700 bg-slate-800/40">
        <tr>
            <td className="px-4 py-3 font-medium">
              <Link href="/docs/neurondb/vector-engine" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                Vector Search
              </Link>
            </td>
          <td className="px-4 py-3 text-slate-300">HNSW indexing, multiple distance metrics, quantization</td>
          <td className="px-4 py-3 text-slate-300">Sub-millisecond on millions</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
            <td className="px-4 py-3 font-medium">
              <Link href="/docs/neurondb/ml/inference" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                ML Inference
              </Link>
            </td>
          <td className="px-4 py-3 text-slate-300">ONNX runtime, batch processing, embedding generation</td>
          <td className="px-4 py-3 text-slate-300">High-throughput batch ops</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
            <td className="px-4 py-3 font-medium">
              <Link href="/docs/neurondb/hybrid" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                Hybrid Search
              </Link>
            </td>
          <td className="px-4 py-3 text-slate-300">Vector + FTS, multi-vector, faceted, temporal</td>
          <td className="px-4 py-3 text-slate-300">Optimized query planning</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
            <td className="px-4 py-3 font-medium">
              <Link href="/docs/neurondb/hybrid/overview" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                Reranking
              </Link>
            </td>
          <td className="px-4 py-3 text-slate-300">Cross-encoder, LLM, ColBERT, ensemble</td>
          <td className="px-4 py-3 text-slate-300">GPU-accelerated support</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
            <td className="px-4 py-3 font-medium">
              <Link href="/docs/neurondb/background-workers" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                Background Workers
              </Link>
            </td>
          <td className="px-4 py-3 text-slate-300">Queue executor, auto-tuner, index maintenance</td>
          <td className="px-4 py-3 text-slate-300">Non-blocking async ops</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
            <td className="px-4 py-3 font-medium">
              <Link href="/docs/neurondb/background-workers/neurandefrag" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                RAG Pipeline
              </Link>
            </td>
          <td className="px-4 py-3 text-slate-300">Complete in-database RAG with document processing</td>
          <td className="px-4 py-3 text-slate-300">End-to-end optimization</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
          <tr>
            <td className="px-4 py-3 font-medium">
              <Link href="/docs/neurondb/analytics" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                ML Analytics
              </Link>
            </td>
            <td className="px-4 py-3 text-slate-300">Clustering (K-means, DBSCAN, GMM), PCA, outlier detection, quality metrics, drift detection</td>
            <td className="px-4 py-3 text-slate-300">GPU-accelerated algorithms</td>
            <td className="px-4 py-3 text-green-400">✓</td>
          </tr>
          <tr className="bg-slate-800/60">
            <td className="px-4 py-3 font-medium">
              <Link href="/docs/neurondb/gpu" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                GPU Acceleration
              </Link>
            </td>
            <td className="px-4 py-3 text-slate-300">CUDA (NVIDIA), ROCm (AMD), Metal (Apple), 100x speedup on batch ops</td>
            <td className="px-4 py-3 text-slate-300">Auto-detection with CPU fallback</td>
            <td className="px-4 py-3 text-green-400">✓</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">
              <Link href="/docs/neurondb/performance" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                Performance Optimization
              </Link>
            </td>
            <td className="px-4 py-3 text-slate-300">SIMD (AVX2/AVX-512/NEON), intelligent query planning, ANN cache, WAL compression</td>
            <td className="px-4 py-3 text-slate-300">Predictive prefetching</td>
            <td className="px-4 py-3 text-green-400">✓</td>
          </tr>
          <tr className="bg-slate-800/60">
            <td className="px-4 py-3 font-medium">
              <Link href="/docs/neurondb/security" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                Security
              </Link>
            </td>
            <td className="px-4 py-3 text-slate-300">Vector encryption (AES-GCM), differential privacy, RLS integration, multi-tenant isolation</td>
            <td className="px-4 py-3 text-slate-300">GDPR-compliant</td>
            <td className="px-4 py-3 text-green-400">✓</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">
              <Link href="/docs/neurondb/performance/monitoring" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                Monitoring & Observability
              </Link>
            </td>
            <td className="px-4 py-3 text-slate-300">pg_stat_neurondb view, worker heartbeats, latency histograms, Prometheus exporter</td>
            <td className="px-4 py-3 text-slate-300">Real-time metrics</td>
            <td className="px-4 py-3 text-green-400">✓</td>
          </tr>
          <tr className="bg-slate-800/60">
            <td className="px-4 py-3 font-medium">
              <Link href="/docs/neurondb/getting-started" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                PostgreSQL Native
              </Link>
            </td>
            <td className="px-4 py-3 text-slate-300">Pure C implementation, 473 SQL functions, zero external dependencies, WAL integration</td>
            <td className="px-4 py-3 text-slate-300">Zero core modifications</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
      </tbody>
    </table>
  ),
  },
  featureComparison: {
    title: 'NeurondB vs. Alternatives',
    subtitle: 'Comparison of NeurondB with other PostgreSQL AI and vector extensions',
    content: (
    <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
      <thead className="bg-slate-800/60">
        <tr className="text-left">
          <th className="px-3 py-3 font-semibold text-white text-xs">Feature</th>
          <th className="px-3 py-3 font-semibold text-white text-xs">NeurondB</th>
          <th className="px-3 py-3 font-semibold text-white text-xs">pgvector</th>
          <th className="px-3 py-3 font-semibold text-white text-xs">pgvectorscale</th>
          <th className="px-3 py-3 font-semibold text-white text-xs">pgai</th>
          <th className="px-3 py-3 font-semibold text-white text-xs">PostgresML</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-700 bg-slate-800/40">
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Vector Indexing</td>
          <td className="px-3 py-3 text-green-400 text-xs">HNSW + IVF</td>
          <td className="px-3 py-3 text-green-400 text-xs">HNSW + IVF</td>
          <td className="px-3 py-3 text-green-400 text-xs">StreamingDiskANN</td>
          <td className="px-3 py-3 text-red-300 text-xs">Uses pgvector</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">pgvector-based</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">ML Inference</td>
          <td className="px-3 py-3 text-green-400 text-xs">ONNX (C++)</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-green-400 text-xs">API calls</td>
          <td className="px-3 py-3 text-green-400 text-xs">Python ML libs</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Embedding Generation</td>
          <td className="px-3 py-3 text-green-400 text-xs">In-database (ONNX)</td>
          <td className="px-3 py-3 text-red-300 text-xs">External</td>
          <td className="px-3 py-3 text-red-300 text-xs">External</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">External API</td>
          <td className="px-3 py-3 text-green-400 text-xs">In-database (Transformers)</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Hybrid Search</td>
          <td className="px-3 py-3 text-green-400 text-xs">Native (Vector+FTS)</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Manual</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Manual</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Manual</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Manual</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Reranking</td>
          <td className="px-3 py-3 text-green-400 text-xs">Cross-encoder, LLM, ColBERT, MMR</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">ML Algorithms</td>
          <td className="px-3 py-3 text-green-400 text-xs">52 algorithms: RF, XGBoost, LightGBM, CatBoost, SVM, KNN, DT, NB, NN, K-means, DBSCAN, GMM, PCA, etc.</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-green-400 text-xs">XGBoost, LightGBM, sklearn suite, Linear/Logistic</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Background Workers</td>
          <td className="px-3 py-3 text-green-400 text-xs">4 workers: neuranq, neuranmon, neurandefrag, neuranllm</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">RAG Pipeline</td>
          <td className="px-3 py-3 text-green-400 text-xs">Complete In-DB</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Partial (API)</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Partial (Python)</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Quantization</td>
          <td className="px-3 py-3 text-green-400 text-xs">FP16, INT8, Binary (2x-32x)</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Binary only</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Binary only</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Implementation</td>
          <td className="px-3 py-3 text-green-400 text-xs">Pure C</td>
          <td className="px-3 py-3 text-green-400 text-xs">Pure C</td>
          <td className="px-3 py-3 text-green-400 text-xs">Pure C</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Rust + SQL</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Python + C</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Training Models</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Fine-tuning (roadmap)</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-green-400 text-xs">Full training (sklearn, XGBoost, etc.)</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Auto-Tuning</td>
          <td className="px-3 py-3 text-green-400 text-xs">neuranmon worker</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">GPU Support</td>
          <td className="px-3 py-3 text-green-400 text-xs">CUDA + ROCm + Metal (native C/C++)</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-green-400 text-xs">CUDA (via Python)</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">PostgreSQL Versions</td>
          <td className="px-3 py-3 text-white/70 text-xs">16, 17, 18</td>
          <td className="px-3 py-3 text-white/70 text-xs">12-18</td>
          <td className="px-3 py-3 text-white/70 text-xs">15-18</td>
          <td className="px-3 py-3 text-white/70 text-xs">16-18</td>
          <td className="px-3 py-3 text-white/70 text-xs">14-16</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">License</td>
          <td className="px-3 py-3 text-white/70 text-xs">PostgreSQL</td>
          <td className="px-3 py-3 text-white/70 text-xs">PostgreSQL</td>
          <td className="px-3 py-3 text-white/70 text-xs">Timescale License</td>
          <td className="px-3 py-3 text-white/70 text-xs">PostgreSQL</td>
          <td className="px-3 py-3 text-white/70 text-xs">PostgreSQL</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Vector Types</td>
          <td className="px-3 py-3 text-green-400 text-xs">5 types: vector, vectorp, vecmap, vgraph, rtext</td>
          <td className="px-3 py-3 text-green-400 text-xs">1 type: vector</td>
          <td className="px-3 py-3 text-green-400 text-xs">1 type: vector</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Uses pgvector</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Uses pgvector</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Distance Metrics</td>
          <td className="px-3 py-3 text-green-400 text-xs">10+ metrics: L2, Cosine, Inner Product, Manhattan, Hamming, Jaccard, etc.</td>
          <td className="px-3 py-3 text-green-400 text-xs">3 metrics: L2, Cosine, Inner Product</td>
          <td className="px-3 py-3 text-green-400 text-xs">3 metrics: L2, Cosine, Inner Product</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Uses pgvector</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Uses pgvector</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">SQL Functions</td>
          <td className="px-3 py-3 text-green-400 text-xs">473 functions</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">~20 functions</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">~30 functions</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">~15 functions</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">~50 functions</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Index Maintenance</td>
          <td className="px-3 py-3 text-green-400 text-xs">Auto (neurandefrag worker)</td>
          <td className="px-3 py-3 text-red-300 text-xs">Manual</td>
          <td className="px-3 py-3 text-red-300 text-xs">Manual</td>
          <td className="px-3 py-3 text-red-300 text-xs">Manual</td>
          <td className="px-3 py-3 text-red-300 text-xs">Manual</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Performance (QPS)</td>
          <td className="px-3 py-3 text-green-400 text-xs">100K+ (with GPU)</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">10K-50K</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">50K-100K</td>
          <td className="px-3 py-3 text-red-300 text-xs">Limited (API overhead)</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">5K-20K (Python overhead)</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Memory Efficiency</td>
          <td className="px-3 py-3 text-green-400 text-xs">Optimized (PQ/OPQ compression)</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Standard</td>
          <td className="px-3 py-3 text-green-400 text-xs">Disk-based (low memory)</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Standard</td>
          <td className="px-3 py-3 text-red-300 text-xs">High (Python models)</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Multi-tenancy</td>
          <td className="px-3 py-3 text-green-400 text-xs">Native (tenant-aware workers)</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Security</td>
          <td className="px-3 py-3 text-green-400 text-xs">Row-level security, encryption, audit logs</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">PostgreSQL RLS</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">PostgreSQL RLS</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">PostgreSQL RLS</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">PostgreSQL RLS</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Monitoring</td>
          <td className="px-3 py-3 text-green-400 text-xs">pg_stat_neurondb, Prometheus, Grafana</td>
          <td className="px-3 py-3 text-red-300 text-xs">Basic</td>
          <td className="px-3 py-3 text-red-300 text-xs">Basic</td>
          <td className="px-3 py-3 text-red-300 text-xs">Basic</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Limited</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Documentation</td>
          <td className="px-3 py-3 text-green-400 text-xs">473 functions documented</td>
          <td className="px-3 py-3 text-green-400 text-xs">Good</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Moderate</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Moderate</td>
          <td className="px-3 py-3 text-green-400 text-xs">Good</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Community Support</td>
          <td className="px-3 py-3 text-green-400 text-xs">Active (NeuronDB)</td>
          <td className="px-3 py-3 text-green-400 text-xs">Very Active (Anthropic)</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Moderate (Timescale)</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Growing</td>
          <td className="px-3 py-3 text-green-400 text-xs">Active</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Readiness</td>
          <td className="px-3 py-3 text-green-400 text-xs">Ready</td>
          <td className="px-3 py-3 text-green-400 text-xs">Ready</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Beta</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Early stage</td>
          <td className="px-3 py-3 text-green-400 text-xs">Ready</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Dependencies</td>
          <td className="px-3 py-3 text-green-400 text-xs">Zero (pure C, optional ONNX)</td>
          <td className="px-3 py-3 text-green-400 text-xs">Zero (pure C)</td>
          <td className="px-3 py-3 text-green-400 text-xs">Zero (pure C)</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Rust runtime</td>
          <td className="px-3 py-3 text-red-300 text-xs">Python + ML libraries</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Batch Processing</td>
          <td className="px-3 py-3 text-green-400 text-xs">Native (neuranq worker)</td>
          <td className="px-3 py-3 text-red-300 text-xs">Manual</td>
          <td className="px-3 py-3 text-red-300 text-xs">Manual</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Limited</td>
          <td className="px-3 py-3 text-green-400 text-xs">Native (Python)</td>
        </tr>
        <tr>
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Model Catalog</td>
          <td className="px-3 py-3 text-green-400 text-xs">Built-in (versioning, A/B testing)</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-red-300 text-xs">None</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Basic</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-3 py-3 font-medium text-cyan-300 text-xs">Cost Efficiency</td>
          <td className="px-3 py-3 text-green-400 text-xs">High (in-DB, no API costs)</td>
          <td className="px-3 py-3 text-green-400 text-xs">High (in-DB)</td>
          <td className="px-3 py-3 text-green-400 text-xs">High (disk-based)</td>
          <td className="px-3 py-3 text-red-300 text-xs">Low (API costs)</td>
          <td className="px-3 py-3 text-yellow-300 text-xs">Moderate (Python overhead)</td>
        </tr>
      </tbody>
    </table>
  ),
  },
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
      <ProductPageTemplate {...neurondbConfig} />
    </>
  );
}

