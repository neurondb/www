import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'SQL Recipe Library | NeuronDB Ready-to-Run SQL Queries',
  description: 'Ready-to-run SQL queries for NeuronDB vector search and hybrid retrieval. Copy-paste SQL recipes for vector search, hybrid search, filtering, indexing, and embedding generation.',
  keywords: [
    'NeuronDB recipes',
    'SQL recipes',
    'vector search SQL',
    'hybrid search queries',
    'NeuronDB examples',
    'PostgreSQL vector search examples',
    'SQL recipe library'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondb/getting-started/recipes',
  },
  openGraph: {
    title: 'SQL Recipe Library | NeuronDB',
    description: 'Ready-to-run SQL queries for NeuronDB vector search and hybrid retrieval.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neurondb/getting-started/recipes',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'quick-start', title: 'Quick Start' },
  { id: 'recipe-files', title: 'Recipe Files' },
  { id: 'recipe-categories', title: 'Recipe Categories' },
  { id: 'usage-patterns', title: 'Usage Patterns' },
  { id: 'complexity-guide', title: 'Complexity Guide' },
  { id: 'common-use-cases', title: 'Common Use Cases' },
  { id: 'tips', title: 'Tips for Using Recipes' },
  { id: 'adapting-recipes', title: 'Adapting Recipes' },
  { id: 'performance-tips', title: 'Performance Tips' },
  { id: 'troubleshooting', title: 'Troubleshooting' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/getting-started/quickstart',
  label: 'Quick Start Guide',
}

const nextLink: NavLink | undefined = undefined

