import { motion, type Variants } from 'framer-motion'

import { siteContent } from '../data/siteContent'
import { MOTION_EASE } from '../lib/constants'
import PublicationCard from './PublicationCard'
import SectionLabel from './SectionLabel'
import { useReducedMotion } from '../lib/useReducedMotion'

function Research() {
  const reducedMotion = useReducedMotion()
  const { research } = siteContent
  const publications = research.items.filter((item) => item.type === 'publication')
  const inDevelopment = research.items.filter(
    (item) => item.type === 'in-development',
  )
  const presentations = research.items.filter((item) => item.type === 'presentation')

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
      id="research"
      className="py-20 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="rounded-[1.1rem] border border-border bg-surface/80 p-6 sm:p-8">
        <SectionLabel index="03" label={research.sectionLabel} />
        <h2 className="mt-4 font-display text-[1.7rem] tracking-[-0.03em] text-text-primary sm:text-[2.15rem]">
          {research.heading}
        </h2>

        <div className="mt-8 grid gap-8">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-text-muted">
              {research.publicationsLabel}
            </p>
            <div className="mt-4 grid gap-4">
              {publications.map((item) => (
                <PublicationCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-text-muted">
              {research.inDevelopmentLabel}
            </p>
            <div className="mt-4 grid gap-4">
              {inDevelopment.map((item) => (
                <PublicationCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-text-muted">
              {research.presentationsLabel}
            </p>
            <div className="mt-4 grid gap-4">
              {presentations.map((item) => (
                <PublicationCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Research
