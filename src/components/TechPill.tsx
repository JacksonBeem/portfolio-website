import type { AccentTone } from '../data/siteContent'

type TechPillProps = {
  tone: AccentTone
  children: string
  className?: string
}

const toneClasses: Record<AccentTone, string> = {
  teal: 'border-teal/60 bg-teal-wash text-teal-light',
  purple: 'border-purple/70 bg-purple-wash text-purple-light',
  amber: 'border-amber/70 bg-amber-wash text-amber',
  red: 'border-red/70 bg-red-wash text-red',
}

function TechPill({ tone, children, className = '' }: TechPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill border px-3 py-1 font-mono text-[0.72rem] tracking-[0.03em] ${toneClasses[tone]} ${className}`.trim()}
    >
      {children}
    </span>
  )
}

export default TechPill
