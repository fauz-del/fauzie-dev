import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltPhotoCard({
  src,
  alt = '',
  className = '',
  maxRotation = 12,
  glowOpacity = 0.35,
}) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // tilt values, spring-smoothed so it feels weighty not jittery
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 15 })
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 15 })

  // cursor-follow glow position (percent within card)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
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

  const glowBackground = useTransform([glowX, glowY], ([gx, gy]) =>
    `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,${glowOpacity}), transparent 60%)`
  )

  return (
    // outer: handles drag + spring back to origin on release
    <motion.div
      drag
      dragElastic={0.15}
      dragConstraints={{ top: -20, bottom: 20, left: -20, right: 20 }}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 18 }}
      style={{ perspective: 1000 }}
      className={`cursor-grab active:cursor-grabbing ${className}`}
    >
      {/* inner: handles the 3D tilt, independent from drag transforms */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-3xl overflow-hidden shadow-2xl"
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="w-full h-full object-cover select-none pointer-events-none"
        />

        {/* laminated diagonal sheen — sweeps across on hover */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{
            background:
              'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.55) 48%, rgba(255,255,255,0.15) 52%, transparent 65%)',
            backgroundSize: '250% 250%',
            backgroundPosition: isHovered ? '20% 20%' : '90% 90%',
            transition: 'background-position 0.8s ease',
          }}
        />

        {/* cursor-follow glow, glass-like */}
        <motion.div
          className="absolute inset-0 pointer-events-none mix-blend-soft-light"
          style={{
            background: glowBackground,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />

        {/* laminate edge highlight */}
        <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none" />
      </motion.div>
    </motion.div>
  )
}