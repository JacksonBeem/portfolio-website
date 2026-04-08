import type { ResearchItem } from '../data/siteContent'

type PublicationCardProps = {
  item: ResearchItem
}

const styleMap: Record<ResearchItem['type'], string> = {
  publication: 'border-l-[2px] border-l-purple',
  'in-development': 'border-l-[2px] border-l-amber',
  presentation: 'border-l-[2px] border-l-teal',
}

const sectionToneMap: Record<ResearchItem['type'], string> = {
  publication: 'text-purple-light',
  'in-development': 'text-amber',
  presentation: 'text-teal-light',
}

function PublicationCard({ item }: PublicationCardProps) {
  return (
    <article
      className={`rounded-lg border border-border bg-surface/90 px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:bg-elevated ${styleMap[item.type]}`}
    >
      <p className={`font-mono text-xs tracking-[0.18em] ${sectionToneMap[item.type]}`}>
        {item.section}
      </p>
      <h3 className="mt-3 font-body text-[1rem] font-medium leading-6 text-text-primary">
        {item.title}
      </h3>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <p className="text-[0.82rem] leading-6 text-text-muted">{item.venue}</p>
        {item.type === 'in-development' ? (
          <span className="rounded-pill border border-amber/60 bg-amber-wash px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.14em] text-amber">
            in development
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-[0.82rem] leading-6 text-text-muted">{item.detail}</p>
    </article>
  )
}

export default PublicationCard
