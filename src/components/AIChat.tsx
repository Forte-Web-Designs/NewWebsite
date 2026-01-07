'use client';
import { useState, useEffect, useRef } from 'react';

type Message = {
  type: 'bot' | 'user';
  text: string;
  hasLink?: boolean;
  linkText?: string;
  linkHref?: string;
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: "Hey 👋 I'm Sophia. I can answer questions about what Seth builds, pricing, timeline... or help you figure out if this even makes sense for your situation." }
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
      q: "What does Seth build?",
      a: "Automation, CRM integrations, custom software, dashboards... basically the technical systems that let businesses scale without adding headcount. Most projects are about eliminating repetitive work or connecting tools that don't talk to each other."
    },
    {
      q: "How much does it cost?",
      a: "Depends on scope. Starter projects run $1,500-3,500. Most automation work is $3,500-7,500. Full systems are $7,500-15,000+. You'll know the exact number before anything starts."
    },
    {
      q: "How long do projects take?",
      a: "Most automation: 2-4 weeks. Custom software: 4-8 weeks. Full systems: 6-12 weeks. Seth will give you a specific timeline in the proposal."
    },
    {
      q: "Show me results",
      a: "Here are a few: CR Deals saves $52K/year on product listings. Modern Bungalow got 15+ hours/month back on customer emails. Revolut found a $4M opportunity.",
      hasLink: true,
      linkText: "See all case studies →",
      linkHref: "/case-studies"
    },
    {
      q: "I'm not sure what I need",
      a: "That's normal. Book a discovery call and Seth will look at your situation, figure out what's actually costing you time/money, and tell you honestly whether he can help. No pressure.",
      hasLink: true,
      linkText: "Book a call →",
      linkHref: "/contact"
    }
  ];

  const handleQuestionClick = (item: typeof quickQuestions[0]) => {
    const botMessage: Message = {
      type: 'bot',
      text: item.a,
      hasLink: item.hasLink,
      linkText: item.linkText,
      linkHref: item.linkHref
    };

    setMessages([
      ...messages,
      { type: 'user', text: item.q },
      botMessage
    ]);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 md:right-20 z-50 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700" style={{maxWidth:'calc(100vw - 3rem)'}}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex justify-between items-center rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">S</div>
              <div className="text-white font-semibold text-sm">Sophia</div>
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
                  {msg.hasLink && msg.linkHref && (
                    <a
                      href={msg.linkHref}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium mt-2 inline-block"
                    >
                      {msg.linkText}
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div className="space-y-2 mt-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">
                {messages.length === 1 ? "What's on your mind?" : 'Ask another question:'}
              </p>
              {quickQuestions.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestionClick(item)}
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
              <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Book a call with Seth →</a>
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
