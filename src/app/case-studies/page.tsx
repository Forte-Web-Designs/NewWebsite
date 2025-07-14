import { Metadata } from 'next';
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import TestimonialsSection from '@/components/TestimonialsSection';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import LightButton from '@/components/LightButton';

export const metadata: Metadata = {
  title: 'Case Studies - Real Results from Real Businesses | Forte Web Designs',
  description: 'See detailed case studies showing how Forte™ websites and digital marketing helped businesses achieve 180%+ traffic increases, higher conversions, and significant ROI.',
};

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    improvement: string;
    timeframe: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
  };
  services: string[];
  investment: string;
  featured: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'santos-restaurant',
    title: 'From Invisible to Fully Booked: Restaurant Success Story',
    client: 'Santos Family Restaurant',
    industry: 'Restaurant & Food Service',
    challenge: 'Local family restaurant struggling with online visibility. Outdated website, no online ordering system, and losing customers to competitors with better digital presence. Monthly online orders were under 50.',
    solution: 'Implemented Forte Foundation™ + SEO Essential™ package with mobile-optimized design, local SEO optimization, Google Business Profile enhancement, and integrated online ordering system.',
    results: [
      { metric: 'Online Orders', improvement: '+180%', timeframe: '4 months' },
      { metric: 'Weekend Bookings', improvement: '+65%', timeframe: '3 months' },
      { metric: 'Google Rankings', improvement: '#1 for "family restaurant [city]"', timeframe: '5 months' },
      { metric: 'Monthly Revenue', improvement: '+$12,000', timeframe: '6 months' }
    ],
    testimonial: {
      quote: "Before Forte, we were invisible online. Now we're booked every weekend and our delivery orders tripled. The $500/month we spend has easily paid for itself.",
      author: "Maria Santos",
      title: "Owner, Santos Family Restaurant"
    },
    services: ['Forte Foundation™', 'SEO Essential™', 'Local SEO'],
    investment: '$500/month',
    featured: true
  },
  {
    id: 'elite-home-services',
    title: 'Home Services Company Triples Leads with Forte™',
    client: 'Elite Home Services',
    industry: 'Home Services & Contracting',
    challenge: 'HVAC and plumbing contractor spending $800/month on a WordPress developer with poor results. Website was slow, not mobile-friendly, and generating only 2-3 leads per week.',
    solution: 'Migrated to Forte Pro™ + SEO Growth™ with custom service pages, lead capture forms, local SEO optimization, and Google Ads management through Forte PPC™.',
    results: [
      { metric: 'Qualified Leads', improvement: '+300%', timeframe: '3 months' },
      { metric: 'Website Speed', improvement: '45% faster load times', timeframe: 'Immediate' },
      { metric: 'Cost Savings', improvement: '-$450/month', timeframe: 'Immediate' },
      { metric: 'Revenue Growth', improvement: '+$45,000', timeframe: '6 months' }
    ],
    testimonial: {
      quote: "I was spending $800/month on a WordPress developer who couldn't deliver results. Forte's $350 Pro plan not only saved me money but brought in 3x more leads.",
      author: "Mike Chen",
      title: "Founder, Elite Home Services"
    },
    services: ['Forte Pro™', 'SEO Growth™', 'PPC Management'],
    investment: '$850/month',
    featured: true
  },
  {
    id: 'riverside-dental',
    title: 'Dental Practice Attracts 40+ New Patients in 90 Days',
    client: 'Riverside Dental Group',
    industry: 'Healthcare & Dental',
    challenge: 'Dental practice with outdated website losing patients to competitors. Poor online reputation management and no content marketing strategy. Patient acquisition was declining.',
    solution: 'Deployed Forte Pro™ + SEO Essential™ with patient-focused design, appointment booking integration, review management system, and healthcare-compliant content strategy.',
    results: [
      { metric: 'New Patients', improvement: '+40 patients', timeframe: '3 months' },
      { metric: 'Online Reviews', improvement: '4.8/5 average rating', timeframe: '4 months' },
      { metric: 'Appointment Bookings', improvement: '+120%', timeframe: '3 months' },
      { metric: 'Practice Revenue', improvement: '+$120,000', timeframe: '6 months' }
    ],
    testimonial: {
      quote: "Our old website was embarrassing and we were losing patients to competitors. Forte's professional design and SEO brought us 40+ new patients in the first 90 days.",
      author: "Dr. Sarah Mitchell",
      title: "Practice Manager, Riverside Dental Group"
    },
    services: ['Forte Pro™', 'SEO Essential™', 'Reputation Management'],
    investment: '$650/month',
    featured: true
  },
  {
    id: 'torres-construction',
    title: 'Construction Company Achieves 4:1 Return on Ad Spend',
    client: 'Torres Construction',
    industry: 'Construction & Contracting',
    challenge: 'Established construction company struggling with lead generation. Previous marketing efforts were inconsistent and expensive with poor tracking and ROI.',
    solution: 'Implemented Forte Foundation™ + SEO Essential™ + PPC Growth™ with project portfolio showcase, lead tracking system, and targeted Google Ads campaigns.',
    results: [
      { metric: 'Quote Requests', improvement: '+500%', timeframe: '6 months' },
      { metric: 'Ad Spend ROI', improvement: '4:1 return', timeframe: '4 months' },
      { metric: 'Project Value', improvement: '+$850,000 pipeline', timeframe: '8 months' },
      { metric: 'Cost Per Lead', improvement: '-60%', timeframe: '3 months' }
    ],
    testimonial: {
      quote: "We went from 2-3 quote requests per week to 15-20. The PPC campaigns Forte manages have a 4:1 return on ad spend. They understand contractor businesses.",
      author: "David Torres",
      title: "CEO, Torres Construction"
    },
    services: ['Forte Foundation™', 'SEO Essential™', 'PPC Growth™'],
    investment: '$900/month',
    featured: false
  },
  {
    id: 'apex-financial',
    title: 'Financial Advisory Firm Signs 12 High-Value Clients',
    client: 'Apex Financial Advisors',
    industry: 'Financial Services',
    challenge: 'Financial advisory firm needed to establish credibility online and attract high-net-worth clients. Compliance requirements made previous website solutions inadequate.',
    solution: 'Built Forte Pro™ + SEO Growth™ with compliance-focused design, thought leadership content strategy, and targeted professional networking integration.',
    results: [
      { metric: 'High-Value Clients', improvement: '+12 clients', timeframe: '5 months' },
      { metric: 'Assets Under Management', improvement: '+$4.8M', timeframe: '8 months' },
      { metric: 'Organic Traffic', improvement: '+250%', timeframe: '6 months' },
      { metric: 'Lead Quality Score', improvement: '+180%', timeframe: '4 months' }
    ],
    testimonial: {
      quote: "Professional service firms need credibility online. Forte delivered a website that positions us as the premium choice. We've signed 12 new high-value clients since launch.",
      author: "Jennifer Williams",
      title: "Director of Marketing, Apex Financial Advisors"
    },
    services: ['Forte Pro™', 'SEO Growth™', 'Content Strategy'],
    investment: '$850/month',
    featured: false
  },
  {
    id: 'rivera-auto',
    title: 'Auto Repair Shop Dominates Local Search Rankings',
    client: 'Rivera Auto Repair',
    industry: 'Automotive Services',
    challenge: 'Family-owned auto repair shop invisible in local search results. Customers couldn\'t find them online and were going to chain competitors instead.',
    solution: 'Launched Forte Foundation™ + SEO Essential™ with local SEO focus, Google Business Profile optimization, and customer review management system.',
    results: [
      { metric: 'Local Rankings', improvement: '#1 for "auto repair near me"', timeframe: '4 months' },
      { metric: 'New Customer Calls', improvement: '+100%', timeframe: '3 months' },
      { metric: 'Google Reviews', improvement: '4.9/5 rating', timeframe: '5 months' },
      { metric: 'Monthly Revenue', improvement: '+35%', timeframe: '6 months' }
    ],
    testimonial: {
      quote: "Local search was killing us - customers couldn't find us on Google. Forte's local SEO put us #1 for 'auto repair near me' and doubled our new customer calls.",
      author: "Carlos Rivera",
      title: "Owner, Rivera Auto Repair"
    },
    services: ['Forte Foundation™', 'SEO Essential™', 'Local SEO'],
    investment: '$500/month',
    featured: false
  }
];

