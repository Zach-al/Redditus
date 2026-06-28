'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Snowflake, Shield, HeadphonesIcon, Truck } from 'lucide-react'
import { LiquidBlob } from '@/components/LiquidBlob'
import { AnimatedText } from '@/components/AnimatedText'
import { LiquidButton } from '@/components/LiquidButton'
import { BookingModal } from '@/components/BookingModal'
import { AC_TYPES, PLANS, FEATURES } from '@/lib/config'
import { calculateAmount } from '@/lib/razorpay'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function Book() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedAC, setSelectedAC] = useState('1.5ton')
  const [selectedPlan, setSelectedPlan] = useState('6months')

  const ac = AC_TYPES.find((a) => a.id === selectedAC)!
  const plan = PLANS.find((p) => p.id === selectedPlan)!
  const total = calculateAmount(ac.price, plan.duration, plan.discount)

  const benefits = [
    { icon: Snowflake, label: '5-Star Inverter AC' },
    { icon: Shield, label: 'Free Maintenance' },
    { icon: Truck, label: 'Free Relocation' },
    { icon: HeadphonesIcon, label: '24/7 Support' },
  ]

  return (
    <>
      <LiquidBlob speed={0.6} opacity={0.4} />
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />

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
            Book Now
          </motion.div>

          <div className="max-w-3xl">
            <AnimatedText
              text="Rent Your AC Today"
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
              No deposit. Free installation in 24 hours. Choose your AC and plan below.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 border-t border-brutal-border/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-8">
              <div>
                <label className="block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">
                  Step 1: Choose Your AC
                </label>
                <div className="grid gap-3">
                  {AC_TYPES.map((ac) => (
                    <motion.button
                      key={ac.id}
                      onClick={() => setSelectedAC(ac.id)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`w-full text-left px-5 py-4 border-2 transition-all ${
                        selectedAC === ac.id
                          ? 'border-brutal-accent bg-brutal-accent/10'
                          : 'border-brutal-border/30 hover:border-brutal-border bg-card/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-display font-bold text-lg block">{ac.label}</span>
                          <span className="text-sm text-muted-foreground font-mono">{ac.room}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-display text-2xl font-bold">₹{ac.price}</span>
                          <span className="text-xs text-muted-foreground font-mono ml-1">/mo</span>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">
                  Step 2: Choose Your Plan
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {PLANS.map((plan) => (
                    <motion.button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative px-4 py-5 border-2 text-center transition-all ${
                        selectedPlan === plan.id
                          ? 'border-brutal-accent bg-brutal-accent/10'
                          : 'border-brutal-border/30 hover:border-brutal-border bg-card/30'
                      }`}
                    >
                      {plan.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-brutal-accent text-white px-3 py-0.5 uppercase tracking-wider whitespace-nowrap">
                          Best Value
                        </span>
                      )}
                      <span className="font-display text-3xl font-bold block">{plan.duration}</span>
                      <span className="text-xs text-muted-foreground font-mono block">Months</span>
                      {plan.discount > 0 && (
                        <span className="text-xs text-brutal-accent font-bold font-mono block mt-1">
                          Save {plan.discount}%
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="sticky top-28 border-2 border-brutal-accent bg-card/50 p-6 space-y-5"
              >
                <h3 className="font-display text-xl font-bold">Booking Summary</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AC Type</span>
                    <span className="font-bold">{ac.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Plan</span>
                    <span className="font-bold">{plan.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monthly Rent</span>
                    <span>₹{ac.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span>{plan.duration} months</span>
                  </div>
                  {plan.discount > 0 && (
                    <div className="flex justify-between text-brutal-accent">
                      <span>Discount ({plan.discount}%)</span>
                      <span>-₹{Math.round(ac.price * plan.duration * plan.discount / 100)}</span>
                    </div>
                  )}
                  <div className="border-t border-brutal-border/30 pt-3 flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-display font-bold text-brutal-accent">₹{total}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {benefits.map((b) => (
                    <div key={b.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <b.icon className="w-3.5 h-3.5 text-brutal-accent shrink-0" />
                      {b.label}
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={() => setModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-brutal-accent text-white font-brutal tracking-wider uppercase brutal-shadow hover:brutal-shadow-lg transition-all text-sm flex items-center justify-center gap-2"
                >
                  Book Now — ₹{total}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <div className="text-center">
                  <WhatsAppButton size="sm" label="Chat before booking?" className="!bg-[#25D366] !text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 border-t border-brutal-border/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedText
            text="What's Included"
            as="h2"
            className="font-display text-3xl sm:text-4xl font-bold mb-8"
            type="mask"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 text-sm text-muted-foreground p-3 border border-brutal-border/30 bg-card/30"
              >
                <Check className="w-4 h-4 text-brutal-accent shrink-0" />
                {f}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
