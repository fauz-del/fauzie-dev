import React from 'react'
import { motion } from 'framer-motion'

const milestones = [
  {
    date: 'Jan 2025',
    title: 'Started with HTML, CSS & JavaScript',
    description: 'Began learning frontend fundamentals from scratch, self-taught.',
  },
  {
    date: '2025',
    title: 'Moved into React',
    description: 'Started building component-based interfaces and learning modern frontend architecture.',
  },
  {
    date: '2025',
    title: 'Adopted Tailwind CSS',
    description: 'Shifted styling workflow to utility-first CSS for faster, more consistent UI work.',
  },
  {
    date: '2025',
    title: 'Python & FastAPI',
    description: 'Gained backend experience building Nexus Cart and SecureHub — an e-commerce app and a role-based access control dashboard.',
  },
  {
    date: 'Now',
    title: 'Diving into WebGL & Three.js',
    description: 'Currently exploring 3D and shader-driven interfaces to push interaction further.',
  },
]

export default function JourneyTimeline() {
  return (
    <div className='relative max-w-2xl mx-auto'>
      <div className='absolute left-[7px] top-2 bottom-2 w-px bg-neutral-200 dark:bg-white/10' />

      <div className='space-y-10'>
        {milestones.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className='relative pl-8 group'
          >
            <span className='absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#E07A5F] ring-4 ring-[#FDEDE6] dark:ring-[#0F1115] group-hover:bg-[#38BDF8] group-hover:scale-125 transition-all duration-300' />

            <div className='rounded-2xl p-4 -ml-2 transition-all duration-300 group-hover:bg-white/70 dark:group-hover:bg-white/5 group-hover:shadow-md group-hover:-translate-y-0.5'>
              <span className='text-xs font-semibold tracking-wide text-[#84A98C] uppercase'>
                {item.date}
              </span>
              <h4 className='mt-1 font-semibold text-neutral-900 dark:text-white'>
                {item.title}
              </h4>
              <p className='mt-1 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed'>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}