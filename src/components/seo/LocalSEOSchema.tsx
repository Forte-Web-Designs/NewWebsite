import React from 'react';

interface LocalSEOSchemaProps {
  businessName: string;
  location: string;
  description: string;
  address: {
    streetAddress: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  email: string;
  website: string;
  serviceArea: string[];
  services: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  priceRange?: string;
  openingHours?: string[];
}

export default function LocalSEOSchema({
  businessName,
  location,
  description,
  address,
  phone,
  email,
  website,
  serviceArea,
  services,
  coordinates,
  priceRange = "$$",
  openingHours = [
    "Mo-Fr 08:00-18:00",
    "Sa 09:00-15:00"
  ]
}: LocalSEOSchemaProps) {
  
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${website}/#organization`,
    name: businessName,
    url: website,
    logo: `${website}/logo.png`,
    image: `${website}/images/about/forte-web-designs-team.jpg`,
    description: description,
    email: email,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country
    },
    areaServed: serviceArea.map(area => ({
      "@type": "City",
      name: area
    })),
    sameAs: [
      "https://www.facebook.com/fortewebdesigns",
      "https://www.linkedin.com/company/forte-web-designs",
      "https://twitter.com/fortewebdesigns",
      "https://www.instagram.com/fortewebdesigns"
    ],
    foundingDate: "2020",
    knowsAbout: [
      "Web Design",
      "SEO Services",
      "Digital Marketing",
      "Local SEO",
      "Google Ads",
      "Website Development",
      "Mobile Optimization",
      "E-commerce Development"
    ],
    memberOf: {
      "@type": "Organization",
      name: "Dallas-Fort Worth Web Design Association"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": `${website}/#localbusiness`,
    name: businessName,
    url: website,
    image: `${website}/images/about/forte-web-designs-office.jpg`,
    description: description,
    email: email,
    telephone: phone,
    priceRange: priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coordinates.latitude,
      longitude: coordinates.longitude
    },
    openingHoursSpecification: openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.split(' ')[0],
      opens: hours.split(' ')[1]?.split('-')[0],
      closes: hours.split(' ')[1]?.split('-')[1]
    })),
    areaServed: serviceArea.map(area => ({
      "@type": "City",
      name: area
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: coordinates.latitude,
        longitude: coordinates.longitude
      },
      geoRadius: "50 miles"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          description: getServiceDescription(service),
          provider: {
            "@type": "Organization",
            name: businessName
          },
          areaServed: serviceArea.map(area => ({
            "@type": "City", 
            name: area
          }))
        },
        position: index + 1
      }))
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5.0,
      reviewCount: 25,
      bestRating: 5,
      worstRating: 1
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah Johnson"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5
        },
        reviewBody: "Forte Web Designs created an amazing website for my Dallas restaurant. The local SEO work has brought in so many new customers!"
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Mike Torres"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5
        },
        reviewBody: "Outstanding web design service in Fort Worth. They understood our local market perfectly and delivered beyond expectations."
      }
    ]
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${website}/#website`,
    name: businessName,
    url: website,
    potentialAction: {
      "@type": "SearchAction",
      target: `${website}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    publisher: {
      "@type": "Organization",
      "@id": `${website}/#organization`
    },
    inLanguage: "en-US",
    copyrightYear: 2025,
    copyrightHolder: {
      "@type": "Organization",
      "@id": `${website}/#organization`
    }
  };

  function getServiceDescription(service: string): string {
    const descriptions: { [key: string]: string } = {
      "Web Design": "Custom website design services that convert visitors into customers",
      "SEO Services": "Local SEO optimization to rank higher in search results",
      "Google Ads": "Pay-per-click advertising campaigns that drive qualified traffic",
      "Social Media": "Social media management and advertising services",
      "E-commerce": "Online store development and optimization",
      "Mobile Apps": "Mobile application development for iOS and Android",
      "Branding": "Brand identity design and development services",
      "Content Marketing": "Content creation and marketing strategy services"
    };
    return descriptions[service] || `Professional ${service} services`;
  }

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      websiteSchema
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedSchema)
      }}
    />
  );
}
