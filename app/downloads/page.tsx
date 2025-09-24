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
      
      const link = document.createElement('a')
      link.href = '/api/downloads?file=MoneyZenGuide.msi'
      link.download = 'MoneyZenGuide.msi'
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
            Your Financial Guide PDF is Downloading
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The download should start automatically. If it doesn't, click the button below to download your free financial planning guide PDF.
          </p>
        </div>

        {/* Download Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Financial Planning Guide PDF
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Comprehensive financial planning guide with calculators, investment strategies, and budgeting tools. Perfect for personal and business finance management.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">120</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Pages</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Downloads</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4.8★</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Rating</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Complete accounting principles</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Practical examples and exercises</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Professional accounting standards</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 mb-6"
              onClick={() => {
                // Track PDF download conversion
                if (typeof window !== 'undefined' && window.uetq) {
                  window.uetq.push('event', 'PDF_Download', {
                    'event_category': 'Download',
                    'event_label': 'Financial Guide PDF',
                    'value': 250
                  })
                }
                
                const link = document.createElement('a')
                link.href = '/api/downloads?file=MoneyZenGuide.msi'
                link.download = 'MoneyZenGuide.msi'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF Again
            </Button>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              ✅ No signup required • ✅ Instant download • ✅ 100% free forever
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
