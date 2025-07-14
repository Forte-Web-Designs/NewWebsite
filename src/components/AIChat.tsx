"use client";

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '', email: '', phone: '', company: '', message: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen, isMinimized]);

  // Initialize chat with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: '1',
        type: 'bot',
        content: "👋 Hi! I'm here to help with questions about Forte Web Designs. What would you like to know?",
        timestamp: new Date()
      }]);
    }
  }, [messages.length]);

  // Improved response system with better fallbacks
  const getSmartResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // Pricing questions
    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much') || msg.includes('pricing') || msg.includes('expensive') || msg.includes('cheap')) {
      return "💰 Our websites start at $200/month with $0 down. This includes:\n\n• Custom 5-page website\n• Hosting & security\n• Unlimited edits\n• Mobile optimization\n• SEO setup\n\nSEO services start at $300/month. Want a custom quote?";
    }

    // Timeline/process questions
    if (msg.includes('how long') || msg.includes('timeline') || msg.includes('process') || msg.includes('method') || msg.includes('time') || msg.includes('quick') || msg.includes('fast')) {
      return "⏱️ Our typical timeline is 2-4 weeks:\n\n• Week 1: Design & content\n• Week 2-3: Development\n• Week 4: Testing & launch\n\nWe keep you involved every step with unlimited revisions!";
    }

    // Services questions
    if (msg.includes('service') || msg.includes('what do you do') || msg.includes('help') || msg.includes('offer')) {
      return "🚀 We help businesses grow online with:\n\n• Custom website design\n• SEO (get found on Google)\n• Google Ads management\n• Social media marketing\n• Website maintenance\n\nWhich service interests you most?";
    }

    // SEO questions
    if (msg.includes('seo') || msg.includes('google') || msg.includes('ranking') || msg.includes('search') || msg.includes('found online')) {
      return "📈 Our SEO gets real results! We focus on:\n\n• Local search optimization\n• Google My Business\n• Keyword research\n• Content optimization\n• Monthly reporting\n\nMost clients see improvements in 2-3 months. Ready to get found?";
    }

    // Contact/meeting questions
    if (msg.includes('talk') || msg.includes('call') || msg.includes('meet') || msg.includes('consultation') || msg.includes('discuss')) {
      return "📞 I'd love to connect you with Seth! He offers free 15-minute strategy calls to discuss your needs. No pressure, just possibilities. Would you like me to help you schedule a call?";
    }

    // General business questions
    if (msg.includes('business') || msg.includes('grow') || msg.includes('more customers') || msg.includes('sales')) {
      return "🌟 We help businesses like yours get more customers online! Whether you need a new website, better Google rankings, or more leads, we have solutions that work. What's your biggest challenge right now?";
    }

    // Website questions
    if (msg.includes('website') || msg.includes('site') || msg.includes('web') || msg.includes('design') || msg.includes('redesign')) {
      return "🎨 Every website we build is custom-coded (no templates!) for:\n\n• Lightning-fast loading\n• Mobile-first design\n• SEO optimization\n• Security & reliability\n• Easy updates\n\nWant to see examples of our work?";
    }

    // Location questions
    if (msg.includes('location') || msg.includes('where') || msg.includes('local') || msg.includes('area')) {
      return "🏠 We're based in Texas but work with businesses nationwide! All communication is remote-friendly through calls, emails, and screen shares. Distance is no problem!";
    }

    // Simple greetings
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg === 'good morning' || msg === 'good afternoon') {
      return "👋 Hello! Great to meet you! I'm here to answer questions about Forte Web Designs. Are you looking for a new website, SEO help, or something else?";
    }

    // Thank you responses
    if (msg.includes('thank') || msg.includes('thanks')) {
      return "😊 You're very welcome! Is there anything else I can help you with today?";
    }

    // Default helpful response
    return "🤔 I'd love to help! I can answer questions about:\n\n• Website design & pricing\n• SEO services\n• Our process & timeline\n• Scheduling a call with Seth\n\nWhat would you like to know more about?";
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getSmartResponse(userMessage.content),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/chat-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...contactForm,
          chatHistory: messages,
          timestamp: new Date().toISOString(),
          source: 'AI Chat Widget'
        }),
      });

      if (response.ok) {
        const successMessage: Message = {
          id: Date.now().toString(),
          type: 'bot',
          content: "✅ Perfect! I've sent your information to Seth. He'll get back to you within 24 hours. Thanks for your interest!",
          timestamp: new Date()
        };

        setMessages(prev => [...prev, successMessage]);
        setShowContactForm(false);
        setContactForm({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: "❌ Sorry, there was an issue. Please call (817) 873-6655 or email seth@fortewebdesigns.com",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const openContactForm = () => {
    setShowContactForm(true);
    const contactMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: "Great! Please fill out this quick form and Seth will get back to you soon:",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, contactMessage]);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && !isMinimized && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeChat}
        />
      )}

      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-20 right-6 z-50">
          <button
            onClick={toggleChat}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
            aria-label="Open chat"
          >
            <div className="relative">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </button>
        </div>
      )}

      {/* Minimized Chat */}
      {isOpen && isMinimized && (
        <div className="fixed bottom-20 right-6 z-50">
          <button
            onClick={() => setIsMinimized(false)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg px-4 py-3 shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            aria-label="Restore chat"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm font-medium">Chat</span>
            {messages.length > 1 && (
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            )}
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <div className="fixed bottom-32 right-6 z-50 w-96 h-[500px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] lg:w-96 lg:h-[500px] 
                        sm:fixed sm:inset-4 sm:w-auto sm:h-auto sm:max-w-none sm:max-h-[calc(100vh-2rem)] sm:bottom-4
                        bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-xl flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Forte Assistant</h3>
                <p className="text-xs text-blue-100">Here to help!</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={minimizeChat}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                aria-label="Minimize chat"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <button
                onClick={closeChat}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                aria-label="Close chat"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Form */}
            {showContactForm && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address*"
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                  <textarea
                    placeholder="Tell us about your project..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-20 resize-none"
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-semibold transition-colors"
                    >
                      Send Message
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0 bg-white dark:bg-gray-900">
            <div className="flex gap-2 mb-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isTyping}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-3 rounded-lg transition-colors flex-shrink-0"
                aria-label="Send message"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setInputValue("What's your pricing?")}
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                💰 Pricing
              </button>
              <button
                onClick={() => setInputValue("How long does it take?")}
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                ⏱️ Timeline
              </button>
              <button
                onClick={openContactForm}
                className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                📞 Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;