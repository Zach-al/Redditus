'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface LiquidBlobProps {
  className?: string
  color1?: string
  color2?: string
  color3?: string
  size?: number
  speed?: number
  opacity?: number
}

export function LiquidBlob({
  className,
  color1 = 'hsla(260, 80%, 55%, 0.15)',
  color2 = 'hsla(12, 100%, 50%, 0.1)',
  color3 = 'hsla(190, 90%, 45%, 0.12)',
  size = 600,
  speed = 1,
  opacity = 0.8,
}: LiquidBlobProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      if (!canvas || !ctx) return
      time += 0.002 * speed
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const blobs = [
        { x: 0.3, y: 0.3, r: size * 0.4, color: color1, phase: 0 },
        { x: 0.7, y: 0.6, r: size * 0.5, color: color2, phase: 2 },
        { x: 0.5, y: 0.8, r: size * 0.35, color: color3, phase: 4 },
        { x: 0.8, y: 0.2, r: size * 0.3, color: color1, phase: 1 },
        { x: 0.2, y: 0.7, r: size * 0.45, color: color3, phase: 3 },
      ]

      blobs.forEach((blob) => {
        const cx = canvas.width * blob.x + Math.sin(time + blob.phase) * canvas.width * 0.1
        const cy = canvas.height * blob.y + Math.cos(time * 0.8 + blob.phase) * canvas.height * 0.08

        ctx.beginPath()
        const points = 100
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2
          const r =
            blob.r +
            Math.sin(angle * 5 + time * 2 + blob.phase) * blob.r * 0.15 +
            Math.cos(angle * 3 + time * 1.5 + blob.phase) * blob.r * 0.1 +
            Math.sin(angle * 7 + time * 3 + blob.phase) * blob.r * 0.08

          const x = cx + Math.cos(angle) * r
          const y = cy + Math.sin(angle) * r

          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()

        ctx.fillStyle = blob.color
        ctx.fill()
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [color1, color2, color3, size, speed])

  return (
    <canvas
      ref={canvasRef}
      className={cn('pointer-events-none fixed inset-0 -z-10', className)}
      style={{ opacity }}
    />
  )
}
