'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ChevronUp, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { BUSINESS, WHATSAPP_MESSAGE } from '@/lib/config'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
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

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link href="/" className="inline-flex items-center justify-center gap-2 mb-4 group">
            <motion.span
              className="font-brutal text-3xl sm:text-4xl tracking-tighter"
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
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-6">
            Premium AC rental services in {BUSINESS.city}. Free installation, maintenance & relocation.
            Comfort without commitment.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
            <motion.a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4 text-brutal-accent" />
              {BUSINESS.phoneDisplay}
            </motion.a>
            <motion.a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-2 hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4 text-brutal-accent" />
              {BUSINESS.email}
            </motion.a>
            <motion.span className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              <MapPin className="w-4 h-4 text-brutal-accent" />
              {BUSINESS.address}
            </motion.span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-brutal text-xs sm:text-sm tracking-widest uppercase text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-brutal text-xs sm:text-sm tracking-widest uppercase text-foreground mb-4">
              Policies
            </h3>
            <ul className="space-y-2">
              {policyLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-brutal text-xs sm:text-sm tracking-widest uppercase text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <motion.li className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-3.5 h-3.5 text-brutal-accent shrink-0" />
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-foreground transition-colors font-mono">
                  {BUSINESS.phoneDisplay}
                </a>
              </motion.li>
              <motion.li className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-3.5 h-3.5 text-brutal-accent shrink-0" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-foreground transition-colors font-mono">
                  {BUSINESS.email}
                </a>
              </motion.li>
              <motion.li className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-brutal-accent shrink-0" />
                <span className="font-mono">{BUSINESS.address}</span>
              </motion.li>
              <motion.li className="pt-3">
                <motion.a
                  href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-brutal tracking-wider uppercase bg-[#25D366] text-white brutal-shadow hover:brutal-shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-6 sm:pt-8 border-t border-brutal-border/20 flex flex-col items-center gap-2"
        >
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} REDDITUS. All rights reserved.
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-brutal-accent text-white brutal-shadow flex items-center justify-center hover:brutal-shadow-lg transition-all"
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronUp className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </footer>
  )
}
