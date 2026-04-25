import type { Project, ProjectStatus } from '../data/siteContent'

type ProjectCardProps = {
  project: Project
}

const statusClasses: Record<ProjectStatus, string> = {
  shipped: 'border-teal/60 bg-teal-wash text-teal-light',
  'in progress': 'border-amber/60 bg-amber-wash text-amber',
  research: 'border-purple/60 bg-purple-wash text-purple-light',
}

function ProjectCard({ project }: ProjectCardProps) {
  const card = (
    <article className="rounded-lg border border-border bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:bg-elevated">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-body text-[0.95rem] font-medium leading-6 text-text-primary">
          {project.name}
        </h3>
        <span
          className={`shrink-0 rounded-pill border px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.14em] ${statusClasses[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-3 text-[0.82rem] leading-6 text-text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-pill border border-border bg-base/70 px-2.5 py-1 font-mono text-[0.68rem] text-text-muted"
          >
            {item}
          </span>
        ))}
      </div>

      {project.href ? (
        <p className="mt-4 font-mono text-[0.7rem] text-teal-light/70 group-hover:text-teal-light transition-colors duration-200">
          view on github →
        </p>
      ) : null}
    </article>
  )

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.name} on GitHub`}
        className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-base"
      >
        {card}
      </a>
    )
  }

  return card
}

export default ProjectCard
