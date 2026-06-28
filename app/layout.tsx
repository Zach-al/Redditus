import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-brutal',
})

export const metadata: Metadata = {
  title: 'Redditus — Premium AC Rentals in Bhubaneswar',
  description: 'Rent premium split ACs starting at ₹1,500/month in Bhubaneswar. Free installation, maintenance & relocation included. No deposit, no hidden charges.',
  keywords: ['AC rental', 'split AC rent', 'air conditioner rental', 'Redditus', 'Bhubaneswar AC rental', 'AC on rent Bhubaneswar'],
  openGraph: {
    title: 'Redditus — Premium AC Rentals',
    description: 'Rent premium split ACs starting at ₹1,500/month. Free installation, maintenance & relocation included. Bhubaneswar.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Redditus',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrains.variable} ${bebas.variable} ${dmSans.variable} antialiased bg-background text-foreground font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
