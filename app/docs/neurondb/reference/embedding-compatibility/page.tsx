import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'Embedding Compatibility Guide | NeuronDB Vector Dimensions and Performance',
  description: 'Vector dimensions, storage layout, memory behavior, and performance characteristics for different embedding models. Compatibility guide for OpenAI, sentence-transformers, and multilingual models.',
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondb/reference/embedding-compatibility',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'supported-dimensions', title: 'Supported Vector Dimensions' },
  { id: 'common-models', title: 'Common Embedding Models' },
  { id: 'storage-layout', title: 'Storage Layout' },
  { id: 'memory-behavior', title: 'Memory Behavior' },
  { id: 'limits-performance', title: 'Limits and Performance' },
  { id: 'migration', title: 'Migration Between Models' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/reference/data-types',
  label: 'Data Types Reference',
}

const nextLink: NavLink = {
  href: '/docs/neurondb/reference/glossary',
  label: 'Glossary',
}

export default function EmbeddingCompatibilityPage() {
  return (
    <PostgresDocsLayout
      title="Embedding Compatibility Guide"
      version="NeuronDB Reference"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          This guide covers embedding compatibility, storage, and performance. Use it to plan your vector dimensions and storage requirements.
        </p>
        <p>
          NeuronDB supports vector dimensions from <strong>1 to 16,000</strong> dimensions.
        </p>
      </section>

      <section id="supported-dimensions">
        <h2>Supported Vector Dimensions</h2>

        <h3>Standard Dimensions</h3>
        <p>NeuronDB supports vector dimensions from 1 to 16,000 dimensions.</p>

        <h3>Dimension Limits</h3>
        <ul>
          <li><strong>Minimum:</strong> 1 dimension</li>
          <li><strong>Maximum:</strong> 16,000 dimensions</li>
          <li><strong>Recommended:</strong> 128-4096 dimensions for optimal performance</li>
          <li><strong>Performance impact:</strong> Higher dimensions = slower queries, more memory</li>
        </ul>
      </section>

      <section id="common-models">
        <h2>Common Embedding Models</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Model</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Dimensions</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>all-MiniLM-L6-v2</code></td>
              <td style={{ padding: '0.75rem' }}>384</td>
              <td style={{ padding: '0.75rem' }}>Fast, general-purpose</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>all-mpnet-base-v2</code></td>
              <td style={{ padding: '0.75rem' }}>768</td>
              <td style={{ padding: '0.75rem' }}>Higher quality, general-purpose</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>text-embedding-ada-002</code></td>
              <td style={{ padding: '0.75rem' }}>1536</td>
              <td style={{ padding: '0.75rem' }}>OpenAI embeddings</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>text-embedding-3-small</code></td>
              <td style={{ padding: '0.75rem' }}>1536</td>
              <td style={{ padding: '0.75rem' }}>OpenAI (small)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>text-embedding-3-large</code></td>
              <td style={{ padding: '0.75rem' }}>3072</td>
              <td style={{ padding: '0.75rem' }}>OpenAI (large)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>multilingual-e5-base</code></td>
              <td style={{ padding: '0.75rem' }}>768</td>
              <td style={{ padding: '0.75rem' }}>Multilingual</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}><code>paraphrase-multilingual-mpnet-base-v2</code></td>
              <td style={{ padding: '0.75rem' }}>768</td>
              <td style={{ padding: '0.75rem' }}>Multilingual</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="storage-layout">
        <h2>Storage Layout</h2>

        <h3>Vector Type Storage</h3>
        <p><strong><code>vector(n)</code> type:</strong></p>
        <ul>
          <li><strong>Storage:</strong> 4 bytes per dimension (float32)</li>
          <li><strong>Overhead:</strong> 8 bytes header (dimension count + padding)</li>
          <li><strong>Total size:</strong> <code>8 + (n * 4)</code> bytes per vector</li>
        </ul>

        <h3>Example Sizes</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Dimensions</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Size per Vector</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>128</td>
              <td style={{ padding: '0.75rem' }}>520 bytes</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>384</td>
              <td style={{ padding: '0.75rem' }}>1,544 bytes</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>768</td>
              <td style={{ padding: '0.75rem' }}>3,080 bytes</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}>1536</td>
              <td style={{ padding: '0.75rem' }}>6,152 bytes</td>
            </tr>
          </tbody>
        </table>

        <h3>TOAST Behavior</h3>
        <p>PostgreSQL automatically uses TOAST for large values:</p>
        <ul>
          <li><strong>Inline storage:</strong> Vectors &lt; 2KB (512 dimensions)</li>
          <li><strong>Extended storage:</strong> Vectors ≥ 2KB (512+ dimensions)</li>
          <li><strong>Compression:</strong> Enabled by default for extended storage</li>
        </ul>
      </section>

      <section id="memory-behavior">
        <h2>Memory Behavior</h2>

        <h3>Per-Vector Memory</h3>
        <p><strong>Storage size:</strong></p>
        <ul>
          <li>On-disk: <code>8 + (n * 4)</code> bytes</li>
          <li>In-memory: <code>8 + (n * 4)</code> bytes (plus PostgreSQL tuple overhead)</li>
        </ul>
        <p><strong>Example for 1M vectors (768 dims):</strong></p>
        <ul>
          <li>On-disk: ~3.08 GB</li>
          <li>In-memory: ~3.08 GB (plus ~10% overhead) = ~3.4 GB</li>
        </ul>

        <h3>Index Memory</h3>
        <p><strong>HNSW index:</strong></p>
        <ul>
          <li>Memory: ~3-4x vector data size</li>
          <li>Example: 3.4 GB vectors → ~10-14 GB index memory</li>
        </ul>
        <p><strong>IVF index:</strong></p>
        <ul>
          <li>Memory: ~1.5-2x vector data size</li>
          <li>Example: 3.4 GB vectors → ~5-7 GB index memory</li>
        </ul>
      </section>

      <section id="limits-performance">
        <h2>Limits and Performance</h2>

        <h3>Hard Limits</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Limit</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>Max dimensions</td>
              <td style={{ padding: '0.75rem' }}>16,000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>Max vectors per table</td>
              <td style={{ padding: '0.75rem' }}>Unlimited (billions)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>Max index size</td>
              <td style={{ padding: '0.75rem' }}>~2TB</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}>Recommended max batch size</td>
              <td style={{ padding: '0.75rem' }}>10,000</td>
            </tr>
          </tbody>
        </table>

        <h3>Performance Thresholds</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Dimensions</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Performance</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Approx QPS</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>&lt; 128</td>
              <td style={{ padding: '0.75rem' }}>Very fast</td>
              <td style={{ padding: '0.75rem' }}>1,200-1,500</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>128-512</td>
              <td style={{ padding: '0.75rem' }}>Fast</td>
              <td style={{ padding: '0.75rem' }}>800-1,000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>512-1024</td>
              <td style={{ padding: '0.75rem' }}>Moderate</td>
              <td style={{ padding: '0.75rem' }}>500-700</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}>&gt; 2048</td>
              <td style={{ padding: '0.75rem' }}>Slow</td>
              <td style={{ padding: '0.75rem' }}>300-400</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="migration">
        <h2>Migration Between Embedding Models</h2>

        <h3>Changing Dimensions</h3>
        <p><strong>Scenario:</strong> Migrating from 384-dim to 768-dim embeddings.</p>
        <p><strong>Steps:</strong></p>
        <ol>
          <li>Add new column with new dimension</li>
          <li>Generate new embeddings for existing data</li>
          <li>Rebuild indexes</li>
          <li>Update queries to use new column</li>
          <li>Drop old column when ready</li>
        </ol>

        <h3>Best Practices</h3>
        <ul>
          <li>Plan dimension changes during low-traffic periods</li>
          <li>Test migration on a subset of data first</li>
          <li>Keep old embeddings until new ones are verified</li>
          <li>Monitor query performance after migration</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
