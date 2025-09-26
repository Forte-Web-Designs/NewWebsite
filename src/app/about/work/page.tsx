import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import LightButton from '@/components/LightButton';
import DarkButton from '@/components/DarkButton';
import { TestimonialSlider } from '@/components/work/TestimonialSlider';

export const metadata: Metadata = {
  title: 'Our Work | Growth Systems Portfolio | Forte Web Designs',
  description: 'See how Forte\'s Growth Systems help restaurants, contractors, healthcare, professional services, retail, and automotive businesses grow with custom websites, SEO, and ongoing support.',
};

// Case study highlights data
const caseStudyHighlights = [
  {
    id: 'restaurant-riverside-grill',
    title: 'Riverside Grill',
    industry: 'Restaurant',
    location: 'Garland, TX',
    challenge: 'Lost weekend bookings to delivery apps',
    solution: 'Fast site with online ordering, menu photos, local SEO',
    results: ['+40% online orders', '2× weekend bookings', 'Delivery enabled'],
    image: '/images/work/project-1.webp',
    link: '/case-studies#restaurant'
  },
  {
    id: 'contractor-carter-hvac',
    title: 'Carter HVAC',
    industry: 'Home Services',
    location: 'Keller, TX',
    challenge: 'Lost to bigger brands in local search',
    solution: 'Emergency CTAs, service pages, local SEO optimization',
    results: ['+60% quote requests', 'Top 3 "AC repair Keller"', 'More mobile calls'],
    image: '/images/work/project-2.webp',
    link: '/case-studies#contractor'
  },
  {
    id: 'healthcare-riverside-clinic',
    title: 'RiverSide Clinic',
    industry: 'Healthcare',
    location: 'Dallas, TX',
    challenge: 'No online booking, old theme',
    solution: 'Trust-focused redesign, provider bios, HIPAA forms',
    results: ['2.5× inquiries', 'Bounce rate down', 'Online scheduling live'],
    image: '/images/work/project-3.webp',
    link: '/case-studies#healthcare'
  },
  {
    id: 'legal-lee-co',
    title: 'Lee & Co. Legal',
    industry: 'Professional Services',
    location: 'Fort Worth, TX',
    challenge: 'DIY site lacked authority',
    solution: 'Premium design, case studies, attorney bios, structured content',
    results: ['+85% organic traffic', '2× consults', 'Trust signals added'],
    image: '/images/work/project-4.webp',
    link: '/case-studies#professional-services'
  },
  {
    id: 'retail-elite-boutique',
    title: 'Elite Boutique',
    industry: 'Retail',
    location: 'Plano, TX',
    challenge: 'No e-commerce presence',
    solution: 'Shopify integration, collection pages, local SEO',
    results: ['$18k online in 6 months', 'Repeat buyers up', 'Pickup enabled'],
    image: '/images/work/project-5.webp',
    link: '/case-studies#retail'
  },
  {
    id: 'automotive-north-texas',
    title: 'North Texas Auto Repair',
    industry: 'Automotive',
    location: 'Irving, TX',
    challenge: 'No booking or pricing online',
    solution: 'Service pages, transparent pricing, scheduling system',
    results: ['+45% new calls', 'Fewer no-shows', 'Top 3 "brake repair Irving"'],
    image: '/images/work/project-6.webp',
    link: '/case-studies#automotive'
  }
];

// Portfolio by industry
const portfolioByIndustry = {
  'Restaurants & Food Service': [
    'Fast-loading menu sites with online ordering',
    'Photo galleries that make food look amazing',
    'Google Maps integration and local SEO',
    'Delivery platform integration',
    'Mobile-first ordering experience'
  ],
  'Home Services & Contractors': [
    'Emergency contact bars for urgent services',
    'Service area pages for local SEO dominance',
    'Quote forms that actually convert',
    'Before/after photo galleries',
    'Mobile-optimized for on-the-go customers'
  ],
  'Healthcare & Medical': [
    'HIPAA-compliant forms and systems',
    'Online appointment scheduling',
    'Provider profiles that build trust',
    'Service/condition pages for SEO',
    'Patient-friendly navigation'
  ],
  'Professional Services': [
    'Authority-building content architecture',
    'Case study showcases',
    'Professional team profiles',
    'Resource hubs and knowledge centers',
    'Lead magnets and consultation booking'
  ]
};

export default function WorkPage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        
        {/* Hero Section */}
        <SimpleScrollReveal direction="up" delay={200}>
          <div className="py-16 md:py-24 text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Growth Systems That Work
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8">
                See how businesses across DFW use our Foundation + SEO + Care system to grow predictably. 
                Each client gets custom code, not templates—and results that prove it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LightButton href="/case-studies">
                  View Detailed Case Studies
                </LightButton>
                <DarkButton href="/contact">
                  Start Your Growth Journey
                </DarkButton>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

        {/* Case Study Highlights */}
        <div className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up" delay={300}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Client Success Highlights
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Real businesses, real results. Each project shows what happens when you get the right foundation, 
                  local SEO, and ongoing support.
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudyHighlights.map((project, index) => (
                <SimpleScrollReveal key={project.id} direction="up" delay={400 + (index * 100)}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                    <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-semibold text-gray-800">{project.industry}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-sm text-white/80">{project.location}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">Challenge</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{project.challenge}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">Solution</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{project.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Results</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.results.map((result, resultIndex) => (
                            <span 
                              key={resultIndex}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                            >
                              {result}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Link 
                        href={project.link}
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        View Full Case Study
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio by Industry */}
        <SimpleScrollReveal direction="up" delay={500}>
          <div className="py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Portfolio by Industry
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Every industry has unique needs. We build Growth Systems tailored to how your customers actually behave.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {Object.entries(portfolioByIndustry).map(([industry, features]) => (
                  <div key={industry} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{industry}</h3>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

        {/* Growth System Process */}
        <SimpleScrollReveal direction="up" delay={600}>
          <div className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  How We Build Growth Systems
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Three integrated layers that work together for predictable, measurable growth.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">🏗️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Foundation</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li>Custom-coded (no templates)</li>
                      <li>Sub-2 second load times</li>
                      <li>Mobile-first UX design</li>
                      <li>Conversion-focused layout</li>
                      <li>Industry-specific features</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">📈</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">SEO (Local Demand)</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li>City + service page clusters</li>
                      <li>Schema markup implementation</li>
                      <li>Google Maps optimization</li>
                      <li>Review system integration</li>
                      <li>Local keyword targeting</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Forte Care™</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li>Security & uptime monitoring</li>
                      <li>Content updates & optimization</li>
                      <li>Seasonal promotions</li>
                      <li>Performance tuning</li>
                      <li>Growth strategy guidance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

        {/* Testimonials */}
        <TestimonialSlider />

        {/* CTA Section */}
        <SimpleScrollReveal direction="up" delay={700}>
          <div className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Growth System?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Stop competing on price. Start winning on results. Let's build a system that turns your website into a growth engine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LightButton href="/contact" className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-4">
                  Get Your Free Growth Audit
                </LightButton>
                <DarkButton href="/case-studies" className="border-2 border-white/30 text-lg px-8 py-4">
                  View All Case Studies
                </DarkButton>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

      </div>
    </div>
  );
}