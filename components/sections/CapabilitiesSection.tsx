'use client'

import React from 'react'
import { Check } from 'lucide-react'
import SectionTemplate from '@/components/templates/SectionTemplate'

const capabilities = [
  {
    capability: 'Vector Search',
    description: 'HNSW indexing, multiple distance metrics, quantization',
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
    description: 'Clustering (K-means, DBSCAN, GMM), PCA, outlier detection, quality metrics, drift detection',
    performance: 'GPU-accelerated algorithms',
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
    description: 'SIMD (AVX2/AVX-512/NEON), intelligent query planning, ANN cache, WAL compression',
    performance: 'Predictive prefetching',
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
    description: 'pg_stat_neurondb view, worker heartbeats, latency histograms, Prometheus exporter',
    performance: 'Real-time metrics',
    productionReady: true,
  },
  {
    capability: 'PostgreSQL Native',
    description: 'Pure C implementation, 473 SQL functions, zero external dependencies, WAL integration',
    performance: 'Zero core modifications',
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
    description: 'Model Context Protocol server enabling MCP-compatible clients to access NeuronDB via stdio',
    performance: 'JSON-RPC 2.0 implementation',
    productionReady: true,
  },
]

export default function CapabilitiesSection() {
  return (
    <SectionTemplate background="page" padding="xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Capabilities
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            AI database features
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/20">
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
                  className="border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-6 text-white font-semibold">{cap.capability}</td>
                  <td className="py-4 px-6 text-white/80">{cap.description}</td>
                  <td className="py-4 px-6 text-white/80">{cap.performance}</td>
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


