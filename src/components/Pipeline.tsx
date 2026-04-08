import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useState } from 'react'

import { siteContent, type PipelineAgent } from '../data/siteContent'
import { MOTION_EASE } from '../lib/constants'
import PipelineNode from './PipelineNode'
import SectionLabel from './SectionLabel'
import { useReducedMotion } from '../lib/useReducedMotion'

const detailAccentClasses: Record<PipelineAgent['accent'], string> = {
  purple:
    'border-purple/70 bg-[linear-gradient(135deg,rgba(83,74,183,0.12)_0%,rgba(13,17,23,0.9)_100%)] text-purple-light',
  teal: 'border-teal/70 bg-[linear-gradient(135deg,rgba(29,158,117,0.12)_0%,rgba(13,17,23,0.9)_100%)] text-teal-light',
  amber:
    'border-amber/70 bg-[linear-gradient(135deg,rgba(239,159,39,0.12)_0%,rgba(13,17,23,0.9)_100%)] text-amber',
  red: 'border-red/70 bg-[linear-gradient(135deg,rgba(226,75,74,0.12)_0%,rgba(13,17,23,0.9)_100%)] text-red',
}

function PipelineConnector({
  reducedMotion,
  index,
}: {
  reducedMotion: boolean
  index: number
}) {
  return (
    <>
      <div className="relative hidden h-[2px] flex-1 overflow-hidden md:block">
        <div className="absolute inset-0 bg-border" />
        {!reducedMotion ? (
          <motion.div
            aria-hidden="true"
            className="absolute top-1/2 h-2 w-16 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(93,202,165,0)_0%,rgba(93,202,165,0.88)_50%,rgba(93,202,165,0)_100%)]"
            animate={{ x: ['-22%', '120%'] }}
            transition={{
              duration: 2.2,
              ease: 'linear',
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.18,
            }}
          />
        ) : null}
      </div>

      <div className="relative h-10 w-[2px] overflow-hidden md:hidden">
        <div className="absolute inset-0 bg-border" />
        {!reducedMotion ? (
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 h-10 w-2 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(93,202,165,0)_0%,rgba(93,202,165,0.88)_50%,rgba(93,202,165,0)_100%)]"
            animate={{ y: ['-25%', '110%'] }}
            transition={{
              duration: 2.2,
              ease: 'linear',
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.18,
            }}
          />
        ) : null}
      </div>
    </>
  )
}

function Pipeline() {
  const reducedMotion = useReducedMotion()
  const { pipeline } = siteContent
  const [activeAgentId, setActiveAgentId] = useState<PipelineAgent['id']>(
    pipeline.agents[0].id,
  )

  const activeAgent =
    pipeline.agents.find((agent) => agent.id === activeAgentId) ??
    pipeline.agents[0]

  const sectionVariants: Variants = {
    hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reducedMotion
        ? { duration: 0 }
        : { duration: 0.6, ease: MOTION_EASE },
    },
  }

  return (
    <motion.section
      id="pipeline"
      className="pb-24 md:pb-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      <div className="rounded-[1.25rem] border border-border bg-[linear-gradient(180deg,rgba(22,27,34,0.95)_0%,rgba(13,17,23,0.96)_100%)] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 border-b border-border/80 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="02" label={pipeline.sectionLabel} />
            <h2 className="mt-4 max-w-2xl font-display text-[1.75rem] tracking-[-0.03em] text-text-primary sm:text-[2.25rem]">
              {pipeline.heading}
            </h2>
          </div>

          <p className="max-w-sm font-mono text-[0.72rem] leading-6 tracking-[0.08em] text-text-muted">
            {pipeline.instruction}
          </p>
        </div>

        <div className="mt-8 rounded-[1rem] border border-border/70 bg-base/80 p-5 sm:p-6">
          <div className="flex flex-col items-stretch justify-center gap-0 md:flex-row md:items-center">
            {pipeline.agents.map((agent, index) => (
              <div
                key={agent.id}
                className="flex flex-col items-center md:flex-row md:flex-1"
              >
                <PipelineNode
                  agent={agent}
                  isActive={agent.id === activeAgent.id}
                  onActivate={setActiveAgentId}
                  reducedMotion={reducedMotion}
                />
                {index < pipeline.agents.length - 1 ? (
                  <PipelineConnector
                    reducedMotion={reducedMotion}
                    index={index}
                  />
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[0.9rem] border border-border/80 bg-surface/70 p-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAgent.id}
                initial={{
                  opacity: reducedMotion ? 1 : 0,
                  y: reducedMotion ? 0 : 12,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: reducedMotion ? 1 : 0,
                  y: reducedMotion ? 0 : -12,
                }}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { duration: 0.35, ease: MOTION_EASE }
                }
                className={`rounded-[0.7rem] border px-5 py-5 md:px-6 ${detailAccentClasses[activeAgent.accent]}`}
              >
                <div className="flex flex-col gap-5 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-start">
                  <div>
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.26em] text-current/85">
                      {pipeline.detailLabel}
                    </p>
                    <h3 className="mt-3 font-display text-2xl text-text-primary">
                      {activeAgent.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-[0.98rem]">
                      {activeAgent.role}
                    </p>
                  </div>

                  <dl className="grid gap-4 text-sm">
                    <div>
                      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-current/80">
                        {pipeline.modelLabel}
                      </dt>
                      <dd className="mt-2 text-text-primary">
                        {activeAgent.model}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-current/80">
                        {pipeline.exampleLabel}
                      </dt>
                      <dd className="mt-2 leading-6 text-text-muted">
                        {activeAgent.example}
                      </dd>
                    </div>
                  </dl>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-[0.98rem] leading-8 text-text-muted">
          {pipeline.summary}
        </p>
      </div>
    </motion.section>
  )
}

export default Pipeline
