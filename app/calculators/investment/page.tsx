'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Calculator, DollarSign, Target } from 'lucide-react'
import { formatCurrency, calculateCompoundInterest } from '@/lib/utils'

export default function InvestmentCalculator() {
  const [principal, setPrincipal] = useState('')
  const [monthlyContribution, setMonthlyContribution] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [results, setResults] = useState<any>(null)

  const calculateInvestment = () => {
    const initialAmount = parseFloat(principal || '0') || 0
    const monthlyAmount = parseFloat(monthlyContribution || '0') || 0
    const annualRate = parseFloat(rate) || 0
    const years = parseFloat(time) || 0
    const months = years * 12

    // Validate inputs
    if (!rate || !time) {
      alert('Please fill in the required fields: Expected Annual Return and Investment Period')
      return
    }

    if (annualRate <= 0) {
      alert('Expected annual return must be greater than 0')
      return
    }

    if (years <= 0) {
      alert('Investment period must be greater than 0')
      return
    }

    if (initialAmount < 0 || monthlyAmount < 0) {
      alert('Investment amounts cannot be negative')
      return
    }

    // Calculate compound interest on initial amount
    const initialFutureValue = initialAmount * Math.pow(1 + annualRate / 100, years)
    
    // Calculate future value of monthly contributions
    const monthlyRate = annualRate / 12 / 100
    const monthlyFutureValue = monthlyAmount > 0 ? monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) : 0
    
    const totalFutureValue = initialFutureValue + monthlyFutureValue
    const totalContributions = initialAmount + (monthlyAmount * months)
    const totalInterest = totalFutureValue - totalContributions

    setResults({
      totalFutureValue,
      totalContributions,
      totalInterest,
      initialAmount,
      monthlyAmount,
      years,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-purple-500 rounded-lg">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Investment Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate the future value of your investments with compound interest and regular contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 h-5 w-5" />
                Investment Details
              </CardTitle>
              <CardDescription>
                Enter your investment information to calculate future value
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Initial Investment
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="number"
                    placeholder="10,000"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Monthly Contribution
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="number"
                    placeholder="500"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Expected Annual Return (%)
                </label>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="7"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Investment Period (years)
                </label>
                <Input
                  type="number"
                  placeholder="20"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <Button onClick={calculateInvestment} className="w-full" size="lg">
                Calculate Investment
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {results && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    Future Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">
                    {formatCurrency(results.totalFutureValue)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Your investment will be worth this amount
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-blue-600">
                      {formatCurrency(results.totalContributions)}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Total Contributions
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-green-600">
                      {formatCurrency(results.totalInterest)}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Interest Earned
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Investment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Initial Investment:</span>
                    <span className="font-medium">{formatCurrency(results.initialAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Monthly Contribution:</span>
                    <span className="font-medium">{formatCurrency(results.monthlyAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Annual Return:</span>
                    <span className="font-medium">{rate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Investment Period:</span>
                    <span className="font-medium">{results.years} years</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Tips Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Investment Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Maximize Returns</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Start investing early</li>
                    <li>• Diversify your portfolio</li>
                    <li>• Consider index funds</li>
                    <li>• Reinvest dividends</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Risk Management</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Don&apos;t put all eggs in one basket</li>
                    <li>• Consider your risk tolerance</li>
                    <li>• Review and rebalance regularly</li>
                    <li>• Keep emergency fund separate</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
