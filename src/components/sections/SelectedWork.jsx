import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ExpandableProjectCard from '../ui/ExpandableProjectCard'
import { selectedWork } from '../../data/projects'
import { accentGlowColors } from '../../data/theme'

export default function SelectedWork() {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <section id='projects' className='py-28 px-6 max-w-7xl mx-auto'>
      <div className='mb-14'>
        <span className='text-xs font-semibold tracking-widest text-[#84A98C] uppercase'>
          Selected Work / 01–05
        </span>
        <h2 className='mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white'>
          Websites I've designed & built.
        </h2>
        <p className='mt-4 max-w-xl text-neutral-600 dark:text-neutral-300'>
          A collection of visual, interactive and business-focused websites exploring different styles, industries and experiences.
        </p>
      </div>

      <motion.div layout className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {selectedWork.map((project, i) => (
          <ExpandableProjectCard
            key={project.id}
            project={project}
            expanded={expandedId === project.id}
            onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
            glowColor={accentGlowColors[i % accentGlowColors.length]}
          />
        ))}
      </motion.div>
    </section>
  )
}