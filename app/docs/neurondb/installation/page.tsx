import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'Install NeuronDB PostgreSQL Vector Database | Step-by-Step Guide',
  description:
    'Installation guide for NeuronDB on PostgreSQL 16 to 18. Includes Linux, macOS, and RHEL builds plus GPU configuration and verification steps.',
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondb/installation',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'choose-method', title: 'Choose Installation Method' },
  { id: 'docker-method', title: 'Method 1: Docker' },
  { id: 'package-method', title: 'Method 2: DEB/RPM Packages' },
  { id: 'source-method', title: 'Method 3: Source Build' },
  { id: 'prerequisites', title: 'Prerequisites' },
  { id: 'ubuntu-debian', title: 'Ubuntu / Debian' },
  { id: 'macos', title: 'macOS (Homebrew)' },
  { id: 'rocky-rhel', title: 'Rocky Linux / RHEL' },
  { id: 'post-installation', title: 'Post-installation checks' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/getting-started',
  label: 'Getting Started',
}

const nextLink: NavLink = {
  href: '/docs/neurondb/configuration',
  label: 'Configuration',
}

export default function NeuronDBInstallationPage() {
  return (
    <PostgresDocsLayout
      title="Install NeuronDB on PostgreSQL 16 to 18"
      version="NeuronDB Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="choose-method">
        <h2>Choose Installation Method</h2>
      </section>

      <section id="branch-selection">
        
        <div style={{ backgroundColor: '#1e3a5f', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#fbbf24' }}>📌 Branch & Version Selection</h3>
          <p style={{ marginBottom: '1rem' }}>
            NeuronDB has two branches with different versions. Choose based on your needs:
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #4b5563' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Branch</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Version</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #374151' }}>
                <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#1e293b', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>main</code></td>
                <td style={{ padding: '0.75rem' }}><strong>2.0.0</strong></td>
                <td style={{ padding: '0.75rem' }}><span style={{ color: '#10b981' }}>Latest</span></td>
                <td style={{ padding: '0.75rem' }}>Development, new features, latest improvements</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}><code style={{ backgroundColor: '#1e293b', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>REL1_STABLE</code></td>
                <td style={{ padding: '0.75rem' }}><strong>1.0.0</strong></td>
                <td style={{ padding: '0.75rem' }}><span style={{ color: '#3b82f6' }}>Stable</span></td>
                <td style={{ padding: '0.75rem' }}>Production, stability, proven releases</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
            <strong>Recommendation:</strong> Use <code style={{ backgroundColor: '#1e293b', padding: '0.15rem 0.4rem', borderRadius: '0.25rem' }}>main</code> for new projects and <code style={{ backgroundColor: '#1e293b', padding: '0.15rem 0.4rem', borderRadius: '0.25rem' }}>REL1_STABLE</code> for production deployments requiring maximum stability.
          </p>
        </div>
      </section>

      <section id="docker-method">
        <h2>Method 1: Docker</h2>

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
                  <a href="/docs/neurondb/getting-started/docker">Docker</a>
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
            <strong>💡 Note:</strong> Use <a href="/docs/neurondb/getting-started/docker" style={{ color: '#fbbf24' }}>Docker</a> to get the complete ecosystem (NeuronDB + NeuronAgent + NeuronMCP + NeuronDesktop) running quickly with automatic configuration.
          </p>
        </div>
      </section>

      <section id="docker-method">
        <h2>Method 1: Docker</h2>
        <p>
          Docker provides the easiest installation with all ecosystem components pre-configured. See the{' '}
          <strong>
            <a href="/docs/neurondb/getting-started/docker">Docker Quick Start Guide</a>
          </strong>{' '}
          for complete instructions.
        </p>

        <BashCodeBlock
          title="Quick start with Docker (main branch - version 2.0.0)"
          code={`# Clone main branch for version 2.0.0 (latest features, default)
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb
# Note: Default clone gets main branch with version 2.0.0

# Start all services (NeuronDB + NeuronAgent + NeuronMCP + NeuronDesktop)
docker compose up -d

# Verify services
docker compose ps`}
        />
        <BashCodeBlock
          title="Quick start with Docker (REL1_STABLE branch - version 1.0.0, stable)"
          code={`# Clone REL1_STABLE branch for version 1.0.0 (stable production release)
git clone -b REL1_STABLE https://github.com/neurondb-ai/neurondb.git
cd neurondb
# Note: REL1_STABLE branch provides version 1.0.0 (stable release)

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
            <a href="/docs/neurondb/getting-started/docker">View complete Docker installation guide →</a>
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
docker pull ghcr.io/neurondb/neurondb-postgres:v2.0.0-pg17-cpu

# Start services
docker compose up -d`}
        />
        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <p>
            <strong>📦 Version Information:</strong> 
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              <li><strong>Version 2.0</strong> (main branch): Latest features, improvements, and bug fixes</li>
              <li><strong>Version 1.0</strong> (REL1_STABLE branch): Stable production release, for production deployments</li>
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
          title="Install DEB package (main branch - version 2.0.0)"
          code={`# Download version 2.0.0 DEB package from GitHub Releases
# Visit: https://github.com/neurondb-ai/neurondb/releases
# Look for releases tagged with v2.0.0 (from main branch)

# Install package
sudo dpkg -i neurondb_2.0.0_amd64.deb

# Install dependencies if needed
sudo apt-get install -f

# Verify installation
psql -d postgres -c "CREATE EXTENSION neurondb;"
psql -d postgres -c "SELECT extversion FROM pg_extension WHERE extname = 'neurondb';"
# Expected output: 2.0`}
        />
        <BashCodeBlock
          title="Install DEB package (REL1_STABLE branch - version 1.0.0)"
          code={`# Download version 1.0.0 DEB package from GitHub Releases
# Visit: https://github.com/neurondb-ai/neurondb/releases
# Look for releases tagged with v2.0.0 (from main branch) or v1.0.0 (from REL1_STABLE branch)

# Install package
sudo dpkg -i neurondb_1.0.0_amd64.deb

# Install dependencies if needed
sudo apt-get install -f

# Verify installation
psql -d postgres -c "CREATE EXTENSION neurondb;"
psql -d postgres -c "SELECT extversion FROM pg_extension WHERE extname = 'neurondb';"
# Expected output: 1.0`}
        />

        <h3>Rocky Linux / RHEL (RPM)</h3>
        <BashCodeBlock
          title="Install RPM package (main branch - version 2.0.0)"
          code={`# Download version 2.0.0 RPM package from GitHub Releases
# Visit: https://github.com/neurondb-ai/neurondb/releases
# Look for releases tagged with v2.0.0 (from main branch)

# Install package
sudo rpm -ivh neurondb-2.0.0-1.x86_64.rpm

# Or use yum/dnf
sudo yum install neurondb-2.0.0-1.x86_64.rpm

# Verify installation
psql -d postgres -c "CREATE EXTENSION neurondb;"
psql -d postgres -c "SELECT extversion FROM pg_extension WHERE extname = 'neurondb';"
# Expected output: 2.0`}
        />
        <BashCodeBlock
          title="Install RPM package (REL1_STABLE branch - version 1.0.0)"
          code={`# Download version 1.0.0 RPM package from GitHub Releases
# Visit: https://github.com/neurondb-ai/neurondb/releases
# Look for releases tagged with v2.0.0 (from main branch) or v1.0.0 (from REL1_STABLE branch)

# Install package
sudo rpm -ivh neurondb-1.0.0-1.x86_64.rpm

# Or use yum/dnf
sudo yum install neurondb-1.0.0-1.x86_64.rpm

# Verify installation
psql -d postgres -c "CREATE EXTENSION neurondb;"
psql -d postgres -c "SELECT extversion FROM pg_extension WHERE extname = 'neurondb';"
# Expected output: 1.0`}
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
          title="Build NeuronDB (main branch - version 2.0.0)"
          code={`# Clone main branch for version 2.0.0
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb/NeuronDB
make PG_CONFIG=/usr/lib/postgresql/17/bin/pg_config
sudo make install PG_CONFIG=/usr/lib/postgresql/17/bin/pg_config`}
        />
        <BashCodeBlock
          title="Build NeuronDB (REL1_STABLE branch - version 1.0.0)"
          code={`# Clone REL1_STABLE branch for version 1.0.0 (stable production release)
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
          title="Build NeuronDB (REL1_STABLE branch - version 1.0.0)"
          code={`# Clone REL1_STABLE branch for version 1.0.0 (stable production release)
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
          title="Build NeuronDB (main branch - version 2.0.0)"
          code={`# Clone main branch for version 2.0.0
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb/NeuronDB
make PG_CONFIG=/usr/pgsql-17/bin/pg_config
sudo make install PG_CONFIG=/usr/pgsql-17/bin/pg_config`}
        />
        <BashCodeBlock
          title="Build NeuronDB (REL1_STABLE branch - version 1.0.0)"
          code={`# Clone REL1_STABLE branch for version 1.0.0 (stable production release)
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
          If you're upgrading from NeuronDB 1.0 (REL1_STABLE branch) to version 2.0 (main branch), follow these steps:
        </p>
        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Important:</strong> Version 2.0.0 is available on the <code style={{ backgroundColor: '#1e293b', padding: '0.15rem 0.4rem', borderRadius: '0.25rem' }}>main</code> branch.
            The upgrade path requires switching from <code style={{ backgroundColor: '#1e293b', padding: '0.15rem 0.4rem', borderRadius: '0.25rem' }}>REL1_STABLE</code> to <code style={{ backgroundColor: '#1e293b', padding: '0.15rem 0.4rem', borderRadius: '0.25rem' }}>main</code> branch.
          </p>
        </div>
        <SqlCodeBlock
          title="Upgrade extension"
          code={`-- Check current version
SELECT extversion FROM pg_extension WHERE extname = 'neurondb';

-- Upgrade to version 2.0 (requires main branch installation)
ALTER EXTENSION neurondb UPDATE TO '2.0';

-- Verify upgrade
SELECT extversion FROM pg_extension WHERE extname = 'neurondb';`}
        />
        <p>
          The upgrade script <code>neurondb--1.0--2.0.sql</code> will automatically run during the upgrade process.
          This ensures compatibility between versions and preserves all your data and indexes.
          <strong>Note:</strong> Make sure you've installed NeuronDB from the <code>main</code> branch before running the upgrade.
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
        <h2>Compatibility</h2>
        <p>NeuronDB supports:</p>
        <ul>
          <li><strong>PostgreSQL Versions:</strong> 16, 17, 18 (full feature support)</li>
          <li><strong>Operating Systems:</strong> Linux (Ubuntu 20.04+, Debian 11+, RHEL 8+), macOS 13+ (Ventura), macOS 14+ (Sonoma)</li>
          <li><strong>GPU Backends:</strong> CUDA (NVIDIA), ROCm (AMD), Metal (Apple Silicon)</li>
          <li><strong>Architectures:</strong> linux/amd64, linux/arm64</li>
        </ul>
        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <p style={{ marginBottom: 0 }}>
            <strong>📋 Detailed Compatibility Matrix:</strong> For complete compatibility information including CI testing details, version-specific notes, and known issues, see{' '}
            <a href="https://github.com/neurondb-ai/neurondb/blob/main/COMPATIBILITY.md" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>COMPATIBILITY.md</a> in the repository.
          </p>
        </div>
      </section>

      <section>
        <h2>Next Steps</h2>
        <ul>
          <li>
            <a href="/docs/neurondb/getting-started/docker">Docker Quick Start</a> - Complete ecosystem running in minutes
          </li>
          <li>
            <a href="/docs/neurondb/getting-started/quickstart">Quick Start Guide</a> - Create your first vector table, generate embeddings, and run semantic search
          </li>
          <li>
            <a href="/docs/neurondb/configuration">Configuration Reference</a> - Tune GUC parameters for CPU/GPU execution paths and logging
          </li>
          <li>
            <a href="/docs/neurondb/troubleshooting">Troubleshooting Guide</a> - Resolve build failures, GPU driver issues, and deployment blockers
          </li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
