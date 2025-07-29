import React, { useState, useEffect } from 'react';
import SimpleAnimatedInput from '@/components/animations/SimpleAnimatedInput';
import DarkButton from '@/components/DarkButton';

interface PlumberLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: string;
}

interface FormData {
  firstName: string;
  businessName: string;
  email: string;
  phone: string;
  message: string;
}

export default function PlumberLeadModal({ isOpen, onClose, trigger = 'button' }: PlumberLeadModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    businessName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Close modal when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.classList?.contains('modal-overlay')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowSuccess(false);
      setSubmitError(null);
      setFieldErrors({});
    }
  }, [isOpen]);

  // Form validation
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.trim().length < 2) return 'First name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      case 'phone':
        if (value && value.trim()) {
          const cleanPhone = value.replace(/\D/g, '');
          if (cleanPhone.length < 10) return 'Please enter a valid phone number';
        }
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
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
    
    setFormData(prev => ({
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Validate required fields
    const errors: Record<string, string> = {};
    const requiredFields = ['firstName', 'email'];
    
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) errors[field] = error;
    });

    // Validate optional phone if provided
    if (formData.phone.trim()) {
      const phoneError = validateField('phone', formData.phone);
      if (phoneError) errors.phone = phoneError;
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Create form data for Netlify submission
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);
      
      // Add form name and trigger source for Netlify
      formDataToSend.append('form-name', 'Plumber Inquiry');
      formDataToSend.append('trigger', trigger);
      formDataToSend.append('industry', 'plumbers');
      
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          firstName: '',
          businessName: '',
          email: '',
          phone: '',
          message: ''
        });
        setFieldErrors({});
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

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-xs md:max-w-sm max-h-[85vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="relative p-2.5 md:p-3 pb-1.5 md:pb-2 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="absolute top-1.5 right-1.5 md:top-2 md:right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full p-1.5 z-10"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-center pr-5">
            <div className="text-lg md:text-xl mb-1">🛠️</div>
            <h2 className="text-sm md:text-base font-bold text-gray-900 dark:text-white">
              Let's Build Your Plumbing Website Right
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-xs leading-snug">
              Tell us what you need, and we'll get back to you within 1 business day. No pressure - just real help from a team that gets your industry.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-2.5 md:p-3">
          {showSuccess ? (
            <div className="text-center space-y-2.5 md:space-y-3">
              <div className="text-2xl md:text-3xl">✅</div>
              <h3 className="text-base font-semibold text-green-600 dark:text-green-400">
                Thanks, we got it!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed px-1">
                A member of the Forte team will follow up within 1 business day. We've helped plumbers like you bring in more emergency calls and local leads - now let's do the same for your business.
              </p>
              <button
                onClick={onClose}
                className="mt-2 md:mt-3 px-5 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              name="Plumber Inquiry"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-2.5 md:space-y-3"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="Plumber Inquiry" />
              <input type="hidden" name="trigger" value={trigger} />
              <input type="hidden" name="industry" value="plumbers" />
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="p-2.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-600 dark:text-red-400 text-xs">{submitError}</p>
                </div>
              )}

              {/* Name and Business Name - Single column on mobile */}
              <div className="grid grid-cols-1 gap-2.5">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 md:px-3 md:py-2.5 border-2 rounded-lg transition-colors focus:outline-none focus:ring-2 text-sm ${
                      fieldErrors.firstName 
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-400/50' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                  />
                  {fieldErrors.firstName && (
                    <p className="mt-1 text-xs text-red-500">{fieldErrors.firstName}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 md:px-3 md:py-2.5 border-2 border-gray-300 dark:border-gray-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:border-cyan-400 focus:ring-cyan-400/50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                  />
                </div>
              </div>

              {/* Email and Phone - Single column on mobile */}
              <div className="grid grid-cols-1 gap-2.5">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 md:px-3 md:py-2.5 border-2 rounded-lg transition-colors focus:outline-none focus:ring-2 text-sm ${
                      fieldErrors.email 
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-400/50' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 md:px-3 md:py-2.5 border-2 rounded-lg transition-colors focus:outline-none focus:ring-2 text-sm ${
                      fieldErrors.phone 
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-400/50' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                  />
                  {fieldErrors.phone && (
                    <p className="mt-1 text-xs text-red-500">{fieldErrors.phone}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-3 py-2 md:px-3 md:py-2.5 border-2 border-gray-300 dark:border-gray-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:border-cyan-400 focus:ring-cyan-400/50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2.5 px-6 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-sm ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  "→ Send My Info"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
