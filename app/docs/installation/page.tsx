import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'Install NeuronDB PostgreSQL Vector Database | Step-by-Step Guide',
  description:
    'Complete installation guide for NeuronDB on PostgreSQL 16–18. Includes Linux, macOS, and RHEL builds plus GPU-ready configuration and verification steps.',
  alternates: {
    canonical: 'https://neurondb.ai/docs/installation',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'choose-method', title: 'Choose Installation Method' },
  { id: 'docker-method', title: 'Method 1: Docker (Recommended)' },
  { id: 'package-method', title: 'Method 2: DEB/RPM Packages' },
  { id: 'source-method', title: 'Method 3: Source Build' },
  { id: 'prerequisites', title: 'Prerequisites' },
  { id: 'ubuntu-debian', title: 'Ubuntu / Debian' },
  { id: 'macos', title: 'macOS (Homebrew)' },
  { id: 'rocky-rhel', title: 'Rocky Linux / RHEL' },
  { id: 'post-installation', title: 'Post-installation checks' },
]

const prevLink: NavLink = {
  href: '/docs/getting-started',
  label: 'Getting Started',
}

const nextLink: NavLink = {
  href: '/docs/configuration',
  label: 'Configuration',
}

export default function NeuronDBInstallationPage() {
  return (
    <PostgresDocsLayout
      title="Install NeuronDB on PostgreSQL 16–18"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="choose-method">
        <h2>Choose Installation Method</h2>
        
        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
          <p>
            <strong>📌 Version Information:</strong> This documentation reflects <strong>NeuronDB 2.0.0</strong> from the <code>main</code> branch.
            For the stable 1.0.0 release, use the <code>REL1_STABLE</code> branch. See the{' '}
            <a href="https://github.com/neurondb-ai/neurondb" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>GitHub repository</a> for branch information.
          </p>
        </div>

        <p>NeuronDB can be installed via Docker (recommended) or built from source:</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Method</th>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Best For</th>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>
                <strong>
                  <a href="/docs/getting-started/docker">Docker</a>
                </strong>
              </td>
              <td style={{ padding: '0.75rem' }}>Most users, includes full ecosystem</td>
              <td style={{ padding: '0.75rem' }}>5 minutes</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}>
                <strong>
                  <a href="#package-method">DEB/RPM Packages</a>
                </strong>
              </td>
              <td style={{ padding: '0.75rem' }}>Ubuntu/Debian, Rocky Linux/RHEL</td>
              <td style={{ padding: '0.75rem' }}>2 minutes</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}>
                <strong>Source Build</strong>
              </td>
              <td style={{ padding: '0.75rem' }}>Production, custom builds</td>
              <td style={{ padding: '0.75rem' }}>30+ minutes</td>
            </tr>
          </tbody>
        </table>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <p>
            <strong>💡 Recommendation:</strong> Use <a href="/docs/getting-started/docker" style={{ color: '#fbbf24' }}>Docker</a> to get the complete ecosystem (NeuronDB + NeuronAgent + NeuronMCP + NeuronDesktop) running quickly with automatic configuration.
          </p>
        </div>
      </section>

      <section id="docker-method">
        <h2>Method 1: Docker (Recommended)</h2>
        <p>
          Docker provides the easiest installation with all ecosystem components pre-configured. See the{' '}
          <strong>
            <a href="/docs/getting-started/docker">Docker Quick Start Guide</a>
          </strong>{' '}
          for complete instructions.
        </p>

        <BashCodeBlock
          title="Quick start with Docker (Version 2.0 - main branch)"
          code={`# Clone repository (defaults to main branch for version 2.0)
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb

# For stable 1.0.0 release, checkout REL1_STABLE branch:
# git checkout REL1_STABLE

# Start all services (NeuronDB + NeuronAgent + NeuronMCP + NeuronDesktop)
docker compose up -d

# Verify services
docker compose ps`}
        />
        <BashCodeBlock
          title="Quick start with Docker (Version 1.0 - REL1_STABLE branch)"
          code={`# Clone REL1_STABLE branch for version 1.0 (stable release)
git clone -b REL1_STABLE https://github.com/neurondb-ai/neurondb.git
cd neurondb

# Start all services
docker compose up -d

# Verify services
docker compose ps`}
        />

        <p>This installs and starts:</p>
        <ul>
          <li>NeuronDB (PostgreSQL with extension) on port 5433</li>
          <li>NeuronAgent (REST API) on port 8080</li>
          <li>NeuronMCP (MCP server)</li>
          <li>NeuronDesktop (Web UI) on port 3000</li>
        </ul>

        <p>
          <strong>
            <a href="/docs/getting-started/docker">View complete Docker installation guide →</a>
          </strong>
        </p>

        <h3>Docker Images from GitHub Container Registry</h3>
        <p>
          Pre-built Docker images are available from GitHub Container Registry (GHCR). Pull specific versions:
        </p>
        <BashCodeBlock
          title="Pull Docker images"
          code={`# Pull latest images (version 2.0 from main branch)
docker compose pull

# Pull specific version (example)
docker pull ghcr.io/neurondb/neurondb-postgres:v2.0.0-pg17-cpu

# For version 1.0 (stable release from REL1_STABLE branch)
docker pull ghcr.io/neurondb/neurondb-postgres:v1.0.0-pg17-cpu

# Start services
docker compose up -d`}
        />
        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <p>
            <strong>📦 Version Information:</strong> 
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              <li><strong>Version 2.0</strong> (main branch): Latest features, improvements, and bug fixes</li>
              <li><strong>Version 1.0</strong> (REL1_STABLE branch): Stable production release, recommended for production deployments</li>
            </ul>
          </p>
        </div>
        <p>
          Available image tags include variants for PostgreSQL 16/17/18 and GPU profiles (CPU, CUDA, ROCm, Metal).
          See <a href="https://github.com/neurondb-ai/neurondb/pkgs/container/neurondb-postgres" target="_blank" rel="noopener noreferrer">GHCR packages</a> for all available images.
        </p>
      </section>

      <section id="package-method">
        <h2>Method 2: DEB/RPM Packages</h2>
        <p>
          Install NeuronDB using native package managers for Ubuntu/Debian (DEB) or Rocky Linux/RHEL (RPM).
          Packages are available from GitHub Releases.
        </p>

        <h3>Ubuntu / Debian (DEB)</h3>
        <BashCodeBlock
          title="Install DEB package"
          code={`# Download latest DEB package from GitHub Releases
# Visit: https://github.com/neurondb-ai/neurondb/releases

# Install package (replace with actual version)
sudo dpkg -i neurondb_2.0.0_amd64.deb

# Install dependencies if needed
sudo apt-get install -f

# Verify installation
psql -d postgres -c "CREATE EXTENSION neurondb;"
psql -d postgres -c "SELECT extversion FROM pg_extension WHERE extname = 'neurondb';"`}
        />

        <h3>Rocky Linux / RHEL (RPM)</h3>
        <BashCodeBlock
          title="Install RPM package"
          code={`# Download latest RPM package from GitHub Releases
# Visit: https://github.com/neurondb-ai/neurondb/releases

# Install package (replace with actual version)
sudo rpm -ivh neurondb-2.0.0-1.x86_64.rpm

# Or use yum/dnf
sudo yum install neurondb-2.0.0-1.x86_64.rpm

# Verify installation
psql -d postgres -c "CREATE EXTENSION neurondb;"
psql -d postgres -c "SELECT extversion FROM pg_extension WHERE extname = 'neurondb';"`}
        />

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <p>
            <strong>📦 Package Availability:</strong> DEB and RPM packages are built for each release starting with v2.0.0.
            Download packages from <a href="https://github.com/neurondb-ai/neurondb/releases" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>GitHub Releases</a>.
          </p>
        </div>

        <p>
          <strong>Note:</strong> Package installation only includes the NeuronDB PostgreSQL extension.
          For the complete ecosystem (NeuronAgent, NeuronMCP, NeuronDesktop), use Docker or build from source.
        </p>
      </section>

      <section id="source-method">
        <h2>Method 3: Source Build</h2>
        <p>
          Build NeuronDB from source for production deployments or custom configurations. This installs only the PostgreSQL extension; you'll need to separately build NeuronAgent, NeuronMCP, and NeuronDesktop if you want the full ecosystem.
        </p>
        <p>Continue reading below for platform-specific source build instructions.</p>
      </section>

      <section id="prerequisites">
        <h2>Prerequisites (Source Build)</h2>
        <p>Before building from source, ensure you have:</p>
        <ul>
          <li>PostgreSQL 16, 17, or 18 with superuser access</li>
          <li>gcc/clang toolchain, make, autoconf, libtool</li>
          <li>PostgreSQL server development headers</li>
          <li>Optional: CUDA or ROCm drivers for GPU acceleration</li>
        </ul>
        <p>
          Verify that <code>pg_config</code> points to your target PostgreSQL installation before compiling.
        </p>
      </section>

      <section id="ubuntu-debian">
        <h2>Ubuntu / Debian</h2>
        <p>Install system packages, fetch NeuronDB sources, and compile against PostgreSQL 17 deb packages.</p>

        <h3>Install PostgreSQL</h3>
        <BashCodeBlock
          title="PostgreSQL packages"
          code={`sudo apt-get update
sudo apt-get install -y postgresql-17 \\
    postgresql-server-dev-17 \\
    postgresql-contrib-17`}
        />

        <h3>Install build dependencies</h3>
        <BashCodeBlock
          title="Build prerequisites"
          code={`sudo apt-get install -y build-essential \\
    libcurl4-openssl-dev \\
    libssl-dev \\
    zlib1g-dev \\
    pkg-config`}
        />

        <h3>Compile & install</h3>
        <BashCodeBlock
          title="Build NeuronDB (Version 2.0 - main branch)"
          code={`# Clone repository (defaults to main branch for version 2.0)
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb/NeuronDB
make PG_CONFIG=/usr/lib/postgresql/17/bin/pg_config
sudo make install PG_CONFIG=/usr/lib/postgresql/17/bin/pg_config`}
        />
        <BashCodeBlock
          title="Build NeuronDB (Version 1.0 - REL1_STABLE branch)"
          code={`# Clone REL1_STABLE branch for version 1.0 (stable release)
git clone -b REL1_STABLE https://github.com/neurondb-ai/neurondb.git
cd neurondb/NeuronDB
make PG_CONFIG=/usr/lib/postgresql/17/bin/pg_config
sudo make install PG_CONFIG=/usr/lib/postgresql/17/bin/pg_config`}
        />
        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <p>
            <strong>💡 Branch Selection:</strong> Use <code>main</code> branch for version 2.0 (latest features) or <code>REL1_STABLE</code> branch for version 1.0 (stable production release).
          </p>
        </div>

        <h3>Verify artifacts</h3>
        <BashCodeBlock
          title="Installed files"
          code={`ls -lh /usr/lib/postgresql/17/lib/neurondb.so
ls -lh /usr/share/postgresql/17/extension/neurondb*`}
        />
      </section>

      <section id="macos">
        <h2>macOS (Homebrew)</h2>
        <p>Build NeuronDB against Homebrew PostgreSQL. Requires Xcode CLI tools and sudo for installation.</p>

        <h3>Install PostgreSQL 17</h3>
        <BashCodeBlock
          title="Homebrew setup"
          code={`brew install postgresql@17
brew services start postgresql@17`}
        />

        <h3>Compile & install</h3>
        <BashCodeBlock
          title="Build NeuronDB (Version 2.0 - main branch)"
          code={`# Clone repository (defaults to main branch for version 2.0)
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb/NeuronDB
make PG_CONFIG=/opt/homebrew/opt/postgresql@17/bin/pg_config
sudo make install PG_CONFIG=/opt/homebrew/opt/postgresql@17/bin/pg_config`}
        />
        <BashCodeBlock
          title="Build NeuronDB (Version 1.0 - REL1_STABLE branch)"
          code={`# Clone REL1_STABLE branch for version 1.0 (stable release)
git clone -b REL1_STABLE https://github.com/neurondb-ai/neurondb.git
cd neurondb/NeuronDB
make PG_CONFIG=/opt/homebrew/opt/postgresql@17/bin/pg_config
sudo make install PG_CONFIG=/opt/homebrew/opt/postgresql@17/bin/pg_config`}
        />
      </section>

      <section id="rocky-rhel">
        <h2>Rocky Linux / RHEL</h2>
        <p>Install PostgreSQL from the PGDG repository, then build NeuronDB against the RPM tooling.</p>

        <h3>Install PostgreSQL packages</h3>
        <BashCodeBlock
          title="PostgreSQL 17"
          code={`sudo dnf install -y \\
    postgresql17-server \\
    postgresql17-devel \\
    postgresql17-contrib`}
        />

        <h3>Install build dependencies</h3>
        <BashCodeBlock
          title="Build prerequisites"
          code={`sudo dnf install -y \\
    gcc \\
    make \\
    curl-devel \\
    openssl-devel \\
    zlib-devel`}
        />

        <h3>Compile & install</h3>
        <BashCodeBlock
          title="Build NeuronDB (Version 2.0 - main branch)"
          code={`# Clone repository (defaults to main branch for version 2.0)
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb/NeuronDB
make PG_CONFIG=/usr/pgsql-17/bin/pg_config
sudo make install PG_CONFIG=/usr/pgsql-17/bin/pg_config`}
        />
        <BashCodeBlock
          title="Build NeuronDB (Version 1.0 - REL1_STABLE branch)"
          code={`# Clone REL1_STABLE branch for version 1.0 (stable release)
git clone -b REL1_STABLE https://github.com/neurondb-ai/neurondb.git
cd neurondb/NeuronDB
make PG_CONFIG=/usr/pgsql-17/bin/pg_config
sudo make install PG_CONFIG=/usr/pgsql-17/bin/pg_config`}
        />
      </section>

      <section id="post-installation">
        <h2>Post-installation checks</h2>
        <p>Enable the extension, verify metadata, and confirm NeuronDB is available across your cluster.</p>

        <h3>Register extension</h3>
        <SqlCodeBlock
          title="Initialize NeuronDB"
          code={`-- Connect to target database
\\c my_database

-- Create extension
CREATE EXTENSION neurondb;

-- Confirm version
SELECT extversion
FROM   pg_extension
WHERE  extname = 'neurondb';`}
        />

        <h3>Upgrade from version 1.0 to 2.0</h3>
        <p>
          If you're upgrading from NeuronDB 1.0, use the upgrade command:
        </p>
        <SqlCodeBlock
          title="Upgrade extension"
          code={`-- Check current version
SELECT extversion FROM pg_extension WHERE extname = 'neurondb';

-- Upgrade to version 2.0
ALTER EXTENSION neurondb UPDATE TO '2.0';

-- Verify upgrade
SELECT extversion FROM pg_extension WHERE extname = 'neurondb';`}
        />
        <p>
          The upgrade script <code>neurondb--1.0--2.0.sql</code> will automatically run during the upgrade process.
          This ensures compatibility between versions and preserves all your data and indexes.
        </p>

        <h3>Optional GPU configuration</h3>
        <BashCodeBlock
          title="postgresql.conf"
          code={`# Enable GPU acceleration
neurondb.gpu_enabled = on
neurondb.gpu_backend = 'cuda'  # or 'rocm'
neurondb.gpu_memory_pool_mb = 2048`}
        />
      </section>

      <section>
        <h2>Next Steps</h2>
        <ul>
          <li>
            <a href="/docs/getting-started/docker">Docker Quick Start</a> - Get the complete ecosystem running in minutes (recommended)
          </li>
          <li>
            <a href="/docs/getting-started/quickstart">Quick Start Guide</a> - Create your first vector table, generate embeddings, and run semantic search
          </li>
          <li>
            <a href="/docs/configuration">Configuration Reference</a> - Tune GUC parameters for CPU/GPU execution paths and logging
          </li>
          <li>
            <a href="/docs/troubleshooting">Troubleshooting Guide</a> - Resolve build failures, GPU driver issues, and deployment blockers
          </li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
