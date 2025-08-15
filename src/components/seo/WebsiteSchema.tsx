// Enhanced Website Schema for Google Sitelinks
// This component generates structured data specifically optimized for Google Sitelinks

import React from 'react';

interface WebsiteSchemaProps {
  name?: string;
  alternateName?: string;
  url?: string;
  description?: string;
  publisher?: {
    name: string;
    logo: string;
  };
  potentialAction?: {
    target: string;
    queryInput: string;
  };
  mainEntity?: {
    name: string;
    url: string;
    sameAs: string[];
  };
}

export const WebsiteSchema: React.FC<WebsiteSchemaProps> = ({
  name = "Forte Web Designs",
  alternateName = "Forte Web Designs - Custom Websites That Grow With You",
  url = "https://fortewebdesigns.com",
  description = "Professional web design and development services specializing in custom-coded websites, SEO, and digital marketing for Texas businesses.",
  publisher = {
    name: "Forte Web Designs",
    logo: "https://fortewebdesigns.com/images/home/logo2.png"
  },
  potentialAction = {
    target: "https://fortewebdesigns.com/search?q={search_term_string}",
    queryInput: "required name=search_term_string"
  },
  mainEntity = {
    name: "Forte Web Designs",
    url: "https://fortewebdesigns.com",
    sameAs: [
      "https://www.google.com/maps/place/Forte+Web+Designs",
      "https://www.facebook.com/fortewebdesigns",
      "https://www.linkedin.com/company/forte-web-designs",
      "https://www.instagram.com/fortewebdesigns",
      "https://twitter.com/fortewebdesigns",
      "https://www.youtube.com/channel/fortewebdesigns",
      "https://www.yelp.com/biz/forte-web-designs-grapevine",
      "https://www.bbb.org/us/tx/grapevine/profile/web-design/forte-web-designs"
    ]
  }
}) => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    "name": name,
    "alternateName": alternateName,
    "url": url,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "@id": `${url}#organization`,
      "name": publisher.name,
      "logo": {
        "@type": "ImageObject",
        "url": publisher.logo,
        "width": 800,
        "height": 800
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": potentialAction.target,
      "query-input": potentialAction.queryInput
    },
    "mainEntity": {
      "@type": "Organization",
      "@id": `${url}#organization`,
      "name": mainEntity.name,
      "url": mainEntity.url,
      "sameAs": mainEntity.sameAs
    },
    "hasPart": [
      {
        "@type": "WebPage",
        "@id": `${url}/about#webpage`,
        "url": `${url}/about`,
        "name": "About Us - Forte Web Designs",
        "description": "Learn about our team, mission, and approach to custom web design and development.",
        "isPartOf": {
          "@id": `${url}#website`
        }
      },
      {
        "@type": "WebPage", 
        "@id": `${url}/pricing#webpage`,
        "url": `${url}/pricing`,
        "name": "Pricing - Web Design Services",
        "description": "Transparent pricing for custom website design, SEO, and digital marketing services.",
        "isPartOf": {
          "@id": `${url}#website`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${url}/solutions#webpage`,
        "url": `${url}/solutions`,
        "name": "Solutions - Web Design & Digital Marketing",
        "description": "Comprehensive web design solutions including SEO, Google Ads, and ongoing website care.",
        "isPartOf": {
          "@id": `${url}#website`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${url}/about/work#webpage`,
        "url": `${url}/about/work`,
        "name": "Portfolio - Our Web Design Work",
        "description": "View our portfolio of custom websites and successful client projects.",
        "isPartOf": {
          "@id": `${url}#website`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${url}/blog#webpage`,
        "url": `${url}/blog`,
        "name": "Blog - Web Design Tips & Insights",
        "description": "Expert insights on web design, SEO, and digital marketing for Texas businesses.",
        "isPartOf": {
          "@id": `${url}#website`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${url}/contact#webpage`,
        "url": `${url}/contact`,
        "name": "Contact Us - Get Your Free Quote",
        "description": "Contact Forte Web Designs for a free consultation and website quote.",
        "isPartOf": {
          "@id": `${url}#website`
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema, null, 2)
      }}
    />
  );
};

export default WebsiteSchema;
