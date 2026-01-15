import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'NeuronMCP Tool Catalog | Complete List of 100+ MCP Tools',
  description: 'Complete catalog of all 100+ MCP tools available through NeuronMCP: vector operations, ML tools, RAG, reranking, dataset loading, and PostgreSQL administration.',
  keywords: [
    'NeuronMCP tools',
    'MCP tools catalog',
    '100 MCP tools',
    'vector tools MCP',
    'ML tools MCP',
    'RAG tools MCP',
    'PostgreSQL tools MCP',
    'MCP tool reference'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronmcp/tools',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'vector-tools', title: 'Vector Operations (50+ Tools)' },
  { id: 'ml-tools', title: 'ML Tools' },
  { id: 'rag-tools', title: 'RAG & Reranking Tools' },
  { id: 'postgresql-tools', title: 'PostgreSQL Tools (27 Tools)' },
  { id: 'dataset-tools', title: 'Dataset Loading Tools' },
]

const prevLink: NavLink = {
  href: '/docs/neuronmcp/setup',
  label: 'Setup Guide',
}
const nextLink: NavLink = {
  href: '/docs/neuronmcp/getting-started/installation',
  label: 'Installation',
}

export default function NeuronMCPTools() {
  return (
    <PostgresDocsLayout
      title="NeuronMCP Tool Catalog"
      version="NeuronMCP Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          NeuronMCP provides 100+ tools organized into categories. This catalog lists all available tools with descriptions and parameters.
        </p>
        <p>
          <strong>Total Tools:</strong> 100+ (27 PostgreSQL + 70+ NeuronDB)
        </p>
      </section>

      <section id="vector-tools">
        <h2>Vector Operations (50+ Tools)</h2>
        
        <h3>Vector Search (8 tools)</h3>
        <ul>
          <li><code>vector_search</code> - Vector similarity search with configurable distance metrics</li>
          <li><code>vector_search_l2</code> - L2 (Euclidean) distance search</li>
          <li><code>vector_search_cosine</code> - Cosine similarity search</li>
          <li><code>vector_search_inner_product</code> - Inner product search</li>
          <li><code>vector_similarity</code> - Calculate vector similarity</li>
          <li><code>vector_arithmetic</code> - Vector arithmetic operations</li>
          <li><code>vector_distance</code> - Compute distance between vectors</li>
          <li><code>vector_similarity_unified</code> - Unified vector similarity with multiple metrics</li>
        </ul>

        <h3>Vector Quantization (7 tools)</h3>
        <ul>
          <li><code>vector_quantize</code> - Quantize/dequantize vectors</li>
          <li><code>quantization_analyze</code> - Analyze quantization impact</li>
        </ul>
        <p><strong>Supported Quantization Types:</strong> int8, fp16, binary, uint8, ternary, int4</p>

        <h3>Embeddings (8 tools)</h3>
        <ul>
          <li><code>generate_embedding</code> - Generate text embedding</li>
          <li><code>batch_embedding</code> - Batch generate embeddings</li>
          <li><code>embed_image</code> - Generate image embedding</li>
          <li><code>embed_multimodal</code> - Multimodal embedding (text + image)</li>
          <li><code>embed_cached</code> - Use cached embedding if available</li>
          <li><code>configure_embedding_model</code> - Configure embedding model</li>
          <li><code>get_embedding_model_config</code> - Get model configuration</li>
          <li><code>list_embedding_model_configs</code> - List all model configurations</li>
        </ul>

        <h3>Hybrid Search (7 tools)</h3>
        <ul>
          <li><code>hybrid_search</code> - Semantic + lexical search</li>
          <li><code>reciprocal_rank_fusion</code> - RRF on multiple rankings</li>
          <li><code>semantic_keyword_search</code> - Semantic + keyword search</li>
          <li><code>multi_vector_search</code> - Multiple embeddings per document</li>
          <li><code>faceted_vector_search</code> - Category-aware retrieval</li>
          <li><code>temporal_vector_search</code> - Time-decay relevance scoring</li>
          <li><code>diverse_vector_search</code> - Diverse result set</li>
        </ul>

        <h3>Index Management (6 tools)</h3>
        <ul>
          <li><code>create_hnsw_index</code> - Create HNSW index</li>
          <li><code>create_ivf_index</code> - Create IVF index</li>
          <li><code>get_index_status</code> - Monitor index status and statistics</li>
          <li><code>drop_index</code> - Remove indexes with cleanup</li>
          <li><code>tune_hnsw_index</code> - Tune HNSW index parameters</li>
          <li><code>tune_ivf_index</code> - Tune IVF index parameters</li>
        </ul>
      </section>

      <section id="ml-tools">
        <h2>ML Tools</h2>
        <h3>Training & Prediction (8 tools)</h3>
        <ul>
          <li><code>train_model</code> - Train ML model with 52+ algorithms</li>
          <li><code>predict</code> - Single prediction</li>
          <li><code>predict_batch</code> - Batch prediction</li>
          <li><code>evaluate_model</code> - Evaluate model</li>
          <li><code>list_models</code> - List all models</li>
          <li><code>get_model_info</code> - Get model details</li>
          <li><code>delete_model</code> - Delete model</li>
          <li><code>export_model</code> - Export model</li>
        </ul>

        <h3>Supported Algorithms</h3>
        <ul>
          <li><strong>Classification:</strong> logistic, random_forest, svm, knn, decision_tree, naive_bayes</li>
          <li><strong>Regression:</strong> linear_regression, ridge, lasso</li>
          <li><strong>Clustering:</strong> kmeans, gmm, dbscan, hierarchical</li>
        </ul>

        <h3>Analytics (7 tools)</h3>
        <ul>
          <li><code>analyze_data</code> - General data analysis</li>
          <li><code>cluster_data</code> - Clustering analysis</li>
          <li><code>reduce_dimensionality</code> - Dimensionality reduction (PCA)</li>
          <li><code>detect_outliers</code> - Outlier detection</li>
          <li><code>quality_metrics</code> - Quality metrics (Recall@K, Precision@K, etc.)</li>
          <li><code>detect_drift</code> - Data drift detection</li>
          <li><code>discover_topics</code> - Topic discovery</li>
        </ul>

        <h3>ONNX (4 tools)</h3>
        <ul>
          <li><code>import_onnx_model</code> - Import ONNX model</li>
          <li><code>export_onnx_model</code> - Export ONNX model</li>
          <li><code>get_onnx_model_info</code> - Get ONNX model info</li>
          <li><code>predict_onnx</code> - Predict with ONNX model</li>
        </ul>

        <h3>AutoML (1 tool)</h3>
        <ul>
          <li><code>automl</code> - Automated ML pipeline</li>
        </ul>
      </section>

      <section id="rag-tools">
        <h2>RAG & Reranking Tools</h2>
        <h3>RAG Pipeline</h3>
        <ul>
          <li><code>process_documents</code> - Process and chunk documents</li>
          <li><code>retrieve_context</code> - Semantic search with reranking</li>
          <li><code>generate_response</code> - Generate responses with LLM</li>
        </ul>

        <h3>Reranking (6 tools)</h3>
        <ul>
          <li><code>rerank_cross_encoder</code> - Cross-encoder reranking</li>
          <li><code>rerank_llm</code> - LLM-powered reranking</li>
          <li><code>rerank_cohere</code> - Cohere reranking API</li>
          <li><code>rerank_colbert</code> - ColBERT reranking</li>
          <li><code>rerank_ltr</code> - Learning-to-rank reranking</li>
          <li><code>rerank_ensemble</code> - Ensemble reranking</li>
        </ul>
      </section>

      <section id="postgresql-tools">
        <h2>PostgreSQL Administration (27 Tools)</h2>
        <h3>Server Information (8 tools)</h3>
        <ul>
          <li><code>get_server_version</code> - Get PostgreSQL version</li>
          <li><code>get_database_stats</code> - Get database statistics</li>
          <li><code>list_databases</code> - List all databases</li>
          <li><code>get_connections</code> - Get connection information</li>
          <li><code>get_locks</code> - Get lock information</li>
          <li><code>get_replication_status</code> - Get replication status</li>
          <li><code>get_settings</code> - Get PostgreSQL settings</li>
          <li><code>list_extensions</code> - List installed extensions</li>
        </ul>

        <h3>Database Object Management (8 tools)</h3>
        <ul>
          <li><code>list_tables</code> - List tables</li>
          <li><code>list_indexes</code> - List indexes</li>
          <li><code>list_schemas</code> - List schemas</li>
          <li><code>list_views</code> - List views</li>
          <li><code>list_sequences</code> - List sequences</li>
          <li><code>list_functions</code> - List functions</li>
          <li><code>list_triggers</code> - List triggers</li>
          <li><code>list_constraints</code> - List constraints</li>
        </ul>

        <h3>User and Role Management (9 tools)</h3>
        <ul>
          <li><code>create_user</code>, <code>alter_user</code>, <code>drop_user</code> - User management</li>
          <li><code>create_role</code>, <code>alter_role</code>, <code>drop_role</code> - Role management</li>
          <li><code>grant_permission</code>, <code>revoke_permission</code> - Permission management</li>
          <li><code>grant_role</code>, <code>revoke_role</code> - Role assignment</li>
        </ul>

        <h3>Performance and Statistics (4 tools)</h3>
        <ul>
          <li><code>get_table_stats</code> - Get table statistics</li>
          <li><code>get_index_stats</code> - Get index statistics</li>
          <li><code>get_active_queries</code> - Get active queries</li>
          <li><code>get_wait_events</code> - Get wait events</li>
        </ul>

        <h3>Size and Storage (4 tools)</h3>
        <ul>
          <li><code>get_table_size</code> - Get table size</li>
          <li><code>get_index_size</code> - Get index size</li>
          <li><code>analyze_bloat</code> - Analyze table bloat</li>
          <li><code>get_vacuum_stats</code> - Get vacuum statistics</li>
        </ul>

        <h3>Administration (16 tools)</h3>
        <ul>
          <li><code>explain_query</code>, <code>explain_analyze</code> - Query analysis</li>
          <li><code>vacuum_table</code>, <code>analyze_table</code>, <code>reindex</code> - Maintenance operations</li>
          <li><code>terminate_query</code>, <code>kill_query</code> - Query management</li>
          <li><code>set_config</code>, <code>reload_config</code> - Configuration management</li>
          <li>And more administration tools</li>
        </ul>
      </section>

      <section id="dataset-tools">
        <h2>Dataset Loading Tools</h2>
        <ul>
          <li><code>load_huggingface_dataset</code> - Load datasets from HuggingFace Hub</li>
          <li><code>load_url_dataset</code> - Load CSV, JSON, Parquet from URLs</li>
          <li><code>load_s3_dataset</code> - Load datasets from S3 buckets</li>
          <li><code>load_github_dataset</code> - Load datasets from GitHub repositories</li>
          <li><code>load_local_dataset</code> - Load datasets from local files</li>
          <li><code>auto_embed_dataset</code> - Automatic embedding generation during loading</li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
