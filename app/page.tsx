'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  Wrench,
  Truck,
  ShieldCheck,
  Zap,
  Clock,
  HeadphonesIcon,
  ArrowRight,
  Snowflake,
  Star,
  Check,
} from 'lucide-react'
import { LiquidBlob } from '@/components/LiquidBlob'
import { AnimatedText, StaggerChildren, StaggerItem } from '@/components/AnimatedText'
import { LiquidButton } from '@/components/LiquidButton'
import { AcUnit, AcUnitWall } from '@/components/AcUnit'
import { CoolAirFlow, TemperatureBadge, AnimatedThermometer, AcRemote } from '@/components/CoolAirFlow'

const products = [
  { name: 'Split AC — 1 Ton', price: '₹1,500', original: '₹2,500', popular: false, room: 'Up to 120 sq.ft', power: '1,000W' },
  { name: 'Split AC — 1.5 Ton', price: '₹1,700', original: '₹3,000', popular: true, room: 'Up to 180 sq.ft', power: '1,500W' },
  { name: 'Split AC — 2 Ton', price: '₹2,200', original: '₹3,800', popular: false, room: 'Up to 250 sq.ft', power: '2,000W' },
]

const features = [
  { icon: Wrench, title: 'Free Installation', desc: 'Professional setup within 24 hours. No hidden charges.' },
  { icon: Truck, title: 'Free Relocation', desc: 'Moving out? We shift your AC for free within Bhubaneswar.' },
  { icon: ShieldCheck, title: 'Free Maintenance', desc: 'Regular servicing, filter cleaning & repairs included.' },
  { icon: Zap, title: 'Energy Efficient', desc: 'Latest 5-star inverter ACs that save on electricity bills.' },
  { icon: Clock, title: 'Flexible Tenure', desc: 'Rent for 3, 6, or 12 months. Cancel anytime with 30-day notice.' },
  { icon: HeadphonesIcon, title: '24/7 Support', desc: 'Dedicated support team ready to help anytime.' },
]

const stats = [
  { value: '500+', label: 'ACs Rented' },
  { value: '4.9', label: 'Avg. Rating' },
  { value: '50+', label: 'Staff' },
  { value: '15 min', label: 'Response Time' },
]

