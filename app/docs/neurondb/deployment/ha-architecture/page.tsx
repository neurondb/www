import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'High Availability Architecture | NeuronDB Production HA Setup',
  description: 'Complete high availability architecture for NeuronDB ecosystem in production. Includes load balancing, PostgreSQL HA with Patroni, connection pooling, failover scenarios, and disaster recovery.',
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondb/deployment/ha-architecture',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'architecture', title: 'Architecture' },
  { id: 'components', title: 'Components' },
  { id: 'setup', title: 'Setup' },
  { id: 'failover', title: 'Failover Scenarios' },
  { id: 'monitoring', title: 'Monitoring' },
  { id: 'disaster-recovery', title: 'Disaster Recovery' },
  { id: 'scaling', title: 'Scaling' },
  { id: 'best-practices', title: 'Best Practices' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/deployment/observability',
  label: 'Observability Stack',
}

const nextLink: NavLink = {
  href: '/docs/neurondb/deployment/upgrade-rollback',
  label: 'Upgrade and Rollback',
}

export default function HAArchitecturePage() {
  return (
    <PostgresDocsLayout
      title="High Availability Architecture"
      version="NeuronDB Production"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          This document describes the high availability (HA) architecture for NeuronDB ecosystem in production.
        </p>
        <p>
          <strong>Key Features:</strong>
        </p>
        <ul>
          <li>✅ Load balancing with Nginx or HAProxy</li>
          <li>✅ PostgreSQL HA with Patroni for automatic failover</li>
          <li>✅ Connection pooling with PgBouncer</li>
          <li>✅ Horizontal scaling for stateless services</li>
          <li>✅ Automatic failover and recovery</li>
          <li>✅ Disaster recovery with backups and WAL archiving</li>
        </ul>
      </section>

      <section id="architecture">
        <h2>Architecture Diagram</h2>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto', fontSize: '0.85rem', lineHeight: '1.6' }}>
{`                    ┌─────────────┐
                    │   Load      │
                    │  Balancer   │
                    │  (Nginx)    │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────▼────┐       ┌────▼────┐       ┌────▼────┐
   │ Desktop │       │ Desktop │       │ Desktop │
   │  API 1  │       │  API 2  │       │  API 3  │
   └────┬────┘       └────┬────┘       └────┬────┘
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
   ┌────▼────┐       ┌────▼────┐       ┌────▼────┐
   │ Agent 1 │       │ Agent 2 │       │ Agent 3 │
   └────┬────┘       └────┬────┘       └────┬────┘
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
              ┌───────────▼───────────┐
              │  PostgreSQL Primary │
              │   (with Patroni)    │
              └───────────┬───────────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
   ┌────▼────┐       ┌────▼────┐       ┌────▼────┐
   │Replica 1│       │Replica 2│       │Replica 3│
   └─────────┘       └─────────┘       └─────────┘`}
        </pre>
      </section>

      <section id="components">
        <h2>Components</h2>

        <h3>1. Load Balancer</h3>
        <p><strong>Nginx</strong> or <strong>HAProxy</strong> for:</p>
        <ul>
          <li>Request distribution</li>
          <li>SSL termination</li>
          <li>Health checks</li>
          <li>Session affinity (if needed)</li>
        </ul>

        <h3>2. Application Layer</h3>
        <p><strong>Stateless Services</strong> (can scale horizontally):</p>
        <ul>
          <li>NeuronDesktop API (2+ replicas)</li>
          <li>NeuronAgent (2+ replicas)</li>
          <li>NeuronDesktop Frontend (2+ replicas)</li>
        </ul>
        <p><strong>Stateful Services:</strong></p>
        <ul>
          <li>NeuronMCP (1 replica, can be scaled if stateless)</li>
        </ul>

        <h3>3. Database Layer</h3>
        <p><strong>PostgreSQL HA</strong> using <strong>Patroni</strong>:</p>
        <ul>
          <li>Primary node (read/write)</li>
          <li>2+ replica nodes (read-only)</li>
          <li>Automatic failover</li>
          <li>Connection pooling (PgBouncer)</li>
        </ul>
      </section>

      <section id="setup">
        <h2>Setup</h2>

        <h3>Step 1: PostgreSQL HA with Patroni</h3>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto' }}>
{`# docker-compose.ha.yml
services:
  postgres-primary:
    image: postgres:17
    environment:
      PATRONI_SCOPE: neurondb
      PATRONI_NAME: postgres-primary
    volumes:
      - patroni-config:/etc/patroni
      - postgres-data:/var/lib/postgresql/data

  postgres-replica-1:
    image: postgres:17
    environment:
      PATRONI_SCOPE: neurondb
      PATRONI_NAME: postgres-replica-1
    depends_on:
      - postgres-primary

  patroni:
    image: patroni/patroni:latest
    environment:
      PATRONI_SCOPE: neurondb
      PATRONI_RESTAPI_LISTEN: 0.0.0.0:8008`}
        </pre>

        <h3>Step 2: Connection Pooling</h3>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto' }}>
{`  pgbouncer:
    image: pgbouncer/pgbouncer:latest
    environment:
      DATABASES_HOST: postgres-primary
      DATABASES_PORT: 5432
      DATABASES_USER: neurondb
      DATABASES_PASSWORD: \${POSTGRES_PASSWORD}
      POOL_MODE: transaction
      MAX_CLIENT_CONN: 1000
      DEFAULT_POOL_SIZE: 25`}
        </pre>

        <h3>Step 3: Load Balancer</h3>
        <pre style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto' }}>
{`# nginx.conf
upstream neurondesktop_api {
    least_conn;
    server neurondesk-api-1:8081;
    server neurondesk-api-2:8081;
    server neurondesk-api-3:8081;
}

upstream neuronagent {
    least_conn;
    server neuronagent-1:8080;
    server neuronagent-2:8080;
    server neuronagent-3:8080;
}

server {
    listen 80;
    server_name api.neurondb.example.com;

    location / {
        proxy_pass http://neurondesktop_api;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`}
        </pre>
      </section>

      <section id="failover">
        <h2>Failover Scenarios</h2>

        <h3>Database Primary Failure</h3>
        <ol>
          <li>Patroni detects primary failure</li>
          <li>Elects new primary from replicas</li>
          <li>Updates DNS/VIP to point to new primary</li>
          <li>Applications reconnect automatically</li>
        </ol>

        <h3>Application Node Failure</h3>
        <ol>
          <li>Load balancer detects health check failure</li>
          <li>Removes node from pool</li>
          <li>Traffic routed to healthy nodes</li>
          <li>Auto-scaling can replace failed node</li>
        </ol>
      </section>

      <section id="monitoring">
        <h2>Monitoring</h2>

        <h3>Health Checks</h3>
        <ul>
          <li>Application: <code>/health</code> endpoint</li>
          <li>Database: <code>pg_isready</code></li>
          <li>Load balancer: TCP/HTTP checks</li>
        </ul>

        <h3>Metrics</h3>
        <ul>
          <li>Request rate per node</li>
          <li>Error rate per node</li>
          <li>Database connection pool usage</li>
          <li>Replication lag</li>
        </ul>
      </section>

      <section id="disaster-recovery">
        <h2>Disaster Recovery</h2>

        <h3>Backup Strategy</h3>
        <ul>
          <li>Daily full backups</li>
          <li>Continuous WAL archiving</li>
          <li>Off-site backup storage (S3)</li>
        </ul>

        <h3>Recovery Time Objectives (RTO)</h3>
        <ul>
          <li>Database failover: &lt; 30 seconds</li>
          <li>Application recovery: &lt; 5 minutes</li>
          <li>Full disaster recovery: &lt; 1 hour</li>
        </ul>

        <h3>Recovery Point Objectives (RPO)</h3>
        <ul>
          <li>Database: &lt; 5 minutes (WAL archiving)</li>
          <li>Application: Near-zero (stateless)</li>
        </ul>
      </section>

      <section id="scaling">
        <h2>Scaling</h2>

        <h3>Horizontal Scaling</h3>
        <ul>
          <li>Add more application replicas</li>
          <li>Add more database replicas</li>
          <li>Use read replicas for queries</li>
        </ul>

        <h3>Vertical Scaling</h3>
        <ul>
          <li>Increase database resources</li>
          <li>Increase application resources</li>
          <li>Optimize queries and indexes</li>
        </ul>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <ol>
          <li><strong>Use connection pooling:</strong> PgBouncer for database connections</li>
          <li><strong>Monitor replication lag:</strong> Keep lag &lt; 1 second</li>
          <li><strong>Test failover regularly:</strong> Monthly failover drills</li>
          <li><strong>Use health checks:</strong> All services should have health endpoints</li>
          <li><strong>Implement circuit breakers:</strong> Prevent cascade failures</li>
          <li><strong>Use idempotent operations:</strong> Handle retries gracefully</li>
        </ol>
      </section>
    </PostgresDocsLayout>
  )
}
