'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Bhuvan({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.05 }}
      className={cn('relative w-12 h-12 mx-auto mb-6', className)}
    >
      <div className="w-12 h-12 rounded-full border-2 border-brutal-accent bg-gradient-to-br from-brutal-accent/20 to-transparent flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-brutal-accent" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
          <path d="M9.5 9.5L14.5 14.5" />
          <path d="M14.5 9.5L9.5 14.5" />
        </svg>
      </div>
    </motion.div>
  )
}

export function Jagannath({ className }: { className?: string }) {
  return (
    <motion.div
      whileHover={{ rotate: 5, scale: 1.1 }}
      className={cn('absolute top-4 right-4 w-8 h-8', className)}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full text-brutal-accent/60" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8 7 5 10 5 14a7 7 0 0 0 14 0c0-4-3-7-7-12z" />
        <path d="M9 14h6" strokeLinecap="round" />
        <path d="M12 11v3" strokeLinecap="round" />
      </svg>
    </motion.div>
  )
}

export function SandArt({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -15 }}
      whileHover={{ opacity: 1, rotate: 0 }}
      className={cn('absolute bottom-4 left-4 w-10 h-10', className)}
    >
      <div className="w-full h-full border border-brutal-accent/30 rounded flex items-center justify-center bg-brutal-accent/5">
        <div className="w-4 h-4 border border-brutal-accent/40 rotate-45" />
        <div className="w-2 h-2 border border-brutal-accent/40 -ml-1 -mt-1" />
      </div>
    </motion.div>
  )
}

export function ITTower({ className }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      className={cn('absolute top-2 left-2 w-8 h-8', className)}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full text-brutal-accent/40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <rect x="8" y="6" width="8" height="12" />
        <rect x="12" y="2" width="2" height="4" />
      </svg>
    </motion.div>
  )
}

export function CulturalElements({ showBhuvan = true, showJagannath = true }: {
  showBhuvan?: boolean
  showJagannath?: boolean
}) {
  return (
    <div className="relative inline-block">
      <div className="relative w-12 h-12 rounded-full border-2 border-brutal-accent/50 bg-brutal-accent/5 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs font-mono text-brutal-accent"
        >
          BH
        </motion.div>

        {showBhuvan && <Bhuvan />}
        {showJagannath && <Jagannath />}
        {showJagannath && <SandArt />}
        {showBhuvan && <ITTower />}
      </div>
    </div>
  )
}