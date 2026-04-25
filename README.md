# jacksonbeem.com

Personal portfolio site for Jackson Beem — multi-agent systems researcher and cloud infrastructure builder at Oakland University.

**Live site → [jacksonbeem.com](https://jacksonbeem.com)**

---

## What's on the site

| Section | Description |
|---|---|
| **Hero** | Bio, quick-link nav (GitHub, LinkedIn, CV) |
| **Pipeline** | Interactive Planner → Executor → Critic → Verifier diagram from the ASEJ research |
| **Research** | Publications, in-development work, and presentations |
| **Projects** | MCP Benchmarking Platform, FinOps Negotiator, BEEMSEARCH |
| **Stack** | Cloud & DevOps, AI/LLM tooling, infrastructure tech |
| **Contact** | Email + social links |

---

## Tech stack

- **React 19** + **TypeScript**
- **Vite** — build tooling
- **Tailwind CSS** — styling
- **Framer Motion** — animations (respects `prefers-reduced-motion`)
- **GitHub Actions** — CI/CD deploy to GitHub Pages

---

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:5173`.

```bash
npm run build   # production build → dist/
npm run lint    # ESLint check
```

---

## Repo structure

```
src/
├── components/       # One file per section (Hero, Pipeline, Research, Projects, Stack, Contact)
├── data/
│   └── siteContent.ts   # Single source of truth for all copy — edit here
├── lib/
│   ├── constants.ts
│   └── useReducedMotion.ts
└── index.css
```

**All content lives in `src/data/siteContent.ts`.** To update copy, links, projects, or research entries, edit that file — no component changes needed.

---

## Deployment

Pushes to `master` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds and deploys to GitHub Pages automatically.

---

## Related repos

| Repo | What it is |
|---|---|
| [`mcp-benchmark-lambda`](https://github.com/JacksonBeem/mcp-benchmark-lambda) | MCP server benchmarking framework (Lambda vs EC2) — the research backing the portfolio |
| [`SWE-Agentic-Pipeline`](https://github.com/JacksonBeem/SWE-Agentic-Pipeline) | Planner→Executor→Critic→Verifier pipeline implementation |
| [`agentic-research-assistant`](https://github.com/JacksonBeem/agentic-research-assistant) | BEEMSEARCH — nine-agent research system |
| [`lambda-mcp`](https://github.com/JacksonBeem/lambda-mcp) | Serverless MCP server on AWS Lambda |

---

## Contact

**jackson@jacksonbeem.com** · [LinkedIn](https://www.linkedin.com/in/jackson-beem-a39984348/) · [GitHub](https://github.com/JacksonBeem)
