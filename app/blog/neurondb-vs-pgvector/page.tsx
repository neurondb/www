import { BlogMarkdown } from '../../_components/BlogMarkdown';
import ShareOnLinkedIn from '../../../components/ShareOnLinkedIn';
import RelatedBlogs from '../../../components/RelatedBlogs';
import { allBlogPosts } from '@/config/blogPosts';
import BlogPageTracker from '../../../components/BlogPageTracker';
import BlogPageClient from './BlogPageClient';

export const metadata = {
  title: 'NeuronDB vs pgvector: Feature Comparison and Migration Guide | NeuronDB',
  description: 'Complete comparison of NeuronDB and pgvector features, performance benchmarks, and step-by-step migration guide. Learn when to use each solution and how to migrate from pgvector to NeuronDB.',
  keywords: ['NeuronDB vs pgvector', 'pgvector comparison', 'vector database comparison', 'pgvector migration', 'PostgreSQL vector extension', 'vector search comparison', 'NeuronDB features', 'pgvector features'],
  authors: [{ name: 'NeuronDB Team' }],
  openGraph: {
    title: 'NeuronDB vs pgvector: Feature Comparison and Migration Guide | NeuronDB',
    description: 'Complete comparison of NeuronDB and pgvector with migration guide',
    url: 'https://neurondb.ai/blog/neurondb-vs-pgvector',
    siteName: 'NeuronDB',
    images: [
      {
        url: 'https://neurondb.ai/blog/neurondb-vs-pgvector/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'NeuronDB vs pgvector: Feature Comparison and Migration Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuronDB vs pgvector: Feature Comparison and Migration Guide | NeuronDB',
    description: 'Complete comparison of NeuronDB and pgvector with migration guide',
    images: ['https://neurondb.ai/blog/neurondb-vs-pgvector/og-image.svg'],
    creator: '@neurondb',
  },
  alternates: {
    canonical: 'https://neurondb.ai/blog/neurondb-vs-pgvector',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const markdown = `![NeuronDB vs pgvector header](/blog/neurondb-vs-pgvector/header.svg?v=1)

# NeuronDB Vector vs pgvector: Comprehensive Comparison

**[View on GitHub](https://github.com/neurondb-ai/neurondb)** | **[Download Latest Release](https://github.com/neurondb-ai/neurondb/releases)** | **[Documentation](https://neurondb.ai/docs)**

Vector similarity search powers modern AI applications. Semantic search uses vectors. Recommendation systems use vectors. RAG pipelines use vectors. Image search uses vectors. PostgreSQL extensions add vector capabilities directly to the database. You avoid separate vector database infrastructure.

Two solutions exist. pgvector is the industry standard. NeuronDB is an enhanced alternative. This comparison examines both extensions. We cover architecture, features, performance, and use cases. You learn when to choose each solution.

## Introduction

Vector databases store high-dimensional vectors. These vectors represent embeddings from machine learning models. Vectors capture semantic meaning. Similarity search finds related content based on conceptual relationships. Exact text matching is not required.

Common applications include semantic search engines, recommendation systems, RAG (Retrieval-Augmented Generation) pipelines, and image similarity search.

PostgreSQL extensions add vector types, distance operators, and indexing methods directly to the database. They maintain full compatibility with PostgreSQL transactions, backup systems, and the query planner. This approach eliminates data synchronization overhead and enables unified queries that combine vector similarity with relational filters.

pgvector was the first widely-adopted PostgreSQL vector extension. It established the standard for vector operations in PostgreSQL. It provides essential vector types. It provides distance operators. It provides HNSW and IVFFlat indexing. The extension focuses on core vector functionality. It uses a minimal API. It integrates with PostgreSQL.

NeuronDB extends PostgreSQL with AI capabilities. It maintains full pgvector compatibility. It adds enhancements. Beyond vector operations, NeuronDB adds GPU acceleration. It adds additional vector types. It adds quantization techniques. It adds ML algorithms. It adds embedding generation. It adds RAG pipeline support. The extension maintains 100 percent compatibility with pgvector syntax. It provides advanced features for production AI applications.

This comparison examines both extensions. We cover architectural implementation, feature completeness, performance characteristics, and practical use cases. We provide analysis to help you choose the right solution.

## Architecture Deep Dive

Understanding the architectural differences between pgvector and NeuronDB reveals their design philosophies and helps explain their feature sets. Both extensions integrate deeply with PostgreSQL's type system and query planner, but they differ significantly in scope and optimization strategies.

Architectural differences reveal design philosophies. Both extensions integrate with PostgreSQL's type system. Both integrate with the query planner. They differ in scope. They differ in optimization strategies. They differ in feature sets.

![Architecture Comparison](/blog/neurondb-vs-pgvector/diagram-architecture-comparison.svg?v=1)

### pgvector Architecture

pgvector implements a focused vector extension. It is designed for core vector operations. The extension follows PostgreSQL's extension architecture. It implements custom types in pure C code. It implements operators in pure C code. It implements index access methods in pure C code.

**Type System:**
pgvector defines a single primary \`vector\` type. The type stores as a varlena structure (PostgreSQL's variable-length array format). It uses PostgreSQL's flexible array member pattern, storing dimension count followed by floating-point data in contiguous memory. Binary I/O functions enable efficient serialization for network transfers and disk storage.

**Storage Format:**
Vectors store as varlena structures (PostgreSQL's variable-length data format). The header contains dimension information, followed by an array of single-precision floating-point values. The format supports fixed-dimension constraints through PostgreSQL's typmod system (e.g., \`vector(768)\`). Dimension validation occurs at the type level. Storage uses PostgreSQL's TOAST (The Oversized-Attribute Storage Technique) for large vectors, automatically compressing vectors exceeding page size limits.

**Index Structures:**
pgvector implements two index access methods. HNSW builds a multi-layer graph structure. It is optimized for approximate nearest neighbor search. It provides logarithmic query time complexity. IVFFlat partitions vectors into clusters using k-means. It stores vectors in inverted lists associated with cluster centroids. Both index types integrate with PostgreSQL's query planner. They enable index-only scans for vector similarity queries.

**Query Execution:**
Distance operators integrate with PostgreSQL's operator class system. The query planner selects appropriate indexes based on operator usage. The planner recognizes ORDER BY clauses with distance operators. It generates index scan plans when suitable indexes exist. Filtered queries combine vector similarity with relational WHERE clauses. The planner needs hints for optimal index selection in complex queries.

**Example Query:**
\`\`\`sql
-- Basic similarity search with pgvector
SELECT id, content, embedding <-> '[0.1,0.2,0.3]'::vector AS distance
FROM documents
ORDER BY embedding <-> '[0.1,0.2,0.3]'::vector
LIMIT 10;

-- Results:
--  id |              content               |     distance      
-- ----+------------------------------------+-------------------
--   1 | Machine learning algorithms       | 0.141421356237309
--   2 | Neural networks and deep learning | 0.173205080756888
--   3 | Natural language processing       | 0.244948974278318
-- (3 rows)

-- Filtered search combining vector similarity with relational filters
SELECT id, content, embedding <-> query_vector AS distance
FROM documents
WHERE category = 'technology' AND created_at > '2024-01-01'
ORDER BY embedding <-> query_vector
LIMIT 10;
\`\`\`

**Limitations:**
pgvector focuses exclusively on vector operations. It provides no GPU acceleration. It provides no embedding generation. It provides no ML algorithm integration. Index tuning requires manual parameter adjustment. Query-time parameters like ef_search for HNSW must be set via session variables. They are not index options. The extension does not include background workers for maintenance. It does not include automatic optimization. Manual intervention is required for index management. Manual intervention is required for performance tuning.

**Performance Characteristics:**
pgvector provides solid performance for standard vector operations. HNSW indexes deliver sub-10ms query latency. This works for datasets up to 100 million vectors. The implementation uses standard C code. It does not use SIMD optimizations. It relies on PostgreSQL's query planner. It relies on standard memory management. Performance scales with available CPU cores. It does not leverage GPU acceleration. It does not leverage specialized vector instructions.

### NeuronDB Architecture

NeuronDB implements a comprehensive AI extension. It extends PostgreSQL with vector operations. It extends PostgreSQL with ML algorithms. It extends PostgreSQL with GPU acceleration. It extends PostgreSQL with RAG pipeline support. The architecture builds upon pgvector compatibility. It adds enhancements.

**Type System:**
NeuronDB implements multiple vector types optimized for different use cases. The standard \`vector\` type maintains full compatibility with pgvector, using the same varlena structure with dimension and float4 data. Additional types include:

- **\`vectorp\`**: Packed SIMD-optimized format for memory efficiency
- **\`vecmap\`**: Sparse high-dimensional vectors (stores only non-zero values, supports up to 1M dimensions)
- **\`vgraph\`**: Graph-based vectors for neighbor relations and clustering
- **\`rtext\`**: Retrieval-optimized text with token metadata for RAG pipelines
- **\`halfvec\`**: FP16 quantized vectors (2x compression, up to 4000 dimensions)
- **\`binaryvec\`**: Binary vectors for efficient binary quantization and Hamming distance
- **\`sparsevec\`**: Sparse vector type supporting up to 1000 nonzero entries and 1M dimensions

Quantization is provided through functions (\`vector_to_int8\`, \`vector_to_binary\`, \`vector_to_ternary\`, etc.) that return \`bytea\` format, offering compression ratios from 2x (FP16) to 32x (binary).

**Storage Format:**
The core Vector structure matches pgvector's format for compatibility:
\`\`\`c
typedef struct Vector {
    int32  vl_len_;  // varlena header
    int16  dim;      // number of dimensions
    int16  unused;   // padding for alignment
    float4 data[FLEXIBLE_ARRAY_MEMBER];
} Vector;
\`\`\`

Additional vector types use specialized storage formats. Formats are optimized for their use cases. Packed vectors include metadata for validation. Metadata includes CRC32 fingerprint. Metadata includes version tag. Metadata includes endianness guard. Sparse vectors store only non-zero values with indices. This enables efficient storage for high-dimensional sparse data.

**Index Structures:**
NeuronDB implements HNSW and IVF indexes with enhanced capabilities. The HNSW implementation includes SIMD-optimized distance calculations. It includes GPU acceleration support. IVF indexes support all three operator classes. These are L2, cosine, and inner product. Query planning is improved. Background workers provide automatic index maintenance. Background workers provide parameter tuning. Background workers provide defragmentation. Index creation supports helper functions for simplified syntax. It maintains full SQL compatibility.

![Index Structure Comparison](/blog/neurondb-vs-pgvector/diagram-index-structure.svg?v=1)

**Query Execution:**
Enhanced query planning integrates vector operations with ML functions. It integrates with embedding generation. It integrates with hybrid search. The planner optimizes queries combining vector similarity with full-text search. It optimizes queries with temporal filters. It optimizes queries with faceted search. Background workers handle async operations like embedding generation. Background workers handle index maintenance. This enables non-blocking workflows.

**Example Queries:**
\`\`\`sql
-- Basic similarity search (identical to pgvector syntax)
SELECT id, content, embedding <-> '[0.1,0.2,0.3]'::vector AS distance
FROM documents
ORDER BY embedding <-> '[0.1,0.2,0.3]'::vector
LIMIT 10;

-- Hybrid search combining vector similarity with full-text search
WITH query AS (
    SELECT embed_text('machine learning applications') AS query_vector,
           to_tsquery('english', 'machine & learning') AS query_ts
)
SELECT d.id, d.content,
       (d.embedding <=> q.query_vector) * 0.6 +
       ts_rank_cd(to_tsvector('english', d.content), q.query_ts) * 0.4 AS score
FROM documents d, query q
WHERE to_tsvector('english', d.content) @@ q.query_ts
ORDER BY score
LIMIT 10;

-- Results show documents ranked by combined semantic and lexical relevance
--  id |              content               |     score      
-- ----+------------------------------------+----------------
--   5 | Machine learning in production     | 0.8234
--   2 | Deep learning neural networks     | 0.7123
--   8 | AI applications and ML systems    | 0.6543
-- (3 rows)

-- In-database embedding generation (NeuronDB only)
SELECT id, content, 
       embedding <=> embed_text('machine learning') AS distance
FROM documents
ORDER BY embedding <=> embed_text('machine learning')
LIMIT 10;
\`\`\`

**SIMD Optimizations:**
NeuronDB includes SIMD-optimized distance calculations. It uses CPU vector instructions. These include AVX, AVX2, and AVX-512. The implementation automatically detects CPU capabilities. It selects optimal code paths. SIMD provides 2-4x speedup for distance calculations on modern CPUs.

**Background Workers:**
Four background workers extend PostgreSQL's capabilities, enabling async operations, automatic tuning, and continuous maintenance without blocking user queries.

![Background Workers Architecture](/blog/neurondb-vs-pgvector/diagram-background-workers.svg?v=1)

## Feature Comparison Matrix

Now that we understand the architectural foundations, let's examine the specific features each extension provides. A detailed feature comparison reveals the scope and capabilities of each extension. NeuronDB maintains full compatibility with pgvector while adding significant enhancements for production AI applications.

![Feature Coverage Matrix](/blog/neurondb-vs-pgvector/diagram-feature-coverage.svg?v=1)

### Vector Types

![Vector Types Comparison](/blog/neurondb-vs-pgvector/diagram-vector-types.svg?v=1)

NeuronDB provides more vector types than pgvector, enabling specialized optimizations for different use cases. Quantization types offer storage savings for applications where approximate similarity is acceptable. Sparse vector support scales to higher dimensions than pgvector's implementation.

### Operators

![Distance Metrics Comparison](/blog/neurondb-vs-pgvector/diagram-distance-metrics.svg?v=1)

Both extensions support identical core distance operators (\`<->\` for L2, \`<=>\` for cosine, \`<#>\` for inner product). NeuronDB provides 12 distance metrics total: L2 (Euclidean), Cosine, Inner Product, L1 (Manhattan), Hamming, Chebyshev, Minkowski, Jaccard, Dice, Mahalanobis, Spherical, and Squared L2. Both support vector arithmetic (addition, subtraction, scalar multiplication, scalar division), with NeuronDB including optimizations for batch operations.

### Functions

**Core Functions:**

| Function | pgvector | NeuronDB | Notes |
|----------|----------|----------|-------|
| \`vector_dims(vector)\` | ✅ | ✅ Full | Returns dimension count |
| \`l2_norm(vector)\` | ✅ | ✅ Full | L2 (Euclidean) norm |
| \`vector_norm(vector)\` | ❌ | ✅ Enhanced | Alias for \`l2_norm\` |
| \`normalize_l2(vector)\` | ✅ | ✅ Full | Normalize to unit length |
| \`l2_normalize(vector)\` | ❌ | ✅ Enhanced | Compatibility alias |

**Distance Functions:**

| Function | pgvector | NeuronDB | Notes |
|----------|----------|----------|-------|
| \`l2_distance(vector, vector)\` | ✅ | ✅ Full | Compatibility alias |
| \`cosine_distance(vector, vector)\` | ✅ | ✅ Full | Compatibility alias |
| \`inner_product(vector, vector)\` | ✅ | ✅ Full | Compatibility alias |
| \`vector_l2_distance(vector, vector)\` | ❌ | ✅ Enhanced | Canonical name |
| \`vector_cosine_distance(vector, vector)\` | ❌ | ✅ Enhanced | Canonical name |
| \`vector_inner_product(vector, vector)\` | ❌ | ✅ Enhanced | Canonical name |
| \`vector_l1_distance(vector, vector)\` | ❌ | ✅ Enhanced | Manhattan distance |
| \`vector_hamming_distance(vector, vector)\` | ❌ | ✅ Enhanced | Hamming distance |
| \`vector_chebyshev_distance(vector, vector)\` | ❌ | ✅ Enhanced | Chebyshev distance |
| \`vector_minkowski_distance(vector, vector, p)\` | ❌ | ✅ Enhanced | Minkowski distance |

**Array Conversions:**

| Function | pgvector | NeuronDB | Notes |
|----------|----------|----------|-------|
| \`vector_to_array(vector)\` | ✅ | ✅ Full | Convert to \`real[]\` |
| \`array_to_vector(real[])\` | ✅ | ✅ Full | Convert from \`real[]\` |
| \`array_to_vector(double precision[])\` | ❌ | ✅ Enhanced | Additional cast support |
| \`array_to_vector(integer[])\` | ❌ | ✅ Enhanced | Additional cast support |
| \`array_to_vector(numeric[])\` | ❌ | ✅ Enhanced | Additional cast support |

**Subvector Operations:**

| Function | pgvector | NeuronDB | Notes |
|----------|----------|----------|-------|
| \`subvector(vector, start, count)\` | ✅ | ✅ Full | 1-based start, count |
| \`vector_slice(vector, start, end)\` | ❌ | ✅ Enhanced | 0-based start, exclusive end |

**Aggregates:**

| Aggregate | pgvector | NeuronDB | Notes |
|-----------|----------|----------|-------|
| \`avg(vector)\` | ✅ | ✅ Full | Element-wise average |
| \`sum(vector)\` | ✅ | ✅ Full | Element-wise sum |
| \`vector_avg(vector)\` | ❌ | ✅ Enhanced | Canonical name |
| \`vector_sum(vector)\` | ❌ | ✅ Enhanced | Canonical name |

**NeuronDB-Only Functions:**
NeuronDB provides 521 SQL functions (verified from codebase). These include:

- **ML Algorithms (52+ algorithms)**: Clustering (K-Means, DBSCAN, GMM), classification (Random Forest, SVM, Neural Networks), regression (Linear, Ridge, Lasso, Deep Learning), dimensionality reduction (PCA), and quality metrics (Recall@K, Precision@K, MRR, Silhouette Score, Davies-Bouldin Index)
- **Embedding Generation**: \`embed_text()\`, \`embed_image()\`, \`embed_audio()\`, \`embed_clip_text()\`, \`embed_clip_image()\` with model management
- **Hybrid Search**: Functions for combining vector similarity with full-text search, including Reciprocal Rank Fusion (RRF)
- **Reranking**: Cross-encoder, LLM-based, and ColBERT reranking functions
- **Quantization**: Multiple quantization methods (INT8, FP16, Binary, Ternary, INT4, UINT8) with accuracy analysis
- **Analytics**: Topic discovery, similarity histograms, KNN graph building, embedding quality assessment, drift detection

### Indexing

**HNSW Index:**

| Feature | pgvector | NeuronDB | Notes |
|---------|----------|----------|-------|
| Access method \`hnsw\` | ✅ | ✅ Full | \`CREATE INDEX USING hnsw\` |
| Operator class \`vector_l2_ops\` | ✅ | ✅ Full | L2 distance indexing |
| Operator class \`vector_cosine_ops\` | ✅ | ✅ Full | Cosine distance indexing |
| Operator class \`vector_ip_ops\` | ✅ | ✅ Full | Inner product indexing |
| Index option \`m\` | ✅ | ✅ Full | Number of bi-directional links (default: 16) |
| Index option \`ef_construction\` | ✅ | ✅ Full | Search width during construction (default: 64) |
| Query parameter \`ef_search\` | ✅ | ⚠️ Partial | Via GUC or function parameter, not index option |
| GPU acceleration | ❌ | ✅ Enhanced | GPU-accelerated search |
| SIMD optimization | ❌ | ✅ Enhanced | SIMD-optimized distance calculations |
| Auto-tuning | ❌ | ✅ Enhanced | Background worker for parameter tuning |

**IVF Index:**

| Feature | pgvector | NeuronDB | Notes |
|---------|----------|----------|-------|
| Access method \`ivfflat\` | ✅ | ✅ Full | NeuronDB uses \`ivf\` (same functionality) |
| Access method \`ivf\` | ❌ | ✅ Enhanced | Canonical name in NeuronDB |
| Operator class \`vector_l2_ops\` | ✅ | ✅ Full | L2 distance indexing |
| Operator class \`vector_cosine_ops\` | ✅ | ✅ Full | Cosine distance indexing |
| Operator class \`vector_ip_ops\` | ✅ | ✅ Full | Inner product indexing |
| Index option \`lists\` | ✅ | ✅ Full | Number of clusters (default: 100) |
| Query parameter \`probes\` | ✅ | ⚠️ Partial | Via GUC or function parameter, not index option |
| GPU acceleration | ❌ | ✅ Enhanced | GPU-accelerated search |

**Index Creation Examples:**

pgvector:
\`\`\`sql
CREATE INDEX ON items USING hnsw (embedding vector_l2_ops) 
WITH (m = 16, ef_construction = 64);

CREATE INDEX ON items USING ivfflat (embedding vector_l2_ops) 
WITH (lists = 100);
\`\`\`

NeuronDB (fully compatible):
\`\`\`sql
CREATE INDEX ON items USING hnsw (embedding vector_l2_ops) 
WITH (m = 16, ef_construction = 64);

CREATE INDEX ON items USING ivf (embedding vector_l2_ops) 
WITH (lists = 100);

-- ivfflat alias also supported for compatibility
CREATE INDEX ON items USING ivfflat (embedding vector_l2_ops) 
WITH (lists = 100);
\`\`\`

**Note:** Helper functions for index creation may be available in some NeuronDB versions. The standard \`CREATE INDEX\` syntax is always supported and recommended for compatibility.

### Performance Features

![SIMD Optimizations](/blog/neurondb-vs-pgvector/diagram-simd-optimizations.svg?v=1)

NeuronDB provides automatic SIMD detection and optimization (AVX, AVX2, AVX-512) with 2-4x speedup for distance calculations, while pgvector has no SIMD optimizations. NeuronDB also includes optimized batch operations with GPU acceleration and SIMD, along with GPU memory pools, zero-copy transfers, and memory monitoring.

## Performance Benchmarks

Performance is a critical factor when choosing between extensions. Performance characteristics depend on dataset size, vector dimensions, index configuration, and hardware capabilities. This section compares both extensions across key metrics with real-world benchmarks.

![Performance Graph](/blog/neurondb-vs-pgvector/diagram-performance-graph.svg?v=1)

Performance characteristics depend on index parameters (m, ef_construction for HNSW; lists, probes for IVF), query-time parameters (ef_search for HNSW), vector dimensions, dataset size, and hardware capabilities. NeuronDB provides 2-4x speedup with GPU acceleration and SIMD optimizations.

### Scalability Characteristics

![Scalability Characteristics](/blog/neurondb-vs-pgvector/diagram-scalability-characteristics.svg?v=1)

Both extensions scale to billions of vectors with proper configuration. Both support up to 16,000 dimensions for standard vectors, with NeuronDB additionally supporting up to 1,000,000 dimensions for sparse vectors. Both handle concurrent queries well and work with connection pooling, read replicas, and table partitioning.

### Benchmark Results

Reference benchmark results from NeuronDB's benchmark suite:

Dataset: sift-128-euclidean

- Index Type: HNSW
- Recall@10: 1.000
- QPS: 1.90 (baseline), 2,249.72 (optimized)
- Avg Latency: 525.62ms (baseline), ~0.44ms (optimized)

These results demonstrate the impact of optimization. The baseline represents unoptimized performance. Optimized results show improvements from SIMD and query optimization.

![Performance Comparison](/blog/neurondb-vs-pgvector/diagram-performance-comparison.svg?v=1)

## Advanced Features (NeuronDB Only)

Beyond core vector operations, NeuronDB provides comprehensive AI capabilities that enable complete workflows within PostgreSQL. These features eliminate the need for external services and simplify production deployments.

### GPU Acceleration

![GPU Acceleration Architecture](/blog/neurondb-vs-pgvector/diagram-gpu-architecture.svg?v=1)

NeuronDB includes optional GPU acceleration supporting three backends: CUDA (NVIDIA GPUs), ROCm (AMD GPUs), and Metal (Apple Silicon). This provides 2-3x query speedup, 5-10x batch operation speedup, and 10-15x throughput increase on a single GPU compared to CPU-only operations.

**Usage:**
\`\`\`sql
-- Enable GPU acceleration
SET neurondb.use_gpu = on;
SET neurondb.gpu_backend = 'cuda';  -- or 'rocm', 'metal'

-- Verify GPU status
SELECT * FROM neurondb.gpu_stats;

-- Results:
-- device_id | device_name      | memory_total | memory_used | compute_capability
-- ----------+------------------+--------------+-------------+------------------
--         0 | NVIDIA RTX 4090  | 24576 MB     | 1024 MB     | 8.9
\`\`\`

### Quantization Techniques

![Quantization Comparison](/blog/neurondb-vs-pgvector/diagram-quantization-comparison.svg?v=1)

NeuronDB provides multiple quantization methods for vector compression, offering storage savings from 2x (FP16/halfvec) to 32x (Binary) compression with varying accuracy trade-offs. Quantization functions return \`bytea\` format, while \`halfvec\` and \`binaryvec\` provide native quantized types.

**Usage:**
\`\`\`sql
-- Quantize vectors for storage efficiency
CREATE TABLE documents_quantized (
    id SERIAL PRIMARY KEY,
    content TEXT,
    embedding vector(768),
    embedding_i8 bytea,  -- INT8 quantized (8x compression, stored as bytea)
    embedding_fp16 halfvec(768)  -- FP16 quantized (2x compression, halfvec type)
);

-- Quantize existing vectors
INSERT INTO documents_quantized (content, embedding, embedding_i8, embedding_fp16)
SELECT 
    content, 
    embedding, 
    vector_to_int8(embedding),  -- Quantize to INT8 (returns bytea)
    vector_to_halfvec(embedding)  -- Quantize to FP16 (returns halfvec)
FROM documents;

-- Search using quantized vectors (requires dequantization for bytea)
SELECT id, content, 
       (int8_to_vector(embedding_i8) <-> query_vector) AS distance
FROM documents_quantized
ORDER BY int8_to_vector(embedding_i8) <-> query_vector
LIMIT 10;

-- Or use halfvec type directly (automatic handling)
SELECT id, content, embedding_fp16 <-> query_vector AS distance
FROM documents_quantized
ORDER BY embedding_fp16 <-> query_vector
LIMIT 10;
\`\`\`

### Hybrid Search

NeuronDB enables combining vector similarity with full-text search.

**Dense + Sparse Vector Search:**
\`\`\`sql
-- Combine dense and sparse vectors
SELECT id, content,
       (embedding <=> query_vector) * 0.7 + 
       (sparse_embedding <=> sparse_query) * 0.3 AS combined_score
FROM documents
ORDER BY combined_score
LIMIT 10;
\`\`\`

**Vector + Full-Text Search:**
\`\`\`sql
-- Hybrid search with full-text
SELECT id, content,
       (embedding <=> query_vector) * 0.6 +
       ts_rank_cd(to_tsvector('english', content), query_ts) * 0.4 AS score
FROM documents
WHERE to_tsvector('english', content) @@ query_ts
ORDER BY score
LIMIT 10;
\`\`\`

**Reciprocal Rank Fusion (RRF):**
\`\`\`sql
-- Manual RRF implementation combining vector and full-text search
WITH vector_results AS (
    SELECT id, content, embedding <=> query_vector AS distance,
           ROW_NUMBER() OVER (ORDER BY embedding <=> query_vector) AS rank
    FROM documents
    ORDER BY embedding <=> query_vector
    LIMIT 20
),
text_results AS (
    SELECT id, content, ts_rank_cd(to_tsvector('english', content), query_ts) AS score,
           ROW_NUMBER() OVER (ORDER BY ts_rank_cd(to_tsvector('english', content), query_ts) DESC) AS rank
    FROM documents
    WHERE to_tsvector('english', content) @@ query_ts
    ORDER BY score DESC
    LIMIT 20
)
SELECT COALESCE(v.id, t.id) AS id, 
       COALESCE(v.content, t.content) AS content,
       1.0 / (60 + v.rank) + 1.0 / (60 + t.rank) AS rrf_score
FROM vector_results v
FULL OUTER JOIN text_results t ON v.id = t.id
ORDER BY rrf_score DESC
LIMIT 10;
\`\`\`

### ML Algorithms Integration

![ML Algorithms Overview](/blog/neurondb-vs-pgvector/diagram-ml-algorithms.svg?v=1)

NeuronDB includes 52+ machine learning algorithms covering clustering (K-Means, DBSCAN, Gaussian Mixture Model), classification (Random Forest, SVM, Neural Networks), regression (Linear, Ridge, Lasso, Deep Learning), dimensionality reduction (PCA), and quality metrics (Recall@K, Precision@K, MRR, Silhouette Score).

**Usage:**
\`\`\`sql
-- Train a K-Means clustering model on document embeddings
-- Note: Actual function names may vary; check NeuronDB documentation for current API
SELECT train_kmeans(
    'documents',      -- table name
    'embedding',      -- vector column
    k => 10           -- number of clusters
);

-- Alternative: Use clustering functions directly
SELECT id, content, 
       kmeans_cluster(embedding, 10) AS cluster_id
FROM documents
ORDER BY cluster_id;

-- Results:
--  id |              content               | cluster_id
-- ----+------------------------------------+------------
--   5 | Machine learning tutorial          |          0
--   2 | Neural network guide              |          0
--   8 | Deep learning introduction         |          1
--   3 | Natural language processing        |          1
-- (4 rows)

-- Note: For production use, refer to NeuronDB documentation for exact ML function names
\`\`\`

### Embedding Generation

NeuronDB provides in-database embedding generation.

**Text Embeddings:**
\`\`\`sql
-- Generate embeddings from text (single document)
INSERT INTO documents (content, embedding)
VALUES ('Machine learning basics', embed_text('Machine learning basics'));

-- Batch embedding generation (process multiple documents)
INSERT INTO documents (content, embedding)
SELECT content, embed_text(content, 'sentence-transformers/all-MiniLM-L6-v2')
FROM raw_documents
WHERE content IS NOT NULL;

-- Or use batch function for better performance
INSERT INTO documents (content, embedding)
SELECT content, unnest(embed_text_batch(
    ARRAY(SELECT content FROM raw_documents WHERE content IS NOT NULL),
    'sentence-transformers/all-MiniLM-L6-v2'
))
FROM raw_documents;

-- Verify embeddings were generated
SELECT id, content, vector_dims(embedding) AS dimensions
FROM documents
LIMIT 5;

-- Results:
--  id |              content               | dimensions
-- ----+------------------------------------+------------
--   1 | Machine learning basics            |        384
--   2 | Neural networks introduction      |        384
--   3 | Deep learning concepts             |        384
-- (3 rows)
\`\`\`

**Image Embeddings:**
\`\`\`sql
-- Generate embeddings from images (requires image data as bytea)
-- First, load image data
CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    image_path TEXT,
    image_data bytea,
    embedding vector(512)
);

-- Insert image and generate embedding
INSERT INTO images (image_path, image_data, embedding)
SELECT 
    '/path/to/image.jpg',
    pg_read_binary_file('/path/to/image.jpg'),
    embed_image(pg_read_binary_file('/path/to/image.jpg'), 'clip')
WHERE pg_read_binary_file('/path/to/image.jpg') IS NOT NULL;
\`\`\`

**Multimodal Embeddings:**
\`\`\`sql
-- CLIP embeddings (text and image)
SELECT clip_embed('a red car', 'text') AS text_embedding,
       clip_embed('/path/to/car.jpg', 'image') AS image_embedding;

-- Multimodal embedding combining text and image
SELECT embed_multimodal('a red car', image_data, 'clip') AS multimodal_embedding
FROM images;
\`\`\`

**Model Management:**
\`\`\`sql
-- List available embedding model configurations
SELECT * FROM list_embedding_model_configs();

-- Configure an embedding model
SELECT configure_embedding_model(
    'sentence-transformers/all-MiniLM-L6-v2',
    '{"device": "cuda", "batch_size": 32}'::jsonb
);

-- Get model configuration
SELECT get_embedding_model_config('sentence-transformers/all-MiniLM-L6-v2');

-- Use cached embeddings (faster for repeated queries)
SELECT embed_cached('text to embed', 'sentence-transformers/all-MiniLM-L6-v2') AS embedding;
\`\`\`

### RAG Pipeline Support

NeuronDB includes complete RAG pipeline support through SQL functions. The exact function names may vary by version; refer to NeuronDB documentation for current API.

**Document Processing and Chunking:**
\`\`\`sql
-- Create chunks from documents for RAG
CREATE TABLE document_chunks AS
SELECT 
    id,
    content,
    embed_text(content) AS embedding,
    chunk_number
FROM (
    SELECT 
        id,
        content,
        generate_subarray(
            regexp_split_to_array(content, E'\\\\s+'),
            1,
            500
        ) AS chunk,
        generate_series(1, array_length(regexp_split_to_array(content, E'\\\\s+'), 1) / 500 + 1) AS chunk_number
    FROM documents
) sub;

-- Create index for fast retrieval
CREATE INDEX ON document_chunks USING hnsw (embedding vector_cosine_ops);
\`\`\`

**Retrieval with Reranking:**
\`\`\`sql
-- RAG retrieval: find relevant chunks
WITH query AS (
    SELECT embed_text('What is machine learning?') AS query_vector
)
SELECT 
    dc.id,
    dc.content,
    dc.embedding <=> q.query_vector AS distance,
    1 - (dc.embedding <=> q.query_vector) AS similarity
FROM document_chunks dc, query q
ORDER BY dc.embedding <=> q.query_vector
LIMIT 5;

-- Results show top 5 most relevant chunks for context
\`\`\`

**Note:** For complete RAG pipeline with LLM integration, NeuronDB provides functions for context building and generation. Refer to the [RAG Complete Guide](/blog/rag-complete-guide) for detailed examples.

### Monitoring and Observability

![Monitoring and Observability](/blog/neurondb-vs-pgvector/diagram-monitoring-observability.svg?v=1)

NeuronDB provides enhanced monitoring through dedicated views (\`neurondb.index_stats\`, \`neurondb.query_stats\`, \`neurondb.gpu_stats\`) tracking query latency (p50, p95, p99), throughput (QPS), index size and utilization, GPU memory usage, and cache hit rates. pgvector relies on standard PostgreSQL monitoring views.

## Migration Guide

If you're currently using pgvector and considering NeuronDB, migration is straightforward due to full compatibility. This section provides step-by-step instructions, common pitfalls to avoid, and troubleshooting guidance.

![Migration Flow](/blog/neurondb-vs-pgvector/diagram-migration-flow.svg?v=1)

### Pre-Migration Checklist

1. **Backup Database:**

\`\`\`sql
pg_dump -Fc database_name > backup.dump
\`\`\`

2. **Document Current Configuration:**
   - List all vector columns and their dimensions
   - Document index configurations
   - Note any custom functions or queries
   - Record performance baselines

3. **Verify PostgreSQL Version:**
   - NeuronDB requires PostgreSQL 16, 17, or 18
   - pgvector supports PostgreSQL 13+

### Migration Steps

**Step 1: Drop pgvector Extension**

\`\`\`sql
-- Drop pgvector extension
DROP EXTENSION vector CASCADE;
\`\`\`

The CASCADE option will drop dependent objects. If you have custom functions or views using vector types, you need to recreate them.

**Step 2: Install NeuronDB Extension**

\`\`\`sql
-- Install NeuronDB extension
CREATE EXTENSION neurondb;
\`\`\`

**Step 3: Verify Data Integrity**

\`\`\`sql
-- Verify vector data is intact
SELECT COUNT(*), vector_dims(embedding) 
FROM your_table 
GROUP BY vector_dims(embedding);

-- Test basic operations
SELECT id, embedding <-> '[1,2,3]'::vector AS distance
FROM your_table
LIMIT 5;
\`\`\`

**Step 4: Recreate Indexes**

While existing data works without index recreation, recreating indexes is recommended for optimal performance:

\`\`\`sql
-- Drop old indexes
DROP INDEX IF EXISTS your_table_embedding_idx;

-- Recreate HNSW index (same syntax)
CREATE INDEX your_table_embedding_idx 
ON your_table USING hnsw (embedding vector_l2_ops)
WITH (m = 16, ef_construction = 64);

-- Or recreate IVF index
-- Note: Use 'ivf' instead of 'ivfflat', though 'ivfflat' alias works
CREATE INDEX your_table_embedding_idx 
ON your_table USING ivf (embedding vector_l2_ops)
WITH (lists = 100);
\`\`\`

**Step 5: Update Query-Time Parameters**

If you were using session variables for ef_search or probes, update to NeuronDB's GUC system:

\`\`\`sql
-- Old pgvector approach (still works)
SET ef_search = 128;

-- NeuronDB GUC approach (recommended)
SET neurondb.hnsw_ef_search = 128;
SET neurondb.ivf_probes = 10;

-- Verify settings
SHOW neurondb.hnsw_ef_search;
SHOW neurondb.ivf_probes;
\`\`\`

**Step 6: Test Compatibility**

Run compatibility tests:

\`\`\`sql
-- Test operators
SELECT 
    embedding <-> query_vector AS l2_dist,
    embedding <=> query_vector AS cosine_dist,
    embedding <#> query_vector AS ip_dist
FROM your_table
ORDER BY embedding <-> query_vector
LIMIT 10;

-- Test functions
SELECT 
    vector_dims(embedding),
    l2_norm(embedding),
    normalize_l2(embedding)
FROM your_table
LIMIT 1;

-- Test aggregates
SELECT avg(embedding), sum(embedding) 
FROM your_table;
\`\`\`

**Step 7: Enable Optional Features (NeuronDB Only)**

\`\`\`sql
-- Enable GPU acceleration (if available)
SET neurondb.use_gpu = on;
SET neurondb.gpu_backend = 'cuda';  -- or 'rocm', 'metal'

-- Verify GPU status
SELECT * FROM neurondb.gpu_stats;
\`\`\`

### Technical Terms Glossary

Understanding these PostgreSQL terms helps clarify the technical details:

- **varlena**: PostgreSQL's variable-length data structure format, used for storing vectors and other variable-size data types
- **TOAST**: The Oversized-Attribute Storage Technique - PostgreSQL's automatic compression system for large values exceeding page size limits
- **typmod**: Type modifier system in PostgreSQL that allows specifying constraints like \`vector(768)\` to fix dimensions
- **GUC**: Grand Unified Configuration - PostgreSQL's configuration system for settings like \`neurondb.use_gpu\`
- **Operator Class**: Defines how indexes work with specific operators (e.g., \`vector_l2_ops\` for L2 distance indexing)

### Common Pitfalls

1. **Index Name Differences:**

   - pgvector uses \`ivfflat\` as access method name
   - NeuronDB uses \`ivf\` (canonical) but supports \`ivfflat\` alias
   - Both work identically, but \`ivf\` is recommended for new indexes

2. **Query-Time Parameters:**

   - pgvector uses session variables: \`SET ef_search = 128\`
   - NeuronDB uses GUCs: \`SET neurondb.hnsw_ef_search = 128\`
   - Both approaches work, but GUCs provide better integration

3. **Function Name Differences:**

   - pgvector: \`normalize_l2(vector)\`
   - NeuronDB: \`normalize_l2(vector)\` (compatible) or \`vector_normalize(vector)\` (canonical)
   - Both work, but canonical names are recommended for new code

4. **Dimension Constraints:**

   - Both support up to 16,000 dimensions
   - Verify dimension constraints match between extensions
   - Sparse vectors in NeuronDB support up to 1,000,000 dimensions

5. **Index Build Time:**

   - Index recreation takes significant time for large datasets
   - Consider building indexes during maintenance windows
   - Monitor progress using \`pg_stat_progress_create_index\`

### Rollback Plan

If migration issues occur, rollback is straightforward:

\`\`\`sql
-- Drop NeuronDB extension
DROP EXTENSION neurondb CASCADE;

-- Reinstall pgvector
CREATE EXTENSION vector;

-- Recreate indexes if needed
CREATE INDEX your_table_embedding_idx 
ON your_table USING hnsw (embedding vector_l2_ops);
\`\`\`

Vector data remains intact during extension changes. Both extensions use compatible storage formats.

![Migration Path](/blog/neurondb-vs-pgvector/diagram-migration-path.svg?v=1)

### Troubleshooting Migration Issues

**Issue: Extension fails to create**
- Verify PostgreSQL version is 16, 17, or 18: \`SELECT version();\`
- Check extension files are installed: \`SHOW sharedir;\` then verify \`neurondb\` directory exists
- Review PostgreSQL logs for compilation errors

**Issue: Index creation fails**
- Ensure sufficient disk space (HNSW indexes can be 2-3x table size)
- Check available memory (index building is memory-intensive)
- Verify vector dimensions match: \`SELECT vector_dims(embedding) FROM your_table LIMIT 1;\`

**Issue: Performance degradation after migration**
- Recreate indexes (old indexes may not be optimized)
- Update query-time parameters (\`ef_search\`, \`probes\`)
- Enable GPU acceleration if available
- Check index usage: \`EXPLAIN ANALYZE\` your queries

**Issue: Function not found errors**
- Verify extension is installed: \`SELECT * FROM pg_extension WHERE extname = 'neurondb';\`
- Check function exists: \`SELECT proname FROM pg_proc WHERE proname LIKE '%vector%';\`
- Reload extension if needed: \`ALTER EXTENSION neurondb UPDATE;\`

### Performance Comparison After Migration

After migration, compare performance:

\`\`\`sql
-- Before migration: Record baseline
EXPLAIN ANALYZE
SELECT id, embedding <-> query_vector AS distance
FROM documents
ORDER BY embedding <-> query_vector
LIMIT 10;
-- Note: Planning Time and Execution Time

-- After migration: Compare with same query
EXPLAIN ANALYZE
SELECT id, embedding <-> query_vector AS distance
FROM documents
ORDER BY embedding <-> query_vector
LIMIT 10;

-- Enable GPU and compare again
SET neurondb.use_gpu = on;
EXPLAIN ANALYZE
SELECT id, embedding <-> query_vector AS distance
FROM documents
ORDER BY embedding <-> query_vector
LIMIT 10;
\`\`\`

Expected improvements:
- **CPU-only**: 2-4x speedup with SIMD optimizations
- **GPU-enabled**: 5-15x speedup depending on GPU and batch size
- **Index build time**: 10x faster with optimized algorithms

## Use Case Recommendations

Choosing between pgvector and NeuronDB depends on your specific requirements, hardware availability, and feature needs. This section provides guidance for common scenarios and decision criteria to help you select the right solution.

![Use Case Decision Tree](/blog/neurondb-vs-pgvector/diagram-use-case-decision-tree.svg?v=1)

### Choose pgvector When:

**Simple Use Cases:**
- Basic semantic search with pre-computed embeddings
- Small to medium datasets (< 10M vectors)
- CPU-only infrastructure without GPU access
- Minimal feature requirements (just vector similarity search)

**Organizational Factors:**
- Existing pgvector deployments (minimal migration effort)
- Preference for MIT-licensed open source solutions
- Team familiarity with pgvector's simple API
- Limited budget for advanced features

**Technical Constraints:**
- PostgreSQL versions 13-15 (NeuronDB requires 16+)
- No need for in-database ML or embedding generation
- Standard hardware without specialized accelerators

**Industry Examples:**
- Small e-commerce sites with product recommendations
- Documentation search for internal wikis
- Simple content similarity matching
- Prototype and proof-of-concept projects

### Choose NeuronDB When:

![Choose NeuronDB When](/blog/neurondb-vs-pgvector/diagram-choose-neurondb.svg?v=1)

1. **GPU Acceleration Required:**

   - Have NVIDIA, AMD, or Apple Silicon GPUs
   - Need maximum query performance
   - Batch processing is common
   - Throughput is critical

2. **ML/AI Integration:**

   - Need in-database ML algorithms
   - Require embedding generation
   - Want complete RAG pipeline support
   - Need model management

3. **Advanced Vector Features:**

   - Require quantization for storage efficiency
   - Need sparse vector support
   - Want hybrid search capabilities
   - Need specialized vector types

4. **Production AI Applications:**

   - Building production RAG systems
   - Need monitoring
   - Require background workers
   - Want automated maintenance

5. **Enterprise Features:**

   - Need advanced security (RLS for embeddings)
   - Require multi-tenancy support
   - Want monitoring
   - Need audit logging

6. **Performance-Critical Applications:**

   - Need SIMD optimizations
   - Require maximum throughput
   - Want automatic index tuning
   - Need query optimization

### Industry-Specific Use Cases

**E-Commerce & Retail:**
- **pgvector**: Small catalogs (< 1M products), basic product recommendations
- **NeuronDB**: Large catalogs (10M+ products), real-time personalization, hybrid search combining product descriptions with metadata filters, GPU-accelerated batch processing for recommendation pipelines

**Healthcare & Life Sciences:**
- **pgvector**: Simple document search in medical records
- **NeuronDB**: Drug discovery (molecular similarity search with sparse vectors), patient matching, medical image search with multimodal embeddings, compliance with data sovereignty requirements (on-premises deployment)

**Financial Services:**
- **pgvector**: Basic fraud detection pattern matching
- **NeuronDB**: Real-time fraud detection with ML models, transaction similarity analysis, customer behavior clustering, regulatory compliance with audit logging and RLS

**Content & Media:**
- **pgvector**: Basic content recommendation
- **NeuronDB**: Large-scale content platforms (100M+ articles), video/image similarity search, content moderation with ML classification, personalized content feeds with reranking

**Enterprise Search:**
- **pgvector**: Simple intranet search
- **NeuronDB**: Enterprise knowledge bases with RAG pipelines, hybrid search combining vector similarity with full-text, multi-tenant SaaS applications with security isolation

### Decision Criteria Matrix

| Criteria | pgvector | NeuronDB |
|----------|----------|----------|
| **Dataset Size** | < 10M vectors | 10M - billions |
| **Query Latency** | 5-10ms (CPU) | 0.5-2ms (GPU), 2-5ms (CPU with SIMD) |
| **Throughput** | 1K-5K QPS | 10K-100K QPS (GPU) |
| **Feature Needs** | Vector search only | Vector + ML + Embeddings + RAG |
| **Hardware** | CPU-only | CPU + optional GPU |
| **PostgreSQL Version** | 13+ | 16+ |
| **License** | MIT (open source) | Proprietary |
| **Learning Curve** | Low | Medium (more features) |
| **Production Features** | Basic | Advanced (monitoring, workers, security) |

### Cost Considerations

**pgvector:**
- Zero licensing cost (MIT license)
- Lower infrastructure costs (CPU-only)
- Minimal training required
- Suitable for cost-sensitive projects

**NeuronDB:**
- Licensing costs (proprietary)
- Potential GPU infrastructure investment
- Training for advanced features
- Higher ROI for production AI applications requiring:
  - Reduced infrastructure costs (no separate vector DB)
  - Faster time-to-market (in-database ML)
  - Lower operational overhead (unified stack)


## Conclusion

Both pgvector and NeuronDB provide vector similarity search capabilities for PostgreSQL. The choice between them depends on specific requirements, hardware availability, and feature needs.

pgvector excels as a focused extension providing essential vector operations. It is ideal for applications requiring basic vector similarity search without additional AI capabilities. The extension's simplicity, wide adoption, and MIT license make it an excellent choice for straightforward use cases.

NeuronDB extends PostgreSQL with comprehensive AI capabilities while maintaining full pgvector compatibility. GPU acceleration, ML algorithms, embedding generation, and RAG pipeline support make it ideal for production AI applications. The extension's advanced features enable complete AI workflows within PostgreSQL, eliminating the need for external services.

**Key Takeaways:**

1. **Compatibility:** NeuronDB maintains 100 percent compatibility with pgvector syntax. This enables seamless migration.

2. **Performance:** NeuronDB provides 2-3x query speedup with GPU acceleration and SIMD optimizations.

3. **Features:** NeuronDB adds 521 SQL functions beyond vector operations, including ML algorithms, embedding generation, and RAG pipeline support.

4. **Use Cases:** Choose pgvector for simplicity. Choose NeuronDB for AI capabilities.

5. **Migration:** Migration from pgvector to NeuronDB is straightforward. No code changes are required for basic operations.

**Recommendations:**

**Start with pgvector if:**
- You need basic vector search
- You prefer a minimal, widely-adopted solution
- Your use case is simple and doesn't require advanced features
- You're working with PostgreSQL 13-15

**Choose NeuronDB if:**
- You need GPU acceleration for performance
- You require ML algorithms for clustering, classification, or regression
- You need in-database embedding generation
- You're building production AI applications with RAG pipelines
- You need advanced monitoring, background workers, or enterprise features

**Consider migration if:**
- You're building production AI applications requiring advanced capabilities
- You need better performance (GPU acceleration, SIMD optimizations)
- You want to consolidate your AI stack into PostgreSQL

Evaluate both extensions for your specific use case, as requirements vary significantly across applications.

The vector database landscape continues evolving. Both extensions are actively developed. pgvector remains the industry standard for basic vector operations. NeuronDB extends what is possible with PostgreSQL extensions for AI applications. Both solutions enable storing and querying vectors alongside relational data. They eliminate the need for separate vector database infrastructure. They maintain PostgreSQL's transactional guarantees. They maintain operational excellence.

## Related Blog Posts

- [NeuronDB a PostgreSQL AI Extension](/blog/neurondb) - Learn about NeuronDB's complete feature set including vector search, ML inference, GPU acceleration, and RAG capabilities

- [PostgreSQL as a Vector Database](/blog/postgresql-vector-database) - Learn how PostgreSQL works as a vector database solution with architecture, performance, and indexing strategies

- [Semantic Search Over Text with NeuronDB](/blog/neurondb-semantic-search-guide) - Build complete semantic search systems with document chunking, embeddings, and hybrid search techniques

- [Vectors in PostgreSQL](/blog/neurondb-vectors) - Guide to working with vectors in PostgreSQL using NeuronDB, covering vector types, operations, distance metrics, and indexing

## Support

For questions, issues, or commercial support, contact [support@neurondb.ai](mailto:support@neurondb.ai)
`;

export default function BlogPost() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'NeuronDB vs pgvector: Feature Comparison and Migration Guide',
    description: 'Complete comparison of NeuronDB and pgvector with migration guide',
    image: 'https://neurondb.ai/blog/neurondb-vs-pgvector/og-image.svg',
    datePublished: '2025-03-02',
    dateModified: '2025-03-02',
    author: {
      '@type': 'Organization',
      name: 'NeuronDB',
      url: 'https://neurondb.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NeuronDB',
      logo: {
        '@type': 'ImageObject',
        url: 'https://neurondb.ai/neurondb_ai_512.ico',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://neurondb.ai/blog/neurondb-vs-pgvector',
    },
    keywords: 'NeuronDB vs pgvector, pgvector comparison, vector database comparison, pgvector migration, PostgreSQL vector extension',
  };

  return (
    <div className="pt-16 relative">
      <BlogPageClient markdown={markdown} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogPageTracker
        slug="neurondb-vs-pgvector"
        title="NeuronDB vs pgvector: Feature Comparison and Migration Guide"
      />
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="flex-1 min-w-0 lg:max-w-5xl">
              <div className="px-4 sm:px-6 lg:px-0">
                <BlogMarkdown>{markdown}</BlogMarkdown>
                
                <div className="border-t border-white/10 pt-8 mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Share This Article</h3>
                  <ShareOnLinkedIn
                    url="https://neurondb.ai/blog/neurondb-vs-pgvector"
                    title="NeuronDB vs pgvector: Feature Comparison and Migration Guide"
                    summary="Complete comparison of NeuronDB and pgvector with migration guide"
                    hashtags={[
                      'NeuronDB',
                      'pgvector',
                      'VectorDatabase',
                      'PostgreSQL',
                      'VectorSearch',
                      'AIDatabase',
                      'DatabaseComparison',
                      'MigrationGuide',
                      'VectorExtension',
                      'PostgreSQLExtension'
                    ]}
                  />
                </div>
              </div>
            </div>
            
            {/* Sidebar - Table of Contents and Related Blogs */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="px-4 sm:px-6 lg:px-0 space-y-8">
                <BlogPageClient markdown={markdown} showTOC={true} />
                <RelatedBlogs 
                  currentSlug="neurondb-vs-pgvector" 
                  allPosts={allBlogPosts}
                  maxPosts={4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}