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
      heading: "Services",
      points: [
        { text: "Foundation", href: "/services/foundation" },
        { text: "Growth", href: "/services/growth" },
        { text: "Scale", href: "/services/scale" },
        { text: "Automation Audit", href: "/services/automation-audit" }
      ]
    },
    {
      heading: "Company",
      points: [
        { text: "About", href: "/about" },
        { text: "Case Studies", href: "/case-studies" },
        { text: "Writing", href: "/blog" },
        { text: "Contact", href: "/contact" }
      ]
    },
    {
      heading: "Connect",
      points: [
        { text: "LinkedIn", href: CONTACT_INFO.linkedin, icon: "linkedin.svg", external: true },
        { text: "Email", href: CONTACT_INFO.emailHref, icon: "mail.svg", external: false }
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
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/home/LaunchForteLogo.png" alt="Forte Web Designs Logo" style={{ width: 150 }} />
            </div>
            <div className="space-y-1 text-sm dark:text-gray-300 text-gray-700">
              <p>Based in Dallas, Texas. Serving clients nationwide.</p>
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
                      <a
                        href={point.href}
                        target={"external" in point && point.external ? "_blank" : undefined}
                        rel={"external" in point && point.external ? "noopener noreferrer" : undefined}
                        className="dark:text-gray-300 text-gray-700 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                      >
                        {"icon" in point && point.icon && (
                          <span className="dark:invert dark:brightness-200">
                            <Icon name={point.icon} alt={point.text} size={18} folder="footer" />
                          </span>
                        )}
                        {point.text}
                      </a>
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

        {/* Mobile/Tablet layout */}
        <div className="lg:hidden">
          {/* Logo and company info - full width on mobile */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <img src="/images/home/LaunchForteLogo.png" alt="Forte Web Designs Logo" style={{ width: 150 }} />
            </div>
            <div className="space-y-1 text-sm dark:text-gray-300 text-gray-700">
              <p>Based in Dallas, Texas. Serving clients nationwide.</p>
            </div>
            <div className="flex gap-2 mt-5 flex-wrap">
              <Icon name="mail.svg" alt="email" size={20} folder="footer" />
              <a className="text-sm font-normal dark:text-white text-gray-800" href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a>
            </div>
          </div>

          {/* Three columns with proper spacing */}
          <div className="grid grid-cols-3 gap-4 text-center">
            {data.map((section, index) => (
              <div key={index}>
                <h3 className="text-base font-semibold dark:text-white mb-3 text-gray-900">{section.heading}</h3>
                <ul className="space-y-2">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      {section.heading === "Connect" ? (
                        <a
                          href={point.href}
                          target={"external" in point && point.external ? "_blank" : undefined}
                          rel={"external" in point && point.external ? "noopener noreferrer" : undefined}
                          className="dark:text-gray-300 text-gray-700 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {point.text}
                        </a>
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
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="dark:text-gray-400 text-gray-700 text-sm text-center">
            © {new Date().getFullYear()} Forte Web Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
