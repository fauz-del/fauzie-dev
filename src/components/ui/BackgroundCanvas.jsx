import React, { useEffect, useRef } from 'react'

export default function BackgroundCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // smoothed mouse position — lerped so the grid reacts with a bit of lag/ease
    let mouseX = -1000
    let mouseY = -1000
    let targetX = -1000
    let targetY = -1000

    const handleMouseMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    const handleMouseLeave = () => {
      targetX = -1000
      targetY = -1000
    }
    window.addEventListener('mouseleave', handleMouseLeave)

    const spacing = 10
    const maxDist = 120

    const draw = () => {
    
      mouseX += (targetX - mouseX) * 0.15
      mouseY += (targetY - mouseY) * 0.15

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cols = Math.ceil(canvas.width / spacing) + 1
      const rows = Math.ceil(canvas.height / spacing) + 1

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing
          const y = j * spacing
          const dx = mouseX - x
          const dy = mouseY - y
          const dist = Math.sqrt(dx * dx + dy * dy)

          let radius = 1
         
          const blue = { r: 56, g: 189, b: 248 }
          const gold = { r: 244, g: 162, b: 97 }
          const blendR = Math.round(blue.r * 0.7 + gold.r * 0.3)
          const blendG = Math.round(blue.g * 0.7 + gold.g * 0.3)
          const blendB = Math.round(blue.b * 0.7 + gold.b * 0.3)

          let r = blendR, g = blendG, b = blendB   
          let alpha = 0.25

          if (dist < maxDist) {
            const factor = 1 - dist / maxDist
            radius = 1 + factor * 4.5
            alpha = 0.25 + factor * 0.55
 
          }
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
          ctx.fill()
        }
      }
      animationFrameId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}