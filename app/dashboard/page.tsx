'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Download, 
  Gift, 
  Star, 
  TrendingUp, 
  Calculator, 
  BookOpen, 
  Target,
  ArrowRight,
  CheckCircle,
  Crown,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    redirect('/auth/signin')
  }

  const freeGuides = [
    {
      title: 'Complete Financial Planning Starter Guide',
      description: 'Everything you need to know to start your financial journey',
      pages: '45 pages',
      downloads: '12K+',
      featured: true,
      filename: 'financial-planning-starter-guide.pdf',
    },
    {
      title: 'Investment Basics for Beginners',
      description: 'Learn the fundamentals of investing and building wealth',
      pages: '32 pages',
      downloads: '8K+',
      featured: false,
      filename: 'investment-basics-guide.pdf',
    },
    {
      title: 'Retirement Planning Made Simple',
      description: 'Step-by-step guide to secure your retirement',
      pages: '38 pages',
      downloads: '6K+',
      featured: false,
      filename: 'financial-planning-starter-guide.pdf', // Using same file for now
    },
  ]

  const recentCalculations = [
    { type: 'Mortgage', amount: '$2,500', date: '2 days ago' },
    { type: 'Investment', amount: '$1,200', date: '1 week ago' },
    { type: 'Retirement', amount: '$3,000', date: '2 weeks ago' },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, {session.user?.name?.split(' ')[0]}! 👋
              </h1>
              <p className="text-blue-100 text-lg">
                Ready to take control of your financial future?
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">$1M</div>
                <div className="text-blue-100 text-sm">Assets Managed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Get Your First Financial Guide - HIGHLIGHTED SECTION */}
        <div className="mb-12">
          <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-500 rounded-full">
                  <Gift className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl text-gray-900 dark:text-white">
                🎉 Get Your First Financial Guide - FREE!
              </CardTitle>
              <CardDescription className="text-lg text-gray-700 dark:text-gray-300">
                Start your financial journey with our comprehensive guide - completely free, no strings attached!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {freeGuides.map((guide, index) => (
                  <Card key={index} className={`${guide.featured ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                    {guide.featured && (
                      <div className="bg-green-500 text-white text-center py-2 text-sm font-medium rounded-t-lg">
                        ⭐ MOST POPULAR
                      </div>
                    )}
                    <CardContent className={`p-6 ${guide.featured ? 'pt-4' : ''}`}>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        {guide.description}
                      </p>
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <span>{guide.pages}</span>
                        <span>{guide.downloads} downloads</span>
                      </div>
                      <Button 
                        className={`w-full ${guide.featured ? 'bg-green-600 hover:bg-green-700' : ''}`}
                        asChild
                      >
                        <Link href="/downloads">
                          <Download className="mr-2 h-4 w-4" />
                          Download Free
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Download Our Free Guide?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Complete Coverage</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">All essential financial topics in one guide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Expert Written</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Created by certified financial advisors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Actionable Steps</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Practical advice you can implement today</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Jump into your financial planning tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button asChild className="h-20 flex-col">
                    <Link href="/calculators/mortgage">
                      <Calculator className="h-6 w-6 mb-2" />
                      Mortgage Calculator
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-20 flex-col border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                    <Link href="/calculators/investment">
                      <TrendingUp className="h-6 w-6 mb-2" />
                      Investment Calculator
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-20 flex-col border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                    <Link href="/calculators/retirement">
                      <Target className="h-6 w-6 mb-2" />
                      Retirement Calculator
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-20 flex-col border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                    <Link href="/blog">
                      <BookOpen className="h-6 w-6 mb-2" />
                      Read Articles
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Calculations */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Calculations</CardTitle>
                <CardDescription>
                  Your recent financial calculations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCalculations.map((calc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Calculator className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{calc.type}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{calc.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900 dark:text-white">{calc.amount}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">monthly</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700" asChild>
                  <Link href="/calculators">
                    View All Calculators
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upgrade to Premium */}
            <Card className="bg-gradient-to-br from-purple-500 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="mr-2 h-5 w-5" />
                  Upgrade to Premium
                </CardTitle>
                <CardDescription className="text-purple-100">
                  Unlock advanced features and personalized advice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Advanced calculators
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Personalized advice
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Priority support
                  </li>
                </ul>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/pricing">
                    View Plans
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Financial Tips */}
            <Card>
              <CardHeader>
                <CardTitle>💡 Daily Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  "Start with a 1% increase in your savings rate. Small changes compound over time and can significantly impact your financial future."
                </p>
                <Button variant="outline" size="sm" asChild className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                  <Link href="/blog">
                    Read More Tips
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Emergency Fund</span>
                      <span>25%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Retirement Savings</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Investment Portfolio</span>
                      <span>8%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '8%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
