import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'Sizing Guide | NeuronDB Resource Recommendations',
  description: 'Comprehensive sizing guidance for NeuronDB deployments. Resource profiles, storage sizing, network bandwidth, CPU and memory requirements for development to enterprise deployments.',
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondb/deployment/sizing-guide',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'resource-profiles', title: 'Resource Profiles' },
  { id: 'storage', title: 'Storage Sizing' },
  { id: 'network', title: 'Network Bandwidth' },
  { id: 'cpu', title: 'CPU Sizing' },
  { id: 'memory', title: 'Memory Sizing' },
  { id: 'autoscaling', title: 'Autoscaling Recommendations' },
  { id: 'node-requirements', title: 'Node Requirements' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/deployment/upgrade-rollback',
  label: 'Upgrade and Rollback',
}

const nextLink: NavLink | undefined = undefined

export default function SizingGuidePage() {
  return (
    <PostgresDocsLayout
      title="Sizing Guide"
      version="NeuronDB Production"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          Comprehensive sizing guidance for NeuronDB deployments from development to enterprise scale.
        </p>
      </section>

      <section id="resource-profiles">
        <h2>Resource Profiles</h2>

        <h3>Small (Development/Testing)</h3>
        <p><strong>Use Case:</strong> Development, testing, small teams</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Component</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Replicas</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>CPU</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Memory</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Storage</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>NeuronDB</td>
              <td style={{ padding: '0.75rem' }}>1</td>
              <td style={{ padding: '0.75rem' }}>2</td>
              <td style={{ padding: '0.75rem' }}>4Gi</td>
              <td style={{ padding: '0.75rem' }}>50Gi</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>NeuronAgent</td>
              <td style={{ padding: '0.75rem' }}>1</td>
              <td style={{ padding: '0.75rem' }}>500m</td>
              <td style={{ padding: '0.75rem' }}>512Mi</td>
              <td style={{ padding: '0.75rem' }}>-</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}>NeuronMCP</td>
              <td style={{ padding: '0.75rem' }}>1</td>
              <td style={{ padding: '0.75rem' }}>250m</td>
              <td style={{ padding: '0.75rem' }}>256Mi</td>
              <td style={{ padding: '0.75rem' }}>-</td>
            </tr>
          </tbody>
          <tfoot>
            <tr style={{ borderTop: '2px solid #4b5563', fontWeight: 'bold' }}>
              <td style={{ padding: '0.75rem' }}><strong>Total</strong></td>
              <td style={{ padding: '0.75rem' }}>-</td>
              <td style={{ padding: '0.75rem' }}>~3 cores</td>
              <td style={{ padding: '0.75rem' }}>~5Gi</td>
              <td style={{ padding: '0.75rem' }}>50Gi</td>
            </tr>
          </tfoot>
        </table>
        <p><strong>Workload Capacity:</strong></p>
        <ul>
          <li>Concurrent users: 10-50</li>
          <li>Requests/second: 100-500</li>
          <li>Vector operations: 1K-10K/day</li>
        </ul>

        <h3>Medium (Production - Small)</h3>
        <p><strong>Use Case:</strong> Small production deployments, &lt;100 users</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Component</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Replicas</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>CPU</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Memory</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Storage</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>NeuronDB</td>
              <td style={{ padding: '0.75rem' }}>1</td>
              <td style={{ padding: '0.75rem' }}>4</td>
              <td style={{ padding: '0.75rem' }}>8Gi</td>
              <td style={{ padding: '0.75rem' }}>200Gi</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>NeuronAgent</td>
              <td style={{ padding: '0.75rem' }}>2</td>
              <td style={{ padding: '0.75rem' }}>1 each</td>
              <td style={{ padding: '0.75rem' }}>1Gi each</td>
              <td style={{ padding: '0.75rem' }}>-</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}>NeuronDesktop</td>
              <td style={{ padding: '0.75rem' }}>2 API + 2 Frontend</td>
              <td style={{ padding: '0.75rem' }}>500m each</td>
              <td style={{ padding: '0.75rem' }}>512Mi each</td>
              <td style={{ padding: '0.75rem' }}>-</td>
            </tr>
          </tbody>
          <tfoot>
            <tr style={{ borderTop: '2px solid #4b5563', fontWeight: 'bold' }}>
              <td style={{ padding: '0.75rem' }}><strong>Total</strong></td>
              <td style={{ padding: '0.75rem' }}>-</td>
              <td style={{ padding: '0.75rem' }}>~7 cores</td>
              <td style={{ padding: '0.75rem' }}>~11Gi</td>
              <td style={{ padding: '0.75rem' }}>200Gi</td>
            </tr>
          </tfoot>
        </table>
        <p><strong>Workload Capacity:</strong></p>
        <ul>
          <li>Concurrent users: 50-200</li>
          <li>Requests/second: 500-2K</li>
          <li>Vector operations: 10K-100K/day</li>
        </ul>

        <h3>Large (Production - Medium)</h3>
        <p><strong>Use Case:</strong> Medium production deployments, 100-500 users</p>
        <p><strong>Total Resources:</strong></p>
        <ul>
          <li>CPU: ~20 cores</li>
          <li>Memory: ~26Gi</li>
          <li>Storage: 500Gi</li>
        </ul>
        <p><strong>Workload Capacity:</strong></p>
        <ul>
          <li>Concurrent users: 200-1000</li>
          <li>Requests/second: 2K-10K</li>
          <li>Vector operations: 100K-1M/day</li>
        </ul>

        <h3>Enterprise (Production - Large)</h3>
        <p><strong>Use Case:</strong> Large production deployments, 500+ users</p>
        <p><strong>Total Resources:</strong></p>
        <ul>
          <li>CPU: ~46 cores</li>
          <li>Memory: ~58Gi</li>
          <li>Storage: 1Ti</li>
        </ul>
        <p><strong>Workload Capacity:</strong></p>
        <ul>
          <li>Concurrent users: 1000+</li>
          <li>Requests/second: 10K+</li>
          <li>Vector operations: 1M+/day</li>
        </ul>
      </section>

      <section id="storage">
        <h2>Storage Sizing</h2>

        <h3>Base Storage Requirements</h3>
        <ul>
          <li><strong>OS and binaries:</strong> ~10Gi</li>
          <li><strong>PostgreSQL data:</strong> Variable</li>
          <li><strong>WAL files:</strong> ~10% of data size</li>
          <li><strong>Logs:</strong> ~5Gi per month</li>
          <li><strong>Backups:</strong> 2-3x data size (if local)</li>
        </ul>

        <h3>Growth Projections</h3>
        <p>Plan storage for 1 year growth:</p>
        <ul>
          <li><strong>Small:</strong> 50Gi → 100-150Gi</li>
          <li><strong>Medium:</strong> 200Gi → 400-600Gi</li>
          <li><strong>Large:</strong> 500Gi → 1-1.5Ti</li>
          <li><strong>Enterprise:</strong> 1Ti → 2-3Ti</li>
        </ul>

        <h3>Storage Class Recommendations</h3>
        <ul>
          <li><strong>Development:</strong> Standard SSD</li>
          <li><strong>Production:</strong> Premium SSD or GP3</li>
          <li><strong>Enterprise:</strong> Premium SSD with IOPS optimization</li>
        </ul>
      </section>

      <section id="network">
        <h2>Network Bandwidth</h2>

        <h3>Estimated Requirements</h3>
        <ul>
          <li><strong>Small:</strong> 100 Mbps</li>
          <li><strong>Medium:</strong> 1 Gbps</li>
          <li><strong>Large:</strong> 10 Gbps</li>
          <li><strong>Enterprise:</strong> 25 Gbps+</li>
        </ul>

        <h3>Factors Affecting Bandwidth</h3>
        <ul>
          <li>Vector embedding size</li>
          <li>Query frequency</li>
          <li>Replication (if enabled)</li>
          <li>Backup operations</li>
        </ul>
      </section>

      <section id="cpu">
        <h2>CPU Sizing</h2>

        <h3>NeuronDB CPU</h3>
        <ul>
          <li><strong>Base:</strong> 2 CPU for PostgreSQL</li>
          <li><strong>Vector operations:</strong> +1 CPU per 10K vectors/second</li>
          <li><strong>Concurrent queries:</strong> +0.5 CPU per 100 concurrent</li>
        </ul>

        <h3>NeuronAgent CPU</h3>
        <ul>
          <li><strong>Base:</strong> 500m per replica</li>
          <li><strong>Request handling:</strong> +100m per 100 req/s</li>
          <li><strong>Background workers:</strong> +200m per worker</li>
        </ul>

        <h3>NeuronMCP CPU</h3>
        <ul>
          <li><strong>Base:</strong> 250m per replica</li>
          <li><strong>MCP requests:</strong> +50m per 50 req/s</li>
        </ul>
      </section>

      <section id="memory">
        <h2>Memory Sizing</h2>

        <h3>NeuronDB Memory</h3>
        <ul>
          <li><strong>Base:</strong> 4Gi for PostgreSQL</li>
          <li><strong>Shared buffers:</strong> 25% of total memory</li>
          <li><strong>Work memory:</strong> 256Mi per connection</li>
          <li><strong>Vector cache:</strong> 1Gi per 1M vectors</li>
        </ul>

        <h3>NeuronAgent Memory</h3>
        <ul>
          <li><strong>Base:</strong> 512Mi per replica</li>
          <li><strong>Request buffer:</strong> 100Mi per 100 req/s</li>
          <li><strong>Cache:</strong> 200Mi per replica</li>
        </ul>

        <h3>NeuronMCP Memory</h3>
        <ul>
          <li><strong>Base:</strong> 256Mi per replica</li>
          <li><strong>Request buffer:</strong> 50Mi per 50 req/s</li>
        </ul>
      </section>

      <section id="autoscaling">
        <h2>Autoscaling Recommendations</h2>

        <h3>HPA Configuration</h3>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto' }}>
{`neuronagent:
  autoscaling:
    enabled: true
    minReplicas: 2
    maxReplicas: 10
    targetCPUUtilizationPercentage: 70`}
        </pre>

        <h3>KEDA Configuration</h3>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto' }}>
{`neuronagent:
  autoscaling:
    keda:
      enabled: true
      minReplicas: 2
      maxReplicas: 20
      triggers:
        http:
          enabled: true
          threshold: "100"
        queueDepth:
          enabled: true
          targetValue: "100"`}
        </pre>
      </section>

      <section id="node-requirements">
        <h2>Node Requirements</h2>

        <h3>Minimum Node Specs</h3>
        <ul>
          <li><strong>CPU:</strong> 4 cores</li>
          <li><strong>Memory:</strong> 8Gi</li>
          <li><strong>Storage:</strong> 50Gi</li>
          <li><strong>OS:</strong> Linux (Ubuntu 20.04+, RHEL 8+)</li>
        </ul>

        <h3>Recommended Node Specs (Production)</h3>
        <ul>
          <li><strong>CPU:</strong> 8+ cores</li>
          <li><strong>Memory:</strong> 16Gi+</li>
          <li><strong>Storage:</strong> 200Gi+ SSD</li>
          <li><strong>Network:</strong> 1 Gbps+</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
