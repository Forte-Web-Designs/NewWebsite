export default function GoogleSearchConsole() {
  const verificationCode = process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE;
  
  // Don't render if no verification code is provided
  if (!verificationCode) {
    return null;
  }

  return (
    <>
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content={verificationCode} />
      
      {/* Enhanced Local SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Local Business Verification */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Grapevine, Texas" />
      <meta name="geo.position" content="32.9343;-97.0781" />
      <meta name="ICBM" content="32.9343, -97.0781" />

      {/* Local SEO Enhanced Tags */}
      <meta name="coverage" content="Texas, Grapevine, Dallas, Fort Worth, DFW" />
      <meta name="distribution" content="local" />
      <meta name="audience" content="local businesses" />
      <meta name="target" content="small business owners" />
      
      {/* Enhanced Crawling Instructions */}
      <meta name="revisit-after" content="1 days" />
      <meta name="rating" content="general" />
      <meta name="language" content="en-us" />
      <meta name="doc-type" content="web page" />
      <meta name="doc-rights" content="copywritten work" />
      <meta name="doc-class" content="living document" />
      
      {/* Local Business Categories */}
      <meta name="classification" content="web design, SEO services, digital marketing" />
      <meta name="category" content="professional services" />
      <meta name="coverage" content="Dallas-Fort Worth Metroplex" />
      <meta name="distribution" content="local" />
      <meta name="rating" content="general" />
    </>
  );
}
