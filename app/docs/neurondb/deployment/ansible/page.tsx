import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'Ansible Infrastructure Provisioning | NeuronDB Deployment',
  description: 'Complete Ansible automation for infrastructure provisioning and deployment of NeuronDB ecosystem across development, staging, and production environments.',
  alternates: {
    canonical: 'https://neurondb.ai/docs/neurondb/deployment/ansible',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'quick-start', title: 'Quick Start' },
  { id: 'prerequisites', title: 'Prerequisites' },
  { id: 'initial-setup', title: 'Initial Setup' },
  { id: 'inventory-setup', title: 'Inventory Setup' },
  { id: 'configuration', title: 'Configuration' },
  { id: 'playbooks', title: 'Playbooks' },
  { id: 'roles', title: 'Roles' },
  { id: 'integration', title: 'Integration with Scripts' },
  { id: 'common-tasks', title: 'Common Tasks' },
  { id: 'troubleshooting', title: 'Troubleshooting' },
  { id: 'best-practices', title: 'Best Practices' },
]

const prevLink: NavLink = {
  href: '/docs/neurondb/deployment/scripts',
  label: 'Operational Scripts',
}

const nextLink: NavLink = {
  href: '/docs/neurondb/deployment/kubernetes',
  label: 'Kubernetes Deployment',
}

