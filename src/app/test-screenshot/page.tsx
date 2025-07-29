"use client";

import { useState } from 'react';

export default function ScreenshotTest() {
  const [url, setUrl] = useState('espn.com');
  const [desktopResult, setDesktopResult] = useState<any>(null);
  const [mobileResult, setMobileResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const captureScreenshots = async () => {
    if (!url) {
      alert('Please enter a URL');
      return;
    }

    setLoading(true);
    setDesktopResult({ loading: true });
    setMobileResult({ loading: true });

    try {
      console.log('🔍 Starting screenshot test for:', url);

      // Capture desktop screenshot
      const desktopResponse = await fetch('/api/screenshot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, device: 'desktop' })
      });
      const desktopData = await desktopResponse.json();

      // Capture mobile screenshot
      const mobileResponse = await fetch('/api/screenshot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, device: 'mobile' })
      });
      const mobileData = await mobileResponse.json();

      console.log('📸 Screenshot test results:', { desktopData, mobileData });

      setDesktopResult(desktopData);
      setMobileResult(mobileData);

    } catch (error) {
      console.error('Screenshot test error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setDesktopResult({ error: errorMessage });
      setMobileResult({ error: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  const ResultDisplay = ({ result, title }: { result: any, title: string }) => {
    if (result?.loading) {
      return (
        <div className="p-4 sm:p-6 text-center text-gray-400">
          <div className="animate-spin w-6 h-6 sm:w-8 sm:h-8 border-2 border-blue-400 border-t-transparent rounded-full mx-auto mb-2"></div>
          <div className="text-sm sm:text-base">Capturing {title.toLowerCase()} screenshot...</div>
        </div>
      );
    }

    if (result?.error) {
      return (
        <div className="p-4 sm:p-6 text-center text-red-400">
          <div className="text-sm sm:text-base">Error: {result.error}</div>
        </div>
      );
    }

    if (result?.screenshot) {
      return (
        <div className="p-2 sm:p-4">
          <img 
            src={result.screenshot} 
            alt={`${title} screenshot`}
            className="w-full h-auto border border-gray-600 rounded mb-2"
            style={{ maxHeight: '300px', objectFit: 'contain' }}
          />
          <div className="text-xs text-gray-400 text-center">
            {result.real ? '✅ Real screenshot' : '❌ Mock screenshot'} 
            <br className="sm:hidden" />
            <span className="sm:ml-1">({Math.round(result.screenshot.length / 1024)}KB)</span>
          </div>
        </div>
      );
    }

    return (
      <div className="p-4 sm:p-6 text-center text-gray-400">
        <div className="text-sm sm:text-base">Click "Capture Screenshots" to test</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Website Screenshot API Test</h1>
        <p className="text-gray-400 mb-6 text-sm sm:text-base">
          This page tests the screenshot API to ensure real website images are being captured.
        </p>
        
        <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL (e.g., espn.com)"
            className="px-4 py-3 sm:py-2 bg-gray-800 border border-gray-600 rounded text-white flex-1 sm:max-w-md text-base"
          />
          <button
            onClick={captureScreenshots}
            disabled={loading}
            className="px-6 py-3 sm:py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded font-medium transition-colors text-base whitespace-nowrap"
          >
            {loading ? 'Capturing...' : 'Capture Screenshots'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <h3 className="text-lg sm:text-xl font-semibold p-3 sm:p-4 bg-gray-700">Desktop Version (1200x800)</h3>
            <ResultDisplay result={desktopResult} title="Desktop" />
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <h3 className="text-lg sm:text-xl font-semibold p-3 sm:p-4 bg-gray-700">Mobile Version (375x667)</h3>
            <ResultDisplay result={mobileResult} title="Mobile" />
          </div>
        </div>

        {(desktopResult || mobileResult) && !loading && (
          <div className="mt-6 p-3 sm:p-4 bg-gray-800 rounded-lg">
            <h4 className="font-semibold mb-2 text-sm sm:text-base">Debug Information:</h4>
            <pre className="text-xs text-gray-400 overflow-auto max-h-64 sm:max-h-96">
              {JSON.stringify({ desktopResult, mobileResult }, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
