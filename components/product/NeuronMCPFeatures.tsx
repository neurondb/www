'use client'

import React from 'react'
import { CardGrid } from '@/components/ui/cards'
import { 
  Server, 
  Wrench, 
  Search, 
  Cpu, 
  FileText, 
  BarChart3, 
  Database, 
  Shield, 
  Download,
  Layers
} from 'lucide-react'

interface Feature {
  title: string
  desc: string[]
  icon: React.ElementType
  svg: React.ReactNode
}

const features: Feature[] = [
  {
    title: 'MCP Protocol Implementation',
    desc: [
      'Full JSON-RPC 2.0 implementation with stdio, HTTP, and SSE transport',
      'Supports tools, resources, prompts protocol, sampling/completions, and progress tracking',
      'Batch operations with transactional tool calls',
      'Protocol version negotiation and capability discovery',
      'Compatible with all MCP-compatible clients including Claude Desktop'
    ],
    icon: Server,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="mcpProtocolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Client */}
        <rect x="20" y="18" width="50" height="38" rx="4" fill="url(#mcpProtocolGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="45" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">Client</text>
        
        {/* Server */}
        <rect x="130" y="18" width="50" height="38" rx="4" fill="url(#mcpProtocolGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="155" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">Server</text>
        
        {/* Protocol layer */}
        <rect x="45" y="70" width="110" height="28" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="87" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">JSON-RPC 2.0</text>
        <text x="100" y="97" textAnchor="middle" fill="#64748b" fontSize="6">stdio | HTTP | SSE</text>
        
        {/* Connections */}
        <line x1="45" y1="37" x2="85" y2="70" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="155" y1="37" x2="115" y2="70" stroke="#94a3b8" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: 'Vector Operations Tools',
    desc: [
      'Vector search with multiple metrics: L2, Cosine, Inner Product, Manhattan, Hamming, Jaccard',
      'Similarity computation and embedding generation (text, image, multimodal)',
      'Index creation: HNSW and IVF indexing',
      'Batch embedding generation with intelligent caching',
      'Hybrid search with reciprocal rank fusion',
      'Multi-vector, faceted, temporal, and diverse search capabilities'
    ],
    icon: Search,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="vectorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Vector nodes */}
        <circle cx="50" cy="30" r="12" fill="url(#vectorGradient)" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="100" cy="25" r="12" fill="url(#vectorGradient)" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="150" cy="30" r="12" fill="url(#vectorGradient)" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="70" cy="65" r="12" fill="url(#vectorGradient)" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="130" cy="65" r="12" fill="url(#vectorGradient)" stroke="#64748b" strokeWidth="1.5" />
        
        {/* Connections */}
        <line x1="50" y1="30" x2="100" y2="25" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="25" x2="150" y2="30" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="50" y1="42" x2="70" y2="65" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="150" y1="42" x2="130" y2="65" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        
        {/* Search query */}
        <circle cx="100" cy="95" r="10" fill="#475569" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="100" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Q</text>
        <line x1="100" y1="85" x2="100" y2="77" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2,2" />
      </svg>
    )
  },
  {
    title: 'ML Operations Tools',
    desc: [
      'Complete ML pipeline: training, prediction, evaluation, and AutoML for all 52 algorithms',
      'Model catalog management with versioning and A/B testing',
      'Hyperparameter tuning support',
      'ONNX model import, export, and inference',
      'Model deployment workflows and monitoring'
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
        {/* Training */}
        <rect x="15" y="20" width="45" height="28" rx="4" fill="url(#mlGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="37.5" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Train</text>
        
        {/* Prediction */}
        <rect x="75" y="20" width="50" height="28" rx="4" fill="url(#mlGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Predict</text>
        
        {/* Evaluation */}
        <rect x="140" y="20" width="45" height="28" rx="4" fill="url(#mlGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="162.5" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Eval</text>
        
        {/* Model */}
        <rect x="70" y="65" width="60" height="32" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="83" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Model</text>
        <text x="100" y="93" textAnchor="middle" fill="#64748b" fontSize="6">52 Algorithms</text>
        
        {/* Arrows */}
        <path d="M 37.5 48 L 85 65" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadML)" />
        <path d="M 100 48 L 100 65" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadML)" />
        <path d="M 162.5 48 L 115 65" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadML)" />
        
        <defs>
          <marker id="arrowheadML" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    )
  },
  {
    title: 'Reranking & RAG Operations',
    desc: [
      'Multiple reranking strategies: cross-encoder, LLM-powered, Cohere, ColBERT, LTR, ensemble',
      'Complete RAG pipeline with document processing and chunking',
      'Context retrieval and response generation',
      'LLM integration for answer generation with customizable prompt templates'
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
        
        {/* Rerank */}
        <rect x="130" y="20" width="45" height="32" rx="4" fill="url(#ragGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="152.5" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Rerank</text>
        
        {/* Generation */}
        <rect x="80" y="70" width="50" height="32" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="105" y="88" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Generate</text>
        <text x="105" y="98" textAnchor="middle" fill="#64748b" fontSize="6">LLM Response</text>
        
        {/* Arrows */}
        <path d="M 55 36 L 70 36" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadRAG)" />
        <path d="M 115 36 L 130 36" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadRAG)" />
        <path d="M 152.5 52 L 120 70" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadRAG)" />
        <path d="M 92.5 52 L 95 70" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadRAG)" />
        
        <defs>
          <marker id="arrowheadRAG" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    )
  },
  {
    title: 'Analytics & Time Series',
    desc: [
      'Data analysis: clustering (K-Means, DBSCAN, GMM), dimensionality reduction (PCA)',
      'Quality metrics: Recall@K, Precision@K, F1@K, MRR',
      'Outlier detection: Z-score, Modified Z-score, IQR',
      'Drift detection and topic discovery',
      'Time series analysis: ARIMA, forecasting, and seasonal decomposition'
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
        <rect x="30" y="65" width="18" height="28" rx="2" fill="url(#analyticsGradient)" />
        <rect x="58" y="50" width="18" height="43" rx="2" fill="url(#analyticsGradient)" />
        <rect x="86" y="40" width="18" height="53" rx="2" fill="url(#analyticsGradient)" />
        <rect x="114" y="55" width="18" height="38" rx="2" fill="url(#analyticsGradient)" />
        <rect x="142" y="45" width="18" height="48" rx="2" fill="url(#analyticsGradient)" />
        
        {/* Labels */}
        <text x="39" y="102" textAnchor="middle" fill="#94a3b8" fontSize="7">Metrics</text>
        <text x="67" y="102" textAnchor="middle" fill="#94a3b8" fontSize="7">Quality</text>
        <text x="95" y="102" textAnchor="middle" fill="#94a3b8" fontSize="7">Analysis</text>
        <text x="123" y="102" textAnchor="middle" fill="#94a3b8" fontSize="7">Time Series</text>
        <text x="151" y="102" textAnchor="middle" fill="#94a3b8" fontSize="7">Forecast</text>
        
        {/* Title */}
        <text x="100" y="25" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600">Analytics</text>
      </svg>
    )
  },
  {
    title: 'Resource Management',
    desc: [
      'Comprehensive resources: schema, model catalog, index configs, worker status, system stats',
      'Real-time resource subscriptions for live updates',
      'Resource discovery and metadata access',
      'Search and filtering capabilities for resources'
    ],
    icon: Database,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="resourceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Resource boxes */}
        <rect x="15" y="18" width="48" height="32" rx="4" fill="url(#resourceGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="39" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Schema</text>
        
        <rect x="73" y="18" width="48" height="32" rx="4" fill="url(#resourceGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="97" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Models</text>
        
        <rect x="131" y="18" width="48" height="32" rx="4" fill="url(#resourceGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="155" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Indexes</text>
        
        {/* Resource center */}
        <rect x="50" y="68" width="100" height="32" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="86" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Resources</text>
        <text x="100" y="96" textAnchor="middle" fill="#64748b" fontSize="7">Real-time Subscriptions</text>
        
        {/* Connections */}
        <line x1="39" y1="50" x2="75" y2="68" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="97" y1="50" x2="100" y2="68" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="155" y1="50" x2="125" y2="68" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
  {
    title: 'Middleware & Enterprise',
    desc: [
      'Pluggable middleware: validation, logging, timeout, error handling',
      'Authentication: JWT, API keys, OAuth2 with rate limiting',
      'Caching layer with TTL and connection pooling',
      'Enterprise features: Prometheus metrics, webhooks, retry/resilience (circuit breaker)',
      'Health checks for database, tools, and resources'
    ],
    icon: Shield,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="middlewareGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Middleware layers */}
        <rect x="20" y="18" width="48" height="28" rx="4" fill="url(#middlewareGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="44" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Auth</text>
        
        <rect x="76" y="18" width="48" height="28" rx="4" fill="url(#middlewareGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Validate</text>
        
        <rect x="132" y="18" width="48" height="28" rx="4" fill="url(#middlewareGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="156" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Log</text>
        
        {/* Enterprise layer */}
        <rect x="50" y="60" width="100" height="40" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="78" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Enterprise</text>
        <text x="100" y="90" textAnchor="middle" fill="#64748b" fontSize="7">Metrics | Webhooks | Circuit Breaker</text>
        
        {/* Connections */}
        <line x1="44" y1="46" x2="75" y2="60" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="46" x2="100" y2="60" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="156" y1="46" x2="125" y2="60" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
  {
    title: 'Dataset Loading & Processing',
    desc: [
      'Load from HuggingFace, URLs (CSV, JSON, Parquet), GitHub, S3, and local files',
      'Automatic schema detection and optimized PostgreSQL table creation',
      'Auto-embedding generation for text columns',
      'Batch loading with progress tracking',
      'Support for multiple formats with efficient bulk loading'
    ],
    icon: Download,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="datasetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Sources */}
        <rect x="15" y="18" width="42" height="32" rx="4" fill="url(#datasetGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="36" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">HF Hub</text>
        
        <rect x="66" y="18" width="42" height="32" rx="4" fill="url(#datasetGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="87" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">URL</text>
        
        <rect x="117" y="18" width="42" height="32" rx="4" fill="url(#datasetGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="138" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">S3</text>
        
        <rect x="168" y="18" width="42" height="32" rx="4" fill="url(#datasetGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="189" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Local</text>
        
        {/* Database */}
        <rect x="65" y="68" width="70" height="32" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="86" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">PostgreSQL</text>
        <text x="100" y="96" textAnchor="middle" fill="#64748b" fontSize="7">Auto-embedding</text>
        
        {/* Arrows */}
        <path d="M 36 50 L 80 68" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadDataset)" />
        <path d="M 87 50 L 100 68" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadDataset)" />
        <path d="M 138 50 L 120 68" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadDataset)" />
        <path d="M 189 50 L 135 68" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowheadDataset)" />
        
        <defs>
          <marker id="arrowheadDataset" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    )
  },
  {
    title: 'PostgreSQL Tools',
    desc: [
      'Complete PostgreSQL administration: version info, database statistics, connection monitoring',
      'Lock inspection and replication status',
      'Configuration settings and extension management',
      'Query performance analysis and system resource monitoring'
    ],
    icon: Layers,
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
        <text x="100" y="42" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Admin</text>
        <text x="100" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Monitor</text>
        <text x="100" y="103" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">27 Tools</text>
      </svg>
    )
  },
  {
    title: 'Comprehensive Tool Suite',
    desc: [
      '100+ tools: 27 PostgreSQL administration + 70+ NeuronDB tools',
      'Vector operations, ML training, analytics, RAG, reranking, and database management',
      'Vector search with 7+ distance metrics',
      'Quantization tools: int8, fp16, binary, uint8, ternary, int4',
      'Dataset loading from HuggingFace, URLs, GitHub, S3, and local files with auto-embedding',
      'Vector graph operations and vecmap (sparse vector) support',
      'Complete PostgreSQL administration from version info to performance tuning'
    ],
    icon: Wrench,
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="toolsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Tool categories */}
        <rect x="15" y="18" width="38" height="32" rx="4" fill="url(#toolsGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="34" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">Vector</text>
        
        <rect x="62" y="18" width="38" height="32" rx="4" fill="url(#toolsGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="81" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">ML</text>
        
        <rect x="109" y="18" width="38" height="32" rx="4" fill="url(#toolsGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="128" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">RAG</text>
        
        <rect x="156" y="18" width="38" height="32" rx="4" fill="url(#toolsGradient)" stroke="#64748b" strokeWidth="1.5" />
        <text x="175" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">PG</text>
        
        {/* Tool registry */}
        <circle cx="100" cy="85" r="22" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="100" y="90" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">100+</text>
        <text x="100" y="101" textAnchor="middle" fill="#64748b" fontSize="7">Tools</text>
        
        {/* Connections */}
        <line x1="34" y1="50" x2="88" y2="85" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="81" y1="50" x2="100" y2="85" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="128" y1="50" x2="112" y2="85" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="175" y1="50" x2="122" y2="85" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
]

export default function NeuronMCPFeatures() {
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
