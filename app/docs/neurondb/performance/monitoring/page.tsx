import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'

export const metadata: Metadata = {
  title: 'Monitoring | NeuronDB Performance',
  description: '7 built-in monitoring views and Prometheus metrics export in NeuronDB.',
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'monitoring-views', title: 'Monitoring Views' },
  { id: 'extension-statistics', title: 'Extension Statistics' },
  { id: 'prometheus-export', title: 'Prometheus Export' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/performance/simd-optimization',
  label: 'SIMD Optimization',
}

const nextLink: NavLink = {
  href: '/docs/neurondb/security',
  label: 'Security',
}

export default function MonitoringPage() {
  return (
    <PostgresDocsLayout
      title="Monitoring"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>7 built-in monitoring views and Prometheus metrics export.</p>
      </section>

      <section id="monitoring-views">
        <h2>Monitoring Views</h2>
        <p>NeuronDB provides 7 comprehensive monitoring views for real-time observability:</p>
        
        <h3>1. vector_stats</h3>
        <p>Aggregate statistics for all vector operations including total vectors, dimensions, memory usage, and operation counts.</p>
        
        <h3>2. index_health</h3>
        <p>Health dashboard for all indexes with status icons, usage statistics, fragmentation levels, and maintenance recommendations.</p>
        
        <h3>3. tenant_quota_usage</h3>
        <p>Quota monitoring with warnings for multi-tenant deployments. Tracks resource usage per tenant and alerts when approaching limits.</p>
        
        <h3>4. llm_job_status</h3>
        <p>Job queue summary for LLM operations including pending, running, completed, and failed jobs. Tracks job processing times and success rates.</p>
        
        <h3>5. query_performance</h3>
        <p>Performance metrics for the last 24 hours including query latencies, throughput, cache hit rates, and slow query identification.</p>
        
        <h3>6. index_maintenance_status</h3>
        <p>Index maintenance operations tracking including defragmentation progress, rebuild schedules, and maintenance history.</p>
        
        <h3>7. metrics_summary</h3>
        <p>Prometheus-compatible metrics summary with key performance indicators ready for external monitoring systems.</p>
        
        <SqlCodeBlock
          title="All 7 monitoring views"
          code={`-- Vector statistics - Aggregate statistics for all vector operations
SELECT * FROM neurondb.vector_stats;

-- Index health dashboard - Health status with icons and recommendations
SELECT * FROM neurondb.index_health;

-- Tenant quota usage - Multi-tenant resource monitoring with warnings
SELECT * FROM neurondb.tenant_quota_usage;

-- LLM job queue status - Job processing summary and statistics
SELECT * FROM neurondb.llm_job_status;

-- Query performance metrics - Last 24 hours performance data
SELECT * FROM neurondb.query_performance;

-- Index maintenance operations - Maintenance tracking and history
SELECT * FROM neurondb.index_maintenance_status;

-- Prometheus metrics summary - Metrics ready for external monitoring
SELECT * FROM neurondb.metrics_summary;`}
        />
      </section>

      <section id="extension-statistics">
        <h2>Extension Statistics</h2>
        <SqlCodeBlock
          title="Extension statistics"
          code={`-- Extension statistics
SELECT * FROM pg_stat_neurondb();

-- Worker status
SELECT * FROM neurondb_worker_status();`}
        />
      </section>

      <section id="prometheus-export">
        <h2>Prometheus Export</h2>
        <p>Prometheus metrics are available for external monitoring.</p>
      </section>

      <section>
        <h2>Learn More</h2>
        <p>
          For detailed documentation on monitoring, metrics interpretation, and alerting, visit:{' '}
          <a href="https://neurondb.ai/docs/performance/monitoring" target="_blank" rel="noopener noreferrer">
            Monitoring Documentation
          </a>
        </p>
      </section>

      <section>
        <h2>Related Topics</h2>
        <ul>
          <li><a href="/docs/neurondb/performance/simd-optimization">SIMD Optimization</a> - Performance optimization</li>
          <li><a href="/docs/neurondb/configuration">Configuration</a> - Configuration options</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}

