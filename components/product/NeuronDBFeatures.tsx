'use client'

import React from 'react'
import { CardGrid } from '@/components/ui/cards'
import { 
  Search, 
  Cpu, 
  Layers, 
  Zap, 
  FileText, 
  GitBranch, 
  BarChart3, 
  Database, 
  Gauge, 
  Shield, 
  Activity,
  Server
} from 'lucide-react'

interface Feature {
  title: string
  desc: string[]
  icon: React.ElementType
  svg: React.ReactNode
}

const features: Feature[] = [
  {
    title: 'Vector Search & Indexing',
    desc: [
      '5 vector types: vector (float32, up to 16K dims), vectorp (Product Quantization), vecmap (sparse vectors), vgraph (graph-based), rtext (retrieval text)',
      'HNSW and IVF indexing with automatic tuning',
      '10+ distance metrics: L2, Cosine, Inner Product, Manhattan, Hamming, Jaccard, and more',
      'Product Quantization (PQ) and Optimized PQ (OPQ) for 2x-32x compression',
      'DiskANN support for billion-scale vectors on SSD'
    ],
    icon: Search,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="vectorSearchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Vector nodes */}
        <circle cx="50" cy="30" r="12" fill="url(#vectorSearchGradient)" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="100" cy="25" r="12" fill="url(#vectorSearchGradient)" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="150" cy="30" r="12" fill="url(#vectorSearchGradient)" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="70" cy="65" r="12" fill="url(#vectorSearchGradient)" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="130" cy="65" r="12" fill="url(#vectorSearchGradient)" stroke="#64748b" strokeWidth="1.5" />
        
        {/* Index structure */}
        <rect x="60" y="85" width="80" height="24" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="98" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">HNSW Index</text>
        <text x="100" y="108" textAnchor="middle" fill="#64748b" fontSize="6">10+ Metrics</text>
        
        {/* Connections */}
        <line x1="50" y1="42" x2="70" y2="65" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="37" x2="100" y2="65" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="150" y1="42" x2="130" y2="65" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="70" y1="77" x2="85" y2="85" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="130" y1="77" x2="115" y2="85" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
  {
    title: 'ML & Embeddings',
    desc: [
      '52 ML algorithms in pure C: Random Forest, XGBoost, LightGBM, CatBoost, SVM, KNN, Neural Networks, and more',
      'Built-in embedding generation with intelligent caching',
      'ONNX runtime integration for model inference',
      'Batch processing with GPU acceleration',
      'Model catalog with versioning and A/B testing'
    ],
    icon: Cpu,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="mlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* ML models */}
        <rect x="15" y="20" width="45" height="28" rx="4" fill="url(#mlGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="37.5" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">RF</text>
        
        <rect x="70" y="20" width="45" height="28" rx="4" fill="url(#mlGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="92.5" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">XGB</text>
        
        <rect x="125" y="20" width="45" height="28" rx="4" fill="url(#mlGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="147.5" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">SVM</text>
        
        {/* Embeddings */}
        <rect x="50" y="65" width="100" height="32" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="82" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Embeddings</text>
        <text x="100" y="92" textAnchor="middle" fill="#64748b" fontSize="7">52 Algorithms</text>
        
        {/* Arrows */}
        <path d="M 37.5 48 L 75 65" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadML)" />
        <path d="M 92.5 48 L 100 65" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadML)" />
        <path d="M 147.5 48 L 125 65" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadML)" />
        
        <defs>
          <marker id="arrowheadML" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    )
  },
  {
    title: 'Hybrid Search & Retrieval',
    desc: [
      'Combine vector similarity with full-text search (BM25)',
      'Configurable weighted scoring (e.g., 70% vector + 30% text)',
      'Multi-vector document support',
      'Faceted search with category filters',
      'Temporal decay for time-sensitive relevance ranking'
    ],
    icon: Layers,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="hybridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Vector search */}
        <circle cx="60" cy="35" r="14" fill="url(#hybridGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="60" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Vector</text>
        
        {/* Text search */}
        <circle cx="140" cy="35" r="14" fill="url(#hybridGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="140" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Text</text>
        
        {/* Hybrid result */}
        <rect x="70" y="68" width="60" height="32" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="85" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Hybrid</text>
        <text x="100" y="95" textAnchor="middle" fill="#64748b" fontSize="7">70% + 30%</text>
        
        {/* Arrows */}
        <path d="M 70 49 L 85 68" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadHybrid)" />
        <path d="M 130 49 L 115 68" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadHybrid)" />
        
        <defs>
          <marker id="arrowheadHybrid" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    )
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
    ],
    icon: Zap,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="rerankGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Results before */}
        <rect x="20" y="20" width="70" height="36" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="55" y="38" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">Results</text>
        <text x="55" y="50" textAnchor="middle" fill="#64748b" fontSize="7">Before</text>
        
        {/* Reranker */}
        <rect x="95" y="50" width="40" height="24" rx="4" fill="url(#rerankGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="115" y="65" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Rerank</text>
        
        {/* Results after */}
        <rect x="150" y="20" width="40" height="36" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="170" y="38" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">Top K</text>
        <text x="170" y="50" textAnchor="middle" fill="#64748b" fontSize="7">After</text>
        
        {/* Arrows */}
        <path d="M 90 38 L 105 62" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadRerank)" />
        <path d="M 135 62 L 150 38" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadRerank)" />
        
        {/* Latency */}
        <text x="100" y="90" textAnchor="middle" fill="#94a3b8" fontSize="7">&lt;10ms latency</text>
        
        <defs>
          <marker id="arrowheadRerank" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    )
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
    ],
    icon: FileText,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="ragGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Documents */}
        <rect x="15" y="20" width="40" height="32" rx="4" fill="url(#ragGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="35" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Docs</text>
        
        {/* Retrieval */}
        <rect x="70" y="20" width="45" height="32" rx="4" fill="url(#ragGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="92.5" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Retrieve</text>
        
        {/* Generation */}
        <rect x="130" y="20" width="45" height="32" rx="4" fill="url(#ragGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="152.5" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Generate</text>
        
        {/* SQL layer */}
        <rect x="55" y="68" width="90" height="32" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="85" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">SQL API</text>
        <text x="100" y="95" textAnchor="middle" fill="#64748b" fontSize="7">In PostgreSQL</text>
        
        {/* Arrows */}
        <path d="M 55 36 L 75 68" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadRAG)" />
        <path d="M 92.5 52 L 100 68" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadRAG)" />
        <path d="M 152.5 36 L 125 68" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadRAG)" />
        
        <defs>
          <marker id="arrowheadRAG" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    )
  },
  {
    title: 'Background Workers',
    desc: [
      'neuranq: Async job queue executor with SKIP LOCKED, retries, and batch processing',
      'neuranmon: Live query auto-tuner for search params and cache optimization',
      'neurandefrag: Automatic index maintenance, compaction, and rebuild scheduling',
      'neuranllm: LLM job processing with crash recovery',
      'All workers are tenant-aware with QPS and cost budgets'
    ],
    icon: GitBranch,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="workerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Workers */}
        <circle cx="50" cy="35" r="12" fill="url(#workerGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="50" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="7" fontWeight="600">Q</text>
        
        <circle cx="100" cy="30" r="12" fill="url(#workerGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="35" textAnchor="middle" fill="#e2e8f0" fontSize="7" fontWeight="600">M</text>
        
        <circle cx="150" cy="35" r="12" fill="url(#workerGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="150" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="7" fontWeight="600">D</text>
        
        <circle cx="125" cy="65" r="12" fill="url(#workerGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="125" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="7" fontWeight="600">L</text>
        
        {/* Queue */}
        <rect x="60" y="88" width="80" height="22" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="101" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">4 Workers</text>
        
        {/* Connections */}
        <line x1="50" y1="47" x2="75" y2="88" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="42" x2="100" y2="88" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="150" y1="47" x2="125" y2="88" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="125" y1="77" x2="115" y2="88" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
      </svg>
    )
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
    ],
    icon: BarChart3,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="analyticsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Chart bars */}
        <rect x="30" y="68" width="18" height="28" rx="2" fill="url(#analyticsGradient)" />
        <rect x="58" y="50" width="18" height="46" rx="2" fill="url(#analyticsGradient)" />
        <rect x="86" y="40" width="18" height="56" rx="2" fill="url(#analyticsGradient)" />
        <rect x="114" y="55" width="18" height="41" rx="2" fill="url(#analyticsGradient)" />
        <rect x="142" y="60" width="18" height="36" rx="2" fill="url(#analyticsGradient)" />
        
        {/* Labels */}
        <text x="39" y="105" textAnchor="middle" fill="#94a3b8" fontSize="7">Cluster</text>
        <text x="67" y="105" textAnchor="middle" fill="#94a3b8" fontSize="7">PCA</text>
        <text x="95" y="105" textAnchor="middle" fill="#94a3b8" fontSize="7">Quality</text>
        <text x="123" y="105" textAnchor="middle" fill="#94a3b8" fontSize="7">Drift</text>
        <text x="151" y="105" textAnchor="middle" fill="#94a3b8" fontSize="7">Topics</text>
        
        {/* Title */}
        <text x="100" y="25" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600">Analytics</text>
      </svg>
    )
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
    ],
    icon: Database,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="gpuGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* GPU platforms */}
        <rect x="20" y="18" width="48" height="28" rx="4" fill="url(#gpuGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="44" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="7" fontWeight="600">CUDA</text>
        
        <rect x="76" y="18" width="48" height="28" rx="4" fill="url(#gpuGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="7" fontWeight="600">ROCm</text>
        
        <rect x="132" y="18" width="48" height="28" rx="4" fill="url(#gpuGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="156" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="7" fontWeight="600">Metal</text>
        
        {/* GPU core */}
        <rect x="60" y="62" width="80" height="32" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="79" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">GPU</text>
        <text x="100" y="89" textAnchor="middle" fill="#64748b" fontSize="7">100x Speedup</text>
        
        {/* Connections */}
        <line x1="44" y1="46" x2="80" y2="62" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="46" x2="100" y2="62" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="156" y1="46" x2="120" y2="62" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
      </svg>
    )
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
    ],
    icon: Gauge,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="perfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Performance indicators */}
        <rect x="25" y="25" width="42" height="32" rx="4" fill="url(#perfGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="46" y="42" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">SIMD</text>
        
        <rect x="76" y="25" width="48" height="32" rx="4" fill="url(#perfGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="42" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Cache</text>
        
        <rect x="133" y="25" width="42" height="32" rx="4" fill="url(#perfGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="154" y="42" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">WAL</text>
        
        {/* Speed indicator */}
        <rect x="55" y="72" width="90" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="88" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">10.1x Faster</text>
        <text x="100" y="98" textAnchor="middle" fill="#64748b" fontSize="6">&lt;1ms Search</text>
      </svg>
    )
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
    ],
    icon: Shield,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Shield */}
        <path d="M 100 25 L 120 35 L 120 55 Q 120 75 100 85 Q 80 75 80 55 L 80 35 Z" fill="url(#securityGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="60" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="600">🔒</text>
        
        {/* Security layers */}
        <rect x="45" y="92" width="48" height="18" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="69" y="103" textAnchor="middle" fill="#94a3b8" fontSize="7">Encryption</text>
        
        <rect x="107" y="92" width="48" height="18" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="131" y="103" textAnchor="middle" fill="#94a3b8" fontSize="7">RLS</text>
      </svg>
    )
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
    ],
    icon: Activity,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="monitorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Metrics graph */}
        <polyline points="30,75 50,65 70,70 90,55 110,60 130,50 150,58 170,52" fill="none" stroke="url(#monitorGradient)" strokeWidth="2" />
        
        {/* Stats boxes */}
        <rect x="20" y="85" width="45" height="22" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="42.5" y="97" textAnchor="middle" fill="#94a3b8" fontSize="7">Metrics</text>
        
        <rect x="75" y="85" width="50" height="22" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="97" textAnchor="middle" fill="#94a3b8" fontSize="7">Logging</text>
        
        <rect x="135" y="85" width="45" height="22" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="157.5" y="97" textAnchor="middle" fill="#94a3b8" fontSize="7">Prometheus</text>
        
        {/* Title */}
        <text x="100" y="25" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600">Observability</text>
      </svg>
    )
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
    ],
    icon: Server,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="pgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* PostgreSQL stack */}
        <ellipse cx="100" cy="25" rx="60" ry="8" fill="url(#pgGradient)" stroke="#64748b" strokeWidth="1.5" />
        <rect x="50" y="25" width="100" height="28" rx="2" fill="url(#pgGradient)" stroke="#64748b" strokeWidth="1.5" />
        <ellipse cx="100" cy="53" rx="60" ry="8" fill="url(#pgGradient)" stroke="#64748b" strokeWidth="1.5" />
        <rect x="50" y="53" width="100" height="28" rx="2" fill="url(#pgGradient)" stroke="#64748b" strokeWidth="1.5" />
        <ellipse cx="100" cy="81" rx="60" ry="8" fill="url(#pgGradient)" stroke="#64748b" strokeWidth="1.5" />
        
        {/* Labels */}
        <text x="100" y="42" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">PostgreSQL</text>
        <text x="100" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">NeuronDB</text>
        <text x="100" y="103" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">520+ Functions</text>
      </svg>
    )
  },
]

export default function NeuronDBFeatures() {
  return (
    <div className="w-full">
      <CardGrid columns={3} gap="md">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="group bg-slate-800/60 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              {/* Icon and SVG */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900/60 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                </div>
              </div>
              
              {/* SVG Illustration */}
              <div className="mb-4 rounded-lg bg-slate-950/50 p-4 border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors">
                {feature.svg}
              </div>
              
              {/* Description */}
              <ul className="space-y-2 text-slate-300">
                {feature.desc.map((item, idx) => (
                  <li key={idx} className="flex items-start leading-relaxed text-sm">
                    <span className="text-cyan-400 mr-2 mt-1.5 flex-shrink-0 font-bold">•</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </CardGrid>
    </div>
  )
}
