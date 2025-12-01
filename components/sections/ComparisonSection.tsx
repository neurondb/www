'use client'

import React from 'react'
import SectionTemplate from '@/components/templates/SectionTemplate'

const comparisonData = [
  {
    feature: 'Vector Indexing',
    neurondb: 'HNSW + IVF',
    pgvector: 'HNSW + IVF',
    pgvectorscale: 'StreamingDiskANN',
    pgai: 'Uses pgvector',
    postgresml: 'pgvector-based',
  },
  {
    feature: 'ML Inference',
    neurondb: 'ONNX (C++)',
    pgvector: 'None',
    pgvectorscale: 'None',
    pgai: 'API calls',
    postgresml: 'Python ML libs',
  },
  {
    feature: 'Embedding Generation',
    neurondb: 'In-database (ONNX)',
    pgvector: 'External',
    pgvectorscale: 'External',
    pgai: 'External API',
    postgresml: 'In-database (Transformers)',
  },
  {
    feature: 'Hybrid Search',
    neurondb: 'Native (Vector+FTS)',
    pgvector: 'Manual',
    pgvectorscale: 'Manual',
    pgai: 'Manual',
    postgresml: 'Manual',
  },
  {
    feature: 'Reranking',
    neurondb: 'Cross-encoder, LLM, ColBERT, MMR',
    pgvector: 'None',
    pgvectorscale: 'None',
    pgai: 'None',
    postgresml: 'None',
  },
  {
    feature: 'ML Algorithms',
    neurondb: '52 algorithms: RF, XGBoost, LightGBM, CatBoost, SVM, KNN, DT, NB, NN, K-means, DBSCAN, GMM, PCA, etc.',
    pgvector: 'None',
    pgvectorscale: 'None',
    pgai: 'None',
    postgresml: 'XGBoost, LightGBM, sklearn suite, Linear/Logistic',
  },
  {
    feature: 'Background Workers',
    neurondb: '4 workers: neuranq, neuranmon, neurandefrag, neuranllm',
    pgvector: 'None',
    pgvectorscale: 'None',
    pgai: 'None',
    postgresml: 'None',
  },
  {
    feature: 'RAG Pipeline',
    neurondb: 'Complete In-DB',
    pgvector: 'None',
    pgvectorscale: 'None',
    pgai: 'Partial (API)',
    postgresml: 'Partial (Python)',
  },
  {
    feature: 'Quantization',
    neurondb: 'FP16, INT8, Binary (2x-32x)',
    pgvector: 'Binary only',
    pgvectorscale: 'Binary only',
    pgai: 'None',
    postgresml: 'None',
  },
  {
    feature: 'Implementation',
    neurondb: 'Pure C',
    pgvector: 'Pure C',
    pgvectorscale: 'Pure C',
    pgai: 'Rust + SQL',
    postgresml: 'Python + C',
  },
  {
    feature: 'GPU Support',
    neurondb: 'CUDA + ROCm + Metal (native C/C++)',
    pgvector: 'None',
    pgvectorscale: 'None',
    pgai: 'None',
    postgresml: 'CUDA (via Python)',
  },
  {
    feature: 'PostgreSQL Versions',
    neurondb: '16, 17, 18',
    pgvector: '12-18',
    pgvectorscale: '15-18',
    pgai: '16-18',
    postgresml: '14-16',
  },
  {
    feature: 'Vector Types',
    neurondb: '5 types: vector, vectorp, vecmap, vgraph, rtext',
    pgvector: '1 type: vector',
    pgvectorscale: '1 type: vector',
    pgai: 'Uses pgvector',
    postgresml: 'Uses pgvector',
  },
  {
    feature: 'Distance Metrics',
    neurondb: '10+ metrics: L2, Cosine, Inner Product, Manhattan, Hamming, Jaccard, etc.',
    pgvector: '3 metrics: L2, Cosine, Inner Product',
    pgvectorscale: '3 metrics: L2, Cosine, Inner Product',
    pgai: 'Uses pgvector',
    postgresml: 'Uses pgvector',
  },
  {
    feature: 'SQL Functions',
    neurondb: '473 functions',
    pgvector: '~20 functions',
    pgvectorscale: '~30 functions',
    pgai: '~15 functions',
    postgresml: '~50 functions',
  },
  {
    feature: 'Performance (QPS)',
    neurondb: '100K+ (with GPU)',
    pgvector: '10K-50K',
    pgvectorscale: '50K-100K',
    pgai: 'Limited (API overhead)',
    postgresml: '5K-20K (Python overhead)',
  },
  {
    feature: 'Dependencies',
    neurondb: 'Zero (pure C, optional ONNX)',
    pgvector: 'Zero (pure C)',
    pgvectorscale: 'Zero (pure C)',
    pgai: 'Rust runtime',
    postgresml: 'Python + ML libraries',
  },
]

export default function ComparisonSection() {
  return (
    <SectionTemplate background="page" padding="xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            NeuronDB vs. Alternatives
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comparison of NeuronDB with other PostgreSQL AI and vector extensions
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-4 px-4 text-white font-semibold sticky left-0 bg-[#1f2937] z-10">Feature</th>
                <th className="text-left py-4 px-4 text-white font-semibold bg-indigo-600/20">NeuronDB</th>
                <th className="text-left py-4 px-4 text-white font-semibold">pgvector</th>
                <th className="text-left py-4 px-4 text-white font-semibold">pgvectorscale</th>
                <th className="text-left py-4 px-4 text-white font-semibold">pgai</th>
                <th className="text-left py-4 px-4 text-white font-semibold">PostgresML</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-4 text-white font-semibold sticky left-0 bg-[#1f2937] z-10">{row.feature}</td>
                  <td className="py-4 px-4 text-yellow-400 font-semibold bg-indigo-600/10">{row.neurondb}</td>
                  <td className="py-4 px-4 text-white/80">{row.pgvector}</td>
                  <td className="py-4 px-4 text-white/80">{row.pgvectorscale}</td>
                  <td className="py-4 px-4 text-white/80">{row.pgai}</td>
                  <td className="py-4 px-4 text-white/80">{row.postgresml}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionTemplate>
  )
}

