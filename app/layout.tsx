import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Analytics } from '@/components/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'MoneyZenGuide - Your Path to Financial Zen',
    template: '%s | MoneyZenGuide'
  },
  description: 'Discover financial peace with MoneyZenGuide. Expert financial planning, calculators, and strategies to achieve your money goals with confidence.',
  keywords: ['MoneyZenGuide', 'financial zen', 'financial planning', 'investment', 'savings', 'retirement', 'budgeting', 'financial calculators', 'wealth building', 'money management'],
  authors: [{ name: 'MoneyZenGuide Team' }],
  creator: 'MoneyZenGuide',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moneyzenguide.com',
    title: 'MoneyZenGuide - Your Path to Financial Zen',
    description: 'Discover financial peace with MoneyZenGuide. Expert financial planning, calculators, and strategies to achieve your money goals with confidence.',
    siteName: 'MoneyZenGuide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoneyZenGuide - Your Path to Financial Zen',
    description: 'Discover financial peace with MoneyZenGuide. Expert financial planning, calculators, and strategies to achieve your money goals with confidence.',
    creator: '@moneyzenguide',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
