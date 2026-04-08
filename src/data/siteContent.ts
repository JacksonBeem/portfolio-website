// Edit portfolio copy in this file.
export type AccentTone = 'teal' | 'purple' | 'amber' | 'red'

export type ProfileLink = {
  label: string
  href: string
  ariaLabel: string
  external: boolean
}

export type PipelineAgent = {
  id: 'planner' | 'executor' | 'critic' | 'verifier'
  label: string
  title: string
  accent: AccentTone
  role: string
  model: string
  example: string
}

export type ResearchItem = {
  id: string
  type: 'publication' | 'presentation' | 'in-development'
  section: string
  title: string
  venue: string
  detail: string
}

export type ProjectStatus = 'shipped' | 'in progress' | 'research'

export type Project = {
  id: string
  name: string
  description: string
  stack: string[]
  status: ProjectStatus
}

export type StackGroup = {
  category: string
  items: string[]
}

type SiteContent = {
  hero: {
    sectionLabel: string
    annotation: string
    name: string
    taglines: string[]
    pills: Array<{ label: string; tone: AccentTone }>
    scrollLabel: string
    links: ProfileLink[]
  }
  pipeline: {
    sectionLabel: string
    heading: string
    instruction: string
    detailLabel: string
    modelLabel: string
    exampleLabel: string
    agents: PipelineAgent[]
    summary: string
  }
  research: {
    sectionLabel: string
    heading: string
    publicationsLabel: string
    inDevelopmentLabel: string
    presentationsLabel: string
    items: ResearchItem[]
  }
  projects: {
    sectionLabel: string
    heading: string
    intro: string
    items: Project[]
  }
  stack: {
    sectionLabel: string
    heading: string
    groups: StackGroup[]
  }
  contact: {
    sectionLabel: string
    heading: string
    email: string
    links: ProfileLink[]
    signoff: string
    footer: string
  }
}

