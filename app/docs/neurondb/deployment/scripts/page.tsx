import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'Operational Scripts | NeuronDB Automation',
  description: 'Professional automation scripts for managing, deploying, monitoring, and maintaining all NeuronDB components. Docker, database, setup, health checks, and more.',
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondb/deployment/scripts',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'quick-reference', title: 'Quick Reference' },
  { id: 'docker-scripts', title: 'Docker Management' },
  { id: 'database-scripts', title: 'Database Management' },
  { id: 'setup-scripts', title: 'Setup & Installation' },
  { id: 'health-scripts', title: 'Health Checking' },
  { id: 'monitoring-scripts', title: 'Monitoring' },
  { id: 'workflow-scripts', title: 'Workflows' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/deployment/observability',
  label: 'Observability Stack',
}

const nextLink: NavLink | undefined = undefined

export default function ScriptsPage() {
  return (
    <PostgresDocsLayout
      title="Operational Scripts"
      version="NeuronDB Operations"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          The <code>scripts/</code> directory contains professional, self-sufficient automation scripts for managing, deploying, monitoring, and maintaining all NeuronDB components. 
          All scripts are <strong>completely self-sufficient</strong> with no external dependencies.
        </p>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#fbbf24' }}>✨ Script Features</h3>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>Self-sufficient:</strong> No external dependencies</li>
            <li><strong>Standard CLI:</strong> <code>--help</code>, <code>--verbose</code>, <code>--version</code>, <code>--dry-run</code></li>
            <li><strong>Modular:</strong> Commands organized by functionality</li>
            <li><strong>Professional:</strong> Consistent naming and structure</li>
            <li><strong>Well-documented:</strong> Comprehensive help and examples</li>
          </ul>
        </div>

        <p>
          <strong>Location:</strong> All scripts are located in the <code>scripts/</code> directory of the NeuronDB repository.
        </p>
      </section>

      <section id="quick-reference">
        <h2>Quick Reference</h2>
        <p>All scripts follow a unified command structure:</p>

        <BashCodeBlock
          title="Script command format"
          code={`./scripts/neurondb-<category>.sh COMMAND [OPTIONS]`}
        />

        <h3>Common Options (available in all scripts):</h3>
        <ul>
          <li><code>-h, --help</code> - Show detailed help message</li>
          <li><code>-v, --verbose</code> - Enable verbose output</li>
          <li><code>-V, --version</code> - Show version information</li>
          <li><code>--dry-run</code> - Preview changes without applying (where applicable)</li>
        </ul>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4b5563' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Script</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Purpose</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fbbf24' }}>Quick Example</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>neurondb-docker.sh</code></td>
              <td style={{ padding: '0.75rem' }}>All Docker operations</td>
              <td style={{ padding: '0.75rem' }}><code>./neurondb-docker.sh run --component neurondb</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>neurondb-database.sh</code></td>
              <td style={{ padding: '0.75rem' }}>Database backup/restore/setup</td>
              <td style={{ padding: '0.75rem' }}><code>./neurondb-database.sh backup --format custom</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>neurondb-setup.sh</code></td>
              <td style={{ padding: '0.75rem' }}>Installation and setup</td>
              <td style={{ padding: '0.75rem' }}><code>./neurondb-setup.sh install --mode docker</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>neurondb-healthcheck.sh</code></td>
              <td style={{ padding: '0.75rem' }}>Health checks and testing</td>
              <td style={{ padding: '0.75rem' }}><code>./neurondb-healthcheck.sh quick</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>neurondb-monitor.sh</code></td>
              <td style={{ padding: '0.75rem' }}>Monitoring and logs</td>
              <td style={{ padding: '0.75rem' }}><code>./neurondb-monitor.sh status</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>neurondb-workflows.sh</code></td>
              <td style={{ padding: '0.75rem' }}>Release and git operations</td>
              <td style={{ padding: '0.75rem' }}><code>./neurondb-workflows.sh release --version 2.0.0</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>neurondb-pkgs.sh</code></td>
              <td style={{ padding: '0.75rem' }}>Package management</td>
              <td style={{ padding: '0.75rem' }}><code>./neurondb-pkgs.sh verify --os ubuntu</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.75rem' }}><code>neurondb-blogs.sh</code></td>
              <td style={{ padding: '0.75rem' }}>Blog maintenance</td>
              <td style={{ padding: '0.75rem' }}><code>./neurondb-blogs.sh fix-markdown</code></td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem' }}><code>neurondb-cleanup.sh</code></td>
              <td style={{ padding: '0.75rem' }}>Cleanup operations</td>
              <td style={{ padding: '0.75rem' }}><code>./neurondb-cleanup.sh --all --dry-run</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="docker-scripts">
        <h2>Docker Management: neurondb-docker.sh</h2>
        <p>Complete Docker container management for all NeuronDB components.</p>

        <h3>Run Docker Containers</h3>
        <BashCodeBlock
          title="Start NeuronDB CPU variant"
          code={`./scripts/neurondb-docker.sh run --component neurondb --variant cpu

# Start with CUDA support
./scripts/neurondb-docker.sh run --component neurondb --variant cuda

# Start NeuronAgent
./scripts/neurondb-docker.sh run --component neuronagent

# Start NeuronMCP
./scripts/neurondb-docker.sh run --component neuronmcp`}
        />

        <h3>Test Docker Setup</h3>
        <BashCodeBlock
          title="Run Docker tests"
          code={`# Basic connectivity tests
./scripts/neurondb-docker.sh test --type basic --variant cpu

# Integration tests
./scripts/neurondb-docker.sh test --type integration

# Comprehensive test suite
./scripts/neurondb-docker.sh test --type comprehensive --variant cuda`}
        />

        <h3>Verify Docker Setup</h3>
        <BashCodeBlock
          title="Verify Docker dependencies and ecosystem"
          code={`# Verify Docker installation
./scripts/neurondb-docker.sh verify --dependencies

# Verify entire Docker ecosystem
./scripts/neurondb-docker.sh verify --ecosystem`}
        />

        <h3>View Logs</h3>
        <BashCodeBlock
          title="Monitor container logs"
          code={`# View NeuronDB logs
./scripts/neurondb-docker.sh logs --component neurondb

# Follow logs in real-time
./scripts/neurondb-docker.sh logs --component neuronagent --follow

# View last 100 lines
./scripts/neurondb-docker.sh logs --component neurondb --lines 100`}
        />
      </section>

      <section id="database-scripts">
        <h2>Database Management: neurondb-database.sh</h2>
        <p>Complete database operations including backup, restore, setup, and maintenance.</p>

        <h3>Create Database Backup</h3>
        <BashCodeBlock
          title="Backup database (custom format recommended)"
          code={`# Custom format (compressed, supports parallel restore)
./scripts/neurondb-database.sh backup --format custom

# SQL format with compression
./scripts/neurondb-database.sh backup --format sql --compress

# Directory format (parallel dump for large databases)
./scripts/neurondb-database.sh backup --format directory --output /backups/neurondb

# Custom retention policy (keep backups for 7 days)
./scripts/neurondb-database.sh backup --format custom --retention 7`}
        />

        <h3>Restore Database</h3>
        <BashCodeBlock
          title="Restore from backup"
          code={`# Restore from custom format (auto-detected)
./scripts/neurondb-database.sh restore --backup neurondb_backup_20250101_120000.dump

# Restore from SQL backup
./scripts/neurondb-database.sh restore --backup neurondb_backup_20250101_120000.sql

# Restore from directory format with 8 parallel jobs
./scripts/neurondb-database.sh restore --backup neurondb_backup_20250101_120000_dir --jobs 8`}
        />

        <h3>Database Setup</h3>
        <BashCodeBlock
          title="Setup database and extensions"
          code={`# Setup database with extensions
./scripts/neurondb-database.sh setup

# Check database status
./scripts/neurondb-database.sh status

# Run VACUUM ANALYZE
./scripts/neurondb-database.sh vacuum`}
        />

        <h3>List and Verify Backups</h3>
        <BashCodeBlock
          title="Manage backups"
          code={`# List all available backups
./scripts/neurondb-database.sh list-backups

# Verify database integrity
./scripts/neurondb-database.sh verify`}
        />
      </section>

      <section id="setup-scripts">
        <h2>Setup & Installation: neurondb-setup.sh</h2>
        <p>Complete setup and installation of the NeuronDB ecosystem.</p>

        <h3>Install NeuronDB Ecosystem</h3>
        <BashCodeBlock
          title="Install with Docker (recommended)"
          code={`# Install with Docker
./scripts/neurondb-setup.sh install --mode docker

# Install specific components
./scripts/neurondb-setup.sh install --mode docker --components neurondb,neuronagent

# Install with DEB packages
./scripts/neurondb-setup.sh install --mode deb

# Install with RPM packages
./scripts/neurondb-setup.sh install --mode rpm`}
        />

        <h3>One-Command Ecosystem Setup</h3>
        <BashCodeBlock
          title="Complete ecosystem setup"
          code={`# Setup complete ecosystem (checks prerequisites, installs all components)
./scripts/neurondb-setup.sh ecosystem

# Verify installation
./scripts/neurondb-setup.sh verify

# Generate secure passwords
./scripts/neurondb-setup.sh generate-passwords > .env.secure`}
        />
      </section>

      <section id="health-scripts">
        <h2>Health Checking: neurondb-healthcheck.sh</h2>
        <p>Health checks and integration testing for all NeuronDB components.</p>

        <BashCodeBlock
          title="Run health checks"
          code={`# Quick health check (30 seconds)
./scripts/neurondb-healthcheck.sh quick

# Full health check
./scripts/neurondb-healthcheck.sh health

# Integration tests
./scripts/neurondb-healthcheck.sh integration

# Smoke tests
./scripts/neurondb-healthcheck.sh smoke`}
        />
      </section>

      <section id="monitoring-scripts">
        <h2>Monitoring: neurondb-monitor.sh</h2>
        <p>Real-time monitoring, log viewing, and metrics collection.</p>

        <BashCodeBlock
          title="Monitor components"
          code={`# Show component status
./scripts/neurondb-monitor.sh status

# View logs
./scripts/neurondb-monitor.sh logs --component neurondb --follow

# Watch status continuously (updates every 5 seconds)
./scripts/neurondb-monitor.sh watch

# Show metrics and statistics
./scripts/neurondb-monitor.sh metrics`}
        />
      </section>

      <section id="workflow-scripts">
        <h2>Workflows: neurondb-workflows.sh</h2>
        <p>Release management, version synchronization, and git operations.</p>

        <BashCodeBlock
          title="Release and version management"
          code={`# Create new release
./scripts/neurondb-workflows.sh release --version 2.0.0

# Sync version branches (main -> REL1_STABLE)
./scripts/neurondb-workflows.sh sync

# Update markdown references after file renames
./scripts/neurondb-workflows.sh update-refs

# Safe git pull (with rebase)
./scripts/neurondb-workflows.sh pull`}
        />
      </section>

      <section>
        <h2>Common Workflows</h2>

        <h3>Complete Fresh Installation</h3>
        <BashCodeBlock
          title="Full setup workflow"
          code={`# 1. Setup complete ecosystem
./scripts/neurondb-setup.sh ecosystem

# 2. Verify installation
./scripts/neurondb-setup.sh verify

# 3. Quick health check
./scripts/neurondb-healthcheck.sh quick

# 4. Monitor status
./scripts/neurondb-monitor.sh status`}
        />

        <h3>Docker Deployment</h3>
        <BashCodeBlock
          title="Docker deployment workflow"
          code={`# 1. Start all services
./scripts/neurondb-docker.sh run --component neurondb --variant cpu
./scripts/neurondb-docker.sh run --component neuronagent

# 2. Verify Docker setup
./scripts/neurondb-docker.sh verify --dependencies --ecosystem

# 3. Run tests
./scripts/neurondb-docker.sh test --type basic

# 4. Monitor
./scripts/neurondb-monitor.sh watch`}
        />

        <h3>Database Backup & Restore</h3>
        <BashCodeBlock
          title="Backup workflow"
          code={`# 1. Create backup
./scripts/neurondb-database.sh backup --format custom --retention 30

# 2. List backups
./scripts/neurondb-database.sh list-backups

# 3. Restore if needed
./scripts/neurondb-database.sh restore --backup backups/neurondb_backup_20250101_120000.dump

# 4. Verify restore
./scripts/neurondb-database.sh verify`}
        />
      </section>

      <section>
        <h2>Additional Resources</h2>
        <ul>
          <li>
            <a href="https://github.com/neurondb-ai/neurondb/blob/main/scripts/README.md" target="_blank" rel="noopener noreferrer">Scripts README</a> - Complete scripts documentation with all commands and examples
          </li>
          <li>
            <a href="https://github.com/neurondb-ai/neurondb/tree/main/scripts" target="_blank" rel="noopener noreferrer">Scripts Directory</a> - All scripts source code
          </li>
          <li>
            <a href="/docs/neurondb/deployment/kubernetes">Kubernetes Deployment</a> - Cloud-native deployment guide
          </li>
          <li>
            <a href="/docs/neurondb/deployment/observability">Observability Stack</a> - Monitoring setup
          </li>
        </ul>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
          <p style={{ margin: 0 }}>
            <strong>💡 Tip:</strong> All scripts support <code>--help</code> for detailed usage information. 
            For example: <code>./scripts/neurondb-docker.sh --help</code>
          </p>
        </div>
      </section>
    </PostgresDocsLayout>
  )
}



