'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Download, X, Gift, Star } from 'lucide-react'

export function FloatingDownloadButton() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Gift className="h-5 w-5 mr-2" />
            <span className="font-bold text-sm">FREE DOWNLOAD!</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <h3 className="font-semibold text-sm mb-2">
          Get Your Financial Guide
        </h3>
        <p className="text-xs text-blue-100 mb-3">
          Join 12K+ people who downloaded our free guide
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs">
            <Star className="h-3 w-3 text-yellow-300 mr-1" />
            <span>4.9/5 rating</span>
          </div>
          <Button 
            size="sm" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-xs px-3 py-1"
            asChild
          >
            <Link href="/downloads">
              <Download className="h-3 w-3 mr-1" />
              Download
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
