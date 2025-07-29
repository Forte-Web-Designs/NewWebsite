// Client-side screenshot capture using external services
// This works with static exports since it runs in the browser

export async function captureClientScreenshots(url: string) {
  try {
    // Clean and validate URL
    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    console.log('🔍 Starting client-side screenshot capture for:', cleanUrl);

    // Method 1: Try Microlink API directly from client
    try {
      const microlinkUrl = `https://api.microlink.io/screenshot?url=${encodeURIComponent(cleanUrl)}&viewport.width=1200&viewport.height=800&viewport.deviceScaleFactor=1`;
      const response = await fetch(microlinkUrl);
      
      if (response.ok) {
        const result = await response.json();
        if (result.status === 'success' && result.data?.screenshot) {
          // Fetch the screenshot image and convert to base64
          const imageResponse = await fetch(result.data.screenshot);
          if (imageResponse.ok) {
            const blob = await imageResponse.blob();
            const base64 = await blobToBase64(blob);
            
            console.log('📸 Desktop screenshot captured via Microlink');
            return {
              desktop: base64,
              mobile: base64 // Use same image for both for simplicity
            };
          }
        }
      }
    } catch (error) {
      console.warn('Microlink failed:', error);
    }

    // Method 2: Try screenshot.guru API
    try {
      const screenshotUrl = `https://screenshot.guru/api/screenshot/?url=${encodeURIComponent(cleanUrl)}&width=1200&height=800&format=png`;
      const response = await fetch(screenshotUrl);
      
      if (response.ok) {
        const blob = await response.blob();
        const base64 = await blobToBase64(blob);
        
        console.log('📸 Screenshot captured via screenshot.guru');
        return {
          desktop: base64,
          mobile: base64
        };
      }
    } catch (error) {
      console.warn('Screenshot.guru failed:', error);
    }

    // If all services fail, return null
    console.warn('All client-side screenshot services failed');
    return null;

  } catch (error) {
    console.error('Client screenshot capture failed:', error);
    return null;
  }
}

// Helper function to convert blob to base64
function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
