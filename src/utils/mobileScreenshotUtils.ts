/**
 * Mobile Screenshot Optimization Utilities
 * Ensures screenshots work properly on mobile devices
 */

export const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

export const getOptimalScreenshotSize = (device: 'desktop' | 'mobile') => {
  const isMobile = isMobileDevice();
  
  if (device === 'mobile') {
    return {
      width: 375,
      height: 667,
      scaleFactor: isMobile ? 2 : 1, // Higher resolution on actual mobile devices
      maxDisplayHeight: isMobile ? 250 : 300
    };
  } else {
    return {
      width: 1200,
      height: 800,
      scaleFactor: 1,
      maxDisplayHeight: isMobile ? 200 : 400
    };
  }
};

export const optimizeScreenshotForMobile = (screenshotUrl: string, device: 'desktop' | 'mobile') => {
  if (!screenshotUrl) return null;
  
  const { maxDisplayHeight } = getOptimalScreenshotSize(device);
  
  return {
    src: screenshotUrl,
    style: {
      maxHeight: `${maxDisplayHeight}px`,
      objectFit: 'contain' as const,
      width: '100%',
      height: 'auto'
    },
    loading: 'lazy' as const
  };
};

export const getMobileScreenshotMessage = (device: 'desktop' | 'mobile') => {
  const isMobile = isMobileDevice();
  
  if (isMobile) {
    return device === 'mobile' 
      ? '📱 Mobile view (how it looks on phones like yours)'
      : '💻 Desktop view (how it looks on computers)';
  } else {
    return device === 'mobile'
      ? 'Mobile Preview (375x667)'
      : 'Desktop Preview (1200x800)';
  }
};
