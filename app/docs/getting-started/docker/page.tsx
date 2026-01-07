import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'Docker Quick Start | NeuronDB Ecosystem',
  description:
    'Get the complete NeuronDB ecosystem running in minutes with Docker. Includes NeuronDB, NeuronAgent, NeuronMCP, and NeuronDesktop with GPU support for CUDA, ROCm, and Metal. Complete setup guide with Docker Compose.',
  keywords: [
    'neurondb docker',
    'docker postgresql ai',
    'neurondb docker compose',
    'postgresql ai docker',
    'vector database docker',
    'neurondb installation docker',
    'docker quickstart',
    'neurondb ecosystem docker',
    'cuda docker postgresql',
    'gpu docker postgresql',
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/getting-started/docker',
  },
  openGraph: {
    title: 'Docker Quick Start | NeuronDB Ecosystem',
    description: 'Get the complete NeuronDB ecosystem running in minutes with Docker. Includes all components with GPU support.',
    type: 'article',
    url: 'https://neurondb.ai/docs/getting-started/docker',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'prerequisites', title: 'Prerequisites' },
  { id: 'quick-start', title: 'Quick Start (5 minutes)' },
  { id: 'verify-services', title: 'Verify Services' },
  { id: 'gpu-profiles', title: 'GPU Profiles' },
  { id: 'service-urls', title: 'Service URLs & Access' },
  { id: 'next-steps', title: 'Next Steps' },
]

const prevLink: NavLink = {
  href: '/docs/getting-started',
  label: 'Getting Started',
}

const nextLink: NavLink = {
  href: '/docs/getting-started/quickstart',
  label: 'Quick Start Guide',
}

