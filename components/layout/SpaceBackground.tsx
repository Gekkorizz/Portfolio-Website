'use client'

import { useEffect, useRef } from 'react'

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    // Star configuration
    let stars: Array<{ x: number; y: number; radius: number; opacity: number; twinkleSpeed: number; phase: number }> = []
    const starCount = 150
    const centerStarsMax = 3 // Only 1-3 stars in the center

    const initStars = (width: number, height: number) => {
      stars = []
      let centerStarsCount = 0
      
      for (let i = 0; i < starCount; i++) {
        let x: number
        
        // Define center zone (middle 40% of width)
        const centerStart = width * 0.3
        const centerEnd = width * 0.7
        
        // Decide if this star goes in center or edges
        const shouldBeInCenter = centerStarsCount < centerStarsMax && Math.random() < 0.02
        
        if (shouldBeInCenter) {
          // Place in center zone
          x = centerStart + Math.random() * (centerEnd - centerStart)
          centerStarsCount++
        } else {
          // Place on left or right edge (30% on each side)
          if (Math.random() < 0.5) {
            // Left side (0% to 30%)
            x = Math.random() * (width * 0.3)
          } else {
            // Right side (70% to 100%)
            x = width * 0.7 + Math.random() * (width * 0.3)
          }
        }
        
        stars.push({
          x: x,
          y: Math.random() * height,
          radius: Math.random() * 0.6 + 0.2,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.015 + 0.003,
          phase: Math.random() * Math.PI * 2
        })
      }
    }

    // Set canvas size and regenerate stars on resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars(canvas.width, canvas.height)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationFrame: number
    let lastTime = 0
    const fps = 30 // Limit to 30fps for performance
    const interval = 1000 / fps

    const animate = (currentTime: number) => {
      animationFrame = requestAnimationFrame(animate)
      
      const deltaTime = currentTime - lastTime
      if (deltaTime < interval) return
      lastTime = currentTime - (deltaTime % interval)

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars with twinkling effect
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        star.phase += star.twinkleSpeed
        const twinkle = Math.sin(star.phase) * 0.4 + 0.6
        
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`
        ctx.fill()
      }
    }

    animate(0)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <>
      {/* Fixed gradient background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 40%, #000000 100%)',
        }}
      />
      
      {/* Animated stars layer */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      />
    </>
  )
}
