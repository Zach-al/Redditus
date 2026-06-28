'use client'

import { motion } from 'framer-motion'
import {
  Wrench,
  Truck,
  ShieldCheck,
  RefreshCw,
  HeadphonesIcon,
  Zap,
  Check,
} from 'lucide-react'
import { LiquidBlob } from '@/components/LiquidBlob'
import { AnimatedText, StaggerChildren, StaggerItem } from '@/components/AnimatedText'
import { LiquidButton } from '@/components/LiquidButton'
import { AcUnit } from '@/components/AcUnit'
import { CoolAirFlow, TemperatureBadge } from '@/components/CoolAirFlow'

const services = [
  {
    icon: Wrench,
    title: 'Professional Installation',
    desc: 'Our certified technicians install your AC within 24 hours. We handle everything — mounting, electrical, drainage.',
  },
  {
    icon: ShieldCheck,
    title: 'Free Maintenance',
    desc: 'Regular filter cleaning, gas top-ups, and comprehensive servicing at no extra cost. We keep your AC running like new.',
  },
  {
    icon: Truck,
    title: 'Free Relocation',
    desc: 'Moving to a new place? We dismantle, transport, and reinstall your AC anywhere in Bhubaneswar for free.',
  },
  {
    icon: RefreshCw,
    title: 'Instant Replacement',
    desc: 'If your AC develops a fault we can\'t fix within 24 hours, we replace the unit immediately at no extra cost.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Customer Support',
    desc: 'Call, WhatsApp, or email us anytime. Our support team resolves issues within 15 minutes on average.',
  },
  {
    icon: Zap,
    title: 'Energy-Efficient Units',
    desc: 'All our ACs are 5-star inverter models. Stay cool without burning a hole in your electricity bill.',
  },
]

const process = [
  { step: '01', title: 'Choose Your AC', desc: 'Pick the perfect AC for your space from our range of 5-star inverter units.' },
  { step: '02', title: 'Book Online', desc: 'Fill a simple form. No deposit required. Get confirmed within minutes.' },
  { step: '03', title: 'We Install', desc: 'Our team arrives within 24 hours for professional installation.' },
  { step: '04', title: 'Stay Cool', desc: 'Enjoy your AC with free maintenance and 24/7 support. That&apos;s it.' },
]

export default function Services() {
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
            Our Services
            <TemperatureBadge />
          </motion.div>

          <div className="max-w-3xl">
            <AnimatedText
              text="Everything You Need, Nothing You Don&apos;t"
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
              From installation to maintenance to relocation — we cover every aspect
              of your AC experience. One flat monthly fee, zero worries.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 border-y border-brutal-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <AnimatedText
              text="What We Offer"
              as="h2"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              type="mask"
            />
          </div>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" stagger={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="p-6 sm:p-8 border border-brutal-border/50 hover:border-brutal-accent/50 bg-card/50 transition-all duration-500 h-full"
                >
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.15 }}
                    className="w-12 h-12 mb-4 flex items-center justify-center border border-brutal-border bg-background"
                  >
                    <service.icon className="w-5 h-5 text-brutal-accent" />
                  </motion.div>
                  <h3 className="font-display text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <AnimatedText
              text="How It Works"
              as="h2"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              type="mask"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.15, duration: 0.5, type: 'spring' }}
                whileHover={{ y: -6 }}
                className="text-center relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, type: 'spring', damping: 12 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center border-2 border-brutal-accent bg-background"
                >
                  <span className="font-brutal text-lg sm:text-xl text-brutal-accent">{item.step}</span>
                </motion.div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(80%)] h-[1px] bg-brutal-border/50" />
                )}
                <h3 className="font-display text-base sm:text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground px-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-muted-foreground mb-2 text-sm">From booking to cool air in 24 hours</p>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', damping: 10 }}>
              <LiquidButton variant="brutal" size="lg" withArrow href="/book">
                Start Now
              </LiquidButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 border-y border-brutal-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <AnimatedText
                text="What&apos;s Included in Your Rental?"
                as="h2"
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8"
                type="mask"
              />
              <ul className="space-y-3 sm:space-y-4">
                {[
                  '5-star inverter split AC unit',
                  'Professional installation within 24 hours',
                  'Remote control & mounting kit',
                  'Free regular maintenance & servicing',
                  'Free relocation within Bhubaneswar',
                  '24/7 customer support',
                  'Instant replacement if issues arise',
                  'Cancel anytime with 30-day notice',
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: -10 }}
                      transition={{ type: 'spring', damping: 10 }}
                    >
                      <Check className="w-4 h-4 text-brutal-accent shrink-0" />
                    </motion.div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="aspect-square border-2 border-brutal-border bg-card p-4 sm:p-6 flex items-center justify-center overflow-hidden relative"
              >
                <CoolAirFlow intensity="low" className="absolute inset-0" />
                <div className="text-center relative z-10">
                  <motion.div
                    className="flex justify-center mb-4 sm:mb-6"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', damping: 10 }}
                  >
                    <AcUnit size="lg" temperature={18} />
                  </motion.div>
                  <motion.p
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring', damping: 12 }}
                    className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-2"
                  >
                    ₹1,500
                  </motion.p>
                  <p className="text-sm text-muted-foreground font-mono">Starting price per month</p>
                  <p className="text-xs text-muted-foreground mt-4 italic">No deposit required</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText
            text="Ready to Get Cool?"
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
            500+ customers trust Redditus. Join them today.
          </motion.p>
          <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', damping: 10 }}>
            <LiquidButton variant="brutal" size="lg" withArrow href="/book">
              Book Your Installation
            </LiquidButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
