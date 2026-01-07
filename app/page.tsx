import React from 'react'
import { Metadata } from 'next'
import { Layers, Code, Brain, Zap } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import HeroTemplate from '@/components/templates/HeroTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import SectionTemplate from '@/components/templates/SectionTemplate'
import EcosystemSection from '@/components/sections/EcosystemSection'
import CapabilitiesSection from '@/components/sections/CapabilitiesSection'
import ComparisonSection from '@/components/sections/ComparisonSection'
import FAQSchema from '@/components/SEO/FAQSchema'
import HeroCTAs from '@/components/HeroCTAs'
import EndOfPageCTA from '@/components/EndOfPageCTA'
import { generatePageMetadata } from '@/config/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'NeuronDB PostgreSQL AI Ecosystem',
  description: 'PostgreSQL AI ecosystem with 4 products: NeuronDB extension for vector search and ML, NeuronAgent runtime, NeuronMCP server for Claude Desktop, and NeuronDesktop interface. Build AI applications with GPU acceleration, 52 ML algorithms, and 473 SQL functions.',
  keywords: [
    'neurondb',
    'postgresql ai ecosystem',
    'ai database ecosystem',
    'neuronagent',
    'neuronmcp',
    'neurondesktop',
    'postgresql ai extension',
    'vector database postgresql',
    'vector search postgresql',
    'rag pipeline postgresql',
    'machine learning postgresql',
    'ml inference postgresql',
    'gpu accelerated database',
    'pgvector alternative',
    'ai agent runtime',
    'mcp server claude',
    'postgres ai',
    'ai database',
    'semantic search postgresql',
  ],
  path: '/',
})

const faqs = [
  {
    question: 'What is NeuronDB PostgreSQL AI Ecosystem?',
    answer: 'NeuronDB is a PostgreSQL AI ecosystem with 4 products: NeuronDB extension for vector search, ML inference, and RAG, NeuronAgent for agent runtime, NeuronMCP for Model Context Protocol server with Claude Desktop, and NeuronDesktop for web interface. They provide AI capabilities in PostgreSQL.',
  },
  {
    question: 'How does NeuronDB compare to pgvector?',
    answer: 'NeuronDB adds ML inference with ONNX models, hybrid search, RAG pipelines, GPU acceleration, and 52 ML algorithms. It provides 473 SQL functions and 4 background workers.',
  },
  {
    question: 'What PostgreSQL versions are supported?',
    answer: 'NeuronDB supports PostgreSQL 16, 17, and 18. It is implemented in pure C with zero external dependencies. See the compatibility matrix in the repository for detailed OS, GPU backend, and platform support information.',
  },
  {
    question: 'Does NeuronDB support GPU acceleration?',
    answer: 'NeuronDB supports GPU acceleration for CUDA, ROCm, and Metal. GPU acceleration speeds up batch operations up to 100x. It falls back to CPU when GPU is unavailable.',
  },
  {
    question: 'What machine learning capabilities does NeuronDB provide?',
    answer: 'NeuronDB includes 52 ML algorithms in pure C. Algorithms include Random Forest, XGBoost, LightGBM, CatBoost, SVM, KNN, neural networks, and clustering. It supports ONNX model inference for embeddings generation.',
  },
  {
    question: 'Can I use NeuronDB for RAG (Retrieval Augmented Generation)?',
    answer: 'NeuronDB provides an in-database RAG pipeline with document processing, semantic retrieval, reranking, and LLM integration. You build RAG applications in PostgreSQL without external services.',
  },
  {
    question: 'Are there client SDKs available for NeuronDB?',
    answer: 'Yes, NeuronDB provides official Python SDK (pip install neuronagent) and TypeScript/JavaScript SDKs (npm install @neurondb/neuronagent @neurondb/neurondesktop). All SDKs are auto-generated from OpenAPI specifications with full type safety and comprehensive examples. See the Examples section for working code samples.',
  },
  {
    question: 'Does NeuronDB include performance benchmarks?',
    answer: 'Yes, NeuronDB includes a comprehensive benchmark suite covering Vector benchmarks (SIFT-128, GIST-960, GloVe-100), Hybrid benchmarks (BEIR datasets), and RAG benchmarks (MTEB, BEIR, RAGAS). Metrics include QPS, Recall, Latency, NDCG, MAP, Faithfulness, and Relevancy with reproducible results.',
  },
]

