import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import WebGLTextReveal from '../ui/WebGLTextReveal'
import TiltPhotoCard from '../ui/TiltPhotoCard'
import myPhoto from '../../assets/my-photo.jpeg'
import MagneticLink from '../ui/MagneticLink'

export default function Hero() {
  const [headlineDone, setHeadlineDone] = useState(false)

  return (
    <section className='relative min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden'>
      {/* ambient drifting color blob — shifted left-of-center so it sits behind the text column, not the photo */}
      <motion.div
        aria-hidden='true'
        className='absolute -z-10 w-[560px] h-[560px] rounded-full blur-[110px] opacity-30 dark:opacity-20'
        style={{
          background: 'radial-gradient(circle, #E07A5F 0%, #84A98C 55%, transparent 75%)',
          top: '8%',
          left: '20%',
        }}
        initial={{ x: '-50%', y: 0, scale: 0.9 }}
        animate={{
          x: ['-55%', '-45%', '-52%', '-50%'],
          y: [0, 30, -20, 0],
          scale: [0.9, 1, 0.95, 0.9],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#84A98C]/15 text-[#84A98C] dark:bg-[#84A98C]/20 dark:text-[#A3B18A] text-xs font-semibold mb-6 border border-[#84A98C]/30'
        >
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84A98C] opacity-75' />
            <span className='relative inline-flex rounded-full h-2 w-2 bg-[#84A98C]' />
          </span>
          Available for new projects
        </motion.div>

        <WebGLTextReveal
          as='h1'
          className='text-5xl sm:text-6xl font-bold tracking-tight max-w-xl leading-tight text-neutral-900 dark:text-white'
          onDone={() => setHeadlineDone(true)}
        >
          Crafting modern web interfaces with <span className='text-[#E07A5F]'>precision</span> & <span className='text-[#84A98C]'>motion</span>.
        </WebGLTextReveal>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={headlineDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-lg font-normal'
        >
          Hi, I'm Fauzie. I build high-performance React web apps with custom animations, intuitive UX, and clean architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headlineDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mt-10 flex items-center gap-4'
        >
          <MagneticLink
            href='#projects'
            className='px-6 py-3 bg-[#E07A5F] hover:bg-[#38BDF8] text-white rounded-full text-sm font-semibold shadow-sm transition-colors duration-200 inline-block'
          >
            View Selected Work
          </MagneticLink>
          <MagneticLink
            href='#contact'
            className='px-6 py-3 border border-neutral-300 dark:border-neutral-700 hover:border-[#38BDF8] text-neutral-800 dark:text-neutral-200 rounded-full text-sm font-semibold hover:text-[#38BDF8] transition-colors duration-200 inline-block'
          >
            Get in Touch
          </MagneticLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={headlineDone ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-12 flex items-center gap-3 text-xs font-medium text-neutral-500 dark:text-neutral-400'
        >
          {['React', 'Tailwind CSS', 'Framer Motion'].map((tech, i) => (
            <span key={tech} className='flex items-center gap-3'>
              {i > 0 && <span className='w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600' />}
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className='shrink-0'
      >
        <TiltPhotoCard
          src={myPhoto}
          alt='Fauzie'
          className='w-64 sm:w-80 aspect-[3/4]'
        />
      </motion.div>

      <motion.a
        href='#projects'
        aria-label='Scroll to projects'
        initial={{ opacity: 0 }}
        animate={headlineDone ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-500 hover:text-[#E07A5F] transition-colors'
      >
        <span className='text-[11px] font-medium tracking-wide'>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className='w-4 h-4' />
        </motion.span>
      </motion.a>
    </section>
  )
}