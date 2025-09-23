import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - MoneyZenGuide',
  description: 'Privacy Policy for MoneyZenGuide - How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Information We Collect
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  <strong>Personal Information:</strong> When you download our free guides, we may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email address (if provided)</li>
                  <li>Name (if provided)</li>
                  <li>Download preferences</li>
                </ul>
                
                <p>
                  <strong>Automatically Collected Information:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited on our website</li>
                  <li>Time spent on our website</li>
                  <li>Referring website</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. How We Use Your Information
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide you with free financial guides and resources</li>
                  <li>Improve our website and services</li>
                  <li>Send you relevant financial tips and updates (if you opt-in)</li>
                  <li>Analyze website usage and performance</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Information Sharing
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With service providers who assist us in operating our website</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Cookies and Tracking
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic and usage</li>
                  <li>Improve user experience</li>
                  <li>Provide personalized content</li>
                </ul>
                <p>
                  You can control cookies through your browser settings. 
                  However, disabling cookies may affect website functionality.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Data Security
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Your Rights
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at: 
                  <a href="mailto:privacy@moneyzenguide.com" className="text-blue-600 hover:text-blue-500">
                    privacy@moneyzenguide.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Third-Party Services
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  Our website may contain links to third-party websites. We are not responsible 
                  for the privacy practices of these websites. We encourage you to read their 
                  privacy policies.
                </p>
                <p>
                  We use the following third-party services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vercel (website hosting)</li>
                  <li>Google Analytics (website analytics)</li>
                  <li>Meta Pixel (advertising tracking)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Children's Privacy
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  Our services are not intended for children under 13 years of age. 
                  We do not knowingly collect personal information from children under 13.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Changes to This Policy
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  We may update this privacy policy from time to time. We will notify you 
                  of any changes by posting the new policy on this page and updating the 
                  "Last updated" date.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. Contact Us
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  If you have any questions about this privacy policy, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li>Email: <a href="mailto:privacy@moneyzenguide.com" className="text-blue-600 hover:text-blue-500">privacy@moneyzenguide.com</a></li>
                  <li>Website: <a href="https://moneyzenguide.com" className="text-blue-600 hover:text-blue-500">moneyzenguide.com</a></li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
