'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, ArrowRight, Loader } from 'lucide-react'
import { AC_TYPES, PLANS, FEATURES, RAZORPAY_KEY_ID, BUSINESS, WHATSAPP_MESSAGE } from '@/lib/config'
import { initiatePayment, calculateAmount } from '@/lib/razorpay'

interface BookingModalProps {
  open: boolean
  onClose: () => void
}

interface FormData {
  name: string
  phone: string
  email: string
  address: string
  acType: string
  plan: string
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    acType: '1.5ton',
    plan: '6months',
  })

  const selectedAC = AC_TYPES.find((a) => a.id === form.acType)!
  const selectedPlan = PLANS.find((p) => p.id === form.plan)!
  const totalAmount = calculateAmount(selectedAC.price, selectedPlan.duration, selectedPlan.discount)

  const handleSubmit = async () => {
    setLoading(true)
    const paid = await initiatePayment({
      key: RAZORPAY_KEY_ID,
      amount: totalAmount * 100,
      currency: 'INR',
      name: BUSINESS.name,
      description: `${selectedAC.label} - ${selectedPlan.label}`,
      prefill: { name: form.name, email: form.email, contact: form.phone },
      notes: {
        ac_type: selectedAC.label,
        plan: selectedPlan.label,
        address: form.address,
      },
    })

    if (paid) {
      setSuccess(true)
      const waMsg = encodeURIComponent(
        `Hi Redditus! I've successfully paid for my AC rental booking.%0A%0A` +
        `Name: ${form.name}%0A` +
        `Phone: ${form.phone}%0A` +
        `Email: ${form.email}%0A` +
        `AC: ${selectedAC.label}%0A` +
        `Plan: ${selectedPlan.label}%0A` +
        `Amount: ₹${totalAmount}%0A` +
        `Address: ${form.address}`
      )
      window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${waMsg}`, '_blank')
    }
    setLoading(false)
  }

  const reset = () => {
    setStep(0)
    setSuccess(false)
    setForm({ name: '', phone: '', email: '', address: '', acType: '1.5ton', plan: '6months' })
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={reset}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative w-full max-w-lg bg-background border border-brutal-border/50 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={reset}
              className="absolute top-4 right-4 z-10 p-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            {success ? (
              <div className="p-8 text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                  className="w-20 h-20 mx-auto rounded-full bg-brutal-accent/20 flex items-center justify-center"
                >
                  <Check className="w-10 h-10 text-brutal-accent" />
                </motion.div>
                <h2 className="font-display text-3xl font-bold">Booking Confirmed!</h2>
                <p className="text-muted-foreground">
                  We&apos;ve received your payment. A confirmation has been sent to your WhatsApp.
                  Our team will contact you within 15 minutes to schedule installation.
                </p>
                <div className="p-4 border border-brutal-border/50 bg-card/50 text-left space-y-1 text-sm">
                  <p><span className="text-muted-foreground">AC:</span> {selectedAC.label}</p>
                  <p><span className="text-muted-foreground">Plan:</span> {selectedPlan.label}</p>
                  <p><span className="text-muted-foreground">Amount Paid:</span> ₹{totalAmount}</p>
                  <p><span className="text-muted-foreground">Name:</span> {form.name}</p>
                </div>
                <button
                  onClick={reset}
                  className="px-8 py-3 bg-brutal-accent text-white font-brutal tracking-wider uppercase brutal-shadow hover:brutal-shadow-lg transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="p-6 sm:p-8">
                <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">Book Your AC</h2>
                <p className="text-sm text-muted-foreground mb-6 font-mono">
                  No deposit required. Pay first month only.
                </p>

                {step === 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-3">
                        Choose Your AC
                      </label>
                      <div className="space-y-2">
                        {AC_TYPES.map((ac) => (
                          <button
                            key={ac.id}
                            onClick={() => setForm({ ...form, acType: ac.id })}
                            className={`w-full text-left px-4 py-3 border transition-all ${
                              form.acType === ac.id
                                ? 'border-brutal-accent bg-brutal-accent/10'
                                : 'border-brutal-border/50 hover:border-brutal-border'
                            }`}
                          >
                            <span className="font-display font-bold block">{ac.label}</span>
                            <span className="text-xs text-muted-foreground font-mono">{ac.room} · ₹{ac.price}/mo</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-3">
                        Rental Plan
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {PLANS.map((plan) => (
                          <button
                            key={plan.id}
                            onClick={() => setForm({ ...form, plan: plan.id })}
                            className={`relative px-3 py-4 border text-center transition-all ${
                              form.plan === plan.id
                                ? 'border-brutal-accent bg-brutal-accent/10'
                                : 'border-brutal-border/50 hover:border-brutal-border'
                            }`}
                          >
                            {plan.popular && (
                              <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] font-mono bg-brutal-accent text-white px-2 py-0.5 uppercase tracking-wider">
                                Best
                              </span>
                            )}
                            <span className="font-display font-bold text-lg block">{plan.duration}m</span>
                            <span className="text-[10px] text-muted-foreground font-mono">{plan.tag}</span>
                            {plan.discount > 0 && (
                              <span className="text-[10px] text-brutal-accent font-bold font-mono block mt-1">
                                -{plan.discount}%
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border border-brutal-border/50 bg-card/50 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{selectedAC.label}</span>
                        <span>₹{selectedAC.price}/mo × {selectedPlan.duration}m</span>
                      </div>
                      {selectedPlan.discount > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Discount ({selectedPlan.discount}%)</span>
                          <span className="text-brutal-accent">-₹{Math.round(selectedAC.price * selectedPlan.duration * selectedPlan.discount / 100)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-base font-bold border-t border-brutal-border/30 pt-2 mt-2">
                        <span>Total</span>
                        <span>₹{totalAmount}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setStep(1)}
                      className="w-full py-4 bg-brutal-accent text-white font-brutal tracking-wider uppercase brutal-shadow hover:brutal-shadow-lg transition-all text-sm"
                    >
                      Continue — ₹{totalAmount}
                    </button>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-3 py-2.5 bg-background border border-brutal-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-brutal-accent transition-colors font-mono text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-2.5 bg-background border border-brutal-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-brutal-accent transition-colors font-mono text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="hello@example.com"
                        className="w-full px-3 py-2.5 bg-background border border-brutal-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-brutal-accent transition-colors font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-1.5">
                        Delivery Address ({BUSINESS.city})
                      </label>
                      <textarea
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        rows={2}
                        placeholder="Your address in Bhubaneswar"
                        className="w-full px-3 py-2.5 bg-background border border-brutal-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-brutal-accent transition-colors font-mono text-sm resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      {FEATURES.slice(0, 4).map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check className="w-3 h-3 text-brutal-accent shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep(0)}
                        className="px-6 py-3 border border-brutal-border text-foreground font-mono tracking-wider uppercase text-sm hover:bg-card/50 transition-all"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={loading || !form.name || !form.phone || !form.address}
                        className="flex-1 py-3 bg-brutal-accent text-white font-brutal tracking-wider uppercase brutal-shadow hover:brutal-shadow-lg transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <Loader className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            Pay ₹{totalAmount}
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
