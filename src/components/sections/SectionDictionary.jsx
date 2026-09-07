import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import TiltShine from '../ui/TiltShine'
import { sectionDictionary } from '../../data/sectionDictionary'

const RADIUS = 320

function CarouselCard({ item, angle, onSelect, dragRef }) {
  const controls = useAnimation()
  const [spinning, setSpinning] = useState(false)

  const handleClick = async () => {
    if (dragRef.current.moved) {
      dragRef.current.moved = false
      return
    }
    if (spinning) return
    setSpinning(true)
    await controls.start({
      rotateY: 360,
      transition: { duration: 0.8, ease: 'easeInOut' },
    })
    controls.set({ rotateY: 0 })
    setSpinning(false)
    onSelect(item)
  }

  return (
    <div
      className='absolute top-1/2 left-1/2 w-64 h-80 -mt-40 -ml-32'
      style={{
        transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        animate={controls}
        onClick={handleClick}
        className='w-full h-full cursor-pointer'
        style={{ transformStyle: 'preserve-3d' }}
      >
        <TiltShine glowColor={item.glow} className='w-full h-full rounded-3xl'>
          <div className='relative w-full h-full rounded-3xl overflow-hidden shadow-xl border border-white/20'>
            <img src={item.image} alt={item.name} className='w-full h-full object-cover' draggable={false} />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />
            <div className='absolute bottom-4 left-4 right-4 text-white'>
              <span className='text-[11px] font-semibold tracking-widest uppercase opacity-80'>
                {item.category}
              </span>
              <h3 className='text-lg font-bold'>{item.name}</h3>
            </div>
          </div>
        </TiltShine>
      </motion.div>
    </div>
  )
}

export default function SectionDictionary() {
  const [rotation, setRotation] = useState(0)
  const [paused, setPaused] = useState(false)
  const [selected, setSelected] = useState(null)
  const rafRef = useRef()
  const lastRef = useRef(performance.now())
  const dragRef = useRef({ dragging: false, lastX: 0, moved: false })

  useEffect(() => {
    const loop = (t) => {
      const dt = t - lastRef.current
      lastRef.current = t
      if (!paused && !selected && !dragRef.current.dragging) {
        setRotation((r) => r + dt * 0.012)
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [paused, selected])

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!dragRef.current.dragging) return
      const delta = e.clientX - dragRef.current.lastX
      dragRef.current.lastX = e.clientX
      if (Math.abs(delta) > 1) dragRef.current.moved = true
      setRotation((r) => r + delta * 0.4)
    }
    const handlePointerUp = () => {
      dragRef.current.dragging = false
      setPaused(false)
    }
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [])

  const handlePointerDown = (e) => {
    dragRef.current.dragging = true
    dragRef.current.lastX = e.clientX
    dragRef.current.moved = false
    setPaused(true)
  }

  const angleStep = 360 / sectionDictionary.length

  return (
    <section id='section-dictionary' className='py-28 px-6 max-w-7xl mx-auto text-center overflow-hidden'>
      <span className='text-xs font-semibold tracking-widest text-[#84A98C] uppercase'>
        Section Dictionary / Experiments
      </span>
      <h2 className='mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white'>
        I like experimenting with interfaces.
      </h2>
      <p className='mt-4 max-w-xl mx-auto text-neutral-600 dark:text-neutral-300'>
        A personal collection exploring different visual systems, layouts and interactions — paused for now, more to come later.
      </p>
      <p className='mt-2 text-xs text-neutral-400'>Drag to rotate · click a card to open</p>

      <div
        className='relative mt-16 h-[420px] cursor-grab active:cursor-grabbing'
        style={{ perspective: 1400 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => !dragRef.current.dragging && setPaused(false)}
        onPointerDown={handlePointerDown}
      >
        <div
          className='absolute inset-0'
          style={{ transformStyle: 'preserve-3d', transform: `rotateY(${rotation}deg)` }}
        >
          {sectionDictionary.map((item, i) => (
            <CarouselCard key={item.id} item={item} angle={angleStep * i} onSelect={setSelected} dragRef={dragRef} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-6'
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className='relative max-w-lg w-full rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 shadow-2xl'
            >
              <button
                onClick={() => setSelected(null)}
                className='absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors'
                aria-label='Close'
              >
                <X className='w-4 h-4' />
              </button>
              <img src={selected.image} alt={selected.name} className='w-full h-56 object-cover' />
              <div className='p-6 text-left'>
                <span className='text-xs font-semibold tracking-widest text-[#38BDF8] uppercase'>
                  {selected.category}
                </span>
                <h3 className='mt-2 text-2xl font-bold text-neutral-900 dark:text-white'>
                  {selected.name}
                </h3>
                <p className='mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed'>
                  {selected.description}
                </p>
                 <a
                  href={selected.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#E07A5F] hover:text-[#38BDF8] transition-colors' >    
                  View experiment <ArrowUpRight className='w-4 h-4' />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}