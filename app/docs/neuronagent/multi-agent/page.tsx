import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'Multi-Agent Collaboration | Agent Delegation & Communication | NeuronAgent',
  description: 'Multi-agent collaboration system with agent delegation, inter-agent communication, workspace management, and task coordination for complex multi-agent workflows.',
  keywords: [
    'multi-agent',
    'agent collaboration',
    'agent delegation',
    'inter-agent communication',
    'workspace management',
    'task coordination',
    'sub-agents',
    'agent discovery',
    'shared context'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent/multi-agent',
  },
  openGraph: {
    title: 'Multi-Agent Collaboration | Agent Delegation & Communication',
    description: 'Multi-agent collaboration with delegation, communication, and workspace management.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neuronagent/multi-agent',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'agent-delegation', title: 'Agent Delegation' },
  { id: 'communication', title: 'Inter-Agent Communication' },
  { id: 'workspaces', title: 'Workspace Management' },
  { id: 'sub-agents', title: 'Sub-Agents' },
  { id: 'task-coordination', title: 'Task Coordination' },
  { id: 'api', title: 'API Reference' },
]

const prevLink: NavLink = {
  href: '/docs/neuronagent/tools',
  label: 'Tool System',
}

const nextLink: NavLink = {
  href: '/docs/neuronagent/workflow',
  label: 'Workflow Engine',
}

export default function MultiAgentPage() {
  return (
    <PostgresDocsLayout
      title="Multi-Agent Collaboration"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          NeuronAgent supports multi-agent collaboration, enabling agents to work together on complex tasks
          through delegation, communication, and shared workspaces. This system allows for hierarchical
          agent structures and coordinated task execution.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>Agent Delegation:</strong> Delegate tasks to specialized agents with automatic routing</li>
          <li><strong>Inter-Agent Communication:</strong> Message passing between agents with structured protocols</li>
          <li><strong>Workspace Management:</strong> Shared workspaces for collaborative agents with isolation and permissions</li>
          <li><strong>Sub-Agents:</strong> Hierarchical agent structures for complex multi-level task decomposition</li>
          <li><strong>Task Coordination:</strong> Coordinate parallel and sequential task execution across agents</li>
          <li><strong>Agent Discovery:</strong> Discover and select appropriate agents for task delegation</li>
          <li><strong>Shared Context:</strong> Shared context and state management across collaborating agents</li>
        </ul>
      </section>

      <section id="agent-delegation">
        <h2>Agent Delegation</h2>
        <p>
          Agents can delegate tasks to other specialized agents based on capabilities, workload, and
          availability. The system automatically routes tasks to the most appropriate agent.
        </p>

        <h3>Delegation Strategies</h3>
        <ul>
          <li><strong>Capability-Based:</strong> Delegate based on agent capabilities and expertise</li>
          <li><strong>Load Balancing:</strong> Distribute tasks based on agent workload</li>
          <li><strong>Availability:</strong> Route to available agents with appropriate capacity</li>
          <li><strong>Specialization:</strong> Delegate to agents specialized in specific domains</li>
        </ul>

        <h3>Delegation Protocol</h3>
        <p>
          Delegation uses a structured protocol that includes task description, requirements, context,
          and expected outcomes. Delegated agents can return results, request clarification, or further
          delegate subtasks.
        </p>
      </section>

      <section id="communication">
        <h2>Inter-Agent Communication</h2>
        <p>
          Agents communicate through structured message passing protocols, enabling coordination and
          information sharing across agent boundaries.
        </p>

        <h3>Message Types</h3>
        <ul>
          <li><strong>Task Requests:</strong> Request another agent to perform a task</li>
          <li><strong>Task Results:</strong> Return results from delegated tasks</li>
          <li><strong>Status Updates:</strong> Share status and progress information</li>
          <li><strong>Coordination Messages:</strong> Coordinate multi-agent workflows</li>
        </ul>

        <h3>Communication Channels</h3>
        <p>
          Agents can communicate through direct messaging, shared workspaces, or event streams,
          providing flexibility in communication patterns.
        </p>
      </section>

      <section id="workspaces">
        <h2>Workspace Management</h2>
        <p>
          Shared workspaces provide isolated environments for collaborative agents, with fine-grained
          permissions and resource management.
        </p>

        <h3>Workspace Features</h3>
        <ul>
          <li><strong>Isolation:</strong> Workspaces provide isolation between different agent groups</li>
          <li><strong>Permissions:</strong> Fine-grained permissions for workspace access and operations</li>
          <li><strong>Resource Sharing:</strong> Shared resources and context within workspaces</li>
          <li><strong>Collaboration Tools:</strong> Tools for coordination and collaboration</li>
        </ul>

        <h3>Workspace Types</h3>
        <ul>
          <li><strong>Project Workspaces:</strong> Long-term workspaces for ongoing projects</li>
          <li><strong>Task Workspaces:</strong> Temporary workspaces for specific tasks</li>
          <li><strong>Shared Workspaces:</strong> Workspaces shared across multiple agent groups</li>
        </ul>
      </section>

      <section id="sub-agents">
        <h2>Sub-Agents</h2>
        <p>
          Hierarchical agent structures enable complex multi-level task decomposition, where agents
          can create and manage sub-agents for specialized subtasks.
        </p>

        <h3>Hierarchical Structure</h3>
        <p>
          Agents can create sub-agents with specific capabilities and configurations, forming
          hierarchical structures that mirror task decomposition.
        </p>

        <h3>Sub-Agent Management</h3>
        <ul>
          <li><strong>Creation:</strong> Create sub-agents with specific configurations</li>
          <li><strong>Lifecycle:</strong> Manage sub-agent lifecycle and termination</li>
          <li><strong>Monitoring:</strong> Monitor sub-agent status and progress</li>
          <li><strong>Coordination:</strong> Coordinate sub-agent activities</li>
        </ul>
      </section>

      <section id="task-coordination">
        <h2>Task Coordination</h2>
        <p>
          Task coordination enables parallel and sequential task execution across multiple agents,
          with dependency management and result aggregation.
        </p>

        <h3>Coordination Patterns</h3>
        <ul>
          <li><strong>Parallel Execution:</strong> Execute independent tasks in parallel</li>
          <li><strong>Sequential Execution:</strong> Execute tasks in sequence with dependencies</li>
          <li><strong>Pipeline Execution:</strong> Execute tasks in pipeline with data flow</li>
          <li><strong>Result Aggregation:</strong> Aggregate results from multiple agents</li>
        </ul>

        <h3>Dependency Management</h3>
        <p>
          The system automatically manages task dependencies, ensuring that prerequisite tasks
          complete before dependent tasks begin.
        </p>
      </section>

      <section id="api">
        <h2>API Reference</h2>
        <p>
          Multi-agent collaboration is accessible through the NeuronAgent REST API for managing
          collaborations, workspaces, and delegations.
        </p>

        <h3>Collaboration Endpoints</h3>
        <ul>
          <li><code>POST /api/v1/collaborations</code> - Create a collaboration</li>
          <li><code>GET /api/v1/collaborations</code> - List collaborations</li>
          <li><code>POST /api/v1/collaborations/:id/delegate</code> - Delegate a task</li>
          <li><code>POST /api/v1/workspaces</code> - Create a workspace</li>
          <li><code>GET /api/v1/workspaces</code> - List workspaces</li>
          <li><code>POST /api/v1/agents/:id/sub-agents</code> - Create a sub-agent</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