export default function RecipesLibraryPage() {
  return (
    <PostgresDocsLayout
      title="SQL Recipe Library"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          This recipe library provides <strong>copy-paste ready SQL queries</strong> for common NeuronDB operations. Each recipe file contains multiple queries with explanations, use cases, and complexity ratings.
        </p>
        <p>
          <strong>What you'll find:</strong>
        </p>
        <ul>
          <li>✅ Ready-to-run SQL queries for vector search</li>
          <li>✅ Hybrid search patterns combining vector and full-text search</li>
          <li>✅ Filtered search examples with SQL WHERE clauses</li>
          <li>✅ Index creation and tuning patterns</li>
          <li>✅ Embedding generation examples</li>
        </ul>
      </section>

      <section id="quick-start">
        <h2>Quick Start</h2>
        <p>Get started with recipes in three steps:</p>
        
        <h3>1. Load Quickstart Data</h3>
        <p>If you haven't already, load the quickstart data pack:</p>
        <BashCodeBlock
          title="Load quickstart data"
          code={`./examples/quickstart/load_quickstart.sh`}
        />

        <h3>2. Try a Recipe</h3>
        <p>Run a recipe file directly:</p>
        <BashCodeBlock
          title="Run recipe file"
          code={`psql "postgresql://neurondb:neurondb@localhost:5433/neurondb" -f 01_vector_search.sql`}
        />

        <h3>3. Or Copy Individual Queries</h3>
        <p>Open the recipe file, find the query you need, and copy it into your SQL client.</p>
      </section>

      <section id="recipe-files">
        <h2>Recipe Files</h2>
        <p>The recipe library includes 5 main recipe files:</p>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>File</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Description</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Complexity</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Use Cases</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>01_vector_search.sql</code></td>
              <td style={{ padding: '0.75rem' }}>Vector similarity search patterns</td>
              <td style={{ padding: '0.75rem' }}>⭐ - ⭐⭐⭐</td>
              <td style={{ padding: '0.75rem' }}>KNN search, distance metrics, similarity ranking</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>02_hybrid_search.sql</code></td>
              <td style={{ padding: '0.75rem' }}>Vector + full-text search combinations</td>
              <td style={{ padding: '0.75rem' }}>⭐⭐ - ⭐⭐⭐</td>
              <td style={{ padding: '0.75rem' }}>Combined semantic and keyword search, RRF fusion</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>03_filtered_search.sql</code></td>
              <td style={{ padding: '0.75rem' }}>Vector search with SQL filters</td>
              <td style={{ padding: '0.75rem' }}>⭐ - ⭐⭐⭐</td>
              <td style={{ padding: '0.75rem' }}>Category filters, date ranges, conditional search</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>04_indexing.sql</code></td>
              <td style={{ padding: '0.75rem' }}>Index creation patterns</td>
              <td style={{ padding: '0.75rem' }}>⭐ - ⭐⭐⭐</td>
              <td style={{ padding: '0.75rem' }}>HNSW indexes, IVF indexes, parameter tuning</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>05_embedding_generation.sql</code></td>
              <td style={{ padding: '0.75rem' }}>Embedding generation patterns</td>
              <td style={{ padding: '0.75rem' }}>⭐ - ⭐⭐⭐</td>
              <td style={{ padding: '0.75rem' }}>Text embeddings, batch generation, model selection</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="recipe-categories">
        <h2>Recipe Categories</h2>

        <h3>1. Vector Search (01_vector_search.sql)</h3>
        <p>Basic to advanced vector similarity search queries.</p>
        <p><strong>Key Recipes:</strong></p>
        <ul>
          <li>Basic cosine similarity search</li>
          <li>L2/Euclidean distance search</li>
          <li>Inner product search</li>
          <li>Distance threshold filtering</li>
          <li>Multi-metric comparison</li>
        </ul>
        <p><strong>When to Use:</strong></p>
        <ul>
          <li>Finding similar documents</li>
          <li>Recommendation systems</li>
          <li>Semantic search</li>
          <li>Similarity-based ranking</li>
        </ul>

        <h3>2. Hybrid Search (02_hybrid_search.sql)</h3>
        <p>Combine vector similarity with full-text search.</p>
        <p><strong>Key Recipes:</strong></p>
        <ul>
          <li>Weighted combination (vector + FTS)</li>
          <li>Reciprocal Rank Fusion (RRF)</li>
          <li>Query text search</li>
          <li>Boosted fields</li>
          <li>Performance comparison</li>
        </ul>
        <p><strong>When to Use:</strong></p>
        <ul>
          <li>Combining semantic and keyword search</li>
          <li>Improving search recall</li>
          <li>Handling both synonym and exact match queries</li>
          <li>Balancing relevance and precision</li>
        </ul>

        <h3>3. Filtered Search (03_filtered_search.sql)</h3>
        <p>Vector search with SQL WHERE clause filters.</p>
        <p><strong>Key Recipes:</strong></p>
        <ul>
          <li>Category filtering</li>
          <li>Date range filtering</li>
          <li>Multiple filter conditions</li>
          <li>Top-K per category</li>
          <li>Complex filters</li>
        </ul>
        <p><strong>When to Use:</strong></p>
        <ul>
          <li>Category-based recommendations</li>
          <li>Time-based search (recent items)</li>
          <li>User-specific filtering</li>
          <li>Excluding unwanted results</li>
          <li>Multi-criteria search</li>
        </ul>

        <h3>4. Indexing (04_indexing.sql)</h3>
        <p>Create and manage vector indexes.</p>
        <p><strong>Key Recipes:</strong></p>
        <ul>
          <li>HNSW index creation (L2, cosine, inner product)</li>
          <li>IVF index creation</li>
          <li>Index parameter tuning</li>
          <li>Multiple indexes</li>
          <li>Performance optimization</li>
        </ul>
        <p><strong>When to Use:</strong></p>
        <ul>
          <li>Setting up new tables</li>
          <li>Optimizing query performance</li>
          <li>Tuning for your workload</li>
          <li>Supporting multiple distance metrics</li>
        </ul>

        <h3>5. Embedding Generation (05_embedding_generation.sql)</h3>
        <p>Generate embeddings from text.</p>
        <p><strong>Key Recipes:</strong></p>
        <ul>
          <li>Single embedding generation</li>
          <li>Batch generation</li>
          <li>Updating existing documents</li>
          <li>Query embedding generation</li>
          <li>Error handling</li>
        </ul>
        <p><strong>When to Use:</strong></p>
        <ul>
          <li>Ingesting new documents</li>
          <li>Updating existing data</li>
          <li>Generating query vectors</li>
          <li>Batch processing</li>
        </ul>
      </section>

      <section id="usage-patterns">
        <h2>Usage Patterns</h2>

        <h3>Pattern 1: Run Entire Recipe File</h3>
        <BashCodeBlock
          title="Run all recipes in a file"
          code={`# Run all recipes in a file
psql "postgresql://neurondb:neurondb@localhost:5433/neurondb" -f 01_vector_search.sql

# Or with Docker Compose
docker compose exec neurondb psql -U neurondb -d neurondb -f /path/to/recipes/01_vector_search.sql`}
        />

        <h3>Pattern 2: Copy Individual Queries</h3>
        <ol>
          <li>Open the recipe file</li>
          <li>Find the recipe you need</li>
          <li>Copy the SQL query</li>
          <li>Paste into your SQL client</li>
          <li>Modify as needed for your use case</li>
        </ol>

        <h3>Pattern 3: Interactive Learning</h3>
        <ol>
          <li>Run a simple recipe first</li>
          <li>Understand the output</li>
          <li>Try modifying the query</li>
          <li>Experiment with parameters</li>
          <li>Move to more complex recipes</li>
        </ol>
      </section>

      <section id="complexity-guide">
        <h2>Complexity Guide</h2>
        <ul>
          <li><strong>⭐ Beginner</strong>: Simple queries, basic operations, easy to understand</li>
          <li><strong>⭐⭐ Intermediate</strong>: Moderate complexity, requires some SQL knowledge</li>
          <li><strong>⭐⭐⭐ Advanced</strong>: Complex queries, performance optimization, advanced patterns</li>
        </ul>
      </section>

      <section id="common-use-cases">
        <h2>Common Use Cases</h2>

        <h3>Use Case: Build a Recommendation System</h3>
        <ol>
          <li><strong>Setup</strong>: Load quickstart data or your own data</li>
          <li><strong>Indexing</strong>: Use <code>04_indexing.sql</code> to create HNSW index</li>
          <li><strong>Search</strong>: Use <code>01_vector_search.sql</code> for similarity search</li>
          <li><strong>Filtering</strong>: Use <code>03_filtered_search.sql</code> for user/category filters</li>
        </ol>

        <h3>Use Case: Semantic Search with Keywords</h3>
        <ol>
          <li><strong>Setup</strong>: Load data with embeddings</li>
          <li><strong>Hybrid</strong>: Use <code>02_hybrid_search.sql</code> for combined search</li>
          <li><strong>Filtering</strong>: Use <code>03_filtered_search.sql</code> for additional filters</li>
        </ol>

        <h3>Use Case: Ingest New Documents</h3>
        <ol>
          <li><strong>Generation</strong>: Use <code>05_embedding_generation.sql</code> to generate embeddings</li>
          <li><strong>Indexing</strong>: Use <code>04_indexing.sql</code> to create indexes</li>
          <li><strong>Search</strong>: Use <code>01_vector_search.sql</code> to query</li>
        </ol>
      </section>

      <section id="tips">
        <h2>Tips for Using Recipes</h2>

        <h3>1. Start Simple</h3>
        <p>Begin with ⭐ complexity recipes to understand the patterns.</p>

        <h3>2. Read Comments</h3>
        <p>Each recipe includes comments explaining what it does and when to use it.</p>

        <h3>3. Customize for Your Schema</h3>
        <p>Recipes use <code>quickstart_documents</code> table - adjust table/column names for your schema.</p>

        <h3>4. Understand Parameters</h3>
        <p>HNSW parameters (<code>m</code>, <code>ef_construction</code>), search parameters (<code>ef_search</code>), etc.</p>

        <h3>5. Test Performance</h3>
        <p>Use <code>EXPLAIN ANALYZE</code> to verify index usage and query performance.</p>

        <h3>6. Combine Recipes</h3>
        <p>Mix recipes from different files to build complex workflows.</p>
      </section>

      <section id="adapting-recipes">
        <h2>Adapting Recipes</h2>

        <h3>Change Table Name</h3>
        <p>Recipes use <code>quickstart_documents</code> - replace with your table:</p>
        <SqlCodeBlock
          title="Adapt table name"
          code={`-- Recipe uses:
FROM quickstart_documents

-- Change to:
FROM your_table_name`}
        />

        <h3>Change Column Names</h3>
        <p>Adjust embedding column name if different:</p>
        <SqlCodeBlock
          title="Adapt column name"
          code={`-- Recipe uses:
embedding <=> ...

-- Change to:
your_embedding_column <=> ...`}
        />

        <h3>Change Dimensions</h3>
        <p>Adjust vector dimensions to match your model:</p>
        <SqlCodeBlock
          title="Adapt dimensions"
          code={`-- Recipe uses:
embedding vector(384)

-- Change to:
embedding vector(1536)  -- For OpenAI ada-002`}
        />
      </section>

      <section id="performance-tips">
        <h2>Performance Tips</h2>

        <h3>1. Use Indexes</h3>
        <p>All vector search queries benefit from HNSW indexes. See <code>04_indexing.sql</code>.</p>

        <h3>2. Tune Search Parameters</h3>
        <p>Adjust <code>hnsw.ef_search</code> (HNSW) or <code>ivfflat.probes</code> (IVF) for speed vs. recall.</p>

        <h3>3. Use Filters</h3>
        <p>Apply WHERE clauses before vector search to reduce search space.</p>

        <h3>4. Batch Operations</h3>
        <p>When generating embeddings, use batch processing (see <code>05_embedding_generation.sql</code>).</p>

        <h3>5. Monitor Performance</h3>
        <p>Use <code>EXPLAIN ANALYZE</code> to verify index usage and query plans.</p>
      </section>

      <section id="troubleshooting">
        <h2>Troubleshooting</h2>

        <h3>"Table quickstart_documents does not exist"</h3>
        <p><strong>Solution:</strong> Load the quickstart data pack first:</p>
        <BashCodeBlock
          title="Load quickstart data"
          code={`./examples/quickstart/load_quickstart.sh`}
        />
        <p>Or adapt the recipe to use your own table.</p>

        <h3>"Index not used in query"</h3>
        <p><strong>Solution:</strong></p>
        <ol>
          <li>Verify index exists: <code>\d table_name</code></li>
          <li>Check query uses correct operator (<code>&lt;=&gt;</code> for cosine, <code>&lt;-&gt;</code> for L2)</li>
          <li>Increase <code>ef_search</code> if using HNSW</li>
          <li>Use <code>EXPLAIN ANALYZE</code> to see query plan</li>
        </ol>

        <h3>"Embedding generation fails"</h3>
        <p><strong>Solution:</strong></p>
        <ol>
          <li>Check embedding model is configured</li>
          <li>Verify API keys (if using external models)</li>
          <li>Check network connectivity</li>
          <li>See <code>05_embedding_generation.sql</code> for error handling examples</li>
        </ol>

        <h3>"Query is slow"</h3>
        <p><strong>Solution:</strong></p>
        <ol>
          <li>Create/verify indexes (see <code>04_indexing.sql</code>)</li>
          <li>Adjust search parameters (<code>ef_search</code>, <code>probes</code>)</li>
          <li>Add filters to reduce search space</li>
          <li>Use <code>EXPLAIN ANALYZE</code> to identify bottlenecks</li>
        </ol>
      </section>

      <section>
        <h2>Related Resources</h2>
        <ul>
          <li><a href="https://github.com/neurondb-ai/neurondb/tree/main/examples/quickstart" target="_blank" rel="noopener noreferrer">Quickstart Data Pack</a> - Sample data for trying recipes</li>
          <li><a href="/docs/neurondb/getting-started/quickstart">Quickstart Guide</a> - Complete quickstart guide</li>
          <li><a href="https://github.com/neurondb-ai/neurondb/tree/main/scripts/neurondb-cli.sh" target="_blank" rel="noopener noreferrer">CLI Helpers</a> - Command-line tools for common tasks</li>
          <li><a href="/docs/neurondb">NeuronDB Documentation</a> - Comprehensive documentation</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
