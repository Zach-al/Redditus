'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Check, MessageCircle } from 'lucide-react'
import { LiquidBlob } from '@/components/LiquidBlob'
import { AnimatedText } from '@/components/AnimatedText'
import { LiquidButton } from '@/components/LiquidButton'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { BUSINESS, WHATSAPP_MESSAGE } from '@/lib/config'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const waMsg = encodeURIComponent(
      `Hi Redditus! I'm ${form.name}.%0A%0A${form.message}%0A%0APhone: ${form.phone}%0AEmail: ${form.email}`
    )
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${waMsg}`, '_blank')
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
              Ready to rent or have questions? We&apos;re here to help in {BUSINESS.city}. Reach out and
              we&apos;ll get back to you within {BUSINESS.responseTime}.
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
                  <p className="text-muted-foreground text-sm mb-4">
                    We&apos;ll get back to you on WhatsApp within {BUSINESS.responseTime}.
                  </p>
                  <WhatsAppButton size="sm" label="Chat with us now" />
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
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your cooling needs..."
                      className="w-full px-4 py-3 bg-background border border-brutal-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-brutal-accent transition-all duration-300 font-mono text-sm resize-none"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap gap-3"
                  >
                    <LiquidButton variant="brutal" size="lg" type="submit" withArrow>
                      <Send className="w-4 h-4" />
                      Send via WhatsApp
                    </LiquidButton>
                    <WhatsAppButton size="md" label="Chat directly" />
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
                  { icon: Phone, label: 'Phone', value: BUSINESS.phoneDisplay, desc: `Available ${BUSINESS.businessHours}`, href: `tel:${BUSINESS.phone}` },
                  { icon: Mail, label: 'Email', value: BUSINESS.email, desc: `We reply within ${BUSINESS.responseTime}`, href: `mailto:${BUSINESS.email}` },
                  { icon: MapPin, label: 'Location', value: BUSINESS.address, desc: `Serving all of ${BUSINESS.city}` },
                  { icon: MessageCircle, label: 'WhatsApp', value: BUSINESS.phoneDisplay, desc: 'Instant replies', href: `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}` },
                ].map((item, i) => {
                  const Wrapper = item.href ? 'a' : 'div'
                  const wrapperProps = item.href ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {}
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, type: 'spring' }}
                    >
                      <Wrapper
                        {...wrapperProps}
                        className="flex gap-4 group"
                      >
                        <motion.div
                          whileHover={{ rotate: -10, scale: 1.1 }}
                          className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center border border-brutal-border bg-background group-hover:border-brutal-accent transition-colors"
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
                      </Wrapper>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -3 }}
                className="p-5 sm:p-6 border border-brutal-border bg-card/50"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] mb-3" />
                <p className="text-xs font-mono tracking-widest uppercase text-brutal-accent mb-2">
                  WhatsApp Available
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  Chat with us instantly on WhatsApp. We typically respond within {BUSINESS.responseTime} during
                  {BUSINESS.businessHours}.
                </p>
                <WhatsAppButton size="sm" label="Start Chat" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
