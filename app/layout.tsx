import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, DM_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  preload: true,
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  preload: false,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '800', '900'],
  variable: '--font-display',
  preload: true,
})

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Redditus — Premium AC Rentals in Bhubaneswar',
  description: 'Rent premium split ACs starting at ₹1,500/month in Bhubaneswar. Free installation, maintenance & relocation. 500+ happy customers.',
  keywords: ['AC rental', 'split AC rent', 'air conditioner rental', 'Redditus', 'Bhubaneswar AC rental', 'AC on rent Bhubaneswar'],
  robots: { index: true, follow: true },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Redditus — Premium AC Rentals',
    description: 'Rent premium split ACs starting at ₹1,500/month. Free installation, maintenance & relocation. Bhubaneswar.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Redditus',
  },
  other: {
    'application-name': 'Redditus',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Redditus',
              description: 'Premium AC Rental Services in Bhubaneswar',
              url: 'https://redditus.in',
              telephone: '+919777049180',
              email: 'redditusrental@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'N6/450, Nayapalli, Near Bank Of India',
                addressLocality: 'Bhubaneswar',
                addressRegion: 'Odisha',
                addressCountry: 'IN',
              },
              openingHours: 'Mo-Sa 08:00-20:00',
              priceRange: '₹1,500 - ₹2,200',
              areaServed: {
                '@type': 'City',
                name: 'Bhubaneswar',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrains.variable} ${dmSans.variable} antialiased bg-background text-foreground font-sans`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brutal-accent focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
