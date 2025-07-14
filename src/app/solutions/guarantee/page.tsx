import { Metadata } from 'next';
import LightButton from '@/components/LightButton';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Forte Guarantee™ - 100% Satisfaction Promise',
  description: 'Our 100% satisfaction guarantee ensures you\'ll love your Forte website design. If not completely satisfied, we\'ll revise until you are - or provide a full refund.',
};

export default function ForteGuaranteePage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center items-center gap-2 mb-6">
                <Icon name="star" className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base">
                  Your Peace of Mind
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                The Forte Guarantee™
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                We're so confident you'll love your Forte website that we back every project with our 100% satisfaction guarantee.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 mb-8">
                <div className="text-4xl mb-4">🛡️</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Here's Our Promise
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  If you're not completely satisfied with your website design, we'll work with you through unlimited revisions until you absolutely love it. 
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Still not happy? We'll provide a full refund. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                How the Forte Guarantee™ Works
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    1. We Design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our team creates your custom website using The Forte Method™ and your specific requirements.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    2. You Review
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Take time to review the design. Request any changes you'd like - there's no limit on revisions.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    3. You Love It
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We continue refining until you're completely satisfied. If we can't make you happy, we refund everything.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Can Offer This */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                Why We Can Make This Promise
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        The Forte Method™ Works
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Our proven 5-step process has delivered satisfaction for 100% of our clients over 4+ years.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Deep Discovery Process
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        We spend time understanding your business, goals, and preferences before any design work begins.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Custom-Coded Excellence
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        No templates, no shortcuts. Every site is built from scratch to your exact specifications.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Ongoing Partnership
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        We're not just building a website - we're starting a long-term partnership for your success.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Track Record of Success
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        In 4+ years, we've never had a client who wasn't excited to show off their new Forte website.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        U.S.-Based Developer
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Direct communication with me means no misunderstandings, language barriers, or middlemen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  The Bottom Line
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  We'd rather do it right than do it fast. Our guarantee isn't a marketing gimmick - it's our standard operating procedure.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  "Honestly? This never happens with my process, but if it did, I'd fix it completely free." - Forte Web Designs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                Guarantee Questions & Answers
              </h2>

              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Is there really no limit on revisions?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Absolutely none. We'll keep refining and adjusting until you're completely happy with every aspect of your website. Our process is designed to get it right, but we understand preferences can evolve during the design process.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    How long do I have to request changes?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    During the initial design phase, you have unlimited time and revisions. Once your site is live, Forte Care™ includes ongoing updates and modifications as part of your monthly service.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    What if I want a complete redesign after seeing the first draft?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    No problem at all. While this rarely happens due to our thorough discovery process, we'll start fresh if that's what it takes to make you happy. Your satisfaction is more important than our time.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    How does the refund process work?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    If we genuinely can't create a website you love, we'll provide a full refund of all payments made. No paperwork, no hassles, no questions asked. (Though in 4+ years, we've never had to do this!)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Experience the Forte Guarantee™?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Join 25+ businesses who've experienced my risk-free website design process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LightButton href="/contact">
                  Start My Guaranteed Project
                </LightButton>
                <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-lg font-semibold transition-all duration-200">
                  View Our Portfolio
                </button>
              </div>
              <p className="text-sm text-primary-200 mt-6">
                💡 <strong>Remember:</strong> Every Forte website comes with the guarantee included. No extra cost, no fine print.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
