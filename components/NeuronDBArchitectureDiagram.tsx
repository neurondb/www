'use client';

import React from 'react';

export default function NeuronDBArchitectureDiagram() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">
        NeuronDB Architecture
      </h2>
      
      <div className="max-w-5xl mx-auto">
        {/* PostgreSQL Core */}
        <div className="bg-indigo-600/20 border-2 border-indigo-500 rounded-xl p-6 mb-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">PostgreSQL 16-18</h3>
          <p className="text-white/80 text-sm">ACID | MVCC | WAL | Replication</p>
        </div>

        {/* Main Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Vector Engine */}
          <div className="bg-orange-600/20 border-2 border-orange-500 rounded-xl p-5">
            <h4 className="text-lg font-bold text-white mb-3">Vector Engine</h4>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• HNSW & IVF Indexing</li>
              <li>• 10+ Distance Metrics</li>
              <li>• Quantization</li>
              <li>• SIMD Optimized</li>
            </ul>
          </div>

          {/* ML Engine */}
          <div className="bg-green-600/20 border-2 border-green-500 rounded-xl p-5">
            <h4 className="text-lg font-bold text-white mb-3">ML Engine</h4>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• 52 ML Algorithms</li>
              <li>• ONNX Runtime</li>
              <li>• Batch Processing</li>
              <li>• Pure C Implementation</li>
            </ul>
          </div>

          {/* Embedding Engine */}
          <div className="bg-purple-600/20 border-2 border-purple-500 rounded-xl p-5">
            <h4 className="text-lg font-bold text-white mb-3">Embedding Engine</h4>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• Text Embeddings</li>
              <li>• Multimodal Support</li>
              <li>• Hugging Face Integration</li>
              <li>• Caching & Batching</li>
            </ul>
          </div>

          {/* GPU Accelerator */}
          <div className="bg-red-600/20 border-2 border-red-500 rounded-xl p-5">
            <h4 className="text-lg font-bold text-white mb-3">GPU Accelerator</h4>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• CUDA (NVIDIA)</li>
              <li>• ROCm (AMD)</li>
              <li>• Metal (Apple)</li>
              <li>• Auto Detection</li>
            </ul>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="bg-slate-800/60 border-2 border-cyan-500 rounded-xl p-6 mb-6">
          <h4 className="text-lg font-bold text-white mb-4 text-center">Advanced Features</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-cyan-400 font-semibold mb-1">Hybrid Search</div>
              <div className="text-white/70 text-xs">Vector + FTS</div>
            </div>
            <div>
              <div className="text-cyan-400 font-semibold mb-1">Reranking</div>
              <div className="text-white/70 text-xs">Cross-encoder, LLM</div>
            </div>
            <div>
              <div className="text-cyan-400 font-semibold mb-1">RAG Pipeline</div>
              <div className="text-white/70 text-xs">Complete In-DB</div>
            </div>
            <div>
              <div className="text-cyan-400 font-semibold mb-1">Background Workers</div>
              <div className="text-white/70 text-xs">4 Workers</div>
            </div>
          </div>
        </div>

        {/* API Layer */}
        <div className="bg-slate-800/60 border-2 border-blue-500 rounded-xl p-6 text-center">
          <h4 className="text-lg font-bold text-white mb-2">SQL API Layer</h4>
          <p className="text-white/80 text-sm">473 SQL Functions | Operators | Types | Views</p>
        </div>
      </div>
    </div>
  );
}
