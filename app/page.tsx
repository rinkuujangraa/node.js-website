import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Calculators } from '@/components/sections/calculators'
import { LatestPosts } from '@/components/sections/latest-posts'
import { Newsletter } from '@/components/sections/newsletter'
import { Testimonials } from '@/components/sections/testimonials'
import { FreeGuideCTA } from '@/components/sections/free-guide-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FreeGuideCTA />
      <Features />
      <Calculators />
      <LatestPosts />
      <Testimonials />
      <Newsletter />
    </>
  )
}
