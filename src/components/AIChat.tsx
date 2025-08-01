"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CONTACT_INFO } from '../constants/contact';

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
  service: string;
  message: string;
}

interface NetlifyFormSubmission {
  isSubmitting: boolean;
  showSuccess: boolean;
  submitError: string | null;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '', email: '', phone: '', company: '', service: '', message: ''
  });
  const [netlifyForm, setNetlifyForm] = useState<NetlifyFormSubmission>({
    isSubmitting: false,
    showSuccess: false,
    submitError: null
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const latestMessageRef = useRef<HTMLDivElement>(null);
  
  // Form field refs for auto-advancement
  const nameFieldRef = useRef<HTMLInputElement>(null);
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const phoneFieldRef = useRef<HTMLInputElement>(null);
  const companyFieldRef = useRef<HTMLInputElement>(null);
  const serviceFieldRef = useRef<HTMLSelectElement>(null);
  const messageFieldRef = useRef<HTMLTextAreaElement>(null);

  // Function to parse markdown-style links in messages
  const parseMessageWithLinks = (content: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }
      
      // Add the link
      const linkText = match[1];
      const linkUrl = match[2];
      const isExternal = linkUrl.startsWith('http');
      
      if (isExternal) {
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline font-semibold transition-colors duration-200"
          >
            {linkText}
          </a>
        );
      } else {
        parts.push(
          <Link
            key={match.index}
            href={linkUrl}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline font-semibold transition-colors duration-200"
            onClick={() => setIsOpen(false)} // Close chat when clicking internal links
          >
            {linkText}
          </Link>
        );
      }
      
      lastIndex = linkRegex.lastIndex;
    }
    
    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : content;
  };

  const scrollToLatestMessage = () => {
    // Scroll to the top of the latest message so users can read from the beginning
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "start", // Scroll to the start (top) of the element
        inline: "nearest"
      });
    } else {
      // Fallback to bottom if no latest message ref
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Improved auto-advance with Enter key - less aggressive
  const handleFormFieldKeyPress = (e: React.KeyboardEvent, nextFieldRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null>) => {
    if (e.key === 'Enter' && nextFieldRef?.current && e.currentTarget.tagName !== 'TEXTAREA') {
      e.preventDefault();
      
      // Only advance if the current field has some reasonable content
      const currentValue = (e.target as HTMLInputElement).value;
      let shouldAdvance = false;
      
      const fieldName = (e.target as HTMLInputElement).name;
      switch (fieldName) {
        case 'name':
          shouldAdvance = currentValue.length >= 2;
          break;
        case 'email':
          // Only advance on Enter if email looks reasonably complete
          shouldAdvance = currentValue.includes('@') && currentValue.includes('.');
          break;
        case 'phone':
          shouldAdvance = currentValue.length >= 3;
          break;
        case 'company':
          shouldAdvance = currentValue.length >= 1;
          break;
        default:
          shouldAdvance = true;
      }
      
      if (shouldAdvance) {
        nextFieldRef.current.focus();
        // Smooth scroll to field with better positioning
        setTimeout(() => {
          nextFieldRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          });
        }, 100);
      }
    }
  };

  // Enhanced form field change handler with improved auto-advancement
  const handleContactFormChange = (field: keyof ContactForm, value: string, nextFieldRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null>) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
    
    // Auto-advance when field reaches completion - more conservative approach
    if (nextFieldRef?.current) {
      let shouldAdvance = false;
      
      switch (field) {
        case 'name':
          // Only advance if we have a first and last name with reasonable length
          shouldAdvance = value.length >= 5 && value.includes(' ') && value.trim().split(' ').length >= 2;
          break;
        case 'email':
          // Only advance on complete, valid email with common TLD
          shouldAdvance = /^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|co|io|app)$/i.test(value);
          break;
        case 'phone':
          // Only advance when we have a complete phone number (10-11 digits)
          const digits = value.replace(/\D/g, '');
          shouldAdvance = digits.length >= 10 && digits.length <= 11;
          break;
        case 'company':
          // More conservative - only advance if company name looks complete
          shouldAdvance = value.length >= 3 && !value.endsWith(' ');
          break;
      }
      
      if (shouldAdvance) {
        // Slight delay to ensure user finished typing
        setTimeout(() => {
          nextFieldRef.current?.focus();
          nextFieldRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          });
        }, 300);
      }
    }
  };

  useEffect(() => {
    scrollToLatestMessage();
  }, [messages]);

  // Initialize chat with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: '1',
        type: 'bot',
        content: "👋 Hey there! I'm Sophia - Seth's digital assistant.\n\nI'm here to make sure you have a smooth experience. At Forte Web Designs, we help small businesses grow with custom websites tailored to their specific industry that actually bring in customers - not just sit there looking pretty.\n\nWhat brings you here today? Looking to grow your business online?\n\nTip: If you want to get in touch, just click 'Get in contact with us' and I'll walk you through sharing your details right here in the chat!",
        timestamp: new Date()
      }]);
    }
  }, [messages.length]);

  // Sales-focused response system
  const getSmartResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // Contact information detection - look for patterns like name + email + message
    if ((msg.includes('@') && msg.includes('.')) || 
        (msg.includes('name') && msg.includes('email')) ||
        (msg.includes('my name is') || msg.includes("i'm ") || msg.includes('email:') || msg.includes('contact:')) ||
        (msg.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/))) {
      
      // If this looks like contact info, we should save it
      const contactMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: "Perfect! 🙌 I've got your information.\n\nSeth will personally review your message and get back to you within 24 hours (usually much sooner). \n\nIn the meantime, feel free to ask me any questions about our services, pricing, or how we can help grow your business!\n\nThanks for reaching out to Forte Web Designs! 🚀",
        timestamp: new Date()
      };

      // Automatically submit this as a contact form in the background
      setTimeout(() => {
        // Create a mock form submission with the user's message
        const formData = new FormData();
        formData.append('form-name', 'ai-chat-contact');
        formData.append('source', 'AI Chat Conversation');
        formData.append('message', userMessage);
        formData.append('chat-history', JSON.stringify([]));
        formData.append('timestamp', new Date().toISOString());
        
        fetch("/", {
          method: "POST",
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
          },
          body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
        }).catch(console.error);
      }, 1000);

      return contactMessage.content;
    }

    // Pricing questions
    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much') || msg.includes('pricing') || msg.includes('expensive') || msg.includes('cheap') || msg.includes('affordable')) {
      return "Great question! 💰 Here's the thing - most clients actually SAVE money working with us.\n\nWebsites start at just $200/month (no upfront costs) and include everything:\n• Custom website that loads lightning fast\n• Hosting, security, and maintenance\n• Unlimited changes whenever you need them\n• Mobile optimization\n• SEO setup to get found on Google\n\nMost other agencies charge $5k+ upfront. We keep it simple and affordable.\n\n[💬 Want to discuss pricing for your specific needs? Contact us here](/contact)";
    }

    // Timeline/process questions  
    if (msg.includes('how long') || msg.includes('timeline') || msg.includes('process') || msg.includes('method') || msg.includes('time') || msg.includes('quick') || msg.includes('fast') || msg.includes('when')) {
      return "I know you're probably eager to get started! ⚡\n\nHere's our typical timeline:\n• Week 1: We chat about your vision and create mockups\n• Week 2-3: We build your custom website\n• Week 4: You test everything and we launch together\n\nThe best part? You're involved every step of the way with unlimited revisions until it's perfect.\n\nMost clients are amazed how smooth the process is.\n\n[🚀 Ready to get the ball rolling? Contact us here](/contact)";
    }

    // Services questions
    if (msg.includes('service') || msg.includes('what do you do') || msg.includes('help') || msg.includes('offer') || msg.includes('seo') || msg.includes('google') || msg.includes('ranking')) {
      return "We're basically your one-stop shop for getting more customers online! 🎯\n\nHere's how we help businesses like yours:\n• Custom websites that convert visitors into customers\n• SEO to get you found on Google (our specialty!)\n• Google Ads to bring in leads fast\n• Social media management\n• Ongoing support so you never feel stuck\n\nMost clients see more leads within the first month.\n\n[📋 See all our services here](/services)\n[💬 Let's discuss your biggest challenge - contact us here](/contact)";
    }

    // ROI/Results questions
    if (msg.includes('results') || msg.includes('roi') || msg.includes('return') || msg.includes('worth it') || msg.includes('effective')) {
      return "Love that you're asking about results! 📈 That's exactly how we think too.\n\nHere's what our clients typically see:\n• 30-50% more website traffic in 3 months\n• 2x more leads from their website\n• Better Google rankings\n• Faster loading sites that keep visitors around\n\nOne client went from 5 leads/month to 18+ leads/month in just 4 months. Another increased their revenue by 85% in 6 months.\n\nThe key? Websites that actually work for your business goals, not just look pretty.\n\n[📞 Ready to discuss your goals? Contact us here](/contact)";
    }

    // Contact/meeting questions
    if (msg.includes('contact') || msg.includes('get in touch') || msg.includes('talk') || msg.includes('call') || msg.includes('meet') || msg.includes('consultation') || msg.includes('discuss') || msg.includes('schedule')) {
      return "I'd love to connect you with our team! 🤝\n\nLet me get your contact information and we'll get back to you within 24 hours (usually much sooner).\n\nPlease fill out the form below:|SHOW_FORM";
    }

    // Business growth questions
    if (msg.includes('business') || msg.includes('grow') || msg.includes('more customers') || msg.includes('sales') || msg.includes('leads') || msg.includes('traffic') || msg.includes('forte web designs')) {
      return "Now we're talking! 🚀 Growing businesses online is exactly what we do.\n\nMost small businesses struggle because:\n• Their website doesn't show up on Google\n• Visitors leave without calling or buying\n• They're not sure what's working and what isn't\n\nWe fix all of that. Our websites are built to:\n• Get found on Google (SEO built-in)\n• Convert visitors into customers\n• Give you clear data on what's working\n\n[📞 Let's talk about your growth goals - contact us here](/contact)";
    }

    // Website questions
    if (msg.includes('website') || msg.includes('site') || msg.includes('web') || msg.includes('design') || msg.includes('redesign') || msg.includes('new site') || msg.includes('forte web designs')) {
      return "Perfect! 🎨 Here's why our websites are different:\n\n• 100% custom-coded (no cheap templates)\n• Lightning fast (Google loves this)\n• Mobile-first design\n• Built-in SEO optimization\n• Easy for you to update\n\nBut here's the real difference - we don't just build pretty websites. We build websites that get you customers.\n\nEvery element is designed to guide visitors toward calling you, buying from you, or filling out your contact form.\n\n[🎯 See examples of our work here](/about/work)\n[📞 Ready to get started? Contact us here](/contact)";
    }

    // Examples/work questions
    if (msg.includes('example') || msg.includes('work') || msg.includes('portfolio') || msg.includes('case stud') || msg.includes('see your') || msg.includes('show me')) {
      return "I'd love to show you! 🎨 Here are some real websites we've built that are driving results:\n\n• The Southern Landscape Firm - Custom landscaping site with lead generation\n• Local HVAC company - Went from 3 to 30+ leads per month\n• Law firm - Doubled their client inquiries in 4 months\n• Landscaping business - Increased revenue 150% in 6 months\n• Accounting firm - Got to page 1 of Google for main keywords\n\n[🎯 See our complete portfolio here](/about/work)\n\nEach website is completely custom-built for the specific business and their goals. No templates, no shortcuts.\n\n[📞 Want to discuss your project? Contact us here](/contact)";
    }

    // Location/local questions
    if (msg.includes('location') || msg.includes('where') || msg.includes('local') || msg.includes('area') || msg.includes('texas')) {
      return "We're based in Texas but work with businesses nationwide! 🏠\n\nHonestly, some of our best clients are hundreds of miles away. Everything happens through video calls, screen shares, and email.\n\nThe beauty of web design? Distance doesn't matter. Results do.\n\nPlus, we specialize in local SEO, so whether you're in Texas, New York, or anywhere in between, we can help you dominate your local market.\n\n[📞 Let's discuss your local market - contact us here](/contact)";
    }

    // Industry-specific questions
    if (msg.includes('industry') || msg.includes('type of business') || msg.includes('niche') || msg.includes('sector') || msg.includes('hvac') || msg.includes('restaurant') || msg.includes('law') || msg.includes('medical') || msg.includes('contractor') || msg.includes('retail')) {
      return "Great question! 🏢 We work with all kinds of businesses, and honestly, that's our strength.\n\nSome recent successes:\n• HVAC contractors getting 20+ leads/month\n• Restaurants increasing online orders 3x\n• Law firms dominating local search\n• Medical practices filling schedules\n• Retail stores boosting online sales\n\nEvery industry has different needs, but the fundamentals are the same: get found on Google, look professional, convert visitors into customers.\n\n[💼 Let's discuss strategies for your specific industry - contact us here](/contact)";
    }

    // Competitor/comparison questions
    if (msg.includes('different') || msg.includes('better') || msg.includes('why you') || msg.includes('why us') || msg.includes('why forte') || msg.includes('competitors') || msg.includes('other') || msg.includes('comparison') || msg.includes('choose forte')) {
      return "Great question! 🤔 Here's what makes us different:\n\nMost web designers:\n• Charge $5k+ upfront\n• Use templates\n• Disappear after launch\n• Don't understand marketing\n\nUs?\n• $0 down, affordable monthly payments\n• 100% custom-coded websites\n• Ongoing support and unlimited changes\n• 10+ years of marketing experience\n\nWe're not just designers - we're business owners who understand what it takes to get customers online.\n\n[🏆 Ready to see the difference? Contact us here](/contact)";
    }

    // Simple greetings
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg === 'good morning' || msg === 'good afternoon') {
      return "Hey! 👋 Great to meet you! \n\nI'm Sophia, your AI assistant for Forte Web Designs. Seth and the team help small businesses get more customers through websites that actually work.\n\nI can help you learn about our services, see examples of our work, or get you connected with Seth for a free consultation.\n\n[📞 Ready to chat with Seth? Contact us here](/contact)";
    }

    // Thank you responses
    if (msg.includes('thank') || msg.includes('thanks')) {
      return "You're so welcome! 😊 \n\nThat's what I'm here for - helping awesome business owners like you succeed online.\n\n[📞 Ready to take the next step? Contact us here](/contact)";
    }

    // Default helpful response
    return "I love chatting with business owners! 💬\n\nWe can help you with:\n• Getting more customers from your website\n• Ranking higher on Google\n• Building a website that actually converts\n• Growing your business online\n\n[🎯 See examples of our work](/about/work)\n[📋 Learn about all our services](/services)\n[📞 Ready to discuss your project? Contact us here](/contact)";
  };

  const sendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return;

    // Close contact form if it's open when sending a new message
    if (showContactForm) {
      setShowContactForm(false);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageContent.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const responseContent = getSmartResponse(userMessage.content);
      
      // Check if response includes special action flag
      const [content, action] = responseContent.split('|');
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // Handle special actions
      if (action === 'SHOW_FORM') {
        setTimeout(() => {
          setShowContactForm(true);
          // Auto-scroll to name field after form appears
          setTimeout(() => {
            nameFieldRef.current?.focus();
            nameFieldRef.current?.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center',
              inline: 'nearest'
            });
          }, 100);
        }, 1500);
      }
    }, 1500);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNetlifyForm({ ...netlifyForm, isSubmitting: true, submitError: null });
    
    try {
      // Get form data directly from the form element
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Add form name for Netlify and additional context
      formData.append('form-name', 'ai-chat-contact');
      formData.append('source', 'AI Chat Widget');
      formData.append('chat-history', JSON.stringify(messages));
      formData.append('timestamp', new Date().toISOString());
      
      const response = await fetch("/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
          // Add mobile-specific headers for better compatibility
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
        },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        const successMessage: Message = {
          id: Date.now().toString(),
          type: 'bot',
          content: "✅ Perfect! I've sent your information to Seth. He'll get back to you within 24 hours (usually much sooner). Thanks for your interest!",
          timestamp: new Date()
        };

        setMessages(prev => [...prev, successMessage]);
        setShowContactForm(false);
        setContactForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
        setNetlifyForm({ isSubmitting: false, showSuccess: true, submitError: null });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("AI Chat form submission error:", error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: `❌ Sorry, there was an issue sending your message. Please call ${CONTACT_INFO.phone} or email ${CONTACT_INFO.email} and I'll get back to you right away!`,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
      setNetlifyForm({ 
        isSubmitting: false, 
        showSuccess: false, 
        submitError: `Sorry, there was an error sending your message. Please try again or contact us directly at ${CONTACT_INFO.email}` 
      });
    }
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

      {/* Chat Button - Positioned above mobile sticky CTA */}
      {!isOpen && (
        <div className="fixed bottom-20 right-4 lg:bottom-4 lg:right-20 z-45">
          <button
            onClick={toggleChat}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-3 lg:p-4 shadow-2xl transition-all duration-300 hover:scale-105 group"
            aria-label="Open chat"
          >
            <div className="relative">
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div className="absolute -top-0.5 -right-0.5 lg:-top-1 lg:-right-1 w-2.5 h-2.5 lg:w-3 lg:h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </button>
        </div>
      )}

      {/* Minimized Chat - Positioned above mobile sticky CTA */}
      {isOpen && isMinimized && (
        <div className="fixed bottom-20 right-4 lg:bottom-4 lg:right-20 z-45">
          <button
            onClick={() => setIsMinimized(false)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg px-3 py-2 lg:px-4 lg:py-3 shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            aria-label="Restore chat"
          >
            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs lg:text-sm font-medium">Chat</span>
            {messages.length > 1 && (
              <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full"></div>
            )}
          </button>
        </div>
      )}

      {/* Chat Window - Enhanced sizing and readability */}
      {isOpen && !isMinimized && (
        <div className="fixed bottom-4 right-4 left-4 top-16 z-45 lg:bottom-20 lg:right-4 lg:left-auto lg:top-auto lg:w-[420px] lg:h-[580px] 
                        bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 lg:p-4 rounded-t-xl flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm lg:text-base">Sophia (Client Success)</h3>
                <p className="text-xs text-blue-100">Forte AI chatbot • Here to help! 🤖</p>
              </div>
            </div>
            <div className="flex items-center gap-1 lg:gap-2">
              <button
                onClick={minimizeChat}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                aria-label="Minimize chat"
              >
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <button
                onClick={closeChat}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                aria-label="Close chat"
              >
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages - Enhanced readability with maximum height for conversation */}
          <div className="flex-[5] overflow-y-auto p-4 lg:p-5 space-y-4 lg:space-y-5 min-h-0 scroll-smooth">
            {messages.map((message, index) => (
              <div
                key={message.id}
                ref={index === messages.length - 1 ? latestMessageRef : null}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] lg:max-w-[85%] rounded-lg p-3 lg:p-4 shadow-sm ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white ml-4'
                      : 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 mr-4 border border-gray-100 dark:border-gray-700'
                  }`}
                >
                  <p className="text-sm lg:text-base whitespace-pre-line leading-relaxed font-medium">
                    {message.type === 'bot' ? parseMessageWithLinks(message.content) : message.content}
                  </p>
                  <p className="text-xs opacity-70 mt-2 font-normal">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Enhanced Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700 mr-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Sophia is typing...</span>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Contact Form with Auto-Advancement */}
            {showContactForm && (
              <div data-contact-form className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 lg:p-5 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Let's Connect!</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Fill out your details and Seth will get back to you within 24 hours.</p>
                
                <form onSubmit={handleContactSubmit} className="space-y-4" name="ai-chat-contact" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="ai-chat-contact" />
                  <div style={{ display: 'none' }}>
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </div>
                  
                  <div className="space-y-3">
                    <input
                      ref={nameFieldRef}
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      value={contactForm.name}
                      onChange={(e) => handleContactFormChange('name', e.target.value)}
                      onKeyPress={(e) => handleFormFieldKeyPress(e, emailFieldRef)}
                      className="w-full p-3 lg:p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-sm lg:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                      autoComplete="name"
                      inputMode="text"
                      autoCapitalize="words"
                    />
                    
                    <input
                      ref={emailFieldRef}
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      value={contactForm.email}
                      onChange={(e) => handleContactFormChange('email', e.target.value)}
                      onKeyPress={(e) => handleFormFieldKeyPress(e, phoneFieldRef)}
                      className="w-full p-3 lg:p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-sm lg:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                      autoComplete="email"
                      inputMode="email"
                    />
                    
                    <input
                      ref={phoneFieldRef}
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={contactForm.phone}
                      onChange={(e) => handleContactFormChange('phone', e.target.value)}
                      onKeyPress={(e) => handleFormFieldKeyPress(e, companyFieldRef)}
                      className="w-full p-3 lg:p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-sm lg:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                    
                    <input
                      ref={companyFieldRef}
                      type="text"
                      name="company"
                      placeholder="Company (Optional)"
                      value={contactForm.company}
                      onChange={(e) => handleContactFormChange('company', e.target.value)}
                      onKeyPress={(e) => handleFormFieldKeyPress(e, serviceFieldRef)}
                      className="w-full p-3 lg:p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-sm lg:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      autoComplete="organization"
                      inputMode="text"
                      autoCapitalize="words"
                    />
                    
                    <select
                      ref={serviceFieldRef}
                      name="service"
                      value={contactForm.service}
                      onChange={(e) => {
                        setContactForm(prev => ({ ...prev, service: e.target.value }));
                        if (e.target.value) {
                          setTimeout(() => {
                            messageFieldRef.current?.focus();
                            messageFieldRef.current?.scrollIntoView({ 
                              behavior: 'smooth', 
                              block: 'center',
                              inline: 'nearest'
                            });
                          }, 150);
                        }
                      }}
                      className="w-full p-3 lg:p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-sm lg:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                      required
                    >
                      <option value="" disabled>Select a Service*</option>
                      <option value="Custom Website Design">Custom Website Design</option>
                      <option value="SEO Services">SEO Services</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Google PPC Ads">Google PPC Ads</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                      <option value="Forte Care™">Forte Care™</option>
                      <option value="Other">Other</option>
                    </select>
                    
                    <textarea
                      ref={messageFieldRef}
                      name="message"
                      placeholder="Tell us about your project..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full p-3 lg:p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-sm lg:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-24 lg:h-28 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      autoComplete="off"
                    />
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={netlifyForm.isSubmitting}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-400 disabled:to-blue-500 text-white py-3 lg:py-4 px-4 rounded-lg text-sm lg:text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                    >
                      {netlifyForm.isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
                            <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      className="px-4 lg:px-5 py-3 lg:py-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm lg:text-base transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                  
                  {/* Error Display */}
                  {netlifyForm.submitError && (
                    <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-sm text-red-700 dark:text-red-400">{netlifyForm.submitError}</p>
                    </div>
                  )}
                  
                  {/* Success Display */}
                  {netlifyForm.showSuccess && (
                    <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <p className="text-sm text-green-700 dark:text-green-400">✅ Message sent successfully! Seth will get back to you soon.</p>
                    </div>
                  )}
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Compact Quick Action Prompts - Minimal space */}
          <div className="p-1.5 lg:p-2 border-t border-gray-200 dark:border-gray-700 flex-shrink-0 bg-gradient-to-t from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            <p className="text-xs text-gray-700 dark:text-gray-300 mb-1 text-center font-medium">Quick Options</p>
            
            <div className="grid grid-cols-1 gap-1 lg:gap-1.5">
              {/* Primary prompts - Ultra compact */}
              <div className="grid grid-cols-2 gap-1">
                <button
                  onClick={() => sendMessage("What's your pricing?")}
                  className="text-xs bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-2 py-1.5 lg:px-2.5 lg:py-2 rounded-md transition-all duration-200 font-semibold shadow-md hover:shadow-lg hover:scale-105 transform"
                >
                  💰 Pricing
                </button>
                <button
                  onClick={() => sendMessage("How can you help grow my business?")}
                  className="text-xs bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-2 py-1.5 lg:px-2.5 lg:py-2 rounded-md transition-all duration-200 font-semibold shadow-md hover:shadow-lg hover:scale-105 transform"
                >
                  🚀 Grow
                </button>
              </div>
              
              <div className="grid grid-cols-4 gap-1">
                <button
                  onClick={() => sendMessage("What kind of results do clients get?")}
                  className="text-xs bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-1.5 py-1 lg:px-2 lg:py-1.5 rounded-md transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500 font-medium"
                >
                  📈 Results
                </button>
                <button
                  onClick={() => sendMessage("How long does the process take?")}
                  className="text-xs bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-1.5 py-1 lg:px-2 lg:py-1.5 rounded-md transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500 font-medium"
                >
                  ⏱️ Time
                </button>
                <button
                  onClick={() => sendMessage("What makes you different from other web designers?")}
                  className="text-xs bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-1.5 py-1 lg:px-2 lg:py-1.5 rounded-md transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 font-medium"
                >
                  🤔 Why Us?
                </button>
                <button
                  onClick={() => sendMessage("Can I see examples of your work?")}
                  className="text-xs bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-1.5 py-1 lg:px-2 lg:py-1.5 rounded-md transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-500 font-medium"
                >
                  🎨 Work
                </button>
              </div>
              
              {/* Contact prompt - Compact */}
              <div className="pt-0.5">
                <button
                  onClick={() => sendMessage("I'd like to get in contact with you")}
                  className="w-full text-xs bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-700 hover:from-indigo-700 hover:via-blue-700 hover:to-blue-800 text-white py-2 lg:py-2.5 rounded-md transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  📞 Get in contact with us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;