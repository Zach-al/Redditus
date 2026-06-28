'use client'

import { motion } from 'framer-motion'
import { Snowflake, Target, Heart, Users, Shield } from 'lucide-react'
import { LiquidBlob } from '@/components/LiquidBlob'
import { AnimatedText, StaggerChildren, StaggerItem } from '@/components/AnimatedText'
import { LiquidButton } from '@/components/LiquidButton'
import { AcUnit } from '@/components/AcUnit'
import { TemperatureBadge } from '@/components/CoolAirFlow'

const values = [
  { icon: Shield, title: 'Trust', desc: 'We believe in transparent pricing and honest service. No hidden fees, ever.' },
  { icon: Heart, title: 'Comfort', desc: 'Your comfort is our mission. We go above and beyond to keep you cool.' },
  { icon: Users, title: 'Community', desc: 'Proudly serving Bhubaneswar with local support teams and rapid response.' },
  { icon: Target, title: 'Excellence', desc: 'Premium AC units, professional installation, and 24/7 support.' },
]

const timeline = [
  { year: '2020', title: 'Founded', desc: 'Redditus started with a simple idea: make AC cooling accessible to everyone.' },
  { year: '2021', title: '100 ACs', desc: 'Crossed 100 rentals with 4.9★ customer satisfaction rating.' },
  { year: '2023', title: '500+ Rented', desc: 'Expanded across Bhubaneswar with a fleet of 500+ premium AC units.' },
  { year: '2024', title: 'Full Coverage', desc: 'Launched 24/7 support and same-day installation across Bhubaneswar.' },
]

export default function About() {
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
            About Redditus
            <TemperatureBadge />
          </motion.div>

          <div className="max-w-3xl">
            <AnimatedText
              text="Cooling Bhubaneswar Since 2020"
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
              Redditus is Bhubaneswar's premium AC rental service. We make staying cool
              affordable and hassle-free. No deposits, no long-term contracts — just
              comfort on your terms.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 border-y border-brutal-border/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ rotate: -5, scale: 1.1 }}
                className="w-16 h-16 mb-6"
              >
                <Snowflake className="w-full h-full text-brutal-accent/30" />
              </motion.div>
              <AnimatedText
                text="Why Redditus Exists"
                as="h2"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                type="mask"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Buying an AC costs thousands — and that&apos;s before installation, maintenance,
                  and repair bills. For students, professionals, and families in Bhubaneswar,
                  the upfront cost is a barrier to basic comfort.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  We built Redditus to change that. Rent a premium split AC for a flat
                  monthly fee that includes everything: installation, maintenance, repairs,
                  and even relocation when you move.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  No deposit. No hidden charges. No long-term lock-in. Just cool air.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-square border-2 border-brutal-border bg-card p-4 sm:p-6"
              >
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
                  <motion.div
                    className="w-full max-w-[200px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', damping: 10 }}
                  >
                    <AcUnit size="md" temperature={18} />
                  </motion.div>
                  <div>
                    <motion.p
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: 'spring', damping: 12 }}
                      className="font-display text-4xl sm:text-5xl font-bold"
                    >
                      4.9
                    </motion.p>
                    <p className="text-sm text-muted-foreground font-mono">Average Rating</p>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-xs">
                    &ldquo;The best AC rental service in Bhubaneswar&rdquo;
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <AnimatedText
              text="Our Values"
              as="h2"
              className="font-display text-4xl sm:text-5xl font-bold mb-4"
              type="mask"
            />
          </div>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" stagger={0.12}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-6 border border-brutal-border bg-card/50 h-full text-center"
                >
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.15 }}
                    className="w-10 h-10 mx-auto mb-4"
                  >
                    <value.icon className="w-full h-full text-brutal-accent" />
                  </motion.div>
                  <h3 className="font-display text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 border-y border-brutal-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <AnimatedText
              text="Our Journey"
              as="h2"
              className="font-display text-4xl sm:text-5xl font-bold mb-4"
              type="mask"
            />
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, rotateY: i % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.15, duration: 0.5, type: 'spring' }}
                className="relative flex gap-6 sm:gap-8 pb-10 sm:pb-12 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2, type: 'spring' }}
                    className="w-4 h-4 rounded-full bg-brutal-accent border-2 border-background z-10"
                  />
                  {i < timeline.length - 1 && (
                    <div className="w-[1px] flex-1 bg-brutal-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.1 }}
                    className="text-xs font-mono tracking-widest text-brutal-accent"
                  >
                    {item.year}
                  </motion.span>
                  <h3 className="font-display text-xl font-bold mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText
            text="Join 500+ Happy Customers"
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
            Experience the Redditus difference. Cool comfort, zero hassle.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', damping: 10 }}
          >
            <LiquidButton variant="brutal" size="lg" withArrow href="/book">
              Rent Your AC Now
            </LiquidButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
