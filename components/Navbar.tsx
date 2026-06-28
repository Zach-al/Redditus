'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
]

const policyLinks = [
  { href: '/terms', label: 'Terms of Service' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/refund-policy', label: 'Refund Policy' },
  { href: '/cancellation-policy', label: 'Cancellation Policy' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [policiesOpen, setPoliciesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
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

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-background/70 backdrop-blur-xl border-b border-brutal-border/30 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-background/30 backdrop-blur-md'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="relative z-10 flex items-center gap-2 group">
              <motion.span
                className="font-brutal text-2xl sm:text-3xl tracking-tighter text-foreground"
                whileHover={{ scale: 1.03 }}
              >
                REDDITUS
              </motion.span>
              <motion.span
                className="w-2 h-2 rounded-full bg-brutal-accent"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {links.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-mono tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors group"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                  >
                    {link.label}
                  </motion.span>
                  <span className="absolute bottom-0 left-2 right-2 h-[1px] bg-brutal-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}

              <div className="relative">
                <button
                  onClick={() => setPoliciesOpen(!policiesOpen)}
                  onMouseEnter={() => setPoliciesOpen(true)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-mono tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors group"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    Policies
                  </motion.span>
                  <motion.div
                    animate={{ rotate: policiesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-3 h-3" />
                  </motion.div>
                  <span className="absolute bottom-0 left-2 right-2 h-[1px] bg-brutal-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
                <AnimatePresence>
                  {policiesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      onMouseLeave={() => setPoliciesOpen(false)}
                      className="absolute top-full right-0 mt-2 w-56 bg-background/90 backdrop-blur-xl border border-brutal-border/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden"
                    >
                      {policyLinks.map((link, i) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setPoliciesOpen(false)}
                          className="block px-5 py-3 text-xs font-mono tracking-wider uppercase text-foreground/70 hover:text-foreground hover:bg-brutal-accent/10 transition-all border-b border-brutal-border/10 last:border-0"
                        >
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.03 }}
                          >
                            {link.label}
                          </motion.span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className="ml-4"
              >
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
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-background/95 backdrop-blur-xl border-l border-brutal-border/30 pt-24 pb-8"
            >
              <div className="px-6 py-4 space-y-2 overflow-y-auto max-h-full">
                {[...links, ...policyLinks].map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3.5 text-base font-mono tracking-wider uppercase text-foreground/70 hover:text-foreground hover:bg-brutal-accent/10 transition-all border-b border-brutal-border/10"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
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
    </>
  )
}
