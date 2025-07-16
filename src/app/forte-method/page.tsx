import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import DarkButton from '@/components/DarkButton';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Our Proven 5-Step Process | Forte Method™',
  description: 'Discover our proven 5-step process that takes your business from concept to growth. The Forte Method™ delivers results every time.',
};

const processSteps = [
  {
    number: 1,
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and competitive landscape to create a strategic foundation.",
    example: "We identified 3 untapped keyword opportunities that increased traffic by 40% for a local contractor.",
    icon: "search",
    color: "from-blue-500 to-blue-600"
  },
  {
    number: 2,
    title: "Design",
    description: "Custom mockups and wireframes tailored to your brand, optimized for conversions and user experience.",
    example: "Redesigned homepage layout increased conversion rate from 2% to 7% for a dental practice.",
    icon: "design",
    color: "from-purple-500 to-purple-600"
  },
  {
    number: 3,
    title: "Develop",
    description: "Hand-coded, lightning-fast websites built with security and performance as top priorities.",
    example: "Custom-coded site loads in under 2 seconds vs. 8+ seconds for WordPress alternatives.",
    icon: "code",
    color: "from-green-500 to-green-600"
  },
  {
    number: 4,
    title: "Launch",
    description: "Seamless deployment with testing, optimization, and immediate performance monitoring.",
    example: "We cut homepage load time by 70% during launch week, improving Google rankings instantly.",
    icon: "rocket",
    color: "from-orange-500 to-orange-600"
  },
  {
    number: 5,
    title: "Grow",
    description: "Ongoing optimization, content updates, and strategic improvements to maximize your ROI.",
    example: "Monthly SEO updates helped a restaurant rank #1 for 'pizza near me' within 6 months.",
    icon: "chart",
    color: "from-red-500 to-red-600"
  }
];

export default function ForteMethodPage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <SimpleScrollReveal direction="up">
            <h1 className="font-roboto font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-center mb-6">
              Our Proven 5‑Step Process
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              The Forte Method™ is our battle-tested approach that transforms businesses from invisible to unstoppable online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <span>✓</span>
                <span className="text-sm font-medium">100+ Successful Projects</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <span>⚡</span>
                <span className="text-sm font-medium">Average 40% Traffic Increase</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <span>🚀</span>
                <span className="text-sm font-medium">2-4 Week Timeline</span>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>

        {/* Process Timeline */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <SimpleScrollReveal key={step.number} direction={index % 2 === 0 ? "left" : "right"} delay={200 + (index * 100)}>
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content Side */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl mr-4`}>
                          {step.number}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h2>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        {step.description}
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary-500">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Real Example:</h4>
                        <p className="text-gray-700 dark:text-gray-300 italic">
                          {step.example}
                        </p>
                      </div>
                    </div>

                    {/* Visual Side */}
                    <div className="flex-1 flex justify-center">
                      <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center">
                        <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                          <Icon name={step.icon} className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Process Benefits */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                Why the Forte Method™ Works
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Strategic Focus</h4>
                  <p className="text-gray-600 dark:text-gray-400">Every decision is data-driven and aligned with your business goals.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Speed to Market</h4>
                  <p className="text-gray-600 dark:text-gray-400">Launch faster with our streamlined process and proven frameworks.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Measurable Results</h4>
                  <p className="text-gray-600 dark:text-gray-400">Track progress with clear metrics and transparent reporting.</p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Experience the Forte Method™?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Join 100+ businesses that have transformed their online presence with our proven process.
              </p>
              <Link href="/contact">
                <DarkButton className="px-8 py-4 text-lg">
                  Let's Start Your Process
                </DarkButton>
              </Link>
            </SimpleScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
