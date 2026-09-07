import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Copy, Check } from 'lucide-react'
import MagneticLink from '../ui/MagneticLink'
import WebGLTextReveal from '../ui/WebGLTextReveal'

const email = 'fauziewebdev@gmail.com'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/fauzie_dev' },
  { label: 'GitHub', href: 'https://github.com/fauz-del' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [headlineDone, setHeadlineDone] = useState(false)

  const handleCopy = () => {
    // Copy address without blocking mailto link behavior
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section id='contact' className='relative py-32 px-6 max-w-4xl mx-auto text-center overflow-hidden'>
      {/* Ambient bloom background */}
      <motion.div
        aria-hidden='true'
        className='absolute -z-10 w-[820px] h-[820px] rounded-full blur-[130px] opacity-45 dark:opacity-35'
        style={{
          background: 'radial-gradient(circle, #38BDF8 0%, #E07A5F 45%, #F4A261 70%, transparent 80%)',
          top: '-10%',
          left: '50%',
        }}
        initial={{ x: '-50%', y: 0, scale: 0.85 }}
        animate={{
          x: ['-55%', '-45%', '-52%', '-50%'],
          y: [0, 40, -25, 0],
          scale: [0.85, 1.05, 0.95, 0.85],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      <span className='text-xs font-semibold tracking-widest text-[#E07A5F] uppercase'>
        Contact
      </span>

      <WebGLTextReveal
        as='h2'
        playOnView
        className='mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white'
        onDone={() => setHeadlineDone(true)}
      >
        Let's build something.
      </WebGLTextReveal>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={headlineDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className='mt-5 text-lg text-neutral-600 dark:text-neutral-300 max-w-md mx-auto'
      >
        Have a project, website or idea in mind? I'd love to hear about it.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={headlineDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='mt-12 relative inline-block'
      >
        <MagneticLink
          href={`mailto:${email}`}
          onClick={handleCopy}
          strength={0.15}
          className='text-2xl sm:text-4xl font-semibold text-neutral-900 dark:text-white hover:text-[#38BDF8] transition-colors duration-200 inline-flex items-center gap-3 cursor-pointer'
        >
          {email}
          {copied ? (
            <Check className='w-6 h-6 text-[#84A98C]' />
          ) : (
            <Copy className='w-6 h-6 opacity-40' />
          )}
        </MagneticLink>

        <span
          className={`absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-900 text-white transition-opacity duration-300 ${
            copied ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          Copied!
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={headlineDone ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='mt-14 flex items-center justify-center gap-8'
      >
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
            className='group inline-flex items-center gap-1 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-[#38BDF8] transition-colors duration-200'
          >
            {social.label}
            <ArrowUpRight className='w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
          </a>
        ))}
      </motion.div>

      <footer className='relative mt-24 pt-8 border-t border-neutral-200/60 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500 dark:text-neutral-400'>
        <div>
          <span className='font-semibold text-neutral-800 dark:text-neutral-200'>fauzie</span>
          <span className='mx-2'>·</span>
          Web Developer
          <span className='mx-2'>·</span>
          © 2026
        </div>
        <nav className='flex items-center gap-6'>
          <a href='#projects' className='hover:text-[#38BDF8] transition-colors'>Work</a>
          <a href='#about' className='hover:text-[#38BDF8] transition-colors'>About</a>
          <a href='#contact' className='hover:text-[#38BDF8] transition-colors'>Contact</a>
        </nav>
      </footer>
    </section>
  )
}