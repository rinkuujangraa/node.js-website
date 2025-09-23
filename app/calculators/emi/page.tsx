'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, DollarSign, TrendingUp, CreditCard } from 'lucide-react'
import { formatCurrency, calculateEMI as calculateEMIUtil } from '@/lib/utils'

export default function EMICalculator() {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [results, setResults] = useState<any>(null)

  const calculateEMI = () => {
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
      alert('Loan tenure must be greater than 0')
      return
    }

    const emi = calculateEMIUtil(loanAmount, annualRate, months)
    const totalPayment = emi * months
    const totalInterest = totalPayment - loanAmount

    // Calculate amortization schedule (first 12 months)
    const amortizationSchedule = []
    let remainingBalance = loanAmount
    const monthlyRate = annualRate / (12 * 100)

    for (let month = 1; month <= Math.min(12, months); month++) {
      const interestPayment = remainingBalance * monthlyRate
      const principalPayment = emi - interestPayment
      remainingBalance -= principalPayment

      amortizationSchedule.push({
        month,
        emi: emi,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, remainingBalance),
      })
    }

    setResults({
      emi,
      totalPayment,
      totalInterest,
      loanAmount,
      amortizationSchedule,
      months,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-red-500 rounded-lg">
              <Calculator className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            EMI Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate your Equated Monthly Installment (EMI) for loans and see the breakdown of principal and interest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Loan Details
              </CardTitle>
              <CardDescription>
                Enter your loan information to calculate EMI
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
                    placeholder="100,000"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Interest Rate (% per annum)
                </label>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="12"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Loan Tenure (years)
                </label>
                <Input
                  type="number"
                  placeholder="5"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <Button onClick={calculateEMI} className="w-full" size="lg">
                Calculate EMI
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
                    Monthly EMI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">
                    {formatCurrency(results.emi)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Your monthly installment amount
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
                    <div className="text-2xl font-bold text-orange-600">
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
                    <span className="font-medium">{rate}% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Loan Tenure:</span>
                    <span className="font-medium">{time} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Total EMI Payments:</span>
                    <span className="font-medium">{results.months}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Amortization Schedule */}
        {results && results.amortizationSchedule && (
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Amortization Schedule (First 12 Months)</CardTitle>
                <CardDescription>
                  Breakdown of principal and interest payments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Month</th>
                        <th className="text-right p-2">EMI</th>
                        <th className="text-right p-2">Principal</th>
                        <th className="text-right p-2">Interest</th>
                        <th className="text-right p-2">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.amortizationSchedule.map((payment: any, index: number) => (
                        <tr key={index} className="border-b">
                          <td className="p-2">{payment.month}</td>
                          <td className="text-right p-2">{formatCurrency(payment.emi)}</td>
                          <td className="text-right p-2">{formatCurrency(payment.principal)}</td>
                          <td className="text-right p-2">{formatCurrency(payment.interest)}</td>
                          <td className="text-right p-2">{formatCurrency(payment.balance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>EMI Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Reduce Your EMI</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Increase your down payment</li>
                    <li>• Choose a longer tenure</li>
                    <li>• Negotiate for lower interest rates</li>
                    <li>• Compare offers from multiple lenders</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">EMI Management</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Keep EMI under 40% of income</li>
                    <li>• Set up automatic payments</li>
                    <li>• Make prepayments when possible</li>
                    <li>• Monitor your credit score</li>
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
