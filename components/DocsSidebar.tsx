'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, BookOpen, Database, Zap, Search, Cpu, Layers, Sparkles, Code, Settings, Box, Activity, Shield, Rocket, FileCode, Users, Workflow, HardDrive, Webhook, Server } from 'lucide-react'
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
  Users,
  Workflow,
  HardDrive,
  Webhook,
  Server,
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
          'w-full flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-800 rounded-md transition-colors',
          hasActiveItem && 'bg-yellow-900/20 text-yellow-400'
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
        <div className="ml-4 mt-1 space-y-1 border-l border-slate-700 pl-3">
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
            ? 'text-yellow-400 font-medium bg-yellow-900/20'
            : 'text-slate-300 hover:text-slate-200 hover:bg-slate-800'
        )}
      >
        {item.title}
      </Link>
      {item.items && item.items.length > 0 && (
        <div className="ml-4 mt-1 space-y-1 border-l border-slate-700 pl-3">
          {item.items.map((subItem) => (
            <NavItemComponent key={subItem.href} item={subItem} pathname={pathname} />
          ))}
        </div>
      )}
    </div>
  )
}

// NeuronDB navigation structure
const neurondbNavSections: NavSection[] = [
  {
    title: 'Getting Started',
    iconName: 'Rocket',
    items: [
      { title: 'Overview', href: '/docs/neurondb' },
      { title: 'Simple Start', href: '/docs/neurondb/getting-started/simple-start' },
      { title: 'Docker Quick Start', href: '/docs/neurondb/getting-started/docker' },
      { title: 'Quick Start Guide', href: '/docs/neurondb/getting-started/quickstart' },
      { title: 'SQL Recipes', href: '/docs/neurondb/getting-started/recipes' },
      { title: 'Installation', href: '/docs/neurondb/installation' },
      { title: 'Configuration', href: '/docs/neurondb/configuration' },
    ],
  },
  {
    title: 'Core Features',
    iconName: 'Database',
    items: [
      { title: 'Vector Engine', href: '/docs/neurondb/vector-engine' },
      { title: 'Vector Types', href: '/docs/neurondb/features/vector-types' },
      { title: 'Distance Metrics', href: '/docs/neurondb/features/distance-metrics' },
      { title: 'Indexing', href: '/docs/neurondb/indexing' },
      { title: 'Quantization', href: '/docs/neurondb/features/quantization' },
      { title: 'Features Overview', href: '/docs/neurondb/features' },
    ],
  },
  {
    title: 'ML & Embeddings',
    iconName: 'Cpu',
    items: [
      { title: 'ML Engine', href: '/docs/neurondb/ml-engine' },
      { title: 'Embedding Engine', href: '/docs/neurondb/embedding-engine' },
      { title: 'Embeddings', href: '/docs/neurondb/ml/embeddings' },
      { title: 'Embedding Generation', href: '/docs/neurondb/ml/embedding-generation' },
      { title: 'Inference', href: '/docs/neurondb/ml/inference' },
      { title: 'Model Management', href: '/docs/neurondb/ml/model-management' },
      { title: 'Feature Store', href: '/docs/neurondb/ml/feature-store' },
      { title: 'Unified API', href: '/docs/neurondb/ml/unified-api' },
      { title: 'GPU Support', href: '/docs/neurondb/ml/gpu' },
      { title: 'Text ML', href: '/docs/neurondb/ml/text-ml' },
    ],
  },
  {
    title: 'ML Algorithms',
    iconName: 'Layers',
    items: [
      { title: 'ML Overview', href: '/docs/neurondb/ml' },
      { title: 'Classification', href: '/docs/neurondb/ml/classification' },
      { title: 'Regression', href: '/docs/neurondb/ml/regression' },
      { title: 'Clustering', href: '/docs/neurondb/ml/clustering' },
      { title: 'Random Forest', href: '/docs/neurondb/ml/random-forest' },
      { title: 'Gradient Boosting', href: '/docs/neurondb/ml/gradient-boosting' },
      { title: 'SVM', href: '/docs/neurondb/ml/svm' },
      { title: 'Dimensionality Reduction', href: '/docs/neurondb/ml/dimensionality-reduction' },
      { title: 'Outlier Detection', href: '/docs/neurondb/ml/outlier-detection' },
      { title: 'Quality Metrics', href: '/docs/neurondb/ml/quality-metrics' },
      { title: 'Drift Detection', href: '/docs/neurondb/ml/drift-detection' },
      { title: 'Topic Discovery', href: '/docs/neurondb/ml/topic-discovery' },
      { title: 'Time Series', href: '/docs/neurondb/ml/time-series' },
      { title: 'Recommendation Systems', href: '/docs/neurondb/ml/recommendation-systems' },
      { title: 'Hyperparameter Tuning', href: '/docs/neurondb/ml/hyperparameter-tuning' },
      { title: 'RAG in ML', href: '/docs/neurondb/ml/rag' },
    ],
  },
  {
    title: 'Hybrid Search',
    iconName: 'Search',
    items: [
      { title: 'Hybrid Overview', href: '/docs/neurondb/hybrid/overview' },
      { title: 'Hybrid Search', href: '/docs/neurondb/hybrid' },
      { title: 'Multi-Vector Search', href: '/docs/neurondb/hybrid/multi-vector' },
      { title: 'Faceted Search', href: '/docs/neurondb/hybrid/faceted-search' },
      { title: 'Temporal Search', href: '/docs/neurondb/hybrid/temporal-search' },
    ],
  },
  {
    title: 'Reranking',
    iconName: 'Sparkles',
    items: [
      { title: 'Reranking Overview', href: '/docs/neurondb/reranking/overview' },
      { title: 'Cross-Encoder', href: '/docs/neurondb/reranking/cross-encoder' },
      { title: 'LLM Reranking', href: '/docs/neurondb/reranking/llm-reranking' },
      { title: 'ColBERT', href: '/docs/neurondb/reranking/colbert' },
      { title: 'Ensemble', href: '/docs/neurondb/reranking/ensemble' },
    ],
  },
  {
    title: 'RAG Pipeline',
    iconName: 'Zap',
    items: [
      { title: 'RAG Overview', href: '/docs/neurondb/rag' },
      { title: 'Document Processing', href: '/docs/neurondb/rag/document-processing' },
      { title: 'LLM Integration', href: '/docs/neurondb/rag/llm-integration' },
    ],
  },
  {
    title: 'Background Workers',
    iconName: 'Activity',
    items: [
      { title: 'Workers Overview', href: '/docs/neurondb/background-workers' },
      { title: 'Queue Worker (neuranq)', href: '/docs/neurondb/background-workers/neuranq' },
      { title: 'Auto-Tuner (neuranmon)', href: '/docs/neurondb/background-workers/neuranmon' },
      { title: 'Index Maintenance (neurandefrag)', href: '/docs/neurondb/background-workers/neurandefrag' },
      { title: 'LLM Processor (neuranllm)', href: '/docs/neurondb/background-workers/neuranllm' },
    ],
  },
  {
    title: 'GPU Acceleration',
    iconName: 'Cpu',
    items: [
      { title: 'GPU Overview', href: '/docs/neurondb/gpu' },
      { title: 'CUDA Support', href: '/docs/neurondb/gpu/cuda-support' },
      { title: 'ROCm Support', href: '/docs/neurondb/gpu/rocm-support' },
      { title: 'Metal Support', href: '/docs/neurondb/gpu/metal-support' },
      { title: 'Auto-Detection', href: '/docs/neurondb/gpu/auto-detection' },
    ],
  },
  {
    title: 'Components',
    iconName: 'Box',
    items: [
      { title: 'NeuronAgent', href: '/docs/neuronagent' },
      { title: 'NeuronMCP', href: '/docs/neuronmcp' },
      { title: 'NeuronDesktop', href: '/docs/neurondesktop' },
    ],
  },
  {
    title: 'Performance & Monitoring',
    iconName: 'Activity',
    items: [
      { title: 'Performance Guide', href: '/docs/neurondb/performance' },
      { title: 'Monitoring', href: '/docs/neurondb/performance/monitoring' },
      { title: 'SIMD Optimization', href: '/docs/neurondb/performance/simd-optimization' },
      { title: 'Analytics', href: '/docs/neurondb/analytics' },
    ],
  },
  {
    title: 'Security',
    iconName: 'Shield',
    items: [
      { title: 'Security Guide', href: '/docs/neurondb/security' },
      { title: 'Audit Logging', href: '/docs/neurondb/security/audit-logging' },
      { title: 'Field Encryption', href: '/docs/neurondb/security/field-encryption' },
      { title: 'RLS Embeddings', href: '/docs/neurondb/security/rls-embeddings' },
    ],
  },
  {
    title: 'Deployment',
    iconName: 'Rocket',
    items: [
      { title: 'Kubernetes', href: '/docs/neurondb/deployment/kubernetes' },
      { title: 'Ansible', href: '/docs/neurondb/deployment/ansible' },
      { title: 'HA Architecture', href: '/docs/neurondb/deployment/ha-architecture' },
      { title: 'Observability', href: '/docs/neurondb/deployment/observability' },
      { title: 'Operational Scripts', href: '/docs/neurondb/deployment/scripts' },
      { title: 'Sizing Guide', href: '/docs/neurondb/deployment/sizing-guide' },
      { title: 'Upgrade & Rollback', href: '/docs/neurondb/deployment/upgrade-rollback' },
    ],
  },
  {
    title: 'Advanced Features',
    iconName: 'Code',
    items: [
      { title: 'Advanced Features', href: '/docs/neurondb/advanced-features' },
    ],
  },
  {
    title: 'API Reference',
    iconName: 'FileCode',
    items: [
      { title: 'SQL API Reference', href: '/docs/neurondb/sql-api' },
      { title: 'Data Types', href: '/docs/neurondb/reference/data-types' },
      { title: 'Embedding Compatibility', href: '/docs/neurondb/reference/embedding-compatibility' },
      { title: 'Glossary', href: '/docs/neurondb/reference/glossary' },
    ],
  },
  {
    title: 'Troubleshooting',
    iconName: 'Settings',
    items: [
      { title: 'Troubleshooting Guide', href: '/docs/neurondb/troubleshooting' },
    ],
  },
]