export default function AnsibleDeploymentPage() {
  return (
    <PostgresDocsLayout
      title="Ansible Infrastructure Provisioning"
      version="NeuronDB Operations"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          The Ansible automation complements existing Docker/Kubernetes scripts by handling infrastructure provisioning and deployment of the NeuronDB ecosystem across development, staging, and production environments.
        </p>

        <div style={{ backgroundColor: '#1e3a5f', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#fbbf24' }}>✨ What Ansible Handles</h3>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>OS-level system configuration</strong> - Package installation, user/group creation, system tuning</li>
            <li><strong>Infrastructure provisioning</strong> - Firewall, security hardening, SSL/TLS certificates</li>
            <li><strong>PostgreSQL installation and configuration</strong> - Repository setup, database configuration</li>
            <li><strong>NeuronDB extension build and installation</strong> - Build dependencies, compilation, installation</li>
            <li><strong>Service deployment</strong> - NeuronAgent, NeuronMCP, NeuronDesktop setup and configuration</li>
            <li><strong>Backup and restore operations</strong> - Database backup automation</li>
            <li><strong>Maintenance tasks</strong> - System updates, database VACUUM, log cleanup</li>
          </ul>
        </div>

        <p>
          <strong>Location:</strong> All Ansible automation is located in the <code>ansible/</code> directory of the NeuronDB repository.
        </p>
      </section>

      <section id="quick-start">
        <h2>Quick Start</h2>
        <p>Get started with Ansible deployment in minutes:</p>

        <BashCodeBlock
          title="Deploy complete ecosystem"
          code={`# 1. Clone repository
git clone https://github.com/neurondb-ai/neurondb.git
cd neurondb/ansible

# 2. Configure inventory
vi inventory/hosts.yml

# 3. Configure variables
vi group_vars/production.yml

# 4. Deploy to all hosts in production
ansible-playbook playbooks/site.yml -i inventory/hosts.yml --limit production

# 5. Verify deployment
ansible all -i inventory/hosts.yml -m shell -a "systemctl status postgresql neuronagent neuronmcp"`}
        />
      </section>

      <section id="prerequisites">
        <h2>Prerequisites</h2>

        <h3>1. Ansible Installation</h3>
        <BashCodeBlock
          title="Install Ansible"
          code={`# macOS
brew install ansible

# Ubuntu/Debian
sudo apt-get install ansible

# RHEL/CentOS/Rocky
sudo yum install ansible`}
        />

        <h3>2. SSH Access</h3>
        <ul>
          <li>SSH key-based authentication to target hosts</li>
          <li>Sudo/root access on target hosts</li>
        </ul>

        <h3>3. Python 3</h3>
        <ul>
          <li>Python 3.6+ required on target hosts</li>
        </ul>
      </section>

      <section id="initial-setup">
        <h2>Initial Setup</h2>

        <h3>Configure Inventory</h3>
        <BashCodeBlock
          title="Edit inventory file"
          code={`# Edit inventory/hosts.yml with your server details
vi inventory/hosts.yml`}
        />

        <h3>Configure Variables</h3>
        <BashCodeBlock
          title="Edit environment variables"
          code={`# Edit group_vars for your environment
vi group_vars/production.yml`}
        />

        <h3>Set Up Ansible Vault (for secrets)</h3>
        <BashCodeBlock
          title="Configure Ansible Vault"
          code={`# Create vault password file
echo "your-vault-password" > .vault_pass
chmod 600 .vault_pass

# Encrypt sensitive variables
ansible-vault encrypt group_vars/production.yml

# Edit encrypted file
ansible-vault edit group_vars/production.yml

# View encrypted file
ansible-vault view group_vars/production.yml`}
        />
      </section>

      <section id="inventory-setup">
        <h2>Inventory Setup</h2>

        <h3>Basic Inventory</h3>
        <p>Edit <code>inventory/hosts.yml</code>:</p>

        <BashCodeBlock
          title="Example inventory structure"
          code={`all:
  children:
    production:
      hosts:
        prod-neurondb-01:
          ansible_host: 10.0.1.10
          ansible_user: root
        prod-neurondb-02:
          ansible_host: 10.0.1.11
          ansible_user: root
    development:
      hosts:
        dev-neurondb-01:
          ansible_host: 10.0.2.10
          ansible_user: ubuntu`}
        />

        <h3>Host-Specific Variables</h3>
        <p>Create <code>inventory/host_vars/prod-neurondb-01.yml</code>:</p>

        <BashCodeBlock
          title="Host-specific configuration"
          code={`neurondb_maintenance_work_mem: "1GB"
postgresql_max_connections: 300`}
        />
      </section>

      <section id="configuration">
        <h2>Configuration</h2>

        <h3>Global Variables (group_vars/all.yml)</h3>
        <ul>
          <li>Component versions</li>
          <li>Installation paths</li>
          <li>Service users</li>
          <li>Build options</li>
        </ul>

        <h3>Environment Variables</h3>
        <ul>
          <li><strong>Development</strong> (<code>group_vars/development.yml</code>): Lower resources, debug enabled</li>
          <li><strong>Staging</strong> (<code>group_vars/staging.yml</code>): Production-like configuration</li>
          <li><strong>Production</strong> (<code>group_vars/production.yml</code>): Optimized for performance and security</li>
        </ul>

        <h3>Directory Structure</h3>
        <BashCodeBlock
          title="Ansible directory layout"
          code={`ansible/
├── ansible.cfg              # Ansible configuration
├── requirements.yml         # Ansible role dependencies
├── README.md               # Documentation
├── playbooks/              # Playbooks
│   ├── site.yml           # Main orchestration playbook
│   ├── infrastructure.yml  # Infrastructure provisioning
│   ├── deploy-*.yml        # Component deployment playbooks
│   ├── backup-restore.yml  # Backup and restore operations
│   └── maintenance.yml     # Maintenance tasks
├── roles/                  # Ansible roles
│   ├── common/            # Common system setup
│   ├── postgresql/        # PostgreSQL installation
│   ├── neurondb/          # NeuronDB extension
│   ├── neuronagent/       # NeuronAgent service
│   ├── neuronmcp/         # NeuronMCP service
│   ├── neurondesktop/     # NeuronDesktop service
│   ├── monitoring/        # Monitoring setup
│   └── security/          # Security hardening
├── inventory/              # Inventory files
│   ├── hosts.yml         # Host inventory
│   └── group_vars/        # Group-specific variables
├── group_vars/             # Environment variables
│   ├── all.yml           # Global variables
│   ├── development.yml    # Development environment
│   ├── staging.yml        # Staging environment
│   └── production.yml     # Production environment
└── files/                  # Static files
    ├── systemd/           # Systemd service files
    └── configs/          # Configuration templates`}
        />
      </section>

      <section id="playbooks">
        <h2>Playbooks</h2>

        <h3>site.yml - Main Orchestration</h3>
        <p>Deploys the complete ecosystem:</p>
        <BashCodeBlock
          title="Deploy complete ecosystem"
          code={`# Deploy to all hosts in production
ansible-playbook playbooks/site.yml -i inventory/hosts.yml --limit production

# Deploy to specific host
ansible-playbook playbooks/site.yml -i inventory/hosts.yml --limit prod-neurondb-01

# Dry run (check mode)
ansible-playbook playbooks/site.yml -i inventory/hosts.yml --check`}
        />

        <h3>infrastructure.yml - Infrastructure Provisioning</h3>
        <p>Provisions OS-level infrastructure:</p>
        <ul>
          <li>System packages</li>
          <li>Firewall configuration</li>
          <li>Security hardening</li>
          <li>System tuning</li>
          <li>SSL/TLS certificates</li>
        </ul>
        <BashCodeBlock
          title="Deploy infrastructure"
          code={`ansible-playbook playbooks/infrastructure.yml -i inventory/hosts.yml`}
        />

        <h3>Deploy Individual Components</h3>
        <BashCodeBlock
          title="Component-specific playbooks"
          code={`# Deploy only NeuronDB
ansible-playbook playbooks/deploy-neurondb.yml -i inventory/hosts.yml

# Deploy only NeuronAgent
ansible-playbook playbooks/deploy-neuronagent.yml -i inventory/hosts.yml

# Deploy only NeuronMCP
ansible-playbook playbooks/deploy-neuronmcp.yml -i inventory/hosts.yml

# Deploy only NeuronDesktop
ansible-playbook playbooks/deploy-neurondesktop.yml -i inventory/hosts.yml`}
        />

        <h3>backup-restore.yml - Database Operations</h3>
        <BashCodeBlock
          title="Backup and restore"
          code={`# Create backup
ansible-playbook playbooks/backup-restore.yml -i inventory/hosts.yml --tags backup

# Restore from backup
ansible-playbook playbooks/backup-restore.yml -i inventory/hosts.yml \
  --tags restore \
  -e backup_file_path=/backups/neurondb/backup.dump`}
        />

        <h3>maintenance.yml - Maintenance Tasks</h3>
        <p>Maintenance operations:</p>
        <ul>
          <li>System updates</li>
          <li>Database VACUUM</li>
          <li>Log cleanup</li>
          <li>Backup cleanup</li>
        </ul>
        <BashCodeBlock
          title="Run maintenance"
          code={`ansible-playbook playbooks/maintenance.yml -i inventory/hosts.yml`}
        />
      </section>

      <section id="roles">
        <h2>Roles</h2>

        <h3>common</h3>
        <p>OS-level setup:</p>
        <ul>
          <li>Package installation</li>
          <li>User/group creation</li>
          <li>Directory structure</li>
          <li>System limits</li>
          <li>Log rotation</li>
        </ul>

        <h3>postgresql</h3>
        <p>PostgreSQL installation and configuration:</p>
        <ul>
          <li>Repository setup</li>
          <li>PostgreSQL installation</li>
          <li>Configuration files</li>
          <li>Database and user creation</li>
        </ul>

        <h3>neurondb</h3>
        <p>NeuronDB extension:</p>
        <ul>
          <li>Build dependencies</li>
          <li>Extension build</li>
          <li>Extension installation</li>
          <li>Verification</li>
        </ul>

        <h3>neuronagent</h3>
        <p>NeuronAgent service:</p>
        <ul>
          <li>Go installation</li>
          <li>Binary build</li>
          <li>Configuration</li>
          <li>Systemd service</li>
        </ul>

        <h3>neuronmcp</h3>
        <p>NeuronMCP service:</p>
        <ul>
          <li>Go installation</li>
          <li>Binary build</li>
          <li>Configuration</li>
          <li>Systemd service</li>
        </ul>

        <h3>neurondesktop</h3>
        <p>NeuronDesktop service:</p>
        <ul>
          <li>Node.js installation</li>
          <li>Go installation</li>
          <li>API and frontend build</li>
          <li>Systemd services</li>
        </ul>

        <h3>monitoring</h3>
        <p>Monitoring setup (Prometheus, Grafana).</p>

        <h3>security</h3>
        <p>Security hardening and firewall configuration.</p>
      </section>

      <section id="integration">
        <h2>Integration with Existing Scripts</h2>
        <p>The Ansible playbooks integrate with existing shell scripts:</p>

        <h3>neurondb-setup.sh</h3>
        <p>Used for package installation and setup verification.</p>

        <h3>neurondb-database.sh</h3>
        <p>Used for backup and restore operations:</p>
        <ul>
          <li><code>backup-restore.yml</code> calls <code>neurondb-database.sh backup</code></li>
          <li><code>backup-restore.yml</code> calls <code>neurondb-database.sh restore</code></li>
        </ul>

        <h3>neurondb-healthcheck.sh</h3>
        <p>Used for health verification:</p>
        <ul>
          <li><code>deploy-neurondb.yml</code> calls <code>neurondb-healthcheck.sh quick</code></li>
          <li><code>deploy-neuronagent.yml</code> calls <code>neurondb-healthcheck.sh health</code></li>
        </ul>
      </section>

      <section id="common-tasks">
        <h2>Common Tasks</h2>

        <h3>Deploy to New Server</h3>
        <BashCodeBlock
          title="Complete new server deployment"
          code={`# 1. Add server to inventory
vi inventory/hosts.yml

# 2. Test connectivity
ansible all -i inventory/hosts.yml -m ping

# 3. Deploy infrastructure
ansible-playbook playbooks/infrastructure.yml -i inventory/hosts.yml --limit new-server

# 4. Deploy NeuronDB
ansible-playbook playbooks/deploy-neurondb.yml -i inventory/hosts.yml --limit new-server

# 5. Deploy services
ansible-playbook playbooks/site.yml -i inventory/hosts.yml --limit new-server`}
        />

        <h3>Update Configuration</h3>
        <BashCodeBlock
          title="Update service configuration"
          code={`# Update configuration and restart services
ansible-playbook playbooks/deploy-neuronagent.yml -i inventory/hosts.yml \
  -e neuronagent_log_level=debug`}
        />

        <h3>Run Maintenance</h3>
        <BashCodeBlock
          title="Execute maintenance tasks"
          code={`# Run maintenance tasks
ansible-playbook playbooks/maintenance.yml -i inventory/hosts.yml`}
        />

        <h3>Backup Database</h3>
        <BashCodeBlock
          title="Create database backup"
          code={`# Create backup
ansible-playbook playbooks/backup-restore.yml -i inventory/hosts.yml \
  --tags backup`}
        />

        <h3>Using Tags</h3>
        <BashCodeBlock
          title="Run specific tasks with tags"
          code={`# Run only infrastructure tasks
ansible-playbook playbooks/infrastructure.yml --tags firewall

# Skip certain tasks
ansible-playbook playbooks/site.yml --skip-tags backup`}
        />

        <h3>Parallel Execution</h3>
        <BashCodeBlock
          title="Deploy to multiple hosts in parallel"
          code={`# Run on multiple hosts in parallel (10 at a time)
ansible-playbook playbooks/site.yml -i inventory/hosts.yml -f 10`}
        />

        <h3>Custom Variables</h3>
        <BashCodeBlock
          title="Override variables at runtime"
          code={`# Override variables at runtime
ansible-playbook playbooks/deploy-neurondb.yml -i inventory/hosts.yml \
  -e postgresql_version=18 \
  -e neurondb_version=2.0.0`}
        />
      </section>

      <section id="troubleshooting">
        <h2>Troubleshooting</h2>

        <h3>Connection Issues</h3>
        <BashCodeBlock
          title="Test SSH connectivity"
          code={`# Test SSH connectivity
ansible all -i inventory/hosts.yml -m ping

# Test with verbose output
ansible all -i inventory/hosts.yml -m ping -vvv`}
        />

        <h3>Permission Issues</h3>
        <BashCodeBlock
          title="Use become with specific user"
          code={`# Use become with specific user
ansible-playbook playbooks/site.yml -i inventory/hosts.yml \
  --become --become-user=root`}
        />

        <h3>Service Not Starting</h3>
        <BashCodeBlock
          title="Check service status and logs"
          code={`# Check service status
ansible all -i inventory/hosts.yml -m systemd \
  -a "name=neuronagent state=started"

# View logs
ansible all -i inventory/hosts.yml -m shell \
  -a "journalctl -u neuronagent -n 50"`}
        />

        <h3>Build Failures</h3>
        <BashCodeBlock
          title="Check build dependencies"
          code={`# Check build dependencies
ansible all -i inventory/hosts.yml -m shell \
  -a "which gcc && which make && which pg_config"

# Check Go installation
ansible all -i inventory/hosts.yml -m shell \
  -a "go version"`}
        />
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>

        <ol>
          <li>
            <strong>Use Ansible Vault for Secrets</strong>
            <ul>
              <li>Never commit unencrypted passwords</li>
              <li>Use vault for database passwords, API keys</li>
            </ul>
          </li>
          <li>
            <strong>Test in Development First</strong>
            <ul>
              <li>Always test playbooks in development</li>
              <li>Use <code>--check</code> mode for dry runs</li>
            </ul>
          </li>
          <li>
            <strong>Version Control</strong>
            <ul>
              <li>Commit inventory and playbooks</li>
              <li>Use tags for versioning</li>
            </ul>
          </li>
          <li>
            <strong>Idempotency</strong>
            <ul>
              <li>Playbooks are idempotent (safe to re-run)</li>
              <li>Use <code>--check</code> to preview changes</li>
            </ul>
          </li>
          <li>
            <strong>Limit Scope</strong>
            <ul>
              <li>Use <code>--limit</code> to target specific hosts</li>
              <li>Use tags to run specific tasks</li>
            </ul>
          </li>
          <li>
            <strong>Security Considerations</strong>
            <ul>
              <li>Use SSH key-based authentication</li>
              <li>Encrypt all sensitive variables with Vault</li>
              <li>Enable firewall rules in production</li>
              <li>Use dedicated service users (not root)</li>
              <li>Restrict file permissions</li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h2>Additional Resources</h2>
        <ul>
          <li>
            <a href="https://github.com/neurondb-ai/neurondb/blob/main/ansible/README.md" target="_blank" rel="noopener noreferrer">Ansible README</a> - Complete Ansible documentation in repository
          </li>
          <li>
            <a href="https://github.com/neurondb-ai/neurondb/tree/main/ansible" target="_blank" rel="noopener noreferrer">Ansible Directory</a> - All Ansible automation source code
          </li>
          <li>
            <a href="/docs/neurondb/deployment/scripts">Operational Scripts</a> - Shell scripts for deployment
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
            <strong>💡 Tip:</strong> Ansible playbooks are idempotent and safe to re-run. Use <code>--check</code> mode to preview changes before applying them.
          </p>
        </div>
      </section>
    </PostgresDocsLayout>
  )
}
