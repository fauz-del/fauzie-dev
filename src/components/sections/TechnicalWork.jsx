import React from 'react'
import TechCard from '../ui/TechCard'
import { technicalWork } from '../../data/projects'
import { accentGlowColors } from '../../data/theme'

export default function TechnicalWork() {
  return (
    <section id='technical-work' className='py-28 px-6 max-w-7xl mx-auto'>
      <div className='mb-14'>
        <span className='text-xs font-semibold tracking-widest text-[#84A98C] uppercase'>
          More Than Websites
        </span>
        <h2 className='mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white'>
          Some things I've built behind the interface.
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {technicalWork.map((project, i) => (
          <TechCard key={project.id} project={project} glowColor={accentGlowColors[i % accentGlowColors.length]} />
        ))}
      </div>
    </section>
  )
}