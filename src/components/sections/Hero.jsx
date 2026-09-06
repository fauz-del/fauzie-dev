import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className='min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center items-center text-center'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#84A98C]/15 text-[#84A98C] dark:bg-[#84A98C]/20 dark:text-[#A3B18A] text-xs font-semibold mb-6 border border-[#84A98C]/30'
      >
        <Sparkles className='w-3.5 h-3.5 text-[#E07A5F]' /> Creative Frontend Developer
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-5xl sm:text-7xl font-bold tracking-tight max-w-4xl leading-tight text-neutral-900 dark:text-white'
      >
        Crafting modern web interfaces with <span className='text-[#E07A5F]'>precision</span> & <span className='text-[#84A98C]'>motion</span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl font-normal'
      >
        Hi, I'm Fauzie. I build high-performance React web apps with custom animations, intuitive UX, and clean architecture.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='mt-10 flex items-center gap-4'
      >
        <a
          href='#projects'
          className='px-6 py-3 bg-[#E07A5F] hover:bg-[#38BDF8] text-white rounded-full text-sm font-semibold shadow-sm transition-colors duration-200'
        >
          View Selected Work
        </a>
        <a
          href='#contact'
          className='px-6 py-3 border border-neutral-300 dark:border-neutral-700 hover:border-[#38BDF8] text-neutral-800 dark:text-neutral-200 rounded-full text-sm font-semibold hover:text-[#38BDF8] transition-colors duration-200'
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  )
}
