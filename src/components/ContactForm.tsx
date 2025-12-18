"use client";

import { useState, useEffect } from "react";
import DarkButton from "./DarkButton";
import SimpleScrollReveal from "./animations/SimpleScrollReveal";
import SimpleAnimatedInput from "./animations/SimpleAnimatedInput";
import { CONTACT_INFO } from "../constants/contact";

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
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isDirty, setIsDirty] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Auto-save form data to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(parsed);
        setIsDirty(true);
      } catch (error) {
        console.error('Error parsing saved form data:', error);
      }
    }
  }, []);

  // Save form data to localStorage when it changes
  useEffect(() => {
    if (isDirty) {
      localStorage.setItem('contactFormData', JSON.stringify(formData));
    }
  }, [formData, isDirty]);

  // Clear saved data when form is successfully submitted
  const clearSavedData = () => {
    localStorage.removeItem('contactFormData');
    setIsDirty(false);
  };

  // Real-time validation
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required for faster response';
        const cleanPhone = value.replace(/\D/g, '');
        if (cleanPhone.length < 10) return 'Please enter a valid phone number';
        return '';
      case 'service':
        if (!value) return 'Please select a service';
        return '';
      case 'message':
        if (!value.trim()) return 'Please tell us about your project';
        if (value.trim().length < 10) return 'Please provide more details (at least 10 characters)';
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setIsDirty(true);
    
    // Format phone number as user types
    let formattedValue = value;
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length <= 10) {
        if (cleaned.length >= 6) {
          formattedValue = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
        } else if (cleaned.length >= 3) {
          formattedValue = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        } else {
          formattedValue = cleaned;
        }
      } else {
        formattedValue = value; // Keep original if too long
      }
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Real-time validation for better UX
    const error = validateField(name, formattedValue);
    if (error && value.trim()) { // Only show error if field has content
      setFieldErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Validate all fields before submission
    const errors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'company') { // company is optional
        const error = validateField(key, formData[key as keyof typeof formData]);
        if (error) errors[key] = error;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsSubmitting(false);
      // Scroll to first error
      const firstErrorField = document.querySelector(`[name="${Object.keys(errors)[0]}"]`);
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        (firstErrorField as HTMLElement).focus();
      }
      return;
    }
    
    try {
      // Get form data directly from the form element
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);
      
      // Add form name for Netlify
      formDataToSend.append('form-name', 'contact');
      
      const response = await fetch("/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
          // Add mobile-specific headers
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
        },
        body: new URLSearchParams(formDataToSend as unknown as Record<string, string>).toString(),
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
        setFieldErrors({});
        clearSavedData(); // Clear localStorage
        
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
      setSubmitError(`Sorry, there was an error sending your message. Please try again or contact us directly at ${CONTACT_INFO.email}`);
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
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden ${
          isDarkMode 
            ? 'rounded-[32px] bg-gray-800 border border-gray-600 shadow-2xl' 
            : 'rounded-xl bg-white border border-gray-200 shadow-lg'
        }`}>
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 pb-16 md:pb-20">
            <div className="max-w-2xl mx-auto">
              {/* Header */}
              <SimpleScrollReveal direction="up" delay={200}>
                <div className="text-center mb-8">
                  <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    Let&apos;s Discuss Your Project
                  </h2>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Tell me about your business challenges and goals. I&apos;ll show you what&apos;s possible.
                  </p>
                </div>
              </SimpleScrollReveal>

              {/* Form */}
              <SimpleScrollReveal direction="up" delay={400}>
                <div className={`rounded-2xl p-8 mb-8 shadow-2xl ${isDarkMode ? 'contact-form-card-dark' : 'contact-form-card-light'}`}>
                  
                  {/* Success Message - Better positioning for contact page */}
                  {showSuccess && (
                    <div 
                      data-success-message
                      className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg backdrop-blur-sm">
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
                      error={fieldErrors.name}
                      autoComplete="name"
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
                      error={fieldErrors.email}
                      autoComplete="email"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Your Phone */}
                    <SimpleAnimatedInput
                      type="tel"
                      name="phone"
                      placeholder="Your Phone (Required for faster response)"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      delay={800}
                      error={fieldErrors.phone}
                      autoComplete="tel"
                    />

                    {/* Company Name */}
                    <SimpleAnimatedInput
                      type="text"
                      name="company"
                      placeholder="Company Name (Optional)"
                      value={formData.company}
                      onChange={handleInputChange}
                      delay={850}
                      error={fieldErrors.company}
                      autoComplete="organization"
                    />
                  </div>

                  {/* Select a Service - Dropdown - Full Width */}
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 transition-all duration-300 shadow-md appearance-none ${
                        fieldErrors.service 
                          ? 'bg-red-50/10 border-red-400/70 focus:border-red-400 focus:ring-red-400/50 focus:shadow-red-500/20' 
                          : isDarkMode 
                            ? 'contact-form-input-dark' 
                            : 'contact-form-input-light'
                      }`}
                      required
                    >
                      <option value="" disabled className="text-gray-900">Select a Service</option>
                      <option value="Custom Web Design" className="text-gray-900">Custom Web Design</option>
                      <option value="AI Automation" className="text-gray-900">AI Automation</option>
                      <option value="Complete Business System" className="text-gray-900">Complete Business System</option>
                      <option value="Forte Care™ (Maintenance & Support)" className="text-gray-900">Forte Care™ (Maintenance & Support)</option>
                      <option value="Free Growth Snapshot" className="text-gray-900">Free Growth Snapshot</option>
                      <option value="Not Sure / Need Consultation" className="text-gray-900">Not Sure / Need Consultation</option>
                    </select>
                    <div className={`absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {fieldErrors.service && (
                      <div className={`mt-2 text-sm flex items-center gap-2 ${isDarkMode ? 'text-red-300' : 'text-red-600'}`}>
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {fieldErrors.service}
                      </div>
                    )}
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
                    error={fieldErrors.message}
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
