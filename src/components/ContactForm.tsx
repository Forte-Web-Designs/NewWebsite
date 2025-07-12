"use client";

import { useState } from "react";
import DarkButton from "./DarkButton";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-0" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let&apos;s Build You a Stronger Website
                </h2>
                <p className="text-gray-200 text-lg">
                  We&apos;s show you how your current site stacks up and how we
                  can make it way better
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Your Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-[#FFFFFF14] rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-white/15 hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-pointer"
                    />
                  </div>

                  {/* Your Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-[#FFFFFF14] rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-white/15 hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Your Phone */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-[#FFFFFF14]  rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                    />
                  </div>

                  {/* Select a Service */}
                  <div>
                    <input
                      type="service"
                      name="service"
                      placeholder="Select a Service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-[#FFFFFF14]  rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                    />
                  </div>
                  {/* <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                >
                  <option value="" disabled className="text-gray-800">Select a Service</option>
                  <option value="custom-website" className="text-gray-800">Custom Website</option>
                  <option value="wordpress-website" className="text-gray-800">WordPress Website</option>
                  <option value="seo-services" className="text-gray-800">SEO Services</option>
                  <option value="social-media" className="text-gray-800">Social Media Management</option>
                  <option value="google-ppc" className="text-gray-800">Google PPC Ads</option>
                  <option value="forte-care" className="text-gray-800">Forte Care™ Plan</option>
                </select>
              </div> */}
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us a bit about your business and what you want to change"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-[#FFFFFF14]  rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <DarkButton type="submit">
                    Schedule Consultation
                  </DarkButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
