import React from 'react'
import { motion } from 'framer-motion'
import { Globe, LayoutGrid, AppWindow } from 'lucide-react'
import StackOrbit from '../ui/StackOrbit'
import JourneyTimeline from '../ui/JourneyTimeline'

const capabilities = [
  {
    icon: Globe,
    title: 'Websites',
    description: 'Marketing sites, portfolios, business websites and landing pages.',
    color: '#E07A5F',
  },
  {
    icon: LayoutGrid,
    title: 'Interfaces',
    description: 'Responsive interfaces with thoughtful layout, interaction and motion.',
    color: '#38BDF8',
  },
  {
    icon: AppWindow,
    title: 'Applications',
    description: 'Interactive web applications with APIs and backend functionality.',
    color: '#84A98C',
  },
]

export default function Capabilities() {
  return (
    <section id='capabilities' className='py-28 px-6 max-w-7xl mx-auto'>
      <div className='mb-16 text-center'>
        <span className='text-xs font-semibold tracking-widest text-[#84A98C] uppercase'>
          What I Build
        </span>
        <h2 className='mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white'>
          From idea to working website.
        </h2>
        <p className='mt-4 max-w-xl mx-auto text-neutral-600 dark:text-neutral-300'>
          I combine frontend development, interaction and backend experience to create websites that look considered and work properly.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24'>
        {capabilities.map(({ icon: Icon, title, description, color }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='rounded-3xl p-6 border border-neutral-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm'
          >
            <div
              className='w-11 h-11 rounded-2xl flex items-center justify-center mb-4'
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon className='w-5 h-5' style={{ color }} />
            </div>
            <h3 className='font-semibold text-neutral-900 dark:text-white'>{title}</h3>
            <p className='mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed'>
              {description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        <div>
          <span className='text-xs font-semibold tracking-widest text-[#38BDF8] uppercase'>
            Stack
          </span>
          <h3 className='mt-2 text-2xl font-bold text-neutral-900 dark:text-white'>
            The tools I work with.
          </h3>
          <p className='mt-3 text-neutral-600 dark:text-neutral-300 max-w-sm'>
            Hover a node to see what it is. Inner ring is my day-to-day frontend stack; outer ring is backend and graphics work I'm building experience in.
          </p>
          <StackOrbit />
        </div>

        <div>
          <span className='text-xs font-semibold tracking-widest text-[#E07A5F] uppercase'>
            Journey
          </span>
          <h3 className='mt-2 text-2xl font-bold text-neutral-900 dark:text-white mb-8'>
            How I got here.
          </h3>
          <JourneyTimeline />
        </div>
      </div>
    </section>
  )
}