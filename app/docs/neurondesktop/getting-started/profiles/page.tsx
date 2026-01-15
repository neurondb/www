import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'NeuronDesktop Profile Configuration | Multi-Environment Setup',
  description: 'NeuronDesktop profile configuration guide: Create and manage profiles for multiple environments, configure connections to NeuronDB, NeuronAgent, and NeuronMCP.',
  keywords: [
    'NeuronDesktop profiles',
    'profile configuration',
    'multi-environment setup',
    'dashboard profiles',
    'connection management'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondesktop/getting-started/profiles',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'create-profile', title: 'Create Profile' },
  { id: 'profile-settings', title: 'Profile Settings' },
  { id: 'component-connections', title: 'Component Connections' },
]

const prevLink: NavLink = {
  href: '/docs/neurondesktop/getting-started/installation',
  label: 'Installation',
}
const nextLink: NavLink | undefined = undefined

export default function NeuronDesktopProfiles() {
  return (
    <PostgresDocsLayout
      title="Profile Configuration"
      version="NeuronDesktop Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          NeuronDesktop uses profiles to manage connections to different environments and components. Create your first profile to connect to NeuronDB, NeuronAgent, and NeuronMCP.
        </p>
      </section>

      <section id="create-profile">
        <h2>Create Profile</h2>
        <p>
          Create a profile via API or through the web interface:
        </p>

        <BashCodeBlock
          title="Create profile via API"
          code={`curl -X POST http://localhost:8081/api/v1/profiles \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "default",
    "neurondb": {
      "host": "localhost",
      "port": 5433,
      "database": "neurondb",
      "user": "postgres",
      "password": "postgres"
    },
    "neuronagent": {
      "url": "http://localhost:8080",
      "apiKey": "your-api-key"
    },
    "neuronmcp": {
      "command": "neuronmcp",
      "args": ["--transport", "stdio"]
    }
  }'`}
        />
      </section>

      <section id="profile-settings">
        <h2>Profile Settings</h2>
        <p>
          Profile features:
        </p>
        <ul>
          <li><strong>Multiple Environment Support</strong> - Create profiles for development, staging, production</li>
          <li><strong>Auto-Detection</strong> - Automatic detection of components</li>
          <li><strong>Connection String Management</strong> - Manage database connections and API endpoints</li>
          <li><strong>API Key Configuration</strong> - Configure API keys and authentication</li>
        </ul>
      </section>

      <section id="component-connections">
        <h2>Component Connections</h2>
        <p>
          Configure connections to each component:
        </p>
        <ul>
          <li><strong>NeuronDB</strong> - Database connection string, host, port, database, user, password</li>
          <li><strong>NeuronAgent</strong> - API URL and API key</li>
          <li><strong>NeuronMCP</strong> - Command, arguments, and environment variables</li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
