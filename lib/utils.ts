import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}

export function calculateEMI(principal: number, rate: number, time: number): number {
  const monthlyRate = rate / (12 * 100)
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, time)) / 
               (Math.pow(1 + monthlyRate, time) - 1)
  return emi
}

export function calculateCompoundInterest(principal: number, rate: number, time: number, frequency: number = 12): number {
  const amount = principal * Math.pow(1 + (rate / frequency), frequency * time)
  return amount - principal
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}
