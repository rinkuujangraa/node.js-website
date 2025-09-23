'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PiggyBank, Calculator, DollarSign, Target } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState('')
  const [retirementAge, setRetirementAge] = useState('')
  const [currentSavings, setCurrentSavings] = useState('')
  const [monthlyContribution, setMonthlyContribution] = useState('')
  const [rate, setRate] = useState('')
  const [retirementIncome, setRetirementIncome] = useState('')
  const [results, setResults] = useState<any>(null)

  const calculateRetirement = () => {
    const age = parseFloat(currentAge) || 0
    const retireAge = parseFloat(retirementAge) || 0
    const savings = parseFloat(currentSavings || '0') || 0
    const monthlyAmount = parseFloat(monthlyContribution || '0') || 0
    const annualRate = parseFloat(rate) || 0
    const desiredIncome = parseFloat(retirementIncome) || 0
    
    const yearsToRetirement = retireAge - age
    const months = yearsToRetirement * 12

    // Validate inputs
    if (!currentAge || !retirementAge || !rate || !retirementIncome) {
      alert('Please fill in all required fields')
      return
    }

    if (age <= 0 || retireAge <= 0) {
      alert('Age must be greater than 0')
      return
    }

    if (retireAge <= age) {
      alert('Retirement age must be greater than current age')
      return
    }

    if (annualRate < 0) {
      alert('Expected annual return cannot be negative')
      return
    }

    if (savings < 0 || monthlyAmount < 0) {
      alert('Savings amounts cannot be negative')
      return
    }

    if (desiredIncome <= 0) {
      alert('Desired retirement income must be greater than 0')
      return
    }

    // Calculate future value of current savings
    const currentSavingsFuture = savings * Math.pow(1 + annualRate / 100, yearsToRetirement)
    
    // Calculate future value of monthly contributions
    const monthlyRate = annualRate / 12 / 100
    const monthlyFutureValue = monthlyAmount > 0 ? monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) : 0
    
    const totalRetirementFund = currentSavingsFuture + monthlyFutureValue
    const totalContributions = savings + (monthlyAmount * months)
    const totalInterest = totalRetirementFund - totalContributions

    // Calculate if they'll have enough (assuming 4% withdrawal rate)
    const annualWithdrawal = totalRetirementFund * 0.04
    const monthlyWithdrawal = annualWithdrawal / 12
    const isOnTrack = annualWithdrawal >= desiredIncome

    setResults({
      totalRetirementFund,
      totalContributions,
      totalInterest,
      annualWithdrawal,
      monthlyWithdrawal,
      isOnTrack,
      yearsToRetirement,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-orange-500 rounded-lg">
              <PiggyBank className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Retirement Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Plan for your retirement and see if you&apos;re on track to meet your retirement income goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 h-5 w-5" />
                Retirement Details
              </CardTitle>
              <CardDescription>
                Enter your retirement planning information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Age
                  </label>
                  <Input
                    type="number"
                    placeholder="30"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Retirement Age
                  </label>
                  <Input
                    type="number"
                    placeholder="65"
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Retirement Savings
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="number"
                    placeholder="50,000"
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
                    placeholder="1,000"
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
                  Desired Annual Retirement Income
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="number"
                    placeholder="80,000"
                    value={retirementIncome}
                    onChange={(e) => setRetirementIncome(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Button onClick={calculateRetirement} className="w-full" size="lg">
                Calculate Retirement
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
                    Retirement Fund
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600">
                    {formatCurrency(results.totalRetirementFund)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Total retirement savings at retirement age
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-blue-600">
                      {formatCurrency(results.annualWithdrawal)}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Annual Withdrawal (4% rule)
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
                  <CardTitle>Retirement Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`p-4 rounded-lg ${results.isOnTrack ? 'bg-green-50 dark:bg-green-900' : 'bg-red-50 dark:bg-red-900'}`}>
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${results.isOnTrack ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className={`font-semibold ${results.isOnTrack ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                        {results.isOnTrack ? 'On Track!' : 'Needs Adjustment'}
                      </span>
                    </div>
                    <p className={`text-sm mt-2 ${results.isOnTrack ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                      {results.isOnTrack 
                        ? 'You are on track to meet your retirement income goals.'
                        : 'Consider increasing your monthly contributions or adjusting your retirement goals.'
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Retirement Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Years to Retirement:</span>
                    <span className="font-medium">{results.yearsToRetirement} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Total Contributions:</span>
                    <span className="font-medium">{formatCurrency(results.totalContributions)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Monthly Withdrawal:</span>
                    <span className="font-medium">{formatCurrency(results.monthlyWithdrawal)}</span>
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
              <CardTitle>Retirement Planning Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Maximize Savings</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Contribute to 401(k) up to employer match</li>
                    <li>• Consider Roth IRA for tax-free growth</li>
                    <li>• Increase contributions annually</li>
                    <li>• Take advantage of catch-up contributions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Retirement Strategy</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Plan for healthcare costs</li>
                    <li>• Consider Social Security timing</li>
                    <li>• Diversify retirement accounts</li>
                    <li>• Review and adjust plan regularly</li>
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
