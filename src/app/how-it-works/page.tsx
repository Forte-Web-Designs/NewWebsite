import { Metadata } from 'next';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'How It Works | Forte Web Design',
  description: 'Learn about our simple 3-step process: Consultation, Design, and Launch. Get your new website in 2-3 weeks with clear timelines and expectations.',
};

export default function HowItWorksPage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <SimpleScrollReveal>
            <div className="mb-6">
              <div className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                📋 Simple 3-Step Process
              </div>
            </div>
            
            <h1 className="font-roboto font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-center mb-6">
              How We Build Your Perfect Website
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              No confusing agency processes or endless meetings. Just a clear, simple path from idea to launch in 2-3 weeks.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <span>⏱️</span>
                <span className="text-sm font-medium">2-3 Week Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <span>📞</span>
                <span className="text-sm font-medium">(817) 873-6655 - Same Day Response</span>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>

        {/* 3-Step Process */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Step 1: Consultation */}
            <SimpleScrollReveal>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      1
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      Consultation & Discovery
                    </h2>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      We start with a friendly conversation about your business goals, target customers, and what success looks like for you.
                    </p>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What We'll Cover:</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>Your business goals and target audience</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>Current challenges with your online presence</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>Project timeline and expectations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>Content strategy and messaging approach</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong className="text-gray-900 dark:text-white">Timeline:</strong> 30-60 minute call + follow-up questions via email
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">💬</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Personal Consultation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      You'll work directly with me - no account managers or middlemen. Just honest conversation about what your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            {/* Step 2: Design & Development */}
            <SimpleScrollReveal>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div className="lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      2
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      Design & Development
                    </h2>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      I'll create your website from scratch, focusing on what actually matters: converting visitors into customers.
                    </p>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What You Get:</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>Custom design that reflects your brand</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>Mobile-optimized for all devices</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>Fast loading speeds</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>SEO-friendly structure</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>Clear calls-to-action</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong className="text-gray-900 dark:text-white">Timeline:</strong> 1-2 weeks development + 1 round of revisions
                    </p>
                  </div>
                </div>
                
                <div className="lg:order-1 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Built Just for You
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      No templates or cookie-cutter designs. Every site is hand-coded and designed specifically for your business and customers.
                    </p>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            {/* Step 3: Launch & Support */}
            <SimpleScrollReveal>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      3
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      Launch & Ongoing Support
                    </h2>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      Your website goes live, and I stick around to make sure everything runs smoothly. This isn't a "set it and forget it" relationship.
                    </p>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Ongoing Support Includes:</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>Website hosting and security</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>Regular updates and maintenance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>Content updates when needed</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>Performance monitoring</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>Priority email support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong className="text-gray-900 dark:text-white">Timeline:</strong> Same day launch + ongoing monthly support
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-100 to-green-100 dark:from-purple-900/30 dark:to-green-900/30 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Launch & Grow
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your site goes live and I monitor everything. As your business grows, we can add SEO, social media, or advertising services.
                    </p>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

          </div>
        </div>

        {/* FAQ Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                Common Questions About Our Process
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    How long does the whole process take?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Typically 2-3 weeks from our first call to launch. This includes time for revisions and any content gathering we need to do.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    What if I need changes after launch?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    No problem! Your monthly plan includes content updates and changes. Larger redesigns can be discussed separately.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Do I need to provide all the content?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'll help write and structure your content. You provide the business expertise, I handle the web copy and organization.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    What happens if I'm not happy?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I offer unlimited revisions during development and a 100% satisfaction guarantee. Your success is my success.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Let's have a quick conversation about your business and see if we're a good fit.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DarkButton href="/contact">
                  Schedule Free Consultation
                </DarkButton>
                <LightButton href="/pricing">
                  View Pricing Plans
                </LightButton>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  📞 Or call <a href="tel:8178736655" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">(817) 873-6655</a> for same day response
                </p>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
