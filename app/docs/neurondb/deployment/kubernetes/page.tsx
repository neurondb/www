import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'Kubernetes Deployment | NeuronDB Cloud-Native',
  description: 'Complete cloud-native deployment guide for NeuronDB ecosystem on Kubernetes using Helm. Includes Prometheus, Grafana, Jaeger, and production-ready configurations.',
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondb/deployment/kubernetes',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'quick-start', title: 'Quick Start' },
  { id: 'architecture', title: 'Architecture' },
  { id: 'installation', title: 'Installation' },
  { id: 'configuration', title: 'Configuration' },
  { id: 'monitoring', title: 'Monitoring & Observability' },
  { id: 'scaling', title: 'Scaling & High Availability' },
  { id: 'upgrading', title: 'Upgrading' },
  { id: 'troubleshooting', title: 'Troubleshooting' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/getting-started/docker',
  label: 'Docker Quick Start',
}

const nextLink: NavLink = {
  href: '/docs/neurondb/deployment/observability',
  label: 'Observability Stack',
}

export default function KubernetesDeploymentPage() {
  return (
    <PostgresDocsLayout
      title="Kubernetes Deployment with Helm"
      version="NeuronDB Cloud-Native"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          The NeuronDB Helm chart provides a production-ready, cloud-native deployment of the entire NeuronDB ecosystem on Kubernetes. This includes:
        </p>
        <ul>
          <li><strong>NeuronDB</strong> - PostgreSQL with NeuronDB extension (StatefulSet with persistent storage)</li>
          <li><strong>NeuronAgent</strong> - AI agent service (Deployment with HPA)</li>
          <li><strong>NeuronMCP</strong> - Model Context Protocol server (Deployment)</li>
          <li><strong>NeuronDesktop</strong> - Web UI (API + Frontend Deployments)</li>
          <li><strong>Observability Stack</strong> - Prometheus, Grafana, and Jaeger</li>
        </ul>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#fbbf24' }}>✨ Key Features</h3>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>High Availability:</strong> Pod Disruption Budgets, multiple replicas, health checks</li>
            <li><strong>Auto-scaling:</strong> Horizontal Pod Autoscaling for NeuronAgent</li>
            <li><strong>Security:</strong> ServiceAccounts, Network Policies, Secrets management</li>
            <li><strong>Observability:</strong> Complete monitoring stack with Prometheus, Grafana, and Jaeger</li>
            <li><strong>Storage:</strong> Persistent volumes with configurable storage classes</li>
            <li><strong>Ingress:</strong> TLS-enabled external access</li>
          </ul>
        </div>
      </section>

      <section id="quick-start">
        <h2>Quick Start</h2>
        <p>Get NeuronDB running on Kubernetes in minutes:</p>

        <h3>1. Prerequisites</h3>
        <BashCodeBlock
          title="Verify prerequisites"
          code={`# Kubernetes cluster (1.24+)
kubectl version --client --short

# Helm 3.8+
helm version

# Check cluster access
kubectl cluster-info

# List available storage classes
kubectl get storageclass`}
        />

        <h3>2. Create Namespace and Secret</h3>
        <BashCodeBlock
          title="Setup namespace and password"
          code={`# Create namespace
kubectl create namespace neurondb

# Generate secure password
POSTGRES_PASSWORD=$(openssl rand -base64 32)

# Create secret (or use Helm values.yaml)
kubectl create secret generic neurondb-secrets \\
  --from-literal=postgres-password="$POSTGRES_PASSWORD" \\
  --namespace=neurondb`}
        />

        <h3>3. Install Helm Chart</h3>
        <BashCodeBlock
          title="Install NeuronDB from repository"
          code={`# Clone repository
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb

# Install chart
helm install neurondb ./helm/neurondb \\
  --namespace neurondb \\
  --create-namespace \\
  --set secrets.postgresPassword="$POSTGRES_PASSWORD"`}
        />

        <h3>4. Verify Installation</h3>
        <BashCodeBlock
          title="Check deployment status"
          code={`# Wait for pods to be ready
kubectl wait --for=condition=ready pod -l app.kubernetes.io/name=neurondb -n neurondb --timeout=300s

# Check all pods
kubectl get pods -n neurondb

# Check services
kubectl get svc -n neurondb

# Check persistent volumes
kubectl get pvc -n neurondb`}
        />

        <h3>5. Access Services</h3>
        <BashCodeBlock
          title="Port-forward to services"
          code={`# NeuronDesktop UI
kubectl port-forward svc/neurondb-neurondesktop-frontend 3000:3000 -n neurondb
# Access at: http://localhost:3000

# NeuronAgent API
kubectl port-forward svc/neurondb-neuronagent 8080:8080 -n neurondb

# Grafana
kubectl port-forward svc/neurondb-grafana 3001:3000 -n neurondb
# Access at: http://localhost:3001 (admin/admin)

# Prometheus
kubectl port-forward svc/neurondb-prometheus 9090:9090 -n neurondb
# Access at: http://localhost:9090`}
        />
      </section>

      <section id="architecture">
        <h2>Architecture</h2>
        <p>The Helm chart deploys the complete NeuronDB ecosystem with the following resource types:</p>

        <h3>Components</h3>
        <ul>
          <li><strong>StatefulSet:</strong> NeuronDB (PostgreSQL) with persistent storage</li>
          <li><strong>Deployments:</strong> NeuronAgent, NeuronMCP, NeuronDesktop API/Frontend</li>
          <li><strong>Services:</strong> ClusterIP for internal communication</li>
          <li><strong>Ingress:</strong> Optional external access with TLS</li>
          <li><strong>ConfigMaps:</strong> Configuration files</li>
          <li><strong>Secrets:</strong> Passwords and API keys</li>
          <li><strong>PVCs:</strong> Persistent volumes for database and monitoring data</li>
          <li><strong>HPA:</strong> Horizontal Pod Autoscaling for NeuronAgent</li>
          <li><strong>PDB:</strong> Pod Disruption Budgets for high availability</li>
          <li><strong>NetworkPolicy:</strong> Optional network security</li>
        </ul>

        <h3>Observability Stack</h3>
        <ul>
          <li><strong>Prometheus:</strong> Metrics collection and alerting</li>
          <li><strong>Grafana:</strong> Pre-configured dashboards and visualization</li>
          <li><strong>Jaeger:</strong> Distributed tracing</li>
          <li><strong>ServiceMonitors:</strong> Automatic service discovery for Prometheus</li>
          <li><strong>PrometheusRules:</strong> Alert rules for all components</li>
        </ul>
      </section>

      <section id="installation">
        <h2>Installation</h2>

        <h3>Basic Installation</h3>
        <BashCodeBlock
          title="Install with default values"
          code={`helm install neurondb ./helm/neurondb \\
  --namespace neurondb \\
  --create-namespace \\
  --set secrets.postgresPassword="$(openssl rand -base64 32)"`}
        />

        <h3>Production Installation</h3>
        <p>Create a values file for production:</p>
        <BashCodeBlock
          title="production-values.yaml"
          code={`# production-values.yaml
neurondb:
  persistence:
    size: 100Gi
    storageClass: "fast-ssd"
  resources:
    limits:
      memory: "16Gi"
      cpu: "8"

neuronagent:
  replicas: 3
  autoscaling:
    enabled: true
    maxReplicas: 20

monitoring:
  enabled: true
  prometheus:
    retention: "90d"
  grafana:
    adminPassword: "change-me-in-production"

ingress:
  enabled: true
  className: "nginx"
  hosts:
    - host: neurondb.example.com
  tls:
    - secretName: neurondb-tls
      hosts:
        - neurondb.example.com`}
        />

        <BashCodeBlock
          title="Install with production values"
          code={`helm install neurondb ./helm/neurondb \\
  --namespace neurondb \\
  --create-namespace \\
  --values production-values.yaml \\
  --set secrets.postgresPassword="$(openssl rand -base64 32)"`}
        />

        <h3>Development Installation</h3>
        <BashCodeBlock
          title="Minimal development setup"
          code={`helm install neurondb ./helm/neurondb \\
  --namespace neurondb-dev \\
  --create-namespace \\
  --set neurondb.persistence.size=10Gi \\
  --set neuronagent.replicas=1 \\
  --set monitoring.enabled=false \\
  --set secrets.postgresPassword="dev-password"`}
        />
      </section>

      <section id="configuration">
        <h2>Configuration</h2>

        <h3>Key Configuration Options</h3>
        <p>See <code>helm/neurondb/values.yaml</code> for all available options. Key sections:</p>

        <h4>NeuronDB (PostgreSQL)</h4>
        <ul>
          <li>Image repository and tag</li>
          <li>Database credentials and port</li>
          <li>Persistent volume size and storage class</li>
          <li>Resource requests and limits</li>
          <li>PostgreSQL configuration</li>
        </ul>

        <h4>NeuronAgent</h4>
        <ul>
          <li>Replica count</li>
          <li>Horizontal Pod Autoscaling (min/max replicas, target CPU)</li>
          <li>Log level and environment variables</li>
          <li>Resource limits</li>
        </ul>

        <h4>Monitoring</h4>
        <ul>
          <li>Enable/disable Prometheus, Grafana, Jaeger</li>
          <li>Prometheus retention period</li>
          <li>Grafana admin password and dashboards</li>
          <li>Storage for monitoring data</li>
        </ul>

        <h4>Ingress</h4>
        <ul>
          <li>Enable/disable ingress</li>
          <li>Ingress controller class</li>
          <li>Hostnames and paths</li>
          <li>TLS certificate configuration</li>
        </ul>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
          <p style={{ margin: 0 }}>
            <strong>📋 Complete Configuration:</strong> See{' '}
            <a href="https://github.com/neurondb-ai/neurondb/blob/main/helm/neurondb/values.yaml" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>helm/neurondb/values.yaml</a> and{' '}
            <a href="https://github.com/neurondb-ai/neurondb/blob/main/Docs/deployment/kubernetes-helm.md" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>Kubernetes Helm Guide</a> for detailed configuration options.
          </p>
        </div>
      </section>

      <section id="monitoring">
        <h2>Monitoring & Observability</h2>
        <p>
          The Helm chart includes a complete observability stack with Prometheus, Grafana, and Jaeger pre-configured.
        </p>

        <h3>Prometheus Metrics</h3>
        <p>All services expose Prometheus-compatible metrics:</p>
        <ul>
          <li><strong>NeuronAgent:</strong> <code>http://neurondb-neuronagent:8080/metrics</code></li>
          <li><strong>NeuronDesktop API:</strong> <code>http://neurondb-neurondesktop-api:8081/metrics</code></li>
          <li><strong>NeuronDB:</strong> Via PostgreSQL exporter</li>
        </ul>

        <h3>Grafana Dashboards</h3>
        <p>Grafana is pre-configured with:</p>
        <ul>
          <li>Prometheus datasource</li>
          <li>Default dashboard provisioning</li>
          <li>Custom dashboards for service health, request rates, latencies, and resource utilization</li>
        </ul>

        <h3>Jaeger Tracing</h3>
        <p>Distributed tracing is available at:</p>
        <ul>
          <li><strong>UI:</strong> Port 16686</li>
          <li><strong>OTLP gRPC:</strong> Port 4317</li>
          <li><strong>OTLP HTTP:</strong> Port 4318</li>
        </ul>

        <p>
          For detailed observability setup, see{' '}
          <a href="/docs/neurondb/deployment/observability">Observability Stack</a> documentation.
        </p>
      </section>

      <section id="scaling">
        <h2>Scaling & High Availability</h2>

        <h3>Horizontal Pod Autoscaling</h3>
        <p>NeuronAgent supports automatic scaling based on CPU utilization:</p>
        <BashCodeBlock
          title="Check HPA status"
          code={`kubectl get hpa -n neurondb

# Manually scale
kubectl scale deployment neurondb-neuronagent --replicas=5 -n neurondb`}
        />

        <h3>High Availability</h3>
        <ul>
          <li><strong>Pod Disruption Budgets:</strong> Ensure minimum availability during updates</li>
          <li><strong>Multiple Replicas:</strong> Configurable for all services</li>
          <li><strong>Health Checks:</strong> Liveness and readiness probes for all pods</li>
          <li><strong>Init Containers:</strong> Wait for database before starting services</li>
        </ul>

        <h3>Pod Anti-Affinity</h3>
        <p>Configure pod anti-affinity to distribute pods across nodes for better resilience.</p>
      </section>

      <section id="upgrading">
        <h2>Upgrading</h2>

        <h3>Upgrade to New Version</h3>
        <BashCodeBlock
          title="Upgrade Helm release"
          code={`# Update values if needed
helm upgrade neurondb ./helm/neurondb \\
  --namespace neurondb \\
  --values my-values.yaml \\
  --set neurondb.image.tag="2.0.0-pg17-cpu"`}
        />

        <h3>Rollback</h3>
        <BashCodeBlock
          title="Rollback if needed"
          code={`# List releases
helm list -n neurondb

# Rollback to previous version
helm rollback neurondb -n neurondb

# Rollback to specific revision
helm rollback neurondb 2 -n neurondb`}
        />
      </section>

      <section id="troubleshooting">
        <h2>Troubleshooting</h2>

        <h3>Check Pod Status</h3>
        <BashCodeBlock
          title="Diagnose pod issues"
          code={`# Get pod status
kubectl get pods -n neurondb

# Describe pod
kubectl describe pod <pod-name> -n neurondb

# View logs
kubectl logs <pod-name> -n neurondb

# View previous container logs (if crashed)
kubectl logs <pod-name> -n neurondb --previous`}
        />

        <h3>Database Connection Issues</h3>
        <BashCodeBlock
          title="Verify database connectivity"
          code={`# Check NeuronDB pod
kubectl get pod -n neurondb -l app.kubernetes.io/component=neurondb

# Test connection
kubectl exec -it -n neurondb \\
  $(kubectl get pod -n neurondb -l app.kubernetes.io/component=neurondb -o jsonpath='{.items[0].metadata.name}') \\
  -- psql -U neurondb -d neurondb -c "SELECT neurondb.version();"`}
        />

        <h3>Storage Issues</h3>
        <BashCodeBlock
          title="Check persistent volumes"
          code={`# Check PVC status
kubectl get pvc -n neurondb

# Check storage class
kubectl get storageclass

# Describe PVC if pending
kubectl describe pvc <pvc-name> -n neurondb`}
        />

        <h3>Resource Issues</h3>
        <BashCodeBlock
          title="Monitor resource usage"
          code={`# View resource requests/limits
kubectl describe pod <pod-name> -n neurondb | grep -A 5 "Limits\\|Requests"

# Check node resources
kubectl top nodes
kubectl top pods -n neurondb`}
        />

        <h3>Uninstalling</h3>
        <BashCodeBlock
          title="Remove deployment"
          code={`# Uninstall Helm release
helm uninstall neurondb -n neurondb

# Delete namespace (removes all resources)
kubectl delete namespace neurondb

# ⚠️ WARNING: This deletes all data in PVCs!
# Backup data before uninstalling if needed`}
        />
      </section>

      <section>
        <h2>Additional Resources</h2>
        <ul>
          <li>
            <a href="https://github.com/neurondb-ai/neurondb/blob/main/CLOUD_NATIVE.md" target="_blank" rel="noopener noreferrer">CLOUD_NATIVE.md</a> - Complete cloud-native deployment guide with architecture, configuration, and best practices
          </li>
          <li>
            <a href="https://github.com/neurondb-ai/neurondb/blob/main/Docs/deployment/kubernetes-helm.md" target="_blank" rel="noopener noreferrer">Kubernetes Helm Guide</a> - Detailed deployment guide with troubleshooting and advanced configuration
          </li>
          <li>
            <a href="https://github.com/neurondb-ai/neurondb/tree/main/helm/neurondb" target="_blank" rel="noopener noreferrer">Helm Chart</a> - Chart source code, README, and values files
          </li>
          <li>
            <a href="/docs/neurondb/deployment/observability">Observability Stack</a> - Prometheus, Grafana, and Jaeger setup with metrics and alerting
          </li>
          <li>
            <a href="/docs/neurondb/deployment/scripts">Operational Scripts</a> - Automation scripts for deployments, database operations, and monitoring
          </li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}

