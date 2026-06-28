'use client'

interface RazorpayOptions {
  key: string
  amount: number
  currency: string
  name: string
  description: string
  order_id?: string
  prefill: {
    name: string
    email: string
    contact: string
  }
  notes?: Record<string, string>
}

export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && (window as any).Razorpay) {
      resolve(true)
      return
    }
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export async function initiatePayment(options: RazorpayOptions): Promise<boolean> {
  const loaded = await loadRazorpayScript()
  if (!loaded) {
    alert('Payment gateway failed to load. Please try again.')
    return false
  }

  return new Promise((resolve) => {
    const razorpay = new (window as any).Razorpay({
      key: options.key,
      amount: options.amount,
      currency: options.currency || 'INR',
      name: options.name,
      description: options.description,
      order_id: options.order_id,
      prefill: options.prefill,
      notes: options.notes,
      theme: { color: '#FF6B35' },
      handler: function () {
        resolve(true)
      },
      modal: {
        ondismiss: function () {
          resolve(false)
        },
      },
    })
    razorpay.open()
  })
}

export function calculateAmount(basePrice: number, months: number, discount: number): number {
  const subtotal = basePrice * months
  const discountAmount = subtotal * (discount / 100)
  return subtotal - discountAmount
}
