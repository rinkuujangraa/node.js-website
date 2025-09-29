import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    content: 'Financial Guide helped me understand my finances better than any other platform. The calculators are incredibly accurate and the content is always up-to-date.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    content: 'I\'ve been using this platform for retirement planning, and it\'s been a game-changer. The insights and tools have helped me optimize my investment strategy.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Teacher',
    content: 'As someone new to investing, this platform made everything so much clearer. The educational guides and calculators gave me the confidence to start investing.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their financial lives 
            with our comprehensive tools and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg relative"
            >
              <Quote className="h-8 w-8 text-blue-500 mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
