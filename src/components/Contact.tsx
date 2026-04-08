import { motion, type Variants } from 'framer-motion'

import { siteContent } from '../data/siteContent'
import { MOTION_EASE } from '../lib/constants'
import SectionLabel from './SectionLabel'
import { useReducedMotion } from '../lib/useReducedMotion'

function Contact() {
  const reducedMotion = useReducedMotion()
  const { contact } = siteContent

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
      id="contact"
      className="py-20 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="rounded-[1.1rem] border border-border bg-surface/75 px-6 py-10 text-center sm:px-8">
        <SectionLabel index="06" label={contact.sectionLabel} />
        <h2 className="mt-4 font-display text-[1.7rem] tracking-[-0.03em] text-text-primary sm:text-[2.15rem]">
          {contact.heading}
        </h2>

        <a
          href={`mailto:${contact.email}`}
          className="mt-6 inline-flex font-mono text-sm text-teal-light transition-colors duration-200 hover:text-teal focus-visible:focus-ring"
        >
          {contact.email}
        </a>

        <div className="mt-6 flex justify-center gap-3">
          {contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.ariaLabel}
              className="flex h-10 min-w-10 items-center justify-center rounded-inline border border-border bg-base px-3 font-mono text-xs text-text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:text-text-primary focus-visible:focus-ring"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs text-text-muted">
          {contact.signoff}
        </p>
        <p className="mt-4 text-xs text-text-muted">{contact.footer}</p>
      </div>
    </motion.section>
  )
}

export default Contact
