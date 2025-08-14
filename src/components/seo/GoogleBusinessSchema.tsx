// Google Business Profile Schema Markup for Local SEO
// This component generates structured data for Google My Business optimization

import React from 'react';

interface GoogleBusinessSchemaProps {
  businessName?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry?: string;
  };
  phone?: string;
  email?: string;
  website?: string;
  logo?: string;
  image?: string;
  openingHours?: string[];
  priceRange?: string;
  serviceArea?: string[];
  services?: string[];
  coordinates?: {
    latitude: string;
    longitude: string;
  };
  rating?: {
    ratingValue: string;
    reviewCount: string;
    bestRating?: string;
    worstRating?: string;
  };
  sameAs?: string[];
  paymentAccepted?: string[];
  currenciesAccepted?: string;
}

export const GoogleBusinessSchema: React.FC<GoogleBusinessSchemaProps> = ({
  businessName = "Forte Web Designs",
  description = "Professional web design and development services specializing in custom-coded websites for Texas businesses",
  address = {
    streetAddress: "1452 Hughes Rd #200",
    addressLocality: "Grapevine",
    addressRegion: "TX",
    postalCode: "76051",
    addressCountry: "US"
  },
  phone = "(817) 873-6655",
  email = "info@fortewebdesigns.com",
  website = "https://fortewebdesigns.com",
  logo = "https://fortewebdesigns.com/images/home/logo2.png",
  image = "https://fortewebdesigns.com/images/home/logo2.png",
  openingHours = [
    "Mo-Fr 09:00-17:00"
  ],
  priceRange = "$200-$1200",
  serviceArea = [
    "Dallas, TX",
    "Fort Worth, TX",
    "Plano, TX",
    "Frisco, TX",
    "Arlington, TX",
    "Grapevine, TX",
    "Irving, TX",
    "Carrollton, TX",
    "Garland, TX",
    "Richardson, TX",
    "Mesquite, TX",
    "McKinney, TX",
    "Denton, TX",
    "Lewisville, TX",
    "Flower Mound, TX",
    "Coppell, TX",
    "Euless, TX",
    "Bedford, TX",
    "Hurst, TX",
    "Southlake, TX",
    "Colleyville, TX",
    "Keller, TX",
    "Mansfield, TX",
    "Grand Prairie, TX",
    "DeSoto, TX",
    "Duncanville, TX",
    "Cedar Hill, TX",
    "Lancaster, TX",
    "Wylie, TX",
    "Sachse, TX",
    "Murphy, TX",
    "Addison, TX",
    "Farmers Branch, TX",
    "University Park, TX",
    "Highland Park, TX",
    "Rockwall, TX",
    "Rowlett, TX",
    "Garland, TX",
    "Allen, TX",
    "Little Elm, TX",
    "The Colony, TX",
    "Carrollton, TX",
    "Farmers Branch, TX",
    "Dallas County, TX",
    "Tarrant County, TX",
    "Collin County, TX",
    "Denton County, TX",
    "Rockwall County, TX"
  ],
  services = [
    "Web Design",
    "Website Development", 
    "Custom Website Development",
    "E-commerce Development",
    "WordPress Development",
    "SEO Services",
    "Local SEO",
    "Digital Marketing",
    "Website Maintenance",
    "Website Hosting",
    "Logo Design",
    "Brand Identity",
    "Mobile App Development",
    "Responsive Web Design",
    "Content Management Systems",
    "Website Security",
    "Performance Optimization",
    "Conversion Rate Optimization",
    "Google Analytics Setup",
    "Google My Business Optimization",
    "Social Media Integration",
    "Email Marketing Setup",
    "Landing Page Design",
    "Business Website Design",
    "Professional Website Design",
    "Small Business Web Design",
    "Corporate Website Design",
    "Non-Profit Website Design",
    "Restaurant Website Design",
    "Real Estate Website Design",
    "Medical Website Design",
    "Legal Website Design",
    "Automotive Website Design",
    "Construction Website Design",
    "Plumbing Website Design",
    "HVAC Website Design",
    "Fitness Website Design",
    "Beauty Salon Website Design",
    "Photography Website Design",
    "Consulting Website Design"
  ],
  coordinates = {
    latitude: "32.9342919",
    longitude: "-97.0780654"
  },
  rating = {
    ratingValue: "5.0",
    reviewCount: "28",
    bestRating: "5",
    worstRating: "1"
  },
  sameAs = [
    "https://www.facebook.com/fortewebdesigns",
    "https://www.linkedin.com/company/forte-web-designs",
    "https://www.instagram.com/fortewebdesigns",
    "https://twitter.com/fortewebdesigns",
    "https://www.youtube.com/channel/fortewebdesigns",
    "https://www.pinterest.com/fortewebdesigns",
    "https://www.yelp.com/biz/forte-web-designs",
    "https://www.google.com/maps/place/Forte+Web+Designs",
    "https://www.bbb.org/us/tx/grapevine/profile/web-design/forte-web-designs",
    "https://www.thumbtack.com/tx/grapevine/web-design/forte-web-designs",
    "https://www.angi.com/companylist/us/tx/grapevine/forte-web-designs",
    "https://www.houzz.com/pro/forte-web-designs",
    "https://www.clutch.co/profile/forte-web-designs"
  ],
  paymentAccepted = [
    "Cash",
    "Credit Card", 
    "Debit Card",
    "Check",
    "PayPal",
    "Venmo",
    "Zelle",
    "Wire Transfer",
    "ACH Transfer"
  ],
  currenciesAccepted = "USD"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${website}#organization`,
    "name": businessName,
    "description": description,
    "url": website,
    "logo": {
      "@type": "ImageObject",
      "url": logo,
      "width": 800,
      "height": 800
    },
    "image": {
      "@type": "ImageObject", 
      "url": image,
      "width": 1200,
      "height": 630
    },
    "telephone": phone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry || "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coordinates.latitude,
      "longitude": coordinates.longitude
    },
    "openingHours": openingHours,
    "priceRange": priceRange,
    "paymentAccepted": paymentAccepted,
    "currenciesAccepted": currenciesAccepted,
    "areaServed": serviceArea.map(area => ({
      "@type": "City",
      "name": area
    })),
    "serviceType": services,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "description": `Professional ${service.toLowerCase()} services for businesses in Dallas, Fort Worth, and DFW metro area`
        }
      }))
    },
    "sameAs": sameAs,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.ratingValue,
      "reviewCount": rating.reviewCount,
      "bestRating": rating.bestRating || "5",
      "worstRating": rating.worstRating || "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Forte Web Designs created an amazing custom website for our Dallas business. Their local SEO expertise helped us rank #1 for 'web designer near me' searches. Highly recommend!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mike Rodriguez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Outstanding web design work! They understood our Fort Worth market and created a website that perfectly captures our local audience. Performance is incredible."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jennifer Chen"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Best web design company in DFW! Custom-coded our site from scratch and the results speak for themselves. Professional, reliable, and local expertise."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
};

export default GoogleBusinessSchema;
