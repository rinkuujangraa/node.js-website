'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PiggyBank, Calculator, DollarSign, Target } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

export default function SavingsCalculator() {
  const [goal, setGoal] = useState('')
  const [currentSavings, setCurrentSavings] = useState('')
  const [monthlyContribution, setMonthlyContribution] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [results, setResults] = useState<any>(null)

  const calculateSavings = () => {
    const goalAmount = parseFloat(goal) || 0
    const currentAmount = parseFloat(currentSavings || '0') || 0
    const monthlyAmount = parseFloat(monthlyContribution || '0') || 0
    const annualRate = parseFloat(rate) || 0
    const years = parseFloat(time) || 0
    const months = years * 12

    // Validate inputs
    if (!goal || !time) {
      alert('Please fill in the required fields: Savings Goal and Time Period')
      return
    }

    if (goalAmount <= 0) {
      alert('Savings goal must be greater than 0')
      return
    }

    if (years <= 0) {
      alert('Time period must be greater than 0')
      return
    }

    if (annualRate < 0) {
      alert('Interest rate cannot be negative')
      return
    }

    if (currentAmount < 0 || monthlyAmount < 0) {
      alert('Savings amounts cannot be negative')
      return
    }

    // Calculate future value of current savings
    const currentSavingsFuture = currentAmount * Math.pow(1 + annualRate / 100, years)
    
    // Calculate future value of monthly contributions
    const monthlyRate = annualRate / 12 / 100
    const monthlyFutureValue = monthlyAmount > 0 ? monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) : 0
    
    const totalFutureValue = currentSavingsFuture + monthlyFutureValue
    const totalContributions = currentAmount + (monthlyAmount * months)
    const totalInterest = totalFutureValue - totalContributions

    // Calculate if goal will be met
    const goalMet = totalFutureValue >= goalAmount
    const shortfall = goalAmount - totalFutureValue

    setResults({
      totalFutureValue,
      totalContributions,
      totalInterest,
      goalAmount,
      goalMet,
      shortfall,
      years,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-teal-500 rounded-lg">
              <PiggyBank className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Savings Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate how much you need to save to reach your financial goals and see the power of compound interest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 h-5 w-5" />
                Savings Goal
              </CardTitle>
              <CardDescription>
                Enter your savings goal and current situation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Savings Goal
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="number"
                    placeholder="50,000"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Savings
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="number"
                    placeholder="5,000"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(e.target.value)}
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
                  Annual Interest Rate (%)
                </label>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="3.5"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Time Period (years)
                </label>
                <Input
                  type="number"
                  placeholder="5"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <Button onClick={calculateSavings} className="w-full" size="lg">
                Calculate Savings
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
                    Goal Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`p-4 rounded-lg ${results.goalMet ? 'bg-green-50 dark:bg-green-900' : 'bg-red-50 dark:bg-red-900'}`}>
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${results.goalMet ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className={`font-semibold ${results.goalMet ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                        {results.goalMet ? 'Goal Achieved!' : 'Goal Not Met'}
                      </span>
                    </div>
                    <p className={`text-sm mt-2 ${results.goalMet ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                      {results.goalMet 
                        ? `You'll have ${formatCurrency(results.totalFutureValue - results.goalAmount)} more than your goal!`
                        : `You'll need ${formatCurrency(results.shortfall)} more to reach your goal.`
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Future Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-teal-600">
                    {formatCurrency(results.totalFutureValue)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Total savings after {results.years} years
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
                  <CardTitle>Savings Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Goal Amount:</span>
                    <span className="font-medium">{formatCurrency(results.goalAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Current Savings:</span>
                    <span className="font-medium">{formatCurrency(parseFloat(currentSavings || '0'))}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Monthly Contribution:</span>
                    <span className="font-medium">{formatCurrency(parseFloat(monthlyContribution || '0'))}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Interest Rate:</span>
                    <span className="font-medium">{rate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Time Period:</span>
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
              <CardTitle>Savings Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Maximize Your Savings</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Set up automatic transfers</li>
                    <li>• Use high-yield savings accounts</li>
                    <li>• Take advantage of employer matches</li>
                    <li>• Review and adjust regularly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Savings Strategies</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Pay yourself first</li>
                    <li>• Use the 50/30/20 rule</li>
                    <li>• Cut unnecessary expenses</li>
                    <li>• Increase contributions over time</li>
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
