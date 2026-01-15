import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'NeuronDesktop Installation | Docker and Source Build Guide',
  description: 'NeuronDesktop installation guide: Deploy with Docker or build from source. Complete setup instructions for unified web interface.',
  keywords: [
    'NeuronDesktop installation',
    'web interface installation',
    'Docker neurondesktop',
    'source build neurondesktop',
    'dashboard setup'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondesktop/getting-started/installation',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'docker-installation', title: 'Docker Installation' },
  { id: 'source-build', title: 'Source Build' },
  { id: 'configuration', title: 'Configuration' },
  { id: 'verification', title: 'Verification' },
]

const prevLink: NavLink = {
  href: '/docs/neurondesktop/getting-started',
  label: 'Getting Started',
}
const nextLink: NavLink = {
  href: '/docs/neurondesktop/getting-started/profiles',
  label: 'Profile Configuration',
}

export default function NeuronDesktopInstallation() {
  return (
    <PostgresDocsLayout
      title="NeuronDesktop Installation"
      version="NeuronDesktop Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="docker-installation">
        <h2>Docker Installation</h2>
        <p>
          The fastest way to get NeuronDesktop running is with Docker Compose.
        </p>

        <BashCodeBlock
          title="Start NeuronDesktop with Docker Compose"
          code={`# Clone repository
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb

# Start NeuronDesktop with NeuronDB
docker compose up -d neurondesk-api neurondesk-frontend neurondb

# Verify services
docker compose ps

# Access web interface
# API: http://localhost:8081/
# UI: http://localhost:3000/`}
        />

        <p>This starts:</p>
        <ul>
          <li>NeuronDesktop API on port 8081</li>
          <li>NeuronDesktop Frontend (Web UI) on port 3000</li>
          <li>NeuronDB (PostgreSQL with extension) on port 5433</li>
        </ul>
      </section>

      <section id="source-build">
        <h2>Source Build</h2>
        <p>
          For production deployments or custom builds, install from source. This requires Node.js 18+, Go 1.21+, and build dependencies.
        </p>

        <BashCodeBlock
          title="Build from source (Ubuntu/Debian)"
          code={`# Install dependencies
sudo apt-get install -y nodejs npm golang-go build-essential

# Clone repository
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb

# Build API
cd NeuronDesktop/api
go build -o neurondesk-api ./cmd/server

# Build Frontend
cd ../frontend
npm install
npm run build

# Run API
cd ../api
./neurondesk-api --config configs/config.yaml.example

# Run Frontend (in another terminal)
cd ../frontend
npm run start`}
        />
      </section>

      <section id="configuration">
        <h2>Configuration</h2>
        <p>
          Configure NeuronDesktop to connect to your NeuronDB, NeuronAgent, and NeuronMCP instances. See the <a href="/docs/neurondesktop/getting-started/profiles">Profile Configuration Guide</a> for details.
        </p>
      </section>

      <section id="verification">
        <h2>Verification</h2>
        <p>
          Verify NeuronDesktop is running correctly:
        </p>
        <ul>
          <li>Access web UI at <code>http://localhost:3000</code></li>
          <li>Check API health at <code>http://localhost:8081/health</code></li>
          <li>Verify profile creation and component connections</li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
