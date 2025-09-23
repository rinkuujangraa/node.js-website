import Link from 'next/link'
import { Calculator, TrendingUp, Home, PiggyBank, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'

const calculators = [
  {
    icon: Home,
    title: 'Mortgage Calculator',
    description: 'Calculate your monthly mortgage payments, total interest, and amortization schedule.',
    href: '/calculators/mortgage',
    color: 'bg-blue-500',
  },
  {
    icon: CreditCard,
    title: 'Loan Calculator',
    description: 'Determine monthly payments, total cost, and payoff timeline for personal loans.',
    href: '/calculators/loan',
    color: 'bg-green-500',
  },
  {
    icon: TrendingUp,
    title: 'Investment Calculator',
    description: 'Project your investment growth with compound interest and regular contributions.',
    href: '/calculators/investment',
    color: 'bg-purple-500',
  },
  {
    icon: PiggyBank,
    title: 'Retirement Calculator',
    description: 'Plan for retirement with our comprehensive retirement savings calculator.',
    href: '/calculators/retirement',
    color: 'bg-orange-500',
  },
]

export function Calculators() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Financial Calculators
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Make informed financial decisions with our comprehensive suite of calculators. 
            From mortgages to retirement planning, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {calculators.map((calculator, index) => (
            <Link
              key={index}
              href={calculator.href}
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 ${calculator.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                  <calculator.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {calculator.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {calculator.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/calculators">
              <Calculator className="mr-2 h-5 w-5" />
              View All Calculators
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
