'use client'

import { motion } from 'framer-motion'
import { LiquidBlob } from '@/components/LiquidBlob'
import { AnimatedText } from '@/components/AnimatedText'
import { RotateCcw } from 'lucide-react'

const sections = [
  {
    title: '1. No-Deposit Policy',
    content: 'Redditus does not charge any security deposit for AC rentals in Bhubaneswar. You only pay your first month\'s rent at the time of installation. This means there is no deposit to refund when you cancel your rental.',
  },
  {
    title: '2. Cooling-Off Period',
    content: 'If you cancel your rental within 7 days of installation, you will receive a full refund of the first month\'s rent, minus a nominal installation fee of ₹500. The AC unit must be returned in the same condition as installed.',
  },
  {
    title: '3. Early Cancellation Refund',
    content: 'If you cancel after the 7-day cooling-off period, you must provide a 30-day written notice. Any prepaid rent beyond the notice period will be refunded within 7 business days. No early termination fees apply.',
  },
  {
    title: '4. Service Refunds',
    content: 'If we fail to install your AC within 48 hours of the scheduled time, you are eligible for a 10% discount on your first month\'s rent. If we fail to resolve a reported issue within 24 hours, you may request a service credit.',
  },
  {
    title: '5. Refund Processing',
    content: 'All refunds are processed within 7-10 business days via the original payment method. UPI refunds are typically instant. Card refunds may take 3-5 business days to reflect. You will receive a confirmation once processed.',
  },
  {
    title: '6. Replacement Refunds',
    content: 'If your AC unit requires replacement and we cannot install a new unit within 48 hours, you will receive a prorated refund for the days without cooling. Refunds are calculated based on your daily rental rate.',
  },
  {
    title: '7. Non-Refundable Items',
    content: 'Installation accessories (mounting brackets, additional piping) are non-refundable. Any customization costs incurred at your request are non-refundable. Damage caused by negligence will be charged separately.',
  },
  {
    title: '8. How to Request a Refund',
    content: 'Email your refund request to hello@redditus.in with your customer ID and reason. Our team will respond within 24 hours. For urgent requests, call our support line. Refunds are processed within 7 business days of approval.',
  },
]

export default function RefundPolicy() {
  return (
    <>
      <LiquidBlob speed={0.5} opacity={0.3} />

      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-widest uppercase border border-brutal-border bg-brutal-border/10 mb-8"
          >
            <RotateCcw className="w-3.5 h-3.5 text-brutal-accent" />
            Policies
          </motion.div>

          <div className="max-w-3xl">
            <AnimatedText
              text="Refund Policy"
              as="h1"
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6"
              delay={0.3}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              Fair and transparent refund policies for all Redditus customers in Bhubaneswar.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-brutal-border/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-6 border border-brutal-border/50 bg-card/50"
          >
            <p className="text-sm text-muted-foreground font-mono">
              Last updated: June 2024 | Redditus — Bhubaneswar, Odisha
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
