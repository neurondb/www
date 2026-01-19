import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'

export const metadata: Metadata = {
  title: 'Field-Level Encryption for Vectors | NeuronDB',
  description: 'Field-level encryption for sensitive vector data and metadata in NeuronDB using AES-256-GCM encryption, ensuring data confidentiality at rest.',
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'features', title: 'Features' },
  { id: 'prerequisites', title: 'Prerequisites' },
  { id: 'configuration', title: 'Configuration' },
  { id: 'usage', title: 'Usage' },
  { id: 'storage-format', title: 'Storage Format' },
  { id: 'security-considerations', title: 'Security Considerations' },
  { id: 'limitations', title: 'Limitations' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/security/rls-embeddings',
  label: 'RLS for Embeddings',
}

const nextLink: NavLink = {
  href: '/docs/neurondb/security/audit-logging',
  label: 'Audit Logging',
}


export default function FieldEncryptionPage() {
  return (
    <PostgresDocsLayout
      title="Field-Level Encryption for Vectors"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          NeuronDB provides field-level encryption for sensitive vector data and metadata using AES-256-GCM encryption. This ensures data confidentiality at rest while maintaining query capabilities.
        </p>
      </section>

      <section id="features">
        <h2>Features</h2>
        <ul>
          <li>AES-256-GCM encryption for vectors at rest</li>
          <li>Transparent encryption/decryption using SQL functions</li>
          <li>Support for per-column encryption keys</li>
          <li>Key rotation capabilities</li>
        </ul>
      </section>

      <section id="prerequisites">
        <h2>Prerequisites</h2>
        <p>
          Field-level encryption requires OpenSSL support in the PostgreSQL build. The encryption functions use OpenSSL&apos;s EVP API for AES-256-GCM.
        </p>
      </section>

      <section id="configuration">
        <h2>Configuration</h2>
        <p>Enable encryption:</p>
        <SqlCodeBlock
          title="Enable field-level encryption"
          code={`SET neurondb.encryption_enabled = true;`}
        />
      </section>

      <section id="usage">
        <h2>Usage</h2>

        <h3>Encrypting Vectors</h3>
        <SqlCodeBlock
          title="Encrypt a vector column"
          code={`-- Encrypt a vector column
CREATE TABLE sensitive_documents (
    id SERIAL PRIMARY KEY,
    content TEXT,
    embedding vector(384),
    encrypted_embedding bytea
);

-- Insert with encryption
INSERT INTO sensitive_documents (content, encrypted_embedding)
VALUES (
    'Sensitive content',
    encrypt_vector(
        '[0.1, 0.2, 0.3, ...]'::vector(384),
        'my-encryption-key-12345'
    )
);`}
        />

        <h3>Decrypting Vectors</h3>
        <SqlCodeBlock
          title="Decrypt for use in queries"
          code={`-- Decrypt for use in queries
SELECT 
    id,
    content,
    decrypt_vector(encrypted_embedding, 'my-encryption-key-12345') AS embedding
FROM sensitive_documents;`}
        />

        <h3>Key Rotation</h3>
        <SqlCodeBlock
          title="Rotate encryption key for a column"
          code={`-- Rotate encryption key for a column
SELECT rotate_encryption_key(
    'sensitive_documents',
    'encrypted_embedding',
    'old-encryption-key',
    'new-encryption-key'
);`}
        />
      </section>

      <section id="storage-format">
        <h2>Storage Format</h2>
        <p>
          Encrypted vectors are stored as BYTEA containing the <code>EncryptedVector</code> structure:
        </p>
        <ul>
          <li>Encryption IV (12 bytes)</li>
          <li>Authentication tag (16 bytes)</li>
          <li>Dimension information</li>
          <li>Encrypted ciphertext</li>
        </ul>
      </section>

      <section id="security-considerations">
        <h2>Security Considerations</h2>
        <ol>
          <li>
            <strong>Key Management:</strong> Store encryption keys securely. Consider using PostgreSQL&apos;s key management extensions or external key management systems.
          </li>
          <li>
            <strong>Performance:</strong> Encryption/decryption adds latency. Use encryption selectively for sensitive data only.
          </li>
          <li>
            <strong>Key Rotation:</strong> Regularly rotate encryption keys for enhanced security.
          </li>
          <li>
            <strong>Backup:</strong> Encrypted data in backups remains encrypted. Ensure backup keys are also securely managed.
          </li>
        </ol>
      </section>

      <section id="limitations">
        <h2>Limitations</h2>
        <ul>
          <li>Encrypted vectors cannot be used directly in vector similarity searches. Decrypt before querying.</li>
          <li>Key management is the responsibility of the database administrator.</li>
          <li>Encryption functions require OpenSSL support.</li>
        </ul>
      </section>

      <section>
        <h2>Related Topics</h2>
        <ul>
          <li><a href="/docs/neurondb/security">Security Overview</a></li>
          <li><a href="/docs/neurondb/security/rls-embeddings">RLS for Embeddings</a></li>
          <li><a href="/docs/neurondb/security/audit-logging">Audit Logging</a></li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
