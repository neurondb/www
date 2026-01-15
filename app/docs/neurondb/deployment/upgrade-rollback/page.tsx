import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'Upgrade and Rollback Guide | NeuronDB Version Management',
  description: 'Complete procedures for upgrading and rolling back NeuronDB. Includes pre-upgrade checklist, upgrade steps, rollback procedures, and zero-downtime upgrades.',
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondb/deployment/upgrade-rollback',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'pre-upgrade', title: 'Pre-Upgrade Checklist' },
  { id: 'upgrade', title: 'Upgrade Procedure' },
  { id: 'rollback', title: 'Rollback Procedure' },
  { id: 'zero-downtime', title: 'Zero-Downtime Upgrades' },
  { id: 'migration-management', title: 'Migration Management' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/deployment/ha-architecture',
  label: 'High Availability Architecture',
}

const nextLink: NavLink = {
  href: '/docs/neurondb/deployment/sizing-guide',
  label: 'Sizing Guide',
}

export default function UpgradeRollbackPage() {
  return (
    <PostgresDocsLayout
      title="Upgrade and Rollback Guide"
      version="NeuronDB Production"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          Complete procedures for upgrading and rolling back NeuronDB ecosystem components.
        </p>
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <p style={{ margin: 0, color: '#fbbf24' }}>
            <strong>⚠️ WARNING:</strong> Always back up your database before upgrading. Test upgrades in a development environment first.
          </p>
        </div>
      </section>

      <section id="pre-upgrade">
        <h2>Pre-Upgrade Checklist</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Task</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Command</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Required</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>Review release notes</td>
              <td style={{ padding: '0.75rem' }}>Check CHANGELOG.md</td>
              <td style={{ padding: '0.75rem', color: '#ef4444' }}>⚠️ Critical</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>Backup database</td>
              <td style={{ padding: '0.75rem' }}>See Backup Guide</td>
              <td style={{ padding: '0.75rem', color: '#ef4444' }}>⚠️ Critical</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>Verify current version</td>
              <td style={{ padding: '0.75rem' }}><code>helm list -n neurondb</code></td>
              <td style={{ padding: '0.75rem', color: '#10b981' }}>✅ Yes</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>Check migration status</td>
              <td style={{ padding: '0.75rem' }}><code>kubectl get jobs -n neurondb</code></td>
              <td style={{ padding: '0.75rem', color: '#10b981' }}>✅ Yes</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}>Ensure resources</td>
              <td style={{ padding: '0.75rem' }}>Check cluster capacity</td>
              <td style={{ padding: '0.75rem', color: '#10b981' }}>✅ Yes</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="upgrade">
        <h2>Upgrade Procedure</h2>

        <h3>Step 1: Backup</h3>
        <BashCodeBlock
          title="Ensure backup is recent"
          code={`# Ensure backup is recent
kubectl get cronjob neurondb-backup -n neurondb
kubectl create job --from=cronjob/neurondb-backup manual-backup-$(date +%s) -n neurondb`}
        />

        <h3>Step 2: Review Changes</h3>
        <BashCodeBlock
          title="Dry-run upgrade"
          code={`# Dry-run upgrade
helm upgrade neurondb ./helm/neurondb \\
  --version <new-version> \\
  --dry-run --debug \\
  -f values-production-external-postgres.yaml \\
  -n neurondb`}
        />

        <h3>Step 3: Run Migrations</h3>
        <p>Migrations run automatically via pre-upgrade hooks. Monitor:</p>
        <BashCodeBlock
          title="Watch migration job"
          code={`# Watch migration job
kubectl get jobs -n neurondb -w | grep migration
kubectl logs -f job/neurondb-migration-<revision> -n neurondb`}
        />

        <h3>Step 4: Upgrade Chart</h3>
        <BashCodeBlock
          title="Upgrade Helm chart"
          code={`helm upgrade neurondb ./helm/neurondb \\
  --version <new-version> \\
  -f values-production-external-postgres.yaml \\
  -n neurondb`}
        />

        <h3>Step 5: Monitor Upgrade</h3>
        <BashCodeBlock
          title="Monitor upgrade progress"
          code={`# Watch pods
kubectl get pods -n neurondb -w

# Check rollout status
kubectl rollout status statefulset/neurondb-neurondb -n neurondb
kubectl rollout status deployment/neurondb-neuronagent -n neurondb

# Check logs
kubectl logs -f deployment/neurondb-neuronagent -n neurondb`}
        />

        <h3>Step 6: Verify Upgrade</h3>
        <BashCodeBlock
          title="Verify upgrade success"
          code={`# Check versions
helm list -n neurondb
kubectl get pods -n neurondb -o jsonpath='{.items[*].spec.containers[*].image}'

# Test functionality
kubectl port-forward svc/neurondb-neuronagent 8080:8080 -n neurondb
curl http://localhost:8080/health`}
        />
      </section>

      <section id="rollback">
        <h2>Rollback Procedure</h2>

        <h3>Step 1: Identify Previous Revision</h3>
        <BashCodeBlock
          title="List release history"
          code={`# List release history
helm history neurondb -n neurondb

# Note the revision number to rollback to`}
        />

        <h3>Step 2: Rollback Helm Release</h3>
        <BashCodeBlock
          title="Rollback to previous revision"
          code={`# Rollback to previous revision
helm rollback neurondb <revision> -n neurondb

# Or rollback to previous version
helm rollback neurondb -n neurondb`}
        />

        <h3>Step 3: Database Rollback (if needed)</h3>
        <p>If database migrations were applied, rollback them:</p>
        <BashCodeBlock
          title="Rollback database migrations"
          code={`# Connect to database
kubectl exec -it statefulset/neurondb-neurondb -n neurondb -- \\
  psql -U neurondb -d neurondb

# Run rollback script (if provided)
\\i /path/to/rollback.sql`}
        />

        <h3>Step 4: Verify Rollback</h3>
        <BashCodeBlock
          title="Verify rollback success"
          code={`# Check pod versions
kubectl get pods -n neurondb -o jsonpath='{.items[*].spec.containers[*].image}'

# Verify functionality
kubectl port-forward svc/neurondb-neuronagent 8080:8080 -n neurondb
curl http://localhost:8080/health`}
        />
      </section>

      <section id="zero-downtime">
        <h2>Zero-Downtime Upgrades</h2>

        <h3>StatefulSet Rolling Update</h3>
        <p>Configure update strategy:</p>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto' }}>
{`neurondb:
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      partition: null  # Update all pods
      maxUnavailable: 1`}
        </pre>

        <h3>Canary Deployment</h3>
        <p>Gradual rollout using partition:</p>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto' }}>
{`neurondb:
  replicas: 3
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      partition: 2  # Only update pod 2 and 3`}
        </pre>
        <p>After verification, reduce partition:</p>
        <BashCodeBlock
          title="Complete canary deployment"
          code={`helm upgrade neurondb ./helm/neurondb \\
  --set neurondb.updateStrategy.rollingUpdate.partition=1 \\
  -n neurondb`}
        />
      </section>

      <section id="migration-management">
        <h2>Migration Management</h2>

        <h3>Check Migration Status</h3>
        <BashCodeBlock
          title="View migration history"
          code={`# View migration history
kubectl get jobs -n neurondb | grep migration

# Check database migration version
kubectl exec -it statefulset/neurondb-neurondb -n neurondb -- \\
  psql -U neurondb -d neurondb -c \\
  "SELECT version, name, applied_at FROM neurondb_agent.schema_migrations ORDER BY version DESC;"`}
        />

        <h3>Manual Migration</h3>
        <p>If automatic migration fails:</p>
        <BashCodeBlock
          title="Create migration job manually"
          code={`# Create migration job manually
kubectl create job --from=cronjob/neurondb-migration manual-migration-$(date +%s) -n neurondb`}
        />
      </section>
    </PostgresDocsLayout>
  )
}
