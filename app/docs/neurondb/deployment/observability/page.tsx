import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'Observability Stack | Prometheus, Grafana & Jaeger',
  description: 'Complete observability stack for NeuronDB ecosystem with Prometheus metrics, Grafana dashboards, and Jaeger distributed tracing.',
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondb/deployment/observability',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'prometheus', title: 'Prometheus' },
  { id: 'grafana', title: 'Grafana' },
  { id: 'jaeger', title: 'Jaeger' },
  { id: 'docker-compose', title: 'Docker Compose Setup' },
  { id: 'kubernetes', title: 'Kubernetes Setup' },
  { id: 'metrics-reference', title: 'Metrics Reference' },
  { id: 'alerts', title: 'Alert Rules' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/deployment/kubernetes',
  label: 'Kubernetes Deployment',
}

const nextLink: NavLink | undefined = undefined

export default function ObservabilityPage() {
  return (
    <PostgresDocsLayout
      title="Observability Stack"
      version="NeuronDB Cloud-Native"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          The NeuronDB observability stack provides comprehensive monitoring, visualization, and distributed tracing for the entire ecosystem. The stack includes:
        </p>
        <ul>
          <li><strong>Prometheus</strong> - Metrics collection, alerting, and querying</li>
          <li><strong>Grafana</strong> - Pre-configured dashboards and visualization</li>
          <li><strong>Jaeger</strong> - Distributed tracing for request flows</li>
          <li><strong>Alertmanager</strong> - Alert routing and notification management</li>
        </ul>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#fbbf24' }}>Key Features</h3>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>Complete Coverage:</strong> All modules and variants monitored (NeuronDB, NeuronAgent, NeuronMCP, NeuronDesktop)</li>
            <li><strong>Detailed Metrics:</strong> Module-specific metrics with proper labeling</li>
            <li><strong>Comprehensive Alerts:</strong> 40+ alert rules for all critical failure modes</li>
            <li><strong>Performance Optimization:</strong> Recording rules for common queries</li>
            <li><strong>Production Ready:</strong> Alertmanager integration with notification routing</li>
            <li><strong>Pre-configured:</strong> Grafana dashboards and Prometheus rules included</li>
          </ul>
        </div>
      </section>

      <section id="prometheus">
        <h2>Prometheus</h2>
        <p>
          Prometheus collects metrics from all NeuronDB ecosystem components and provides a query language (PromQL) for monitoring and alerting.
        </p>

        <h3>Configuration Files</h3>
        <p>The Prometheus configuration is located in <code>prometheus/</code> directory:</p>
        <ul>
          <li><code>prometheus.yml</code> - Main Prometheus configuration</li>
          <li><code>alerts.yml</code> - Alert rules (organized by module)</li>
          <li><code>recording_rules.yml</code> - Pre-computed metrics for performance</li>
          <li><code>alertmanager.yml</code> - Alertmanager configuration</li>
          <li><code>postgres_exporter.yml</code> - PostgreSQL exporter custom queries</li>
          <li><code>service_discovery.yml</code> - Service discovery reference</li>
        </ul>

        <h3>Quick Start</h3>
        <BashCodeBlock
          title="Start Prometheus with Docker Compose"
          code={`# Start Prometheus
docker compose -f docker-compose.observability.yml up -d prometheus

# Access Prometheus UI
# http://localhost:9090

# Check targets
# http://localhost:9090/targets`}
        />

        <h3>Metrics Endpoints</h3>
        <p>All services expose Prometheus-compatible metrics:</p>
        <ul>
          <li><strong>NeuronDB:</strong> Via PostgreSQL exporter at <code>:9187/metrics</code></li>
          <li><strong>NeuronAgent:</strong> <code>:8080/metrics</code></li>
          <li><strong>NeuronDesktop API:</strong> <code>:8081/metrics</code></li>
          <li><strong>Infrastructure:</strong> Node exporter (<code>:9100/metrics</code>), cAdvisor (<code>:8080/metrics</code>)</li>
        </ul>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
          <p style={{ margin: 0 }}>
            <strong>📋 Complete Prometheus Documentation:</strong> See{' '}
            <a href="https://github.com/neurondb-ai/neurondb/blob/main/prometheus/README.md" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>prometheus/README.md</a> for detailed configuration, metrics reference, and alert rules.
          </p>
        </div>
      </section>

      <section id="grafana">
        <h2>Grafana</h2>
        <p>
          Grafana provides pre-configured dashboards for visualizing NeuronDB ecosystem metrics, performance data, and health status.
        </p>

        <h3>Quick Start</h3>
        <BashCodeBlock
          title="Start Grafana with Docker Compose"
          code={`# Start Grafana
docker compose -f docker-compose.observability.yml up -d grafana

# Access Grafana UI
# http://localhost:3001
# Default credentials: admin/admin

# Grafana will automatically provision:
# - Prometheus datasource
# - Pre-configured dashboards`}
        />

        <h3>Pre-configured Dashboards</h3>
        <p>Grafana includes dashboards for:</p>
        <ul>
          <li><strong>NeuronDB:</strong> Database health, query performance, index health, cache metrics</li>
          <li><strong>NeuronAgent:</strong> Service availability, error rates, latency, execution metrics</li>
          <li><strong>NeuronDesktop:</strong> API availability, error rates, connection metrics</li>
          <li><strong>NeuronMCP:</strong> Service availability, tool execution, connection pool</li>
          <li><strong>Infrastructure:</strong> System resources, container health, network metrics</li>
        </ul>

        <h3>Dashboard Provisioning</h3>
        <p>
          Grafana dashboards are automatically provisioned from <code>grafana/provisioning/dashboards/</code> directory. 
          The Prometheus datasource is configured in <code>grafana/provisioning/datasources/prometheus.yml</code>.
        </p>

        <h3>Custom Dashboards</h3>
        <p>
          Create custom dashboards in Grafana UI or add JSON files to <code>grafana/dashboards/</code> directory.
        </p>
      </section>

      <section id="jaeger">
        <h2>Jaeger</h2>
        <p>
          Jaeger provides distributed tracing for request flows across all NeuronDB ecosystem components.
        </p>

        <h3>Quick Start</h3>
        <BashCodeBlock
          title="Start Jaeger with Docker Compose"
          code={`# Start Jaeger
docker compose -f docker-compose.observability.yml up -d jaeger

# Access Jaeger UI
# http://localhost:16686

# Jaeger endpoints:
# - UI: :16686
# - OTLP gRPC: :4317
# - OTLP HTTP: :4318`}
        />

        <h3>Features</h3>
        <ul>
          <li><strong>Distributed Tracing:</strong> Track requests across all services</li>
          <li><strong>Service Map:</strong> Visualize service dependencies</li>
          <li><strong>Trace Analysis:</strong> Identify bottlenecks and slow operations</li>
          <li><strong>Performance Insights:</strong> Understand request latency breakdown</li>
        </ul>
      </section>

      <section id="docker-compose">
        <h2>Docker Compose Setup</h2>
        <p>
          Use the <code>docker-compose.observability.yml</code> file to run the complete observability stack:
        </p>

        <BashCodeBlock
          title="Start observability stack"
          code={`# Start all observability services
docker compose -f docker-compose.observability.yml up -d

# Check status
docker compose -f docker-compose.observability.yml ps

# View logs
docker compose -f docker-compose.observability.yml logs -f

# Stop services
docker compose -f docker-compose.observability.yml down`}
        />

        <h3>Access URLs</h3>
        <ul>
          <li><strong>Prometheus:</strong> <code>http://localhost:9090</code></li>
          <li><strong>Grafana:</strong> <code>http://localhost:3001</code> (admin/admin)</li>
          <li><strong>Jaeger:</strong> <code>http://localhost:16686</code></li>
          <li><strong>Alertmanager:</strong> <code>http://localhost:9093</code> (if enabled)</li>
        </ul>
      </section>

      <section id="kubernetes">
        <h2>Kubernetes Setup</h2>
        <p>
          The Helm chart includes the complete observability stack. Enable it in your values file:
        </p>

        <BashCodeBlock
          title="Enable observability in Helm values"
          code={`# values.yaml
monitoring:
  enabled: true
  prometheus:
    enabled: true
    retention: "30d"
    persistence:
      enabled: true
      size: "20Gi"
  grafana:
    enabled: true
    adminPassword: "change-me"  # Change in production!
    persistence:
      enabled: true
      size: "10Gi"
  jaeger:
    enabled: true`}
        />

        <h3>Access Services in Kubernetes</h3>
        <BashCodeBlock
          title="Port-forward to observability services"
          code={`# Grafana
kubectl port-forward svc/neurondb-grafana 3001:3000 -n neurondb
# Access at: http://localhost:3001

# Prometheus
kubectl port-forward svc/neurondb-prometheus 9090:9090 -n neurondb
# Access at: http://localhost:9090

# Jaeger
kubectl port-forward svc/neurondb-jaeger 16686:16686 -n neurondb
# Access at: http://localhost:16686`}
        />

        <h3>Service Discovery</h3>
        <p>
          Kubernetes deployments use ServiceMonitors for automatic service discovery. 
          Prometheus automatically discovers and scrapes all NeuronDB ecosystem services.
        </p>
      </section>

      <section id="metrics-reference">
        <h2>Metrics Reference</h2>
        <p>Key metrics exposed by each component:</p>

        <h3>NeuronDB Metrics</h3>
        <ul>
          <li><code>neurondb_queries_total</code> - Total number of queries (by query_type, index_type)</li>
          <li><code>neurondb_query_duration_seconds</code> - Query duration histogram (by query_type)</li>
          <li><code>neurondb_index_size_bytes</code> - Index size in bytes (by index_name, index_type)</li>
          <li><code>neurondb_vector_count</code> - Number of vectors (by table_name)</li>
          <li><code>neurondb_cache_hits_total</code> - Cache hits (by cache_type)</li>
          <li><code>neurondb_cache_misses_total</code> - Cache misses (by cache_type)</li>
          <li><code>neurondb_worker_status</code> - Worker status (by worker_id, status)</li>
          <li><code>neurondb_errors_total</code> - Total errors (by error_type)</li>
        </ul>

        <h3>NeuronAgent Metrics</h3>
        <ul>
          <li><code>neurondb_agent_http_requests_total</code> - Total HTTP requests (by method, endpoint, status)</li>
          <li><code>neurondb_agent_http_request_duration_seconds</code> - HTTP request duration (by method, endpoint)</li>
          <li><code>neurondb_agent_executions_total</code> - Agent executions (by agent_id, status)</li>
          <li><code>neurondb_agent_execution_duration_seconds</code> - Execution duration (by agent_id)</li>
          <li><code>neurondb_agent_llm_calls_total</code> - LLM API calls (by model, status)</li>
          <li><code>neurondb_agent_llm_tokens_total</code> - LLM tokens (by model, type)</li>
          <li><code>neurondb_agent_memory_chunks_stored_total</code> - Memory chunks stored (by agent_id)</li>
          <li><code>neurondb_agent_tool_executions_total</code> - Tool executions (by tool_name, status)</li>
          <li><code>neurondb_agent_database_connections_active</code> - Active DB connections</li>
        </ul>

        <h3>NeuronDesktop Metrics</h3>
        <ul>
          <li><code>neurondesktop_api_requests_total</code> - Total API requests (by endpoint, method)</li>
          <li><code>neurondesktop_api_errors_total</code> - API errors (by endpoint, error_type)</li>
          <li><code>neurondesktop_api_request_duration_seconds</code> - Request duration (by endpoint)</li>
          <li><code>neurondesktop_active_connections</code> - Active connections</li>
          <li><code>neurondesktop_active_mcp_connections</code> - Active MCP connections</li>
          <li><code>neurondesktop_active_neurondb_connections</code> - Active NeuronDB connections</li>
          <li><code>neurondesktop_active_agent_connections</code> - Active agent connections</li>
        </ul>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
          <p style={{ margin: 0 }}>
            <strong>📋 Complete Metrics Reference:</strong> See{' '}
            <a href="https://github.com/neurondb-ai/neurondb/blob/main/prometheus/README.md#metrics-reference" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>Prometheus README</a> for all available metrics with descriptions and labels.
          </p>
        </div>
      </section>

      <section id="alerts">
        <h2>Alert Rules</h2>
        <p>
          Prometheus includes 40+ alert rules organized by module, covering all critical failure modes:
        </p>

        <h3>NeuronDB Alerts</h3>
        <ul>
          <li><strong>NeuronDBServiceDown</strong> (Critical) - Service down &gt; 1m</li>
          <li><strong>NeuronDBConnectionFailure</strong> (Critical) - &gt;5 failures in 5m</li>
          <li><strong>NeuronDBHighQueryLatency</strong> (Warning) - P95 &gt; 1s for 5m</li>
          <li><strong>NeuronDBIndexHealthDegraded</strong> (Warning) - Health &lt; 80% for 5m</li>
          <li><strong>NeuronDBCacheHitRateLow</strong> (Warning) - Hit rate &lt; 70% for 5m</li>
          <li><strong>NeuronDBConnectionPoolExhausted</strong> (Critical) - Utilization &gt; 90% for 5m</li>
        </ul>

        <h3>NeuronAgent Alerts</h3>
        <ul>
          <li><strong>NeuronAgentServiceDown</strong> (Critical) - Service down &gt; 1m</li>
          <li><strong>NeuronAgentHighErrorRate</strong> (Critical) - Error rate &gt; 5% for 5m</li>
          <li><strong>NeuronAgentHighLatency</strong> (Warning) - P95 &gt; 1s for 5m</li>
          <li><strong>NeuronAgentExecutionFailure</strong> (Critical) - &gt;10 failures in 5m</li>
          <li><strong>NeuronAgentDatabaseConnectionIssue</strong> (Warning) - &gt;5 errors in 5m</li>
        </ul>

        <h3>Infrastructure Alerts</h3>
        <ul>
          <li><strong>HighCPUUsage</strong> (Warning) - CPU &gt; 80% for 5m</li>
          <li><strong>HighMemoryUsage</strong> (Warning) - Memory &gt; 85% for 5m</li>
          <li><strong>HighDiskUsage</strong> (Warning) - Disk &gt; 85% for 5m</li>
          <li><strong>PrometheusTargetDown</strong> (Critical) - Target down &gt; 2m</li>
        </ul>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
          <p style={{ margin: 0 }}>
            <strong>📋 Complete Alert Rules:</strong> See{' '}
            <a href="https://github.com/neurondb-ai/neurondb/blob/main/prometheus/alerts.yml" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>alerts.yml</a> for all alert rules with conditions and descriptions.
          </p>
        </div>
      </section>

      <section>
        <h2>Additional Resources</h2>
        <ul>
          <li>
            <a href="https://github.com/neurondb-ai/neurondb/blob/main/prometheus/README.md" target="_blank" rel="noopener noreferrer">Prometheus README</a> - Complete Prometheus documentation
          </li>
          <li>
            <a href="https://github.com/neurondb-ai/neurondb/blob/main/prometheus/alerts.yml" target="_blank" rel="noopener noreferrer">Alert Rules</a> - All alert definitions
          </li>
          <li>
            <a href="https://github.com/neurondb-ai/neurondb/blob/main/prometheus/prometheus.yml" target="_blank" rel="noopener noreferrer">Prometheus Config</a> - Main configuration file
          </li>
          <li>
            <a href="https://prometheus.io/docs/" target="_blank" rel="noopener noreferrer">Prometheus Documentation</a> - Official Prometheus docs
          </li>
          <li>
            <a href="https://grafana.com/docs/" target="_blank" rel="noopener noreferrer">Grafana Documentation</a> - Official Grafana docs
          </li>
          <li>
            <a href="https://www.jaegertracing.io/docs/" target="_blank" rel="noopener noreferrer">Jaeger Documentation</a> - Official Jaeger docs
          </li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}

