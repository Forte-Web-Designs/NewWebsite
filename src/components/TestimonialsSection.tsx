import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from './animations/SimpleScrollReveal';

interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
  businessType: string;
}

const businessBenefits: Benefit[] = [
  {
    id: 'local-visibility',
    icon: '🌟',
    title: 'Get Found Locally',
    description: "Most customers search online before visiting. A professional website ensures you're not invisible when they're looking for your services.",
    businessType: 'All Local Businesses'
  },
  {
    id: 'professional-credibility',
    icon: '💼',
    title: 'Build Instant Credibility',
    description: "First impressions matter. A custom-coded website shows you're established and trustworthy compared to DIY sites.",
    businessType: 'Professional Services'
  },
  {
    id: 'mobile-customers',
    icon: '📱',
    title: 'Capture Mobile Customers',
    description: "Over 60% of searches happen on mobile. If your site isn't mobile-optimized, you're losing customers to competitors.",
    businessType: 'Restaurants & Retail'
  },
  {
    id: 'always-working',
    icon: '🕒',
    title: 'Your 24/7 Salesperson',
    description: "While you sleep, your website is showcasing your services, collecting leads, and helping customers contact you.",
    businessType: 'Home Services'
  },
  {
    id: 'competitive-advantage',
    icon: '🚀',
    title: 'Stay Ahead of Competition',
    description: "Most small businesses have outdated or DIY websites. A professional presence sets you apart and wins more business.",
    businessType: 'Healthcare & Dental'
  },
  {
    id: 'customer-convenience',
    icon: '✨',
    title: 'Make It Easy to Choose You',
    description: "Clear pricing, easy contact forms, and professional presentation remove friction and make customers confident in choosing you.",
    businessType: 'All Business Types'
  }
];

interface TestimonialsSectionProps {
  showTitle?: boolean;
  maxItems?: number;
  businessFocus?: string;
}

export default function TestimonialsSection({ 
  showTitle = true, 
  maxItems = 6, 
  businessFocus = 'all' 
}: TestimonialsSectionProps) {
  // Filter benefits based on business focus if specified
  let displayBenefits = businessBenefits;
  if (businessFocus !== 'all') {
    displayBenefits = businessBenefits.filter(benefit => 
      benefit.businessType.toLowerCase().includes(businessFocus.toLowerCase()) ||
      benefit.businessType === 'All Business Types' ||
      benefit.businessType === 'All Local Businesses'
    );
  }
  
  const benefitsToShow = displayBenefits.slice(0, maxItems);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {showTitle && (
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Your Business Needs a Professional Website
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Every successful local business needs an online presence that works as hard as you do. 
                Here's how a professional website transforms your business:
              </p>
            </div>
          </SimpleScrollReveal>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsToShow.map((benefit, index) => (
            <SimpleScrollReveal key={benefit.id} direction="up" delay={300 + (index * 100)}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                <div className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="text-sm">
                    <div className="text-blue-600 dark:text-blue-400 font-medium">
                      Perfect for: {benefit.businessType}
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          ))}
        </div>

        {/* Trust Indicators */}
        <SimpleScrollReveal direction="up" delay={800}>
          <div className="mt-12 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Trusted by 25+ Businesses
              </h3>
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Icon name="star" className="w-5 h-5 text-amber-500" />
                    <Icon name="star" className="w-5 h-5 text-amber-500" />
                    <Icon name="star" className="w-5 h-5 text-amber-500" />
                    <Icon name="star" className="w-5 h-5 text-amber-500" />
                    <Icon name="star" className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Businesses Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">&lt;2s</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Average Load Time</div>
                </div>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

      </div>
    </section>
  );
}