// NeuronAgent navigation structure
const neuronagentNavSections: NavSection[] = [
  {
    title: 'Getting Started',
    iconName: 'Rocket',
    items: [
      { title: 'Overview', href: '/docs/neuronagent' },
      { title: 'Quick Start', href: '/docs/neuronagent/getting-started/quickstart' },
      { title: 'Installation', href: '/docs/neuronagent/getting-started/installation' },
      { title: 'Configuration', href: '/docs/neuronagent/getting-started/configuration' },
      { title: 'NeuronDB Integration', href: '/docs/neuronagent/getting-started/neurondb-integration' },
    ],
  },
  {
    title: 'Features',
    iconName: 'Zap',
    items: [
      { title: 'Features Overview', href: '/docs/neuronagent/features' },
      { title: 'Memory System', href: '/docs/neuronagent/memory' },
      { title: 'Tool System', href: '/docs/neuronagent/tools' },
      { title: 'Multi-Agent Collaboration', href: '/docs/neuronagent/multi-agent' },
      { title: 'Workflow Engine', href: '/docs/neuronagent/workflow' },
      { title: 'Planning & Reflection', href: '/docs/neuronagent/planning' },
      { title: 'Quality & Evaluation', href: '/docs/neuronagent/evaluation' },
      { title: 'Budget & Cost Management', href: '/docs/neuronagent/budget' },
    ],
  },
  {
    title: 'Troubleshooting',
    iconName: 'Settings',
    items: [
      { title: 'Troubleshooting Guide', href: '/docs/neuronagent/troubleshooting' },
    ],
  },
]

