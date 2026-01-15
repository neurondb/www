import React from 'react'
import { siteConfig } from '@/config/site'
import { baseSEO } from '@/config/seo'

/**
 * OrganizationSchema - Organization structured data component
 * Generates organization schema for better brand recognition in search
 */
export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: baseSEO.siteUrl,
    logo: `${baseSEO.siteUrl}/favicons/favicon-512.png`,
    description: siteConfig.description,
    foundingDate: '2024',
    sameAs: [
      siteConfig.github,
      siteConfig.twitter,
      siteConfig.linkedin,
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: siteConfig.email,
      url: `${baseSEO.siteUrl}/contact`,
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'PostgreSQL',
      'PostgreSQL AI Extension',
      'Postgres AI Extension',
      'PostgreSQL AI',
      'Postgres AI',
      'Vector Search',
      'PostgreSQL Vector Search',
      'Postgres Vector Search',
      'Machine Learning',
      'PostgreSQL Machine Learning',
      'Postgres ML',
      'RAG Pipeline',
      'PostgreSQL RAG',
      'Postgres RAG',
      'AI Database',
      'PostgreSQL AI Database',
      'Embeddings',
      'PostgreSQL Embeddings',
      'Postgres Embeddings',
      'GPU Acceleration',
      'Database Extensions',
      'PostgreSQL Extensions',
      'Semantic Search',
      'Hybrid Search',
      'ONNX Runtime',
      'HNSW Indexing',
      'Vector Database',
      // MCP (Model Context Protocol)
      'MCP Server',
      'Model Context Protocol',
      'MCP PostgreSQL',
      'MCP Postgres',
      'Claude Desktop MCP',
      'MCP Tools',
      'MCP Protocol',
      // Agent and Agentic AI
      'AI Agent',
      'Agent Runtime',
      'PostgreSQL Agent',
      'Postgres Agent',
      'Agentic AI',
      'PostgreSQL Agentic AI',
      'Postgres Agentic AI',
      'Autonomous Agents',
      'LLM Agent',
      'Agent Framework',
      'Agentic Database',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
