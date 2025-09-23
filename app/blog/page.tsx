'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { useState } from 'react'

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: '10 Essential Steps to Build Your Emergency Fund',
    excerpt: 'Learn how to create a solid financial safety net that will protect you during unexpected situations.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Savings',
    tags: ['Emergency Fund', 'Financial Planning', 'Budgeting'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
    slug: 'build-emergency-fund',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Understanding Compound Interest: The Eighth Wonder',
    excerpt: 'Discover how compound interest can work for you and accelerate your wealth building journey.',
    author: 'Michael Chen',
    date: '2024-01-12',
    category: 'Investing',
    tags: ['Compound Interest', 'Investing', 'Wealth Building'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop&crop=center',
    slug: 'compound-interest-guide',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Retirement Planning: Start Early, Retire Comfortably',
    excerpt: 'A comprehensive guide to retirement planning strategies for different life stages.',
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    category: 'Retirement',
    tags: ['Retirement', '401k', 'IRA'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
    slug: 'retirement-planning-guide',
    readTime: '8 min read',
  },
  {
    id: 4,
    title: 'Tax Optimization Strategies for 2024',
    excerpt: 'Maximize your savings with these proven tax optimization techniques and strategies.',
    author: 'David Kim',
    date: '2024-01-08',
    category: 'Tax Planning',
    tags: ['Taxes', 'Optimization', '2024'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center',
    slug: 'tax-optimization-2024',
    readTime: '6 min read',
  },
  {
    id: 5,
    title: 'How to Choose the Right Investment Portfolio',
    excerpt: 'Learn the fundamentals of portfolio construction and asset allocation for long-term success.',
    author: 'Lisa Wang',
    date: '2024-01-05',
    category: 'Investing',
    tags: ['Portfolio', 'Asset Allocation', 'Diversification'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
    slug: 'investment-portfolio-guide',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'Debt Management: From Overwhelmed to Debt-Free',
    excerpt: 'Practical strategies to tackle debt and build a path to financial freedom.',
    author: 'Robert Taylor',
    date: '2024-01-03',
    category: 'Debt Management',
    tags: ['Debt', 'Financial Freedom', 'Strategies'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
    slug: 'debt-management-strategies',
    readTime: '6 min read',
  },
]

const categories = ['All', 'Savings', 'Investing', 'Retirement', 'Tax Planning', 'Debt Management']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Financial Zen
            <span className="block text-blue-200">& Expert Insights</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Discover financial peace with our latest articles, guides, and expert advice on personal finance, 
            investing, and wealth building.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? 'default' : 'outline'}
                className="mb-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Article</h2>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {blogPosts[0].author}
                  </span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full mb-3">
                  {blogPosts[0].category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  Read Full Article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Stay Updated with Financial Zen
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get weekly financial tips, market updates, and exclusive content delivered 
            straight to your inbox. Join 12K+ subscribers achieving financial peace.
          </p>
          <Button 
            size="lg"
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 transition-all duration-300"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  )
}
