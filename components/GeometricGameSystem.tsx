'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import type { ComponentType } from 'react'
import React from 'react'

// Game-style collision detection
function detectCollision(rect1: DOMRect, rect2: DOMRect): boolean {
  return !(rect1.left > rect2.right ||
           rect1.right < rect2.left ||
           rect1.top > rect2.bottom ||
           rect1.bottom < rect2.bottom)
}

// Game physics system
function calculateGravity(
  currentVelocity: number, 
  acceleration: number, 
  maxVelocity: number, 
  timeDelta: number = 1
): number {
  const newVelocity = currentVelocity + acceleration * timeDelta
  return Math.min(newVelocity, maxVelocity)
}

// Game-style color transitions
function getGameColorSet(phase: number, time: number): {
  primary: string
  secondary: string
  accent: string
} {
  const hueShift = (phase * 360 + time * 30) % 360
  return {
    primary: `hsl(${hueShift}, 85%, 50%)`,
    secondary: `hsl(${(hueShift + 120) % 360}, 85%, 45%)`,
    accent: `hsl(${(hueShift + 240) % 360}, 85%, 50%)`
  }
}

// Multiplayer game animation
export function GameIntroAnimation({ onComplete }: { onComplete?: () => void }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1500),
      setTimeout(() => setStep(3), 2500),
    ]

    if (onComplete) {
      setTimeout(() => onComplete(), 3000)
    }

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', damping: 15 }}
        >
          <h1 className="font-brutal text-6xl text-brutal-accent">REDDITUS</h1>
          <p className="text-xl text-muted-foreground">Premium AC Rentals - Bhubaneswar</p>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1, duration: 2, ease: 'easeInOut' }}
          className="h-1 bg-gradient-to-r from-brutal-accent via-liquid-secondary to-brutal-accent"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <p className="text-muted-foreground">Game Mode: Interactive Experience</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Game score system
export function ScoreDisplay({ score, maxScore, className }: {
  score: number
  maxScore: number
  className?: string
}) {
  const percentage = (score / maxScore) * 100

  return (
    <div className={cn('relative h-6 w-48 bg-muted/20 rounded-full overflow-hidden', className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute inset-0 bg-gradient-to-r from-brutal-accent to-liquid-secondary rounded-full"
      />
      <div className="absolute inset-0 flex items-center justify-center text-xs font-mono font-bold text-white">
        {score}/{maxScore} pts
      </div>
    </div>
  )
}

// Game achievement system
export function   AchievementBadge({
    unlocked,
    icon: Icon,
    title,
    description,
    rarity = 'common'
  }: {
    unlocked: boolean
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
    rarity?: 'common' | 'rare' | 'epic' | 'legendary'
  }) {
    const rarityColors = {
      common: 'border-muted/30 bg-muted/10 text-muted-foreground',
      rare: 'border-brutal-accent/50 bg-brutal-accent/10 text-brutal-accent',
      epic: 'border-liquid-primary/50 bg-liquid-primary/10 text-liquid-primary',
      legendary: 'border-yellow-500/50 bg-yellow-500/10 text-yellow-500'
    }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={cn(
        'p-4 rounded-lg border-2 transition-all duration-300',
        rarityColors[rarity],
        !unlocked && 'grayscale opacity-50'
      )}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-8 h-8" />
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-xs opacity-80">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Game leaderboard system
export function GameLeaderboard({ entries }: { entries: Array<{ name: string, score: number, rank: number }> }) {
  return (
    <div className="overflow-hidden rounded-lg border border-brutal-border">
      <div className="grid grid-cols-12 gap-4 p-4 bg-muted/10 border-b border-brutal-border font-mono text-sm">
        <div className="col-span-1 text-center">Rank</div>
        <div className="col-span-7">Player</div>
        <div className="col-span-4 text-right">Score</div>
      </div>

      {entries.map((entry, index) => (
        <motion.div
          key={entry.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`grid grid-cols-12 gap-4 p-4 border-b border-brutal-border/20 hover:bg-brutal-accent/10 transition-colors ${index === 0 ? 'bg-brutal-accent/5' : ''}`}
        >
          <div className="col-span-1 text-center">
            {entry.rank === 1 ? '👑' : entry.rank === 2 ? ' silver' : entry.rank === 3 ? ' bronze' : entry.rank}
          </div>
          <div className="col-span-7 font-mono">{entry.name}</div>
          <div className="col-span-4 text-right font-mono">{entry.score} pts</div>
        </motion.div>
      ))}
    </div>
  )
}

// Interactive game tutorial
export function GameTutorial({ 
  steps, 
  currentStep, 
  onStepChange
}: {
  steps: Array<{ title: string, content: string, action?: string }>
  currentStep: number
  onStepChange: (step: number) => void
}) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        {steps.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full ${index <= currentStep ? 'bg-brutal-accent' : 'bg-muted/30'} ${index > 0 ? 'ml-2' : ''}`}
            style={{ width: `${100 / steps.length}%` }}
          />
        ))}
      </div>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-2">{steps[currentStep].title}</h3>
        <p className="text-muted-foreground mb-4">{steps[currentStep].content}</p>
        {steps[currentStep].action && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onStepChange(currentStep + 1)}
            className="px-4 py-2 bg-brutal-accent text-white font-mono tracking-wider uppercase text-sm brutal-shadow hover:brutal-shadow-lg"
          >
            {steps[currentStep].action}
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}