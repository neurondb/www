import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'

export const metadata: Metadata = {
  title: 'Security Best Practices | NeuronDB',
  description: 'Security guidelines, access control, and best practices for securing NeuronDB vector database deployments.',
}

const tableOfContents: TocItem[] = [
  { id: 'api-keys', title: 'API Key and Credentials Management' },
  { id: 'access-control', title: 'Access Control and Permissions' },
  { id: 'network-security', title: 'Network Security' },
  { id: 'data-protection', title: 'Data Protection' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/performance',
  label: 'Performance',
}

const nextLink: NavLink | undefined = undefined

export default function SecurityPage() {
  return (
    <PostgresDocsLayout
      title="Security Best Practices"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="api-keys">
        <h2>API Key and Credentials Management</h2>
        <p><strong>Critical:</strong> Never store API keys in application code or version control. LLM API keys (OpenAI, Cohere, etc.) grant access to paid services and should be treated as sensitive credentials.</p>

        <h3>Recommended: Use Database-Level Settings</h3>
        <p>Configure API keys at the database or role level, not in individual sessions or application code.</p>
        <SqlCodeBlock
          title="Database-level configuration"
          code={`-- Database-level configuration (persists across sessions)
ALTER DATABASE mydb SET neurondb.llm_api_key = 'sk-...';
ALTER DATABASE mydb SET neurondb.llm_provider = 'openai';

-- Role-level configuration (applies to specific users)
ALTER ROLE app_user SET neurondb.llm_api_key = 'sk-...';

-- Verify settings without exposing the key
SELECT name, setting 
FROM pg_settings 
WHERE name = 'neurondb.llm_provider';`}
        />

        <h3>Best Practice: Environment Variables and Secrets Managers</h3>
        <p>For production deployments, use environment variables or secrets managers (AWS Secrets Manager, HashiCorp Vault, etc.).</p>
        <SqlCodeBlock
          title="Environment variables"
          code={`-- In postgresql.conf or postgresql.auto.conf
neurondb.llm_api_key = '$OPENAI_API_KEY'
neurondb.llm_provider = 'openai'

-- Or use ALTER SYSTEM (requires superuser)
ALTER SYSTEM SET neurondb.llm_api_key = 'sk-...';
SELECT pg_reload_conf();`}
        />

        <h3>Security Tip: Rotate API Keys Regularly</h3>
        <ul>
          <li>Rotate LLM API keys every 90 days or per organizational policy</li>
          <li>Use separate API keys for development, staging, and production</li>
          <li>Monitor API usage for anomalies (unexpected spikes, geographic locations)</li>
          <li>Revoke compromised keys immediately and update configuration</li>
        </ul>
      </section>

      <section id="access-control">
        <h2>Access Control and Permissions</h2>

        <h3>Principle of Least Privilege</h3>
        <p>Grant users only the permissions they need. Separate read-only and write roles for embedding functions and ML operations.</p>
        <SqlCodeBlock
          title="Role-based access"
          code={`-- Read-only role for querying embeddings
CREATE ROLE reader_role;
GRANT SELECT ON documents TO reader_role;
GRANT EXECUTE ON FUNCTION neurondb_embed(text, text) TO reader_role;

-- Write role for inserting/updating embeddings
CREATE ROLE writer_role;
GRANT SELECT, INSERT, UPDATE ON documents TO writer_role;
GRANT EXECUTE ON FUNCTION neurondb_embed(text, text) TO writer_role;
GRANT EXECUTE ON FUNCTION neurondb_embed_batch(text[], text) TO writer_role;

-- Admin role for ML operations
CREATE ROLE admin_role;
GRANT ALL ON documents TO admin_role;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA neurondb TO admin_role;`}
        />
      </section>

      <section id="network-security">
        <h2>Network Security</h2>
        <ul>
          <li>Use SSL/TLS for all PostgreSQL connections</li>
          <li>Restrict network access using firewall rules</li>
          <li>Use VPN or private networks for production deployments</li>
          <li>Enable pg_hba.conf restrictions for remote access</li>
        </ul>
      </section>

      <section id="data-protection">
        <h2>Data Protection</h2>
        <p>NeuronDB provides comprehensive data protection features:</p>
        <ul>
          <li><strong>Vector Encryption:</strong> AES-GCM encryption for vector data via OpenSSL</li>
          <li><strong>Differential Privacy:</strong> Privacy-preserving embedding operations</li>
          <li><strong>Row-Level Security (RLS):</strong> Integrated RLS policies via <code>neurondb.rls_policies</code> table for multi-tenant deployments</li>
          <li><strong>Multi-Tenant Isolation:</strong> Tenant-aware indexes and quota management via <code>neurondb.tenant_quotas</code></li>
          <li><strong>HMAC-SHA256:</strong> Signed results for tamper detection</li>
          <li><strong>Audit Logging:</strong> Comprehensive audit logging with tamper detection for sensitive operations</li>
          <li><strong>Usage Metering:</strong> Track resource usage per tenant for governance</li>
          <li><strong>GDPR Compliance:</strong> GDPR-compliant data handling and encryption</li>
          <li><strong>Post-Quantum Encryption:</strong> Support for post-quantum cryptography via <code>encrypt_postquantum()</code></li>
          <li><strong>Confidential Compute:</strong> Enable confidential computing features via <code>enable_confidential_compute()</code></li>
          <li><strong>Regular Backups:</strong> Encrypted backups with point-in-time recovery</li>
        </ul>
        
        <h3>Multi-Tenancy Security</h3>
        <SqlCodeBlock
          title="Configure tenant quotas and RLS policies"
          code={`-- Create tenant quota limits
INSERT INTO neurondb.tenant_quotas (tenant_id, max_vectors, max_memory_mb, max_qps)
VALUES ('tenant_1', 1000000, 8192, 1000);

-- Create RLS policy
SELECT neurondb.create_policy(
  'documents',
  'tenant_isolation',
  'tenant_id = current_setting(\'app.current_tenant\')'
);

-- Monitor tenant usage
SELECT * FROM neurondb.tenant_quota_usage WHERE warnings IS NOT NULL;`}
        />
      </section>

      <section>
        <h2>Next Steps</h2>
        <ul>
          <li><a href="/docs/neurondb/configuration">Configuration Reference</a> - Security-related GUC parameters</li>
          <li><a href="/docs/neurondb/troubleshooting">Troubleshooting</a> - Security-related issues</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
