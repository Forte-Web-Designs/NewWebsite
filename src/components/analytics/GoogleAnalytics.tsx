"use client";

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  // Don't render if no GA ID is provided
  if (!GA_MEASUREMENT_ID) {
    return null;
  }
  useEffect(() => {
    // Enhanced local SEO tracking
    const trackLocalSEOEvents = () => {
      // Track location-based page views
      if (typeof window !== 'undefined' && window.gtag) {
        const path = window.location.pathname;
        
        // Track location-specific pages
        if (path.includes('/locations/')) {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            custom_parameter: 'local_seo_page',
            location_type: path.includes('dallas') ? 'dallas' : 
                          path.includes('fort-worth') ? 'fort-worth' : 
                          path.includes('dfw') ? 'dfw' : 'general'
          });
        }
        
        // Track SEO-related page views
        if (path.includes('/services/seo')) {
          window.gtag('event', 'seo_service_view', {
            page_title: document.title,
            page_location: window.location.href,
            service_type: 'seo'
          });
        }
        
        // Track web design inquiries
        if (path.includes('/services/webDesign')) {
          window.gtag('event', 'web_design_service_view', {
            page_title: document.title,
            page_location: window.location.href,
            service_type: 'web_design'
          });
        }
        
        // Track local search terms in URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get('q') || urlParams.get('search');
        if (searchTerm) {
          window.gtag('event', 'local_search_term', {
            search_term: searchTerm,
            page_location: window.location.href
          });
        }
      }
    };

    // Track local SEO events on page load
    trackLocalSEOEvents();

    // Track form submissions for local SEO
    const trackFormSubmissions = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          if (typeof window !== 'undefined' && window.gtag) {
            const formId = form.id || 'unknown_form';
            const formAction = form.action || 'unknown_action';
            
            window.gtag('event', 'form_submit', {
              event_category: 'Local SEO',
              event_label: formId,
              form_action: formAction,
              page_location: window.location.href
            });
          }
        });
      });
    };

    // Track phone number clicks
    const trackPhoneClicks = () => {
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      phoneLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (typeof window !== 'undefined' && window.gtag) {
            const phoneNumber = link.getAttribute('href')?.replace('tel:', '') || 'unknown';
            window.gtag('event', 'phone_click', {
              event_category: 'Local SEO',
              event_label: phoneNumber,
              page_location: window.location.href
            });
          }
        });
      });
    };

    // Track local business clicks
    const trackLocalBusinessClicks = () => {
      const businessLinks = document.querySelectorAll('a[href*="google.com/maps"], a[href*="goo.gl/maps"]');
      businessLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'local_business_click', {
              event_category: 'Local SEO',
              event_label: 'google_maps',
              page_location: window.location.href
            });
          }
        });
      });
    };

    // Track website audit tool usage
    const trackAuditTool = () => {
      const auditButtons = document.querySelectorAll('button[class*="audit"], button[class*="run-audit"]');
      auditButtons.forEach(button => {
        button.addEventListener('click', () => {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'audit_tool_used', {
              event_category: 'SEO Tools',
              event_label: 'website_audit',
              page_location: window.location.href
            });
          }
        });
      });
    };

    // Set up all tracking after a short delay to ensure DOM is ready
    setTimeout(() => {
      trackFormSubmissions();
      trackPhoneClicks();
      trackLocalBusinessClicks();
      trackAuditTool();
    }, 1000);

    // Track scroll depth for local SEO pages
    let scrollDepthTracked = false;
    const trackScrollDepth = () => {
      if (scrollDepthTracked) return;
      
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollPercent >= 75) {
        scrollDepthTracked = true;
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'scroll_depth', {
            event_category: 'Engagement',
            event_label: '75_percent',
            page_location: window.location.href
          });
        }
      }
    };

    window.addEventListener('scroll', trackScrollDepth);

    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
    };
  }, []);

  return (
    <>
      {/* Google Analytics 4 Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-4"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              // Enhanced local SEO tracking
              custom_map: {
                'dimension1': 'location_type',
                'dimension2': 'service_type',
                'dimension3': 'local_search_term'
              },
              // Track site search
              site_search_query_parameter: 'q',
              // Enhanced ecommerce for service tracking
              enable_enhanced_ecommerce: true,
              // Track file downloads
              track_file_downloads: true,
              // Track outbound links
              track_outbound_links: true,
              // Local SEO specific settings
              allow_google_signals: true,
              allow_ad_personalization_signals: true,
              anonymize_ip: false, // Keep IP for local SEO insights
              // Track performance metrics
              custom_parameter: 'local_seo_tracking'
            });
            
            // Track local SEO specific events
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              custom_parameter: 'local_seo_enhanced'
            });
            
            // Track local business schema interactions
            gtag('event', 'local_business_schema_load', {
              event_category: 'Local SEO',
              event_label: 'schema_markup',
              page_location: window.location.href
            });
          `,
        }}
      />
    </>
  );
}
