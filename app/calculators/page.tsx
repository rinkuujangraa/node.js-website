import Link from 'next/link'
import { Calculator, TrendingUp, Home, PiggyBank, CreditCard, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'

const calculators = [
  {
    icon: Home,
    title: 'Mortgage Calculator',
    description: 'Calculate your monthly mortgage payments, total interest, and amortization schedule.',
    href: '/calculators/mortgage',
    color: 'bg-blue-500',
    features: ['Monthly Payment', 'Total Interest', 'Amortization Schedule', 'Affordability Check'],
  },
  {
    icon: CreditCard,
    title: 'Loan Calculator',
    description: 'Determine monthly payments, total cost, and payoff timeline for personal loans.',
    href: '/calculators/loan',
    color: 'bg-green-500',
    features: ['Monthly Payment', 'Total Cost', 'Payoff Timeline', 'Interest Comparison'],
  },
  {
    icon: TrendingUp,
    title: 'Investment Calculator',
    description: 'Project your investment growth with compound interest and regular contributions.',
    href: '/calculators/investment',
    color: 'bg-purple-500',
    features: ['Compound Growth', 'Regular Contributions', 'Goal Planning', 'Risk Assessment'],
  },
  {
    icon: PiggyBank,
    title: 'Retirement Calculator',
    description: 'Plan for retirement with our comprehensive retirement savings calculator.',
    href: '/calculators/retirement',
    color: 'bg-orange-500',
    features: ['Retirement Goal', 'Monthly Savings', 'Social Security', 'Tax Planning'],
  },
  {
    icon: DollarSign,
    title: 'Savings Calculator',
    description: 'Calculate how much you need to save to reach your financial goals.',
    href: '/calculators/savings',
    color: 'bg-teal-500',
    features: ['Goal Setting', 'Time Planning', 'Interest Impact', 'Inflation Adjustment'],
  },
  {
    icon: Calculator,
    title: 'EMI Calculator',
    description: 'Calculate Equated Monthly Installments for various loan types.',
    href: '/calculators/emi',
    color: 'bg-red-500',
    features: ['EMI Calculation', 'Interest Rate Impact', 'Loan Comparison', 'Prepayment Analysis'],
  },
]

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Financial Calculators
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Make informed financial decisions with our comprehensive suite of calculators. 
            From mortgages to retirement planning, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculators.map((calculator, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 ${calculator.color} rounded-lg`}>
                    <calculator.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {calculator.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {calculator.description}
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  {calculator.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center mb-1">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href={calculator.href}>
                    Calculate Now
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need Help Choosing the Right Calculator?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our financial experts are here to help you choose the right tools for your specific needs. 
            Get personalized recommendations and guidance.
          </p>
          <Button 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 py-3"
            asChild
          >
            <Link href="/contact">
              Get Professional Help
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
