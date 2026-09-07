import React, { useState } from 'react'
import { Atom, FileCode2, Palette, Braces, Wind, Server, Zap, Box } from 'lucide-react'

const stack = [
  { id: 'html', label: 'HTML', icon: FileCode2, color: '#E07A5F' },
  { id: 'css', label: 'CSS', icon: Palette, color: '#38BDF8' },
  { id: 'js', label: 'JavaScript', icon: Braces, color: '#F4A261' },
  { id: 'react', label: 'React', icon: Atom, color: '#84A98C' },
  { id: 'tailwind', label: 'Tailwind', icon: Wind, color: '#38BDF8' },
  { id: 'python', label: 'Python', icon: Server, color: '#84A98C' },
  { id: 'fastapi', label: 'FastAPI', icon: Zap, color: '#E07A5F' },
  { id: 'webgl', label: 'WebGL / Three.js', icon: Box, color: '#F4A261' },
]

export default function StackOrbit() {
  const [paused, setPaused] = useState(false)
  const radius = 130
  const duration = 34 // slow, steady — marquee pace, not a spin

  return (
    <div className='relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] mx-auto'>
      <style>{`
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbit-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      `}</style>

      <div className='absolute inset-0 rounded-full border border-dashed border-neutral-300/60 dark:border-white/10' />

      <div
        className='absolute inset-0 flex items-center justify-center'
        style={{
          animation: `orbit ${duration}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {stack.map((item, i) => {
          const angle = (360 / stack.length) * i
          const rad = (angle * Math.PI) / 180
          const x = radius * Math.cos(rad)
          const y = radius * Math.sin(rad)
          const Icon = item.icon

          return (
            <div key={item.id} className='absolute' style={{ transform: `translate(${x}px, ${y}px)` }}>
              <div
                className='flex flex-col items-center gap-1'
                style={{
                  animation: `orbit-reverse ${duration}s linear infinite`,
                  animationPlayState: paused ? 'paused' : 'running',
                }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div className='w-11 h-11 rounded-full flex items-center justify-center shadow-md bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/60 dark:border-white/10 transition-transform duration-300 hover:scale-110'>
                  <Icon className='w-5 h-5' style={{ color: item.color }} />
                </div>
                <span className='text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-neutral-900/80 text-white whitespace-nowrap'>
                  {item.label}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#E07A5F] to-[#38BDF8] flex items-center justify-center shadow-lg'>
          <span className='text-white font-bold text-sm'>FD</span>
        </div>
      </div>
    </div>
  )
}