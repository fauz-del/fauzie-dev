import React, { useState } from 'react'
import { Atom, Braces, Palette, FileCode2, Wind, Server, Zap, Box } from 'lucide-react'

const innerRing = [
  { id: 'html', label: 'HTML', icon: FileCode2, color: '#E07A5F' },
  { id: 'css', label: 'CSS', icon: Palette, color: '#38BDF8' },
  { id: 'js', label: 'JavaScript', icon: Braces, color: '#F4A261' },
  { id: 'react', label: 'React', icon: Atom, color: '#84A98C' },
  { id: 'tailwind', label: 'Tailwind CSS', icon: Wind, color: '#38BDF8' },
]

const outerRing = [
  { id: 'python', label: 'Python', icon: Server, color: '#84A98C' },
  { id: 'fastapi', label: 'FastAPI', icon: Zap, color: '#38BDF8' },
  { id: 'webgl', label: 'WebGL / Three.js', icon: Box, color: '#E07A5F' },
]

function Ring({ items, radius, duration, reverse, size }) {
  const [paused, setPaused] = useState(false)

  return (
    <div
      className='absolute inset-0 flex items-center justify-center'
      style={{
        animation: `${reverse ? 'orbit-reverse' : 'orbit'} ${duration}s linear infinite`,
        animationPlayState: paused ? 'paused' : 'running',
      }}
    >
      {items.map((item, i) => {
        const angle = (360 / items.length) * i
        const rad = (angle * Math.PI) / 180
        const x = radius * Math.cos(rad)
        const y = radius * Math.sin(rad)
        const Icon = item.icon

        return (
          <div
            key={item.id}
            className='absolute'
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <div
              className='group relative flex items-center justify-center rounded-full shadow-md bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/60 dark:border-white/10 transition-transform duration-300 hover:scale-125'
              style={{
                width: size,
                height: size,
                animation: `${reverse ? 'orbit' : 'orbit-reverse'} ${duration}s linear infinite`,
                animationPlayState: paused ? 'paused' : 'running',
              }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <Icon className='w-5 h-5' style={{ color: item.color }} />
              <span className='pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium px-2 py-0.5 rounded-full bg-neutral-900 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                {item.label}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function StackOrbit() {
  return (
    <div className='relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] mx-auto'>
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>

      <div className='absolute inset-0 rounded-full border border-dashed border-neutral-300/60 dark:border-white/10' />
      <div className='absolute inset-[18%] rounded-full border border-dashed border-neutral-300/60 dark:border-white/10' />

      <Ring items={outerRing} radius={120} duration={42} reverse size={50} />
      <Ring items={innerRing} radius={75} duration={26} size={42} />

      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#E07A5F] to-[#38BDF8] flex items-center justify-center shadow-lg'>
          <span className='text-white font-bold text-sm'>FD</span>
        </div>
      </div>
    </div>
  )
}