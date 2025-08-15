// Navigation Schema for Enhanced Sitelinks
// This component generates breadcrumb and navigation structured data

import React from 'react';

interface NavigationSchemaProps {
  currentPage?: {
    name: string;
    url: string;
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  siteNavigationElements?: Array<{
    name: string;
    url: string;
    description?: string;
  }>;
}

export const NavigationSchema: React.FC<NavigationSchemaProps> = ({
  currentPage,
  breadcrumbs = [],
  siteNavigationElements = [
    {
      name: "Home",
      url: "https://fortewebdesigns.com",
      description: "Custom websites that grow with your business"
    },
    {
      name: "About", 
      url: "https://fortewebdesigns.com/about",
      description: "Learn about our team and approach to web design"
    },
    {
      name: "Pricing",
      url: "https://fortewebdesigns.com/pricing", 
      description: "Transparent pricing for web design services"
    },
    {
      name: "Solutions",
      url: "https://fortewebdesigns.com/solutions",
      description: "Web design, SEO, and digital marketing services"
    },
    {
      name: "Portfolio",
      url: "https://fortewebdesigns.com/about/work",
      description: "View our custom website portfolio and client work"
    },
    {
      name: "Blog",
      url: "https://fortewebdesigns.com/blog",
      description: "Web design tips and digital marketing insights"
    },
    {
      name: "Contact",
      url: "https://fortewebdesigns.com/contact",
      description: "Get your free website consultation and quote"
    }
  ]
}) => {
  const schemas = [];

  // Site Navigation Schema
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": "https://fortewebdesigns.com",
    "hasPart": siteNavigationElements.map((element, index) => ({
      "@type": "SiteNavigationElement",
      "@id": `${element.url}#nav-${index}`,
      "name": element.name,
      "url": element.url,
      "description": element.description,
      "position": index + 1
    }))
  };

  schemas.push(siteNavigationSchema);

  // Breadcrumb Schema (if breadcrumbs provided)
  if (breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
    schemas.push(breadcrumbSchema);
  }

  // WebPage Schema for current page (if provided)
  if (currentPage) {
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${currentPage.url}#webpage`,
      "name": currentPage.name,
      "url": currentPage.url,
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://fortewebdesigns.com#website",
        "name": "Forte Web Designs",
        "url": "https://fortewebdesigns.com"
      },
      "about": {
        "@type": "Organization",
        "@id": "https://fortewebdesigns.com#organization",
        "name": "Forte Web Designs"
      }
    };
    schemas.push(webPageSchema);
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`nav-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </>
  );
};

export default NavigationSchema;
