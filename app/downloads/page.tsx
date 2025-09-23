'use client'

import { Download, ArrowLeft, CheckCircle, FileText, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DownloadsPage() {
  const downloads = [
    {
      id: 'financial-planning-starter-guide',
      title: 'FinanceWise Complete Financial Planning Guide',
      description: 'Everything you need to know to start your financial journey. From budgeting to investing, this guide covers all the essentials.',
      filename: 'financial-planning-starter-guide.pdf',
      icon: BookOpen,
      stats: { pages: 45, downloads: '12K+', rating: '4.9★' },
      features: [
        'Step-by-step financial planning process',
        'Budget templates and worksheets',
        'Investment strategies for beginners'
      ]
    },
    {
      id: 'bst-financial-accounting-manual',
      title: 'BST Financial Accounting Manual',
      description: 'Comprehensive guide to financial accounting principles and practices. Perfect for students and professionals.',
      filename: 'bstfinaccountingmanual.pdf',
      icon: FileText,
      stats: { pages: 120, downloads: '8K+', rating: '4.8★' },
      features: [
        'Complete accounting principles',
        'Practical examples and exercises',
        'Professional accounting standards'
      ]
    }
  ]

  const handleDownload = (filename: string) => {
    const link = document.createElement('a')
    link.href = `/api/downloads?file=${filename}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-6 py-3 rounded-full text-lg font-bold mb-6">
            <Download className="h-5 w-5 mr-2" />
            Free Downloads
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Download Your Free Financial Resources
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get instant access to our comprehensive financial guides and manuals. All downloads are completely free with no signup required.
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {downloads.map((download) => {
            const IconComponent = download.icon
            return (
              <div key={download.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {download.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {download.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{download.stats.pages}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Pages</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{download.stats.downloads}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Downloads</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{download.stats.rating}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Rating</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {download.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 mb-6 w-full"
                    onClick={() => handleDownload(download.filename)}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download {download.title.split(' ')[0]}
                  </Button>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ✅ No signup required • ✅ Instant download • ✅ 100% free forever
                  </p>
                </div>
              </div>
            )
          })}
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
