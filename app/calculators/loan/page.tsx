'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CreditCard, Calculator, TrendingUp, DollarSign } from 'lucide-react'
import { formatCurrency, calculateEMI } from '@/lib/utils'

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [results, setResults] = useState<any>(null)

  const calculateLoan = () => {
    const loanAmount = parseFloat(principal) || 0
    const annualRate = parseFloat(rate) || 0
    const years = parseFloat(time) || 0
    const months = years * 12

    // Validate inputs
    if (!principal || !rate || !time) {
      alert('Please fill in all required fields')
      return
    }

    if (loanAmount <= 0) {
      alert('Loan amount must be greater than 0')
      return
    }

    if (annualRate <= 0) {
      alert('Interest rate must be greater than 0')
      return
    }

    if (months <= 0) {
      alert('Loan term must be greater than 0')
      return
    }

    const monthlyPayment = calculateEMI(loanAmount, annualRate, months)
    const totalPayment = monthlyPayment * months
    const totalInterest = totalPayment - loanAmount

    setResults({
      monthlyPayment,
      totalPayment,
      totalInterest,
      loanAmount,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-green-500 rounded-lg">
              <CreditCard className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Loan Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate your monthly loan payments, total interest, and see how much you&apos;ll pay over the life of your loan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 h-5 w-5" />
                Loan Details
              </CardTitle>
              <CardDescription>
                Enter your loan information to calculate your payments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Loan Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="number"
                    placeholder="25,000"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Interest Rate (%)
                </label>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="8.5"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Loan Term (years)
                </label>
                <Input
                  type="number"
                  placeholder="5"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <Button onClick={calculateLoan} className="w-full" size="lg">
                Calculate Loan
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {results && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Monthly Payment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">
                    {formatCurrency(results.monthlyPayment)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Your monthly loan payment
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-blue-600">
                      {formatCurrency(results.totalPayment)}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Total Payment
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-red-600">
                      {formatCurrency(results.totalInterest)}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Total Interest
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Loan Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Loan Amount:</span>
                    <span className="font-medium">{formatCurrency(results.loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Interest Rate:</span>
                    <span className="font-medium">{rate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Loan Term:</span>
                    <span className="font-medium">{time} years</span>
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
              <CardTitle>Loan Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Save on Interest</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Make extra principal payments</li>
                    <li>• Consider shorter loan terms</li>
                    <li>• Shop around for better rates</li>
                    <li>• Improve your credit score</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Loan Types</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Personal loans: Unsecured</li>
                    <li>• Auto loans: Secured by vehicle</li>
                    <li>• Home equity: Secured by home</li>
                    <li>• Student loans: Special terms</li>
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
