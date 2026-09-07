import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

function InteractiveWord({ children, containerRef }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useMotionValue(0)
  const scale = useMotionValue(1)

  const sx = useSpring(x, { stiffness: 260, damping: 18 })
  const sy = useSpring(y, { stiffness: 260, damping: 18 })
  const srotate = useSpring(rotate, { stiffness: 260, damping: 18 })
  const sscale = useSpring(scale, { stiffness: 260, damping: 18 })

  React.useEffect(() => {
    const container = containerRef.current
    if (!container || !ref.current) return

    const reset = () => {
      x.set(0); y.set(0); rotate.set(0); scale.set(1)
    }

    const handleMove = (e) => {
      const rect = ref.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const maxDist = 90

      if (dist < maxDist) {
        const factor = 1 - dist / maxDist
        const away = dist || 1
        x.set(-(dx / away) * factor * 12)
        y.set(-factor * 16 - (dy / away) * factor * 6)
        rotate.set((dx > 0 ? 1 : -1) * factor * 9)
        scale.set(1 + factor * 0.18)
      } else {
        reset()
      }
    }

    container.addEventListener('mousemove', handleMove)
    container.addEventListener('mouseleave', reset)
    return () => {
      container.removeEventListener('mousemove', handleMove)
      container.removeEventListener('mouseleave', reset)
    }
  }, [containerRef, x, y, rotate, scale])

  return (
    <motion.span
      ref={ref}
      style={{ x: sx, y: sy, rotate: srotate, scale: sscale, display: 'inline-block' }}
      className='will-change-transform'
    >
      {children}
    </motion.span>
  )
}

export default function InteractiveText({ text, className = '' }) {
  const containerRef = useRef(null)
  const words = text.split(' ')

  return (
    <span ref={containerRef} className={className}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <InteractiveWord containerRef={containerRef}>{word}</InteractiveWord>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </span>
  )
}