import { Metadata } from 'next';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import { getCompanyLogo } from '@/components/CompanyLogos';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import ScrollToTop from '@/components/ScrollToTop';
import IndustryPageWrapper from '@/components/IndustryPageWrapper';

export const metadata: Metadata = {
  title: 'Restaurant Website Design | Websites That Fill Tables (and Order Carts)',
  description: 'Restaurant websites that are fast, beautiful, and designed to drive reservations, online orders, and local search traffic. Mobile-first design with menu integration and local SEO.',
  keywords: 'restaurant website design, restaurant websites, online menu integration, restaurant SEO, food delivery, mobile restaurant sites',
  openGraph: {
    title: 'Restaurant Website Design | Websites That Fill Tables (and Order Carts)',
    description: 'Restaurant websites that are fast, beautiful, and designed to drive reservations, online orders, and local search traffic. Mobile-first design with menu integration and local SEO.',
    type: 'website',
  },
};

export default function RestaurantsPage() {
  return (
    <IndustryPageWrapper industry="restaurants" businessType="restaurant">
      <RestaurantsContent />
    </IndustryPageWrapper>
  );
}

function RestaurantsContent() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "Red Oak Smokehouse" },
    { name: "Bella Vista Italian" },
    { name: "Metro Sushi Bar" },
    { name: "Farm Table Bistro" },
    { name: "Taco Libre Kitchen" }
  ];

  // Comparison data - Forte vs Generic Designer vs Local Agency
  const comparisonFeatures = [
    {
      feature: "Built for Restaurants",
      genericDesigner: false,
      localAgency: false,
      forte: true
    },
    {
      feature: "Mobile-Optimized Menus",
      genericDesigner: false,
      localAgency: false,
      forte: true
    },
    {
      feature: "Local SEO & Maps Optimization",
      genericDesigner: false,
      localAgency: true,
      forte: true
    },
    {
      feature: "Online Order & Reservation CTA",
      genericDesigner: false,
      localAgency: false,
      forte: true
    },
    {
      feature: "Tap-to-Call and Schedule Buttons",
      genericDesigner: false,
      localAgency: true,
      forte: true
    },
    {
      feature: "Google Reviews & Gallery Display",
      genericDesigner: false,
      localAgency: true,
      forte: true
    },
    {
      feature: "Fast Load Times",
      genericDesigner: false,
      localAgency: false,
      forte: true
    },
    {
      feature: "Updates & Edits Included",
      genericDesigner: false,
      localAgency: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Do you build for all food types?",
      answer: "Yes — from food trucks and diners to upscale dining, cafes, and multi-location franchises. We understand the unique needs of different restaurant types and dining experiences."
    },
    {
      question: "Can I show specials, events, and new menus?",
      answer: "Absolutely. We can integrate calendar highlights, seasonal menu swaps, daily specials, and event booking functionality to keep your content fresh and engaging."
    },
    {
      question: "Do you handle online ordering?",
      answer: "Yes — we can integrate tools like Toast, Square, or build a simple custom flow for to-go orders. We'll set up whatever works best for your restaurant's ordering process."
    },
    {
      question: "Do I need to provide all the content?",
      answer: "Not at all. We'll handle the copywriting and menu formatting, you just provide your photos, hours, menu details, and any specific messaging you want to include."
    }
  ];

  const restaurantChallenges = [
    {
      icon: "📱",
      title: "Mobile UX is Everything",
      problem: "Diners bail on slow, unresponsive sites",
      solution: "Tap-to-reserve, mobile-optimized ordering, Google Maps integration"
    },
    {
      icon: "📍",
      title: "Local SEO = Butts in Seats", 
      problem: "Lost in a sea of Yelp listings and directories",
      solution: "Google Business integration, keyword-optimized local pages, schema markup"
    },
    {
      icon: "🧾",
      title: "Menu + Ordering UX",
      problem: "Menus as PDFs, no photos, or can't order online",
      solution: "Visual menu pages with pricing, categories, and CTA buttons"
    },
    {
      icon: "🍽️",
      title: "Showcase the Vibe", 
      problem: "Stock images don't capture your space",
      solution: "Custom image galleries, virtual tours, and real food photography layout"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-700 via-red-600 to-orange-800 text-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-orange-600/50 text-orange-200 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                  🍽️ Industry Expertise: Restaurants
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Restaurant Websites That Fill <span className="text-orange-300">Tables (and Order Carts)</span>
                </h1>
                <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Your food looks amazing — your website should too. We build restaurant websites that are fast, beautiful, and designed to drive reservations, online orders, and local search traffic.
                </p>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-orange-200 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">📱</span>
                    Mobile-First
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">📍</span>
                    Local SEO
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">🍔</span>
                    Menu Integration
                  </div>
                </div>

                <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
                  <button data-open-modal className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto text-white font-bold py-3 px-8 rounded-lg transition-colors cursor-pointer border-none">
                    Get My Restaurant Website Quote
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-orange-200">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    Mobile Menu Display
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    Online Ordering Integration
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    Reservation Systems
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="relative mt-8 lg:mt-0">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-orange-100 max-w-lg mx-auto">
                  {/* Header */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl text-white">
                    <span className="text-2xl sm:text-3xl">🍽️</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white text-lg sm:text-xl font-bold truncate">RED OAK SMOKEHOUSE</h3>
                      <p className="text-orange-100 text-xs sm:text-sm font-semibold">🍖 Authentic BBQ Experience 🔥</p>
                    </div>
                  </div>
                  
                  {/* Menu Items */}
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2 text-sm sm:text-base">
                        🥩 <span className="truncate">Brisket Platter</span>
                      </span>
                      <span className="font-bold text-orange-600 text-base sm:text-lg whitespace-nowrap">$18.99</span>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2 text-sm sm:text-base">
                        🍖 <span className="truncate">Pulled Pork</span>
                      </span>
                      <span className="font-bold text-red-600 text-base sm:text-lg whitespace-nowrap">$14.99</span>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2 text-sm sm:text-base">
                        🍗 <span className="truncate">Smoked Wings</span>
                      </span>
                      <span className="font-bold text-yellow-600 text-base sm:text-lg whitespace-nowrap">$12.99</span>
                    </div>
                  </div>

                  {/* Menu Gallery Preview */}
                  <div className="mb-3 sm:mb-4 bg-gradient-to-r from-orange-100 to-red-100 p-3 sm:p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-orange-200 rounded h-12 sm:h-16 flex items-center justify-center text-orange-700 font-bold text-xs">
                        🍽️ Food Gallery
                      </div>
                      <div className="bg-red-200 rounded h-12 sm:h-16 flex items-center justify-center text-red-700 font-bold text-xs">
                        📸 Space Photos
                      </div>
                    </div>
                  </div>

                  {/* Order button */}
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 sm:py-4 rounded-xl mb-3 sm:mb-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">📱</span>
                      <div>
                        <div className="font-bold text-base sm:text-lg">Order Online</div>
                        <div className="text-orange-100 text-xs sm:text-sm">Fast & Easy Pickup!</div>
                      </div>
                    </div>
                  </div>

                  {/* Reviews section */}
                  <div className="text-center bg-yellow-50 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-yellow-400 text-lg sm:text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="text-gray-700 font-semibold text-sm sm:text-base">4.9/5 Stars</div>
                    <div className="text-gray-600 text-xs sm:text-sm">(287 Google Reviews)</div>
                    <div className="text-orange-600 text-xs sm:text-sm font-medium mt-1">🍖 Best BBQ in Tulsa</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
                  ✅ Online Orders
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  📍 #1 on Google
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                📍 Real Results: Oklahoma Grill Boosted Revenue by $9K in 60 Days
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Red Oak Smokehouse | Tulsa, OK
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Before Forte: DIY site, no menu photos, missing hours on mobile, ranked #8 on Google.
              </p>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">After Forte:</h3>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2 text-orange-600">#1</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">BBQ near Tulsa<br/>in 45 days</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2 text-orange-600">63%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Online Orders<br/>Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2 text-orange-600">3.1x</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Google Maps<br/>Visibility</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2 text-orange-600">$9K</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Revenue Increase<br/>2 months</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2 text-orange-600">2x</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Weekday<br/>Reservations</div>
                  </div>
                </div>
              </div>
              
              <button 
                data-open-modal
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold cursor-pointer bg-transparent border-none p-0 font-inherit"
              >
                📈 Read Full Case Study →
              </button>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Trusted by Leading Restaurants
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Join successful restaurants already growing with Forte websites
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clientCompanies.map((company, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-orange-100 dark:bg-orange-900/40 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {getCompanyLogo(company.name, 'restaurant', "w-12 h-12")}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {company.name}
                  </h3>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                🍕 Why Restaurants Need Industry-Specific Websites
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Generic web designers don't understand the restaurant world — we do. A slow site or clunky menu can cost you bookings, especially when 70% of diners browse from their phones.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurantChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 h-full">
                  <div className="text-3xl mb-4">{challenge.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {challenge.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                        📉 Problem: {challenge.problem}
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                        ✅ Solution: {challenge.solution}
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
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                🍔 What Every Restaurant Website from <span className="text-orange-600">Forte</span> Includes
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                All Forte restaurant sites are built to convert hungry visitors into real customers:
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Mobile-first, blazing-fast structure",
                description: "Built for hungry customers browsing on their phones with lightning-fast load times."
              },
              {
                icon: "📞",
                title: "Tap-to-call, order, or reserve buttons",
                description: "One-tap contact methods that make it easy for customers to place orders or make reservations instantly."
              },
              {
                icon: "🍕",
                title: "Visual digital menu layout",
                description: "Beautiful menu displays with food photos, clear pricing, and category organization that drives orders."
              },
              {
                icon: "⭐",
                title: "Google Reviews and maps prominently displayed",
                description: "Build trust immediately with review integration and location mapping for easy directions."
              },
              {
                icon: "📍",
                title: "Local SEO for \"near me\" search dominance",
                description: "Optimized for local search so you appear when people search for restaurants in your area."
              },
              {
                icon: "📸",
                title: "Photo gallery, video walk-throughs",
                description: "Showcase your space, atmosphere, and signature dishes with professional image and video layouts."
              },
              {
                icon: "📱",
                title: "Instagram feed (optional)",
                description: "Social media integration to keep your site fresh with your latest food photos and updates."
              },
              {
                icon: "🛒",
                title: "Add-ons: Online ordering, event booking, gift cards",
                description: "Optional features like ordering systems, event reservations, seasonal menus, and gift card sales."
              }
            ].map((feature, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                🥗 Why Forte vs. Local Ad Shops or Big Agencies?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See why restaurant owners choose Forte over generic website builders and expensive agencies
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 dark:bg-gray-600">
                <div className="font-semibold text-gray-900 dark:text-white">Feature</div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-600 dark:text-gray-300">Generic Designer</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-600 dark:text-gray-300">Local Agency</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-orange-600 dark:text-orange-400">Forte Web Designs</h3>
                </div>
              </div>
              
              {comparisonFeatures.map((item, index) => (
                <div key={index} className={`grid grid-cols-4 gap-4 p-4 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-600' : 'bg-white dark:bg-gray-700'}`}>
                  <div className="font-medium text-gray-900 dark:text-white text-sm">
                    {item.feature}
                  </div>
                  <div className="text-center">
                    {item.genericDesigner ? (
                      <span className="text-green-500 text-lg">✓</span>
                    ) : (
                      <span className="text-red-500 text-lg">✗</span>
                    )}
                  </div>
                  <div className="text-center">
                    {item.localAgency ? (
                      <span className="text-green-500 text-lg">✓</span>
                    ) : (
                      <span className="text-red-500 text-lg">✗</span>
                    )}
                  </div>
                  <div className="text-center">
                    {item.forte ? (
                      <span className="text-green-500 text-lg">✓</span>
                    ) : (
                      <span className="text-red-500 text-lg">✗</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button data-open-modal className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors cursor-pointer border-none">
                Get My Restaurant Website
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Forte Care™ Promotional Snippet */}
      <SimpleScrollReveal direction="up" delay={800}>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 max-w-4xl mx-auto mt-12 mb-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                <span className="text-2xl">🧽</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Keep Your Website Kitchen Spotless
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You maintain a spotless kitchen because cleanliness affects everything – health ratings, customer trust, and reputation. Your website needs the same attention to cleanliness. Forte Care™ handles the "digital deep cleaning" – removing broken links, updating menus, optimizing speed – so your online presence stays pristine and continues attracting hungry customers.
              </p>
              <button
                data-open-modal
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer border-none"
              >
                <span>Clean Up Your Digital Kitchen</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>
        </div>
      </SimpleScrollReveal>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                🍷 Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Common questions from restaurant owners
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <SimpleAnimatedCard key={index}>
                <details className="bg-white dark:bg-gray-700 rounded-lg shadow-md group">
                  <summary className="p-6 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg transition-colors">
                    {faq.question}
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </details>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                🍽️ Ready to Turn Clicks into Customers?
              </h2>
              <p className="text-xl mb-8 text-orange-100">
                Join restaurants like Red Oak Smokehouse who turned a boring website into a 24/7 reservations and revenue machine. You focus on the food — we'll handle the web.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  data-open-modal
                  className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg cursor-pointer border-none"
                >
                  Get My Restaurant Website Quote
                </button>
                <button 
                  data-open-modal
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-orange-600 transition-colors text-lg cursor-pointer bg-transparent"
                >
                  Free Restaurant Site Audit
                </button>
              </div>
              
              <p className="text-sm text-orange-200 mt-4">
                💡 Free consultation • Live in 7-10 days
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
