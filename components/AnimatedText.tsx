'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  type?: 'word' | 'char' | 'line' | 'mask'
}

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
  }),
}

const wordVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)', rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    rotateX: 0,
    transition: { type: 'spring', damping: 15, stiffness: 200 },
  },
}

const charVariant = {
  hidden: { opacity: 0, y: 40, rotateX: -40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { type: 'spring', damping: 20, stiffness: 200 },
  },
}

const maskVariant = {
  hidden: { y: '100%', rotate: 3 },
  visible: {
    y: 0,
    rotate: 0,
    transition: { type: 'spring', damping: 20, stiffness: 200 },
  },
}

export function AnimatedText({
  text,
  className,
  once = true,
  delay = 0,
  as: Tag = 'h2',
  type = 'word',
}: AnimatedTextProps) {
  const words = text.split(' ')
  const chars = text.split('')

  if (type === 'mask') {
    return (
      <div className={cn('overflow-hidden', className)}>
        <Tag>
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
              <motion.span
                className="inline-block"
                variants={maskVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once, margin: '-50px' }}
                custom={delay}
                transition={{ delay: delay + i * 0.06, duration: 0.6 }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </Tag>
      </div>
    )
  }

  if (type === 'char') {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-50px' }}
        className={cn('inline-block', className)}
        custom={delay}
        aria-label={text}
      >
        <Tag className="inline">
          {chars.map((char, i) => (
            <motion.span key={i} variants={charVariant} className="inline-block">
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </Tag>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      className={cn('inline-block', className)}
      custom={delay}
      aria-label={text}
    >
      <Tag className="inline">
        {words.map((word, i) => (
          <motion.span key={i} variants={wordVariant} className="inline-block mr-[0.25em]">
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  once?: boolean
  delay?: number
  stagger?: number
}

export function StaggerChildren({
  children,
  className,
  once = true,
  delay = 0,
  stagger = 0.08,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-30px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: 'spring', damping: 20, stiffness: 200 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
