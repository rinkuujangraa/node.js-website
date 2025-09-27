'use client'

import { useEffect } from 'react'
import { Download, ArrowLeft, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DownloadsPage() {
  useEffect(() => {
    // Automatically trigger download when page loads
    const downloadFile = () => {
      // Track PDF download conversion
      if (typeof window !== 'undefined' && window.uetq) {
        window.uetq.push('event', 'PDF_Download', {
          'event_category': 'Download',
          'event_label': 'Financial Guide PDF',
          'value': 250
        })
      }
      
      // Track Google Analytics conversion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'PDF_Download', {
          'event_category': 'Download',
          'event_label': 'Financial Guide PDF',
          'value': 250
        })
      }
      
      // Track Meta Pixel conversion
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Financial Guide PDF',
          content_category: 'Download',
          value: 2.50,
          currency: 'USD'
        })
      }
      
      const link = document.createElement('a')
      link.href = '/api/downloads?file=bstfinaccountingmanual.pdf'
      link.download = 'Financial-Planning-Guide.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    // Small delay to ensure page is loaded
    const timer = setTimeout(downloadFile, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-6 py-3 rounded-full text-lg font-bold mb-6">
            <Download className="h-5 w-5 mr-2" />
            Download Started!
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Download Our Finance Guide App
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get our comprehensive financial planning tools - both as a PDF guide and a Windows desktop application for advanced features.
          </p>
        </div>

        {/* Windows App Download Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              MoneyZenGuide Windows App
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Download our powerful Windows desktop application for advanced financial planning, calculators, and portfolio management tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">50MB</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">File Size</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">15K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Downloads</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">4.9★</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Rating</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Advanced financial calculators</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Portfolio tracking & analysis</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Offline access & data privacy</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Windows 10/11 compatible</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 mb-6"
              onClick={() => {
                // Track Windows app download
                if (typeof window !== 'undefined' && window.uetq) {
                  window.uetq.push('event', 'App_Download', {
                    'event_category': 'Download',
                    'event_label': 'MoneyZenGuide Windows App',
                    'value': 500
                  })
                }
                
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'App_Download', {
                    'event_category': 'Download',
                    'event_label': 'MoneyZenGuide Windows App',
                    'value': 500
                  })
                }
                
                if (typeof window !== 'undefined' && window.fbq) {
                  window.fbq('track', 'Lead', {
                    content_name: 'MoneyZenGuide Windows App',
                    content_category: 'Download',
                    value: 5.00,
                    currency: 'USD'
                  })
                }
                
                const link = document.createElement('a')
                link.href = '/api/downloads?file=MoneyZenGuide.msi'
                link.download = 'MoneyZenGuide-Windows-App.msi'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Windows App
            </Button>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              ✅ Windows 10/11 • ✅ 50MB download • ✅ 100% free • ✅ No ads
            </p>
          </div>
        </div>

        {/* PDF Guide Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Financial Planning Guide PDF
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Also available as a comprehensive PDF guide for offline reading and reference.
            </p>

            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 mb-6"
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/api/downloads?file=bstfinaccountingmanual.pdf'
                link.download = 'Financial-Planning-Guide.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF Guide
            </Button>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              ✅ 120 pages • ✅ Instant download • ✅ Mobile friendly
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/">
            <Button variant="outline" size="lg" className="px-8 py-3">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
