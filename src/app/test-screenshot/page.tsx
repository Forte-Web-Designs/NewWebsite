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
        <div className="p-4 text-center text-gray-400">
          <div className="animate-spin w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full mx-auto mb-2"></div>
          Capturing {title.toLowerCase()} screenshot...
        </div>
      );
    }

    if (result?.error) {
      return (
        <div className="p-4 text-center text-red-400">
          Error: {result.error}
        </div>
      );
    }

    if (result?.screenshot) {
      return (
        <div>
          <img 
            src={result.screenshot} 
            alt={`${title} screenshot`}
            className="w-full h-auto border border-gray-600 rounded"
          />
          <div className="p-2 text-xs text-gray-400 text-center">
            {result.real ? '✅ Real screenshot' : '❌ Mock screenshot'} 
            ({result.screenshot.length} chars)
          </div>
        </div>
      );
    }

    return (
      <div className="p-4 text-center text-gray-400">
        Click "Capture Screenshots" to test
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Website Screenshot API Test</h1>
        <p className="text-gray-400 mb-6">
          This page tests the screenshot API to ensure real website images are being captured.
        </p>
        
        <div className="mb-6 flex gap-4 items-center">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL (e.g., espn.com)"
            className="px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white flex-1 max-w-md"
          />
          <button
            onClick={captureScreenshots}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded font-medium transition-colors"
          >
            {loading ? 'Capturing...' : 'Capture Screenshots'}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <h3 className="text-xl font-semibold p-4 bg-gray-700">Desktop Version (1200x800)</h3>
            <ResultDisplay result={desktopResult} title="Desktop" />
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <h3 className="text-xl font-semibold p-4 bg-gray-700">Mobile Version (375x667)</h3>
            <ResultDisplay result={mobileResult} title="Mobile" />
          </div>
        </div>

        {(desktopResult || mobileResult) && !loading && (
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <h4 className="font-semibold mb-2">Debug Information:</h4>
            <pre className="text-xs text-gray-400 overflow-auto">
              {JSON.stringify({ desktopResult, mobileResult }, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
