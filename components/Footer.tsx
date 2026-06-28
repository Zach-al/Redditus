'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ChevronUp, Snowflake } from 'lucide-react'
import Link from 'next/link'

const quickLinks = [
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

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-brutal-border/30 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brutal-accent/5 to-liquid-primary/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link href="/" className="inline-flex items-center gap-2 mb-4 sm:mb-6 group">
              <motion.span
                className="font-brutal text-2xl sm:text-3xl tracking-tighter"
                whileHover={{ scale: 1.03 }}
              >
                REDDITUS
              </motion.span>
              <motion.span
                className="w-2 h-2 rounded-full bg-brutal-accent"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 sm:mb-6">
              Premium AC rental services in Bhubaneswar. Free installation, maintenance & relocation.
              Comfort without commitment.
            </p>
            <div className="space-y-2.5 sm:space-y-3">
              {[
                { icon: Phone, text: '+91-9999999999' },
                { icon: Mail, text: 'hello@redditus.in' },
                { icon: MapPin, text: 'Bhubaneswar, Odisha' },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brutal-accent shrink-0" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-brutal text-xs sm:text-sm tracking-widest uppercase text-foreground mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono group"
                  >
                    <span className="text-brutal-accent opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span>{' '}
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-brutal text-xs sm:text-sm tracking-widest uppercase text-foreground mb-4 sm:mb-6">
              Policies
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {policyLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono group"
                  >
                    <span className="text-brutal-accent opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span>{' '}
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-brutal text-xs sm:text-sm tracking-widest uppercase text-foreground mb-4 sm:mb-6">
              Rent Now
            </h3>
            <p className="text-sm text-muted-foreground mb-4 sm:mb-6">
              Get your AC today. Starting at just ₹1,500/month.
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-brutal tracking-wider uppercase bg-brutal-accent text-white brutal-shadow hover:brutal-shadow-lg transition-all hover:brightness-110"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-brutal-border/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-muted-foreground font-mono text-center sm:text-left">
            &copy; {new Date().getFullYear()} REDDITUS. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
            Built with brute force
            <Snowflake className="w-3 h-3 text-brutal-accent" />
            liquid grace
          </p>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', damping: 12 }}
        className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-brutal-accent text-white brutal-shadow flex items-center justify-center hover:brutal-shadow-lg transition-all"
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
      </motion.button>
    </footer>
  )
}
