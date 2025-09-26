'use client';

import { useState } from 'react';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import LightButton from '@/components/LightButton';
import DarkButton from '@/components/DarkButton';

interface CaseStudy {
  id: string;
  industry: string;
  business: string;
  location: string;
  badges: string[];
  summary: string;
  beforeAfter: Array<{
    kpi: string;
    before: string;
    after: string;
  }>;
  changes: {
    foundation: string[];
    seo: string[];
    care: string[];
  };
  quote: string;
  icon: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'restaurant',
    industry: 'Restaurant',
    business: 'Riverside Grill',
    location: 'Garland, TX',
    badges: ['+40% online orders', '2× weekend bookings', 'Delivery enabled'],
    summary: 'Lost weekend bookings to DoorDash. We built a fast site with online ordering, menu photos, and local SEO.',
    beforeAfter: [
      { kpi: 'Online orders (mo)', before: '~75', after: '~105 (+40%)' },
      { kpi: 'Weekend bookings', before: '~30%', after: '~65%' },
      { kpi: 'Delivery coverage', before: 'DoorDash only', after: '3 platforms' }
    ],
    changes: {
      foundation: ['fast menu with photos', 'online ordering'],
      seo: ['GMB optimization', 'reviews', 'local search'],
      care: ['menu updates', 'seasonal promos', 'uptime']
    },
    quote: 'We finally compete with the big chains—customers order direct.',
    icon: '🍽️'
  },
  {
    id: 'contractor',
    industry: 'Home Services',
    business: 'Carter HVAC',
    location: 'Keller, TX',
    badges: ['+60% quote requests', 'Top 3 "AC repair Keller"', 'More mobile calls'],
    summary: 'Lost to bigger brands in local search. We built a fast site with emergency CTAs, service pages, and local SEO.',
    beforeAfter: [
      { kpi: 'Quote requests (mo)', before: '~50', after: '~80 (+60%)' },
      { kpi: 'Rank "AC repair Keller"', before: '#9', after: 'Top 3' },
      { kpi: 'Mobile call-through rate', before: '2.1%', after: '3.4%' }
    ],
    changes: {
      foundation: ['emergency bar', 'service pricing blocks'],
      seo: ['city+service pages', 'GMB tune', 'reviews'],
      care: ['seasonal promo banners', 'uptime']
    },
    quote: 'We show up, phones ring, jobs book. Simple.',
    icon: '🔨'
  },
  {
    id: 'healthcare',
    industry: 'Healthcare',
    business: 'RiverSide Clinic',
    location: 'Dallas, TX',
    badges: ['2.5× inquiries', 'Bounce rate down', 'Online scheduling live'],
    summary: 'No online booking and an old theme. We redesigned for trust, added provider bios, and HIPAA-friendly forms.',
    beforeAfter: [
      { kpi: 'Patient inquiries (mo)', before: '8', after: '20+' },
      { kpi: 'Bounce rate', before: '62%', after: '34%' },
      { kpi: 'New patient forms', before: 'manual', after: 'integrated' }
    ],
    changes: {
      foundation: ['clean UX', 'provider profiles'],
      seo: ['services/conditions schema', 'local pages'],
      care: ['security checks', 'form compliance']
    },
    quote: 'Patients book on the site now—our staff saves hours weekly.',
    icon: '🏥'
  },
  {
    id: 'professional-services',
    industry: 'Professional Services',
    business: 'Lee & Co. Legal',
    location: 'Fort Worth, TX',
    badges: ['+85% organic traffic', '2× consults', 'Trust signals added'],
    summary: 'DIY site lacked authority. We built a premium design with case studies, attorney bios, and structured content.',
    beforeAfter: [
      { kpi: 'Organic traffic (mo)', before: '~900', after: '~1,670 (+85%)' },
      { kpi: 'Consult requests (mo)', before: '~20', after: '~40' },
      { kpi: 'Impression-to-lead rate', before: '0.9%', after: '1.6%' }
    ],
    changes: {
      foundation: ['authoritative layout', 'resource hub'],
      seo: ['practice-area clusters', 'schema', 'FAQs'],
      care: ['content updates', 'speed tuning']
    },
    quote: 'Clients tell us they chose us because we "looked most credible".',
    icon: '⚖️'
  },
  {
    id: 'retail',
    industry: 'Retail',
    business: 'Elite Boutique',
    location: 'Plano, TX',
    badges: ['$18k online in 6 months', 'Repeat buyers up', 'Pickup enabled'],
    summary: 'No e-commerce. We launched a Shopify-integrated site with collection pages and local SEO.',
    beforeAfter: [
      { kpi: 'Online revenue (6 mo)', before: '$0', after: '$18k+' },
      { kpi: 'Returning customer rate', before: '12%', after: '22%' },
      { kpi: 'Rank "boutique Plano"', before: '#11', after: '#4' }
    ],
    changes: {
      foundation: ['Shopify theme hardening', 'fast PDPs'],
      seo: ['collections', 'reviews', 'local terms'],
      care: ['drops', 'promos', 'inventory sync']
    },
    quote: 'Online buyers also walk in—site and store finally work together.',
    icon: '🛍️'
  },
  {
    id: 'automotive',
    industry: 'Automotive',
    business: 'North Texas Auto Repair',
    location: 'Irving, TX',
    badges: ['+45% new calls', 'Fewer no-shows', 'Top 3 "brake repair Irving"'],
    summary: 'No booking or pricing online. We added service pages, transparent pricing, and scheduling.',
    beforeAfter: [
      { kpi: 'New customer calls (mo)', before: '~120', after: '~174 (+45%)' },
      { kpi: 'No-show rate', before: '~18%', after: '~12%' },
      { kpi: 'Rank "brake repair Irving"', before: '#10', after: 'Top 3' }
    ],
    changes: {
      foundation: ['service pricing blocks', 'quick forms'],
      seo: ['service schema', 'local pages', 'reviews'],
      care: ['promo updates', 'uptime', 'reporting']
    },
    quote: 'Customers say we\'re easier to book—exactly the point.',
    icon: '🚗'
  }
];

