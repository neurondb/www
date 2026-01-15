import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'Glossary | NeuronDB Terminology Reference',
  description: 'Glossary of terms used across the NeuronDB ecosystem including extension, vector, embedding, hybrid search, reranking, MCP, agent, and multi-tenant concepts.',
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondb/reference/glossary',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'terms', title: 'Terms' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/reference/embedding-compatibility',
  label: 'Embedding Compatibility',
}

const nextLink: NavLink | undefined = undefined

export default function GlossaryPage() {
  return (
    <PostgresDocsLayout
      title="Glossary"
      version="NeuronDB Reference"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          This glossary focuses on doc-level and ecosystem-level terms used across the NeuronDB repository.
        </p>
      </section>

      <section id="terms">
        <h2>Terms</h2>

        <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1rem', marginTop: '1rem' }}>
          <dt style={{ fontWeight: 'bold', color: '#fbbf24' }}>Extension</dt>
          <dd style={{ margin: 0 }}>
            A Postgres extension (here: NeuronDB) that adds types, functions, operators, and index methods.
          </dd>

          <dt style={{ fontWeight: 'bold', color: '#fbbf24' }}>Vector</dt>
          <dd style={{ margin: 0 }}>
            Fixed-length numeric array representing an embedding.
          </dd>

          <dt style={{ fontWeight: 'bold', color: '#fbbf24' }}>Embedding</dt>
          <dd style={{ margin: 0 }}>
            A vector representation of text/image/audio produced by a model.
          </dd>

          <dt style={{ fontWeight: 'bold', color: '#fbbf24' }}>Hybrid search</dt>
          <dd style={{ margin: 0 }}>
            Retrieval combining dense vector similarity with sparse/lexical signals and filters.
          </dd>

          <dt style={{ fontWeight: 'bold', color: '#fbbf24' }}>Reranking</dt>
          <dd style={{ margin: 0 }}>
            Second-stage scoring of candidate results to improve relevance.
          </dd>

          <dt style={{ fontWeight: 'bold', color: '#fbbf24' }}>MCP</dt>
          <dd style={{ margin: 0 }}>
            Model Context Protocol. Tool interface exposed to LLM clients.
          </dd>

          <dt style={{ fontWeight: 'bold', color: '#fbbf24' }}>Agent</dt>
          <dd style={{ margin: 0 }}>
            A service/workflow layer that orchestrates tasks using DB + tools.
          </dd>

          <dt style={{ fontWeight: 'bold', color: '#fbbf24' }}>Multi-tenant</dt>
          <dd style={{ margin: 0 }}>
            Patterns that isolate customer/tenant data within one logical system.
          </dd>
        </dl>
      </section>
    </PostgresDocsLayout>
  )
}
