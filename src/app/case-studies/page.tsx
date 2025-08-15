import { Metadata } from 'next';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import TestimonialsSection from '@/components/TestimonialsSection';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import LightButton from '@/components/LightButton';

export const metadata: Metadata = {
  title: 'Website Design Case Studies | Local Business Success Stories Dallas Fort Worth | Forte Web Designs',
  description: 'See how Forte™ websites help Dallas Fort Worth businesses get found online, build credibility, and grow their customer base with professional web design and digital marketing solutions.',
};

interface BusinessScenario {
  id: string;
  businessType: string;
  challenge: string;
  forteSolution: string;
  benefits: string[];
  icon: string;
}
  const businessScenarios: BusinessScenario[] = [
  {
    id: 'restaurant',
    businessType: 'Restaurant & Food Service Businesses',
    challenge: 'Most local restaurants struggle with online visibility and digital marketing. Customers can\'t find you on Google search results, your website looks outdated compared to competitors, and you\'re losing potential diners to restaurants with better online presence.',
    forteSolution: 'Professional restaurant website with mobile-optimized design, local SEO optimization, Google Business Profile management, and online ordering integration. Perfect for showcasing your menu, atmosphere, and taking online reservations.',
    benefits: [
      'Get found when customers search "restaurants near me" and local food queries',
      'Professional menu display with mouth-watering food photography and online ordering',
      'Mobile-friendly responsive design for customers on-the-go and social media sharing',
      'Seamless integration with delivery platforms like DoorDash, Uber Eats, Grubhub',
      'Showcase customer reviews, testimonials, and restaurant atmosphere with photo galleries'
    ],
    icon: '🍽️'
  },
  {
    id: 'home-services',
    businessType: 'Home Services & Contractors', 
    challenge: 'Contractors often rely on word-of-mouth referrals but miss out on customers who search online first for services. No professional website means no credibility, and you\'re losing jobs to competitors with strong online presence and search engine optimization.',
    forteSolution: 'Professional contractor website with service-specific pages, before/after project galleries, customer testimonials, and lead capture forms. Built to convert visitors into paying customers with clear calls-to-action and mobile optimization.',
    benefits: [
      'Establish professional credibility that wins more jobs and higher-value projects',
      'Showcase your work with stunning before/after photo galleries and project case studies',
      'Capture leads 24/7 with contact forms and quote request systems, even when you\'re working',
      'Mobile-optimized for emergency service calls and on-the-go customer research',
      'Local SEO optimization to dominate your service area and "near me" searches'
    ],
    icon: '🔨'
  },
  {
    id: 'healthcare',
    businessType: 'Healthcare & Medical Practices',
    challenge: 'Healthcare practices need to build trust and credibility online before patients ever walk through the door. Patients research providers extensively before booking appointments, and a poor website design means lost patients to competitors with professional online presence.',
    forteSolution: 'HIPAA-compliant medical website with patient-focused design, online appointment booking, provider credentials showcase, and educational content that builds trust and authority in your medical specialty.',
    benefits: [
      'Build patient trust and confidence with professional medical website design',
      'Streamline operations with online appointment booking and patient portal integration',
      'Showcase medical credentials, specializations, and years of experience effectively',
      'Educational content that positions you as the expert choice in your medical field',
      'Reputation management integration and patient review optimization for credibility'
    ],
    icon: '🏥'
  },
  {
    id: 'professional-services',
    businessType: 'Professional Services & Consulting',
    challenge: 'Lawyers, accountants, financial advisors, and consultants need credibility and authority online. A DIY website or outdated design makes you look like an amateur and drives potential high-value clients to competitors with more professional online presence.',
    forteSolution: 'Premium professional services website that positions you as the expert choice. Clean, authoritative design with case studies, client testimonials, service explanations, and lead capture that converts prospects into high-value clients.',
    benefits: [
      'Premium positioning that justifies higher fees and attracts quality clients',
      'Showcase expertise through case studies, white papers, and professional achievements',
      'Authority-building content that demonstrates deep knowledge in your field',
      'Professional lead capture system for consultation requests and client inquiries',
      'Mobile-optimized for busy professionals researching services on-the-go'
    ],
    icon: '⚖️'
  },
  {
    id: 'retail',
    businessType: 'Retail & E-commerce Businesses',
    challenge: 'Local retailers compete with Amazon and big box stores every day. Without a professional online presence and e-commerce capabilities, you\'re invisible to customers who prefer to shop online or research products before visiting your store.',
    forteSolution: 'E-commerce enabled website with product catalogs, online shopping capabilities, local pickup options, inventory management, and customer loyalty programs. Compete online while leveraging your local advantage.',
    benefits: [
      'Sell products online and compete with major retailers while maintaining personal service',
      'Offer local pickup and delivery options that big retailers can\'t match',
      'Showcase unique products and services with high-quality product photography',
      'Build customer loyalty programs and repeat business through personalized service',
      'Inventory management and order tracking systems for seamless operations'
    ],
    icon: '🛍️'
  },
  {
    id: 'automotive',
    businessType: 'Automotive Services & Dealerships',
    challenge: 'Auto repair shops and dealerships need trust and convenience for customers. People want to see services, transparent pricing, and easy scheduling before visiting. Without these features, customers choose competitors who offer online convenience and professional credibility.',
    forteSolution: 'Automotive-focused website with service scheduling, transparent pricing, customer portal, service history tracking, and trust-building features. Make it easy for customers to choose you and keep coming back.',
    benefits: [
      'Online service scheduling and appointment reminders reduce no-shows and improve efficiency',
      'Transparent pricing builds customer trust and reduces price shopping with competitors',
      'Customer portal for service history, maintenance reminders, and loyalty tracking',
      'Mobile-optimized for customers needing emergency roadside assistance and quick service',
      'Local SEO optimization for "auto repair near me" and emergency automotive services'
    ],
    icon: '🚗'
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        
        {/* Hero Section */}
        <SimpleScrollReveal direction="up" delay={200}>
          <div className="py-16 md:py-24 text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Why Local Businesses Choose Forte™
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8">
                Every business is unique, but the need for a professional online presence is universal. 
                See how Forte™ solves the most common challenges facing local businesses today.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 max-w-3xl mx-auto">
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  💡 <strong>Real Talk:</strong> We're not going to show you fake case studies with made-up numbers. 
                  Instead, let's focus on the real problems your business faces and how we solve them.
                </p>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

        {/* Business Scenarios */}
        <div className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            <SimpleScrollReveal direction="up" delay={300}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  How Forte™ Solves Real Business Problems
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Choose your business type below to see how a professional website transforms your online presence
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {businessScenarios.map((scenario, index) => (
                <SimpleScrollReveal key={scenario.id} direction="up" delay={400 + (index * 100)}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                    
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-4xl">{scenario.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {scenario.businessType}
                        </h3>
                      </div>
                    </div>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="text-red-600 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
                        <span>❌</span> The Problem
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {scenario.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-2 flex items-center gap-2">
                        <span>💡</span> The Forte™ Solution
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {scenario.forteSolution}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-green-600 dark:text-green-400 font-semibold mb-3 flex items-center gap-2">
                        <span>✅</span> What You Get
                      </h4>
                      <ul className="space-y-2">
                        {scenario.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </SimpleScrollReveal>
              ))}
            </div>

            {/* Real Client Case Studies */}
            <SimpleScrollReveal direction="up" delay={700}>
              <div className="mt-20">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Real Client Success Stories
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* TechCorp Solutions */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="text-blue-600 dark:text-blue-300 text-3xl font-bold mb-2">TechCorp Solutions</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">SaaS</div>
                      <div className="text-xs text-green-600 dark:text-green-400 font-semibold mb-2">+60% organic traffic in 6 months</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Challenge:</strong> Despite near-perfect technical SEO, TechCorp Solutions was steadily losing market share to aggressive SaaS competitors.</p>
                      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong> Deep competitive analysis uncovered three high-impact strategies their rivals were using, including targeted content clusters and advanced link-building.</p>
                      <p className="text-gray-700 dark:text-gray-300"><strong>Results:</strong> Reclaimed the #1 Google ranking for 15 high-value SaaS keywords, driving a 60% increase in organic traffic and restoring their industry leadership.</p>
                    </div>
                  </div>
                  {/* BluePeak Digital */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="text-blue-600 dark:text-blue-300 text-3xl font-bold mb-2">BluePeak Digital</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Digital Marketing Agency</div>
                      <div className="text-xs text-green-600 dark:text-green-400 font-semibold mb-2">+65% lead quality in 4 months</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Challenge:</strong> BluePeak Digital had strong SEO scores but struggled with low conversion rates and underperforming lead quality.</p>
                      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong> Identified competitive content gaps and implemented advanced schema markup, improving both visibility and user engagement.</p>
                      <p className="text-gray-700 dark:text-gray-300"><strong>Results:</strong> Doubled the number of qualified leads while maintaining top search rankings, resulting in a significant boost in high-value client acquisitions.</p>
                    </div>
                  </div>
                  {/* Luxora Home */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="text-blue-600 dark:text-blue-300 text-3xl font-bold mb-2">Luxora Home</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Premium E-commerce (Home & Lifestyle)</div>
                      <div className="text-xs text-green-600 dark:text-green-400 font-semibold mb-2">+125% revenue in 8 months</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Challenge:</strong> Luxora Home’s site was technically flawless, but they were losing customers to larger, established competitors.</p>
                      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong> Leveraged advanced competitive intelligence and strategic brand positioning to target commercial-intent keywords and optimize product landing pages.</p>
                      <p className="text-gray-700 dark:text-gray-300"><strong>Results:</strong> Outranked three major retail competitors for high-converting keywords, resulting in a 125% increase in online revenue and a surge in new customer acquisition.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            {/* CTA Section */}
            <SimpleScrollReveal direction="up" delay={800}>
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to See How Forte™ Can Transform Your Business?
                  </h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Stop losing customers to competitors with better websites. 
                    Get a professional online presence that works as hard as you do.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <LightButton href="/contact" className="bg-white text-blue-600 hover:bg-gray-50">
                      Get Your Free Website Consultation
                    </LightButton>
                    <LightButton href="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
                      View Pricing Plans
                    </LightButton>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

          </div>
        </div>

        {/* Why Choose Forte Section */}
        <TestimonialsSection />

        {/* Guarantee Section */}
        <SimpleScrollReveal direction="up" delay={600}>
          <div className="py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Our Satisfaction Guarantee
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Design Satisfaction
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If you don't love the initial design concept, we'll revise it until you do - at no extra cost.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Performance Promise
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We guarantee lightning-fast loading and mobile optimization that actually works.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🤝</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Service Excellence
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      100% client retention speaks for itself. We don't just build websites - we build relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

      </div>
    </div>
  );
}