export default function DockerQuickStartPage() {
  return (
    <PostgresDocsLayout
      title="Docker Quick Start"
      version="NeuronDB Ecosystem"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        
        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
          <p>
            <strong>📌 Version Information:</strong> This guide uses <strong>NeuronDB 2.0.0</strong> from the <code>main</code> branch.
            For production deployments requiring the stable 1.0.0 release, checkout the <code>REL1_STABLE</code> branch before running Docker Compose.
          </p>
        </div>

        <p>
          This guide gets the complete NeuronDB ecosystem running in under 5 minutes using Docker Compose. The ecosystem includes:
        </p>
        <ul>
          <li>
            <strong>NeuronDB</strong> - PostgreSQL extension with vector search, ML inference, and GPU acceleration
          </li>
          <li>
            <strong>NeuronAgent</strong> - REST API and WebSocket agent runtime with long-term memory
          </li>
          <li>
            <strong>NeuronMCP</strong> - Model Context Protocol server with 100+ tools for MCP-compatible clients
          </li>
          <li>
            <strong>NeuronDesktop</strong> - Unified web interface for managing all components
          </li>
        </ul>
        <p>
          <strong>Why Docker?</strong> Docker provides the easiest and most consistent setup, with automatic networking, configuration, and GPU support across platforms.
        </p>
      </section>

      <section id="prerequisites">
        <h2>Prerequisites</h2>
        <p>Before starting, verify you have:</p>
        <ul>
          <li>
            <strong>Docker</strong> 20.10+ and <strong>Docker Compose</strong> 2.0+ installed
          </li>
          <li>
            <strong>4GB+ RAM</strong> available (8GB recommended)
          </li>
          <li>
            <strong>Ports available</strong>: 5433 (PostgreSQL), 8080 (NeuronAgent), 8081 (NeuronDesktop API), 3000 (NeuronDesktop UI)
          </li>
          <li>
            <strong>Optional</strong>: NVIDIA Docker runtime (CUDA), ROCm drivers (AMD), or Metal support (macOS/Apple Silicon)
          </li>
        </ul>
        <BashCodeBlock
          title="Verify Docker installation"
          code={`docker --version
docker compose version`}
        />
      </section>

      <section id="quick-start">
        <h2>Quick Start (5 minutes)</h2>
        <p>Start the complete NeuronDB ecosystem with a single command:</p>

        <h3>Step 1: Clone the Repository</h3>
        <p>Choose the branch based on your needs:</p>
        <BashCodeBlock
          title="Clone repository (Version 2.0 - main branch, recommended)"
          code={`# Clone main branch for version 2.0 (latest features)
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb`}
        />
        <BashCodeBlock
          title="Clone repository (Version 1.0 - REL1_STABLE branch, stable release)"
          code={`# Clone REL1_STABLE branch for version 1.0 (stable production release)
git clone -b REL1_STABLE https://github.com/neurondb-ai/neurondb.git
cd neurondb`}
        />
        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <p>
            <strong>💡 Branch Selection:</strong> 
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              <li><strong>main branch</strong>: Version 2.0 with latest features, improvements, and bug fixes (default)</li>
              <li><strong>REL1_STABLE branch</strong>: Version 1.0 stable release, recommended for production deployments requiring maximum stability</li>
            </ul>
          </p>
        </div>

        <h3>Step 2: Pull Pre-built Images (Recommended)</h3>
        <BashCodeBlock
          title="Pull images from GitHub Container Registry"
          code={`# Pull latest pre-built images from GHCR (version 2.0 from main branch)
docker compose pull

# Or pull specific version
# For version 2.0: docker pull ghcr.io/neurondb/neurondb-postgres:v2.0.0-pg17-cpu
# For version 1.0: docker pull ghcr.io/neurondb/neurondb-postgres:v1.0.0-pg17-cpu`}
        />
        <p>
            Pre-built Docker images are available from <a href="https://github.com/neurondb-ai/neurondb/pkgs/container/neurondb-postgres" target="_blank" rel="noopener noreferrer">GitHub Container Registry (GHCR)</a>.
          This is faster than building from source and ensures you're using tested, production-ready images.
        </p>
        <p>
          <strong>Note:</strong> Docker images are tagged by version. Version 2.0 images are built from the <code>main</code> branch, while version 1.0 images are built from the <code>REL1_STABLE</code> branch.
        </p>

        <h3>Step 3: Start All Services</h3>
        <BashCodeBlock
          title="Start ecosystem (CPU profile)"
          code={`# Start all services with CPU profile (default)
docker compose up -d`}
        />

        <p>
          This command will:
        </p>
        <ul>
          <li>Use pre-built images from GHCR (or build from source if not pulled)</li>
          <li>Start PostgreSQL with NeuronDB extension</li>
          <li>Start NeuronAgent (REST API server on port 8080)</li>
          <li>Start NeuronMCP (MCP protocol server)</li>
          <li>Start NeuronDesktop (web UI on port 3000, API on 8081)</li>
          <li>Configure networking between all components</li>
        </ul>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <p>
            <strong>💡 Using Pre-built Images:</strong> Images are published to GHCR starting with v2.0.0.
            Available variants include PostgreSQL 16/17/18 and GPU profiles (CPU, CUDA, ROCm, Metal).
            See <a href="https://github.com/neurondb-ai/neurondb/pkgs/container/neurondb-postgres" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>GHCR packages</a> for all available images.
          </p>
        </div>

        <h3>Step 4: Check Service Status</h3>
        <BashCodeBlock
          title="Verify all services are running"
          code={`docker compose ps`}
        />

        <p>
          You should see five services running with "healthy" status:
        </p>
        <ul>
          <li><code>neurondb-cpu</code> - PostgreSQL with NeuronDB extension</li>
          <li><code>neuronagent</code> - REST API server</li>
          <li><code>neurondb-mcp</code> - MCP protocol server</li>
          <li><code>neurondesk-api</code> - NeuronDesktop API server</li>
          <li><code>neurondesk-frontend</code> - NeuronDesktop web interface</li>
        </ul>

        <p>
          <strong>Wait 30-60 seconds</strong> for all services to initialize and show "healthy" status.
        </p>
      </section>

      <section id="verify-services">
        <h2>Verify Services</h2>
        <p>Run these quick verification commands to confirm everything is working:</p>

        <h3>Test 1: NeuronDB Extension</h3>
        <BashCodeBlock
          title="Verify NeuronDB extension"
          code={`docker compose exec neurondb psql -U neurondb -d neurondb -c "SELECT neurondb.version();"`}
        />
        <p>Expected output: <code>2.0</code></p>

        <h3>Test 2: NeuronAgent REST API</h3>
        <BashCodeBlock
          title="Check NeuronAgent health"
          code={`curl http://localhost:8080/health`}
        />
        <p>Expected output: <code>{'{"status":"ok"}'}</code></p>

        <h3>Test 3: NeuronDesktop API</h3>
        <BashCodeBlock
          title="Check NeuronDesktop API"
          code={`curl http://localhost:8081/health`}
        />
        <p>Expected output: JSON response with status information</p>

        <h3>Test 4: First Vector Query</h3>
        <SqlCodeBlock
          title="Create extension and test vector search"
          code={`-- Connect to database
docker compose exec -T neurondb psql -U neurondb -d neurondb <<EOF

-- Create extension
CREATE EXTENSION IF NOT EXISTS neurondb;

-- Create a test table
CREATE TABLE IF NOT EXISTS documents (
  id SERIAL PRIMARY KEY,
  content TEXT,
  embedding vector(1536)
);

-- Insert sample document
INSERT INTO documents (content, embedding)
VALUES ('Hello, NeuronDB!', '[0.1, 0.2, 0.3]'::vector)
ON CONFLICT DO NOTHING;

-- Verify data
SELECT id, content FROM documents;

EOF`}
        />
      </section>

      <section id="gpu-profiles">
        <h2>GPU Profiles</h2>
        <p>
          The Docker Compose setup supports multiple GPU profiles for accelerated operations. Choose the profile that matches your hardware:
        </p>

        <h3>CPU Profile (Default)</h3>
        <BashCodeBlock
          title="CPU-only setup"
          code={`docker compose up -d`}
        />
        <p>Uses port <strong>5433</strong> for PostgreSQL.</p>

        <h3>CUDA Profile (NVIDIA GPU)</h3>
        <BashCodeBlock
          title="CUDA GPU acceleration"
          code={`docker compose --profile cuda up -d`}
        />
        <p>
          Requires NVIDIA Docker runtime. Uses port <strong>5434</strong> for PostgreSQL. See{' '}
          <a href="/docs/gpu/cuda-support">CUDA GPU Support</a> for setup details.
        </p>

        <h3>ROCm Profile (AMD GPU)</h3>
        <BashCodeBlock
          title="ROCm GPU acceleration"
          code={`docker compose --profile rocm up -d`}
        />
        <p>
          Requires ROCm drivers. Uses port <strong>5435</strong> for PostgreSQL. See{' '}
          <a href="/docs/gpu/rocm-support">ROCm GPU Support</a> for setup details.
        </p>

        <h3>Metal Profile (Apple Silicon)</h3>
        <BashCodeBlock
          title="Metal GPU acceleration (macOS)"
          code={`docker compose --profile metal up -d`}
        />
        <p>
          For macOS with Apple Silicon (M1/M2/M3). Uses port <strong>5436</strong> for PostgreSQL. See{' '}
          <a href="/docs/gpu/metal-support">Metal GPU Support</a> for setup details.
        </p>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
          <p>
            <strong>Note:</strong> You can run multiple profiles simultaneously on different ports. For example, run both CPU and CUDA profiles side-by-side for testing.
          </p>
        </div>
      </section>

      <section id="service-urls">
        <h2>Service URLs & Access</h2>
        <p>After starting services, access them at:</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Service</th>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>URL / Connection</th>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><strong>NeuronDB</strong></td>
              <td style={{ padding: '0.75rem' }}>
                <code>postgresql://neurondb:neurondb@localhost:5433/neurondb</code>
              </td>
              <td style={{ padding: '0.75rem' }}>PostgreSQL with NeuronDB extension</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><strong>NeuronAgent</strong></td>
              <td style={{ padding: '0.75rem' }}>
                <code>http://localhost:8080</code>
              </td>
              <td style={{ padding: '0.75rem' }}>REST API and WebSocket endpoints</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><strong>NeuronMCP</strong></td>
              <td style={{ padding: '0.75rem' }}>
                <code>stdio</code> (JSON-RPC 2.0)
              </td>
              <td style={{ padding: '0.75rem' }}>MCP protocol server for MCP clients</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><strong>NeuronDesktop UI</strong></td>
              <td style={{ padding: '0.75rem' }}>
                <code>http://localhost:3000</code>
              </td>
              <td style={{ padding: '0.75rem' }}>Web-based management interface</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}><strong>NeuronDesktop API</strong></td>
              <td style={{ padding: '0.75rem' }}>
                <code>http://localhost:8081</code>
              </td>
              <td style={{ padding: '0.75rem' }}>Backend API for NeuronDesktop</td>
            </tr>
          </tbody>
        </table>

        <h3>Common Commands</h3>
        <BashCodeBlock
          title="Service management"
          code={`# Stop all services (keep data)
docker compose down

# Stop and remove all data volumes
docker compose down -v

# View logs from all services
docker compose logs -f

# View logs from specific service
docker compose logs -f neurondb
docker compose logs -f neuronagent

# Restart a specific service
docker compose restart neurondb`}
        />
      </section>

      <section id="next-steps">
        <h2>Next Steps</h2>
        <p>Now that your ecosystem is running, explore these resources:</p>
        <ul>
          <li>
            <a href="/docs/getting-started/quickstart">Quick Start Guide</a> - Create your first vector table, generate embeddings, and run semantic search queries
          </li>
          <li>
            <a href="/docs/neuronagent">NeuronAgent Documentation</a> - Build AI agents with REST API, WebSocket, and long-term memory
          </li>
          <li>
            <a href="/docs/neuronmcp">NeuronMCP Documentation</a> - Use 100+ MCP tools with Claude Desktop and other MCP clients
          </li>
          <li>
            <a href="/docs/neurondesktop">NeuronDesktop Documentation</a> - Manage your ecosystem through the unified web interface
          </li>
          <li>
            <a href="/docs/indexing">Vector Indexing</a> - Configure HNSW, IVF, and quantization for production-scale search
          </li>
          <li>
            <a href="/docs/rag">RAG Pipelines</a> - Build retrieval augmented generation workflows in PostgreSQL
          </li>
        </ul>
      </section>

      <section>
        <h2>Troubleshooting</h2>
        <p>Having issues? Check these common problems:</p>

        <h3>Services Won't Start</h3>
        <BashCodeBlock
          title="Check logs"
          code={`docker compose logs neurondb
docker compose logs neuronagent
docker compose logs neurondb-mcp`}
        />

        <h3>Port Already in Use</h3>
        <p>
          If ports 5433, 8080, 8081, or 3000 are in use, modify <code>docker-compose.yml</code> or stop conflicting services.
        </p>

        <h3>Out of Memory</h3>
        <p>
          Ensure Docker has at least <strong>4GB RAM</strong> allocated (8GB+ recommended). Check Docker Desktop → Settings → Resources.
        </p>

        <h3>GPU Not Detected</h3>
        <p>
          For CUDA: Verify NVIDIA Docker runtime is installed. For ROCm: Check that ROCm drivers are available. See{' '}
          <a href="/docs/gpu">GPU Documentation</a> for detailed setup instructions.
        </p>

        <p>
          For more help, see the{' '}
          <a href="/docs/troubleshooting">Troubleshooting Guide</a> or check service logs with <code>docker compose logs</code>.
        </p>
      </section>
    </PostgresDocsLayout>
  )
}
