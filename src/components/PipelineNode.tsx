import { motion } from 'framer-motion'

import type { PipelineAgent } from '../data/siteContent'
import { MOTION_EASE } from '../lib/constants'

type PipelineNodeProps = {
  agent: PipelineAgent
  isActive: boolean
  onActivate: (id: PipelineAgent['id']) => void
  reducedMotion: boolean
}

const accentClasses: Record<PipelineAgent['accent'], string> = {
  purple:
    'border-purple/80 bg-purple-wash text-purple-light shadow-[0_0_0_1px_rgba(83,74,183,0.2)]',
  teal: 'border-teal/80 bg-teal-wash text-teal-light shadow-[0_0_0_1px_rgba(29,158,117,0.2)]',
  amber:
    'border-amber/80 bg-amber-wash text-amber shadow-[0_0_0_1px_rgba(239,159,39,0.2)]',
  red: 'border-red/80 bg-red-wash text-red shadow-[0_0_0_1px_rgba(226,75,74,0.2)]',
}

function PipelineNode({
  agent,
  isActive,
  onActivate,
  reducedMotion,
}: PipelineNodeProps) {
  return (
    <motion.button
      type="button"
      tabIndex={0}
      aria-pressed={isActive}
      aria-label={`${agent.title} agent, ${agent.model}`}
      onMouseEnter={() => onActivate(agent.id)}
      onFocus={() => onActivate(agent.id)}
      onClick={() => onActivate(agent.id)}
      whileHover={reducedMotion ? undefined : { y: -2 }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { duration: 0.2, ease: MOTION_EASE }
      }
      className={`group flex min-h-[8.5rem] w-full min-w-0 flex-col justify-between rounded-lg border px-4 py-4 text-left transition-colors duration-200 focus-visible:focus-ring md:min-h-[9.25rem] md:w-[12rem] ${
        accentClasses[agent.accent]
      } ${isActive ? 'ring-1 ring-inset ring-current' : 'opacity-80 hover:opacity-100'}`}
    >
      <div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-current/80">
          {agent.label}
        </p>
        <h3 className="mt-3 font-display text-xl text-text-primary">
          {agent.title}
        </h3>
      </div>

      <p className="font-mono text-[0.72rem] text-text-muted">{agent.model}</p>
    </motion.button>
  )
}

export default PipelineNode
