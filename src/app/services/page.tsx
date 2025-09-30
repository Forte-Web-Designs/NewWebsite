import { Metadata } from 'next';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Growth Systems That Drive Clients | Forte Web Designs',
  description: 'Complete growth systems that turn visits into booked work—website, automation, integrations, and dashboards working together.',
};

const fourLayers = [
  {
    id: "website-design",
    title: "Website Design (Foundation)",
    description: "Your digital storefront—built to convert. Hand-coded for speed, clarity, and trust so visitors become inquiries.",
    youGet: ["fast load times", "clear messaging", "strong calls-to-action", "lead forms/booking", "analytics baseline"],
    outcome: "more inquiries, stronger first impression, higher conversion",
    href: "/services/web-design"
  },
  {
    id: "automation",
    title: "Smart Automation (Growth)", 
    description: "No more slow replies or forgotten follow-ups. We add instant missed-call texts, web-form auto-responses, and quote/demo reminders that keep deals moving.",
    youGet: ["first-touch automations", "follow-up cadences", "simple owner scorecards"],
    outcome: "hours saved weekly, faster responses, higher show-up and reply rates",
    href: "/services/automation-ai"
  },
  {
    id: "integrations",
    title: "Systems Integration (Scaling)",
    description: "Connect CRM, scheduling, invoicing, phones, and forms so data flows—no double entry, no dropped balls. Add owner dashboards so you see bottlenecks at a glance.",
    youGet: ["clean handoffs", "fewer manual steps", "one place to see leads/quotes/stuck"],
    outcome: "fewer errors, faster cycle times, better forecasting",
    href: "/solutions"
  },
  {
    id: "end-to-end", 
    title: "End-to-End System",
    description: "All layers planned and implemented as one growth engine with clear KPIs and weekly scorecards.",
    youGet: ["foundation + automation + integrations + dashboards", "delivered in phases"],
    outcome: "measurable lift across intake speed, quote turnaround, follow-through, and revenue",
    href: "/contact?type=end-to-end"
  }
];

const outcomes = [
  "First response time: hours → minutes",
  "Quote/checkout speed: multi-day → same-day (or fewer steps)", 
  "Follow-up coverage: ad-hoc → 90–100%",
  "Owner visibility: one dashboard for leads, quotes, and stuck items",
  "Time saved: ~5–20 hours/week across the team"
];

const processSteps = [
  {
    step: "1",
    title: "Audit (free)",
    description: "we identify 3–4 biggest leaks and give you two quick wins."
  },
  {
    step: "2",
    title: "Pilot (2–4 weeks)", 
    description: "instant replies + follow-ups or a focused integration."
  },
  {
    step: "3",
    title: "Scale (4–8 weeks)",
    description: "extend to quotes, handoffs, dashboards tied to KPIs."
  },
  {
    step: "4", 
    title: "Operate",
    description: "Forte Care™ maintains and improves the system as you grow."
  }
];

const extensions = [
  {
    title: "Forte Care™ Optimization",
    description: "ongoing monitoring, updates, and improvements (site + automations)",
    href: "/forte-care"
  },
  {
    title: "Agency Partnership",
    description: "white-label/partner builds for agencies with client delivery needs",
    href: "/agency-partnership"
  },
  {
    title: "Multi-Location/Franchise",
    description: "routing, tagging, and roll-up dashboards at org level",
    href: "/contact"
  }
];

const proofCases = [
  {
    client: "Summit Gaming Lounge",
    outcome: "Omnichannel concierge → faster reservations, deeper engagement",
    href: "/case-studies/summit-gaming-lounge"
  },
  {
    client: "MetroEats", 
    outcome: "Automated partner sourcing → faster outreach, higher lead quality",
    href: "/case-studies/metroeats"
  },
  {
    client: "Fetchly",
    outcome: "Slack exec assistant → ~15 hrs/week saved, faster decisions", 
    href: "/case-studies/fetchly"
  },
  {
    client: "ClearWater Systems",
    outcome: "Email-to-quote + CRM sync → same-day quotes, higher close rate",
    href: "/case-studies/clearwater-systems"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6">
                Growth Systems That Give You Time *and* Clients
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
                Stop gambling on one-off tactics. We design complete, measurable systems that capture leads, book appointments, and turn work into revenue—without adding busywork to your day.
              </p>
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Link href="/growth-audit">
                  <DarkButton className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                    Get My Free Growth Audit →
                  </DarkButton>
                </Link>
                <a 
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                >
                  See How It Works →
                </a>
              </div>
              
              {/* Trust band */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                25+ businesses growing with Forte • DFW-based • 24-hr response • 4.9★ reviews
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* The Four Layers */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-4">
              The Four Layers (work together, or choose where to start)
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {fourLayers.map((layer, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg h-full">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-4">
                    {index + 1}) {layer.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {layer.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">You get:</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">
                        {layer.youGet.join(", ")}.
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Outcome:</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">
                        {layer.outcome}.
                      </span>
                    </div>
                  </div>
                  
                  <Link 
                    href={layer.href}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors"
                  >
                    {layer.id === 'website-design' && 'Explore Website Design →'}
                    {layer.id === 'automation' && 'Explore Automation →'}
                    {layer.id === 'integrations' && 'Explore Integrations →'}
                    {layer.id === 'end-to-end' && 'Talk About an End-to-End Build →'}
                  </Link>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              What You Can Expect (30–90 days)
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {outcomes.map((outcome, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 text-center h-full">
                  <div className="flex items-start gap-3 text-left">
                    <Icon name="check" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">{outcome}</span>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <Link href="/growth-audit">
                <DarkButton className="px-6 py-3">
                  Get My Free Growth Audit →
                </DarkButton>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              How We Work (simple, fast, practical)
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Growth System Extensions */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              Growth System Extensions
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {extensions.map((extension, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center h-full">
                  <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-4">
                    {extension.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {extension.description}
                  </p>
                  <Link 
                    href={extension.href}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-sm"
                  >
                    {extension.title === 'Forte Care™ Optimization' && 'Learn About Forte Care™ →'}
                    {extension.title === 'Agency Partnership' && 'Agency Partnership →'}
                    {extension.title === 'Multi-Location/Franchise' && 'Contact Us →'}
                  </Link>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Proof in Practice */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              Proof in Practice
            </h2>
          </SimpleScrollReveal>
          
          <div className="space-y-4 mb-8">
            {proofCases.map((case_, index) => (
              <SimpleAnimatedCard key={index}>
                <Link href={case_.href}>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow group">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {case_.client}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {case_.outcome}
                        </p>
                      </div>
                      <Icon name="arrow-right" className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                    </div>
                  </div>
                </Link>
              </SimpleAnimatedCard>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <Link 
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                See All Case Studies →
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-8">
              Ready to turn your site into a client-generating system?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/growth-audit">
                <button className="bg-white text-primary-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors w-full sm:w-auto">
                  Get My Free Growth Audit →
                </button>
              </Link>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                Talk to Us →
              </a>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
