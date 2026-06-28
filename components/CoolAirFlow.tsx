'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/lib/useReducedMotion'

interface CoolAirFlowProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
  color?: string
}

export function CoolAirFlow({ className, intensity = 'medium', color = 'rgba(100, 200, 255, 0.15)' }: CoolAirFlowProps) {
  const reduced = useReducedMotion()
  const particles = reduced ? 0 : intensity === 'high' ? 20 : intensity === 'medium' ? 12 : 6

  if (reduced) return null

  return (
    <div className={cn('absolute inset-0 pointer-events-none overflow-hidden', className)}>
      {Array.from({ length: particles }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 2 + (i % 3) * 2,
            height: 2 + (i % 3) * 2,
            borderRadius: '50%',
            background: color,
            left: `${20 + (i * 5) % 60}%`,
            top: '40%',
            filter: 'blur(1px)',
          }}
          animate={{
            y: [0, -80 - (i % 4) * 40],
            x: [0, (i % 2 === 0 ? 30 : -30)],
            opacity: [0.6, 0, 0.6],
            scale: [1, 0.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + (i % 3) * 1.5,
            delay: i * 0.25,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

export function AnimatedThermometer({ className }: { className?: string }) {
  const reduced = useReducedMotion()
  const [temp, setTemp] = useState(18)

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1
        const next = prev + change
        if (next < 16 || next > 26) return prev
        return next
      })
    }, reduced ? 10000 : 3000)
    return () => clearInterval(interval)
  }, [reduced])

  return (
    <motion.div
      className={cn('flex flex-col items-center gap-1', className)}
      initial={reduced ? undefined : { opacity: 0 }}
      whileInView={reduced ? undefined : { opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="relative w-8 h-32 sm:w-10 sm:h-40 rounded-full border-2 border-brutal-border bg-card overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brutal-accent via-liquid-primary to-cyan-400"
          animate={{ height: `${((temp - 16) / 10) * 100}%` }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] sm:text-xs font-bold font-mono text-white drop-shadow-lg">
            {temp}°
          </span>
        </div>
      </div>
      <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase">
        Cool
      </span>
    </motion.div>
  )
}

export function TemperatureBadge({ className }: { className?: string }) {
  const reduced = useReducedMotion()
  const [temp, setTemp] = useState(18)

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp((prev) => {
        const change = Math.random() > 0.5 ? 0.5 : -0.5
        const next = prev + change
        if (next < 16 || next > 26) return prev
        return Math.round(next * 2) / 2
      })
    }, reduced ? 10000 : 2000)
    return () => clearInterval(interval)
  }, [reduced])

  return (
    <motion.div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 bg-background/80 backdrop-blur-md border border-brutal-border/50 rounded',
        className
      )}
      {...(reduced ? {} : { whileHover: { scale: 1.05 } })}
    >
      <motion.div
        key={temp}
        initial={reduced ? undefined : { y: -10, opacity: 0 }}
        animate={reduced ? undefined : { y: 0, opacity: 1 }}
        className="flex items-center gap-1"
      >
        <span className="text-brutal-accent text-sm">❄</span>
        <span className="font-display text-lg font-bold text-foreground">{temp}°</span>
        <span className="text-xs text-muted-foreground font-mono">C</span>
      </motion.div>
    </motion.div>
  )
}

export function AcRemote({ className }: { className?: string }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={cn(
        'relative w-14 h-28 sm:w-16 sm:h-32 rounded-lg border-2 border-brutal-border bg-card p-1.5 flex flex-col items-center gap-1',
        className
      )}
      initial={reduced ? undefined : { opacity: 0, x: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true }}
      {...(reduced ? {} : { whileHover: { y: -5, rotate: -2 } })}
      transition={{ type: 'spring', damping: 15 }}
    >
      <div className="w-4 h-4 rounded-full bg-brutal-accent/20 flex items-center justify-center">
        <motion.div
          className="w-2 h-2 rounded-full bg-brutal-accent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </div>
      <div className="w-full h-8 bg-background border border-brutal-border/30 rounded flex items-center justify-center">
        <motion.span
          className="text-[8px] font-mono font-bold text-cyan-400"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          18°
        </motion.span>
      </div>
      {['+', '-', '⏻'].map((btn, i) => (
        <motion.div
          key={btn}
          className="w-5 h-5 rounded border border-brutal-border/30 bg-background flex items-center justify-center text-[8px] text-muted-foreground cursor-pointer"
          whileHover={{ scale: 1.2, backgroundColor: 'rgba(255,107,53,0.2)' }}
          whileTap={{ scale: 0.9 }}
        >
          {btn}
        </motion.div>
      ))}
    </motion.div>
  )
}
