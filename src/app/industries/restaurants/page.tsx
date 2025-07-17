import { Metadata } from 'next';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';

export const metadata: Metadata = {
  title: 'Restaurant Website Design & Development | Order Ready',
  description: 'Hungry customers are searching online. Your restaurant needs a website that showcases your menu, drives online orders, and brings diners through your doors. We build restaurant websites that increase reservations and boost revenue.',
  keywords: 'restaurant website design, restaurant websites, online menu, restaurant SEO, food delivery integration',
  openGraph: {
    title: 'Restaurant Website Design & Development | Order Ready',
    description: 'Hungry customers are searching online. Your restaurant needs a website that showcases your menu, drives online orders, and brings diners through your doors. We build restaurant websites that increase reservations and boost revenue.',
    type: 'website',
  },
};

export default function RestaurantsPage() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "Bella Vista Italian", location: "Dallas, TX" },
    { name: "Smokehouse BBQ Co", location: "Austin, TX" },
    { name: "Metro Sushi Bar", location: "Houston, TX" },
    { name: "Taco Libre Kitchen", location: "San Antonio, TX" },
    { name: "Farm Table Bistro", location: "Fort Worth, TX" }
  ];

  // Comparison data
  const comparisonFeatures = [
    {
      feature: "Mobile-first for restaurants",
      typical: false,
      forte: true
    },
    {
      feature: "SEO built-in",
      typical: false,
      forte: true
    },
    {
      feature: "Online ordering integration",
      typical: false,
      forte: true
    },
    {
      feature: "Ongoing menu updates",
      typical: false,
      forte: true
    },
    {
      feature: "Social media integration",
      typical: false,
      forte: true
    },
    {
      feature: "Local search optimization",
      typical: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly can you get my restaurant website live?",
      answer: "Most restaurant websites are live within 7-10 business days. We prioritize menu display and ordering features first, so your site starts driving orders immediately."
    },
    {
      question: "Do you understand the restaurant industry?",
      answer: "Absolutely. We've built websites for 20+ restaurants and understand customer dining patterns, online ordering trends, and what builds trust with hungry customers."
    },
    {
      question: "What makes your restaurant websites different?",
      answer: "We focus on mobile-first menu browsing and order conversion. While other designers build pretty websites, we build websites that increase reservations and boost takeout orders."
    },
    {
      question: "Do you handle ongoing menu updates?",
      answer: "Yes! All restaurant websites include ongoing updates for menu changes, pricing, and seasonal specials. No additional fees for updating your offerings."
    }
  ];

  const restaurantChallenges = [
    {
      icon: "🍽️",
      title: "Mobile Menu Browsing",
      problem: "78% of restaurant searches happen on mobile while deciding where to eat",
      solution: "Mobile-optimized menus with clear photos and pricing"
    },
    {
      icon: "📱",
      title: "Online Ordering",
      problem: "Customers expect easy online ordering and delivery options",
      solution: "Integrated ordering systems and delivery platform connections"
    },
    {
      icon: "⭐",
      title: "Review Management",
      problem: "Online reviews directly impact restaurant foot traffic",
      solution: "Review integration and reputation management tools"
    },
    {
      icon: "🗓️",
      title: "Reservation System",
      problem: "Busy restaurants need efficient table booking systems",
      solution: "Online reservation forms and table management integration"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal>
              <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="star" className="h-4 w-4" />
                Restaurant Websites That Drive Orders
              </div>
            </SimpleScrollReveal>
            
            <SimpleScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
                Websites That Fill Tables & 
                <span className="text-orange-600 dark:text-orange-400"> Drive Orders</span>
              </h1>
            </SimpleScrollReveal>
            
            <SimpleScrollReveal delay={0.2}>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Hungry customers are searching online. Your restaurant needs a website that showcases your menu beautifully, drives online orders, and brings diners through your doors.
              </p>
            </SimpleScrollReveal>
            
            <SimpleScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <DarkButton href="/contact">
                  Start My Restaurant Website
                </DarkButton>
                <LightButton href="/pricing">
                  View Pricing
                </LightButton>
              </div>
            </SimpleScrollReveal>
            
            {/* Stats */}
            <SimpleScrollReveal delay={0.4}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">78%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Mobile Restaurant Searches</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">2.3x</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">More Online Orders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">65%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Increase in Reservations</div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Restaurant Challenges Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Restaurant Website Challenges We Solve
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Every restaurant faces unique digital challenges. Here's how we address them.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurantChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <div className="text-3xl mb-4">{challenge.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {challenge.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                        Problem: {challenge.problem}
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                        Solution: {challenge.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Restaurant Website Features That Drive Business
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Every feature is designed to convert hungry visitors into paying customers.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🍕",
                title: "Visual Menu Display",
                description: "Beautiful, mobile-optimized menus with high-quality food photography and clear pricing that makes ordering irresistible."
              },
              {
                icon: "📱",
                title: "Online Ordering Integration",
                description: "Seamless integration with popular ordering platforms and custom ordering forms that increase takeout revenue."
              },
              {
                icon: "📅",
                title: "Reservation System",
                description: "Easy-to-use booking system that lets customers reserve tables online and reduces phone calls during busy hours."
              },
              {
                icon: "⭐",
                title: "Review Showcase",
                description: "Highlight your best reviews and ratings prominently to build trust with new customers before they visit."
              },
              {
                icon: "📍",
                title: "Local SEO Optimization",
                description: "Dominate local search results for 'restaurants near me' and appear when hungry customers are looking for food."
              },
              {
                icon: "📸",
                title: "Social Media Integration",
                description: "Connect your Instagram feed and social media to showcase your atmosphere and latest dishes automatically."
              }
            ].map((feature, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
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

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Forte vs. Typical Restaurant Websites
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                See why restaurant owners choose Forte for their online presence.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <SimpleScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-6 bg-orange-100 dark:bg-orange-900/30">
                  <div className="font-semibold text-gray-900 dark:text-gray-100">Feature</div>
                  <div className="font-semibold text-center text-gray-900 dark:text-gray-100">Typical Websites</div>
                  <div className="font-semibold text-center text-orange-600 dark:text-orange-400">Forte Websites</div>
                </div>
                
                {comparisonFeatures.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 p-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <div className="text-gray-900 dark:text-gray-100">{item.feature}</div>
                    <div className="text-center">
                      {item.typical ? (
                        <Icon name="check" className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <Icon name="x" className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </div>
                    <div className="text-center">
                      {item.forte ? (
                        <Icon name="check" className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <Icon name="x" className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Real Restaurant Success Story
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  How we helped a local restaurant increase orders by 180%
                </p>
              </div>
            </SimpleScrollReveal>
            
            <SimpleScrollReveal delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/40 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🍝</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Bella Vista Italian</h3>
                        <p className="text-gray-700 dark:text-gray-300">Family-owned Italian restaurant</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">The Challenge</h4>
                        <p className="text-red-700 dark:text-red-300 text-sm">
                          Outdated website with no online ordering. Losing customers to competitors with better digital presence. Phone orders overwhelming staff during peak hours.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Our Solution</h4>
                        <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                          <li>• Mobile-first menu design with food photography</li>
                          <li>• Integrated online ordering system</li>
                          <li>• Local SEO optimization for "Italian food near me"</li>
                          <li>• Reservation system and review showcase</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4">The Results (90 Days)</h4>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">180%</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Online Order Increase</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">250%</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Website Traffic</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">45%</div>
                          <div className="text-sm text-green-700 dark:text-green-300">More Reservations</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">#1</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Local Search Ranking</div>
                        </div>
                      </div>
                      
                      <blockquote className="text-green-700 dark:text-green-300 italic text-sm">
                        "Our new website transformed our business. Online orders went through the roof, and we're booked solid most nights. Best investment we've made."
                      </blockquote>
                      <cite className="text-green-600 dark:text-green-400 text-xs block mt-2">
                        — Marco Rossi, Owner
                      </cite>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Trusted by Restaurant Owners Across Texas
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Join the growing list of restaurants that trust Forte with their digital presence.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <SimpleScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {clientCompanies.map((company, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-3">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">🍽️</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">
                      {company.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {company.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Restaurant Website Questions & Answers
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Everything you need to know about restaurant website development.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <SimpleScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Fill More Tables & Drive More Orders?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join the restaurants that chose Forte and watch your online orders and reservations soar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LightButton href="/contact" className="bg-white text-orange-600 hover:bg-gray-100">
                Start My Restaurant Website
              </LightButton>
              <LightButton href="/pricing" className="border-white text-white hover:bg-white hover:text-orange-600">
                View Pricing Options
              </LightButton>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </>
  );
}
