import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'Planning & Reflection | LLM-Based Planning | NeuronAgent',
  description: 'LLM-based planning with task decomposition, plan templates, async tasks, and agent self-reflection for intelligent task planning and execution.',
  keywords: [
    'agent planning',
    'task decomposition',
    'LLM planning',
    'plan templates',
    'task prioritization',
    'agent reflection',
    'self-reflection',
    'plan execution',
    'async tasks'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent/planning',
  },
  openGraph: {
    title: 'Planning & Reflection | LLM-Based Planning',
    description: 'LLM-based planning with task decomposition and agent self-reflection.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neuronagent/planning',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'llm-planning', title: 'LLM-Based Planning' },
  { id: 'task-decomposition', title: 'Task Decomposition' },
  { id: 'plan-templates', title: 'Plan Templates' },
  { id: 'async-tasks', title: 'Async Tasks' },
  { id: 'reflection', title: 'Agent Reflection' },
  { id: 'api', title: 'API Reference' },
]

const prevLink: NavLink = {
  href: '/docs/neuronagent/workflow',
  label: 'Workflow Engine',
}

const nextLink: NavLink = {
  href: '/docs/neuronagent/evaluation',
  label: 'Quality & Evaluation',
}

export default function PlanningPage() {
  return (
    <PostgresDocsLayout
      title="Planning & Reflection"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          The planning and reflection system enables agents to create intelligent plans for complex tasks,
          decompose them into manageable sub-tasks, and reflect on their execution to improve future performance.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>LLM-Based Planning:</strong> Advanced planning with LLM-powered task decomposition</li>
          <li><strong>Task Decomposition:</strong> Automatic breakdown of complex tasks into manageable sub-tasks</li>
          <li><strong>Task Plans:</strong> Multi-step plan creation, validation, and execution</li>
          <li><strong>Plan Templates:</strong> Reusable plan templates for common task patterns</li>
          <li><strong>Async Tasks:</strong> Background task execution with PostgreSQL-based job queue</li>
          <li><strong>Task Prioritization:</strong> Priority-based task scheduling and execution</li>
          <li><strong>Agent Reflection:</strong> Agent self-reflection and quality assessment</li>
        </ul>
      </section>

      <section id="llm-planning">
        <h2>LLM-Based Planning</h2>
        <p>
          LLM-based planning uses large language models to generate intelligent plans for complex tasks,
          taking into account context, constraints, and available resources.
        </p>

        <h3>Planning Process</h3>
        <p>
          The planning process involves analyzing the task, identifying required steps, determining
          dependencies, and creating an executable plan.
        </p>

        <h3>Plan Validation</h3>
        <p>
          Generated plans are validated for feasibility, completeness, and correctness before execution.
        </p>
      </section>

      <section id="task-decomposition">
        <h2>Task Decomposition</h2>
        <p>
          Complex tasks are automatically decomposed into manageable sub-tasks with clear dependencies
          and execution order.
        </p>

        <h3>Decomposition Strategies</h3>
        <ul>
          <li><strong>Hierarchical Decomposition:</strong> Break tasks into hierarchical sub-tasks</li>
          <li><strong>Sequential Decomposition:</strong> Decompose into sequential steps</li>
          <li><strong>Parallel Decomposition:</strong> Identify parallelizable sub-tasks</li>
        </ul>

        <h3>Dependency Tracking</h3>
        <p>
          Task dependencies are automatically identified and tracked, ensuring correct execution order.
        </p>
      </section>

      <section id="plan-templates">
        <h2>Plan Templates</h2>
        <p>
          Plan templates provide reusable patterns for common task types, enabling faster plan creation
          and consistency across similar tasks.
        </p>

        <h3>Template Types</h3>
        <ul>
          <li><strong>Domain Templates:</strong> Templates for specific domains (e.g., data analysis, content creation)</li>
          <li><strong>Pattern Templates:</strong> Templates for common patterns (e.g., ETL, API integration)</li>
          <li><strong>Custom Templates:</strong> User-defined templates for specific use cases</li>
        </ul>

        <h3>Template Customization</h3>
        <p>
          Templates can be customized with parameters, enabling flexible plan generation while maintaining
          structure and best practices.
        </p>
      </section>

      <section id="async-tasks">
        <h2>Async Tasks</h2>
        <p>
          Async tasks enable background execution of long-running operations, improving agent responsiveness
          and enabling parallel task execution.
        </p>

        <h3>Task Queue</h3>
        <p>
          Tasks are queued in PostgreSQL using SKIP LOCKED for efficient concurrent processing.
        </p>

        <h3>Task Monitoring</h3>
        <p>
          Async tasks are monitored for status, progress, and completion, with notifications for
          task events.
        </p>
      </section>

      <section id="reflection">
        <h2>Agent Reflection</h2>
        <p>
          Agent reflection enables agents to analyze their own performance, identify areas for improvement,
          and adapt their behavior based on past experiences.
        </p>

        <h3>Reflection Process</h3>
        <p>
          Agents reflect on their execution by analyzing outcomes, identifying successes and failures,
          and generating insights for future improvements.
        </p>

        <h3>Quality Assessment</h3>
        <p>
          Reflection includes quality assessment using multiple metrics, providing comprehensive
          performance evaluation.
        </p>
      </section>

      <section id="api">
        <h2>API Reference</h2>
        <p>
          Planning and reflection are accessible through the NeuronAgent REST API for creating,
          managing, and executing plans.
        </p>

        <h3>Planning Endpoints</h3>
        <ul>
          <li><code>POST /api/v1/plans</code> - Create a plan</li>
          <li><code>GET /api/v1/plans</code> - List plans</li>
          <li><code>POST /api/v1/plans/:id/execute</code> - Execute a plan</li>
          <li><code>POST /api/v1/plans/:id/reflect</code> - Trigger agent reflection</li>
          <li><code>GET /api/v1/tasks</code> - List tasks</li>
          <li><code>POST /api/v1/tasks</code> - Create an async task</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
