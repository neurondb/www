import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock, User, Tag, Eye, BookOpen, Users, GraduationCap } from 'lucide-react'
import FooterTemplate from '@/components/templates/FooterTemplate'

export const metadata: Metadata = {
  title: 'AI Tutorials from Beginner to Advanced | NeuronDB',
  description: 'AI and machine learning tutorials covering fundamentals to advanced topics. Learn machine learning, neural networks, embeddings, transformers, LLMs, vector search, semantic search, and RAG with Python and SQL examples.',
  keywords: ['AI tutorials', 'machine learning tutorials', 'neural networks', 'embeddings', 'transformers', 'LLM tutorials', 'vector search', 'semantic search', 'RAG tutorials', 'Python ML', 'SQL ML', 'AI education'],
  authors: [{ name: 'NeuronDB Team' }],
  openGraph: {
    title: 'AI Tutorials from Beginner to Advanced | NeuronDB',
    description: 'AI and machine learning tutorials covering fundamentals to advanced topics.',
    url: 'https://neurondb.ai/tutorials',
    siteName: 'NeuronDB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tutorials from Beginner to Advanced | NeuronDB',
    description: 'AI and machine learning tutorials covering fundamentals to advanced topics.',
    creator: '@neurondb',
  },
  alternates: {
    canonical: 'https://neurondb.ai/tutorials',
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
}

// Tutorial statistics
const tutorialStats = [
  { label: 'Total Tutorials', value: '18', icon: BookOpen, color: 'text-white' },
  { label: 'Levels', value: '3', icon: GraduationCap, color: 'text-white' },
  { label: 'Categories', value: '1', icon: Tag, color: 'text-white' },
  { label: 'Authors', value: '1', icon: Users, color: 'text-white' }
]

const tutorials = [
  {
    slug: 'ai-tutorial-01-introduction',
    title: 'Introduction to Machine Learning',
    excerpt: 'Learn what machine learning is and how it differs from traditional programming. Covers supervised, unsupervised, and reinforcement learning with Python and SQL examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '20 min read',
    level: 'Beginner',
    order: 1,
  },
  {
    slug: 'ai-tutorial-02-data-preparation',
    title: 'Data Preparation and Feature Engineering',
    excerpt: 'Data collection, cleaning, feature selection, and transformation. Handle missing values, outliers, normalization, and standardization with practical examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '25 min read',
    level: 'Beginner',
    order: 2,
  },
  {
    slug: 'ai-tutorial-03-linear-models',
    title: 'Linear Models: Regression and Classification',
    excerpt: 'Understand linear regression and logistic regression. Learn cost functions, gradient descent, and model evaluation metrics with Python and SQL implementations.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '22 min read',
    level: 'Beginner',
    order: 3,
  },
  {
    slug: 'ai-tutorial-04-neural-networks',
    title: 'Neural Networks: From Perceptrons to Deep Learning',
    excerpt: 'Build neural networks from scratch. Learn perceptrons, multi-layer networks, activation functions, and forward propagation with NumPy and SQL storage examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '28 min read',
    level: 'Beginner',
    order: 4,
  },
  {
    slug: 'ai-tutorial-05-training',
    title: 'Training Neural Networks',
    excerpt: 'Learn loss functions, backpropagation, optimizers, and learning rates. Implement training loops in Python and log metrics in SQL databases.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '30 min read',
    level: 'Beginner',
    order: 5,
  },
  {
    slug: 'ai-tutorial-06-regularization',
    title: 'Overfitting and Regularization',
    excerpt: 'Understand bias-variance tradeoff, overfitting detection, and regularization techniques. Learn L1, L2, dropout, and cross-validation with examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '24 min read',
    level: 'Beginner',
    order: 6,
  },
  {
    slug: 'ai-tutorial-07-embeddings',
    title: 'Embeddings: Representing Data as Vectors',
    excerpt: 'Learn word embeddings, sentence embeddings, and document embeddings. Understand embedding properties, similarity, and arithmetic with practical examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '26 min read',
    level: 'Intermediate',
    order: 7,
  },
  {
    slug: 'ai-tutorial-08-transformers',
    title: 'Transformers: Architecture and Self-Attention',
    excerpt: 'Learn the transformer architecture and self-attention mechanism. Learn multi-head attention, encoder-decoder structures, and positional encoding.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '32 min read',
    level: 'Intermediate',
    order: 8,
  },
  {
    slug: 'ai-tutorial-09-llms',
    title: 'Large Language Models: How LLMs Work',
    excerpt: 'Understand pre-training, fine-tuning, tokenization, and model architectures. Learn GPT, BERT, and T5 with inference and generation examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '28 min read',
    level: 'Intermediate',
    order: 9,
  },
  {
    slug: 'ai-tutorial-10-vector-search',
    title: 'Vector Search: Similarity and Distance Metrics',
    excerpt: 'Learn vector similarity concepts and distance metrics. Learn cosine, Euclidean, and Manhattan distances with indexing strategies and SQL examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '24 min read',
    level: 'Intermediate',
    order: 10,
  },
  {
    slug: 'ai-tutorial-11-semantic-search',
    title: 'Semantic Search: Finding Meaning in Text',
    excerpt: 'Build semantic search systems with document chunking, query processing, and ranking. Learn keyword vs semantic search with implementations.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '30 min read',
    level: 'Intermediate',
    order: 11,
  },
  {
    slug: 'ai-tutorial-12-rag-fundamentals',
    title: 'RAG Fundamentals: Retrieval-Augmented Generation Basics',
    excerpt: 'Learn RAG architecture, document processing, retrieval strategies, and context building. Build RAG systems with Python and SQL examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '35 min read',
    level: 'Intermediate',
    order: 12,
  },
  {
    slug: 'ai-tutorial-13-advanced-rag',
    title: 'Advanced RAG: Hybrid Search and Reranking',
    excerpt: 'Learn hybrid search combining semantic and keyword search. Learn reranking strategies, multi-vector approaches, and temporal search with SQL examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '32 min read',
    level: 'Advanced',
    order: 13,
  },
  {
    slug: 'ai-tutorial-14-prompt-engineering',
    title: 'Prompt Engineering: Techniques and Best Practices',
    excerpt: 'Learn prompt design principles, few-shot learning, chain-of-thought prompting, and optimization. Build prompt template systems with examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '28 min read',
    level: 'Advanced',
    order: 14,
  },
  {
    slug: 'ai-tutorial-15-model-evaluation',
    title: 'Model Evaluation: Metrics and Testing',
    excerpt: 'Classification and regression metrics. Learn embedding quality metrics, A/B testing, and evaluation suites with SQL storage.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '26 min read',
    level: 'Advanced',
    order: 15,
  },
  {
    slug: 'ai-tutorial-16-fine-tuning',
    title: 'Fine-tuning: Adapting Models to Your Data',
    excerpt: 'Understand transfer learning and fine-tuning strategies. Learn dataset preparation, training procedures, and evaluation with transformer examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '30 min read',
    level: 'Advanced',
    order: 16,
  },
  {
    slug: 'ai-tutorial-17-production',
    title: 'Production Deployment: Scaling and Optimization',
    excerpt: 'Learn model serving architectures, batch vs real-time inference, performance optimization, caching, and monitoring with deployment examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '28 min read',
    level: 'Advanced',
    order: 17,
  },
  {
    slug: 'ai-tutorial-18-advanced-architectures',
    title: 'Advanced Architectures: Multi-vector and Temporal Search',
    excerpt: 'Learn multi-vector embeddings, temporal search patterns, ensemble methods, and advanced indexing with complex architecture implementations.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '30 min read',
    level: 'Advanced',
    order: 18,
  },
]

const TutorialCard = ({ tutorial }: { tutorial: typeof tutorials[0] }) => {
  const levelColors: Record<string, string> = {
    'Beginner': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Intermediate': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Advanced': 'bg-red-500/20 text-red-400 border-red-500/30',
  }

  return (
    <article className="group h-full">
      <Link href={`/tutorials/${tutorial.slug}`} className="block h-full" aria-label={`Read ${tutorial.title}`}>
        <div className="bg-slate-950 rounded-3xl shadow-lg border border-slate-800 overflow-hidden hover:shadow-2xl hover:border-slate-700 transition-all duration-300 h-full flex flex-col">
          {/* Header Image */}
          <div className="relative w-full aspect-[3/2] overflow-hidden flex-shrink-0 border-b border-slate-900">
            <Image
              src={`/tutorials/${tutorial.slug}/header.svg`}
              alt={tutorial.title}
              width={1200}
              height={400}
              className="w-full h-full object-contain bg-slate-950"
              unoptimized
            />
            <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg border border-slate-800">
              {tutorial.level}
            </div>
          </div>
          {/* Content */}
          <div className="p-7 flex flex-col flex-1 bg-slate-950">
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors flex-shrink-0 leading-tight">
              {tutorial.title}
            </h3>
            <p className="text-slate-300 mb-4 line-clamp-3 flex-1 text-sm leading-relaxed">
              {tutorial.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-slate-400 mt-auto flex-shrink-0 font-thin">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{tutorial.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(tutorial.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-yellow-400 group-hover:gap-2 transition-all font-thin">
                <span>Read more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function TutorialsPage() {
  const beginnerTutorials = tutorials.filter(t => t.level === 'Beginner')
  const intermediateTutorials = tutorials.filter(t => t.level === 'Intermediate')
  const advancedTutorials = tutorials.filter(t => t.level === 'Advanced')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Unified Professional Hero */}
      <section
        className="relative text-center overflow-hidden flex items-center h-[400px] pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      >
        <div className="container-extra-wide mx-auto relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">AI Tutorials</h1>
            <p className="text-lg md:text-xl font-normal text-slate-300 mb-6 max-w-2xl mx-auto">
              Guide from beginner to advanced. Learn machine learning, neural networks, embeddings, transformers, and RAG.
            </p>

            {/* Tutorial Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {tutorialStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-thin text-white">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Articles */}
      <div className="py-24 relative overflow-hidden bg-slate-900">
        <div className="container-wide">
          <div className="max-w-7xl mx-auto">
            {/* Beginner Tutorials */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-thin text-white mb-2 tracking-tight">Beginner Level</h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">Foundations of machine learning and neural networks.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
                {beginnerTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.slug} tutorial={tutorial} />
                ))}
              </div>
            </div>

            {/* Intermediate Tutorials */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-thin text-white mb-2 tracking-tight">Intermediate Level</h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">Practical applications with embeddings, transformers, and search.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
                {intermediateTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.slug} tutorial={tutorial} />
                ))}
              </div>
            </div>

            {/* Advanced Tutorials */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-thin text-white mb-2 tracking-tight">Advanced Level</h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">Deep dive into advanced architectures and production deployment.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
                {advancedTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.slug} tutorial={tutorial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTemplate />
    </div>
  )
}



