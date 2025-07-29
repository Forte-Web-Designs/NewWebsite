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

    // Method 1: Try Microlink API directly from client (most reliable)
    try {
      const microlinkUrl = `https://api.microlink.io/screenshot?url=${encodeURIComponent(cleanUrl)}&viewport.width=1200&viewport.height=800&viewport.deviceScaleFactor=1&waitFor=3000&timeout=30000&fullPage=false`;
      console.log('🔗 Trying Microlink API:', microlinkUrl);
      
      // Add timeout for client-side requests (increased to 35 seconds for better success rate)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        console.log('⏰ Microlink API timeout after 35 seconds');
        controller.abort();
      }, 35000);
      
      const response = await fetch(microlinkUrl, { signal: controller.signal });
      clearTimeout(timeoutId);
      console.log('📡 Microlink response status:', response.status);
      
      if (response.ok) {
        const result = await response.json();
        console.log('📄 Microlink result:', { status: result.status, hasScreenshot: !!result.data?.screenshot });
        
        if (result.status === 'success' && result.data?.screenshot) {
          // Fetch the screenshot image and convert to base64
          const imageResponse = await fetch(result.data.screenshot);
          if (imageResponse.ok) {
            const blob = await imageResponse.blob();
            const base64 = await blobToBase64(blob);
            
            console.log('📸 Desktop screenshot captured via Microlink, size:', Math.round(base64.length / 1024) + 'KB');
            
            // Capture mobile version too with optimized settings
            const mobileUrl = `https://api.microlink.io/screenshot?url=${encodeURIComponent(cleanUrl)}&viewport.width=375&viewport.height=667&viewport.deviceScaleFactor=2&waitFor=2000&timeout=25000&fullPage=false`;
            let mobileBase64 = base64; // fallback to desktop
            
            try {
              const mobileController = new AbortController();
              const mobileTimeoutId = setTimeout(() => mobileController.abort(), 30000);
              
              const mobileResponse = await fetch(mobileUrl, { signal: mobileController.signal });
              clearTimeout(mobileTimeoutId);
              
              if (mobileResponse.ok) {
                const mobileResult = await mobileResponse.json();
                if (mobileResult.status === 'success' && mobileResult.data?.screenshot) {
                  const mobileImageResponse = await fetch(mobileResult.data.screenshot);
                  if (mobileImageResponse.ok) {
                    const mobileBlob = await mobileImageResponse.blob();
                    mobileBase64 = await blobToBase64(mobileBlob);
                    console.log('📱 Mobile screenshot captured via Microlink');
                  }
                }
              }
            } catch (mobileError) {
              console.warn('Mobile screenshot failed, using desktop version:', mobileError);
            }
            
            return {
              desktop: base64,
              mobile: mobileBase64
            };
          }
        }
      } else {
        console.warn('Microlink API failed with status:', response.status);
      }
    } catch (error) {
      console.warn('Microlink failed:', error);
    }

    // Method 2: Try Screenshot Machine API (alternative service)
    try {
      console.log('🔄 Trying Screenshot Machine API...');
      // This service has good CORS support and reliability
      const screenshotUrl = `https://api.screenshotmachine.com?key=demo&url=${encodeURIComponent(cleanUrl)}&dimension=1200x800&format=png&cacheLimit=0`;
      const response = await fetch(screenshotUrl, {
        mode: 'cors'
      });
      
      if (response.ok && response.headers.get('content-type')?.includes('image')) {
        const blob = await response.blob();
        const base64 = await blobToBase64(blob);
        
        console.log('📸 Screenshot captured via Screenshot Machine');
        return {
          desktop: base64,
          mobile: base64 // Use same for both
        };
      }
    } catch (error) {
      console.warn('Screenshot Machine failed:', error);
    }

    // Method 3: Try htmlcsstoimage.com API (free tier)
    try {
      console.log('🔄 Trying HTMLCSStoImage API...');
      const hctiUrl = `https://hcti.io/v1/image?url=${encodeURIComponent(cleanUrl)}&viewport_width=1200&viewport_height=800`;
      const response = await fetch(hctiUrl);
      
      if (response.ok) {
        const result = await response.json();
        if (result.url) {
          const imageResponse = await fetch(result.url);
          if (imageResponse.ok) {
            const blob = await imageResponse.blob();
            const base64 = await blobToBase64(blob);
            
            console.log('📸 Screenshot captured via HTMLCSStoImage');
            return {
              desktop: base64,
              mobile: base64
            };
          }
        }
      }
    } catch (error) {
      console.warn('HTMLCSStoImage failed:', error);
    }
    // Method 4: Try S-Shot.ru (very reliable, no API key needed)
    try {
      console.log('🔄 Trying S-Shot.ru API...');
      const sshotUrl = `https://mini.s-shot.ru/1200x800/PNG/1024/Z100/?${cleanUrl}`;
      const response = await fetch(sshotUrl, {
        mode: 'cors',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      if (response.ok && response.headers.get('content-type')?.includes('image')) {
        const blob = await response.blob();
        const base64 = await blobToBase64(blob);
        
        console.log('📸 Screenshot captured via S-Shot.ru');
        
        // Try mobile version too
        let mobileBase64 = base64;
        try {
          const mobileResponse = await fetch(`https://mini.s-shot.ru/375x667/PNG/1024/Z100/?${cleanUrl}`, {
            mode: 'cors',
            headers: {
              'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15'
            }
          });
          if (mobileResponse.ok) {
            const mobileBlob = await mobileResponse.blob();
            mobileBase64 = await blobToBase64(mobileBlob);
            console.log('📱 Mobile screenshot captured via S-Shot.ru');
          }
        } catch (mobileError) {
          console.warn('Mobile S-Shot failed, using desktop version');
        }
        
        return {
          desktop: base64,
          mobile: mobileBase64
        };
      }
    } catch (error) {
      console.warn('S-Shot.ru failed:', error);
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