export default function Home() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageTemplate>
        <HeroTemplate
        height="default"
        className="text-white text-center pt-20"
      >
        <div className="container-extra-wide relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg animate-fade-in-up">
              <div className="text-3xl md:text-4xl lg:text-5xl text-gradient">NeuronDB</div>
              <div className="text-xl md:text-2xl lg:text-3xl mt-2">PostgreSQL AI Ecosystem</div>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-normal text-white mb-6 max-w-2xl mx-auto drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Build AI applications with vector search, ML inference, and RAG pipelines directly in PostgreSQL
            </p>
            <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              GPU-accelerated vector search, 52 ML algorithms, 473 SQL functions, and complete agent infrastructure. Production-ready PostgreSQL AI extension.
            </p>
            <HeroCTAs />
          </div>
        </div>
      </HeroTemplate>
      
      {/* Key Features Quick Overview */}
      <SectionTemplate background="page" padding="lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 hover-lift card-hover">
              <div className="flex justify-center mb-3">
                <Layers className="w-8 h-8 text-yellow-400 transition-transform hover:scale-110" />
              </div>
              <div className="text-4xl font-bold text-gradient mb-1">4</div>
              <div className="text-sm text-white/80 font-medium">Integrated Products</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 hover-lift card-hover">
              <div className="flex justify-center mb-3">
                <Code className="w-8 h-8 text-yellow-400 transition-transform hover:scale-110" />
              </div>
              <div className="text-4xl font-bold text-gradient mb-1">473</div>
              <div className="text-sm text-white/80 font-medium">SQL Functions</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 hover-lift card-hover">
              <div className="flex justify-center mb-3">
                <Brain className="w-8 h-8 text-yellow-400 transition-transform hover:scale-110" />
              </div>
              <div className="text-4xl font-bold text-gradient mb-1">52</div>
              <div className="text-sm text-white/80 font-medium">ML Algorithms</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 hover-lift card-hover">
              <div className="flex justify-center mb-3">
                <Zap className="w-8 h-8 text-yellow-400 transition-transform hover:scale-110" />
              </div>
              <div className="text-4xl font-bold text-gradient mb-1">100x</div>
              <div className="text-sm text-white/80 font-medium">GPU Speedup</div>
            </div>
          </div>
        </div>
      </SectionTemplate>

      {/* SDKs & Developer Tools */}
      <SectionTemplate background="page" padding="lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Developer Tools & SDKs
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Official client libraries and comprehensive benchmark suite for building with NeuronDB
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Client SDKs</h3>
              <p className="text-white/80 mb-4">
                Official Python and TypeScript/JavaScript SDKs with full API coverage, type safety, and comprehensive examples.
              </p>
              <ul className="space-y-2 text-sm text-white/70 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">Python:</strong> <code className="bg-slate-700/50 px-1.5 py-0.5 rounded">pip install neuronagent</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">TypeScript:</strong> <code className="bg-slate-700/50 px-1.5 py-0.5 rounded">npm install @neurondb/neuronagent @neurondb/neurondesktop</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Auto-generated from OpenAPI specifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Full type safety and comprehensive examples</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Benchmark Suite</h3>
              <p className="text-white/80 mb-4">
                Comprehensive benchmark suite for evaluating vector search, hybrid search, and RAG performance with reproducible results.
              </p>
              <div className="mb-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700/50">
                <p className="text-xs text-white/60 mb-2">Test Environment:</p>
                <ul className="text-xs text-white/70 space-y-1">
                  <li>• CPU: 13th Gen Intel Core i5-13400F (16 cores)</li>
                  <li>• RAM: 31.1 GB</li>
                  <li>• GPU: NVIDIA GeForce RTX 5060, 8151 MiB</li>
                  <li>• PostgreSQL: 18.1</li>
                </ul>
              </div>
              <ul className="space-y-2 text-sm text-white/70 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">Vector Benchmarks:</strong> SIFT-128 with Recall@10: 1.000, QPS: 1.90, Latency (p50: 524.68ms, p95: 546.62ms, p99: 555.52ms)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">Hybrid Benchmarks:</strong> BEIR datasets (nfcorpus, msmarco) with NDCG, MAP, Recall, Precision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">RAG Benchmarks:</strong> MTEB, BEIR, RAGAS with Faithfulness, Relevancy, Context Precision (verification passed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Reproducible with exact Docker image tags and documented hardware profiles</span>
                </li>
              </ul>
              <a 
                href="https://github.com/neurondb-ai/neurondb/tree/main/NeuronDB/benchmark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium inline-flex items-center gap-1"
              >
                View Benchmarks →
              </a>
            </div>
          </div>
        </div>
      </SectionTemplate>

      {/* Examples & Tutorials */}
      <SectionTemplate background="page" padding="lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Examples & Tutorials
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Complete, working examples demonstrating NeuronDB capabilities with real-world applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 hover:border-yellow-400/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">Semantic Search</h3>
              <p className="text-white/80 mb-4 text-sm">
                Document ingestion, embedding generation, and semantic search over document collections with HNSW indexing.
              </p>
              <a 
                href="https://github.com/neurondb-ai/neurondb/tree/main/examples/semantic-search-docs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium inline-flex items-center gap-1"
              >
                View Example →
              </a>
            </div>
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 hover:border-yellow-400/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">RAG Chatbot</h3>
              <p className="text-white/80 mb-4 text-sm">
                Full RAG pipeline over PDF documents with LLM integration, context retrieval, and interactive chat interface.
              </p>
              <a 
                href="https://github.com/neurondb-ai/neurondb/tree/main/examples/rag-chatbot-pdfs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium inline-flex items-center gap-1"
              >
                View Example →
              </a>
            </div>
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 hover:border-yellow-400/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">Agent Tools</h3>
              <p className="text-white/80 mb-4 text-sm">
                NeuronAgent with multiple tools (SQL, HTTP, custom) for complex agent workflows and tool chaining.
              </p>
              <a 
                href="https://github.com/neurondb-ai/neurondb/tree/main/examples/agent-tools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium inline-flex items-center gap-1"
              >
                View Example →
              </a>
            </div>
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 hover:border-yellow-400/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">MCP Integration</h3>
              <p className="text-white/80 mb-4 text-sm">
                Claude Desktop configuration and MCP server integration examples with tool discovery and usage.
              </p>
              <a 
                href="https://github.com/neurondb-ai/neurondb/tree/main/examples/mcp-integration" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium inline-flex items-center gap-1"
              >
                View Example →
              </a>
            </div>
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 hover:border-yellow-400/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">Dataset Loading</h3>
              <p className="text-white/80 mb-4 text-sm">
                Load datasets from HuggingFace Hub with auto-embedding, schema detection, batch loading, and index creation.
              </p>
              <a 
                href="https://github.com/neurondb-ai/neurondb/tree/main/examples/data_loading" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium inline-flex items-center gap-1"
              >
                View Example →
              </a>
            </div>
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 hover:border-yellow-400/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">LLM Training</h3>
              <p className="text-white/80 mb-4 text-sm">
                Train custom LLM models for PostgreSQL-specific tasks with model export to Ollama and server setup.
              </p>
              <a 
                href="https://github.com/neurondb-ai/neurondb/tree/main/examples/llm_training" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium inline-flex items-center gap-1"
              >
                View Example →
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <a 
              href="https://github.com/neurondb-ai/neurondb/tree/main/examples" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 font-medium inline-flex items-center gap-2"
            >
              View All Examples on GitHub →
            </a>
          </div>
        </div>
      </SectionTemplate>

      <EcosystemSection />
      <CapabilitiesSection />
      <ComparisonSection />
      <EndOfPageCTA />
      <FooterTemplate />
    </PageTemplate>
    </>
  )
}
