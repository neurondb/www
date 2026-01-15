import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'NeuronAgent Configuration | API Keys, Rate Limiting, and Database Setup',
  description: 'NeuronAgent configuration guide: Configure API keys, rate limiting, database connections, and authentication settings.',
  keywords: [
    'NeuronAgent configuration',
    'agent runtime config',
    'API key setup',
    'rate limiting',
    'database configuration',
    'agent authentication'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent/getting-started/configuration',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'database-config', title: 'Database Configuration' },
  { id: 'api-keys', title: 'API Keys' },
  { id: 'rate-limiting', title: 'Rate Limiting' },
  { id: 'authentication', title: 'Authentication' },
]

const prevLink: NavLink = {
  href: '/docs/neuronagent/getting-started/quickstart',
  label: 'Quick Start',
}
const nextLink: NavLink = {
  href: '/docs/neuronagent/getting-started/neurondb-integration',
  label: 'NeuronDB Integration',
}

export default function NeuronAgentConfiguration() {
  return (
    <PostgresDocsLayout
      title="NeuronAgent Configuration"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="database-config">
        <h2>Database Configuration</h2>
        <p>
          Configure NeuronAgent to connect to your NeuronDB PostgreSQL instance:
        </p>
        <ul>
          <li>Set database connection string in configuration file</li>
          <li>Verify database has NeuronDB extension installed</li>
          <li>Ensure proper database permissions for agent operations</li>
        </ul>
      </section>

      <section id="api-keys">
        <h2>API Keys</h2>
        <p>
          Generate and configure API keys for authentication:
        </p>
        <ul>
          <li>Generate API keys using the management API</li>
          <li>Set API key permissions and rate limits</li>
          <li>Configure API key expiration if needed</li>
        </ul>
      </section>

      <section id="rate-limiting">
        <h2>Rate Limiting</h2>
        <p>
          Configure rate limits per API key and endpoint:
        </p>
        <ul>
          <li>Set requests per minute limits</li>
          <li>Configure per-endpoint rate limits</li>
          <li>Set up rate limit alerts and notifications</li>
        </ul>
      </section>

      <section id="authentication">
        <h2>Authentication</h2>
        <p>
          Configure authentication and access control:
        </p>
        <ul>
          <li>API key-based authentication</li>
          <li>Role-based access control (RBAC)</li>
          <li>Fine-grained permissions for tools and resources</li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
