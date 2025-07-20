"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/images/Icon";
import LightButton from "@/components/LightButton";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What platforms do you manage?",
    answer: "We focus on the platforms where your local customers actually spend time: Facebook, Instagram, and Google Business Profile. These three platforms drive the most engagement and business results for local service businesses."
  },
  {
    question: "How much content do you create?",
    answer: "Our Social Media service includes 15 professionally designed posts per month (3-4 per week) across your key platforms, plus Stories and community engagement. All content is custom-created to match your brand and speak directly to your local audience."
  },
  {
    question: "Do you handle customer interactions?",
    answer: "Absolutely! We monitor and professionally respond to all comments, messages, and reviews within 4 business hours. This includes answering questions, thanking customers, and managing your online reputation."
  },
  {
    question: "How do you measure success?",
    answer: "We provide monthly reports showing follower growth, engagement rates, reach, and website traffic from social media. Most clients see 3-5x engagement increases and 25-40% more website visits from social within 90 days."
  },
  {
    question: "Can you work with existing social accounts?",
    answer: "Yes! We can optimize and take over your existing Facebook, Instagram, and Google Business Profile accounts. If you don't have accounts set up, we'll create professional profiles that match your brand."
  },
  {
    question: "What if I want to post something myself?",
    answer: "No problem! We provide you with access to approve all posts before they go live, and you can always add your own posts. Many clients love being able to share behind-the-scenes moments while we handle the consistent, professional content."
  }
];

