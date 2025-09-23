import { Calculator, BookOpen, TrendingUp, Shield, Users, Clock } from 'lucide-react'

const features = [
  {
    icon: Calculator,
    title: 'Financial Calculators',
    description: 'Comprehensive suite of calculators for loans, investments, retirement planning, and more.',
  },
  {
    icon: BookOpen,
    title: 'Expert Content',
    description: 'Access to professional financial advice, guides, and market insights from certified experts.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Tools',
    description: 'Advanced portfolio analysis, risk assessment, and investment strategy recommendations.',
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Bank-level security with encrypted data storage and secure authentication systems.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect with like-minded individuals and get support from our financial community.',
  },
  {
    icon: Clock,
    title: 'Real-time Updates',
    description: 'Stay informed with real-time market data, news, and personalized financial alerts.',
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose FinanceWise?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            FinanceWise provides all the tools, resources, and expert guidance 
            you need to make informed financial decisions and achieve your wealth-building goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
