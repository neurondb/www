import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'

export const metadata: Metadata = {
  title: 'ML Analytics Suite | NeuronDB',
  description: 'Machine learning algorithms for clustering, dimensionality reduction, outlier detection, and embedding quality assessment, all in SQL.',
}

const tableOfContents: TocItem[] = [
  { id: 'clustering', title: 'Clustering Algorithms' },
  { id: 'outlier-detection', title: 'Outlier Detection' },
  { id: 'dimensionality-reduction', title: 'Dimensionality Reduction' },
]

const prevLink: NavLink = {
  href: '/docs/performance',
  label: 'Performance',
}

const nextLink: NavLink = {
  href: '/docs/ml',
  label: 'ML Functions',
}

export default function NeuronDBAnalyticsPage() {
  return (
    <PostgresDocsLayout
      title="ML Analytics Suite"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="clustering">
        <h2>Clustering Algorithms</h2>
        <p>NeuronDB provides 5 clustering algorithms with GPU acceleration:</p>

        <h3>K-Means Clustering</h3>
        <p>Lloyd's K-Means with k-means++ initialization for finding customer segments, topic clusters, and data grouping. GPU-accelerated for large datasets.</p>
        
        <h3>Mini-batch K-Means</h3>
        <p>Efficient variant of K-Means using mini-batches for faster convergence on very large datasets. Ideal for streaming data and incremental updates.</p>

        <h3>DBSCAN</h3>
        <SqlCodeBlock
          title="K-Means clustering"
          code={`-- K-Means clustering
SELECT cluster_kmeans(
  'train_data',   -- table with vectors
  'features',     -- vector column
  7,              -- K clusters
  50              -- max iterations
);

-- Project-based training and versioning
SELECT neurondb_train_kmeans_project(
  'fraud_kmeans',   -- project name
  'train_data',
  'features',
  7,
  50
) AS model_id;

-- List models for a project
SELECT version, algorithm, parameters, is_deployed
FROM neurondb_list_project_models('fraud_kmeans')
ORDER BY version;`}
        />
        <ul>
          <li><strong>Time Complexity:</strong> O(n·k·i·d)</li>
          <li><strong>Initialization:</strong> k-means++</li>
          <li><strong>Project Models:</strong> Versioned training runs</li>
        </ul>

        <h3>DBSCAN</h3>
        <p>Density-based clustering for arbitrary shapes. Automatically detects noise while grouping dense regions.</p>
        <SqlCodeBlock
          title="DBSCAN clustering"
          code={`SELECT *
FROM cluster_dbscan(
  relation      => 'train_data',
  column_name   => 'features',
  eps           => 0.35,
  min_samples   => 12,
  distance      => 'cosine'
);`}
        />
        <ul>
          <li>No need to specify cluster count. DBSCAN finds density-based groupings</li>
          <li>Handles noise and outliers automatically</li>
          <li>Works well with non-spherical clusters</li>
        </ul>

        <h3>Gaussian Mixture Model (GMM)</h3>
        <p>Expectation-Maximization (EM) algorithm for probabilistic clustering. Handles overlapping clusters and provides probability assignments.</p>

        <h3>Hierarchical Clustering</h3>
        <p>Agglomerative hierarchical clustering that builds a tree of clusters. Supports multiple linkage criteria (single, complete, average, Ward).</p>
      </section>

      <section id="outlier-detection">
        <h2>Outlier Detection</h2>
        <p>NeuronDB provides multiple outlier detection methods:</p>

        <h3>Z-Score Outlier Detection</h3>
        <p>Statistical method using standard deviations. Identifies points that deviate significantly from the mean.</p>
        <SqlCodeBlock
          title="Z-score outliers"
          code={`SELECT *
FROM detect_outliers_zscore(
  (SELECT embedding FROM documents),
  2.5  -- threshold
);`}
        />

        <h3>Modified Z-Score</h3>
        <p>Robust variant using median and median absolute deviation (MAD). More resistant to outliers in the training data.</p>

        <h3>IQR (Interquartile Range)</h3>
        <p>Non-parametric method using quartiles. Effective for non-normal distributions.</p>
      </section>

      <section id="dimensionality-reduction">
        <h2>Dimensionality Reduction</h2>
        <p>Reduce vector dimensions while preserving important information:</p>

        <h3>PCA (Principal Component Analysis)</h3>
        <p>Linear dimensionality reduction that finds principal components maximizing variance. SIMD-optimized for fast covariance computation.</p>
        <SqlCodeBlock
          title="PCA"
          code={`SELECT *
FROM reduce_pca(
  (SELECT embedding FROM documents),
  50  -- target dimensions
);`}
        />

        <h3>PCA Whitening</h3>
        <p>Advanced PCA variant that decorrelates and normalizes the data. Produces features with unit variance and zero correlation.</p>

        <h3>Quality Metrics</h3>
        <p>Assess clustering and search quality with comprehensive metrics:</p>
        <ul>
          <li><strong>Recall@K, Precision@K, F1@K:</strong> Search quality metrics</li>
          <li><strong>MRR (Mean Reciprocal Rank):</strong> Ranking quality</li>
          <li><strong>Davies-Bouldin Index:</strong> Clustering quality (lower is better)</li>
          <li><strong>Silhouette Score:</strong> Clustering cohesion and separation</li>
        </ul>

        <h3>Drift Detection</h3>
        <p>Monitor data distribution changes over time:</p>
        <ul>
          <li><strong>Centroid Drift:</strong> Track changes in cluster centroids</li>
          <li><strong>Distribution Divergence:</strong> Measure statistical differences</li>
          <li><strong>Temporal Drift Monitoring:</strong> Time-series based drift detection</li>
        </ul>

        <h3>Topic Discovery</h3>
        <p>Automatic topic modeling and analysis for text data. Identifies latent topics in document collections.</p>

        <h3>Similarity Histograms</h3>
        <p>Analyze similarity distributions in your vector space for quality assessment and optimization.</p>

        <h3>KNN Graph Building</h3>
        <p>Construct k-nearest neighbor graphs for graph-based analysis and community detection.</p>
      </section>

      <section>
        <h2>Next Steps</h2>
        <ul>
          <li><a href="/docs/ml">ML Functions</a> - Complete ML API reference</li>
          <li><a href="/docs/ml/clustering">Clustering Guide</a> - Detailed clustering documentation</li>
          <li><a href="/docs/performance">Performance</a> - Optimize ML operations</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
