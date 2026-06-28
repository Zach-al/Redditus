'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface LiquidButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'brutal' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  withArrow?: boolean
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit'
}

export function LiquidButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  withArrow = false,
  onClick,
  href,
  type = 'button',
}: LiquidButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-brutal tracking-wider uppercase transition-all duration-300 cursor-pointer select-none'

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs gap-2',
    md: 'px-6 sm:px-8 py-3 sm:py-3.5 text-sm gap-2.5',
    lg: 'px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-base gap-3',
  }

  const variants = {
    primary:
      'bg-liquid-gradient bg-size-300 bg-[length:200%_200%] text-white hover:bg-right hover:shadow-liquid before:absolute before:inset-0 before:rounded-inherit before:bg-liquid-gradient before:bg-size-300 before:bg-[length:200%_200%] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 before:-z-10 before:blur-xl',
    secondary:
      'border-2 border-brutal-border text-foreground hover:bg-foreground hover:text-background brutal-shadow hover:brutal-shadow-lg',
    brutal:
      'bg-brutal-accent text-white font-bold brutal-shadow hover:brutal-shadow-lg hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
    ghost:
      'text-foreground/60 hover:text-foreground border border-transparent hover:border-brutal-border',
  }

  const btn = (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseStyles, sizeStyles[size], variants[variant], className)}
    >
      <motion.span
        className="relative z-10 flex items-center gap-2"
        whileHover={{ gap: variant === 'brutal' ? '0.75rem' : undefined }}
      >
        {children}
        {withArrow && (
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.span>
        )}
      </motion.span>
    </motion.button>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {btn}
      </a>
    )
  }

  return btn
}
