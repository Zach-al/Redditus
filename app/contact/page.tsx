'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Check, MessageSquare } from 'lucide-react'
import { LiquidBlob } from '@/components/LiquidBlob'
import { AnimatedText } from '@/components/AnimatedText'
import { LiquidButton } from '@/components/LiquidButton'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
            Get in Touch
          </motion.div>

          <div className="max-w-3xl">
            <AnimatedText
              text="Let&apos;s Talk About Your Cooling Needs"
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
              Ready to rent or have questions? We&apos;re here to help in Bhubaneswar. Reach out and
              we&apos;ll get back to you within 15 minutes.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 border-y border-brutal-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <AnimatedText
                text="Send Us a Message"
                as="h2"
                className="font-display text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
                type="mask"
              />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="p-6 sm:p-8 border-2 border-brutal-accent bg-card/50 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', damping: 12 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-brutal-accent/20 flex items-center justify-center"
                  >
                    <Check className="w-7 h-7 sm:w-8 sm:h-8 text-brutal-accent" />
                  </motion.div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">
                    We&apos;ll get back to you within 15 minutes.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-background border border-brutal-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-brutal-accent transition-all duration-300 font-mono text-sm"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-background border border-brutal-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-brutal-accent transition-all duration-300 font-mono text-sm"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hello@example.com"
                      className="w-full px-4 py-3 bg-background border border-brutal-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-brutal-accent transition-all duration-300 font-mono text-sm"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your cooling needs..."
                      className="w-full px-4 py-3 bg-background border border-brutal-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-brutal-accent transition-all duration-300 font-mono text-sm resize-none"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <LiquidButton variant="brutal" size="lg" type="submit" withArrow>
                      <Send className="w-4 h-4" />
                      Send Message
                    </LiquidButton>
                  </motion.div>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-8 sm:space-y-10"
            >
              <AnimatedText
                text="Contact Info"
                as="h2"
                className="font-display text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
                type="mask"
              />

              <div className="space-y-6 sm:space-y-8">
                {[
                  { icon: Phone, label: 'Phone', value: '+91-9999999999', desc: 'Available 24/7' },
                  { icon: Mail, label: 'Email', value: 'hello@redditus.in', desc: 'We reply within 15 min' },
                  { icon: MapPin, label: 'Location', value: 'Bhubaneswar, Odisha', desc: 'Serving all of Bhubaneswar' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, type: 'spring' }}
                    className="flex gap-4"
                  >
                    <motion.div
                      whileHover={{ rotate: -10, scale: 1.1 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center border border-brutal-border bg-background"
                    >
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brutal-accent" />
                    </motion.div>
                    <div>
                      <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="font-display text-base sm:text-lg font-bold">{item.value}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -3 }}
                className="p-5 sm:p-6 border border-brutal-border bg-card/50"
              >
                <MessageSquare className="w-5 h-5 text-brutal-accent mb-3" />
                <p className="text-xs font-mono tracking-widest uppercase text-brutal-accent mb-2">
                  Quick Response
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  We typically respond within 15 minutes during business hours
                  (9 AM — 10 PM, all 7 days) in Bhubaneswar.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
