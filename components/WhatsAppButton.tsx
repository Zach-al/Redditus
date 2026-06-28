'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { BUSINESS, WHATSAPP_MESSAGE } from '@/lib/config'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  className?: string
  message?: string
  floating?: boolean
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

export function WhatsAppButton({
  className,
  message = WHATSAPP_MESSAGE,
  floating = false,
  label,
  size = 'md',
}: WhatsAppButtonProps) {
  const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-2',
    md: 'px-6 py-3 text-sm gap-2.5',
    lg: 'px-8 py-4 text-base gap-3',
  }

  const btn = (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'inline-flex items-center justify-center font-brutal tracking-wider uppercase transition-all',
        'bg-[#25D366] text-white brutal-shadow hover:brutal-shadow-lg hover:brightness-110',
        sizeClasses[size],
        floating && 'shadow-[0_8px_30px_rgba(37,211,102,0.4)]',
        className
      )}
    >
      <MessageCircle className={cn(size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5')} />
      {label || `Chat on WhatsApp`}
    </motion.a>
  )

  if (floating) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-full brutal-shadow hover:brutal-shadow-lg transition-all shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-brutal text-sm tracking-wider uppercase hidden sm:inline">Chat with us</span>
        </motion.a>
      </motion.div>
    )
  }

  return btn
}
