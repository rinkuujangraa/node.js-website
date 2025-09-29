import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Mock data - in a real app, this would come from your CMS
const latestPosts = [
  {
    id: 1,
    title: '10 Essential Steps to Build Your Emergency Fund',
    excerpt: 'Learn how to create a solid financial safety net that will protect you during unexpected situations.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Savings',
    image: '/api/placeholder/400/250',
    slug: 'build-emergency-fund',
  },
  {
    id: 2,
    title: 'Understanding Compound Interest: The Eighth Wonder',
    excerpt: 'Discover how compound interest can work for you and accelerate your wealth building journey.',
    author: 'Michael Chen',
    date: '2024-01-12',
    category: 'Investing',
    image: '/api/placeholder/400/250',
    slug: 'compound-interest-guide',
  },
  {
    id: 3,
    title: 'Retirement Planning: Start Early, Retire Comfortably',
    excerpt: 'A comprehensive guide to retirement planning for different life stages.',
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    category: 'Retirement',
    image: '/api/placeholder/400/250',
    slug: 'retirement-planning-guide',
  },
]

export function LatestPosts() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Financial Articles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed with our latest articles, guides, and educational content on personal finance, 
            investing, and wealth building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </span>
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
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/blog">
              View All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
