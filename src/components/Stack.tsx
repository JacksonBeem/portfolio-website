import { motion, type Variants } from 'framer-motion'

import { siteContent } from '../data/siteContent'
import { MOTION_EASE } from '../lib/constants'
import SectionLabel from './SectionLabel'
import { useReducedMotion } from '../lib/useReducedMotion'

function Stack() {
  const reducedMotion = useReducedMotion()
  const { stack } = siteContent

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
      id="stack"
      className="py-20 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="rounded-[1.1rem] border border-border bg-[linear-gradient(180deg,rgba(22,27,34,0.92)_0%,rgba(13,17,23,0.98)_100%)] p-6 sm:p-8">
        <SectionLabel index="05" label={stack.sectionLabel} />
        <h2 className="mt-4 font-display text-[1.7rem] tracking-[-0.03em] text-text-primary sm:text-[2.15rem]">
          {stack.heading}
        </h2>

        <div className="mt-8 grid gap-6">
          {stack.groups.map((group) => (
            <div
              key={group.category}
              className="grid gap-3 border-t border-border/70 pt-4 md:grid-cols-[10rem_minmax(0,1fr)] md:items-start"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-text-muted">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-pill border border-border bg-base/75 px-3 py-1.5 font-mono text-[0.72rem] text-text-muted transition-all duration-200 hover:border-teal hover:text-teal-light hover:shadow-[0_0_0_1px_rgba(93,202,165,0.18)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Stack
