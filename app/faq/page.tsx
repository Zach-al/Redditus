'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import { AnimatedText } from '@/components/AnimatedText'
import { LiquidButton } from '@/components/LiquidButton'

const faqs = [
  {
    q: 'How does AC rental work in Bhubaneswar?',
    a: 'You choose your AC plan, book online, and we install it within 24 hours. We serve all areas of Bhubaneswar, including PJ Smith Nagar, Unit 4, and Pharma City. Pay a fixed monthly fee that includes installation, maintenance, and support.',
  },
  {
    q: 'Is there a security deposit for AC rental in Bhubaneswar?',
    a: 'Yes, a refundable security deposit is required. The deposit amount depends on the AC model you choose and will be returned at the end of your rental term, subject to the condition of the unit.',
  },
  {
    q: 'What is the minimum rental period for AC rental in Bhubaneswar?',
    a: 'Our minimum rental period is 3 months. However, you can choose 6-month or 12-month plans for better rates.',
  },
  {
    q: 'Can I cancel my rental early in Bhubaneswar?',
    a: 'Yes. You can cancel anytime with a 30-day notice. No early termination fees.',
  },
  {
    q: 'What if the AC breaks down in Bhubaneswar?',
    a: 'We provide free maintenance and repairs. If we can\'t fix it within 24 hours, we replace the unit immediately at no extra cost.',
  },
  {
    q: 'Do you provide installation in Bhubaneswar?',
    a: 'Yes, professional installation is included for free. Our certified team handles mounting, electrical setup, and drainage within 24 hours of booking.',
  },
  {
    q: 'Can I relocate the AC within Bhubaneswar?',
    a: 'Yes! Free relocation within Bhubaneswar. We dismantle, transport, and reinstall your AC at your new place at no additional cost.',
  },
  {
    q: 'What areas in Bhubaneswar do you serve?',
    a: 'We currently serve all of Bhubaneswar including Unit 1, Unit 2, Unit 3, Unit 4 (Pharma City), Bhubaneswar Infrastructure City, and the Old Town area.',
  },
  {
    q: 'What type of ACs do you provide in Bhubaneswar?',
    a: 'All our units are 5-star inverter split ACs from top brands. We offer 1 Ton, 1.5 Ton, and 2 Ton options.',
  },
  {
    q: 'Do I need to pay for maintenance for my AC rental in Bhubaneswar?',
    a: 'No. All maintenance, filter cleaning, gas top-ups, and repairs are included in your monthly rental at no extra cost.',
  },
  {
    q: 'How do I pay my monthly rent for AC rental in Bhubaneswar?',
    a: 'We accept all major payment methods including UPI, credit/debit cards, net banking, and auto-debit. Payments are processed securely via Razorpay.',
  },
  {
    q: 'What if I want to upgrade my AC in Bhubaneswar?',
    a: 'You can upgrade to a larger or newer model anytime. We\'ll handle the swap within 48 hours with minimal adjustment to your monthly fee.',
  },
]

const LiquidBlob = dynamic(() => import('@/components/LiquidBlob').then((m) => ({ default: m.LiquidBlob })), { ssr: false })

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <LiquidBlob speed={0.6} opacity={0.4} />

      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-widest uppercase border border-brutal-border bg-brutal-border/10 mb-8"
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-brutal-accent"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            FAQ
          </motion.div>

          <div className="max-w-3xl">
            <AnimatedText
              text="Frequently Asked Questions"
              as="h1"
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] mb-6"
              delay={0.3}
              type="mask"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Everything you need to know about renting an AC in Bhubaneswar.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 border-y border-brutal-border/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="border border-brutal-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left hover:bg-card/50 transition-colors"
                >
                  <span className="font-display text-sm sm:text-base lg:text-lg font-bold pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 45 : 0, backgroundColor: openIndex === i ? 'rgba(255, 107, 53, 0.2)' : 'transparent' }}
                    transition={{ duration: 0.2 }}
                    className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center border border-brutal-border"
                  >
                    <Plus className="w-3.5 h-3.5 text-brutal-accent" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="px-4 sm:px-6 pb-4 sm:pb-5"
                      >
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText
            text="Still Have Questions?"
            as="h2"
            className="font-display text-3xl sm:text-4xl sm:text-5xl font-bold mb-6"
            type="mask"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground mb-10 text-sm sm:text-base"
          >
            We&apos;re happy to answer any questions about AC rental in Bhubaneswar. Reach out and we&apos;ll get back within 15 minutes.
          </motion.p>
          <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', damping: 10 }}>
            <LiquidButton variant="brutal" size="lg" withArrow href="/contact">
              Contact Us
            </LiquidButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
