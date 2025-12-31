'use client'

import React from 'react'

export default function NeuronMCPArchitectureDiagram() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">
        NeuronMCP Architecture
      </h2>
      
      <div className="max-w-5xl mx-auto">
        {/* MCP Client */}
        <div className="bg-cyan-600/20 border-2 border-cyan-500 rounded-xl p-6 mb-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">MCP Client</h3>
          <p className="text-white/80 text-sm">Claude Desktop | Custom Clients | stdio Communication</p>
        </div>

        {/* Main Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* MCP Protocol Handler */}
          <div className="bg-blue-600/20 border-2 border-blue-500 rounded-xl p-5">
            <h4 className="text-lg font-bold text-white mb-3">Protocol Handler</h4>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• JSON-RPC 2.0</li>
              <li>• stdio Transport</li>
              <li>• Request Routing</li>
              <li>• Error Handling</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-green-600/20 border-2 border-green-500 rounded-xl p-5">
            <h4 className="text-lg font-bold text-white mb-3">Tools</h4>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• Vector Operations</li>
              <li>• ML Operations</li>
              <li>• Analytics</li>
              <li>• RAG Operations</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="bg-purple-600/20 border-2 border-purple-500 rounded-xl p-5">
            <h4 className="text-lg font-bold text-white mb-3">Resources</h4>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• Schema Info</li>
              <li>• Model Catalog</li>
              <li>• Index Config</li>
              <li>• Stats & Config</li>
            </ul>
          </div>
        </div>

        {/* Middleware Layer */}
        <div className="bg-slate-800/60 border-2 border-yellow-500 rounded-xl p-6 mb-6">
          <h4 className="text-lg font-bold text-white mb-4 text-center">Middleware</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-yellow-400 font-semibold mb-1">Validation</div>
              <div className="text-white/70 text-xs">Input checks</div>
            </div>
            <div>
              <div className="text-yellow-400 font-semibold mb-1">Logging</div>
              <div className="text-white/70 text-xs">Structured logs</div>
            </div>
            <div>
              <div className="text-yellow-400 font-semibold mb-1">Timeout</div>
              <div className="text-white/70 text-xs">Request limits</div>
            </div>
            <div>
              <div className="text-yellow-400 font-semibold mb-1">Error Handling</div>
              <div className="text-white/70 text-xs">Graceful errors</div>
            </div>
          </div>
        </div>

        {/* Integration Layer */}
        <div className="bg-slate-800/60 border-2 border-indigo-500 rounded-xl p-6 text-center">
          <h4 className="text-lg font-bold text-white mb-2">NeuronDB PostgreSQL</h4>
          <p className="text-white/80 text-sm">Vector Search | ML Algorithms | Embeddings | SQL Functions</p>
        </div>
      </div>
    </div>
  )
}












