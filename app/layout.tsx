import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Analytics } from '@/components/analytics'
import { CookieConsent } from '@/components/cookie-consent'

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
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1969645693815084');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1969645693815084&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  )
}
