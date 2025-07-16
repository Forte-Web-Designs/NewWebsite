import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import DarkButton from '@/components/DarkButton';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Forte Care™ | Unlimited Support That Scales With You',
  description: 'Discover Forte Care™ - our comprehensive support system that includes unlimited updates, analytics, bug fixes, and SEO adjustments.',
};

const careFeatures = [
  {
    title: "Unlimited Updates",
    description: "Need to change content, add pages, or update your team photos? We handle it all with no extra charges.",
    icon: "refresh",
    examples: ["Content updates", "New team member pages", "Menu or service changes", "Contact information updates"]
  },
  {
    title: "Performance Monitoring",
    description: "We constantly monitor your site's speed, uptime, and security to ensure peak performance 24/7.",
    icon: "monitor",
    examples: ["Site speed optimization", "Uptime monitoring", "Security scans", "Performance reports"]
  },
  {
    title: "Analytics & Insights",
    description: "Monthly reports showing your website's performance, visitor behavior, and growth opportunities.",
    icon: "chart",
    examples: ["Traffic analysis", "Conversion tracking", "Keyword rankings", "Growth recommendations"]
  },
  {
    title: "Technical Support",
    description: "Bug fixes, compatibility updates, and technical adjustments handled by our expert team.",
    icon: "tools",
    examples: ["Bug fixes", "Browser updates", "Mobile optimization", "Integration support"]
  },
  {
    title: "SEO Maintenance",
    description: "Ongoing SEO adjustments to keep your site ranking well as search algorithms evolve.",
    icon: "search",
    examples: ["Algorithm updates", "Keyword optimization", "Meta tag updates", "Schema markup"]
  },
  {
    title: "Priority Support",
    description: "Direct access to our team with guaranteed response times and priority handling.",
    icon: "headphones",
    examples: ["24-hour response", "Direct team access", "Priority queue", "Phone support available"]
  }
];

const faqs = [
  {
    question: "What if I need a new page?",
    answer: "New pages are included in your Forte Care™ plan! Just tell us what you need and we'll design and build it to match your existing site perfectly."
  },
  {
    question: "Can I request design tweaks?",
    answer: "Absolutely! Minor design adjustments, color changes, layout tweaks, and content updates are all part of your plan. For major redesigns, we'll discuss scope and timeline."
  },
  {
    question: "How quickly do you respond to requests?",
    answer: "We guarantee a response within 24 hours for all Forte Care™ clients. Most requests are handled same-day, and urgent issues get immediate attention."
  },
  {
    question: "What about emergency support?",
    answer: "If your site goes down or has a critical issue, we provide emergency support to get you back online quickly. Our monitoring systems alert us to issues before you even notice them."
  },
  {
    question: "Do you provide training on managing my site?",
    answer: "Yes! We include training sessions to help you understand your analytics, make simple updates, and get the most value from your website investment."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Your Forte Care™ plan can be adjusted anytime. Whether you need more features as you grow or want to simplify, we'll work with your changing needs."
  }
];

export default function FortCarePage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <SimpleScrollReveal direction="up">
            <h1 className="font-roboto font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-center mb-6">
              Unlimited Support That Scales With You
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Forte Care™ is more than maintenance – it's your dedicated digital team, ensuring your website grows with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <span>✓</span>
                <span className="text-sm font-medium">24-Hour Response Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <span>🔧</span>
                <span className="text-sm font-medium">Unlimited Updates Included</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <span>📊</span>
                <span className="text-sm font-medium">Monthly Performance Reports</span>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>

        {/* What's Included Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                What's Included in Forte Care™
              </h2>
            </SimpleScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {careFeatures.map((feature, index) => (
                <SimpleScrollReveal key={feature.title} direction="up" delay={200 + (index * 100)}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                        <Icon name={feature.icon} className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="text-green-500">•</span>
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Forte Pro vs Standard */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                Forte Pro™: Premium Care for Growing Businesses
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Standard Care</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Basic updates & maintenance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Email support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Monthly reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Security monitoring</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Included with Foundation™ plans</p>
                </div>
                
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border-2 border-primary-500 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">RECOMMENDED</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Forte Pro™ Care</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Everything in Standard Care</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Priority support & faster response</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Advanced analytics & insights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Phone support available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Growth strategy sessions</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary-700 dark:text-primary-300 mt-4 font-medium">Included with Pro™ plans</p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <SimpleScrollReveal key={index} direction="up" delay={100 + (index * 50)}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </SimpleScrollReveal>
                ))}
              </div>
            </SimpleScrollReveal>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ready for Worry-Free Website Management?
              </h3>
              <p className="text-lg text-primary-100 mb-8">
                Join hundreds of businesses that trust Forte Care™ to keep their websites running perfectly.
              </p>
              <Link href="/contact">
                <DarkButton className="px-8 py-4 text-lg bg-white text-primary-600 hover:bg-gray-100">
                  Talk About Support Plans
                </DarkButton>
              </Link>
            </SimpleScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
