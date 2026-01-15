import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { allBlogPosts } from '@/config/blogPosts'

// Vercel ISR Optimization: Regenerate every hour with edge caching
// This ensures fresh sitemap data while maintaining excellent cache performance
// Vercel will cache at the edge for fast global delivery
export const revalidate = 3600 // 1 hour - optimal balance between freshness and performance

// Vercel Edge Runtime: Use edge runtime for faster response times globally
// Note: Edge runtime has limitations, so we use Node.js runtime for full functionality
// export const runtime = 'edge' // Uncomment if edge runtime supports all needed features

// Sitemap best practices for Vercel:
// - All URLs are absolute (required by sitemap protocol)
// - Priorities: 0.0 to 1.0 (homepage = 1.0, important pages = 0.9-0.95, regular = 0.7-0.8, low = 0.5-0.6)
// - Change frequencies: always, hourly, daily, weekly, monthly, yearly, never
// - lastModified: ISO 8601 format (current date for static, actual date for dynamic content)
// - No duplicates (handled by efficient deduplication logic)
// - Maximum 50,000 URLs per sitemap (we're well under this limit)
// - Optimized for Vercel edge caching with proper cache headers

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Optimize for Vercel: Cache domain and date calculations
  const baseUrl = `https://${siteConfig.domain}`
  const currentDate = new Date().toISOString()
  
  // Pre-compute common values for better performance on Vercel
  // This reduces computation during each request

  // Static pages - High priority (Most important pages)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0, // Homepage gets highest priority
    },
    {
      url: `${baseUrl}/neurondb`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/neuronagent`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/neuronmcp`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/neurondesktop`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/demos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/download`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9, // Blog listing page is important
    },
    {
      url: `${baseUrl}/tutorials`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Blog pages - Use actual dates from blog posts for better SEO
  const blogPages: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: post.featured ? 0.85 : 0.75, // Featured posts get higher priority
  }))

  // Tutorial pages - All tutorials
  const tutorialPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/tutorials/ai-tutorial-01-introduction`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-02-data-preparation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-03-linear-models`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-04-neural-networks`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-05-training`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-06-regularization`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-07-embeddings`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-08-transformers`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-09-llms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-10-vector-search`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-11-semantic-search`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-12-rag-fundamentals`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-13-advanced-rag`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-14-prompt-engineering`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-15-model-evaluation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-16-fine-tuning`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-17-production`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/ai-tutorial-18-advanced-architectures`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Documentation main pages (product pages are in productPages, not here)
  const docsMainPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/docs/neurondb`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/docs/neuronagent`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/neuronmcp`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/neurondesktop`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Getting Started - High priority for new users
  const gettingStartedPages: MetadataRoute.Sitemap = [
    // NeuronDB Getting Started
    {
      url: `${baseUrl}/docs/neurondb/getting-started`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/neurondb/getting-started/docker`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95, // High priority - recommended method
    },
    {
      url: `${baseUrl}/docs/neurondb/getting-started/quickstart`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neurondb/getting-started/simple-start`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/neurondb/getting-started/recipes`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/installation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/configuration`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // NeuronAgent Getting Started
    {
      url: `${baseUrl}/docs/neuronagent/getting-started`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/neuronagent/getting-started/installation`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/neuronagent/getting-started/quickstart`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neuronagent/getting-started/configuration`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neuronagent/getting-started/neurondb-integration`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // NeuronMCP Getting Started
    {
      url: `${baseUrl}/docs/neuronmcp/getting-started`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/neuronmcp/getting-started/installation`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/neuronmcp/getting-started/claude-desktop`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // NeuronDesktop Getting Started
    {
      url: `${baseUrl}/docs/neurondesktop/getting-started`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/neurondesktop/getting-started/installation`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/neurondesktop/getting-started/profiles`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ]

  // Deployment & Operations - Cloud-native deployment options
  const deploymentPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neurondb/deployment/kubernetes`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neurondb/deployment/observability`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neurondb/deployment/scripts`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/deployment/ansible`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/deployment/ha-architecture`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/deployment/sizing-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/deployment/upgrade-rollback`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ]

  // Core Features - Vector Search & Indexing
  const coreFeaturePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neurondb/vector-engine`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neurondb/embedding-engine`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neurondb/features`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/features/vector-types`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/features/distance-metrics`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/features/quantization`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/indexing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // ML & Embeddings - Core AI features (embedding-engine already in coreFeaturePages)
  const mlPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neurondb/ml`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9, // Increased priority - 52 ML algorithms
    },
    {
      url: `${baseUrl}/docs/neurondb/ml-engine`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/embeddings`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/embedding-generation`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/inference`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/model-management`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/regression`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/classification`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/clustering`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/random-forest`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/svm`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/gradient-boosting`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/dimensionality-reduction`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/outlier-detection`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/quality-metrics`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/drift-detection`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/topic-discovery`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/time-series`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/recommendation-systems`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/hyperparameter-tuning`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/text-ml`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/feature-store`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/gpu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/unified-api`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/ml/rag`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
  ]

  // Hybrid Search & Reranking
  const hybridPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neurondb/hybrid`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neurondb/hybrid/overview`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/hybrid/multi-vector`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/hybrid/faceted-search`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/hybrid/temporal-search`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Reranking
  const rerankingPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neurondb/reranking/overview`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/reranking/cross-encoder`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/reranking/llm-reranking`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/reranking/colbert`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/reranking/ensemble`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // RAG Pipeline - High priority feature
  const ragPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neurondb/rag`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neurondb/rag/document-processing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/rag/llm-integration`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // GPU Support - High priority feature
  const gpuPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neurondb/gpu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neurondb/gpu/auto-detection`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/gpu/cuda-support`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/gpu/rocm-support`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/gpu/metal-support`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ]

  // Background Workers
  const workerPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neurondb/background-workers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/background-workers/neuranq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/background-workers/neuranmon`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/background-workers/neurandefrag`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/background-workers/neuranllm`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Performance & Analytics
  const performancePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neurondb/performance`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/performance/monitoring`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/performance/simd-optimization`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/analytics`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
  ]

  // Reference Documentation
  const referencePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neurondb/reference/data-types`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/reference/embedding-compatibility`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/reference/glossary`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Security Documentation
  const securityPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neurondb/security`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/security/audit-logging`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/security/field-encryption`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/neurondb/security/rls-embeddings`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // NeuronAgent Documentation Pages
  const neuronAgentPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neuronagent/features`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neuronagent/troubleshooting`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // NeuronMCP Documentation Pages
  const neuronMCPPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neuronmcp/features`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neuronmcp/setup`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neuronmcp/tools`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neuronmcp/getting-started/installation`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/neuronmcp/getting-started/claude-desktop`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // NeuronDesktop Documentation Pages
  const neuronDesktopPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neurondesktop/features`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/docs/neurondesktop/getting-started/installation`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/neurondesktop/getting-started/profiles`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ]

  // Additional Features & Support (hybrid already in hybridPages)
  const additionalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/neurondb/sql-api`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/neurondb/advanced-features`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/docs/neurondb/troubleshooting`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]

  // Combine all sitemap entries, removing duplicates by URL (keep highest priority)
  const allPages = [
    ...staticPages,
    ...blogPages,
    ...tutorialPages,
    ...docsMainPages,
    ...gettingStartedPages,
    ...deploymentPages,
    ...coreFeaturePages,
    ...mlPages,
    ...hybridPages,
    ...rerankingPages,
    ...ragPages,
    ...gpuPages,
    ...workerPages,
    ...performancePages,
    ...referencePages,
    ...securityPages,
    ...neuronAgentPages,
    ...neuronMCPPages,
    ...neuronDesktopPages,
    ...additionalPages,
  ]

  // Optimized deduplication for Vercel: Use Map for O(1) lookups
  // This is more efficient than array-based deduplication
  const urlMap = new Map<string, MetadataRoute.Sitemap[0]>()
  for (const page of allPages) {
    const existing = urlMap.get(page.url)
    // Keep entry with highest priority (better for SEO)
    if (!existing || (page.priority || 0) > (existing.priority || 0)) {
      urlMap.set(page.url, page)
    }
  }

  // Sort by priority (highest first) for better SEO and crawling efficiency
  // Vercel edge will cache this sorted result for fast delivery
  const uniquePages = Array.from(urlMap.values()).sort(
    (a, b) => (b.priority || 0) - (a.priority || 0)
  )

  // Vercel optimization: Log stats only in development to reduce production overhead
  if (process.env.NODE_ENV === 'development') {
    const priorities = uniquePages.map(p => p.priority || 0)
    console.log(`[Sitemap] Generated ${uniquePages.length} URLs`)
    console.log(`[Sitemap] Priority range: ${Math.min(...priorities)} - ${Math.max(...priorities)}`)
    console.log(`[Sitemap] Vercel ISR: Revalidates every ${revalidate}s`)
  }

  // Return optimized sitemap - Vercel will cache this at the edge
  // The sitemap will be regenerated every hour (revalidate = 3600)
  // but served from edge cache for fast global delivery
  return uniquePages
}
