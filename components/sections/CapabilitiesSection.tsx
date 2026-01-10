'use client'

import React from 'react'
import { Check } from 'lucide-react'
import SectionTemplate from '@/components/templates/SectionTemplate'

const capabilities = [
  {
    capability: 'Vector Search',
    description: '5 vector types (vector, vectorp, vecmap, vgraph, rtext), HNSW and IVF indexing, 10+ distance metrics, quantization (PQ, OPQ)',
    performance: 'Sub-millisecond on millions',
    productionReady: true,
  },
  {
    capability: 'ML Inference',
    description: 'ONNX runtime, batch processing, embedding generation',
    performance: 'High-throughput batch ops',
    productionReady: true,
  },
  {
    capability: 'Hybrid Search',
    description: 'Vector + FTS, multi-vector, faceted, temporal',
    performance: 'Optimized query planning',
    productionReady: true,
  },
  {
    capability: 'Reranking',
    description: 'Cross-encoder, LLM, ColBERT, ensemble',
    performance: 'GPU-accelerated support',
    productionReady: true,
  },
  {
    capability: 'Background Workers',
    description: 'Queue executor, auto-tuner, index maintenance',
    performance: 'Non-blocking async ops',
    productionReady: true,
  },
  {
    capability: 'RAG Pipeline',
    description: 'Complete in-database RAG with document processing',
    performance: 'End-to-end optimization',
    productionReady: true,
  },
  {
    capability: 'ML Analytics',
    description: '19 implemented algorithms: Clustering (K-means, Mini-batch K-means, DBSCAN, GMM, Hierarchical), Dimensionality Reduction (PCA, PCA Whitening), Quantization (PQ, OPQ), Outlier Detection (Z-score, Modified Z-score, IQR), Reranking (MMR, Ensemble, LTR), Quality Metrics (Recall@K, Precision@K, F1@K, MRR, Davies-Bouldin, Silhouette), Drift Detection (Centroid, Distribution, Temporal), Analytics (Topic Discovery, Similarity Histograms, KNN Graphs)',
    performance: 'GPU-accelerated algorithms with SIMD optimization',
    productionReady: true,
  },
  {
    capability: 'GPU Acceleration',
    description: 'CUDA (NVIDIA), ROCm (AMD), Metal (Apple), 100x speedup on batch ops',
    performance: 'Auto-detection with CPU fallback',
    productionReady: true,
  },
  {
    capability: 'Performance Optimization',
    description: 'HNSW index builds 10.1x faster than pgvector (606ms for 50K vectors), SIMD (AVX2/AVX-512/NEON), intelligent query planning, ANN cache, WAL compression, in-memory graph building, efficient neighbor finding during insert',
    performance: 'Predictive prefetching, optimized flush with pre-computed neighbors',
    productionReady: true,
  },
  {
    capability: 'Security',
    description: 'Vector encryption (AES-GCM), differential privacy, RLS integration, multi-tenant isolation',
    performance: 'GDPR-compliant',
    productionReady: true,
  },
  {
    capability: 'Monitoring & Observability',
    description: '7 built-in monitoring views (vector_stats, index_health, tenant_quota_usage, llm_job_status, query_performance, index_maintenance_status, metrics_summary), pg_stat_neurondb view, worker heartbeats, latency histograms, Prometheus exporter',
    performance: 'Real-time metrics with 24h performance tracking',
    productionReady: true,
  },
  {
    capability: 'PostgreSQL Native',
    description: 'Pure C implementation, 473 SQL functions, zero external dependencies, WAL integration, reorganized codebase (120 files in logical subdirectories), SIMD-optimized (AVX2/AVX-512/NEON) with runtime CPU detection',
    performance: 'Zero core modifications, optimized compilation',
    productionReady: true,
  },
  {
    capability: 'Multi-Tenancy & Security',
    description: 'Tenant-aware indexes, per-tenant resource quotas, row-level security (RLS) policies, tenant isolation, quota monitoring with warnings, tenant statistics',
    performance: 'Efficient resource isolation',
    productionReady: true,
  },
  {
    capability: 'Temporal Search',
    description: 'Time-decay relevance scoring, temporal indexes, temporal KNN search, temporal drift monitoring, time-series integration',
    performance: 'Optimized temporal queries',
    productionReady: true,
  },
  {
    capability: 'Distributed Features',
    description: 'Federated vector queries, vector replication, Foreign Data Wrapper (FDW) support, distributed query federation',
    performance: 'Cross-database queries',
    productionReady: true,
  },
  {
    capability: 'NeuronAgent',
    description: 'REST API and WebSocket agent runtime with long-term memory, tool execution, and streaming responses',
    performance: 'HNSW-based context retrieval',
    productionReady: true,
  },
  {
    capability: 'NeuronMCP',
    description: 'Model Context Protocol server with 100+ tools (27 PostgreSQL + 70+ NeuronDB) enabling MCP-compatible clients to access NeuronDB via stdio',
    performance: 'JSON-RPC 2.0 implementation with comprehensive tool suite',
    productionReady: true,
  },
  {
    capability: 'NeuronDesktop',
    description: 'Unified web interface for managing all NeuronDB ecosystem components with real-time monitoring and comprehensive analytics',
    performance: 'WebSocket-based real-time updates',
    productionReady: true,
  },
  {
    capability: 'Client SDKs',
    description: 'Official Python SDK (neuronagent) and TypeScript/JavaScript SDKs (@neurondb/neuronagent, @neurondb/neurondesktop) with full API coverage, type safety, and examples',
    performance: 'Auto-generated from OpenAPI specs',
    productionReady: true,
  },
  {
    capability: 'Benchmark Suite',
    description: 'Comprehensive benchmark suite: Vector (SIFT-128, GIST-960, GloVe-100), Hybrid (BEIR datasets), RAG (MTEB, BEIR, RAGAS). Metrics: QPS, Recall, Latency, NDCG, MAP, Faithfulness, Relevancy. HNSW builds: 606ms (50K vectors, 128-dim L2, 10.1x faster than pgvector), 583ms (50K vectors, 128-dim Cosine, 8.8x faster), 146ms (10K vectors, 768-dim L2, 27.1x faster)',
    performance: 'Reproducible benchmarks with hardware profiles, integrated RAGAS/MTEB/BEIR',
    productionReady: true,
  },
]

export default function CapabilitiesSection() {
  return (
    <SectionTemplate background="page" padding="xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            PostgreSQL AI Extension Capabilities
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            AI database features in a PostgreSQL AI extension
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-slate-800 rounded-lg border border-slate-700 shadow-sm">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-900">
                <th className="text-left py-4 px-6 text-white font-semibold">Capability</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Description</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Performance</th>
                <th className="text-center py-4 px-6 text-white font-semibold">Production Ready</th>
              </tr>
            </thead>
            <tbody>
              {capabilities.map((cap, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors even:bg-slate-900/30"
                >
                  <td className="py-4 px-6 text-white font-semibold">{cap.capability}</td>
                  <td className="py-4 px-6 text-slate-300">{cap.description}</td>
                  <td className="py-4 px-6 text-slate-300">{cap.performance}</td>
                  <td className="py-4 px-6 text-center">
                    {cap.productionReady && (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionTemplate>
  )
}


