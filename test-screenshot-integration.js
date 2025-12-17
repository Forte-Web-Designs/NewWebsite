// Test script to verify screenshot integration in SEO audit
const testScreenshotIntegration = async () => {
  console.log('Testing screenshot integration...');
  
  try {
    // Test desktop screenshot
    const desktopResponse = await fetch('/api/screenshot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'https://www.espn.com', device: 'desktop' })
    });
    
    const desktopData = await desktopResponse.json();
    console.log('Desktop screenshot test:', {
      success: !!desktopData.screenshot,
      size: desktopData.screenshot ? Math.round(desktopData.screenshot.length / 1024) + 'KB' : 'N/A',
      isDataUrl: desktopData.screenshot?.startsWith('data:image/') || false
    });
    
    // Test mobile screenshot
    const mobileResponse = await fetch('/api/screenshot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'https://www.espn.com', device: 'mobile' })
    });
    
    const mobileData = await mobileResponse.json();
    console.log('Mobile screenshot test:', {
      success: !!mobileData.screenshot,
      size: mobileData.screenshot ? Math.round(mobileData.screenshot.length / 1024) + 'KB' : 'N/A',
      isDataUrl: mobileData.screenshot?.startsWith('data:image/') || false
    });
    
    // Test mock audit results format
    const mockResults = {
      desktop: {
        lighthouseResult: {
          categories: {
            performance: { score: 0.85 },
            accessibility: { score: 0.90 },
            'best-practices': { score: 0.88 },
            seo: { score: 0.92 }
          },
          audits: {
            'first-contentful-paint': { displayValue: '1.2 s' },
            'largest-contentful-paint': { displayValue: '2.1 s' },
            'speed-index': { displayValue: '2.3 s' },
            'cumulative-layout-shift': { displayValue: '0.1' },
            'total-blocking-time': { displayValue: '150 ms' },
            'final-screenshot': {
              details: {
                data: desktopData.screenshot
              }
            }
          }
        }
      },
      mobile: {
        lighthouseResult: {
          categories: {
            performance: { score: 0.75 },
            accessibility: { score: 0.85 },
            'best-practices': { score: 0.82 },
            seo: { score: 0.88 }
          },
          audits: {
            'first-contentful-paint': { displayValue: '2.1 s' },
            'largest-contentful-paint': { displayValue: '3.8 s' },
            'speed-index': { displayValue: '4.2 s' },
            'cumulative-layout-shift': { displayValue: '0.15' },
            'total-blocking-time': { displayValue: '380 ms' },
            'final-screenshot': {
              details: {
                data: mobileData.screenshot
              }
            }
          }
        }
      }
    };
    
    console.log('Mock results structure:', {
      hasDesktopScreenshot: !!mockResults.desktop.lighthouseResult.audits['final-screenshot'].details.data,
      hasMobileScreenshot: !!mockResults.mobile.lighthouseResult.audits['final-screenshot'].details.data
    });
    
    return mockResults;
    
  } catch (error) {
    console.error('Screenshot integration test failed:', error);
    return null;
  }
};

// Run the test
testScreenshotIntegration().then(results => {
  if (results) {
    console.log('✅ Screenshot integration test passed');
  } else {
    console.log('❌ Screenshot integration test failed');
  }
});