export default function SocialMediaPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-6">
            <Icon name="star" className="h-4 w-4 sm:h-5 sm:w-5" />
            Social Media Management
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
            Social Media That Actually <span className="text-blue-600">Connects</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed">
            Stop letting your competitors dominate social media while you're buried in your business. We keep you visible, engaging, and top-of-mind with customers who are ready to buy.
          </p>
          <LightButton href="/contact" className="text-lg px-8 py-4">
            Get Started Today
          </LightButton>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              The Social Media Reality Check
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See yourself in this? You're not alone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Before (Problems) */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-red-200 dark:border-red-800">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">😤</div>
                <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-2">Before Forte Social™</h3>
                <p className="text-red-600 dark:text-red-400">What most business owners deal with</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <p className="text-gray-700 dark:text-gray-300">You know you need to be on social media, but posting consistently feels impossible</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <p className="text-gray-700 dark:text-gray-300">Your competitors are more active online and getting the customers you should have</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <p className="text-gray-700 dark:text-gray-300">You've tried posting yourself, but engagement is low and it takes forever</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <p className="text-gray-700 dark:text-gray-300">Managing multiple platforms while running your business is overwhelming</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <p className="text-gray-700 dark:text-gray-300">You're missing out on local customers who discover businesses through social media</p>
                </div>
              </div>
            </div>

            {/* After (Solution) */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-green-200 dark:border-green-800">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">With Forte Social™</h3>
                <p className="text-green-600 dark:text-green-400">What our clients experience</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <p className="text-gray-700 dark:text-gray-300">Professional content calendar with 3-4 posts per week across your key platforms</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <p className="text-gray-700 dark:text-gray-300">Custom-designed posts that reflect your brand and engage your local audience</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <p className="text-gray-700 dark:text-gray-300">We handle all comments, messages, and customer interactions professionally</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <p className="text-gray-700 dark:text-gray-300">Focus on Facebook, Instagram, and Google Business Profile where customers actually are</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <p className="text-gray-700 dark:text-gray-300">Monthly growth reports showing engagement and reach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forte Social™ Solution Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              How Forte Social™ Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional social media management that actually drives business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Content Planning</h3>
              <p className="text-gray-700 dark:text-gray-300">Custom content calendars tailored to your business, industry, and local community events.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Brand-Matched Design</h3>
              <p className="text-gray-700 dark:text-gray-300">Every post designed to match your brand colors, fonts, and voice for consistent recognition.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Local Focus</h3>
              <p className="text-gray-700 dark:text-gray-300">Content that speaks directly to your local market and showcases your community involvement.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Community Management</h3>
              <p className="text-gray-700 dark:text-gray-300">We respond to comments, messages, and reviews to keep your audience engaged and happy.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Performance Tracking</h3>
              <p className="text-gray-700 dark:text-gray-300">Monthly reports showing follower growth, engagement rates, and website traffic from social.</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Quick Response</h3>
              <p className="text-gray-700 dark:text-gray-300">All customer interactions handled within 4 business hours to maintain professional image.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Case Study Spotlight
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Real results from real businesses
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Client Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">☕</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Main Street Coffee Co.</h3>
                    <p className="text-gray-600 dark:text-gray-400">Local coffee shop & bakery</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">The Challenge</h4>
                    <p className="text-red-700 dark:text-red-300">
                      Inconsistent posting, photos of food looked unprofessional, and barely any customer engagement. They were losing customers to the trendy coffee chain that just opened across the street.
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Our Strategy</h4>
                    <ul className="text-blue-700 dark:text-blue-300 space-y-2">
                      <li>• Professional food photography and lifestyle content</li>
                      <li>• Daily specials and behind-the-scenes content</li>
                      <li>• Customer feature posts and community involvement</li>
                      <li>• Local event promotion and partnerships</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                  <h4 className="font-bold text-green-800 dark:text-green-200 mb-6 text-center">
                    6-Month Results
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                        340%
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        Follower Growth
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                        520%
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        Engagement Rate
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                        45%
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        New Customers from Social
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                        $8,400
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        Monthly Revenue Increase
                      </div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-700 dark:text-green-300 text-center">
                    "Our social media went from embarrassing to enviable. Now customers come in saying they follow us online, and we're busier than ever. That coffee chain across the street? They're struggling while we're thriving."
                    <footer className="text-sm mt-2 not-italic font-medium">
                      — Sarah Chen, Owner
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forte Care™ Promotional Snippet */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 max-w-4xl mx-auto mt-12 mb-8">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏠</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Your Digital Home Needs Maintenance
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Social media drives traffic to your website, but if your site is slow, outdated, or broken, you'll lose those visitors. Forte Care™ keeps your digital home in perfect condition – ensuring fast loading, fresh content, and seamless user experience so your social media efforts actually convert.
            </p>
            <Link
              href="/solutions/care"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <span>Maintain Your Digital Home</span>
              <span className="text-sm">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Social Media Matters Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            Why Social Media Matters for Your Business
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  It's About Building Relationships
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Your customers scroll social media every day. When they see your business sharing helpful tips, community events, or behind-the-scenes moments, you become the obvious choice when they need your services.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Consistency Is Everything
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Posting once in a while doesn't cut it. Your audience needs to see you regularly to remember you exist. We keep you visible with content that actually matters to your local community.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  It Supports Everything Else
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Social media makes your website, Google ads, and word-of-mouth marketing work better. When people hear about you, they check you out online—and active social profiles build instant credibility.
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Animated Social Growth Visualization */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-6 bg-gradient-to-l from-cyan-500/30 via-blue-500/30 to-indigo-500/30 rounded-full" 
                     style={{ animation: 'spin 20s linear infinite' }}></div>
                <div className="absolute inset-12 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full" 
                     style={{ animation: 'bounce 3s ease-in-out infinite' }}></div>
                
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="text-6xl mb-4" style={{ animation: 'bounce 2s ease-in-out infinite' }}>📱</div>
                  <div className="text-xl font-bold text-gray-800 dark:text-gray-200">Social Growth</div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-8 left-8 text-2xl animate-ping">💬</div>
                <div className="absolute top-16 right-12 text-lg" 
                     style={{ animation: 'ping 2s infinite', animationDelay: '0.5s' }}>❤️</div>
                <div className="absolute bottom-12 left-16 text-2xl" 
                     style={{ animation: 'ping 2.5s infinite', animationDelay: '1s' }}>📍</div>
                <div className="absolute bottom-8 right-8 text-lg animate-ping" 
                     style={{ animationDelay: '1.5s' }}>🔔</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details Table */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              What's Included in Your Social Media Management
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need for a professional social media presence
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold">Feature</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">Forte Social™</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">Monthly Posts</td>
                    <td className="px-6 py-4 text-center text-green-600 dark:text-green-400 font-bold">15 posts (3-4/week)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">Platforms Covered</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">Facebook, Instagram, Google Business Profile</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">Custom Graphics & Design</td>
                    <td className="px-6 py-4 text-center text-green-600 dark:text-green-400">✓</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">Content Calendar Planning</td>
                    <td className="px-6 py-4 text-center text-green-600 dark:text-green-400">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">Community Management</td>
                    <td className="px-6 py-4 text-center text-green-600 dark:text-green-400">✓ (4-hour response time)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">Review Monitoring & Response</td>
                    <td className="px-6 py-4 text-center text-green-600 dark:text-green-400">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">Monthly Growth Reports</td>
                    <td className="px-6 py-4 text-center text-green-600 dark:text-green-400">✓</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">Local Community Focus</td>
                    <td className="px-6 py-4 text-center text-green-600 dark:text-green-400">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">Brand-Matched Design</td>
                    <td className="px-6 py-4 text-center text-green-600 dark:text-green-400">✓</td>
                  </tr>
                  <tr className="bg-blue-50 dark:bg-blue-900/20">
                    <td className="px-6 py-4 font-bold text-lg text-gray-900 dark:text-gray-100">Monthly Investment</td>
                    <td className="px-6 py-4 text-center text-2xl font-bold text-blue-600 dark:text-blue-400">$200/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              * Requires active Forte Foundation™ or Pro™ website design package
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              💡 <strong>Popular Combo:</strong> Forte Foundation™ website design + Social media management = $400/month total
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Professional social media management that fits your budget
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Forte Social™</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-blue-600 dark:text-blue-400">$200</span>
                <span className="text-xl text-gray-600 dark:text-gray-400">/month</span>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 text-left">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4">Everything You Need:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">15 professional posts per month across Facebook, Instagram & Google Business Profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Custom graphics and content that match your brand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Community management with 4-hour response time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Monthly growth reports and analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Content calendar with local community focus</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-4 mb-6">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Requirements:</strong> Active Forte Foundation™ or Pro™ website design package required. 
                  Add to any existing Forte™ package for just $200/month.
                </p>
              </div>

              <LightButton href="/contact" className="w-full text-lg py-4">
                Start Growing Your Social Presence
              </LightButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to know about our social media management
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 pr-4">
                    {faq.question}
                  </h3>
                  <span className={`text-2xl text-blue-600 dark:text-blue-400 transition-transform duration-300 ${openFAQ === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Stop watching your competitors get all the social media attention. Let's build your professional presence and start connecting with customers who are ready to buy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-sm font-medium opacity-90">Launch in 7 days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <div className="text-sm font-medium opacity-90">3 platforms managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <div className="text-sm font-medium opacity-90">Growth guaranteed</div>
            </div>
          </div>

          <LightButton href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
            Let's Grow Your Following
          </LightButton>
          
          <p className="text-sm mt-4 opacity-75">
            Add to any Forte™ website package • Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