function CaseStudyCard({ study, onExpand }: { study: CaseStudy; onExpand: () => void }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Industry Tag */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
            {study.industry}
          </span>
          <span className="text-3xl">{study.icon}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          {study.business}
        </h3>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {study.location}
        </p>

        {/* Metric Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {study.badges.map((badge, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
          {study.summary}
        </p>

        <button
          onClick={onExpand}
          className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          View details →
        </button>
      </div>
    </div>
  );
}

function CaseStudyDetail({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{study.icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {study.business}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {study.industry} • {study.location}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {/* Before/After KPI Table */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Before/After Results
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 dark:border-gray-700 rounded-lg">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                      Metric
                    </th>
                    <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                      Before
                    </th>
                    <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                      After
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {study.beforeAfter.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100">
                        {row.kpi}
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-600 dark:text-gray-400">
                        {row.before}
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-green-600 dark:text-green-400 font-medium">
                        {row.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* What We Changed */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              What We Changed
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">
                  Foundation (Website)
                </h4>
                <ul className="space-y-1">
                  {study.changes.foundation.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">
                  SEO (Local Demand)
                </h4>
                <ul className="space-y-1">
                  {study.changes.seo.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-orange-600 dark:text-orange-400 mb-2">
                  Forte Care™ (Ongoing)
                </h4>
                <ul className="space-y-1">
                  {study.changes.care.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
            <blockquote className="text-lg text-gray-900 dark:text-gray-100 italic">
              "{study.quote}"
            </blockquote>
          </div>

          {/* CTA */}
          <div className="text-center">
            <LightButton href="/contact" className="mr-4">
              Get a Growth Audit for {study.industry}
            </LightButton>
            <DarkButton href="/pricing">
              See Pricing
            </DarkButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesClient() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        
        {/* Hero Section */}
        <SimpleScrollReveal direction="up" delay={200}>
          <div className="py-16 md:py-24 text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Real Businesses. Real Growth.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8">
                These are realistic examples of what happens when a small business gets the right foundation, local SEO, and ongoing support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LightButton href="/contact">
                  Get a Free Growth Audit
                </LightButton>
                <DarkButton href="/pricing">
                  See Pricing
                </DarkButton>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

        {/* Case Study Grid */}
        <div className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <SimpleScrollReveal key={study.id} direction="up" delay={300 + (index * 100)}>
                  <CaseStudyCard
                    study={study}
                    onExpand={() => setSelectedStudy(study)}
                  />
                </SimpleScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Why This Works Section */}
        <SimpleScrollReveal direction="up" delay={400}>
          <div className="py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Why This Works
              </h2>
              
              {/* Growth System Diagram */}
              <div className="max-w-4xl mx-auto mb-12">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏗️</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Foundation (Website)
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Custom code, sub-2s load, mobile-first UX
                    </p>
                  </div>
                  
                  <div className="hidden md:block text-gray-400">→</div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📈</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      SEO (Local Demand)
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      City/service pages, schema, reviews, Maps
                    </p>
                  </div>
                  
                  <div className="hidden md:block text-gray-400">→</div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Forte Care™ (Ongoing)
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Security, uptime, content updates, seasonal promos
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-8">
                  One system, three layers. Predictable growth without juggling vendors.
                </p>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

        {/* Credibility Strip */}
        <SimpleScrollReveal direction="up" delay={500}>
          <div className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    25+
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Local businesses served
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    Sub-2s
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Average load times
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    95%+
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Client retention
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    100%
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    USA-based team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

        {/* Final CTA */}
        <SimpleScrollReveal direction="up" delay={600}>
          <div className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join These Success Stories?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Template sites don't win local markets. Our custom-coded Growth Systems do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LightButton href="/contact" className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-4">
                  Get a Free Growth Audit
                </LightButton>
                <DarkButton href="/pricing" className="border-2 border-white/30 text-lg px-8 py-4">
                  Explore Pricing
                </DarkButton>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

        {/* Case Study Detail Modal */}
        {selectedStudy && (
          <CaseStudyDetail
            study={selectedStudy}
            onClose={() => setSelectedStudy(null)}
          />
        )}

      </div>
    </div>
  );
}
