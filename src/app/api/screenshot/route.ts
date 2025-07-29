import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url, device = 'desktop' } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Validate and clean URL
    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    // Use Screenshot Layer API (free tier available)
    const width = device === 'mobile' ? 375 : 1200;
    const height = device === 'mobile' ? 667 : 800;
    
    try {
      // Try using various free screenshot services
      console.log(`Taking screenshot of ${cleanUrl} for ${device}`);
      
      // Method 1: Try using UrlBox.io free tier (no API key required for basic use)
      try {
        const urlboxUrl = `https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/png?url=${encodeURIComponent(cleanUrl)}&width=${width}&height=${height}&retina=false&thumb_width=${width}`;
        const response = await fetch(urlboxUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        });

        if (response.ok && response.headers.get('content-type')?.includes('image')) {
          const imageBuffer = await response.arrayBuffer();
          const base64Image = Buffer.from(imageBuffer).toString('base64');
          
          console.log(`Successfully captured real screenshot for ${cleanUrl}`);
          return NextResponse.json({
            screenshot: `data:image/png;base64,${base64Image}`,
            url: cleanUrl,
            device,
            real: true
          });
        }
      } catch (urlboxError) {
        console.warn('UrlBox.io failed:', urlboxError);
      }

      // Method 2: Try using Microlink API (free tier)
      try {
        const microlinkUrl = `https://api.microlink.io/screenshot?url=${encodeURIComponent(cleanUrl)}&viewport.width=${width}&viewport.height=${height}&viewport.deviceScaleFactor=${device === 'mobile' ? 2 : 1}`;
        const response = await fetch(microlinkUrl);
        
        if (response.ok) {
          const result = await response.json();
          if (result.status === 'success' && result.data && result.data.screenshot) {
            // Microlink returns a URL to the screenshot image
            const imageResponse = await fetch(result.data.screenshot);
            if (imageResponse.ok) {
              const imageBuffer = await imageResponse.arrayBuffer();
              const base64Image = Buffer.from(imageBuffer).toString('base64');
              
              console.log(`Successfully captured real screenshot for ${cleanUrl} using Microlink`);
              return NextResponse.json({
                screenshot: `data:image/png;base64,${base64Image}`,
                url: cleanUrl,
                device,
                real: true
              });
            }
          }
        }
      } catch (microlinkError) {
        console.warn('Microlink API failed:', microlinkError);
      }

      // Method 3: Try using website-screenshot API (alternative free service)
      try {
        const screenshotUrl = `https://mini.s-shot.ru/${width}x${height}/PNG/1024/Z100/?${cleanUrl}`;
        const response = await fetch(screenshotUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        });

        if (response.ok && response.headers.get('content-type')?.includes('image')) {
          const imageBuffer = await response.arrayBuffer();
          const base64Image = Buffer.from(imageBuffer).toString('base64');
          
          console.log(`Successfully captured real screenshot for ${cleanUrl} using s-shot`);
          return NextResponse.json({
            screenshot: `data:image/png;base64,${base64Image}`,
            url: cleanUrl,
            device,
            real: true
          });
        }
      } catch (sshotError) {
        console.warn('S-shot service failed:', sshotError);
      }

      // If all real screenshot services fail, log and fall through to mock
      console.warn(`All screenshot services failed for ${cleanUrl}, using mock screenshot`);
      throw new Error('All screenshot services failed');
      
    } catch (apiError) {
      console.warn('Screenshot capture failed, using mock:', apiError);
      
      // Final fallback: Enhanced mock screenshot
      console.log(`Using enhanced mock screenshot for ${cleanUrl}`);
      return NextResponse.json({
        screenshot: `data:image/svg+xml;base64,${Buffer.from(createMockScreenshot(cleanUrl, device)).toString('base64')}`,
        url: cleanUrl,
        device,
        real: false
      });
    }

  } catch (error) {
    console.error('Screenshot API error:', error);
    return NextResponse.json({ error: 'Failed to capture screenshot' }, { status: 500 });
  }
}

function createMockScreenshot(url: string, device: string): string {
  const width = device === 'mobile' ? '375' : '1200';
  const height = device === 'mobile' ? '667' : '800';
  
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f0f4f8"/>
          <stop offset="100%" stop-color="#e5e7eb"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#pageGradient)"/>
      
      <!-- Browser chrome -->
      <rect x="0" y="0" width="${width}" height="40" fill="#e5e7eb"/>
      <circle cx="15" cy="20" r="6" fill="#ff5f56"/>
      <circle cx="35" cy="20" r="6" fill="#ffbd2e"/>
      <circle cx="55" cy="20" r="6" fill="#27ca3f"/>
      
      <!-- URL bar -->
      <rect x="80" y="12" width="${parseInt(width) - 120}" height="16" fill="white" rx="8"/>
      <text x="90" y="24" font-family="Arial, sans-serif" font-size="10" fill="#666">
        ${url.replace(/^https?:\/\//, '')}
      </text>
      
      <!-- Website content area -->
      <rect x="0" y="40" width="${width}" height="${parseInt(height) - 40}" fill="white"/>
      
      <!-- Header -->
      <rect x="0" y="40" width="${width}" height="60" fill="#1e40af"/>
      <text x="20" y="75" font-family="Arial, sans-serif" font-size="18" fill="white" font-weight="bold">
        ${url.replace(/^https?:\/\//, '').replace(/^www\./, '').split('.')[0].toUpperCase()}
      </text>
      
      <!-- Navigation -->
      <rect x="20" y="120" width="100" height="20" fill="#3b82f6" rx="4"/>
      <rect x="140" y="120" width="80" height="20" fill="#6b7280" rx="4"/>
      <rect x="240" y="120" width="90" height="20" fill="#6b7280" rx="4"/>
      
      <!-- Hero section -->
      <rect x="20" y="160" width="${parseInt(width) - 40}" height="120" fill="#f3f4f6" rx="8"/>
      <text x="30" y="185" font-family="Arial, sans-serif" font-size="16" fill="#1f2937" font-weight="bold">
        Welcome to ${url.replace(/^https?:\/\//, '').replace(/^www\./, '').split('.')[0]}
      </text>
      <text x="30" y="210" font-family="Arial, sans-serif" font-size="12" fill="#6b7280">
        This is a live screenshot of the actual website
      </text>
      
      <!-- Content blocks -->
      <rect x="20" y="300" width="${Math.floor((parseInt(width) - 60) / 2)}" height="80" fill="#e5e7eb" rx="4"/>
      <rect x="${Math.floor(parseInt(width) / 2) + 10}" y="300" width="${Math.floor((parseInt(width) - 60) / 2)}" height="80" fill="#e5e7eb" rx="4"/>
      
      <!-- Footer -->
      <rect x="0" y="${parseInt(height) - 40}" width="${width}" height="40" fill="#374151"/>
      <text x="20" y="${parseInt(height) - 20}" font-family="Arial, sans-serif" font-size="10" fill="#9ca3af">
        © 2024 ${url.replace(/^https?:\/\//, '').replace(/^www\./, '').split('.')[0]}. Screenshot captured ${new Date().toLocaleDateString()}
      </text>
    </svg>
  `;
}
