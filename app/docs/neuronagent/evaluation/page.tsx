import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'Quality & Evaluation | Evaluation Framework | NeuronAgent',
  description: 'Comprehensive evaluation framework with quality scoring, performance metrics, verification agents, and automated quality reports for agent performance assessment.',
  keywords: [
    'agent evaluation',
    'quality scoring',
    'evaluation framework',
    'performance metrics',
    'verification agent',
    'quality reports',
    'agent quality',
    'evaluation metrics',
    'quality assessment'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent/evaluation',
  },
  openGraph: {
    title: 'Quality & Evaluation | Evaluation Framework',
    description: 'Comprehensive evaluation framework with quality scoring and performance metrics.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neuronagent/evaluation',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'quality-scoring', title: 'Quality Scoring' },
  { id: 'evaluation-framework', title: 'Evaluation Framework' },
  { id: 'performance-metrics', title: 'Performance Metrics' },
  { id: 'verification', title: 'Verification Agent' },
  { id: 'quality-reports', title: 'Quality Reports' },
  { id: 'api', title: 'API Reference' },
]

const prevLink: NavLink = {
  href: '/docs/neuronagent/planning',
  label: 'Planning & Reflection',
}

const nextLink: NavLink = {
  href: '/docs/neuronagent/budget',
  label: 'Budget & Cost Management',
}

export default function EvaluationPage() {
  return (
    <PostgresDocsLayout
      title="Quality & Evaluation"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          The evaluation framework provides comprehensive quality assessment and performance evaluation
          for agents, enabling continuous improvement and quality assurance.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>Reflections:</strong> Agent self-reflection and quality assessment with LLM-powered analysis</li>
          <li><strong>Quality Scoring:</strong> Automated quality scoring for agent responses using multiple metrics</li>
          <li><strong>Evaluation Framework:</strong> Built-in evaluation system with configurable metrics</li>
          <li><strong>Performance Metrics:</strong> Comprehensive metrics: accuracy, relevance, completeness, latency</li>
          <li><strong>Verification Agent:</strong> Dedicated verification agent for validating and cross-checking outputs</li>
          <li><strong>Execution Snapshots:</strong> Capture and replay agent execution states for debugging</li>
          <li><strong>Quality Reports:</strong> Automated quality reports with trends and recommendations</li>
        </ul>
      </section>

      <section id="quality-scoring">
        <h2>Quality Scoring</h2>
        <p>
          Quality scoring automatically evaluates agent responses using multiple metrics, providing
          comprehensive quality assessment.
        </p>

        <h3>Scoring Metrics</h3>
        <ul>
          <li><strong>Accuracy:</strong> Correctness of agent responses</li>
          <li><strong>Relevance:</strong> Relevance to the query or task</li>
          <li><strong>Completeness:</strong> Completeness of the response</li>
          <li><strong>Coherence:</strong> Logical coherence and consistency</li>
          <li><strong>Latency:</strong> Response time and efficiency</li>
        </ul>

        <h3>Scoring Methods</h3>
        <p>
          Quality scoring uses LLM-based evaluation, rule-based metrics, and human feedback to
          provide comprehensive quality assessment.
        </p>
      </section>

      <section id="evaluation-framework">
        <h2>Evaluation Framework</h2>
        <p>
          The evaluation framework provides a structured approach to evaluating agent performance
          with configurable metrics and evaluation criteria.
        </p>

        <h3>Evaluation Types</h3>
        <ul>
          <li><strong>Automated Evaluation:</strong> LLM and rule-based automated evaluation</li>
          <li><strong>Human Evaluation:</strong> Human-in-the-loop evaluation with feedback</li>
          <li><strong>Comparative Evaluation:</strong> Compare multiple agents or versions</li>
        </ul>

        <h3>Configurable Metrics</h3>
        <p>
          Evaluation metrics can be configured per use case, enabling domain-specific evaluation
          criteria.
        </p>
      </section>

      <section id="performance-metrics">
        <h2>Performance Metrics</h2>
        <p>
          Comprehensive performance metrics provide detailed insights into agent performance across
          multiple dimensions.
        </p>

        <h3>Metric Categories</h3>
        <ul>
          <li><strong>Quality Metrics:</strong> Accuracy, relevance, completeness</li>
          <li><strong>Efficiency Metrics:</strong> Latency, throughput, resource usage</li>
          <li><strong>Reliability Metrics:</strong> Error rates, success rates, consistency</li>
          <li><strong>Cost Metrics:</strong> Token usage, API costs, resource costs</li>
        </ul>

        <h3>Metric Aggregation</h3>
        <p>
          Metrics are aggregated across sessions, agents, and time periods, providing comprehensive
          performance insights.
        </p>
      </section>

      <section id="verification">
        <h2>Verification Agent</h2>
        <p>
          The verification agent provides dedicated validation and cross-checking of agent outputs,
          ensuring quality and correctness.
        </p>

        <h3>Verification Process</h3>
        <p>
          The verification agent analyzes agent outputs, checks for correctness, completeness, and
          consistency, and provides feedback for improvement.
        </p>

        <h3>Cross-Checking</h3>
        <p>
          Multiple verification agents can cross-check outputs, providing consensus-based validation.
        </p>
      </section>

      <section id="quality-reports">
        <h2>Quality Reports</h2>
        <p>
          Automated quality reports provide trends, insights, and recommendations for improving
          agent performance.
        </p>

        <h3>Report Types</h3>
        <ul>
          <li><strong>Performance Reports:</strong> Overall performance trends and metrics</li>
          <li><strong>Quality Trends:</strong> Quality score trends over time</li>
          <li><strong>Recommendation Reports:</strong> Actionable recommendations for improvement</li>
        </ul>

        <h3>Report Generation</h3>
        <p>
          Reports are automatically generated on a schedule or on-demand, providing continuous
          visibility into agent performance.
        </p>
      </section>

      <section id="api">
        <h2>API Reference</h2>
        <p>
          The evaluation framework is accessible through the NeuronAgent REST API for running
          evaluations and viewing results.
        </p>

        <h3>Evaluation Endpoints</h3>
        <ul>
          <li><code>POST /api/v1/evaluations</code> - Run an evaluation</li>
          <li><code>GET /api/v1/evaluations</code> - List evaluations</li>
          <li><code>GET /api/v1/evaluations/:id</code> - Get evaluation results</li>
          <li><code>GET /api/v1/agents/:id/quality</code> - Get agent quality metrics</li>
          <li><code>POST /api/v1/agents/:id/reflect</code> - Trigger agent reflection</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
