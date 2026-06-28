'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AcUnitProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animate?: boolean
  showAir?: boolean
  temperature?: number
  wallColor?: string
}

const sizes = {
  sm: { w: 120, h: 80 },
  md: { w: 180, h: 120 },
  lg: { w: 260, h: 170 },
  xl: { w: 400, h: 260 },
}

export function AcUnit({
  className,
  size = 'lg',
  animate = true,
  showAir = true,
  temperature = 18,
}: AcUnitProps) {
  const { w, h } = sizes[size]

  const airVariants = {
    animate: {
      opacity: [0.6, 0.2, 0.6],
      scaleY: [1, 1.3, 1],
      transition: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' },
    },
  }

  const particleVariants = {
    animate: (i: number) => ({
      y: [0, -40 - i * 10],
      x: [0, (i % 2 === 0 ? 10 : -10)],
      opacity: [0.7, 0],
      transition: { repeat: Infinity, duration: 2 + i * 0.3, delay: i * 0.2, ease: 'easeOut' },
    }),
  }

  return (
    <motion.div
      className={cn('relative', className)}
      whileHover={animate ? { scale: 1.03 } : undefined}
      transition={{ type: 'spring', damping: 15 }}
    >
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width={w}
        height={h}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="ac-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <linearGradient id="ac-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="100%" stopColor="#252525" />
          </linearGradient>
          <linearGradient id="ac-vent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0f0f0f" />
          </linearGradient>
          <linearGradient id="air-glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(100, 200, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(100, 200, 255, 0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="air-blur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Wall shadow */}
        <rect
          x={w * 0.02}
          y={h * 0.15}
          width={w * 0.96}
          height={h * 0.6}
          rx={4}
          fill="rgba(0,0,0,0.3)"
          filter="url(#glow)"
        />

        {/* AC Body - Main unit */}
        <rect
          x={0}
          y={h * 0.12}
          width={w}
          height={h * 0.62}
          rx={6}
          fill="url(#ac-body)"
          stroke="#4a4a4a"
          strokeWidth={1}
        />

        {/* Top accent line */}
        <rect
          x={w * 0.05}
          y={h * 0.15}
          width={w * 0.9}
          height={2}
          rx={1}
          fill="#FF6B35"
          opacity={0.6}
        />

        {/* Front panel */}
        <rect
          x={w * 0.05}
          y={h * 0.2}
          width={w * 0.9}
          height={h * 0.45}
          rx={3}
          fill="url(#ac-front)"
          stroke="#555"
          strokeWidth={0.5}
        />

        {/* LED Display */}
        <motion.g
          animate={animate ? { opacity: [0.8, 1, 0.8] } : undefined}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <rect
            x={w * 0.65}
            y={h * 0.22}
            width={w * 0.22}
            height={h * 0.1}
            rx={2}
            fill="#0a0a0a"
            stroke="#333"
            strokeWidth={0.5}
          />
          <text
            x={w * 0.76}
            y={h * 0.3}
            textAnchor="middle"
            fill="#00ff88"
            fontFamily="monospace"
            fontSize={h * 0.06}
            fontWeight="bold"
          >
            {temperature}°
          </text>
        </motion.g>

        {/* Brand */}
        <text
          x={w * 0.2}
          y={h * 0.3}
          textAnchor="middle"
          fill="#666"
          fontFamily="monospace"
          fontSize={h * 0.035}
          letterSpacing="2"
        >
          REDDITUS
        </text>

        {/* Air vent - top louver */}
        <rect
          x={w * 0.08}
          y={h * 0.38}
          width={w * 0.84}
          height={h * 0.04}
          rx={1}
          fill="url(#ac-vent)"
        />

        {/* Vent slats */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.rect
            key={i}
            x={w * 0.08 + i * (w * 0.17)}
            y={h * 0.44}
            width={w * 0.15}
            height={h * 0.02}
            rx={1}
            fill="#1a1a1a"
            stroke="#333"
            strokeWidth={0.3}
            animate={animate ? { opacity: [0.6, 1, 0.6] } : undefined}
            transition={{ repeat: Infinity, duration: 2 + i * 0.3, delay: i * 0.15 }}
          />
        ))}

        {/* Bottom vent */}
        <rect
          x={w * 0.1}
          y={h * 0.5}
          width={w * 0.8}
          height={h * 0.12}
          rx={2}
          fill="#111"
          stroke="#333"
          strokeWidth={0.3}
        />

        {/* Bottom vent horizontal lines */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={w * 0.12}
            y1={h * 0.53 + i * (h * 0.025)}
            x2={w * 0.88}
            y2={h * 0.53 + i * (h * 0.025)}
            stroke="#2a2a2a"
            strokeWidth={0.5}
          />
        ))}

        {/* Air glow effect */}
        {showAir && (
          <motion.rect
            x={w * 0.15}
            y={h * 0.65}
            width={w * 0.7}
            height={h * 0.25}
            rx={10}
            fill="url(#air-glow)"
            filter="url(#air-blur)"
            variants={airVariants}
            animate="animate"
          />
        )}

        {/* Cooling particles */}
        {showAir &&
          [0, 1, 2, 3, 4, 5].map((i) => (
            <motion.circle
              key={i}
              cx={w * (0.25 + i * 0.12)}
              cy={h * 0.72}
              r={2 + (i % 2)}
              fill="rgba(150, 220, 255, 0.6)"
              custom={i}
              variants={particleVariants}
              animate="animate"
              filter="url(#glow)"
            />
          ))}

        {/* Ice crystal particles */}
        {showAir &&
          [0, 1, 2].map((i) => (
            <motion.rect
              key={i + 10}
              x={w * (0.3 + i * 0.2)}
              y={h * 0.68}
              width={3}
              height={3}
              rx={0.5}
              fill="rgba(200, 240, 255, 0.5)"
              style={{ rotate: 45 }}
              custom={i + 5}
              variants={particleVariants}
              animate="animate"
            />
          ))}

        {/* Power indicator */}
        <motion.circle
          cx={w * 0.08}
          cy={h * 0.25}
          r={3}
          fill="#00ff88"
          animate={animate ? { opacity: [0.5, 1, 0.5] } : undefined}
          transition={{ repeat: Infinity, duration: 1.5 }}
          filter="url(#glow)"
        />

        {/* Right side decorative elements */}
        <rect
          x={w * 0.92}
          y={h * 0.35}
          width={w * 0.04}
          height={h * 0.15}
          rx={1}
          fill="#333"
        />

        {/* Connection pipes */}
        <line
          x1={w * 0.95}
          y1={h * 0.35}
          x2={w * 1.02}
          y2={h * 0.25}
          stroke="#444"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <line
          x1={w * 0.95}
          y1={h * 0.4}
          x2={w * 1.02}
          y2={h * 0.28}
          stroke="#555"
          strokeWidth={1.5}
          strokeLinecap="round"
        />

        {/* Bottom shadow */}
        <rect
          x={w * 0.05}
          y={h * 0.74}
          width={w * 0.9}
          height={h * 0.02}
          rx={1}
          fill="rgba(0,0,0,0.2)"
        />
      </svg>
    </motion.div>
  )
}

export function AcUnitWall({
  className,
  size = 'lg',
  animate = true,
  temperature = 18,
}: AcUnitProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Wall background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-lg border border-brutal-border/20" />

      {/* Wall texture lines */}
      <div className="absolute inset-4 opacity-10">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-full h-[1px] bg-white/20"
            style={{ marginTop: `${i * 20}%` }}
          />
        ))}
      </div>

      {/* AC Unit centered on wall */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <AcUnit size={size} animate={animate} temperature={temperature} />
      </div>

      {/* Wall mount brackets */}
      <div className="absolute bottom-[15%] left-[25%] w-[6px] h-[20px] bg-[#444] rounded-t-full" />
      <div className="absolute bottom-[15%] right-[25%] w-[6px] h-[20px] bg-[#444] rounded-t-full" />
    </div>
  )
}
