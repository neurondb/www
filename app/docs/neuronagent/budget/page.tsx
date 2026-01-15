import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'Budget & Cost Management | Cost Tracking & Budget Controls | NeuronAgent',
  description: 'Real-time cost tracking, per-agent and per-session budget controls, budget alerts, cost analytics, and cost optimization for LLM usage.',
  keywords: [
    'cost tracking',
    'budget management',
    'token counting',
    'cost analytics',
    'budget alerts',
    'cost forecasting',
    'cost optimization',
    'LLM costs',
    'API costs'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent/budget',
  },
  openGraph: {
    title: 'Budget & Cost Management | Cost Tracking & Budget Controls',
    description: 'Real-time cost tracking with per-agent and per-session budget controls.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neuronagent/budget',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'cost-tracking', title: 'Cost Tracking' },
  { id: 'token-counting', title: 'Token Counting' },
  { id: 'budget-management', title: 'Budget Management' },
  { id: 'cost-analytics', title: 'Cost Analytics' },
  { id: 'budget-alerts', title: 'Budget Alerts' },
  { id: 'cost-optimization', title: 'Cost Optimization' },
  { id: 'api', title: 'API Reference' },
]

const prevLink: NavLink = {
  href: '/docs/neuronagent/evaluation',
  label: 'Quality & Evaluation',
}

const nextLink: NavLink = {
  href: '/docs/neuronagent/features',
  label: 'All Features',
}

export default function BudgetPage() {
  return (
    <PostgresDocsLayout
      title="Budget & Cost Management"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          The budget and cost management system provides comprehensive cost tracking, budget controls,
          and cost optimization for LLM usage and agent operations.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>Cost Tracking:</strong> Real-time cost tracking for LLM usage with per-request, per-session, and per-agent aggregation</li>
          <li><strong>Token Counting:</strong> Accurate token counting for input/output with model-specific tokenizers</li>
          <li><strong>Cost Analytics:</strong> Detailed cost analytics with breakdowns by agent, session, model, and time period</li>
          <li><strong>Budget Management:</strong> Per-agent and per-session budget controls with hard and soft limits</li>
          <li><strong>Budget Alerts:</strong> Configurable alerts for budget thresholds via email and webhooks</li>
          <li><strong>Cost Forecasting:</strong> Predictive cost forecasting based on usage patterns</li>
          <li><strong>Cost Optimization:</strong> Recommendations for cost optimization based on usage patterns</li>
        </ul>
      </section>

      <section id="cost-tracking">
        <h2>Cost Tracking</h2>
        <p>
          Real-time cost tracking monitors LLM usage and calculates costs based on token usage and
          model pricing.
        </p>

        <h3>Cost Aggregation</h3>
        <ul>
          <li><strong>Per-Request:</strong> Cost per individual request</li>
          <li><strong>Per-Session:</strong> Total cost per agent session</li>
          <li><strong>Per-Agent:</strong> Total cost per agent across all sessions</li>
          <li><strong>Per-Model:</strong> Cost breakdown by LLM model</li>
          <li><strong>Time-Based:</strong> Cost aggregation by time period (hourly, daily, monthly)</li>
        </ul>

        <h3>Cost Calculation</h3>
        <p>
          Costs are calculated using model-specific pricing, token counts, and usage patterns,
          providing accurate cost tracking.
        </p>
      </section>

      <section id="token-counting">
        <h2>Token Counting</h2>
        <p>
          Accurate token counting uses model-specific tokenizers to count input and output tokens,
          enabling precise cost calculation.
        </p>

        <h3>Tokenizer Support</h3>
        <p>
          Token counting supports multiple tokenizers for different models, ensuring accurate
          token counts across all supported LLMs.
        </p>

        <h3>Token Tracking</h3>
        <p>
          Token usage is tracked for both input and output, providing detailed insights into
          token consumption patterns.
        </p>
      </section>

      <section id="budget-management">
        <h2>Budget Management</h2>
        <p>
          Budget management provides per-agent and per-session budget controls with hard and soft
          limits for cost control.
        </p>

        <h3>Budget Types</h3>
        <ul>
          <li><strong>Hard Limits:</strong> Strict budget limits that prevent further spending</li>
          <li><strong>Soft Limits:</strong> Warning thresholds that trigger alerts but allow continued spending</li>
          <li><strong>Per-Agent Budgets:</strong> Budget limits for individual agents</li>
          <li><strong>Per-Session Budgets:</strong> Budget limits for individual sessions</li>
        </ul>

        <h3>Budget Enforcement</h3>
        <p>
          Budget limits are enforced at runtime, preventing agents from exceeding allocated budgets.
        </p>
      </section>

      <section id="cost-analytics">
        <h2>Cost Analytics</h2>
        <p>
          Cost analytics provide detailed insights into cost patterns, enabling informed decisions
          about cost optimization.
        </p>

        <h3>Analytics Dimensions</h3>
        <ul>
          <li><strong>By Agent:</strong> Cost breakdown by agent</li>
          <li><strong>By Session:</strong> Cost breakdown by session</li>
          <li><strong>By Model:</strong> Cost breakdown by LLM model</li>
          <li><strong>By Time Period:</strong> Cost trends over time</li>
          <li><strong>By Operation Type:</strong> Cost breakdown by operation type</li>
        </ul>

        <h3>Analytics Reports</h3>
        <p>
          Analytics reports provide visualizations and insights into cost patterns, trends, and
          optimization opportunities.
        </p>
      </section>

      <section id="budget-alerts">
        <h2>Budget Alerts</h2>
        <p>
          Budget alerts notify users when budget thresholds are reached, enabling proactive
          cost management.
        </p>

        <h3>Alert Types</h3>
        <ul>
          <li><strong>Threshold Alerts:</strong> Alerts when budget thresholds are reached</li>
          <li><strong>Projection Alerts:</strong> Alerts based on projected spending</li>
          <li><strong>Anomaly Alerts:</strong> Alerts for unusual spending patterns</li>
        </ul>

        <h3>Notification Channels</h3>
        <p>
          Alerts are sent via email and webhooks, enabling integration with external notification
          systems.
        </p>
      </section>

      <section id="cost-optimization">
        <h2>Cost Optimization</h2>
        <p>
          Cost optimization provides recommendations for reducing costs based on usage patterns
          and best practices.
        </p>

        <h3>Optimization Strategies</h3>
        <ul>
          <li><strong>Model Selection:</strong> Recommendations for more cost-effective models</li>
          <li><strong>Token Optimization:</strong> Suggestions for reducing token usage</li>
          <li><strong>Batch Processing:</strong> Recommendations for batch operations</li>
          <li><strong>Caching:</strong> Suggestions for caching frequently used results</li>
        </ul>

        <h3>Optimization Reports</h3>
        <p>
          Optimization reports provide actionable recommendations with estimated cost savings.
        </p>
      </section>

      <section id="api">
        <h2>API Reference</h2>
        <p>
          Budget and cost management is accessible through the NeuronAgent REST API for managing
          budgets and viewing cost analytics.
        </p>

        <h3>Budget Endpoints</h3>
        <ul>
          <li><code>GET /api/v1/costs</code> - Get cost analytics</li>
          <li><code>GET /api/v1/budgets</code> - List budgets</li>
          <li><code>POST /api/v1/budgets</code> - Create a budget</li>
          <li><code>PUT /api/v1/budgets/:id</code> - Update a budget</li>
          <li><code>GET /api/v1/agents/:id/costs</code> - Get agent costs</li>
          <li><code>GET /api/v1/sessions/:id/costs</code> - Get session costs</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
