"use client";

import Link from 'next/link';
import { Icon } from '../images/Icon';
import { useTheme } from '../../app/providers/ThemeProvider';
import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../../constants/contact';

export default function Footer() {
  const { theme, mounted } = useTheme();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return (
      <footer className="text-white pt-12 pb-8 relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-[100px] h-[32px] bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  const data = [
    {
      heading: "What We Do",
      points: [
        { text: "Custom Website", href: "/services/webDesign" },
        { text: "SEO Services", href: "/services/seo" },
        { text: "Social Media Management", href: "/services/socialMedia" },
        { text: "Google PPC Ads", href: "/services/ads" },
        { text: "Forte Care™ Plan", href: "/solutions/care" },
      ]
    },
    {
      heading: "Company",
      points: [
        { text: "About Us", href: "/about" },
        { text: "Portfolio", href: "/about/work" },
        { text: "FAQ", href: "/about/faqs" },
        { text: "Contact", href: "/contact" }
      ]
    },
    {
      heading: "Connect",
      points: [
        { text: "Facebook", href: "https://www.facebook.com/people/Forte-Web-Designs/61576746767359/" },
        { text: "Instagram", href: "https://www.instagram.com/fortewebdesigns/" },
        { text: "LinkedIn", href: "https://www.linkedin.com/company/forte-web-designs/?viewAsMember=true" },
      ]
    },
    {
      heading: "Resources",
      points: [
        { text: "Free Forte SiteCheckup™", href: "/solutions/seotool" }
      ]
    }
  ];
  // #a1adf8
  return (
    <footer className=" text-white pt-12 pb-8 relative" style={{
      background: theme === "light" ? (isLargeScreen ? "linear-gradient(180deg, #FFFFFF 0%, #001AB9 100%)" : "linear-gradient(180deg, #FFFFFF 0%, #a1adf8 100%)") : "linear-gradient(180deg, #000000 0%, #001AB9 100%)",
    }}>
      <div className="absolute lg:top-0 w-full lg:h-full h-[320px] bottom-0 lg:bg-transparent dark:bg-[linear-gradient(182.4deg,rgba(0,0,0,0)_10.57%,#000000_67.12%)]" style={{
        backgroundImage: isLargeScreen ? (theme === "light" ? "url('/images/footer/light-bg-right.svg')" : "url('/images/footer/ellipse.svg')") : "",
        backgroundPositionX: "right",
        backgroundPositionY: theme === "dark" ? "bottom" : "",
        backgroundRepeat: "no-repeat"
      }}></div>
      {
        (theme === "light") && (
          <div className="absolute bottom-0 w-full h-full" style={{
            backgroundImage: "url('/images/footer/light-bg-bottom.svg')",
            // backgroundPositionX: "right",
            backgroundPositionY: "bottom",
            backgroundRepeat: "no-repeat"
          }}>

          </div>
        )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and company info */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="block dark:hidden">
                <Icon name="logo-light.svg" alt="Forte Logo (Light Mode)" size={100} folder="home" />
              </div>
              <div className="hidden dark:block">
                <Icon name="logo1.png" alt="Forte Logo (Dark Mode)" size={100} folder="home" />
              </div>
            </div>
            <div className="space-y-1 text-sm dark:text-gray-300 text-gray-700">
              <p>Flexible builds. Lightning-fast performance. Designed to grow with your business.</p>
            </div>
            <div className="flex gap-2 mt-5 flex-wrap">
              <Icon name="mail.svg" alt="email" size={20} folder="footer" />
              <a className="text-sm font-normal dark:text-white text-gray-800" href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a>
            </div>
          </div>

          {/* Dynamic sections from data array */}
          {data.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold dark:text-white mb-4 text-gray-900">{section.heading}</h3>
              <ul className="space-y-2">
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    {typeof point === 'string' ? (
                      <Link href="#" prefetch={true} className="dark:text-gray-300 text-gray-700 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {point}
                      </Link>
                    ) : section.heading === "Connect" ? (
                      <Link
                        href={point.href}
                        prefetch={true}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:text-gray-300 text-gray-700 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {point.text}
                      </Link>
                    ) : (
                      <Link href={point.href} prefetch={true} className="dark:text-gray-300 text-gray-700 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {point.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="dark:text-gray-400 text-gray-700 text-sm md:block hidden">
            © {new Date().getFullYear()} Forte Web Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
