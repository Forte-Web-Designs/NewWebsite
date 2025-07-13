"use client";

import { useState } from "react";
import DarkButton from "./DarkButton";
import SimpleScrollReveal from "./animations/SimpleScrollReveal";
import SimpleAnimatedInput from "./animations/SimpleAnimatedInput";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Get form data directly from the form element
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Add form name for Netlify
      formData.append('form-name', 'contact');
      
      const response = await fetch("/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
          // Add mobile-specific headers
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        // Success - show success message and reset form
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          company: "",
          message: "",
        });
        
        // On mobile, scroll to bottom so user can see success message
        if (window.innerWidth < 640) {
          setTimeout(() => {
            const successElement = document.querySelector('[data-success-message]');
            if (successElement) {
              successElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
              });
            } else {
              // Fallback: scroll to bottom
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
              });
            }
          }, 100);
        }
        
        // Success message will stay visible until user interacts again
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("Sorry, there was an error sending your message. Please try again or contact us directly at seth@fortewebdesigns.com");
    } finally {
      setIsSubmitting(false);
    }
  };
  // useEffect(() => {
  //   const darkModeEnabled = document.documentElement.classList.contains("dark");
  //   setIsDark(darkModeEnabled);

  //   const observer = new MutationObserver(() => {
  //     const updatedDarkMode =
  //       document.documentElement.classList.contains("dark");
  //     setIsDark(updatedDarkMode);
  //   });

  //   observer.observe(document.documentElement, {
  //     attributes: true,
  //     attributeFilter: ["class"],
  //   });

  //   return () => observer.disconnect();
  // }, []);
  //   const lightBackground = `
  //   radial-gradient(at left top, rgba(0, 26, 185, 0.04), transparent 50%),
  //   radial-gradient(at left bottom, rgba(0, 26, 185, 0.56), transparent 50%),
  //   radial-gradient(at left, rgba(0, 26, 185, 0.03), transparent 29%),
  //   radial-gradient(at right, rgba(0, 26, 185, 0.16), transparent 46%),
  //   radial-gradient(at right bottom, rgba(0, 26, 185, 0.22), transparent 46%),
  //   linear-gradient(rgb(255, 255, 255) 103%, rgb(224, 228, 255) 78%, rgb(0, 26, 185) 35%)
  // `;
  //   const darkBackground = `
  //   radial-gradient(at left top, rgba(0, 26, 185, 0.04), transparent 50%),
  //   radial-gradient(at left bottom, rgba(0, 26, 185, 0.56), transparent 50%),
  //   radial-gradient(at left, rgba(0, 26, 185, 0.03), transparent 29%),
  //   radial-gradient(at right, rgba(0, 26, 185, 0.16), transparent 46%),
  //   radial-gradient(at right bottom, rgba(0, 26, 185, 0.22), transparent 46%),
  //   linear-gradient(rgb(10, 10, 10) 103%, rgb(26, 26, 26) 78%, rgb(0, 26, 185) 35%)
  // `;

  return (
    <section
      className={`${className}`}
    // style={{
    //   background: isDark ? darkBackground : lightBackground,
    // }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] overflow-hidden">
          {/* Background Image - now properly contained */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-left z-0"
            style={{
              backgroundImage: "url('/images/contactForm/contact-form-bg.png')",
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-0" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              {/* Header */}
              <SimpleScrollReveal direction="up" delay={200}>
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                    Let&apos;s Build You a Stronger Website
                  </h2>
                  <p className="text-gray-200 text-lg drop-shadow">
                    We&apos;ll show you how your current site stacks up and how we
                    can make it way better
                  </p>
                </div>
              </SimpleScrollReveal>

              {/* Form */}
              <SimpleScrollReveal direction="up" delay={400}>
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                  
                  {/* Success Message - Positioned at bottom on mobile */}
                  {showSuccess && (
                    <div 
                      data-success-message
                      className="fixed sm:relative bottom-4 sm:bottom-auto left-4 right-4 sm:left-auto sm:right-auto sm:mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg backdrop-blur-sm z-50 shadow-xl sm:shadow-none">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-green-400 font-semibold">Message Sent Successfully!</h3>
                          <p className="text-green-300 text-sm">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                        </div>
                        <button
                          onClick={() => setShowSuccess(false)}
                          className="text-green-300 hover:text-white transition-colors ml-2"
                          aria-label="Dismiss success message"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-red-400 font-semibold">Submission Failed</h3>
                          <p className="text-red-300 text-sm">{submitError}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    {/* Hidden fields for Netlify */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div style={{ display: 'none' }}>
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Your Name */}
                    <SimpleAnimatedInput
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      delay={600}
                    />

                    {/* Your Email */}
                    <SimpleAnimatedInput
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      delay={700}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Your Phone */}
                    <SimpleAnimatedInput
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      delay={800}
                    />

                    {/* Company Name */}
                    <SimpleAnimatedInput
                      type="text"
                      name="company"
                      placeholder="Company Name (Optional)"
                      value={formData.company}
                      onChange={handleInputChange}
                      delay={850}
                    />
                  </div>

                  {/* Select a Service - Dropdown - Full Width */}
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/25 backdrop-blur-md border-2 border-white/50 hover:border-white/70 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 focus:bg-white/30 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300 shadow-md appearance-none"
                      required
                    >
                      <option value="" disabled className="text-gray-900">Select a Service</option>
                      <option value="Custom Website Design" className="text-gray-900">Custom Website Design</option>
                      <option value="SEO Services" className="text-gray-900">SEO Services</option>
                      <option value="Social Media Management" className="text-gray-900">Social Media Management</option>
                      <option value="Google PPC Ads" className="text-gray-900">Google PPC Ads</option>
                      <option value="Website Maintenance" className="text-gray-900">Website Maintenance</option>
                      <option value="Forte Care™" className="text-gray-900">Forte Care™</option>
                      <option value="Other" className="text-gray-900">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Message */}
                  <SimpleAnimatedInput
                    name="message"
                    placeholder="Tell us a bit about your business and what you want to change"
                    value={formData.message}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    delay={1000}
                  />

                  {/* Submit Button */}
                  <SimpleScrollReveal direction="up" delay={1100}>
                    <div className="text-center">
                      <DarkButton 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`relative overflow-hidden ${isSubmitting ? 'opacity-80' : ''}`}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </div>
                        ) : (
                          "Schedule Consultation"
                        )}
                      </DarkButton>
                    </div>
                  </SimpleScrollReveal>
                </form>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
