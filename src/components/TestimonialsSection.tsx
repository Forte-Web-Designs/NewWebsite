import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from './animations/SimpleScrollReveal';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  rating: number;
  quote: string;
  results: string;
  timeframe: string;
  planUsed: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'maria-santos',
    name: 'Maria Santos',
    title: 'Owner',
    company: 'Santos Family Restaurant',
    industry: 'Restaurant',
    rating: 5,
    quote: "Before Forte, we were invisible online. Now we're booked every weekend and our delivery orders tripled. The $500/month we spend on Foundation + SEO has easily paid for itself.",
    results: '+180% online orders, +65% weekend bookings',
    timeframe: '4 months',
    planUsed: 'Foundation + SEO Essential'
  },
  {
    id: 'mike-chen',
    name: 'Mike Chen',
    title: 'Founder',
    company: 'Elite Home Services',
    industry: 'Home Services',
    rating: 5,
    quote: "I was spending $800/month on a WordPress developer who couldn't deliver results. Forte's $350 Pro plan not only saved me money but brought in 3x more leads. My phone hasn't stopped ringing.",
    results: '+300% qualified leads, -$450/month costs',
    timeframe: '3 months',
    planUsed: 'Forte Pro + SEO Growth'
  },
  {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    title: 'Practice Manager',
    company: 'Riverside Dental Group',
    industry: 'Healthcare',
    rating: 5,
    quote: "Our old website was embarrassing and we were losing patients to competitors. Forte's professional design and SEO brought us 40+ new patients in the first 90 days. Best investment we've made.",
    results: '+40 new patients, +$120k revenue',
    timeframe: '3 months',
    planUsed: 'Forte Pro + SEO Essential'
  },
  {
    id: 'david-torres',
    name: 'David Torres',
    title: 'CEO',
    company: 'Torres Construction',
    industry: 'Construction',
    rating: 5,
    quote: "We went from 2-3 quote requests per week to 15-20. The PPC campaigns Forte manages have a 4:1 return on ad spend. They understand contractor businesses unlike other agencies.",
    results: '+500% quote requests, 4:1 ROAS',
    timeframe: '6 months',
    planUsed: 'Foundation + SEO + PPC Growth'
  },
  {
    id: 'jennifer-williams',
    name: 'Jennifer Williams',
    title: 'Director of Marketing',
    company: 'Apex Financial Advisors',
    industry: 'Financial Services',
    rating: 5,
    quote: "Professional service firms need credibility online. Forte delivered a website that positions us as the premium choice. We've signed 12 new high-value clients since launch.",
    results: '+12 premium clients, +$480k AUM',
    timeframe: '5 months',
    planUsed: 'Forte Pro + SEO Growth'
  },
  {
    id: 'carlos-rivera',
    name: 'Carlos Rivera',
    title: 'Owner',
    company: 'Rivera Auto Repair',
    industry: 'Automotive',
    rating: 5,
    quote: "Local search was killing us - customers couldn't find us on Google. Forte's local SEO put us #1 for 'auto repair near me' and doubled our new customer calls.",
    results: '+100% new customer calls, #1 local rankings',
    timeframe: '4 months',
    planUsed: 'Foundation + SEO Essential'
  }
];

interface TestimonialsSectionProps {
  showAll?: boolean;
  industry?: string;
  planType?: string;
  className?: string;
}

export default function TestimonialsSection({ 
  showAll = false, 
  industry, 
  planType,
  className = ""
}: TestimonialsSectionProps) {
  // Filter testimonials based on props
  let filteredTestimonials = testimonials;
  
  if (industry) {
    filteredTestimonials = testimonials.filter(t => 
      t.industry.toLowerCase().includes(industry.toLowerCase())
    );
  }
  
  if (planType) {
    filteredTestimonials = filteredTestimonials.filter(t => 
      t.planUsed.toLowerCase().includes(planType.toLowerCase())
    );
  }
  
  // Show subset unless showAll is true
  const displayTestimonials = showAll ? filteredTestimonials : filteredTestimonials.slice(0, 3);

  return (
    <section className={`py-16 md:py-24 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SimpleScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See how businesses like yours are growing with Forte™ websites and digital marketing
            </p>
          </div>
        </SimpleScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <SimpleScrollReveal key={testimonial.id} direction="up" delay={300 + (index * 100)}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.title}, {testimonial.company}
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {testimonial.industry}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="star" className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Results */}
                <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-sm">📈</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {testimonial.results}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500 text-sm">⏱️</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Results in {testimonial.timeframe}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500 text-sm">💼</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.planUsed}
                    </span>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          ))}
        </div>

        {!showAll && filteredTestimonials.length > 3 && (
          <SimpleScrollReveal direction="up" delay={600}>
            <div className="text-center mt-12">
              <a 
                href="/case-studies" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                View All Success Stories
                <Icon name="arrow-right" className="w-4 h-4" />
              </a>
            </div>
          </SimpleScrollReveal>
        )}

        {/* Trust Section */}
        <SimpleScrollReveal direction="up" delay={700}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Join hundreds of businesses growing with Forte™
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>200+ Active Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>98% Client Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Average 180% Traffic Increase</span>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>
      </div>
    </section>
  );
}
