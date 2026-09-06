import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltShine({
  children,
  className = '',
  maxRotation = 8,
  glowColor = '#38BDF8',
  shineOpacity = 0.4,
}) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * maxRotation * 2)
    rotateX.set((0.5 - py) * maxRotation * 2)
    glowX.set(px * 100)
    glowY.set(py * 100)
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    rotateX.set(0)
    rotateY.set(0)
  }

  const shineBackground = useTransform([glowX, glowY], ([gx, gy]) =>
    `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,${shineOpacity}), transparent 60%)`
  )

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      className={`relative ${className}`}
    >
      {/* ambient glow behind the card — per-card accent color for visual diversity */}
      <div
        className='absolute -inset-2 rounded-3xl blur-xl -z-10 transition-opacity duration-500'
        style={{ background: glowColor, opacity: isHovered ? 0.35 : 0 }}
        aria-hidden='true'
      />

      {children}

      {/* laminated diagonal shine sweep */}
      <div
        className='absolute inset-0 pointer-events-none mix-blend-overlay rounded-[inherit]'
        style={{
          background:
            'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.5) 48%, rgba(255,255,255,0.15) 52%, transparent 65%)',
          backgroundSize: '250% 250%',
          backgroundPosition: isHovered ? '20% 20%' : '90% 90%',
          transition: 'background-position 0.8s ease',
        }}
      />

      {/* cursor-follow glass glow */}
      <motion.div
        className='absolute inset-0 pointer-events-none mix-blend-soft-light rounded-[inherit]'
        style={{ background: shineBackground, opacity: isHovered ? 1 : 0, transition: 'opacity 0.4s ease' }}
      />
    </motion.div>
  )
}