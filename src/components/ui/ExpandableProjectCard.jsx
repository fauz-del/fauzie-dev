import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, GitBranch } from 'lucide-react'
import PlaceholderThumb from './PlaceholderThumb'
import TiltShine from './TiltShine'

export default function ExpandableProjectCard({ project, expanded, onToggle, glowColor }) {
  const { name, category, image, intro, stack, liveUrl, codeUrl } = project

  return (
    <motion.div
      layout
      onClick={onToggle}
      className={`cursor-pointer rounded-3xl overflow-hidden border border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-lg transition-shadow duration-300 ${
        expanded ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
    >
      <TiltShine glowColor={glowColor} className='rounded-none'>
        <motion.div layout className={`relative ${expanded ? 'h-72 sm:h-96' : 'h-56'}`}>
          {image ? (
            <img src={image} alt={name} className='w-full h-full object-cover' />
          ) : (
            <PlaceholderThumb />
          )}
          <div className='absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[11px] font-medium text-white tracking-wide'>
            {category}
          </div>
        </motion.div>
      </TiltShine>

      <motion.div layout className='p-5'>
        <div className='flex items-center justify-between gap-4'>
          <h3 className='text-lg font-semibold text-neutral-900 dark:text-white'>{name}</h3>
          <span className='text-xs text-neutral-400'>{expanded ? 'Close' : 'View'}</span>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key='details'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='overflow-hidden'
            >
              <p className='mt-3 text-sm text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed'>
                {intro}
              </p>

              <div className='mt-4 flex flex-wrap gap-2'>
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className='text-xs font-medium px-2.5 py-1 rounded-full bg-[#84A98C]/15 text-[#84A98C] dark:bg-[#84A98C]/20 dark:text-[#A3B18A]'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='mt-5 flex items-center gap-4'>
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={(e) => e.stopPropagation()}
                    className='inline-flex items-center gap-1.5 text-sm font-semibold text-[#E07A5F] hover:text-[#38BDF8] transition-colors'
                  >
                    View project <ArrowUpRight className='w-4 h-4' />
                  </a>
                )}
                {codeUrl && (
                  <a
                    href={codeUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={(e) => e.stopPropagation()}
                    className='inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:text-[#38BDF8] transition-colors'
                  >
                    <GitBranch className='w-4 h-4' /> Code
                  </a>
                )}
                {!liveUrl && !codeUrl && (
                  <span className='text-sm text-neutral-400 italic'>Link coming soon</span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}