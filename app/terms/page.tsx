import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - MoneyZenGuide',
  description: 'Terms of Service for MoneyZenGuide - Legal terms and conditions for using our financial planning services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Terms of Service
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  By accessing and using MoneyZenGuide ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Description of Service
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  MoneyZenGuide provides educational financial planning resources, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Free downloadable financial guides and manuals</li>
                  <li>Financial calculators and tools</li>
                  <li>Educational blog content</li>
                  <li>Financial planning resources</li>
                </ul>
                <p>
                  <strong>Important Disclaimer:</strong> Our content is for educational purposes only and does not constitute financial, investment, or legal advice.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Financial Advice Disclaimer
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  <strong>CRITICAL DISCLAIMER:</strong> The information provided on MoneyZenGuide is for educational and informational purposes only. It is not intended as:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Professional financial advice</li>
                  <li>Investment recommendations</li>
                  <li>Tax advice</li>
                  <li>Legal advice</li>
                  <li>Guaranteed financial results</li>
                </ul>
                <p>
                  <strong>No Guarantees:</strong> We make no guarantees about the accuracy, completeness, or suitability of the information provided. Past performance does not guarantee future results.
                </p>
                <p>
                  <strong>Professional Consultation:</strong> Always consult with qualified financial professionals before making any financial decisions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. User Responsibilities
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>As a user of our service, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the service only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not use the service to transmit harmful or malicious content</li>
                  <li>Respect intellectual property rights</li>
                  <li>Provide accurate information when required</li>
                  <li>Use the information responsibly and at your own risk</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Intellectual Property
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  All content on MoneyZenGuide, including but not limited to text, graphics, logos, images, and software, is the property of MoneyZenGuide and is protected by copyright and other intellectual property laws.
                </p>
                <p>
                  You may download and use our free guides for personal, non-commercial use only. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Redistribute or resell our content</li>
                  <li>Modify or create derivative works</li>
                  <li>Use our content for commercial purposes without permission</li>
                  <li>Remove copyright or proprietary notices</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Limitation of Liability
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  <strong>NO LIABILITY:</strong> MoneyZenGuide shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use or inability to use the service</li>
                  <li>Financial decisions made based on our content</li>
                  <li>Investment losses or gains</li>
                  <li>Any errors or omissions in our content</li>
                  <li>Interruption of service</li>
                </ul>
                <p>
                  <strong>USE AT YOUR OWN RISK:</strong> You acknowledge that you use our service and content at your own risk.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. No Warranties
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  The service is provided "as is" without any warranties, express or implied. We disclaim all warranties, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Warranties of merchantability</li>
                  <li>Warranties of fitness for a particular purpose</li>
                  <li>Warranties of non-infringement</li>
                  <li>Warranties regarding accuracy or reliability</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Third-Party Links
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  Our service may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these websites. Use of third-party websites is at your own risk.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Termination
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  We reserve the right to terminate or suspend your access to our service at any time, without notice, for any reason, including violation of these terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. Governing Law
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to conflict of law principles.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                11. Changes to Terms
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the service constitutes acceptance of the modified terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                12. Contact Information
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li>Email: <a href="mailto:legal@moneyzenguide.com" className="text-blue-600 hover:text-blue-500">legal@moneyzenguide.com</a></li>
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
