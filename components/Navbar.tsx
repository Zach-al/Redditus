'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { WhatsAppButton } from './WhatsAppButton'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled || open
            ? 'bg-background/80 backdrop-blur-xl border-b border-brutal-border/30 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-background/20 backdrop-blur-sm'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-20">
            <Link href="/" className="relative z-10 flex items-center gap-2 group">
              <motion.span
                className="font-brutal text-xl sm:text-3xl tracking-tighter text-foreground"
                whileHover={{ scale: 1.03 }}
              >
                REDDITUS
              </motion.span>
              <motion.span
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brutal-accent"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {links.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-mono tracking-wider uppercase transition-colors group',
                      isActive ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'
                    )}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                    >
                      {link.label}
                    </motion.span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-0 left-2 right-2 h-[1px] bg-brutal-accent"
                      />
                    )}
                    {!isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-[1px] bg-brutal-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    )}
                  </Link>
                )
              })}

              <Link href="/book" className="ml-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="inline-block px-5 py-2.5 text-xs font-brutal tracking-wider uppercase bg-brutal-accent text-white brutal-shadow hover:brutal-shadow-lg transition-all hover:brightness-110"
                >
                  Rent Now
                </motion.span>
              </Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative z-10 p-2 text-foreground"
              aria-label="Menu"
            >
              <motion.div
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-background/95 backdrop-blur-xl border-l border-brutal-border/30 pt-16 pb-8"
            >
              <div className="px-6 py-4 space-y-1 overflow-y-auto max-h-full">
                {links.map((link, i) => {
                  const isActive = pathname === link.href
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'block px-4 py-3 text-base font-mono tracking-wider uppercase transition-all border-b border-brutal-border/10',
                          isActive
                            ? 'text-brutal-accent bg-brutal-accent/5'
                            : 'text-foreground/70 hover:text-foreground hover:bg-brutal-accent/5'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  className="pt-4 space-y-2"
                >
                  <Link
                    href="/book"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3.5 text-center text-base font-brutal tracking-wider uppercase bg-brutal-accent text-white brutal-shadow hover:brutal-shadow-lg transition-all"
                  >
                    Rent Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <WhatsAppButton floating />
    </>
  )
}
