'use client'

import React from 'react'
import Link from 'next/link'
import { Database, Bot, Server, Monitor } from 'lucide-react'
import SectionTemplate from '@/components/templates/SectionTemplate'

interface EcosystemCardProps {
  title: string
  icon: React.ReactNode
  features: string[]
  href: string
}

function EcosystemCard({ title, icon, features, href }: EcosystemCardProps) {
  return (
    <div 
      className="rounded-xl p-6 card-hover flex flex-col h-full transition-all duration-300 border"
      style={{
        backgroundColor: 'var(--background)',
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div style={{ color: 'var(--primary)' }}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
      </div>
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: 'var(--primary)' }} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="inline-flex items-center gap-2 font-medium text-sm transition-all duration-200 hover:gap-3 mt-auto"
        style={{ color: 'var(--primary)' }}
      >
        Learn more
        <span>→</span>
      </Link>
    </div>
  )
}

export default function EcosystemSection() {
  const ecosystemComponents = [
    {
      title: 'NeuronDB',
      icon: <Database className="w-6 h-6" />,
      features: [
        'Vector search with HNSW and IVF indexing, supporting 5 vector types and 10+ distance metrics.',
        '52 ML algorithms implemented in pure C: Random Forest, XGBoost, LightGBM, CatBoost, SVM, KNN, and more.',
        'RAG pipeline with document processing, semantic retrieval, reranking, and LLM integration.',
        'GPU acceleration for CUDA (NVIDIA), ROCm (AMD), and Metal (Apple Silicon) with automatic detection.',
        '473 SQL functions with hybrid search, background workers, and security features.',
      ],
      href: '/neurondb',
    },
    {
      title: 'NeuronAgent',
      icon: <Bot className="w-6 h-6" />,
      features: [
        'REST API and WebSocket agent runtime system with long-term memory and tool execution.',
        'Agent state machine with HNSW-based vector search for context retrieval and memory management.',
        'Tool registry supporting SQL, HTTP, Code, and Shell operations with streaming responses.',
        'Background jobs with API key authentication, crash recovery, and SKIP LOCKED processing.',
        'Integration with NeuronDB for embeddings, LLM operations, and vector search.',
      ],
      href: '/neuronagent',
    },
    {
      title: 'NeuronMCP',
      icon: <Server className="w-6 h-6" />,
      features: [
        'Model Context Protocol server with 100+ tools (27 PostgreSQL + 70+ NeuronDB) enabling MCP-compatible clients (like Claude Desktop) to access NeuronDB.',
        'JSON-RPC 2.0 implementation with stdio, HTTP, and SSE transport. Supports tools, resources, prompts, sampling, and progress tracking.',
        'Complete tool suite: 27 PostgreSQL administration tools for database management + 70+ NeuronDB tools for vector operations, ML training, analytics, RAG, reranking, dataset loading (HuggingFace, URLs, GitHub, S3), and comprehensive database monitoring.',
        'Enterprise features: middleware (validation, auth, logging), Prometheus metrics, webhooks, circuit breaker, and real-time resource subscriptions.',
      ],
      href: '/neuronmcp',
    },
    {
      title: 'NeuronDesktop',
      icon: <Monitor className="w-6 h-6" />,
      features: [
        'Unified web interface providing a single dashboard for managing all NeuronDB ecosystem components (NeuronDB, NeuronAgent, NeuronMCP).',
        'Real-time communication via WebSocket for live updates and streaming responses. Profile-based configuration for multiple environments.',
        'Secure authentication with API key-based access control, rate limiting, and comprehensive request/response logging with analytics.',
        'Professional UI with metrics collection, health monitoring, agent management, MCP tool testing, and vector search interface.',
      ],
      href: '/neurondesktop',
    },
  ]

  return (
    <SectionTemplate background="page" padding="xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            NeuronDB Ecosystem
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Complete AI database platform with core engine and integrated runtime components
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemComponents.map((component) => (
            <EcosystemCard
              key={component.title}
              title={component.title}
              icon={component.icon}
              features={component.features}
              href={component.href}
            />
          ))}
        </div>
      </div>
    </SectionTemplate>
  )
}

