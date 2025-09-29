import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Download, Gift, Star, CheckCircle, ArrowRight, Users } from 'lucide-react'

export function FreeGuideCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
            <Gift className="h-5 w-5 mr-2" />
            LIMITED TIME OFFER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Download Free Financial Planning Guide
            <span className="block text-blue-200">PDF + Windows App - FREE!</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Join over <strong className="text-blue-200">15,000+ users</strong> who have downloaded our comprehensive financial planning guide. 
            Get instant access to budgeting tips, investment strategies, and retirement planning - plus our Windows app!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Guide Preview */}
          <div className="text-center lg:text-left">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="p-4 bg-white rounded-lg">
                    <Download className="h-8 w-8 text-blue-900" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Complete Financial Planning Package
                </h3>
                <p className="text-blue-100 mb-6">
                  Get our comprehensive PDF guide plus powerful Windows app with advanced calculators, 
                  portfolio tracking, and offline access for complete privacy.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-200 mr-3 flex-shrink-0" />
                    <span>Comprehensive PDF guide (instant download)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-200 mr-3 flex-shrink-0" />
                    <span>Advanced financial calculators</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-200 mr-3 flex-shrink-0" />
                    <span>Portfolio tracking & analysis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-200 mr-3 flex-shrink-0" />
                    <span>Windows app included (optional)</span>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-blue-100">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    15K+ downloads
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-blue-200" />
                    4.9/5 rating
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - CTA */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Get Your Free Financial Guide!
              </h3>
              <p className="text-gray-600 mb-8">
                Instant PDF download • Windows app included • 100% free forever
              </p>
              
              <div className="space-y-4 mb-8">
                <Button 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6"
                  asChild
                >
                  <Link href="/downloads">
                    <Download className="mr-2 h-5 w-5" />
                    Download Free PDF Guide
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full text-lg py-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                  asChild
                >
                  <Link href="/downloads">
                    Also Get Windows App
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="text-sm text-gray-500">
                <p>✅ Instant PDF download</p>
                <p>✅ Windows app included</p>
                <p>✅ No signup required</p>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-8 text-center">
              <p className="text-blue-100 text-sm mb-4">Trusted by thousands of users</p>
              <div className="flex justify-center space-x-8 text-blue-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-200">15K+</div>
                  <div className="text-xs">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-200">4.9★</div>
                  <div className="text-xs">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-200">PDF</div>
                  <div className="text-xs">Guide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
