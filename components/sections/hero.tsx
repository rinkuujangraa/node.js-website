'use client'

import { Button } from '@/components/ui/button'
import { Calculator, Shield, Users } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Welcome to
            <span className="block text-blue-200">MoneyZenGuide</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover financial peace with MoneyZenGuide. Expert financial planning, smart calculators, 
            and personalized strategies to help you achieve your money goals with confidence and zen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-3" asChild>
              <Link href="/downloads">
                <Calculator className="mr-2 h-5 w-5" />
                Try Your First Guide Free
              </Link>
            </Button>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3" asChild>
              <Link href="/pricing">
                Learn More
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-blue-200" />
              </div>
              <div className="text-3xl font-bold text-white">12K+</div>
              <div className="text-blue-200 text-sm">Happy Users</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex justify-center mb-3">
                <Shield className="h-8 w-8 text-blue-200" />
              </div>
              <div className="text-3xl font-bold text-white">$1M</div>
              <div className="text-blue-200 text-sm">Assets Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
