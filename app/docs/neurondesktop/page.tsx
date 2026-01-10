import { Metadata } from 'next'
import { BookOpen, Download, ExternalLink, Monitor, Database, Bot, Server, Settings, LineChart } from 'lucide-react'
import ProductDocsLanding from '@/components/ProductDocsLanding'
import { generateDocsMetadata } from '@/config/products'
import { getProductTheme } from '@/config/theme'

export const metadata: Metadata = generateDocsMetadata('neurondesktop')

export default function NeuronDesktopDocsPage() {
  const theme = getProductTheme('neurondesktop')
  
  return (
    <ProductDocsLanding
      hero={{
        badgeLabel: 'Unified Web Interface',
        badgeIcon: null,
        badgeGradient: theme.badgeGradient,
        title: 'NeuronDesktop Documentation',
        description:
          'Unified web interface providing a single dashboard for managing and interacting with MCP servers, NeuronDB, and NeuronAgent. Real-time WebSocket communication, secure authentication, comprehensive logging, and built-in metrics collection.',
        ctas: [
          {
            label: 'Get Started',
            href: 'https://github.com/neurondb-ai/neurondb',
            icon: BookOpen,
            variant: 'primary'
          },
          {
            label: 'View on GitHub',
            href: 'https://github.com/neurondb-ai/neurondb',
            icon: ExternalLink,
            external: true,
            variant: 'secondary'
          }
        ]
      }}
      features={[
        {
          icon: Monitor,
          title: 'Unified Dashboard',
          description: 'Single interface for managing all NeuronDB ecosystem components with profile-based configuration.',
        },
        {
          icon: Server,
          title: 'Real-time Updates',
          description: 'WebSocket support for live updates, streaming responses, and instant feedback.',
        },
        {
          icon: Database,
          title: 'NeuronDB Management',
          description: 'Browse tables, run queries, manage indexes, and perform vector searches through intuitive UI.',
        },
        {
          icon: Bot,
          title: 'Agent Management',
          description: 'Create agents, view sessions, monitor performance, and test agent interactions.',
        }
      ]}
      docSections={[
        {
          title: 'Getting Started',
          description: 'Install and configure NeuronDesktop, set up profiles, and connect to your NeuronDB ecosystem.',
          items: [
            { title: 'Installation', href: 'https://github.com/neurondb-ai/neurondb', description: 'Install NeuronDesktop from source or use pre-built binaries.', external: true },
            { title: 'Quick Start', href: 'https://github.com/neurondb-ai/neurondb', description: 'Automated setup with default profile creation and component detection.', external: true },
            { title: 'Profile Configuration', href: 'https://github.com/neurondb-ai/neurondb', description: 'Create and manage profiles for multiple environments and configurations.', external: true },
            { title: 'Component Setup', href: 'https://github.com/neurondb-ai/neurondb', description: 'Configure connections to NeuronDB, NeuronAgent, and NeuronMCP.', external: true }
          ]
        },
        {
          title: 'Dashboard Overview',
          description: 'Unified dashboard providing a single interface for all NeuronDB ecosystem components.',
          items: [
            { title: 'Dashboard Features', href: 'https://github.com/neurondb-ai/neurondb', description: 'Real-time component status, quick actions, metric summaries, and activity feed.', external: true },
            { title: 'Profile Management', href: 'https://github.com/neurondb-ai/neurondb', description: 'Multiple environment support with profile-based configuration and auto-detection.', external: true },
            { title: 'Quick Actions', href: 'https://github.com/neurondb-ai/neurondb', description: 'Common tasks accessible directly from the dashboard with one-click actions.', external: true },
            { title: 'Health Monitoring', href: 'https://github.com/neurondb-ai/neurondb', description: 'System health indicators and component status monitoring.', external: true }
          ]
        },
        {
          title: 'NeuronDB Management',
          description: 'Browse tables, run queries, manage indexes, and perform vector searches through the UI.',
          items: [
            { title: 'Query Editor', href: 'https://github.com/neurondb-ai/neurondb', description: 'SQL query editor with syntax highlighting and result visualization.', external: true },
            { title: 'Table Browser', href: 'https://github.com/neurondb-ai/neurondb', description: 'Browse database tables with schema information and data preview.', external: true },
            { title: 'Index Management', href: 'https://github.com/neurondb-ai/neurondb', description: 'Create, monitor, and manage vector indexes (HNSW, IVF) with performance metrics.', external: true },
            { title: 'Vector Search', href: 'https://github.com/neurondb-ai/neurondb', description: 'Perform vector searches with query builder and result visualization.', external: true }
          ]
        },
        {
          title: 'Agent Management',
          description: 'Create and manage AI agents through the UI with session monitoring and performance analytics.',
          items: [
            { title: 'Agent Creation', href: 'https://github.com/neurondb-ai/neurondb', description: 'Create and configure agents through the web interface with visual tools.', external: true },
            { title: 'Session Management', href: 'https://github.com/neurondb-ai/neurondb', description: 'View and manage agent sessions with message history and context viewing.', external: true },
            { title: 'Message Viewer', href: 'https://github.com/neurondb-ai/neurondb', description: 'View agent messages with context, tool executions, and response streaming.', external: true },
            { title: 'Performance Analytics', href: 'https://github.com/neurondb-ai/neurondb', description: 'Monitor agent performance with analytics, latency metrics, and success rates.', external: true }
          ]
        },
        {
          title: 'MCP Integration',
          description: 'Full MCP server integration and testing through the web interface.',
          items: [
            { title: 'MCP Inspector', href: 'https://github.com/neurondb-ai/neurondb', description: 'Tool listing, inspection, and execution with argument validation.', external: true },
            { title: 'Resource Browser', href: 'https://github.com/neurondb-ai/neurondb', description: 'Browse MCP resources (schema, models, indexes, stats) with real-time updates.', external: true },
            { title: 'Protocol Viewer', href: 'https://github.com/neurondb-ai/neurondb', description: 'View MCP protocol messages, requests, and responses for debugging.', external: true },
            { title: 'Tool Testing', href: 'https://github.com/neurondb-ai/neurondb', description: 'Test MCP tools with custom arguments and view execution results.', external: true }
          ]
        },
        {
          title: 'Metrics & Monitoring',
          description: 'Built-in metrics collection, health checks, and performance dashboards.',
          items: [
            { title: 'Metrics Dashboard', href: 'https://github.com/neurondb-ai/neurondb', description: 'Real-time metrics collection with charts, graphs, and performance indicators.', external: true },
            { title: 'Health Checks', href: 'https://github.com/neurondb-ai/neurondb', description: 'Automatic health checks for all components with status indicators.', external: true },
            { title: 'Query Performance', href: 'https://github.com/neurondb-ai/neurondb', description: 'Query performance charts, latency analysis, and resource utilization graphs.', external: true },
            { title: 'Request Analytics', href: 'https://github.com/neurondb-ai/neurondb', description: 'Request rate, latency, error rate tracking with detailed breakdowns.', external: true }
          ]
        },
        {
          title: 'Logging & Analytics',
          description: 'Comprehensive logging with search, filtering, and analytics capabilities.',
          items: [
            { title: 'Request/Response Logging', href: 'https://github.com/neurondb-ai/neurondb', description: 'Detailed request and response logging with analytics and search capabilities.', external: true },
            { title: 'Structured Logging', href: 'https://github.com/neurondb-ai/neurondb', description: 'Structured logging with search, filtering, and export capabilities.', external: true },
            { title: 'Error Tracking', href: 'https://github.com/neurondb-ai/neurondb', description: 'Error tracking and alerting with historical log analysis.', external: true },
            { title: 'Live Log Streaming', href: 'https://github.com/neurondb-ai/neurondb', description: 'Real-time log streaming from all components with live updates.', external: true }
          ]
        },
        {
          title: 'Settings & Configuration',
          description: 'Manage profiles, connections, authentication, and preferences.',
          items: [
            { title: 'Profile Settings', href: 'https://github.com/neurondb-ai/neurondb', description: 'Manage profiles, connection strings, and environment variables.', external: true },
            { title: 'Authentication', href: 'https://github.com/neurondb-ai/neurondb', description: 'API key management, authentication setup, and access control configuration.', external: true },
            { title: 'Preferences', href: 'https://github.com/neurondb-ai/neurondb', description: 'Theme customization, logging preferences, and export/import settings.', external: true },
            { title: 'Connection Management', href: 'https://github.com/neurondb-ai/neurondb', description: 'Manage database connections, API endpoints, and connection pooling.', external: true }
          ]
        },
        {
          title: 'Examples & Tutorials',
          description: 'Working examples and tutorials for using NeuronDesktop.',
          items: [
            { title: 'Getting Started Guide', href: 'https://github.com/neurondb-ai/neurondb', description: 'Complete guide for setting up and using NeuronDesktop.', external: true },
            { title: 'Profile Configuration', href: 'https://github.com/neurondb-ai/neurondb', description: 'Tutorial on creating and managing profiles for multiple environments.', external: true },
            { title: 'Agent Management Tutorial', href: 'https://github.com/neurondb-ai/neurondb', description: 'Step-by-step guide for creating and managing agents through the UI.', external: true },
            { title: 'Vector Search UI', href: 'https://github.com/neurondb-ai/neurondb', description: 'Tutorial on performing vector searches and managing indexes through the interface.', external: true }
          ]
        }
      ]}
      quickLinks={[
        {
          title: 'Get Started',
          description: 'Install NeuronDesktop and set up your first profile to start managing your NeuronDB ecosystem.',
          href: 'https://github.com/neurondb-ai/neurondb',
          icon: BookOpen,
          external: true
        },
        {
          title: 'Automated Setup',
          description: 'One-command setup with auto-detection of components and default profile creation.',
          href: 'https://github.com/neurondb-ai/neurondb',
          icon: ExternalLink,
          external: true
        },
        {
          title: 'GitHub Repository',
          description: 'Source code, issues, and contribution guide for NeuronDesktop.',
          href: 'https://github.com/neurondb-ai/neurondb',
          icon: ExternalLink,
          external: true
        }
      ]}
      theme={{
        featureIconClass: theme.featureIconClass,
        linkHoverClass: theme.linkHover,
        quickLinkCardClass: theme.quickLinkCardClass,
        quickLinkIconClass: theme.quickLinkIconClass,
        quickLinkHoverLabelClass: theme.quickLinkHoverLabelClass,
        docCardClass: theme.docCardClass,
        primaryButtonClass: theme.buttonPrimary,
        secondaryButtonClass: theme.buttonSecondary,
      }}
    />
  )
}
