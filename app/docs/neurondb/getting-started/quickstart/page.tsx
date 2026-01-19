import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'NeuronDB Quick Start Guide | PostgreSQL AI Vector Extension',
  description: 'Get up and running with NeuronDB quickly. Create your first vector table, generate embeddings, create indexes, and perform semantic search.',
}

const tableOfContents: TocItem[] = [
  { id: 'prerequisites', title: 'Prerequisites' },
  { id: 'step-1', title: 'Step 1: Install NeuronDB' },
  { id: 'step-2', title: 'Step 2: Load Quickstart Data Pack' },
  { id: 'step-3', title: 'Step 3: Try SQL Recipes' },
  { id: 'understanding', title: 'Understanding the Results' },
  { id: 'next-steps', title: 'Next Steps' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/getting-started',
  label: 'Getting Started',
}

const nextLink: NavLink = {
  href: '/docs/neurondb/features/vector-types',
  label: 'Vector Types',
}

export default function QuickStartPage() {
  return (
    <PostgresDocsLayout
      title="Quick Start Guide"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="prerequisites">
        <h2>Prerequisites</h2>
        <p>
          <strong>💡 New to NeuronDB?</strong> For the fastest setup, use the{' '}
          <a href="/docs/neurondb/getting-started/docker">Docker Quick Start</a> which sets up the complete ecosystem (NeuronDB + NeuronAgent + NeuronMCP + NeuronDesktop) in 5 minutes.
        </p>
        <p>Before you begin, make sure you have:</p>
        <ul>
          <li>✅ <strong>NeuronDB installed</strong> - See <a href="/docs/neurondb/installation">Installation Guide</a> for setup instructions</li>
          <li>✅ <strong>PostgreSQL client</strong> - <code>psql</code> (or any SQL client)</li>
          <li>✅ <strong>5-10 minutes</strong> - For complete quickstart</li>
        </ul>

        <details>
          <summary style={{ cursor: 'pointer', color: '#fbbf24', marginTop: '1rem', marginBottom: '1rem' }}>
            <strong>🔍 Verify Prerequisites</strong>
          </summary>
          <BashCodeBlock
            title="Check prerequisites"
            code={`# Check if psql is installed
psql --version

# Check if Docker is installed (if using Docker)
docker --version
docker compose version`}
          />
        </details>
      </section>

      <section id="step-1">
        <h2>Step 1: Install NeuronDB</h2>
        <p>If you haven&apos;t installed NeuronDB yet, choose your method:</p>

        <h3>Option A: Docker Compose (Recommended for Quick Start) 🐳</h3>
        <p><strong>Fastest way to get started:</strong></p>
        <BashCodeBlock
          title="Start NeuronDB with Docker"
          code={`# From repository root
docker compose up -d neurondb

# Wait for service to be healthy (30-60 seconds)
docker compose ps neurondb`}
        />
        <p><strong>Expected output:</strong></p>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto', marginTop: '0.5rem' }}>
{`NAME                STATUS
neurondb-cpu        healthy`}
        </pre>
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '0.5rem' }}>
          <p style={{ margin: 0 }}>
            <strong>📝 Note:</strong> Docker starts a PostgreSQL container with NeuronDB pre-installed. The first run takes 2 to 5 minutes to download images.
          </p>
        </div>

        <h3>Option B: Native Installation 🔧</h3>
        <p>
          <strong>For production or custom setups:</strong> Follow the detailed <a href="/docs/neurondb/installation">Installation Guide</a> for native PostgreSQL installation.
        </p>

        <h3>✅ Verify Installation</h3>
        <p><strong>Test NeuronDB installation:</strong></p>
        <BashCodeBlock
          title="Verify installation"
          code={`# With Docker Compose
docker compose exec neurondb psql -U neurondb -d neurondb -c "CREATE EXTENSION IF NOT EXISTS neurondb;"

# Or with native PostgreSQL
psql -d your_database -c "CREATE EXTENSION IF NOT EXISTS neurondb;"

# Check the version
docker compose exec neurondb psql -U neurondb -d neurondb -c "SELECT neurondb.version();"
# Or: psql -d your_database -c "SELECT neurondb.version();"`}
        />
        <p><strong>Expected output:</strong></p>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto', marginTop: '0.5rem' }}>
{` version
---------
 3.0
(1 row)`}
        </pre>
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '0.5rem' }}>
          <p style={{ margin: 0 }}>
            <strong>✅ Success!</strong> If you see version <code>3.0</code> or similar, NeuronDB is installed and working correctly.
          </p>
        </div>
      </section>

      <section id="step-2">
        <h2>Step 2: Load Quickstart Data Pack</h2>
        <p>
          The quickstart data pack provides <strong>~500 sample documents</strong> with pre-generated embeddings, ready for immediate use.
        </p>

        <details>
          <summary style={{ cursor: 'pointer', color: '#fbbf24', marginTop: '1rem', marginBottom: '1rem' }}>
            <strong>📚 What&apos;s in the Data Pack?</strong>
          </summary>
          <ul>
            <li><strong>~500 documents</strong> - Sample text documents</li>
            <li><strong>Pre-generated embeddings</strong> - Vector representations (384 dimensions)</li>
            <li><strong>HNSW index</strong> - Pre-built index for fast search</li>
            <li><strong>Ready to query</strong> - No setup required</li>
          </ul>
        </details>

        <h3>Option 1: Using the CLI (Recommended) 🚀</h3>
        <p><strong>Easiest method - handles everything automatically:</strong></p>
        <BashCodeBlock
          title="Load quickstart data with CLI"
          code={`# From repository root
./scripts/neurondb-cli.sh quickstart`}
        />
        <p><strong>What it does:</strong></p>
        <ol>
          <li>Creates the <code>quickstart_documents</code> table</li>
          <li>Loads ~500 sample documents</li>
          <li>Creates HNSW index</li>
          <li>Verifies data is loaded</li>
        </ol>

        <h3>Option 2: Using the Loader Script 📝</h3>
        <p><strong>Manual control over the process:</strong></p>
        <BashCodeBlock
          title="Load with script"
          code={`# From repository root
./examples/quickstart/load_quickstart.sh`}
        />

        <h3>Option 3: Using psql Directly 💻</h3>
        <p><strong>For maximum control:</strong></p>
        <BashCodeBlock
          title="Load with psql"
          code={`# With Docker Compose
docker compose exec neurondb psql -U neurondb -d neurondb -f examples/quickstart/quickstart_data.sql

# Or with native PostgreSQL
psql -d your_database -f examples/quickstart/quickstart_data.sql`}
        />

        <h3>✅ Verify Data Loaded</h3>
        <p><strong>Check that data was loaded successfully:</strong></p>
        <BashCodeBlock
          title="Verify data"
          code={`# Count documents
psql "postgresql://neurondb:neurondb@localhost:5433/neurondb" -c "SELECT COUNT(*) FROM quickstart_documents;"`}
        />
        <p><strong>Expected output:</strong></p>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto', marginTop: '0.5rem' }}>
{` count
-------
   500
(1 row)`}
        </pre>
        <p><strong>Check table structure:</strong></p>
        <SqlCodeBlock
          title="Check table structure"
          code={`\\d quickstart_documents`}
        />
        <p><strong>Expected columns:</strong></p>
        <ul>
          <li><code>id</code> - Document ID</li>
          <li><code>title</code> - Document title</li>
          <li><code>content</code> - Document content</li>
          <li><code>embedding</code> - Vector embedding (384 dimensions)</li>
        </ul>
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '0.5rem' }}>
          <p style={{ margin: 0 }}>
            <strong>✅ Perfect!</strong> Your data is loaded and ready to query.
          </p>
        </div>
      </section>

      <section id="step-3">
        <h2>Step 3: Try SQL Recipes</h2>
        <p>
          The SQL recipe library provides <strong>ready-to-run queries</strong> for common operations.
        </p>

        <h3>Example 1: Basic Similarity Search 🎯</h3>
        <p><strong>Find documents similar to a specific document:</strong></p>
        <SqlCodeBlock
          title="Similarity search"
          code={`-- Find documents similar to document #1
SELECT 
    id,
    title,
    embedding <=> (SELECT embedding FROM quickstart_documents WHERE id = 1) AS distance
FROM quickstart_documents
WHERE id != 1
ORDER BY embedding <=> (SELECT embedding FROM quickstart_documents WHERE id = 1)
LIMIT 10;`}
        />
        <p><strong>What this does:</strong></p>
        <ol>
          <li>Gets embedding of document #1</li>
          <li>Calculates cosine distance to all other documents</li>
          <li>Returns top 10 most similar documents</li>
        </ol>
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '0.5rem' }}>
          <p style={{ margin: 0 }}>
            <strong>📝 Understanding distance:</strong> Lower distance = more similar. Cosine distance ranges from 0 (identical) to 2 (opposite).
          </p>
        </div>

        <h3>Example 2: Query with Text Embedding 🔤</h3>
        <p><strong>Search using a text query:</strong></p>
        <SqlCodeBlock
          title="Text embedding search"
          code={`-- Generate embedding for query text
WITH query AS (
  SELECT embed_text('machine learning algorithms', 'all-MiniLM-L6-v2') AS q_vec
)
-- Find similar documents
SELECT 
    id,
    title,
    embedding <=> q.q_vec AS distance
FROM quickstart_documents, query q
ORDER BY embedding <=> q.q_vec
LIMIT 10;`}
        />
        <p><strong>What this does:</strong></p>
        <ol>
          <li>Generates embedding for &quot;machine learning algorithms&quot;</li>
          <li>Searches for documents with similar embeddings</li>
          <li>Returns top 10 results</li>
        </ol>
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '0.5rem' }}>
          <p style={{ margin: 0 }}>
            <strong>💡 Embedding models:</strong> The <code>all-MiniLM-L6-v2</code> model is fast and works well for general text. See embedding models documentation for more options.
          </p>
        </div>

        <h3>Example 3: Hybrid Search (Vector + Full-Text) 🔗</h3>
        <p><strong>Combine vector similarity with PostgreSQL full-text search:</strong></p>
        <SqlCodeBlock
          title="Hybrid search"
          code={`-- Hybrid search: vector + full-text
WITH query AS (
  SELECT 
    embed_text('machine learning', 'all-MiniLM-L6-v2') AS q_vec,
    to_tsquery('english', 'machine & learning') AS q_tsquery
)
SELECT 
    id,
    title,
    content,
    -- Combined score: 70% vector, 30% full-text
    (embedding <=> q.q_vec) * 0.7 + 
    (ts_rank(to_tsvector('english', content), q.q_tsquery) * 0.3) AS combined_score
FROM quickstart_documents, query q
WHERE to_tsvector('english', content) @@ q.q_tsquery
ORDER BY combined_score DESC
LIMIT 10;`}
        />
        <p><strong>What this does:</strong></p>
        <ol>
          <li>Generates vector embedding for query</li>
          <li>Creates full-text search query</li>
          <li>Combines both scores (70% vector, 30% text)</li>
          <li>Returns top 10 results</li>
        </ol>
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '0.5rem' }}>
          <p style={{ margin: 0 }}>
            <strong>📝 Why hybrid search?</strong> Vector search finds semantically similar content, while full-text search finds exact keyword matches. Combining both gives better results.
          </p>
        </div>

        <h3>Example 4: Filtered Search 🎛️</h3>
        <p><strong>Add metadata filters to vector search:</strong></p>
        <SqlCodeBlock
          title="Filtered search"
          code={`-- Search with filters
WITH query AS (
  SELECT embed_text('technology', 'all-MiniLM-L6-v2') AS q_vec
)
SELECT 
    id,
    title,
    embedding <=> q.q_vec AS distance
FROM quickstart_documents, query q
WHERE id > 100  -- Example filter
  AND id < 200  -- Example filter
ORDER BY embedding <=> q.q_vec
LIMIT 10;`}
        />
        <p><strong>What this does:</strong></p>
        <ol>
          <li>Generates query embedding</li>
          <li>Applies metadata filters (e.g., date range, category)</li>
          <li>Searches only within filtered subset</li>
          <li>Returns top 10 results</li>
        </ol>
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '0.5rem' }}>
          <p style={{ margin: 0 }}>
            <strong>💡 Filtering tips:</strong> Apply filters BEFORE vector search for better performance. PostgreSQL will use indexes on filter columns.
          </p>
        </div>
      </section>

      <section id="understanding">
        <h2>Understanding the Results</h2>
        
        <details>
          <summary style={{ cursor: 'pointer', color: '#fbbf24', marginBottom: '1rem' }}>
            <strong>📚 Key Concepts</strong>
          </summary>

          <h3>What is an Embedding?</h3>
          <p>
            An embedding is a vector. It represents the semantic meaning of text. Similar texts have similar embeddings.
          </p>
          <p><strong>Example:</strong></p>
          <ul>
            <li>&quot;machine learning&quot; → <code>[0.1, 0.2, 0.3, ...]</code> (384 numbers)</li>
            <li>&quot;artificial intelligence&quot; → <code>[0.12, 0.19, 0.31, ...]</code> (similar numbers)</li>
            <li>&quot;banana&quot; → <code>[0.9, 0.1, 0.2, ...]</code> (different numbers)</li>
          </ul>

          <h3>What is Distance?</h3>
          <p>
            <strong>Distance</strong> measures how similar two vectors are:
          </p>
          <ul>
            <li><strong>Lower distance</strong> = more similar</li>
            <li><strong>Higher distance</strong> = less similar</li>
          </ul>
          <p><strong>Distance metrics:</strong></p>
          <ul>
            <li><code>&lt;=&gt;</code> - Cosine distance (0 = identical, 2 = opposite)</li>
            <li><code>&lt;-&gt;</code> - L2/Euclidean distance (0 = identical, ∞ = different)</li>
            <li><code>&lt;#&gt;</code> - Inner product (higher = more similar)</li>
          </ul>

          <h3>What is HNSW Index?</h3>
          <p>
            HNSW stands for Hierarchical Navigable Small World. It is an index. It makes vector search fast.
          </p>
          <ul>
            <li>Without index: O(n) - checks every vector</li>
            <li>With HNSW: O(log n) - checks only a few vectors</li>
          </ul>
          <p><strong>Trade-off:</strong> Slightly less accurate but much faster.</p>
        </details>
      </section>

      <section id="next-steps">
        <h2>Next Steps</h2>
        <p><strong>Continue your journey:</strong></p>
        <ul>
          <li>
            📐 Read <a href="/docs/neurondb/getting-started/quickstart">Architecture Guide</a> to understand components
          </li>
          <li>
            🧪 Try more <a href="https://github.com/neurondb-ai/neurondb/tree/main/examples" target="_blank" rel="noopener noreferrer">SQL Recipes</a>
          </li>
          <li>
            📚 Explore <a href="/docs">Complete Documentation</a>
          </li>
          <li>
            🔍 Check <a href="/docs/neurondb/troubleshooting">Troubleshooting Guide</a> if needed
          </li>
          <li>
            🤖 Try <a href="https://github.com/neurondb-ai/neurondb/tree/main/NeuronAgent/examples" target="_blank" rel="noopener noreferrer">NeuronAgent Examples</a> for agent workflows
          </li>
          <li>
            🔌 Explore <a href="/docs/neuronmcp">NeuronMCP Integration</a> for MCP tools
          </li>
        </ul>

        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '1.5rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#fbbf24' }}>💡 Tips for Success</h3>
          
          <h4 style={{ marginTop: '0.5rem', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 'bold' }}>Performance Tips</h4>
          <ul style={{ marginBottom: '1rem' }}>
            <li><strong>Use indexes</strong> - HNSW indexes make search 100x faster</li>
            <li><strong>Filter first</strong> - Apply WHERE clauses before vector search</li>
            <li><strong>Limit results</strong> - Use LIMIT to avoid processing too many rows</li>
            <li><strong>Batch operations</strong> - Use <code>embed_text_batch</code> for multiple embeddings</li>
          </ul>

          <h4 style={{ marginTop: '0.5rem', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 'bold' }}>Development Tips</h4>
          <ul style={{ marginBottom: '1rem' }}>
            <li><strong>Start simple</strong> - Get basic search working first</li>
            <li><strong>Add complexity gradually</strong> - Try hybrid search after basic search works</li>
            <li><strong>Use examples</strong> - Copy working examples from recipes</li>
            <li><strong>Check logs</strong> - Use <code>docker compose logs</code> to debug issues</li>
          </ul>

          <h4 style={{ marginTop: '0.5rem', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 'bold' }}>Learning Tips</h4>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>Read the docs</strong> - Comprehensive documentation available</li>
            <li><strong>Try examples</strong> - Hands-on learning is best</li>
            <li><strong>Experiment</strong> - Try different queries and see what happens</li>
            <li><strong>Ask questions</strong> - Check troubleshooting or community</li>
          </ul>
        </div>

        <details style={{ marginTop: '1.5rem' }}>
          <summary style={{ cursor: 'pointer', color: '#fbbf24', marginBottom: '1rem' }}>
            <strong>❓ Common Questions</strong>
          </summary>

          <h4>Q: Why is my search slow?</h4>
          <p>
            <strong>A:</strong> Make sure you have an HNSW index:
          </p>
          <SqlCodeBlock
            title="Create HNSW index"
            code={`CREATE INDEX ON quickstart_documents USING hnsw (embedding vector_cosine_ops);`}
          />

          <h4>Q: How do I change the embedding model?</h4>
          <p>
            <strong>A:</strong> Use a different model name in <code>embed_text()</code>:
          </p>
          <SqlCodeBlock
            title="Use different model"
            code={`SELECT embed_text('text', 'sentence-transformers/all-mpnet-base-v2');`}
          />

          <h4>Q: How do I use my own data?</h4>
          <p>
            <strong>A:</strong> Yes! Create your own table and load your data:
          </p>
          <SqlCodeBlock
            title="Create custom table"
            code={`CREATE TABLE my_docs (id SERIAL, content TEXT, embedding vector(384));`}
          />

          <h4>Q: How do I generate embeddings for my data?</h4>
          <p>
            <strong>A:</strong> Use <code>embed_text()</code> or <code>embed_text_batch()</code>:
          </p>
          <SqlCodeBlock
            title="Generate embeddings"
            code={`UPDATE my_docs SET embedding = embed_text(content, 'all-MiniLM-L6-v2');`}
          />
        </details>
      </section>
    </PostgresDocsLayout>
  )
}

