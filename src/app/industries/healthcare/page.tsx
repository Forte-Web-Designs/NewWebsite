import { Metadata } from 'next';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';

export const metadata: Metadata = {
  title: 'Healthcare Website Design & Development | Patient-Focused',
  description: 'Patients search for healthcare providers online. We build healthcare websites that build trust, enable online appointments, and provide essential patient information.',
  keywords: 'healthcare website design, medical websites, doctor websites, patient portal, healthcare SEO, medical practice websites',
  openGraph: {
    title: 'Healthcare Website Design & Development | Patient-Focused',
    description: 'Patients search for healthcare providers online. We build healthcare websites that build trust, enable online appointments, and provide essential patient information.',
    type: 'website',
  },
};

export default function HealthcarePage() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "Family Medicine Associates" },
    { name: "Premier Dental Care" },
    { name: "Metro Physical Therapy" },
    { name: "Wellness Clinic Network" },
    { name: "Advanced Cardiology Group" }
  ];

  // Comparison data
  const comparisonFeatures = [
    {
      feature: "HIPAA-compliant design",
      typical: false,
      forte: true
    },
    {
      feature: "SEO built-in",
      typical: false,
      forte: true
    },
    {
      feature: "Online appointment booking",
      typical: false,
      forte: true
    },
    {
      feature: "Ongoing edits included",
      typical: false,
      forte: true
    },
    {
      feature: "Patient portal integration",
      typical: false,
      forte: true
    },
    {
      feature: "Local healthcare SEO",
      typical: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly can you get my healthcare website live?",
      answer: "Most healthcare websites are live within 7-10 business days. We prioritize patient trust elements and appointment booking first, so your site starts converting patients immediately."
    },
    {
      question: "Do you understand healthcare compliance requirements?",
      answer: "Absolutely. We've built websites for 25+ healthcare providers and understand HIPAA compliance, patient privacy, and what builds trust with patients seeking care."
    },
    {
      question: "What makes your healthcare websites different?",
      answer: "We focus on patient-first design with trust-building elements. While other designers build generic websites, we build websites that convert patients and establish credibility in healthcare."
    },
    {
      question: "Do you handle ongoing updates and maintenance?",
      answer: "Yes! All healthcare websites include ongoing updates, content changes, and security monitoring. No additional fees for updating services, staff bios, or patient information."
    }
  ];

  const healthcareChallenges = [
    {
      icon: "🔒",
      title: "Patient Privacy & Trust",
      problem: "Patients need to trust you with their sensitive health information",
      solution: "HIPAA-compliant design with trust signals and security badges"
    },
    {
      icon: "📅",
      title: "Appointment Scheduling",
      problem: "Patients expect easy online appointment booking 24/7",
      solution: "Integrated scheduling system with real-time availability"
    },
    {
      icon: "📍",
      title: "Local Patient Discovery",
      problem: "Competing with large healthcare systems in local search",
      solution: "Local SEO optimization and Google Business prominence"
    },
    {
      icon: "💊",
      title: "Medical Information",
      problem: "Patients research symptoms and treatments online first",
      solution: "Educational content and clear service descriptions"
    }
  ];

  const healthcareFeatures = [
    {
      icon: "🩺",
      title: "Service Information",
      description: "Clear descriptions of medical services and specialties"
    },
    {
      icon: "📅",
      title: "Online Scheduling",
      description: "24/7 appointment booking with automated confirmations"
    },
    {
      icon: "👨‍⚕️",
      title: "Provider Profiles",
      description: "Professional bios, credentials, and patient reviews"
    },
    {
      icon: "📍",
      title: "Location & Hours",
      description: "Multiple locations, hours, and contact information"
    },
    {
      icon: "🔐",
      title: "Patient Portal",
      description: "Secure access to test results and medical records"
    },
    {
      icon: "📚",
      title: "Health Education",
      description: "Educational content and pre/post care instructions"
    }
  ];

  const successMetrics = [
    {
      metric: "52%",
      description: "Increase in online appointments",
      icon: "📅"
    },
    {
      metric: "78%",
      description: "More patient inquiries",
      icon: "📞"
    },
    {
      metric: "145%",
      description: "Growth in new patient registrations",
      icon: "👥"
    },
    {
      metric: "189%",
      description: "Increase in local search visibility",
      icon: "🔍"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <SimpleScrollReveal>
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-300 text-sm font-medium">
                  <Icon name="star" className="w-4 h-4 mr-2" />
                  Healthcare Industry Specialists
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  Healthcare Websites That 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400"> Build Trust</span>
                </h1>

                {/* Subheading */}
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Patients research healthcare providers online before making appointments. Build trust, showcase expertise, and convert visitors into patients with a professional healthcare website.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <Icon name="check" className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">HIPAA-compliant design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <Icon name="check" className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Online appointment booking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <Icon name="check" className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Patient portal integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <Icon name="check" className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Local healthcare SEO</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <DarkButton href="/contact" className="text-center">
                    Launch My Healthcare Website
                  </DarkButton>
                  <LightButton href="/pricing" className="text-center">
                    View Pricing
                  </LightButton>
                </div>

                {/* Social Proof */}
                <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Trusted by healthcare providers across Texas:</p>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                    {clientCompanies.slice(0, 3).map((company, index) => (
                      <div key={index} className="text-gray-700 dark:text-gray-300">
                        <strong>{company.name}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            {/* Right Column - Visual */}
            <SimpleScrollReveal delay={200}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 rounded-xl p-6 space-y-4">
                    {/* Mock healthcare website elements */}
                    <div className="h-4 bg-blue-300 dark:bg-blue-600 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 bg-blue-200 dark:bg-blue-800 rounded"></div>
                      <div className="h-12 bg-teal-200 dark:bg-teal-800 rounded"></div>
                      <div className="h-12 bg-green-200 dark:bg-green-800 rounded"></div>
                    </div>
                    <div className="h-8 bg-blue-400 dark:bg-blue-600 rounded-lg"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full animate-bounce">
                  <span className="text-lg">🩺</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full animate-pulse">
                  <span className="text-lg">⚕️</span>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Healthcare Challenges Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Healthcare Providers Face Unique Online Challenges
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Generic websites don't work for healthcare. You need features that build trust, ensure compliance, and convert patients.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{challenge.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {challenge.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <p className="text-sm text-red-800 dark:text-red-300 font-medium">Challenge:</p>
                      <p className="text-sm text-red-700 dark:text-red-200">{challenge.problem}</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <p className="text-sm text-green-800 dark:text-green-300 font-medium">Our Solution:</p>
                      <p className="text-sm text-green-700 dark:text-green-200">{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Healthcare Website Features That Build Trust
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Every feature is designed to build patient confidence and streamline healthcare delivery.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareFeatures.map((feature, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real Results for Healthcare Clients
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our healthcare websites consistently drive more appointments and patient inquiries.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl mb-2">{metric.icon}</div>
                  <div className="text-4xl font-bold mb-2">{metric.metric}</div>
                  <p className="text-blue-100">{metric.description}</p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Forte vs. Typical Healthcare Websites
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                See why healthcare providers choose Forte for their online presence.
              </p>
            </div>
          </SimpleScrollReveal>

          <SimpleAnimatedCard>
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-6 bg-gray-100 dark:bg-gray-600">
                <div className="font-semibold text-gray-900 dark:text-gray-100">Feature</div>
                <div className="font-semibold text-center text-gray-600 dark:text-gray-300">Typical Websites</div>
                <div className="font-semibold text-center text-blue-600 dark:text-blue-400">Forte Healthcare</div>
              </div>
              
              {comparisonFeatures.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-6 border-t border-gray-200 dark:border-gray-600">
                  <div className="text-gray-900 dark:text-gray-100">{item.feature}</div>
                  <div className="text-center">
                    {item.typical ? (
                      <Icon name="check" className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <Icon name="x" className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {item.forte ? (
                      <Icon name="check" className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <Icon name="x" className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </SimpleAnimatedCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Healthcare Website Questions
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Everything you need to know about healthcare web design.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <SimpleAnimatedCard key={index}>
                <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 group">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-open:mb-4">
                    {faq.question}
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Serve More Patients Online?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the healthcare providers already growing their practice with Forte. Get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DarkButton href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                Start My Healthcare Website
              </DarkButton>
              <LightButton href="/pricing" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Pricing
              </LightButton>
            </div>
            <p className="mt-6 text-blue-200">
              📞 (817) 873-6655 • Same day response guaranteed
            </p>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
