import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import DarkButton from '@/components/DarkButton';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'The Forte Guarantee™ | Our Commitment to You',
  description: 'Discover our comprehensive guarantees: site speed, responsiveness, transparency, and satisfaction. Your success is our commitment.',
};

const guarantees = [
  {
    title: "Lightning-Fast Performance",
    commitment: "Your site will load in under 2 seconds",
    description: "We guarantee your website will load quickly on all devices. If it doesn't, we'll optimize it until it does – at no extra cost.",
    metrics: ["< 2 second load times", "99.9% uptime guarantee", "Mobile speed optimization", "Performance monitoring"],
    icon: "lightning",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "100% Responsive Design",
    commitment: "Perfect on every device, every time",
    description: "Your website will look and function flawlessly on desktop, tablet, and mobile devices. We test on 20+ device combinations.",
    metrics: ["Desktop optimization", "Mobile-first design", "Tablet compatibility", "Cross-browser testing"],
    icon: "device",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Complete Transparency",
    commitment: "No hidden fees, ever",
    description: "Clear pricing, honest timelines, and regular progress updates. You'll always know exactly what you're paying for and when to expect results.",
    metrics: ["Fixed monthly pricing", "No surprise charges", "Weekly progress updates", "Open communication"],
    icon: "eye",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Total Satisfaction",
    commitment: "We work until you're happy",
    description: "Unlimited revisions during development and ongoing support to ensure your website meets your expectations and business goals.",
    metrics: ["Unlimited revisions", "30-day satisfaction guarantee", "Ongoing support", "Business goal alignment"],
    icon: "heart",
    color: "from-purple-500 to-pink-500"
  }
];

const policies = [
  {
    title: "Performance Standards",
    details: [
      "Website loads in under 2 seconds on desktop",
      "Mobile load time under 3 seconds",
      "99.9% uptime guarantee with monitoring",
      "Google PageSpeed score of 90+ on mobile"
    ]
  },
  {
    title: "Quality Assurance",
    details: [
      "Cross-browser testing (Chrome, Safari, Firefox, Edge)",
      "Mobile responsiveness on 15+ devices",
      "Accessibility compliance (WCAG guidelines)",
      "SEO best practices implementation"
    ]
  },
  {
    title: "Support Commitment",
    details: [
      "24-hour response time guarantee",
      "Monthly performance reports",
      "Proactive security monitoring",
      "Emergency support for critical issues"
    ]
  },
  {
    title: "Business Results",
    details: [
      "Clear conversion tracking setup",
      "Analytics implementation and training",
      "SEO foundation for search visibility",
      "Strategic recommendations for growth"
    ]
  }
];

export default function ForteGuaranteePage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <SimpleScrollReveal direction="up">
            <h1 className="font-roboto font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-center mb-6">
              Our Commitment to You
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              The Forte Guarantee™ isn't just a promise – it's our standard. Every project comes with these iron-clad commitments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <span>⚡</span>
                <span className="text-sm font-medium">Sub-2 Second Load Times</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <span>📱</span>
                <span className="text-sm font-medium">100% Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <span>✨</span>
                <span className="text-sm font-medium">30-Day Satisfaction Guarantee</span>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>

        {/* Main Guarantees */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {guarantees.map((guarantee, index) => (
                <SimpleScrollReveal key={guarantee.title} direction={index % 2 === 0 ? "left" : "right"} delay={200 + (index * 100)}>
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content Side */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${guarantee.color} flex items-center justify-center text-white mr-4`}>
                          <Icon name={guarantee.icon} className="w-8 h-8" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            {guarantee.title}
                          </h2>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold">
                            {guarantee.commitment}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        {guarantee.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {guarantee.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="text-green-500">✓</span>
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visual Side */}
                    <div className="flex-1 flex justify-center">
                      <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center">
                        <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${guarantee.color} flex items-center justify-center`}>
                          <Icon name={guarantee.icon} className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Policies */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                Our Standards in Detail
              </h3>
            </SimpleScrollReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {policies.map((policy, index) => (
                <SimpleScrollReveal key={policy.title} direction="up" delay={200 + (index * 100)}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {policy.title}
                    </h4>
                    <ul className="space-y-3">
                      {policy.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Risk-Free Evaluation */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Still Have Concerns?
                </h3>
                <p className="text-lg text-primary-100 mb-8">
                  We're so confident in our work that we offer a complimentary site evaluation. See exactly how we'd improve your current website – with no obligation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Free website analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Performance audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>No-pressure consultation</span>
                  </div>
                </div>
                <Link href="/contact">
                  <DarkButton className="px-8 py-4 text-lg bg-white text-primary-600 hover:bg-gray-100">
                    Get a No-Risk Site Evaluation
                  </DarkButton>
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>

        {/* Legal & Contact */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Questions About Our Guarantees?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                These guarantees are part of our standard service agreement. For specific terms and conditions, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                  Contact Us for Details →
                </Link>
                <span className="text-gray-400">|</span>
                <a href="tel:8178736655" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                  Call (817) 873-6655
                </a>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
