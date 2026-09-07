import React from 'react'
import { motion } from 'framer-motion'
import InteractiveText from '../ui/InteractiveText'

const focus = ['WebGL & Three.js', 'React', 'Backend with Python & FastAPI']

const process = [
  { step: '01', title: 'Understand', description: 'Understand the purpose, audience and idea.' },
  { step: '02', title: 'Build', description: 'Translate it into a responsive interface.' },
  { step: '03', title: 'Refine', description: 'Polish interaction, responsiveness and details.' },
]

export default function About() {
  return (
    <section id='about' className='py-28 px-6 max-w-4xl mx-auto'>
      <span className='text-xs font-semibold tracking-widest text-[#84A98C] uppercase'>
        About
      </span>

      <h2 className='mt-4 text-2xl sm:text-3xl font-semibold leading-snug text-neutral-900 dark:text-white'>
        <InteractiveText text="I'm Fauzie, a web developer who enjoys turning ideas into websites that feel considered." />
      </h2>

      <div className='mt-8 space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl'>
        <p>
          Full name Agbalaya Fauzeeyat — I go by Fauzie. I'm 20, and I'm a self-taught frontend
          developer with some backend experience. I keep it frontend-first on purpose; that's
          where my strength actually is.
        </p>
        <p>
          I started out of pure curiosity, and at some point that turned into something I'm
          genuinely invested in. What keeps it interesting is realizing how much there still is
          to learn — new stacks, new tools, new AI releases changing how people build almost
          every month. Some days that's a lot. Most days it's the good kind of overwhelming.
        </p>
      </div>

      <div className='mt-14'>
        <span className='text-xs font-semibold tracking-widest text-[#38BDF8] uppercase'>
          How I work
        </span>
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6'>
          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className='text-3xl font-bold text-[#E07A5F] '>
                {item.step}
              </span>
              <h4 className='mt-1 font-semibold text-neutral-900 dark:text-white'>
                {item.title}
              </h4>
              <p className='mt-1 text-sm text-neutral-600 dark:text-neutral-300'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='mt-14'>
        <span className='text-xs font-semibold tracking-widest text-[#E07A5F] uppercase'>
          Currently exploring
        </span>
        <div className='mt-4 flex flex-wrap gap-3'>
          {focus.map((item) => (
            <span
              key={item}
              className='text-sm font-medium px-3.5 py-1.5 rounded-full bg-[#84A98C]/15 text-[#84A98C] dark:bg-[#84A98C]/20 dark:text-[#A3B18A] hover:scale-105 transition-transform duration-200 cursor-default'
            >
              <InteractiveText text={item} />
            </span>
          ))}
        </div>
      </div>

      <div className='mt-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#84A98C]/15 text-[#84A98C] dark:bg-[#84A98C]/20 dark:text-[#A3B18A] text-xs font-semibold border border-[#84A98C]/30'>
        <span className='relative flex h-2 w-2'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84A98C] opacity-75' />
          <span className='relative inline-flex rounded-full h-2 w-2 bg-[#84A98C]' />
        </span>
        Available for freelance & contract work
      </div>
    </section>
  )
}