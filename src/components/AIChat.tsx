'use client';
import { useState, useEffect, useRef } from 'react';

type Message = {
  type: 'bot' | 'user';
  text: string;
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: "Hi! I'm Sophia 👋 I help business owners grow with systems that actually work. Business growth isn't luck—it's having the right data, framework, and execution. What's your biggest challenge right now?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 100);
    return () => clearTimeout(timer);
  }, [messages]);

  // Track screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const quickQuestions = [
    {
      q: "What makes Forte different?",
      a: "We don't do templates or cookie-cutter solutions. Every website, every automation, every system is custom-built for YOUR business. We're strategic partners—not just developers. You get a team that spans growth, sales, marketing, and engineering. Plus, our Forte Care™ guarantee means if you're not 100% satisfied, we make it right. Want to see what a custom system could do for you?",
      followUp: ["Tell me about AI automation", "What's included in Forte Care?", "How much does it cost?"]
    },
    {
      q: "Tell me about AI automation",
      a: "Imagine saving 20+ hours per week by automating your repetitive tasks—lead management, customer follow-ups, data entry, reporting. That's what our AI automation does. We build intelligent systems that work 24/7, so you can focus on high-value work. One client saved $50K/year in labor costs. Another increased lead response time from 2 hours to 2 minutes. This is the competitive edge businesses are using right now. Ready to automate your workflow?",
      followUp: ["What results do clients see?", "Can you automate my specific industry?", "Book a consultation"]
    },
    {
      q: "How much does it cost?",
      a: "Custom websites start at $3,000. Complete business systems (website + AI automation + integrations) start at $8,000. Here's what matters: our clients typically see 3-5x ROI in year one. Plus, every project includes our 100% satisfaction guarantee. We also offer Forte Care™ starting at $250/month—unlimited revisions, 24/7 monitoring, and peace of mind. Want to discuss what makes sense for your business?",
      followUp: ["What's included in Forte Care?", "Do you offer payment plans?", "Book a free consultation"]
    },
    {
      q: "What results do clients see?",
      a: "Real results: 40% higher conversion rates, 20+ hours saved weekly with automation, and 3-5x ROI in the first year. One client went from 2 leads/month to 30+ in 90 days. Another increased revenue by $120K in 6 months. These aren't flukes—they're the result of having a system built specifically for your business, backed by data and strategy. Want results like these?",
      followUp: ["Tell me about AI automation", "Book a free consultation", "What makes Forte different?"]
    },
    {
      q: "What's included in Forte Care?",
      a: "Forte Care™ is your peace of mind plan. For $250/month, you get: unlimited website revisions, 24/7 uptime monitoring, daily backups, security updates, and priority support. Need more? Our $750/month Growth Partner plan includes 5 dev hours/month, conversion optimization, A/B testing, and strategic consulting. Every plan has our 100% satisfaction guarantee. Want to add Forte Care to your project?",
      followUp: ["How much does a website cost?", "Book a free consultation", "What results do clients see?"]
    }
  ];

  const handleQuestionClick = (question: string, answer: string, followUp?: string[]) => {
    setMessages([
      ...messages,
      { type: 'user', text: question },
      { type: 'bot', text: answer }
    ]);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 md:right-20 z-50 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700" style={{maxWidth:'calc(100vw - 3rem)'}}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex justify-between items-center rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">S</div>
              <div>
                <div className="text-white font-semibold text-sm">Sophia</div>
                <div className="text-white/80 text-xs">Client Success</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 rounded p-1 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-4 h-96 overflow-y-auto bg-gray-50 dark:bg-gray-900 space-y-3" id="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg p-3 ${
                  msg.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}

            <div className="space-y-2 mt-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">
                {messages.length === 1 ? 'Quick Questions:' : 'Have another question?'}
              </p>
              {quickQuestions.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestionClick(item.q, item.a, item.followUp)}
                  className="w-full text-left px-3 py-2 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg text-sm transition-colors"
                >
                  {item.q}
                </button>
              ))}
            </div>

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Ready to grow? <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Book your free consultation →</a>
            </p>
          </div>
        </div>
      )}
      <div className="fixed bottom-6 right-6 md:bottom-6 md:right-20 z-40" style={{ width: '48px', height: '48px' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center relative group"
          style={{ width: '48px', height: '48px', minWidth: '48px', minHeight: '48px' }}
          aria-label="Chat with Sophia"
        >
          {!isOpen && (
            <span
              className="bg-green-500 border-2 border-white animate-pulse"
              style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: isMobile ? '8px !important' : '12px !important',
                height: isMobile ? '8px !important' : '12px !important',
                minWidth: isMobile ? '8px !important' : '12px !important',
                minHeight: isMobile ? '8px !important' : '12px !important',
                maxWidth: isMobile ? '8px !important' : '12px !important',
                maxHeight: isMobile ? '8px !important' : '12px !important',
                borderRadius: '50%',
                display: 'block',
                flex: 'none',
                overflow: 'hidden'
              }}
            ></span>
          )}
          <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </>
  );
}
