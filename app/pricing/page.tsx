import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Crown, Zap, Gift, BookOpen } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with financial planning',
    icon: Gift,
    color: 'bg-blue-500',
    popular: false,
    features: [
      'Basic financial calculators',
      'Monthly newsletter',
      'Community access',
      'Basic investment tools',
      'Email support',
    ],
    cta: 'Get Started Free',
    ctaLink: '/auth/signup',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$99',
    period: 'per month',
    description: 'Advanced tools and personalized guidance',
    icon: Crown,
    color: 'bg-blue-600',
    popular: true,
    features: [
      'All basic features',
      'Advanced calculators',
      'Premium financial guides',
      'Personalized investment advice',
      'Priority support',
      'Tax optimization tools',
      'Retirement planning suite',
      'Portfolio analysis',
      'Market insights',
    ],
    cta: 'Start Premium Trial',
    ctaLink: '/auth/signup?plan=premium',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$149',
    period: 'per month',
    description: 'Complete financial planning with expert consultation',
    icon: Zap,
    color: 'bg-blue-700',
    popular: false,
    features: [
      'All premium features',
      '1-on-1 financial consultation',
      'Custom financial plan',
      'Estate planning tools',
      'Business financial planning',
      'Advanced tax strategies',
      'Dedicated financial advisor',
      'Quarterly reviews',
      'Emergency planning',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact?plan=pro',
    highlight: false,
  },
]


const premiumGuides = [
  {
    title: 'Advanced Portfolio Management',
    description: 'Professional strategies for portfolio optimization',
    pages: '65 pages',
    format: 'PDF + Video',
    downloads: '8K+',
    free: false,
    price: '$29',
  },
  {
    title: 'Tax Optimization Strategies',
    description: 'Maximize your savings with smart tax planning',
    pages: '52 pages',
    format: 'PDF + Templates',
    downloads: '5K+',
    free: false,
    price: '$39',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your Financial
            <span className="block text-blue-200">Success Plan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Choose the plan that best fits your financial goals and get access to 
            premium tools and personalized guidance for maximum financial growth.
          </p>
        </div>
      </div>


      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start free and upgrade as your financial needs grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              } ${plan.highlight ? 'ring-2 ring-blue-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  Start Here - Free Forever
                </div>
              )}
              <CardHeader className={`${plan.popular || plan.highlight ? 'pt-12' : 'pt-6'}`}>
                <div className="flex items-center mb-4">
                  <div className={`p-3 ${plan.color} rounded-lg`}>
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-semibold py-3 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : plan.highlight
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-600 hover:bg-gray-700 text-white'
                  }`}
                  asChild
                >
                  <Link href={plan.ctaLink}>{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Premium Guides */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Premium Financial Guides
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Advanced guides for serious investors and financial planners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {premiumGuides.map((guide, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex">
                  <div className="w-1/3">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <CardContent className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {guide.title}
                      </h3>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm font-medium">
                        {guide.price}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {guide.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span>{guide.pages}</span>
                      <span>{guide.format}</span>
                      <span>{guide.downloads} downloads</span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-semibold" 
                      asChild
                    >
                      <Link href="/contact">
                        Contact Sales
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Are the free guides really free?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! Our basic financial guides are completely free with no hidden costs. 
                You can download them immediately without providing payment information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! You can cancel your subscription at any time. 
                You'll continue to have access to premium features until the end of your billing period.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What's included in the Pro plan?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The Pro plan includes everything in Premium plus 1-on-1 consultations with 
                certified financial advisors, custom financial plans, and quarterly reviews.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