export default function CaseStudiesPage() {
  const featuredCases = caseStudies.filter(cs => cs.featured);
  const allCases = caseStudies;

  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <span className="text-xs sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-1 sm:gap-2 text-primary-1000 mb-4 sm:mb-6">
                <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
                Real Results from Real Businesses
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-6 max-w-4xl mx-auto">
                Case Studies: Proven Success Stories
              </h1>
              <p className="text-lg sm:text-xl font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed max-w-4xl mx-auto">
                See exactly how businesses like yours achieved dramatic growth with Forte™ websites and digital marketing. 
                Every case study includes detailed metrics, timelines, and real testimonials.
              </p>
            </div>
          </SimpleScrollReveal>

          {/* Stats Bar */}
          <SimpleScrollReveal direction="up" delay={400}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-16">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">200+</div>
                  <div className="text-gray-600 dark:text-gray-400">Success Stories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">180%</div>
                  <div className="text-gray-600 dark:text-gray-400">Avg Traffic Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">98%</div>
                  <div className="text-gray-600 dark:text-gray-400">Client Retention Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">6mo</div>
                  <div className="text-gray-600 dark:text-gray-400">Avg ROI Payback</div>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our most impressive transformations across different industries
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-16">
            {featuredCases.map((caseStudy, index) => (
              <SimpleScrollReveal key={caseStudy.id} direction="up" delay={300 + (index * 200)}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                          {caseStudy.industry}
                        </span>
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {caseStudy.title}
                      </h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">The Challenge</h4>
                          <p className="text-gray-600 dark:text-gray-400">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Our Solution</h4>
                          <p className="text-gray-600 dark:text-gray-400">{caseStudy.solution}</p>
                        </div>
                      </div>

                      {/* Services Used */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Services Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.services.map((service) => (
                            <span key={service} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Investment */}
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>💰</span>
                        <span>Monthly Investment: <strong className="text-gray-900 dark:text-white">{caseStudy.investment}</strong></span>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Results Achieved</h4>
                      
                      <div className="space-y-4 mb-8">
                        {caseStudy.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-medium text-gray-900 dark:text-white">{result.metric}</span>
                              <span className="text-green-600 dark:text-green-400 font-bold">{result.improvement}</span>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Timeline: {result.timeframe}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-500">
                        <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                          "{caseStudy.testimonial.quote}"
                        </blockquote>
                        <div className="text-sm">
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {caseStudy.testimonial.author}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400">
                            {caseStudy.testimonial.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                More Success Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Browse all our case studies by industry and solution type
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCases.filter(cs => !cs.featured).map((caseStudy, index) => (
              <SimpleScrollReveal key={caseStudy.id} direction="up" delay={300 + (index * 100)}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {caseStudy.client}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {caseStudy.challenge.substring(0, 120)}...
                  </p>

                  {/* Key Results */}
                  <div className="space-y-2 mb-4">
                    {caseStudy.results.slice(0, 2).map((result, resultIndex) => (
                      <div key={resultIndex} className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">{result.metric}:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{result.improvement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {caseStudy.services.slice(0, 2).map((service) => (
                      <span key={service} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs">
                        {service}
                      </span>
                    ))}
                    {caseStudy.services.length > 2 && (
                      <span className="text-gray-500 dark:text-gray-500 text-xs">+{caseStudy.services.length - 2} more</span>
                    )}
                  </div>

                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Investment: <strong className="text-gray-900 dark:text-white">{caseStudy.investment}</strong>
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection showAll={true} />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of businesses that have transformed their online presence and achieved remarkable growth with Forte™.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LightButton href="/contact">
                  Start Your Success Story
                </LightButton>
                <a 
                  href="/pricing" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  View Our Packages
                </a>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
