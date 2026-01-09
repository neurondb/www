'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, BookOpen, Database, Zap, Search, Cpu, Layers, Sparkles, Code, Settings, Box, Activity, Shield, Rocket, FileCode } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavSection {
  title: string
  iconName: string
  items: NavItem[]
}

interface NavItem {
  title: string
  href: string
  items?: NavItem[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Database,
  Cpu,
  Layers,
  Search,
  Sparkles,
  Zap,
  Activity,
  Box,
  Shield,
  Code,
  FileCode,
  Settings,
}

interface NavSectionComponentProps {
  section: NavSection
  pathname: string
}

function NavSectionComponent({ section, pathname }: NavSectionComponentProps) {
  const [isOpen, setIsOpen] = useState(() => {
    // Auto-expand section if current path matches any item
    return section.items.some(item => 
      pathname === item.href || 
      (item.items && item.items.some(subItem => pathname === subItem.href))
    )
  })

  const hasActiveItem = section.items.some(item => 
    pathname === item.href || 
    pathname.startsWith(item.href + '/')
  )

  const IconComponent = iconMap[section.iconName]

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors',
          hasActiveItem && 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
        )}
      >
        {IconComponent && <IconComponent className="w-4 h-4" />}
        <span className="flex-1 text-left">{section.title}</span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 flex-shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="ml-4 mt-1 space-y-1 border-l border-slate-200 dark:border-slate-700 pl-3">
          {section.items.map((item) => (
            <NavItemComponent key={item.href} item={item} pathname={pathname} />
          ))}
        </div>
      )}
    </div>
  )
}

interface NavItemComponentProps {
  item: NavItem
  pathname: string
}