function ParallaxLayer({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100])
  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      <motion.div style={{ y }} className="absolute inset-0">
        {children}
      </motion.div>
    </div>
  )
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      <LiquidBlob speed={0.8} opacity={0.6} />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-liquid-primary/10 blur-[120px] animate-liquid-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-liquid-secondary/10 blur-[100px] animate-liquid-float" style={{ animationDelay: '-3s' }} />
        </motion.div>

        <CoolAirFlow intensity="high" className="absolute inset-0 z-[1]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20, rotate: -2 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', damping: 20 }}
                className="inline-flex items-center gap-3 px-4 py-2 text-xs font-mono tracking-widest uppercase border border-brutal-border bg-brutal-border/10"
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-brutal-accent"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                Premium AC Rentals — Bhubaneswar
                <TemperatureBadge />
              </motion.div>

              <AnimatedText
                text="Cool Your Space Without the Commitment"
                as="h1"
                className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-bold tracking-tight"
                delay={0.3}
                type="word"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                Rent the latest split ACs with zero installation cost, free maintenance,
                and the flexibility to relocate or cancel anytime. Comfort on your terms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <LiquidButton variant="brutal" size="lg" withArrow href="/book">
                  Rent Your AC
                </LiquidButton>
                <LiquidButton variant="secondary" size="lg" href="/book">
                  View Plans
                </LiquidButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex flex-wrap gap-6 pt-4"
              >
                {['No Deposit', 'Free Installation', 'Free Maintenance'].map((tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.15, type: 'spring' }}
                    className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider"
                  >
                    <Check className="w-3.5 h-3.5 text-brutal-accent" />
                    {tag}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute inset-0 animate-liquid-morph bg-gradient-to-br from-liquid-primary/30 via-liquid-secondary/20 to-liquid-tertiary/20 blur-[60px]" />
                <div className="absolute inset-[15%] animate-liquid-morph bg-gradient-to-tr from-liquid-tertiary/20 via-liquid-primary/20 to-liquid-secondary/20 blur-[40px]" style={{ animationDelay: '-2s' }} />
                <div className="absolute inset-[30%] animate-liquid-pulse bg-brutal-accent/20 blur-[30px] rounded-full" />

                <div className="absolute inset-[5%] flex items-center justify-center">
                  <AcUnitWall size="xl" temperature={18} />
                </div>

                <AcRemote className="absolute -bottom-4 -right-4 z-20" />

                <motion.div
                  className="absolute -top-2 -left-2 z-20"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                >
                  <AnimatedThermometer />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowRight className="w-5 h-5 rotate-90 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative py-16 border-y border-brutal-border/20 overflow-hidden">
        <ParallaxLayer speed={0.3}>
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-brutal-accent/5 blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-liquid-primary/5 blur-[60px]" />
        </ParallaxLayer>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: 'spring', damping: 15 }}
                  className="block font-display text-4xl sm:text-5xl font-bold text-foreground mb-1"
                >
                  {stat.value}
                </motion.span>
                <motion.span
                  className="text-xs font-mono tracking-widest uppercase text-muted-foreground block"
                  whileHover={{ color: '#FF6B35', letterSpacing: '0.15em' }}
                >
                  {stat.label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <ParallaxLayer speed={-0.2}>
          <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-liquid-secondary/5 blur-[100px]" />
        </ParallaxLayer>
        <CoolAirFlow intensity="low" className="absolute inset-0 z-[1]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Choose Your AC"
              as="h2"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              type="mask"
            />
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto"
            >
              All units are 5-star inverter split ACs with free installation & maintenance
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 60, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.15, duration: 0.6, type: 'spring' }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`relative group ${product.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                style={{ perspective: '1000px' }}
              >
                {product.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring', damping: 12 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 bg-brutal-accent text-white text-xs font-brutal tracking-widest uppercase brutal-shadow"
                  >
                    Most Popular
                  </motion.div>
                )}
                <div className={`relative h-full border-2 ${product.popular ? 'border-brutal-accent' : 'border-brutal-border'} bg-card hover:bg-card/80 transition-all duration-500 overflow-hidden`}>
                  <div className="relative h-40 sm:h-48 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] flex items-center justify-center overflow-hidden group">
                    <CoolAirFlow intensity="low" color="rgba(100,200,255,0.1)" />
                    <motion.div
                      className="relative w-full h-full flex items-center justify-center p-4"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', damping: 10 }}
                    >
                      <AcUnit size="md" temperature={16 + i * 2} />
                    </motion.div>
                    <motion.div
                      className="absolute top-2 right-2 px-2 py-0.5 bg-background/60 backdrop-blur-sm border border-brutal-border/30 rounded text-[10px] font-mono text-cyan-400"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                    >
                      5★ Inverter
                    </motion.div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="mb-4">
                      <h3 className="font-display text-xl font-bold mb-1">{product.name}</h3>
                      <p className="text-xs text-muted-foreground font-mono">{product.room} · {product.power}</p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="font-display text-4xl font-bold">{product.price}</span>
                        <span className="text-sm text-muted-foreground line-through font-mono">/mo</span>
                        <span className="text-xs text-muted-foreground line-through">{product.original}</span>
                      </div>
                      <ul className="space-y-1.5 mb-5 text-sm">
                        {['Free Installation', 'Free Maintenance', 'Free Relocation', '24/7 Support'].map((item, j) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 + j * 0.08 }}
                            className="flex items-center gap-2 text-muted-foreground"
                          >
                            <Check className="w-3.5 h-3.5 text-brutal-accent shrink-0" />
                            <span className="text-xs">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <LiquidButton
                        variant={product.popular ? 'brutal' : 'secondary'}
                        size="sm"
                        withArrow
                        className="w-full"
                        href="/book"
                      >
                        Rent Now
                      </LiquidButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-24 sm:py-32 border-y border-brutal-border/20 overflow-hidden">
        <ParallaxLayer speed={0.2}>
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-liquid-primary/5 blur-[120px]" />
        </ParallaxLayer>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Everything Included"
              as="h2"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              type="mask"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto"
            >
              No hidden costs, no surprises. Just cool air and peace of mind.
            </motion.p>
          </div>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group p-6 sm:p-8 border border-brutal-border/50 hover:border-brutal-accent/50 bg-card/50 transition-all duration-500 h-full"
                >
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.15 }}
                    className="w-12 h-12 mb-4 flex items-center justify-center border border-brutal-border group-hover:border-brutal-accent bg-background transition-colors"
                  >
                    <feature.icon className="w-5 h-5 text-brutal-accent" />
                  </motion.div>
                  <h3 className="font-display text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* HOW IT WORKS - Visual Timeline */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <ParallaxLayer speed={-0.15}>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-liquid-primary/5 blur-[100px]" />
        </ParallaxLayer>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="How It Works"
              as="h2"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              type="mask"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Choose', desc: 'Pick your AC from 5-star inverter units', icon: '🔍' },
              { step: '02', title: 'Book', desc: 'No deposit. Confirmed within minutes', icon: '📱' },
              { step: '03', title: 'Install', desc: 'Professional setup in 24 hours', icon: '🔧' },
              { step: '04', title: 'Enjoy', desc: 'Cool comfort with 24/7 support', icon: '❄' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.15, duration: 0.5, type: 'spring' }}
                whileHover={{ y: -8 }}
                className="text-center relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, type: 'spring', damping: 12 }}
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-brutal-accent bg-background text-2xl"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                >
                  {item.icon}
                </motion.div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(80%)] h-[2px] bg-gradient-to-r from-brutal-accent/50 to-transparent" />
                )}
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <ParallaxLayer speed={-0.3}>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-liquid-tertiary/5 blur-[100px]" />
        </ParallaxLayer>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="What Our Customers Say"
              as="h2"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              type="mask"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: 'Best decision this summer. The AC was installed within 24 hours and the service has been flawless.',
                author: 'Rahul S.',
                role: 'Gurgaon',
                rating: 5,
              },
              {
                quote: 'I love that I can relocate my AC when I moved apartments. Redditus handled everything.',
                author: 'Priya M.',
                role: 'Delhi',
                rating: 5,
              },
              {
                quote: 'No deposit, no hidden fees. Just a cooling AC and peace of mind. Highly recommend!',
                author: 'Amit K.',
                role: 'Noida',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.15, duration: 0.5, type: 'spring' }}
                whileHover={{ y: -6 }}
                className="p-6 sm:p-8 border border-brutal-border bg-card/50"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + j * 0.1, type: 'spring' }}
                    >
                      <Star className="w-4 h-4 fill-brutal-accent text-brutal-accent" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-sm font-display">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground font-mono">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 border-t border-brutal-border/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-liquid-primary/10 blur-[120px] animate-liquid-morph" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-liquid-secondary/10 blur-[100px] animate-liquid-morph" style={{ animationDelay: '-2s' }} />
        </div>

        <CoolAirFlow intensity="medium" className="absolute inset-0 z-[1]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="flex justify-center mb-8"
          >
            <AcUnit size="lg" temperature={18} />
          </motion.div>

          <AnimatedText
            text="Ready to Beat the Heat?"
            as="h2"
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
            type="mask"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
          >
            Join 500+ happy customers staying cool with Redditus. Your first month&apos;s rent — on us.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: 'spring' }}
          >
            <LiquidButton variant="brutal" size="lg" withArrow href="/book">
              Get Your AC Today
            </LiquidButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