// NeuronMCP navigation structure
const neuronmcpNavSections: NavSection[] = [
  {
    title: 'Getting Started',
    iconName: 'Rocket',
    items: [
      { title: 'Overview', href: '/docs/neuronmcp' },
      { title: 'Installation', href: '/docs/neuronmcp/getting-started/installation' },
      { title: 'Claude Desktop Setup', href: '/docs/neuronmcp/getting-started/claude-desktop' },
      { title: 'Setup Guide', href: '/docs/neuronmcp/setup' },
    ],
  },
  {
    title: 'Features',
    iconName: 'Zap',
    items: [
      { title: 'Features Overview', href: '/docs/neuronmcp/features' },
      { title: 'MCP Protocol', href: '/docs/neuronmcp/protocol' },
      { title: 'Tool Registration', href: '/docs/neuronmcp/features' },
    ],
  },
  {
    title: 'Tools & Resources',
    iconName: 'Box',
    items: [
      { title: 'Tool Catalog', href: '/docs/neuronmcp/tools' },
      { title: 'Vector Operations', href: '/docs/neuronmcp/tools' },
      { title: 'ML Tools', href: '/docs/neuronmcp/tools' },
      { title: 'RAG Tools', href: '/docs/neuronmcp/tools' },
      { title: 'PostgreSQL Tools', href: '/docs/neuronmcp/tools' },
    ],
  },
]

// NeuronDesktop navigation structure
const neurondesktopNavSections: NavSection[] = [
  {
    title: 'Getting Started',
    iconName: 'Rocket',
    items: [
      { title: 'Overview', href: '/docs/neurondesktop' },
      { title: 'Installation', href: '/docs/neurondesktop/getting-started/installation' },
      { title: 'Profile Configuration', href: '/docs/neurondesktop/getting-started/profiles' },
    ],
  },
  {
    title: 'Features',
    iconName: 'Zap',
    items: [
      { title: 'Features Overview', href: '/docs/neurondesktop/features' },
      { title: 'Unified Dashboard', href: '/docs/neurondesktop/features' },
      { title: 'MCP Console', href: '/docs/neurondesktop/features' },
      { title: 'NeuronDB Console', href: '/docs/neurondesktop/features' },
      { title: 'Agent Management', href: '/docs/neurondesktop/features' },
    ],
  },
]

export default function DocsSidebar() {
  const pathname = usePathname()

  const navSections = useMemo<NavSection[]>(() => {
    // Determine which product we're viewing based on pathname
    if (pathname.startsWith('/docs/neuronagent')) {
      return neuronagentNavSections
    } else if (pathname.startsWith('/docs/neuronmcp')) {
      return neuronmcpNavSections
    } else if (pathname.startsWith('/docs/neurondesktop')) {
      return neurondesktopNavSections
    } else {
      // Default to NeuronDB navigation
      return neurondbNavSections
    }
  }, [pathname])

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0" aria-label="Documentation navigation">
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-4 border border-slate-700 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700">
            <BookOpen className="w-4 h-4 text-yellow-400" />
            <h2 className="text-sm font-semibold text-white">
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