export const siteContent: SiteContent = {
  hero: {
    sectionLabel: 'hero',
    annotation: '// bio.init()',
    name: 'Jackson Beem',
    taglines: [
      'Multi-agent systems researcher.',
      'Cloud infrastructure builder.',
      'Senior @ Oakland University.',
    ],
    pills: [
      { label: 'AWS', tone: 'teal' },
      { label: 'LLM pipelines', tone: 'purple' },
      { label: 'Python', tone: 'amber' },
      { label: 'Cloud / FinOps', tone: 'teal' },
    ],
    scrollLabel: 'scroll',
    links: [
      {
        label: 'GH',
        href: 'https://github.com/JacksonBeem',
        ariaLabel: 'Open Jackson Beem GitHub profile',
        external: true,
      },
      {
        label: 'LI',
        href: 'https://www.linkedin.com/in/jackson-beem-a39984348/',
        ariaLabel: 'Open Jackson Beem LinkedIn profile',
        external: true,
      },
      {
        label: 'CV',
        href: `${import.meta.env.BASE_URL}resume.pdf`,
        ariaLabel: 'Open Jackson Beem curriculum vitae',
        external: false,
      },
    ],
  },
  pipeline: {
    sectionLabel: 'pipeline',
    heading: 'The pipeline behind my research: A system that debugs itself',
    instruction:
      'hover, focus, or click a node to inspect what each role is responsible for.',
    detailLabel: 'selected agent',
    modelLabel: 'model mapping',
    exampleLabel: 'example',
    agents: [
      {
        id: 'planner',
        label: 'Planner',
        title: 'Plan',
        accent: 'purple',
        role: 'Decomposes complex coding tasks into structured execution plans.',
        model: 'Gemini',
        example:
          'Breaks benchmark prompts into ordered implementation phases before any code is generated, giving the rest of the pipeline a shared execution blueprint.',
      },
      {
        id: 'executor',
        label: 'Executor',
        title: 'Execute',
        accent: 'teal',
        role: "Generates code implementations following the Planner's specifications.",
        model: 'Claude Sonnet',
        example:
          'Turns planner guidance into concrete benchmark solutions and infrastructure prototypes while preserving the intended architecture and constraints.',
      },
      {
        id: 'critic',
        label: 'Critic',
        title: 'Critique',
        accent: 'amber',
        role: 'Reviews generated code for correctness, edge cases, and improvements.',
        model: 'GPT',
        example:
          'Surfaces edge-case risks, style issues, and revision opportunities that explain why some pipelines improve harder benchmarks while still risking false-fail behavior.',
      },
      {
        id: 'verifier',
        label: 'Verifier',
        title: 'Verify',
        accent: 'red',
        role: 'Runs test suites and validates functional correctness of the final output.',
        model: 'Gemini',
        example:
          'Executes benchmark tests to confirm final candidates, revealing where verifier support helps recover quality on MBPP and BigCodeBench.',
      },
    ],
    summary:
      'A lot of my recent work has gone into multi-agent code generation pipelines. This setup separates planning, implementation, critique, and verification so I can study how specialization changes quality, failure modes, and reliability across benchmarks. It is one example of the kind of systems work I care about, not the only thing I do.',
  },
  research: {
    sectionLabel: 'research',
    heading: 'Research and presentations',
    publicationsLabel: 'Publications',
    inDevelopmentLabel: 'In development',
    presentationsLabel: 'Presentations',
    items: [
      {
        id: 'paper-1',
        type: 'publication',
        section: '\u00a7 1',
        title:
          'Who Broke the Pipeline? Traceability and Accountability in Multi-Agent LLM Software Engineering Pipelines',
        venue: 'Journal submission \u00b7 ASEJ / Springer \u00b7 2026 (under review)',
        detail:
          'A multi-agent pipeline for code generation featuring Planner\u2192Executor\u2192Critic\u2192Verifier stages with iterative Executor\u2192Verifier repair loops and execution gating.',
      },
      {
        id: 'research-mcp',
        type: 'in-development',
        section: '\u00a7 2',
        title: 'Evaluating MCP Tool Servers Across Cloud Infrastructure Substrates',
        venue: 'In development \u00b7 2026',
        detail:
          'Benchmarking Model Context Protocol tool servers on serverless (AWS Lambda) vs. traditional (EC2) architectures. Built a serverless MCP API using Lambda, API Gateway, and Python exposing tools to LLM agents via JSON-RPC. Implemented secure tool execution with modular service handlers and deployed via AWS SAM infrastructure-as-code.',
      },
      {
        id: 'presentation-1',
        type: 'presentation',
        section: '\u00a7 3',
        title: 'MCP and Inversion of Control',
        venue: 'Guest lecture \u00b7 Oakland University \u00b7 2026',
        detail:
          'Presented on Model Context Protocol architecture and Inversion of Control patterns for agentic AI systems.',
      },
    ],
  },
  projects: {
    sectionLabel: 'projects',
    heading: 'Work that turns research into systems',
    intro:
      'A mix of shipped infrastructure, active prototypes, and research-stage agents built around deployment, evaluation, and autonomy.',
    items: [
      {
        id: 'mcp-benchmarking-platform',
        name: 'MCP Benchmarking Platform',
        description:
          'Lambda vs EC2 as MCP server hosting substrates across workload tiers.',
        stack: ['AWS SAM', 'Lambda', 'API Gateway', 'Python', 'k-means'],
        status: 'shipped',
      },
      
      {
        id: 'finops-negotiator',
        name: 'Multi-Agent FinOps Negotiator',
        description:
          'Autonomous cost-optimization agents for AWS infrastructure.',
        stack: ['Multi-agent', 'AWS Budgets', 'Python'],
        status: 'research',
      },
      {
        id: 'beemsearch',
        name: 'BEEMSEARCH',
        description:
          'Nine-agent system for tech research across discovery, analysis, and output layers.',
        stack: ['LangGraph', 'Python', 'Multi-agent'],
        status: 'research',
      },
    ],
  },
  stack: {
    sectionLabel: 'stack',
    heading: 'My Stack',
    groups: [
      {
        category: 'Cloud & DevOps',
        items: [
          'AWS (IAM, S3, Lambda, API Gateway, CloudFront)',
          'Terraform',
          'Ansible',
          'GitHub Actions',
          'Docker',
          'Git',
          'Serverless Architecture',
        ],
      },
      {
        category: 'Programming, APIs & AI Systems',
        items: [
          'Python',
          'Java',
          'REST APIs',
          'JSON-RPC',
          'LLM APIs',
          'Multi-Agent Systems',
          'Prompt Engineering',
          'Workflow Orchestration',
          'OpenRouter',
        ],
      },
      {
        category: 'Infrastructure, Data & Automation',
        items: [
          'Linux',
          'Networking',
          'Virtualization',
          'MySQL',
          'PostgreSQL',
          'Experiment Automation',
          'Benchmarking Frameworks',
        ],
      },
    ],
  },
  contact: {
    sectionLabel: 'contact',
    heading: "Let's build the next system",
    email: 'jackson@jacksonbeem.com',
    links: [
      {
        label: 'GH',
        href: 'https://github.com/JacksonBeem',
        ariaLabel: 'Open Jackson Beem GitHub profile',
        external: true,
      },
      {
        label: 'LI',
        href: 'https://www.linkedin.com/in/jackson-beem-a39984348/',
        ariaLabel: 'Open Jackson Beem LinkedIn profile',
        external: true,
      },
    ],
    signoff: 'pipeline.terminate() // thanks for visiting',
    footer: 'Built with React \u00b7 Deployed on GitHub Pages',
  },
}
