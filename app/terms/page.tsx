'use client'

import { motion } from 'framer-motion'
import { LiquidBlob } from '@/components/LiquidBlob'
import { AnimatedText } from '@/components/AnimatedText'
import { Shield } from 'lucide-react'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing or using Redditus services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services. These terms apply to all visitors, users, and customers of Redditus in Bhubaneswar.',
  },
  {
    title: '2. Service Description',
    content: 'Redditus provides premium split AC rental services in Bhubaneswar, Odisha. Our services include installation, maintenance, relocation, and customer support as outlined in your chosen rental plan. All services are subject to availability and service area restrictions.',
  },
  {
    title: '3. Rental Agreement',
    content: 'The rental agreement begins on the installation date and continues for the chosen duration (minimum 3 months). Customers may extend or upgrade their plan subject to availability. A 30-day written notice is required for cancellation.',
  },
  {
    title: '4. Payment Terms',
    content: 'Monthly rental fees are due on the installation date each month. Payments can be made via UPI, credit/debit cards, net banking, or auto-debit. Late payments may result in a grace period of 5 days, after which service suspension may apply.',
  },
  {
    title: '5. Installation & Maintenance',
    content: 'Redditus handles professional installation within 24 hours of booking. Regular maintenance, filter cleaning, and gas top-ups are included. Customers must provide reasonable access to the AC unit for maintenance purposes.',
  },
  {
    title: '6. Customer Responsibilities',
    content: 'Customers must ensure the installation site has appropriate electrical connections and drainage. Any damage caused by negligence, misuse, or unauthorized repairs will be charged to the customer. Customers must report issues promptly.',
  },
  {
    title: '7. Limitation of Liability',
    content: 'Redditus is not liable for indirect damages including loss of cooling, business interruption, or inconvenience. Our maximum liability is limited to the monthly rental fee paid. We recommend customers maintain appropriate insurance.',
  },
  {
    title: '8. Modifications',
    content: 'Redditus reserves the right to modify these terms at any time. Customers will be notified of material changes via email or SMS. Continued use of services after changes constitutes acceptance of updated terms.',
  },
]

export default function Terms() {
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
            <Shield className="w-3.5 h-3.5 text-brutal-accent" />
            Policies
          </motion.div>

          <div className="max-w-3xl">
            <AnimatedText
              text="Terms of Service"
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
              These terms govern your use of Redditus AC rental services in Bhubaneswar. Please read them carefully.
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
