import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'

export const metadata: Metadata = {
  title: 'Audit Logging for ML and RAG Operations | NeuronDB',
  description: 'Comprehensive audit logging for ML inference and RAG operations in NeuronDB, enabling compliance monitoring, security analysis, and usage tracking.',
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'features', title: 'Features' },
  { id: 'configuration', title: 'Configuration' },
  { id: 'ml-inference-audit-logging', title: 'ML Inference Audit Logging' },
  { id: 'rag-operation-audit-logging', title: 'RAG Operation Audit Logging' },
  { id: 'audit-log-schema', title: 'Audit Log Schema' },
  { id: 'compliance-considerations', title: 'Compliance Considerations' },
  { id: 'best-practices', title: 'Best Practices' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/security/field-encryption',
  label: 'Field-Level Encryption',
}

const nextLink: NavLink | undefined = undefined

export default function AuditLoggingPage() {
  return (
    <PostgresDocsLayout
      title="Audit Logging for ML and RAG Operations"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          NeuronDB provides comprehensive audit logging for ML inference and RAG operations, enabling compliance monitoring, security analysis, and usage tracking.
        </p>
      </section>

      <section id="features">
        <h2>Features</h2>
        <ul>
          <li>Audit logging for ML model inference calls</li>
          <li>Audit logging for RAG retrieve/generate operations</li>
          <li>Configurable retention periods</li>
          <li>Query interface for audit logs</li>
          <li>Input/output hashing for integrity verification</li>
        </ul>
      </section>

      <section id="configuration">
        <h2>Configuration</h2>
        <p>Enable audit logging:</p>
        <SqlCodeBlock
          title="Enable audit logging"
          code={`-- Enable ML inference audit logging
SET neurondb.audit_ml_enabled = true;

-- Enable RAG operation audit logging
SET neurondb.audit_rag_enabled = true;

-- Set retention period (days)
SET neurondb.audit_retention_days = 365;`}
        />
      </section>

      <section id="ml-inference-audit-logging">
        <h2>ML Inference Audit Logging</h2>

        <h3>Automatic Logging</h3>
        <p>
          When <code>neurondb.audit_ml_enabled</code> is enabled, ML inference operations are automatically logged.
        </p>

        <h3>Manual Logging</h3>
        <SqlCodeBlock
          title="Log ML inference operation"
          code={`-- Log ML inference operation
SELECT log_ml_inference(
    model_id := 1,
    operation_type := 'predict',
    input_hash := encode(digest(input_data::text, 'sha256'), 'hex'),
    output_hash := encode(digest(output_data::text, 'sha256'), 'hex'),
    metadata := '{"batch_size": 100, "latency_ms": 45}'::jsonb
);`}
        />

        <h3>Querying ML Audit Logs</h3>
        <SqlCodeBlock
          title="Query ML inference audit logs"
          code={`-- Query ML inference audit logs
SELECT * FROM query_audit_log(
    'ml_inference',
    start_time := '2024-01-01'::timestamptz,
    end_time := '2024-12-31'::timestamptz,
    user_id := 'admin',
    operation_type := 'predict'
);`}
        />
      </section>

      <section id="rag-operation-audit-logging">
        <h2>RAG Operation Audit Logging</h2>

        <h3>Automatic Logging</h3>
        <p>
          When <code>neurondb.audit_rag_enabled</code> is enabled, RAG operations are automatically logged.
        </p>

        <h3>Manual Logging</h3>
        <SqlCodeBlock
          title="Log RAG operation"
          code={`-- Log RAG operation
SELECT log_rag_operation(
    pipeline_name := 'documents_rag',
    operation_type := 'retrieve',
    query_hash := encode(digest('What is machine learning?'::text, 'sha256'), 'hex'),
    result_count := 5,
    metadata := '{"k": 5, "rerank": true}'::jsonb
);`}
        />

        <h3>Querying RAG Audit Logs</h3>
        <SqlCodeBlock
          title="Query RAG operation audit logs"
          code={`-- Query RAG operation audit logs
SELECT * FROM query_audit_log(
    'rag_operation',
    start_time := '2024-01-01'::timestamptz,
    end_time := '2024-12-31'::timestamptz,
    user_id := 'user123',
    operation_type := 'generate'
);`}
        />
      </section>

      <section id="audit-log-schema">
        <h2>Audit Log Schema</h2>

        <h3>ML Inference Audit Log</h3>
        <SqlCodeBlock
          title="ML inference audit log table"
          code={`CREATE TABLE neurondb.ml_inference_audit_log (
    audit_id BIGSERIAL PRIMARY KEY,
    model_id INTEGER,
    operation_type TEXT NOT NULL,
    user_id TEXT DEFAULT CURRENT_USER,
    input_hash TEXT,
    output_hash TEXT,
    metadata JSONB,
    timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);`}
        />

        <h3>RAG Operation Audit Log</h3>
        <SqlCodeBlock
          title="RAG operation audit log table"
          code={`CREATE TABLE neurondb.rag_operation_audit_log (
    audit_id BIGSERIAL PRIMARY KEY,
    pipeline_name TEXT NOT NULL,
    operation_type TEXT NOT NULL,
    user_id TEXT DEFAULT CURRENT_USER,
    query_hash TEXT,
    result_count INTEGER DEFAULT 0,
    metadata JSONB,
    timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);`}
        />
      </section>

      <section id="compliance-considerations">
        <h2>Compliance Considerations</h2>

        <h3>GDPR</h3>
        <ul>
          <li>User IDs are logged for data access tracking</li>
          <li>Input/output hashes enable integrity verification without storing sensitive data</li>
          <li>Retention periods can be configured per compliance requirements</li>
        </ul>

        <h3>HIPAA</h3>
        <ul>
          <li>Audit logs track all access to PHI-related ML models</li>
          <li>Query hashes enable compliance reporting</li>
          <li>Timestamps enable audit trail reconstruction</li>
        </ul>

        <h3>SOC 2</h3>
        <ul>
          <li>Comprehensive logging of all ML/RAG operations</li>
          <li>User attribution for all operations</li>
          <li>Configurable retention for audit requirements</li>
        </ul>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <ol>
          <li>
            <strong>Retention Management:</strong> Regularly archive or delete old audit logs based on retention policies.
          </li>
          <li>
            <strong>Indexing:</strong> Audit tables are indexed for efficient querying. Monitor table sizes and partition if needed.
          </li>
          <li>
            <strong>Performance:</strong> Audit logging is asynchronous where possible to minimize impact on operations.
          </li>
          <li>
            <strong>Monitoring:</strong> Set up alerts for unusual patterns in audit logs (e.g., excessive access, failed operations).
          </li>
        </ol>

        <h3>Log Rotation</h3>
        <p>Audit logs should be periodically rotated or archived based on retention policies:</p>
        <SqlCodeBlock
          title="Delete logs older than retention period"
          code={`-- Delete logs older than retention period
DELETE FROM neurondb.ml_inference_audit_log
WHERE timestamp < CURRENT_TIMESTAMP - (neurondb.audit_retention_days || ' days')::interval;

DELETE FROM neurondb.rag_operation_audit_log
WHERE timestamp < CURRENT_TIMESTAMP - (neurondb.audit_retention_days || ' days')::interval;`}
        />
      </section>

      <section>
        <h2>Related Topics</h2>
        <ul>
          <li><a href="/docs/neurondb/security">Security Overview</a></li>
          <li><a href="/docs/neurondb/security/rls-embeddings">RLS for Embeddings</a></li>
          <li><a href="/docs/neurondb/security/field-encryption">Field-Level Encryption</a></li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
