import React, { useState } from 'react'
import { GitBranch } from 'lucide-react'

export default function TechCard({ project, glowColor = '#38BDF8' }) {
  const { name, category, intro, bullets, stack, codeUrl, liveUrl } = project
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='relative rounded-3xl p-8 border border-neutral-200/70 dark:border-white/10 bg-gradient-to-br from-[#FDEDE6] via-white to-[#E9F3F8] dark:from-white/5 dark:via-transparent dark:to-white/5 shadow-sm hover:shadow-lg transition-shadow duration-300'
    >
      <div
        className='absolute -inset-2 rounded-3xl blur-xl -z-10 transition-opacity duration-500'
        style={{ background: glowColor, opacity: isHovered ? 0.3 : 0 }}
        aria-hidden='true'
      />

      <span className='text-xs font-semibold tracking-widest text-[#38BDF8] uppercase'>
        {category}
      </span>
      <h3 className='mt-2 text-xl font-bold text-neutral-900 dark:text-white'>{name}</h3>
      <p className='mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed'>
        {intro}
      </p>

      <ul className='mt-5 space-y-2'>
        {bullets.map((b) => (
          <li key={b} className='flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300'>
            <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E07A5F] shrink-0' />
            {b}
          </li>
        ))}
      </ul>

      <div className='mt-5 flex flex-wrap gap-2'>
        {stack.map((tech) => (
          <span
            key={tech}
            className='text-xs font-medium px-2.5 py-1 rounded-full bg-[#84A98C]/15 text-[#84A98C] dark:bg-[#84A98C]/20 dark:text-[#A3B18A]'
          >
            {tech}
          </span>
        ))}
      </div>

      <div className='mt-6 flex items-center gap-4'>
        {liveUrl && (
          <a href={liveUrl} target='_blank' rel='noopener noreferrer' className='text-sm font-semibold text-[#E07A5F] hover:text-[#38BDF8] transition-colors'>
            View live ↗
          </a>
        )}
        {codeUrl && (
          <a href={codeUrl} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:text-[#38BDF8] transition-colors'>
            <GitBranch className='w-4 h-4' /> View code
          </a>
        )}
      </div>
    </div>
  )
}