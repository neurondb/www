import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'

export const metadata: Metadata = {
  title: 'Data Types Reference | NeuronDB Vector Types and Structures',
  description: 'Complete reference for all data types in NeuronDB including vector, halfvec, sparsevec, binaryvec, and internal C structures. Memory layout, type casting rules, and quantization formats.',
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondb/reference/data-types',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'vector-types', title: 'Vector Types' },
  { id: 'internal-structures', title: 'Internal C Structures' },
  { id: 'type-storage', title: 'Type Storage Formats' },
  { id: 'type-casting', title: 'Type Casting Rules' },
  { id: 'memory-layout', title: 'Memory Layout' },
  { id: 'quantization', title: 'Quantization Formats' },
]

const prevLink: NavLink | undefined = undefined

const nextLink: NavLink = {
  href: '/docs/neurondb/reference/embedding-compatibility',
  label: 'Embedding Compatibility',
}

export default function DataTypesPage() {
  return (
    <PostgresDocsLayout
      title="Data Types Reference"
      version="NeuronDB Reference"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          Complete reference for all data types, internal structures, and type system in NeuronDB.
        </p>
        <p>
          <strong>PostgreSQL Compatibility:</strong> 16, 17, 18
        </p>
      </section>

      <section id="vector-types">
        <h2>Vector Types</h2>

        <h3>vector</h3>
        <p>
          <strong>PostgreSQL Type:</strong> <code>vector</code><br />
          <strong>C Structure:</strong> <code>Vector</code><br />
          <strong>Storage:</strong> Extended (varlena)<br />
          <strong>Base Type:</strong> Float32 (4 bytes per dimension)
        </p>
        <p>
          The main vector type in NeuronDB. It uses float32 precision. This is the primary type for storing embeddings and performing vector operations.
        </p>
        <p><strong>Limits:</strong></p>
        <ul>
          <li>Maximum Dimensions: 16,000</li>
          <li>Minimum Dimensions: 1</li>
          <li>Storage Overhead: 8 bytes (header + dimension)</li>
        </ul>
        <SqlCodeBlock
          title="Example usage"
          code={`-- Create a vector
SELECT '[1.0, 2.0, 3.0]'::vector;

-- Create with dimension constraint
CREATE TABLE embeddings (
    id SERIAL PRIMARY KEY,
    embedding vector(384)  -- Fixed 384 dimensions
);

-- Insert vector
INSERT INTO embeddings (embedding) VALUES ('[0.1, 0.2, 0.3]'::vector);`}
        />

        <h3>halfvec</h3>
        <p>
          <strong>PostgreSQL Type:</strong> <code>halfvec</code><br />
          <strong>C Structure:</strong> <code>VectorF16</code><br />
          <strong>Base Type:</strong> Float16 (2 bytes per dimension)
        </p>
        <p>
          Half-precision vector type providing 2x compression. Uses IEEE 754 half-precision floating point format.
        </p>
        <p><strong>Limits:</strong></p>
        <ul>
          <li>Maximum Dimensions: 4,000</li>
          <li>Compression Ratio: 2x (compared to vector)</li>
          <li>Precision: ~3 decimal digits</li>
        </ul>
        <SqlCodeBlock
          title="Example usage"
          code={`-- Convert vector to halfvec
SELECT vector_to_halfvec('[1.0, 2.0, 3.0]'::vector);

-- Cast between types
SELECT '[1.0, 2.0, 3.0]'::vector::halfvec;

-- Create table with halfvec
CREATE TABLE embeddings_fp16 (
    id SERIAL PRIMARY KEY,
    embedding halfvec(384)
);`}
        />

        <h3>sparsevec</h3>
        <p>
          <strong>PostgreSQL Type:</strong> <code>sparsevec</code><br />
          <strong>C Structure:</strong> <code>SparseVector</code><br />
          <strong>Base Type:</strong> Sparse representation
        </p>
        <p>
          Sparse vector type storing only non-zero values. Optimized for high-dimensional vectors with many zeros.
        </p>
        <p><strong>Limits:</strong></p>
        <ul>
          <li>Maximum Non-Zero Entries: 1,000</li>
          <li>Maximum Dimensions: 1,000,000</li>
          <li>Model Types: BM25 (0), SPLADE (1), ColBERTv2 (2)</li>
        </ul>

        <h3>binaryvec</h3>
        <p>
          <strong>PostgreSQL Type:</strong> <code>binaryvec</code><br />
          <strong>Base Type:</strong> Binary (1 bit per dimension)
        </p>
        <p>
          Binary vector type for 32x compression using Hamming distance.
        </p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Compression Ratio: 32x (compared to vector)</li>
          <li>Distance Metric: Hamming distance only</li>
        </ul>
      </section>

      <section id="internal-structures">
        <h2>Internal C Structures</h2>

        <h3>Vector Structure</h3>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto' }}>
{`typedef struct Vector {
    int32  vl_len_;     /* varlena header (required) */
    int16  dim;         /* number of dimensions */
    int16  unused;      /* padding for alignment */
    float4 data[FLEXIBLE_ARRAY_MEMBER];  /* vector data */
} Vector;`}
        </pre>

        <h3>Memory Layout</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Offset</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Size</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Field</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>0</td>
              <td style={{ padding: '0.75rem' }}>4</td>
              <td style={{ padding: '0.75rem' }}>vl_len_ (varlena header)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>4</td>
              <td style={{ padding: '0.75rem' }}>2</td>
              <td style={{ padding: '0.75rem' }}>dim (dimension count)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>6</td>
              <td style={{ padding: '0.75rem' }}>2</td>
              <td style={{ padding: '0.75rem' }}>unused (padding)</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}>8</td>
              <td style={{ padding: '0.75rem' }}>4*dim</td>
              <td style={{ padding: '0.75rem' }}>data[] (float32 array)</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Total Size:</strong> <code>offsetof(Vector, data) + sizeof(float4) * dim</code></p>
      </section>

      <section id="type-storage">
        <h2>Type Storage Formats</h2>

        <h3>Storage Size Calculation</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Type</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Bytes per Dimension</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Overhead</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>vector</code></td>
              <td style={{ padding: '0.75rem' }}>4</td>
              <td style={{ padding: '0.75rem' }}>8 bytes</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>halfvec</code></td>
              <td style={{ padding: '0.75rem' }}>2</td>
              <td style={{ padding: '0.75rem' }}>8 bytes</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>sparsevec</code></td>
              <td style={{ padding: '0.75rem' }}>Variable</td>
              <td style={{ padding: '0.75rem' }}>16 bytes</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}><code>binaryvec</code></td>
              <td style={{ padding: '0.75rem' }}>0.125 (1 bit)</td>
              <td style={{ padding: '0.75rem' }}>8 bytes</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="type-casting">
        <h2>Type Casting Rules</h2>

        <h3>Implicit Casts</h3>
        <ul>
          <li><code>vector</code> → <code>halfvec</code> (implicit)</li>
          <li><code>vector</code> → <code>sparsevec</code> (explicit only)</li>
        </ul>

        <h3>Explicit Casts</h3>
        <SqlCodeBlock
          title="Type casting examples"
          code={`-- Vector to halfvec
SELECT '[1.0, 2.0, 3.0]'::vector::halfvec;

-- Vector to sparsevec
SELECT vector_to_sparsevec('[0, 0, 1.5, 0]'::vector);

-- Vector to binary
SELECT vector_to_binary('[1.0, -1.0, 0.5]'::vector);`}
        />
      </section>

      <section id="memory-layout">
        <h2>Memory Layout</h2>

        <h3>In-Memory Representation</h3>
        <ul>
          <li>Vectors stored as contiguous float32 arrays</li>
          <li>Aligned to 8-byte boundaries for SIMD operations</li>
          <li>GPU transfers use same layout (zero-copy when possible)</li>
        </ul>

        <h3>TOAST Behavior</h3>
        <p>PostgreSQL automatically uses TOAST for large values:</p>
        <ul>
          <li><strong>Inline storage:</strong> Vectors &lt; 2KB (512 dimensions)</li>
          <li><strong>Extended storage:</strong> Vectors ≥ 2KB (512+ dimensions)</li>
          <li><strong>Compression:</strong> Enabled by default for extended storage</li>
        </ul>
      </section>

      <section id="quantization">
        <h2>Quantization Formats</h2>

        <h3>Quantization Types</h3>
        <ul>
          <li><strong>Scalar Quantization:</strong> int8, uint8 (4x compression)</li>
          <li><strong>Product Quantization (PQ):</strong> 8x-16x compression</li>
          <li><strong>Binary Quantization:</strong> 32x compression (Hamming distance)</li>
          <li><strong>Ternary Quantization:</strong> 16x compression</li>
        </ul>

        <h3>When to Use Quantization</h3>
        <ul>
          <li>Large datasets where storage is a concern</li>
          <li>Read-heavy workloads</li>
          <li>Acceptable precision loss for speed/storage trade-offs</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
