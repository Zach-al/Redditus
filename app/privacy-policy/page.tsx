'use client'

import { motion } from 'framer-motion'
import { LiquidBlob } from '@/components/LiquidBlob'
import { AnimatedText } from '@/components/AnimatedText'
import { Lock } from 'lucide-react'

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect information you provide directly: name, phone number, email address, and delivery address in Bhubaneswar. We also collect usage data including service requests, payment history, and communication preferences to improve your experience.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'Your information is used to provide and improve our AC rental services, process payments, send service updates, respond to inquiries, and personalize your experience. We may use your contact information for service-related communications.',
  },
  {
    title: '3. Data Protection',
    content: 'We implement industry-standard security measures including encryption, secure servers, and access controls. Your payment information is processed securely through Razorpay and is never stored on our servers. We regularly review our security practices.',
  },
  {
    title: '4. Information Sharing',
    content: 'We do not sell your personal information. We may share data with trusted service partners (installation teams, payment processors) who are bound by confidentiality agreements. We may disclose information if required by law.',
  },
  {
    title: '5. Your Rights',
    content: 'You have the right to access, update, or delete your personal information. You can opt out of marketing communications anytime. Contact us at hello@redditus.in to exercise your rights. We respond to all requests within 48 hours.',
  },
  {
    title: '6. Cookies',
    content: 'Our website uses essential cookies for functionality and analytics cookies to improve performance. You can control cookie preferences through your browser settings. We do not use tracking cookies for advertising purposes.',
  },
  {
    title: '7. Third-Party Services',
    content: 'Our website may link to third-party services (payment gateways, maps). These services have their own privacy policies. Redditus is not responsible for the privacy practices of third-party services.',
  },
  {
    title: '8. Contact Us',
    content: 'For privacy-related inquiries, contact our Data Protection Officer at hello@redditus.in or visit us in Bhubaneswar. We are committed to resolving any concerns about your data privacy promptly.',
  },
]

export default function PrivacyPolicy() {
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
            <Lock className="w-3.5 h-3.5 text-brutal-accent" />
            Policies
          </motion.div>

          <div className="max-w-3xl">
            <AnimatedText
              text="Privacy Policy"
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
              Your privacy matters to us. This policy explains how Redditus handles your data in Bhubaneswar.
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
