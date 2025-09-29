'use client'

import { useEffect } from 'react'
import { Download, ArrowLeft, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DownloadsPage() {
  useEffect(() => {
    // Track page visit for PDF guide download
    const trackPageVisit = () => {
      // Track Google Analytics conversion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          'page_title': 'Downloads Page - PDF Guide',
          'page_location': window.location.href
        })
      }
      
      // Track Meta Pixel conversion
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'ViewContent', {
          content_name: 'Financial Planning PDF Guide',
          content_category: 'Download',
          value: 1.00,
          currency: 'USD'
        })
      }
    }

    // Track page visit
    trackPageVisit()
    
    // No cleanup needed for tracking
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
            Download Your Free Financial Planning Guide
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get instant access to our comprehensive PDF guide plus the powerful Windows app for advanced financial planning, calculators, and portfolio management tools.
          </p>
        </div>

        {/* Windows App Download Card - Enhanced */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl p-8 mb-8 text-white">
          <div className="text-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="h-12 w-12 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Financial Planning Package
            </h2>
            
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Get our comprehensive PDF guide instantly, plus the powerful Windows app with advanced calculators, portfolio tracking, and complete offline access for maximum privacy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold text-white">PDF</div>
                <div className="text-sm text-green-100">Instant Download</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold text-white">25K+</div>
                <div className="text-sm text-green-100">Downloads</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold text-white">4.9★</div>
                <div className="text-sm text-green-100">Rating</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start">
                  <CheckCircle className="h-5 w-5 text-green-200 mr-3 flex-shrink-0" />
                  <span className="text-green-100">Advanced financial calculators</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <CheckCircle className="h-5 w-5 text-green-200 mr-3 flex-shrink-0" />
                  <span className="text-green-100">Portfolio tracking & analysis</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start">
                  <CheckCircle className="h-5 w-5 text-green-200 mr-3 flex-shrink-0" />
                  <span className="text-green-100">100% offline access</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <CheckCircle className="h-5 w-5 text-green-200 mr-3 flex-shrink-0" />
                  <span className="text-green-100">Windows 10/11 compatible</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-green-50 text-xl px-12 py-4 font-bold shadow-lg w-full md:w-auto"
                onClick={() => {
                  // Track PDF guide download
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'PDF_Download', {
                      'event_category': 'Download',
                      'event_label': 'Financial Planning PDF Guide',
                      'value': 1.00
                    })
                  }
                  
                  if (typeof window !== 'undefined' && window.fbq) {
                    window.fbq('track', 'Lead', {
                      content_name: 'Financial Planning PDF Guide',
                      content_category: 'Download',
                      value: 1.00,
                      currency: 'USD'
                    })
                  }
                  
                  const link = document.createElement('a')
                  link.href = '/downloads/financial-planning-starter-guide.pdf'
                  link.download = 'Financial-Planning-Guide.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Download className="mr-3 h-6 w-6" />
                Download PDF Guide - FREE!
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-3 font-bold w-full md:w-auto"
                onClick={() => {
                  // Track Windows app download
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'App_Download', {
                      'event_category': 'Download',
                      'event_label': 'MoneyZenGuide Windows App',
                      'value': 5.00
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
                  link.href = '/api/downloads?file=MoneyZenGuide.exe'
                  link.download = 'MoneyZenGuide-Windows-App.exe'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Download className="mr-3 h-5 w-5" />
                Also Get Windows App
              </Button>
            </div>

            <div className="flex justify-center space-x-6 text-sm text-green-100">
              <span>✅ Instant PDF download</span>
              <span>✅ Windows app included</span>
              <span>✅ No signup required</span>
            </div>
          </div>
        </div>

        {/* Additional Features Card */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose MoneyZenGuide Windows App?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🚀 Advanced Features</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Portfolio tracking & analysis</li>
                  <li>• Investment calculators</li>
                  <li>• Budget planning tools</li>
                  <li>• Retirement planning</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔒 Privacy & Security</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• 100% offline access</li>
                  <li>• No data collection</li>
                  <li>• No internet required</li>
                  <li>• Your data stays private</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                💡 Perfect For:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="font-semibold text-gray-900 dark:text-white">Personal Finance</div>
                  <div className="text-gray-600 dark:text-gray-300">Budgeting & savings</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="font-semibold text-gray-900 dark:text-white">Investment Planning</div>
                  <div className="text-gray-600 dark:text-gray-300">Portfolio management</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="font-semibold text-gray-900 dark:text-white">Business Finance</div>
                  <div className="text-gray-600 dark:text-gray-300">Accounting & analysis</div>
                </div>
              </div>
            </div>
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
// Force rebuild - Mon Sep 29 10:50:19 IST 2025
