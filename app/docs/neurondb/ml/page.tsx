import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'

export const metadata: Metadata = {
  title: 'Machine Learning & Embeddings | NeuronDB Documentation',
  description: 'ML inference and embedding generation in NeuronDB with support for multiple models and frameworks',
}

const tableOfContents: TocItem[] = [
  { id: 'ml-capabilities', title: 'ML Capabilities' },
  { id: 'supported-models', title: 'Supported Models' },
  { id: 'ml-functions', title: 'ML Functions' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/analytics',
  label: 'Analytics',
}

const nextLink: NavLink = {
  href: '/docs/neurondb/ml/inference',
  label: 'Inference',
}

export default function MLPage() {
  return (
    <PostgresDocsLayout
      title="Machine Learning & Embeddings"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="ml-capabilities">
        <h2>ML Capabilities</h2>

        <p>NeuronDB provides comprehensive machine learning capabilities with <strong>19 fully implemented ML algorithms</strong> (part of 52 total ML features) in pure C, all supporting GPU acceleration and SIMD optimization. The extension offers in-database ML inference, embedding generation, and complete model lifecycle management.</p>

        <h3>19 Fully Implemented ML Algorithms</h3>
        <p>NeuronDB includes a complete suite of machine learning algorithms organized by category:</p>
        
        <h4>Clustering (5 algorithms):</h4>
        <ul>
          <li><strong>K-Means</strong> - Lloyd&apos;s algorithm with k-means++ initialization, GPU-accelerated</li>
          <li><strong>Mini-batch K-Means</strong> - Efficient variant for large datasets and streaming data</li>
          <li><strong>DBSCAN</strong> - Density-based clustering for arbitrary shapes and noise detection</li>
          <li><strong>Gaussian Mixture Model (GMM)</strong> - EM algorithm for probabilistic clustering</li>
          <li><strong>Hierarchical Clustering</strong> - Agglomerative clustering with multiple linkage criteria</li>
        </ul>

        <h4>Dimensionality Reduction (2 algorithms):</h4>
        <ul>
          <li><strong>PCA</strong> - Principal Component Analysis with SIMD-optimized covariance computation</li>
          <li><strong>PCA Whitening</strong> - Advanced PCA with decorrelation and normalization</li>
        </ul>

        <h4>Quantization (2 algorithms):</h4>
        <ul>
          <li><strong>Product Quantization (PQ)</strong> - Vector compression for 8-16x memory reduction</li>
          <li><strong>Optimized Product Quantization (OPQ)</strong> - Rotation-optimized PQ for better accuracy</li>
        </ul>

        <h4>Outlier Detection (3 methods):</h4>
        <ul>
          <li><strong>Z-Score</strong> - Statistical outlier detection using standard deviations</li>
          <li><strong>Modified Z-Score</strong> - Robust variant using median and MAD (Median Absolute Deviation)</li>
          <li><strong>IQR</strong> - Non-parametric interquartile range method for non-normal distributions</li>
        </ul>

        <h4>Reranking (3 algorithms):</h4>
        <ul>
          <li><strong>MMR (Maximal Marginal Relevance)</strong> - Diversity-focused reranking</li>
          <li><strong>Ensemble Reranking</strong> - Weighted and Borda count methods</li>
          <li><strong>Learning-to-Rank (LTR)</strong> - Machine learning-based ranking</li>
        </ul>

        <h4>Quality Metrics (6 metrics):</h4>
        <ul>
          <li><strong>Recall@K, Precision@K, F1@K</strong> - Search quality metrics for retrieval evaluation</li>
          <li><strong>MRR (Mean Reciprocal Rank)</strong> - Ranking quality measurement</li>
          <li><strong>Davies-Bouldin Index</strong> - Clustering quality measurement (lower is better)</li>
          <li><strong>Silhouette Score</strong> - Clustering cohesion and separation analysis</li>
        </ul>

        <h4>Drift Detection (3 methods):</h4>
        <ul>
          <li><strong>Centroid Drift</strong> - Track changes in cluster centroids over time</li>
          <li><strong>Distribution Divergence</strong> - Statistical distribution comparison</li>
          <li><strong>Temporal Drift Monitoring</strong> - Time-series based drift detection</li>
        </ul>

        <h4>Analytics (4 features):</h4>
        <ul>
          <li><strong>Topic Discovery</strong> - Automatic topic modeling and analysis</li>
          <li><strong>Similarity Histograms</strong> - Analyze similarity distributions in vector space</li>
          <li><strong>KNN Graph Building</strong> - Construct k-nearest neighbor graphs for analysis</li>
          <li><strong>Embedding Quality Assessment</strong> - Evaluate embedding quality and coherence</li>
        </ul>

        <h4>Search (2 algorithms):</h4>
        <ul>
          <li><strong>Hybrid Lexical-Semantic Fusion</strong> - Combine vector and text search signals</li>
          <li><strong>Reciprocal Rank Fusion (RRF)</strong> - Multiple ranking fusion algorithm</li>
        </ul>

        <h4>Traditional ML Algorithms:</h4>
        <p>Additionally supports Random Forest, XGBoost, LightGBM, CatBoost, Linear/Logistic Regression, Ridge, Lasso, SVM, KNN, Naive Bayes, Decision Trees, Neural Networks, and Deep Learning models for classification, regression, and advanced ML workflows.</p>

        <h3>In-Database ML Inference</h3>
        <p>Run ML models directly inside PostgreSQL with zero data movement, batch inference for high throughput, real-time predictions with low latency, and automatic GPU acceleration when available.</p>

        <h3>Embedding Generation</h3>
        <p>Generate embeddings from text, images, and more. Supports OpenAI, Cohere, HuggingFace models, custom model deployment, automatic batching and caching, and multi-modal embeddings (text, image, audio).</p>

        <h3>Model Management</h3>
        <p>Deploy and manage ML models efficiently with model versioning and rollback, A/B testing support, resource quota management, and performance monitoring.</p>

        <h3>AutoML & Feature Store</h3>
        <p>Automated hyperparameter tuning, model selection, and feature management with versioning for production ML workflows.</p>
      </section>

      <section id="supported-models">
        <h2>Supported Models</h2>

        <h3>Text Embeddings</h3>
        <ul>
          <li><strong>text-embedding-ada-002</strong> (OpenAI) - 1536 dimensions - General text similarity</li>
          <li><strong>text-embedding-3-small</strong> (OpenAI) - 1536 dimensions - Efficient embeddings</li>
          <li><strong>text-embedding-3-large</strong> (OpenAI) - 3072 dimensions - High quality embeddings</li>
          <li><strong>embed-english-v3.0</strong> (Cohere) - 1024 dimensions - English text</li>
          <li><strong>embed-multilingual-v3.0</strong> (Cohere) - 1024 dimensions - Multilingual text</li>
        </ul>

        <h3>Sentence Transformers</h3>
        <ul>
          <li><strong>all-MiniLM-L6-v2</strong> (HuggingFace) - 384 dimensions - Fast, lightweight</li>
          <li><strong>all-mpnet-base-v2</strong> (HuggingFace) - 768 dimensions - High quality</li>
          <li><strong>paraphrase-multilingual-MiniLM</strong> (HuggingFace) - 384 dimensions - 50+ languages</li>
        </ul>

        <h3>Multimodal</h3>
        <ul>
          <li><strong>CLIP-ViT-B-32</strong> (OpenAI) - 512 dimensions - Image + text</li>
          <li><strong>CLIP-ViT-L-14</strong> (OpenAI) - 768 dimensions - High quality image search</li>
        </ul>
      </section>

      <section id="ml-functions">
        <h2>ML Functions</h2>

        <h3>embed_text()</h3>
        <p>Generate text embeddings with automatic caching.</p>
        <p><strong>Signature:</strong> <code>embed_text(text TEXT, model TEXT DEFAULT &apos;all-MiniLM-L6-v2&apos;) RETURNS vector</code></p>
        <SqlCodeBlock
          title="Example"
          code={`SELECT embed_text('Machine learning with PostgreSQL');`}
        />

        <h3>embed_text_batch()</h3>
        <p>Generate embeddings for multiple texts efficiently.</p>
        <p><strong>Signature:</strong> <code>embed_text_batch(texts TEXT[], model TEXT DEFAULT &apos;all-MiniLM-L6-v2&apos;) RETURNS vector[]</code></p>
        <SqlCodeBlock
          title="Example"
          code={`SELECT embed_text_batch(ARRAY[&apos;text1&apos;, &apos;text2&apos;], &apos;all-MiniLM-L6-v2&apos;);`}
        />

        <h3>train_random_forest_classifier()</h3>
        <p>Train Random Forest classifier with GPU support.</p>
        <p><strong>Signature:</strong> <code>train_random_forest_classifier(table_name TEXT, features_col TEXT, label_col TEXT, n_trees INT, max_depth INT)</code></p>
        <SqlCodeBlock
          title="Example"
          code={`SELECT train_random_forest_classifier('training_data', 'features', 'label', 100, 10);`}
        />

        <h3>cluster_kmeans()</h3>
        <p>K-means clustering with GPU acceleration.</p>
        <p><strong>Signature:</strong> <code>cluster_kmeans(table_name TEXT, vector_column TEXT, k INTEGER, max_iter INTEGER DEFAULT 100)</code></p>
        <SqlCodeBlock
          title="Example"
          code={`SELECT cluster_kmeans('documents', 'embedding', 5, 100);`}
        />
      </section>

      <section>
        <h2>Next Steps</h2>
        <ul>
          <li><a href="/docs/neurondb/ml/inference">ONNX Inference</a> - Deploy ONNX models</li>
          <li><a href="/docs/neurondb/ml/embeddings">Embeddings</a> - Generate embeddings</li>
          <li><a href="/docs/neurondb/ml/clustering">Clustering</a> - ML clustering algorithms</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