function NavItemComponent({ item, pathname }: NavItemComponentProps) {
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/')

  return (
    <div>
      <Link
        href={item.href}
        className={cn(
          'block px-3 py-1.5 text-sm rounded-md transition-colors',
          isActive
            ? 'text-yellow-600 dark:text-yellow-400 font-medium bg-yellow-50 dark:bg-yellow-900/20'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
        )}
      >
        {item.title}
      </Link>
      {item.items && item.items.length > 0 && (
        <div className="ml-4 mt-1 space-y-1 border-l border-slate-200 dark:border-slate-700 pl-3">
          {item.items.map((subItem) => (
            <NavItemComponent key={subItem.href} item={subItem} pathname={pathname} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function DocsSidebar() {
  const pathname = usePathname()

  const navSections = useMemo<NavSection[]>(() => [
    {
      title: 'Getting Started',
      iconName: 'Rocket',
      items: [
        { title: 'Overview', href: '/docs/getting-started' },
        { title: 'Simple Start', href: '/docs/getting-started/simple-start' },
        { title: 'Docker Quick Start', href: '/docs/getting-started/docker' },
        { title: 'Quick Start Guide', href: '/docs/getting-started/quickstart' },
        { title: 'Installation', href: '/docs/installation' },
        { title: 'Configuration', href: '/docs/configuration' },
      ],
    },
    {
      title: 'Core Features',
      iconName: 'Database',
      items: [
        { title: 'Vector Engine', href: '/docs/vector-engine' },
        { title: 'Vector Types', href: '/docs/features/vector-types' },
        { title: 'Distance Metrics', href: '/docs/features/distance-metrics' },
        { title: 'Indexing', href: '/docs/indexing' },
        { title: 'Quantization', href: '/docs/features/quantization' },
        { title: 'Features Overview', href: '/docs/features' },
      ],
    },
    {
      title: 'ML & Embeddings',
      iconName: 'Cpu',
      items: [
        { title: 'ML Engine', href: '/docs/ml-engine' },
        { title: 'Embedding Engine', href: '/docs/embedding-engine' },
        { title: 'Embeddings', href: '/docs/ml/embeddings' },
        { title: 'Embedding Generation', href: '/docs/ml/embedding-generation' },
        { title: 'Inference', href: '/docs/ml/inference' },
        { title: 'Model Management', href: '/docs/ml/model-management' },
        { title: 'Feature Store', href: '/docs/ml/feature-store' },
        { title: 'Unified API', href: '/docs/ml/unified-api' },
        { title: 'GPU Support', href: '/docs/ml/gpu' },
        { title: 'Text ML', href: '/docs/ml/text-ml' },
      ],
    },
    {
      title: 'ML Algorithms',
      iconName: 'Layers',
      items: [
        { title: 'ML Overview', href: '/docs/ml' },
        { title: 'Classification', href: '/docs/ml/classification' },
        { title: 'Regression', href: '/docs/ml/regression' },
        { title: 'Clustering', href: '/docs/ml/clustering' },
        { title: 'Random Forest', href: '/docs/ml/random-forest' },
        { title: 'Gradient Boosting', href: '/docs/ml/gradient-boosting' },
        { title: 'SVM', href: '/docs/ml/svm' },
        { title: 'Dimensionality Reduction', href: '/docs/ml/dimensionality-reduction' },
        { title: 'Outlier Detection', href: '/docs/ml/outlier-detection' },
        { title: 'Quality Metrics', href: '/docs/ml/quality-metrics' },
        { title: 'Drift Detection', href: '/docs/ml/drift-detection' },
        { title: 'Topic Discovery', href: '/docs/ml/topic-discovery' },
        { title: 'Time Series', href: '/docs/ml/time-series' },
        { title: 'Recommendation Systems', href: '/docs/ml/recommendation-systems' },
        { title: 'Hyperparameter Tuning', href: '/docs/ml/hyperparameter-tuning' },
        { title: 'RAG in ML', href: '/docs/ml/rag' },
      ],
    },
    {
      title: 'Hybrid Search',
      iconName: 'Search',
      items: [
        { title: 'Hybrid Overview', href: '/docs/hybrid/overview' },
        { title: 'Hybrid Search', href: '/docs/hybrid' },
        { title: 'Multi-Vector Search', href: '/docs/hybrid/multi-vector' },
        { title: 'Faceted Search', href: '/docs/hybrid/faceted-search' },
        { title: 'Temporal Search', href: '/docs/hybrid/temporal-search' },
      ],
    },
    {
      title: 'Reranking',
      iconName: 'Sparkles',
      items: [
        { title: 'Reranking Overview', href: '/docs/reranking/overview' },
        { title: 'Cross-Encoder', href: '/docs/reranking/cross-encoder' },
        { title: 'LLM Reranking', href: '/docs/reranking/llm-reranking' },
        { title: 'ColBERT', href: '/docs/reranking/colbert' },
        { title: 'Ensemble', href: '/docs/reranking/ensemble' },
      ],
    },
    {
      title: 'RAG Pipeline',
      iconName: 'Zap',
      items: [
        { title: 'RAG Overview', href: '/docs/rag' },
        { title: 'Document Processing', href: '/docs/rag/document-processing' },
        { title: 'LLM Integration', href: '/docs/rag/llm-integration' },
      ],
    },
    {
      title: 'Background Workers',
      iconName: 'Activity',
      items: [
        { title: 'Workers Overview', href: '/docs/background-workers' },
        { title: 'Queue Worker (neuranq)', href: '/docs/background-workers/neuranq' },
        { title: 'Auto-Tuner (neuranmon)', href: '/docs/background-workers/neuranmon' },
        { title: 'Index Maintenance (neurandefrag)', href: '/docs/background-workers/neurandefrag' },
        { title: 'LLM Processor (neuranllm)', href: '/docs/background-workers/neuranllm' },
      ],
    },
    {
      title: 'GPU Acceleration',
      iconName: 'Cpu',
      items: [
        { title: 'GPU Overview', href: '/docs/gpu' },
        { title: 'CUDA Support', href: '/docs/gpu/cuda-support' },
        { title: 'ROCm Support', href: '/docs/gpu/rocm-support' },
        { title: 'Metal Support', href: '/docs/gpu/metal-support' },
        { title: 'Auto-Detection', href: '/docs/gpu/auto-detection' },
      ],
    },
    {
      title: 'Components',
      iconName: 'Box',
      items: [
        { title: 'NeuronAgent', href: '/neuronagent' },
        { title: 'NeuronMCP', href: '/neuronmcp' },
        { title: 'NeuronDesktop', href: '/neurondesktop' },
      ],
    },
    {
      title: 'Performance & Monitoring',
      iconName: 'Activity',
      items: [
        { title: 'Performance Guide', href: '/docs/performance' },
        { title: 'Monitoring', href: '/docs/performance/monitoring' },
        { title: 'SIMD Optimization', href: '/docs/performance/simd-optimization' },
        { title: 'Analytics', href: '/docs/analytics' },
      ],
    },
    {
      title: 'Security',
      iconName: 'Shield',
      items: [
        { title: 'Security Guide', href: '/docs/security' },
      ],
    },
    {
      title: 'Deployment',
      iconName: 'Rocket',
      items: [
        { title: 'Kubernetes', href: '/docs/deployment/kubernetes' },
        { title: 'Observability', href: '/docs/deployment/observability' },
        { title: 'Operational Scripts', href: '/docs/deployment/scripts' },
      ],
    },
    {
      title: 'Advanced Features',
      iconName: 'Code',
      items: [
        { title: 'Advanced Features', href: '/docs/advanced-features' },
      ],
    },
    {
      title: 'API Reference',
      iconName: 'FileCode',
      items: [
        { title: 'SQL API Reference', href: '/docs/sql-api' },
      ],
    },
    {
      title: 'Troubleshooting',
      iconName: 'Settings',
      items: [
        { title: 'Troubleshooting Guide', href: '/docs/troubleshooting' },
      ],
    },
  ], [])

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0" aria-label="Documentation navigation">
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <div className="bg-slate-50 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-4 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-slate-700">
            <BookOpen className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              Documentation
            </h2>
          </div>
          <nav className="space-y-1" aria-label="Documentation navigation">
            {navSections.map((section) => (
              <NavSectionComponent key={section.title} section={section} pathname={pathname} />
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
}
