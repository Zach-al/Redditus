'use client'

import { motion } from 'framer-motion'
import { LiquidBlob } from '@/components/LiquidBlob'
import { AnimatedText } from '@/components/AnimatedText'
import { XCircle } from 'lucide-react'

const sections = [
  {
    title: '1. Cancellation Policy Overview',
    content: 'Redditus offers flexible cancellation options for our AC rental services in Bhubaneswar. You may cancel your rental at any time with a 30-day written notice. No early termination fees are charged. Cancellation is hassle-free.',
  },
  {
    title: '2. How to Cancel',
    content: 'To cancel your rental, send a written notice via email to hello@redditus.in or through your customer portal. Include your customer ID and preferred cancellation date. Our team will confirm receipt within 24 hours.',
  },
  {
    title: '3. 30-Day Notice Period',
    content: 'Your cancellation takes effect 30 days from the date of notice. During this period, we will continue to provide full service including maintenance and support. This allows us to schedule pickup and reassign the unit.',
  },
  {
    title: '4. Early Cancellation (Within 7 Days)',
    content: 'If you cancel within 7 days of installation, you qualify for our cooling-off period refund. The AC will be picked up within 48 hours of your cancellation request. Only a nominal installation fee of ₹500 is deducted.',
  },
  {
    title: '5. Mid-Term Cancellation',
    content: 'If you cancel after 7 days but before completing your minimum 3-month commitment, standard cancellation applies with a 30-day notice period. Any prepaid rent beyond the notice period will be refunded.',
  },
  {
    title: '6. End-of-Term Cancellation',
    content: 'If you choose not to renew at the end of your rental term, no notice is required. Simply inform us 7 days before your term ends to schedule AC pickup. Continue enjoying service until your last paid day.',
  },
  {
    title: '7. Pickup Process',
    content: 'Our team will schedule a convenient time for AC dismantling and pickup. We handle all dismantling, packaging, and transport. The unit must be accessible. Normal wear and tear is acceptable.',
  },
  {
    title: '8. Upgrading vs. Cancelling',
    content: 'Instead of cancelling, consider upgrading to a different AC model or plan. Upgrades are processed within 48 hours with minimal adjustment to your monthly fee. Contact us to explore options before cancelling.',
  },
]

export default function CancellationPolicy() {
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
            <XCircle className="w-3.5 h-3.5 text-brutal-accent" />
            Policies
          </motion.div>

          <div className="max-w-3xl">
            <AnimatedText
              text="Cancellation Policy"
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
              Cancel your Redditus AC rental anytime in Bhubaneswar. No fees, no hassle, no questions asked.
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
