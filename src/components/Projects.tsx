import { motion, type Variants } from 'framer-motion'

import { siteContent } from '../data/siteContent'
import { MOTION_EASE } from '../lib/constants'
import ProjectCard from './ProjectCard'
import SectionLabel from './SectionLabel'
import { useReducedMotion } from '../lib/useReducedMotion'

function Projects() {
  const reducedMotion = useReducedMotion()
  const { projects } = siteContent

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
      id="projects"
      className="py-20 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <SectionLabel index="04" label={projects.sectionLabel} />
      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-[1.7rem] tracking-[-0.03em] text-text-primary sm:text-[2.15rem]">
          {projects.heading}
        </h2>
        <p className="max-w-md text-sm leading-7 text-text-muted">
          {projects.intro}
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
