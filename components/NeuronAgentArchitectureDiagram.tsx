'use client'

import React from 'react'

export default function NeuronAgentArchitectureDiagram() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">
        NeuronAgent Architecture
      </h2>
      
      <div className="max-w-5xl mx-auto">
        {/* API Layer */}
        <div className="bg-yellow-600/20 border-2 border-yellow-500 rounded-xl p-6 mb-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">API Layer</h3>
          <p className="text-white/80 text-sm">REST API | WebSocket | Health Check</p>
        </div>

        {/* Main Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Agent State Machine */}
          <div className="bg-blue-600/20 border-2 border-blue-500 rounded-xl p-5">
            <h4 className="text-lg font-bold text-white mb-3">Agent State Machine</h4>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• State Persistence</li>
              <li>• Task Execution</li>
              <li>• Recovery & Retry</li>
              <li>• State Transitions</li>
            </ul>
          </div>

          {/* Session Management */}
          <div className="bg-purple-600/20 border-2 border-purple-500 rounded-xl p-5">
            <h4 className="text-lg font-bold text-white mb-3">Session Management</h4>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• Session Lifecycle</li>
              <li>• Context Management</li>
              <li>• Message History</li>
              <li>• Multi-tenancy</li>
            </ul>
          </div>

          {/* Tool Registry */}
          <div className="bg-green-600/20 border-2 border-green-500 rounded-xl p-5">
            <h4 className="text-lg font-bold text-white mb-3">Tool Registry</h4>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• SQL Tools</li>
              <li>• HTTP Tools</li>
              <li>• Code Execution</li>
              <li>• Shell Commands</li>
            </ul>
          </div>
        </div>

        {/* Memory & Job Queue */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Memory Store */}
          <div className="bg-cyan-600/20 border-2 border-cyan-500 rounded-xl p-5">
            <h4 className="text-lg font-bold text-white mb-3">Memory Store</h4>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• HNSW Vector Search</li>
              <li>• Context Retrieval</li>
              <li>• Long-term Memory</li>
              <li>• Semantic Search</li>
            </ul>
          </div>

          {/* Job Queue */}
          <div className="bg-orange-600/20 border-2 border-orange-500 rounded-xl p-5">
            <h4 className="text-lg font-bold text-white mb-3">Job Queue</h4>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• Background Jobs</li>
              <li>• Retry Logic</li>
              <li>• Poison Handling</li>
              <li>• SKIP LOCKED</li>
            </ul>
          </div>
        </div>

        {/* Integration Layer */}
        <div className="bg-slate-800/60 border-2 border-indigo-500 rounded-xl p-6 text-center">
          <h4 className="text-lg font-bold text-white mb-2">NeuronDB Integration</h4>
          <p className="text-white/80 text-sm">Vector Search | Embeddings | LLM Operations | PostgreSQL</p>
        </div>
      </div>
    </div>
  )
}











