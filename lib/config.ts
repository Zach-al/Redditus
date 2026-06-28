export const BUSINESS = {
  name: 'Redditus',
  tagline: 'Premium AC Rentals',
  phone: '+91-7559435943',
  phoneDisplay: '+91 7559435943',
  whatsapp: '917559435943',
  email: 'hello@redditus.in',
  address: 'Bhubaneswar, Odisha, India',
  city: 'Bhubaneswar',
  state: 'Odisha',
  responseTime: '15 minutes',
  businessHours: '9 AM — 10 PM, all 7 days',
}

export const PLANS = [
  {
    id: '3months',
    label: '3 Months',
    duration: 3,
    discount: 0,
    popular: false,
    tag: 'Flexible',
  },
  {
    id: '6months',
    label: '6 Months',
    duration: 6,
    discount: 10,
    popular: true,
    tag: 'Best Value',
  },
  {
    id: '12months',
    label: '12 Months',
    duration: 12,
    discount: 20,
    popular: false,
    tag: 'Max Savings',
  },
]

export const AC_TYPES = [
  { id: '1ton', label: 'Split AC — 1 Ton', price: 1500, room: 'Up to 120 sq.ft' },
  { id: '1.5ton', label: 'Split AC — 1.5 Ton', price: 1700, room: 'Up to 180 sq.ft' },
  { id: '2ton', label: 'Split AC — 2 Ton', price: 2200, room: 'Up to 250 sq.ft' },
]

export const FEATURES = [
  'Free Installation within 24 hours',
  'Free Maintenance & Servicing',
  'Free Relocation within Bhubaneswar',
  '24/7 Customer Support',
  'Instant Replacement if issues arise',
  'Cancel anytime with 30-day notice',
  'No Deposit Required',
  '5-Star Inverter AC Units',
]

export const WHATSAPP_MESSAGE = `Hi Redditus! I'd like to inquire about AC rental in ${BUSINESS.city}. Please share the available plans and pricing.`

export const RAZORPAY_KEY_ID = 'rzp_live_placeholder' // Replace with actual Razorpay key
