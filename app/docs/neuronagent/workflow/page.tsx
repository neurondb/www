import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'Workflow Engine | DAG-Based Workflows | NeuronAgent',
  description: 'DAG-based workflow engine with agent steps, tool steps, HTTP steps, approval gates, conditional logic, and human-in-the-loop support.',
  keywords: [
    'workflow engine',
    'DAG workflows',
    'workflow steps',
    'human-in-the-loop',
    'HITL',
    'approval workflows',
    'workflow scheduling',
    'workflow execution',
    'compensation steps',
    'idempotency'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent/workflow',
  },
  openGraph: {
    title: 'Workflow Engine | DAG-Based Workflows',
    description: 'DAG-based workflow execution with multiple step types and human-in-the-loop support.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neuronagent/workflow',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'dag-workflows', title: 'DAG Workflows' },
  { id: 'workflow-steps', title: 'Workflow Steps' },
  { id: 'dependency-management', title: 'Dependency Management' },
  { id: 'hitl', title: 'Human-in-the-Loop' },
  { id: 'compensation', title: 'Compensation Steps' },
  { id: 'scheduling', title: 'Workflow Scheduling' },
  { id: 'api', title: 'API Reference' },
]

const prevLink: NavLink = {
  href: '/docs/neuronagent/multi-agent',
  label: 'Multi-Agent Collaboration',
}

const nextLink: NavLink = {
  href: '/docs/neuronagent/planning',
  label: 'Planning & Reflection',
}

export default function WorkflowEnginePage() {
  return (
    <PostgresDocsLayout
      title="Workflow Engine"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          The workflow engine provides DAG-based workflow execution with multiple step types, dependency
          management, and human-in-the-loop support. Workflows enable complex multi-step processes with
          automatic parallelization and error handling.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>DAG Workflows:</strong> Directed acyclic graph workflow execution with dependency resolution</li>
          <li><strong>Multiple Step Types:</strong> Agent, tool, HTTP, approval, and conditional steps</li>
          <li><strong>Dependency Management:</strong> Automatic parallel execution where possible</li>
          <li><strong>Input/Output Mapping:</strong> Step input/output mapping with data transformation</li>
          <li><strong>Compensation Steps:</strong> Rollback and compensation logic for failed steps</li>
          <li><strong>Human-in-the-Loop:</strong> Approval gates with email/webhook notifications</li>
          <li><strong>Idempotency:</strong> Idempotent step execution with key-based caching</li>
          <li><strong>Retries:</strong> Configurable retry logic with exponential backoff</li>
          <li><strong>Scheduling:</strong> Schedule workflows for future execution with cron-like syntax</li>
        </ul>
      </section>

      <section id="dag-workflows">
        <h2>DAG Workflows</h2>
        <p>
          Workflows are defined as directed acyclic graphs (DAGs), where each node represents a step
          and edges represent dependencies. The engine automatically resolves dependencies and executes
          steps in the correct order.
        </p>

        <h3>Workflow Definition</h3>
        <p>
          Workflows are defined using JSON or YAML, specifying steps, dependencies, inputs, outputs,
          and execution parameters.
        </p>

        <h3>Execution Model</h3>
        <p>
          The engine executes workflows by resolving dependencies, scheduling steps for execution,
          and managing state throughout the workflow lifecycle.
        </p>
      </section>

      <section id="workflow-steps">
        <h2>Workflow Steps</h2>
        <p>
          Workflows support multiple step types, each optimized for different use cases and integration
          patterns.
        </p>

        <h3>Agent Steps</h3>
        <p>
          Execute an agent with specific input, enabling agent-based workflow orchestration.
        </p>

        <h3>Tool Steps</h3>
        <p>
          Execute a tool directly, bypassing agent execution for simple operations.
        </p>

        <h3>HTTP Steps</h3>
        <p>
          Make HTTP requests to external services, enabling integration with external APIs.
        </p>

        <h3>Approval Steps</h3>
        <p>
          Human approval gates that pause workflow execution until approval is received.
        </p>

        <h3>Conditional Steps</h3>
        <p>
          Branching logic based on conditions, enabling dynamic workflow paths.
        </p>
      </section>

      <section id="dependency-management">
        <h2>Dependency Management</h2>
        <p>
          The workflow engine automatically manages step dependencies, executing steps in parallel
          when possible and ensuring correct execution order.
        </p>

        <h3>Dependency Resolution</h3>
        <p>
          Dependencies are resolved from the workflow definition, creating an execution plan that
          respects all dependencies.
        </p>

        <h3>Parallel Execution</h3>
        <p>
          Steps without dependencies are executed in parallel, improving workflow performance.
        </p>

        <h3>Input/Output Mapping</h3>
        <p>
          Step inputs and outputs are automatically mapped, enabling data flow between steps.
        </p>
      </section>

      <section id="hitl">
        <h2>Human-in-the-Loop</h2>
        <p>
          Human-in-the-loop (HITL) support enables workflows to pause for human approval, feedback,
          or intervention at specific points.
        </p>

        <h3>Approval Gates</h3>
        <p>
          Approval steps pause workflow execution and send notifications to designated approvers
          via email or webhook.
        </p>

        <h3>Approval Notifications</h3>
        <p>
          Approvers receive notifications with approval links and context about the pending approval.
        </p>

        <h3>Approval Timeouts</h3>
        <p>
          Configurable timeouts for approvals with automatic escalation if approval is not received.
        </p>

        <h3>Feedback Integration</h3>
        <p>
          Human feedback is integrated into workflow execution, enabling dynamic workflow adaptation.
        </p>
      </section>

      <section id="compensation">
        <h2>Compensation Steps</h2>
        <p>
          Compensation steps provide rollback and compensation logic for failed workflow steps,
          enabling transactional workflow execution.
        </p>

        <h3>Compensation Logic</h3>
        <p>
          Compensation steps are automatically executed when a step fails, undoing changes made
          by previous steps.
        </p>

        <h3>Error Handling</h3>
        <p>
          Failed steps trigger compensation logic, ensuring workflow consistency and data integrity.
        </p>
      </section>

      <section id="scheduling">
        <h2>Workflow Scheduling</h2>
        <p>
          Workflows can be scheduled for future execution using cron-like syntax, enabling
          automated workflow execution.
        </p>

        <h3>Scheduling Syntax</h3>
        <p>
          Workflows support cron-like scheduling syntax for flexible scheduling patterns.
        </p>

        <h3>Execution Monitoring</h3>
        <p>
          Scheduled workflow executions are monitored and logged, providing visibility into
          workflow execution history.
        </p>
      </section>

      <section id="api">
        <h2>API Reference</h2>
        <p>
          The workflow engine is accessible through the NeuronAgent REST API for creating,
          managing, and executing workflows.
        </p>

        <h3>Workflow Endpoints</h3>
        <ul>
          <li><code>POST /api/v1/workflows</code> - Create a workflow</li>
          <li><code>GET /api/v1/workflows</code> - List workflows</li>
          <li><code>GET /api/v1/workflows/:id</code> - Get workflow details</li>
          <li><code>PUT /api/v1/workflows/:id</code> - Update a workflow</li>
          <li><code>DELETE /api/v1/workflows/:id</code> - Delete a workflow</li>
          <li><code>POST /api/v1/workflows/:id/execute</code> - Execute a workflow</li>
          <li><code>GET /api/v1/workflows/:id/executions</code> - List workflow executions</li>
          <li><code>POST /api/v1/workflows/:id/schedule</code> - Schedule a workflow</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
