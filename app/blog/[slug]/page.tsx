import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowLeft, Tag, Clock } from 'lucide-react'

// Mock blog posts data (same as main blog page)
const blogPosts = [
  {
    id: 1,
    title: '10 Essential Steps to Build Your Emergency Fund',
    excerpt: 'Learn how to create a solid financial safety net that will protect you during unexpected situations.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Savings',
    tags: ['Emergency Fund', 'Financial Planning', 'Budgeting'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop&crop=center',
    slug: 'build-emergency-fund',
    readTime: '5 min read',
    content: `
      <h2>Why You Need an Emergency Fund</h2>
      <p>An emergency fund is your financial safety net. It's money set aside to cover unexpected expenses like medical bills, car repairs, or job loss. Without one, you might find yourself relying on credit cards or loans, which can lead to debt and financial stress.</p>
      
      <h3>Step 1: Determine Your Target Amount</h3>
      <p>Most financial experts recommend saving 3-6 months of living expenses. Start with a smaller goal of $1,000, then work your way up to the full amount.</p>
      
      <h3>Step 2: Choose the Right Account</h3>
      <p>Keep your emergency fund in a high-yield savings account that's easily accessible but separate from your regular checking account.</p>
      
      <h3>Step 3: Automate Your Savings</h3>
      <p>Set up automatic transfers from your checking account to your emergency fund. Even $25 per week adds up to $1,300 per year.</p>
      
      <h3>Step 4: Cut Unnecessary Expenses</h3>
      <p>Review your monthly expenses and identify areas where you can cut back. Cancel unused subscriptions, cook at home more often, and look for ways to reduce utility bills.</p>
      
      <h3>Step 5: Increase Your Income</h3>
      <p>Consider taking on a side hustle, selling unused items, or asking for a raise at work. Every extra dollar helps build your emergency fund faster.</p>
      
      <h3>Step 6: Use Windfalls Wisely</h3>
      <p>When you receive unexpected money like tax refunds, bonuses, or gifts, put a portion toward your emergency fund.</p>
      
      <h3>Step 7: Track Your Progress</h3>
      <p>Monitor your emergency fund balance regularly and celebrate milestones along the way.</p>
      
      <h3>Step 8: Don't Touch It</h3>
      <p>Resist the temptation to use your emergency fund for non-emergencies. It's only for true emergencies like job loss or major unexpected expenses.</p>
      
      <h3>Step 9: Replenish When Used</h3>
      <p>If you do need to use your emergency fund, make it a priority to replenish it as soon as possible.</p>
      
      <h3>Step 10: Review and Adjust</h3>
      <p>Regularly review your emergency fund needs as your life circumstances change. You may need to adjust the amount based on your family size, job stability, and other factors.</p>
      
      <p>Building an emergency fund takes time and discipline, but it's one of the most important steps you can take toward financial security. Start today, even if it's just with a small amount.</p>
    `
  },
  {
    id: 2,
    title: 'Understanding Compound Interest: The Eighth Wonder',
    excerpt: 'Discover how compound interest can work for you and accelerate your wealth building journey.',
    author: 'Michael Chen',
    date: '2024-01-12',
    category: 'Investing',
    tags: ['Compound Interest', 'Investing', 'Wealth Building'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop&crop=center',
    slug: 'compound-interest-guide',
    readTime: '7 min read',
    content: `
      <h2>The Power of Compound Interest</h2>
      <p>Albert Einstein once called compound interest "the eighth wonder of the world." He understood that compound interest is the process where interest is added to the principal amount, and then interest is earned on that new total.</p>
      
      <h3>How Compound Interest Works</h3>
      <p>Unlike simple interest, which only earns interest on the principal, compound interest earns interest on both the principal and previously earned interest. This creates a snowball effect that accelerates over time.</p>
      
      <h3>The Time Factor</h3>
      <p>Time is the most important factor in compound interest. The earlier you start investing, the more time your money has to grow. Even small amounts invested early can outpace larger amounts invested later.</p>
      
      <h3>Real-World Example</h3>
      <p>If you invest $100 per month starting at age 25 with a 7% annual return, you'll have over $1.2 million by age 65. If you wait until age 35 to start, you'll only have about $600,000.</p>
      
      <h3>Maximizing Compound Interest</h3>
      <p>To maximize the power of compound interest:</p>
      <ul>
        <li>Start investing as early as possible</li>
        <li>Invest consistently, even small amounts</li>
        <li>Reinvest dividends and interest</li>
        <li>Choose investments with good long-term returns</li>
        <li>Avoid withdrawing money unnecessarily</li>
      </ul>
      
      <p>Compound interest is a powerful wealth-building tool that rewards patience and consistency. The key is to start early and let time work in your favor.</p>
    `
  },
  {
    id: 3,
    title: 'Retirement Planning: Start Early, Retire Comfortably',
    excerpt: 'A comprehensive guide to retirement planning strategies for different life stages.',
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    category: 'Retirement',
    tags: ['Retirement', '401k', 'IRA'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center',
    slug: 'retirement-planning-guide',
    readTime: '8 min read',
    content: `
      <h2>Retirement Planning Fundamentals</h2>
      <p>Retirement planning is about ensuring you have enough money to maintain your desired lifestyle when you stop working. It requires careful planning, consistent saving, and smart investing.</p>
      
      <h3>Calculate Your Retirement Needs</h3>
      <p>Most experts recommend saving 10-15% of your income for retirement. Use the 4% rule: plan to withdraw 4% of your retirement savings annually to make them last 30 years.</p>
      
      <h3>Take Advantage of Employer Matching</h3>
      <p>If your employer offers a 401(k) match, contribute at least enough to get the full match. It's essentially free money that can significantly boost your retirement savings.</p>
      
      <h3>Consider Roth vs Traditional Accounts</h3>
      <p>Roth accounts offer tax-free withdrawals in retirement, while traditional accounts provide tax deductions now. Consider your current and expected future tax rates when choosing.</p>
      
      <h3>Diversify Your Investments</h3>
      <p>Don't put all your retirement savings in one type of investment. Diversify across stocks, bonds, and other assets to reduce risk.</p>
      
      <h3>Review and Adjust Regularly</h3>
      <p>Your retirement plan should evolve with your life circumstances. Review your goals, contributions, and investments at least annually.</p>
      
      <p>Remember, it's never too early or too late to start planning for retirement. The key is to start now and be consistent.</p>
    `
  },
  {
    id: 4,
    title: 'Tax Optimization Strategies for 2024',
    excerpt: 'Maximize your savings with these proven tax optimization techniques and strategies.',
    author: 'David Kim',
    date: '2024-01-08',
    category: 'Tax Planning',
    tags: ['Taxes', 'Optimization', '2024'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop&crop=center',
    slug: 'tax-optimization-2024',
    readTime: '6 min read',
    content: `
      <h2>Tax Optimization Strategies</h2>
      <p>Tax optimization is about legally minimizing your tax burden while maximizing your after-tax income. Here are proven strategies for 2024.</p>
      
      <h3>Maximize Retirement Contributions</h3>
      <p>Contributing to 401(k)s, IRAs, and other retirement accounts reduces your taxable income. For 2024, you can contribute up to $23,000 to a 401(k) and $7,000 to an IRA.</p>
      
      <h3>Use Health Savings Accounts</h3>
      <p>HSAs offer triple tax benefits: tax-deductible contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses.</p>
      
      <h3>Consider Tax-Loss Harvesting</h3>
      <p>Sell investments at a loss to offset capital gains and reduce your tax liability. You can use up to $3,000 in losses to offset ordinary income.</p>
      
      <h3>Optimize Your Filing Status</h3>
      <p>Choose the filing status that results in the lowest tax bill. Married couples should compare filing jointly vs. separately.</p>
      
      <h3>Take Advantage of Tax Credits</h3>
      <p>Tax credits directly reduce your tax bill. Common credits include the Earned Income Tax Credit, Child Tax Credit, and education credits.</p>
      
      <p>Remember to consult with a tax professional for personalized advice based on your specific situation.</p>
    `
  },
  {
    id: 5,
    title: 'How to Choose the Right Investment Portfolio',
    excerpt: 'Learn the fundamentals of portfolio construction and asset allocation for long-term success.',
    author: 'Lisa Wang',
    date: '2024-01-05',
    category: 'Investing',
    tags: ['Portfolio', 'Asset Allocation', 'Diversification'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center',
    slug: 'investment-portfolio-guide',
    readTime: '9 min read',
    content: `
      <h2>Building Your Investment Portfolio</h2>
      <p>A well-constructed investment portfolio is the foundation of long-term wealth building. It should be diversified, aligned with your goals, and appropriate for your risk tolerance.</p>
      
      <h3>Determine Your Risk Tolerance</h3>
      <p>Your risk tolerance depends on your age, income, financial goals, and comfort level with market volatility. Younger investors can typically take more risk.</p>
      
      <h3>Asset Allocation Basics</h3>
      <p>Asset allocation is how you divide your investments among different asset classes like stocks, bonds, and cash. A common rule is to subtract your age from 100 to determine your stock percentage.</p>
      
      <h3>Diversification Strategies</h3>
      <p>Diversify across:</p>
      <ul>
        <li>Asset classes (stocks, bonds, real estate)</li>
        <li>Geographic regions (domestic and international)</li>
        <li>Company sizes (large-cap, mid-cap, small-cap)</li>
        <li>Sectors (technology, healthcare, finance, etc.)</li>
      </ul>
      
      <h3>Rebalancing Your Portfolio</h3>
      <p>Regularly rebalance your portfolio to maintain your target asset allocation. This typically involves selling winners and buying losers to maintain your desired mix.</p>
      
      <h3>Consider Index Funds</h3>
      <p>Index funds offer broad diversification at low cost. They're an excellent choice for most investors, especially beginners.</p>
      
      <p>Remember, the best portfolio is one you can stick with through market ups and downs.</p>
    `
  },
  {
    id: 6,
    title: 'Debt Management: From Overwhelmed to Debt-Free',
    excerpt: 'Practical strategies to tackle debt and build a path to financial freedom.',
    author: 'Robert Taylor',
    date: '2024-01-03',
    category: 'Debt Management',
    tags: ['Debt', 'Financial Freedom', 'Strategies'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop&crop=center',
    slug: 'debt-management-strategies',
    readTime: '6 min read',
    content: `
      <h2>Debt Management Strategies</h2>
      <p>Debt can feel overwhelming, but with the right strategies, you can take control and work toward financial freedom.</p>
      
      <h3>Assess Your Debt Situation</h3>
      <p>Start by listing all your debts, including balances, interest rates, and minimum payments. This gives you a clear picture of what you're dealing with.</p>
      
      <h3>Choose Your Strategy</h3>
      <p>Two popular methods are:</p>
      <ul>
        <li><strong>Debt Snowball:</strong> Pay off smallest debts first for psychological wins</li>
        <li><strong>Debt Avalanche:</strong> Pay off highest interest rate debts first to save money</li>
      </ul>
      
      <h3>Create a Budget</h3>
      <p>Track your income and expenses to find money for debt payments. Cut unnecessary expenses and redirect that money toward debt.</p>
      
      <h3>Increase Your Income</h3>
      <p>Consider side hustles, selling unused items, or asking for a raise. Extra income can accelerate your debt payoff.</p>
      
      <h3>Negotiate with Creditors</h3>
      <p>Contact your creditors to negotiate lower interest rates or payment plans. Many are willing to work with you.</p>
      
      <h3>Stay Motivated</h3>
      <p>Celebrate small wins and track your progress. Debt payoff is a marathon, not a sprint.</p>
      
      <p>Remember, becoming debt-free is possible with commitment and the right strategy.</p>
    `
  }
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400 mb-6">
            <span className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              {post.readTime}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Author Bio */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{post.author}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Financial expert with over 10 years of experience helping people achieve their financial goals.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-32 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

