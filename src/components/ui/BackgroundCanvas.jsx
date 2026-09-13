import { useEffect, useRef } from 'react'

export default function BackgroundCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrame
    let width = 0
    let height = 0

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
    }

    const spacing = 28
    const interactionRadius = 140

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const handleMouseMove = (event) => {
      mouse.targetX = event.clientX
      mouse.targetY = event.clientY
    }

    const handleMouseLeave = () => {
      mouse.targetX = -1000
      mouse.targetY = -1000
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Smooth mouse movement
      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08

      for (let x = 0; x <= width; x += spacing) {
        for (let y = 0; y <= height; y += spacing) {
          const dx = mouse.x - x
          const dy = mouse.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)

          let opacity = 0.12
          let radius = 1

          if (distance < interactionRadius) {
            const strength = 1 - distance / interactionRadius

            opacity += strength * 0.25
            radius += strength * 1.2
          }

          // Alternate very subtly between sage and sky
          const useSage = (x / spacing + y / spacing) % 2 === 0
          const color = useSage
            ? `189, 221, 167`
            : `174, 211, 229`

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${color}, ${opacity})`
          ctx.fill()
        }
      }

      animationFrame = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}