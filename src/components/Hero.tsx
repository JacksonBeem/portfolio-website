import { motion, type Variants } from 'framer-motion'

import { siteContent } from '../data/siteContent'
import { MOTION_EASE } from '../lib/constants'
import TechPill from './TechPill'
import { useReducedMotion } from '../lib/useReducedMotion'
import SectionLabel from './SectionLabel'

function Hero() {
  const reducedMotion = useReducedMotion()
  const { hero } = siteContent

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: reducedMotion
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.08 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reducedMotion
        ? { duration: 0 }
        : { duration: 0.6, ease: MOTION_EASE },
    },
  }

  const navMotion = reducedMotion
    ? {}
    : {
        whileHover: { y: -1.5, scale: 1.03 },
        transition: { duration: 0.2, ease: MOTION_EASE },
      }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center py-20 md:py-24"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-full border-b border-border/80 pb-16 md:pb-20"
      >
        <motion.nav
          variants={itemVariants}
          className="mb-12 flex flex-wrap gap-3 md:absolute md:right-0 md:top-0 md:mb-0"
          aria-label="Profile links"
        >
          {hero.links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              aria-label={link.ariaLabel}
              className="flex h-8 w-8 items-center justify-center rounded-inline border border-border bg-surface font-mono text-[0.72rem] text-text-muted transition-colors duration-200 hover:border-teal hover:text-text-primary focus-visible:focus-ring"
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              {...navMotion}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        <motion.div variants={itemVariants} className="max-w-4xl">
          <SectionLabel index="01" label={hero.sectionLabel} />
          <p className="font-mono text-sm text-text-muted">{hero.annotation}</p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mt-5 max-w-4xl font-display text-[clamp(2.25rem,8vw,4.5rem)] font-medium tracking-[-0.05em] text-text-primary"
        >
          {hero.name}
        </motion.h1>

        <motion.div variants={itemVariants} className="mt-6 space-y-2.5">
          {hero.taglines.map((line) => (
            <p
              key={line}
              className="text-[1rem] leading-7 text-text-muted sm:text-[1.125rem]"
            >
              {line}
            </p>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap gap-3 md:max-w-3xl"
        >
          {hero.pills.map((pill) => (
            <TechPill key={pill.label} tone={pill.tone}>
              {pill.label}
            </TechPill>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 inline-flex items-center gap-3 font-mono text-xs text-text-muted"
        >
          <span>{hero.scrollLabel}</span>
          <motion.span
            aria-hidden="true"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface text-sm"
            animate={
              reducedMotion
                ? undefined
                : {
                    y: [0, 5, 0],
                    opacity: [0.5, 1, 0.5],
                  }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : {
                    duration: 1.8,
                    ease: MOTION_EASE,
                    repeat: Number.POSITIVE_INFINITY,
                  }
            }
          >
            v
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
