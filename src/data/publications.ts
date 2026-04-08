export type ResearchItem = {
  id: string
  type: 'publication' | 'presentation'
  section: string
  title: string
  venue: string
  detail: string
}

export const researchItems: ResearchItem[] = [

  {
  id: 'paper-1',
  type: 'publication',
  section: '\u00a7 1',
  title: 'Who Broke the Pipeline? Traceability and Accountability in Multi-Agent LLM Software Engineering Pipelines',
  venue: 'Journal submission \u00b7 ASEJ / Springer \u00b7 2026 (under review)',
  detail:
    'A multi-agent pipeline for code generation featuring Planner\u2192Executor\u2192Critic\u2192Verifier stages with iterative Critic\u2192Executor repair loops and execution gating.',
},
  {
    id: 'presentation-1',
    type: 'presentation',
    section: '\u00a7 3',
    title: 'MCP and Infrastructure as Code',
    venue: 'Guest lecture \u00b7 Oakland University \u00b7 2026',
    detail:
      'Presented on Model Context Protocol architecture and Infrastructure as Code deployment for agentic AI systems.',
  },
]
