import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import LightButton from '@/components/LightButton';
import DarkButton from '@/components/DarkButton';

export const metadata: Metadata = {
  title: 'CR Deals Cincinnati Case Study - Enterprise AI Marketplace Automation | Forte Web Designs',
  description: 'Discover how we built an enterprise AI automation system for CR Deals Cincinnati that processes 3,000+ products monthly, saves 1,040+ hours annually, and delivers $52K in labor cost savings.',
  openGraph: {
    title: 'CR Deals Cincinnati - Enterprise AI Marketplace Automation',
    description: 'Enterprise AI system saving 1,040+ hours annually with autonomous operation processing 3,000+ products monthly.',
    images: ['/images/case-studies/cr-deals-hero.jpg'],
  },
};

export default function CRDealsCaseStudy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white text-sm font-bold mb-6 shadow-lg">
                FLAGSHIP ENTERPRISE PROJECT
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
                CR Deals Cincinnati
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
                Enterprise AI-Powered Marketplace Automation & Multi-Platform Social Distribution System
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">1,040+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Hours Saved Annually</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">3,000</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Products/Month Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">$52K</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Annual Labor Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-600 dark:text-pink-400">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Autonomous Operation</div>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>



        </div>
      </section>

      {/* Video Walkthrough */}
      <section id="video" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Video Walkthrough
              </h2>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video
                  controls
                  className="w-full"
                >
                  <source src="/video-walkthroughs/Revolutionizing Product Listings_ Automating Auction House Operations.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white">
                  The Challenge
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-6">
                  CR Deals, a leading Cincinnati-based auction and resale operation, faced a critical scaling bottleneck that was preventing business growth and limiting profitability.
                </p>
                <ul className="space-y-3 mb-6">
                  <li>• <strong>20+ hours weekly</strong> spent manually creating product listings</li>
                  <li>• <strong>50-100 products daily</strong> requiring individual price research across Amazon and eBay</li>
                  <li>• Manual content creation for descriptions, titles, and social posts</li>
                  <li>• Multiple data sources (Lightspeed POS, Google Sheets, wholesale feeds) requiring manual reconciliation</li>
                  <li>• Inconsistent social media presence limiting customer engagement</li>
                  <li>• No data-driven product selection resulting in unprofitable inventory decisions</li>
                  <li>• <strong>1,500-3,000 monthly products</strong> overwhelming manual processes</li>
                </ul>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  The team was spending over 1,000 hours annually on tasks that could be automated-preventing them from focusing on high-value activities like sourcing profitable inventory, negotiating with suppliers, and serving customers.
                </p>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white">
                  The Solution
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-6">
                  We built a comprehensive enterprise-grade AI automation system that transforms CR Deals' entire operation from sourcing to sale.
                </p>
                <ul className="space-y-3 mb-6">
                  <li>• <strong>Real-time market intelligence</strong> from Amazon & eBay APIs</li>
                  <li>• <strong>AI-powered product scoring</strong> with custom business rules (25-30% margin thresholds)</li>
                  <li>• <strong>Automated content generation</strong> for 50-100 products daily using GPT-4</li>
                  <li>• <strong>Multi-source data integration</strong> (Lightspeed POS, Google Sheets, B-Stock, Liquidation.com)</li>
                  <li>• <strong>Dual-platform automation</strong> (Facebook & Instagram) with intelligent scheduling</li>
                  <li>• <strong>Professional image processing</strong> with CR Deals watermarking</li>
                  <li>• <strong>Enterprise monitoring</strong> with proactive alerts and error handling</li>
                </ul>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  The system operates 24/7, processing 1,500-3,000 products monthly while saving 1,040+ hours annually-equivalent to hiring a full-time employee without the overhead.
                </p>
              </div>
            </div>
          </SimpleScrollReveal>

          {/* Key System Features */}
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">Key System Features</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
                Built with enterprise-grade technology to handle high-volume processing, real-time market intelligence, and multi-platform distribution-all operating autonomously 24/7.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <div className="mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Enterprise AI Product Scoring & Market Intelligence
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Advanced OpenAI GPT-4 system evaluates 1,500-3,000 monthly products by comparing acquisition costs against real-time Amazon and eBay market data. Calculates profit margins accounting for fees and shipping, analyzes Google Trends for demand forecasting, applies custom business rules (25-30% minimum margins, category prioritization, automatic used-item exclusion), and scores profitability potential 0-100. Only high-potential products receive listing resources-maximizing ROI on every post.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <div className="mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      High-Volume AI Content Generation
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Automated content creation for 50-100 products daily including SEO-optimized titles with strategic keyword placement, compelling 8-12 bullet descriptions highlighting value propositions, accurate category tags for proper marketplace placement, and strategic hashtag sets combining trending and evergreen tags. Maintains CR Deals' brand voice while adapting messaging to product categories (Tools, Home Improvement, Electronics, Furniture) and target audience preferences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <div className="mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Multi-Source Data Integration
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Enterprise integration with Lightspeed POS (real-time inventory and pricing), Google Sheets (manual product entry), and wholesale feed APIs from B-Stock and Liquidation.com (high-volume sourcing). Automatically normalizes disparate data formats, extracts key fields (SKU, cost, description, images, MSRP), validates data quality, handles missing fields intelligently, and creates unified product records-eliminating manual data entry and reconciliation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                <div className="mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Facebook & Instagram Enterprise Automation
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Meta Graph API integration enables high-volume automatic posting to CR Deals' Facebook Page and Instagram with professionally optimized images (cropped to specs and watermarked), engaging captions with strategic CTAs, and intelligent scheduling for daily "Deal Drop" promotions maintaining 7-day weekly engagement. Handles 50-100 daily posts, prevents duplicates, queues by priority score, and maintains brand presence across both platforms without manual social media management.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Real-Time Performance Dashboard
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Centralized Airtable dashboard providing instant visibility into all 1,500-3,000 monthly products with AI trend scores (0-100 scale), acquisition costs, suggested sell prices based on market comps, projected profit margins accounting for fees, post status tracking (queued/posted/sold), and performance analytics. Updates in real-time, enables filtering by category/score/margin, and gives CR Deals leadership complete operational visibility without manual spreadsheet management.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Professional Image Processing & Branding
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Automated system processing 50-100 product images daily including smart cropping to Facebook/Instagram specifications (1:1 square, 4:5 portrait), CR Deals watermark application for brand recognition and theft prevention, file size optimization for fast mobile loading, and multi-image handling per product. Maintains professional presentation with consistent branding across all listings without manual editing, Photoshop work, or graphic design time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8">
                Results & Business Impact
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transforming CR Deals' operations with measurable time savings, cost reduction, and scalability that enables growth without proportional labor increases.
              </p>
            </div>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up" delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6">
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  1,040+
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Hours Saved Annually
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  20+ hours per week freed from manual listing creation, price research, and social media management
                </p>
              </div>

              <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6">
                <div className="text-4xl sm:text-5xl font-bold text-green-600 dark:text-green-400 mb-2">
                  $20K-52K
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Annual Labor Savings
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Based on $20-50/hour opportunity cost-equivalent to a full-time employee without overhead
                </p>
              </div>

              <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6">
                <div className="text-4xl sm:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  1,500-3K
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Products Processed Monthly
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  50-100 products automated daily with AI scoring, content generation, and multi-platform distribution
                </p>
              </div>

              <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6">
                <div className="text-4xl sm:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  24/7
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Autonomous Operation
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Continuous processing across data integration, AI analysis, content generation, and social posting
                </p>
              </div>
            </div>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up" delay={300}>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="text-center bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl p-6">
                <div className="text-4xl sm:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  3-5x
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Listing Volume Increase
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Dramatically higher inventory throughput without proportional labor cost increases
                </p>
              </div>

              <div className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6">
                <div className="text-4xl sm:text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                  85%+
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Manual Work Eliminated
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Team now focuses on high-value activities: sourcing, negotiation, and customer service
                </p>
              </div>
            </div>
          </SimpleScrollReveal>

          {/* ROI Analysis */}
          <SimpleScrollReveal direction="up" delay={400}>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Return on Investment Analysis</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-red-800 dark:text-red-300 mb-4">Previous Manual Process</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• 20+ hours/week on listing creation</li>
                    <li>• 1,040 hours annually</li>
                    <li>• At $20/hour (conservative): $20,800/year</li>
                    <li>• At $30/hour (realistic): $31,200/year</li>
                    <li>• At $50/hour (opportunity cost): $52,000/year</li>
                    <li>• Limited scalability without hiring</li>
                    <li>• Inconsistent quality and social presence</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4">Automated System Investment</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Year 1 Total: $11,800</li>
                    <li>• Initial build: $2,200</li>
                    <li>• Monthly hosting: $9,600/year</li>
                    <li>• Infinite scalability (handles volume growth)</li>
                    <li>• Consistent 24/7 operation</li>
                    <li>• Data-driven decisions improve margins</li>
                    <li>• Year 2+: Only $9,600 annually</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8 p-6 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  76% to 340%
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">First Year ROI</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Net Savings: $9,000-$40,200 Annually</p>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* How The System Works Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8">
                How The System Works
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Four-stage intelligent automation pipeline processing data from sourcing through social distribution-operating continuously without human intervention.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-12">
            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Multi-Source Data Ingestion & Normalization
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      Product data flows automatically from three distinct sources: Lightspeed POS (real-time inventory and pricing), Google Sheets (manual product entry), and wholesale APIs from B-Stock and Liquidation.com (high-volume sourcing). The n8n automation platform normalizes different data formats, extracts and maps key fields (SKU, description, cost, MSRP, quantity, images, categories), validates data quality, handles missing fields intelligently, and creates unified product objects ready for AI processing-eliminating manual data entry, copy-paste errors, and spreadsheet reconciliation consuming hours daily.
                    </p>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={200}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Enterprise AI Product Analysis & Market Intelligence
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      OpenAI GPT-4 evaluates each of 1,500-3,000 monthly products against current market conditions by querying Amazon and eBay APIs for real-time comparable pricing, calculating optimal sell prices balancing competitiveness with CR Deals' 25-30% minimum margin requirements, analyzing Google Trends for demand forecasting and seasonality, applying custom business rules (prioritize Tools/Home Improvement/Electronics/Furniture, automatically exclude used/damaged items), scoring profitability potential 0-100, and filtering products below thresholds. Only products meeting all criteria proceed to content generation-ensuring CR Deals invests resources exclusively in high-potential inventory.
                    </p>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={300}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      High-Volume Content Generation & Image Optimization
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      AI creates platform-specific content for 50-100 products daily including marketplace-optimized titles with strategic keywords, benefit-driven descriptions with 8-12 compelling bullets highlighting value propositions while maintaining CR Deals' brand voice, relevant hashtags combining trending and evergreen tags for maximum reach, and accurate category classifications for proper Facebook Marketplace placement. Simultaneously, the image processing system automatically crops photos to platform specifications (1:1 square, 4:5 portrait), applies CR Deals watermark for brand recognition and theft prevention, optimizes file sizes for fast mobile loading, and handles multiple images per product-all without manual Photoshop work or graphic design time.
                    </p>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={400}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-600 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Automated Social Distribution & Performance Tracking
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      Scheduled posts publish automatically to CR Deals' Facebook Page and Instagram via Meta Graph API with intelligent queuing based on product priority scores (highest-profit items posted first), daily "Deal Drop" promotional campaigns scheduled for optimal engagement times, cross-platform posting maintaining consistent 7-day weekly brand presence, performance tracking monitoring engagement metrics (likes, comments, shares, clicks), error handling with automated email/SMS alerts if posts fail, and real-time dashboard updates showing post status. The system operates continuously 24/7, processing 50-100 products daily, maintaining consistent social presence, and driving customer engagement-all without manual posting, content scheduling, or social media management time.
                    </p>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8">
                Enterprise Technology Stack
              </h2>
            </div>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up" delay={100}>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">n8n</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Enterprise Automation</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">GPT-4</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">OpenAI</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Meta</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Graph API</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Amazon</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Product API</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">eBay</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Browse API</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Lightspeed</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">POS Integration</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">Google</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Sheets API</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">B-Stock</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Wholesale Feeds</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Liquidation</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">.com API</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Airtable</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Database</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">Advanced</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Image Processing</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">Real-time</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Monitoring</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">SMS/Email</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Alerts</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-3 shadow-sm">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">Google</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Trends Integration</div>
                  </div>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                See how we can build an enterprise AI automation solution that saves 1,000+ hours annually and scales your business without proportional labor increases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg"
                >
                  Book a Strategy Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-semibold transition-all duration-200"
                >
                  View More Case Studies
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>


    </main>
  );
}