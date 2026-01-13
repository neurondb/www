import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'

export const metadata: Metadata = {
  title: 'Row-Level Security for Embeddings | NeuronDB',
  description: 'Row-Level Security (RLS) for embeddings in NeuronDB, enabling multi-tenant isolation and fine-grained access control for vector data.',
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'features', title: 'Features' },
  { id: 'configuration', title: 'Configuration' },
  { id: 'usage', title: 'Usage' },
  { id: 'best-practices', title: 'Best Practices' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/security',
  label: 'Security Overview',
}

const nextLink: NavLink = {
  href: '/docs/neurondb/security/field-encryption',
  label: 'Field-Level Encryption',
}

export default function RLSEmbeddingsPage() {
  return (
    <PostgresDocsLayout
      title="Row-Level Security for Embeddings"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          NeuronDB extends PostgreSQL's Row-Level Security (RLS) to support embedding-specific access patterns and integration with vector index scans. This ensures multi-tenant isolation and fine-grained access control for vector data.
        </p>
      </section>

      <section id="features">
        <h2>Features</h2>
        <ul>
          <li>Embedding-aware RLS policies (filter by metadata, tenant_id, classification labels)</li>
          <li>RLS integration with vector index scans (HNSW, IVF)</li>
          <li>Performance optimization for RLS checks during ANN searches</li>
          <li>SQL helper functions for policy management</li>
        </ul>
      </section>

      <section id="configuration">
        <h2>Configuration</h2>
        <p>Enable RLS for embeddings:</p>
        <SqlCodeBlock
          title="Enable RLS for embeddings"
          code={`SET neurondb.rls_embeddings_enabled = true;`}
        />
      </section>

      <section id="usage">
        <h2>Usage</h2>

        <h3>Enable RLS on Table</h3>
        <SqlCodeBlock
          title="Enable RLS on documents table"
          code={`-- Enable RLS on documents table
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Create RLS policy
CREATE POLICY documents_policy ON documents
FOR SELECT USING (user_id = current_user_id());`}
        />

        <h3>Using Helper Functions</h3>
        <SqlCodeBlock
          title="Enable embedding RLS with tenant isolation"
          code={`-- Enable embedding RLS with tenant isolation
SELECT enable_embedding_rls('documents');

-- Create custom embedding RLS policy
SELECT create_embedding_rls_policy(
    'documents',
    'tenant_isolation_policy',
    'tenant_id = current_setting(''app.tenant_id'')::integer'
);`}
        />

        <h3>Example: Multi-Tenant Isolation</h3>
        <SqlCodeBlock
          title="Multi-tenant isolation with RLS"
          code={`-- Create documents table with tenant_id
CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    tenant_id INTEGER NOT NULL,
    content TEXT,
    embedding vector(384)
);

-- Enable RLS
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Create policy for tenant isolation
CREATE POLICY tenant_isolation ON documents
FOR SELECT USING (tenant_id = current_setting('app.tenant_id', true)::integer);

-- Set tenant context
SET app.tenant_id = 123;

-- Query - only returns documents for tenant 123
SELECT * FROM documents 
ORDER BY embedding <=> query_vector
LIMIT 10;`}
        />
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <ol>
          <li>
            <strong>Performance:</strong> RLS checks add overhead to vector searches. Use indexed columns in policy expressions.
          </li>
          <li>
            <strong>Tenant Isolation:</strong> Use session variables or role-based policies for multi-tenant scenarios.
          </li>
          <li>
            <strong>Index Integration:</strong> RLS policies are enforced during index scans, ensuring efficient filtering.
          </li>
          <li>
            <strong>Policy Design:</strong> Keep policy expressions simple and use indexed columns when possible.
          </li>
        </ol>
      </section>

      <section>
        <h2>Related Topics</h2>
        <ul>
          <li><a href="/docs/neurondb/security">Security Overview</a></li>
          <li><a href="/docs/neurondb/security/field-encryption">Field-Level Encryption</a></li>
          <li><a href="/docs/neurondb/security/audit-logging">Audit Logging</a></li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
