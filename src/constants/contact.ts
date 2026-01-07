// Contact information - sourced from environment variables
export const CONTACT_INFO = {
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'seth@fortewebdesigns.com',
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '(817) 873-6655',
  phoneRaw: process.env.NEXT_PUBLIC_BUSINESS_PHONE_RAW || '8178736655',
  phoneHref: `tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE_RAW || '8178736655'}`,
  phoneHrefPlus: `tel:+1${process.env.NEXT_PUBLIC_BUSINESS_PHONE_RAW || '8178736655'}`,
  emailHref: `mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'seth@fortewebdesigns.com'}`,

  // Social links
  linkedin: 'https://www.linkedin.com/company/forte-web-designs',

  // Business info
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Forte Web Designs',
  address: {
    street: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_STREET || '5473 Blair Rd Ste 100 PMB 492829',
    city: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_CITY || 'Dallas',
    state: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_STATE || 'TX',
    zip: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_ZIP || '75231-4227'
  }
};
