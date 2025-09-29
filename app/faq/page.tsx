import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle, Calculator, CreditCard, TrendingUp, PiggyBank } from 'lucide-react'

const faqCategories = [
  {
    title: 'General Questions',
    icon: HelpCircle,
    questions: [
      {
        question: 'What is Financial Guide?',
        answer: 'Financial Guide is a comprehensive platform that provides financial planning tools, calculators, educational content, and resources to help you make informed financial decisions and achieve your financial goals.'
      },
      {
        question: 'Is Financial Guide free to use?',
        answer: 'Yes! We offer a free tier with basic calculators, free financial guide booklets, and community access. We also have premium plans with advanced features and personalized guidance.'
      },
      {
        question: 'Do I need to create an account?',
        answer: 'You can use our basic calculators without an account, but creating a free account gives you access to save your calculations, download free guides, and receive personalized recommendations.'
      },
      {
        question: 'Is my financial information secure?',
        answer: 'Absolutely. We use bank-level encryption and security measures to protect your data. We never share your personal information with third parties without your consent.'
      }
    ]
  },
  {
    title: 'Calculators',
    icon: Calculator,
    questions: [
      {
        question: 'What calculators are available?',
        answer: 'We offer mortgage, loan, investment, retirement, savings, and EMI calculators. Each calculator provides detailed results and helpful tips for your financial planning.'
      },
      {
        question: 'Are the calculator results accurate?',
        answer: 'Our calculators use industry-standard formulas and are regularly updated. However, they provide estimates and should be used as a starting point for your financial planning.'
      },
      {
        question: 'Can I save my calculations?',
        answer: 'Yes! With a free account, you can save your calculations and access them later. Premium users get additional features like comparison tools and detailed reports.'
      },
      {
        question: 'Do you offer mobile apps?',
        answer: 'Our website is fully responsive and works great on mobile devices. We\'re also working on dedicated mobile apps for iOS and Android.'
      }
    ]
  },
  {
    title: 'Investments & Savings',
    icon: TrendingUp,
    questions: [
      {
        question: 'What investment guidance do you provide?',
        answer: 'We provide educational content and tools to help you understand investing. Our premium plans include personalized investment guidance from certified financial advisors.'
      },
      {
        question: 'How do I start investing?',
        answer: 'Start with our free investment guide booklet, use our investment calculator to set goals, and consider our premium plans for personalized guidance based on your risk tolerance and financial situation.'
      },
      {
        question: 'What is compound interest?',
        answer: 'Compound interest is interest calculated on the initial principal and accumulated interest from previous periods. It\'s a powerful wealth-building tool that we explain in detail in our guides.'
      },
      {
        question: 'How much should I save for retirement?',
        answer: 'The general rule is to save 10-15% of your income, but this varies based on your age, income, and retirement goals. Use our retirement calculator for a personalized estimate.'
      }
    ]
  },
  {
    title: 'Loans & Credit',
    icon: CreditCard,
    questions: [
      {
        question: 'How do I choose the right loan?',
        answer: 'Compare interest rates, terms, and fees using our loan calculator. Consider your budget, credit score, and long-term financial goals when making your decision.'
      },
      {
        question: 'What\'s the difference between APR and interest rate?',
        answer: 'The interest rate is the cost of borrowing, while APR (Annual Percentage Rate) includes additional fees and costs. Always compare APRs when shopping for loans.'
      },
      {
        question: 'How can I improve my credit score?',
        answer: 'Pay bills on time, keep credit utilization low, maintain a mix of credit types, and avoid opening too many new accounts. Our guides provide detailed strategies for credit improvement.'
      },
      {
        question: 'Should I pay off debt or invest?',
        answer: 'Generally, pay off high-interest debt first, then invest. However, this depends on your specific situation, interest rates, and risk tolerance. Our advisors can help you create a personalized strategy.'
      }
    ]
  },
  {
    title: 'Pricing & Plans',
    icon: PiggyBank,
    questions: [
      {
        question: 'What\'s included in the free plan?',
        answer: 'Free plan includes basic calculators, free financial guide booklets, monthly newsletter, community access, and basic investment tools.'
      },
      {
        question: 'What are the benefits of Premium?',
        answer: 'Premium includes all free features plus advanced calculators, personalized investment guidance, priority support, tax optimization tools, and detailed financial reports.'
      },
      {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access to premium features until the end of your billing period.'
      },
      {
        question: 'Do you offer refunds?',
        answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact our support team for a full refund.'
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked
            <span className="block text-blue-200">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about our financial tools, services, and how to get started with your financial planning journey.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <HelpCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <category.icon className="h-6 w-6 mr-3 text-blue-600" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16">
          <Card className="bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700">
            <CardContent className="p-8 text-center">
              <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Can't find the answer you&apos;re looking for? Our support team is here to help you with any questions about our platform, financial planning, or your account.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="mailto:support@financialguide.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
