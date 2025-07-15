"use client";

import { useState } from 'react';

interface AuditResults {
  desktop: any;
  mobile: any;
}

interface SEOResultsProps {
  results: AuditResults | null;
  auditedUrl: string;
  gradesRef?: React.RefObject<HTMLDivElement | null>;
  screenshotRef?: React.RefObject<HTMLDivElement | null>;
}

export default function SEOResults({ results, auditedUrl, gradesRef, screenshotRef }: SEOResultsProps) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  if (!results) return null;

  // Helper function to process results for a specific device
  const processDeviceResults = (deviceResults: any, deviceType: 'Desktop' | 'Mobile') => {
    if (!deviceResults?.lighthouseResult) {
      return null;
    }

    const lighthouse = deviceResults.lighthouseResult;
    const audits = lighthouse.audits;
    const categories = lighthouse.categories;

    // Calculate scores for custom categories
    const getHeadingScore = () => {
      const titleScore = audits['document-title']?.score === 1 ? 100 : 70;
      const headingScore = audits['heading-order']?.score === 1 ? 100 : 70;
      return (titleScore + headingScore) / 2;
    };

    const getImageScore = () => {
      return audits['image-alt']?.score === 1 ? 100 : 70;
    };

    const getSchemaScore = () => {
      return audits['structured-data']?.score === 1 ? 100 : 70;
    };

    const getLinksScore = () => {
      return audits['crawlable-anchors']?.score === 1 ? 100 : 80;
    };

    const scores = {
      Performance: Math.round((categories.performance?.score || 0) * 100),
      Meta: Math.round((categories.seo?.score || 0) * 100),
      Headings: Math.round(getHeadingScore()),
      Images: Math.round(getImageScore()),
      Schema: Math.round(getSchemaScore()),
      Accessibility: Math.round((categories.accessibility?.score || 0) * 100),
      Links: Math.round(getLinksScore())
    };

    const getGrade = (score: number) => {
      if (score >= 90) return { grade: 'A', emoji: '🟢', color: 'text-green-600' };
      if (score >= 80) return { grade: 'B', emoji: '🟡', color: 'text-yellow-600' };
      if (score >= 70) return { grade: 'C', emoji: '🟠', color: 'text-orange-600' };
      return { grade: 'D', emoji: '🔴', color: 'text-red-600' };
    };

    // Calculate overall grade
    const overallScore = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length);
    const overallGrade = getGrade(overallScore);

    // Get screenshot if available
    const screenshot = lighthouse.audits['final-screenshot']?.details?.data;

    // Generate findings
    const generateFindings = () => {
      const findings = {
        needsAttention: [] as string[],
        looksGood: [] as string[]
      };

      // Performance findings
      if (scores.Performance >= 90) {
        findings.looksGood.push(`Your ${deviceType.toLowerCase()} site loads quickly, so visitors can see your business right away.`);
      } else {
        if (audits['first-contentful-paint']?.score < 1) {
          const seconds = Math.round((audits['first-contentful-paint']?.numericValue || 0) / 100) / 10;
          findings.needsAttention.push(
            `Your ${deviceType.toLowerCase()} site is slow to show content (${seconds}s). Even a short delay can cause potential customers to leave.`
          );
        }
        if (audits['largest-contentful-paint']?.score < 1) {
          findings.needsAttention.push(
            `The main part of your ${deviceType.toLowerCase()} homepage is slow to appear (${audits['largest-contentful-paint']?.displayValue}). Many visitors won't wait for slow pages to load.`
          );
        }
      }

      // SEO findings
      if (scores.Meta >= 90) {
        findings.looksGood.push(`Your ${deviceType.toLowerCase()} site has good search engine optimization basics in place.`);
      } else {
        if (audits['meta-description']?.score < 1) {
          findings.needsAttention.push(`Your ${deviceType.toLowerCase()} homepage is missing a meta description. This is a missed opportunity to attract clicks from Google search results.`);
        }
        if (audits['document-title']?.score < 1) {
          findings.needsAttention.push(`Your ${deviceType.toLowerCase()} page title needs optimization to help customers find you in search results.`);
        }
      }

      // Accessibility findings
      if (scores.Accessibility >= 90) {
        findings.looksGood.push(`Your ${deviceType.toLowerCase()} site is accessible to users with disabilities, which is great for both customers and search rankings.`);
      } else {
        if (audits['color-contrast']?.score < 1) {
          findings.needsAttention.push(`Some text on your ${deviceType.toLowerCase()} site might be hard to read due to color contrast issues.`);
        }
        if (audits['image-alt']?.score < 1) {
          findings.needsAttention.push(`Some images on your ${deviceType.toLowerCase()} site are missing descriptions, which hurts both accessibility and SEO.`);
        }
      }

      // Mobile-specific findings
      if (deviceType === 'Mobile') {
        if (audits['viewport']?.score < 1) {
          findings.needsAttention.push('Your site may not display properly on mobile devices due to viewport configuration issues.');
        }
        if (audits['tap-targets']?.score < 1) {
          findings.needsAttention.push('Some buttons or links on mobile might be too small or too close together, making them hard to tap.');
        }
      }

      return findings;
    };

    const findings = generateFindings();

    return {
      deviceType,
      scores,
      overallScore,
      overallGrade,
      screenshot,
      findings,
      getGrade
    };
  };

  // Process both desktop and mobile results
  const desktopData = processDeviceResults(results.desktop, 'Desktop');
  const mobileData = processDeviceResults(results.mobile, 'Mobile');

  // If no data available, show error
  if (!desktopData && !mobileData) {
    return (
      <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
        <p className="text-red-700 dark:text-red-300">
          Failed to analyze the website. Please check the URL and try again.
        </p>
      </div>
    );
  }

  // Calculate combined overall score
  const combinedScore = desktopData && mobileData 
    ? Math.round((desktopData.overallScore + mobileData.overallScore) / 2)
    : desktopData?.overallScore || mobileData?.overallScore || 0;

  const getGrade = (score: number) => {
    if (score >= 90) return { grade: 'A', emoji: '🟢', color: 'text-green-600' };
    if (score >= 80) return { grade: 'B', emoji: '🟡', color: 'text-yellow-600' };
    if (score >= 70) return { grade: 'C', emoji: '🟠', color: 'text-orange-600' };
    return { grade: 'D', emoji: '🔴', color: 'text-red-600' };
  };

  const combinedGrade = getGrade(combinedScore);

  const getSummaryText = () => {
    if (combinedScore >= 90) {
      return "Great news! Your website is in excellent shape on both desktop and mobile. Just a few small tweaks could make it even better for your customers.";
    } else if (combinedScore >= 80) {
      return "Your website is doing well overall, but there are opportunities to improve performance on desktop and mobile to attract even more customers.";
    } else {
      return "Your website needs attention in several important areas. Fixing these issues on both desktop and mobile will help you get more visitors and leads.";
    }
  };

  const handleDownloadClick = () => {
    setShowEmailForm(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userEmail.trim()) {
      alert('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Submit email to Netlify form
      const formData = new FormData();
      formData.append('form-name', 'audit-report-download');
      formData.append('email', userEmail);
      formData.append('website-url', auditedUrl);
      formData.append('device-type', 'Desktop & Mobile');
      formData.append('overall-score', combinedScore.toString());

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      }).catch(() => {
        // If submission fails, still allow download - this is just for lead capture
        console.log('Email capture failed, but proceeding with download');
      });

      // Proceed with PDF download
      downloadPDF();
      setShowEmailForm(false);
      setUserEmail('');
    } catch (error) {
      console.error('Email submission error:', error);
      // Still allow download even if email fails
      downloadPDF();
      setShowEmailForm(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadPDF = () => {
    if (!desktopData && !mobileData) return;

    const generateDeviceSection = (data: any) => {
      if (!data) return '';
      
      return `
        <div style="margin: 30px 0; page-break-inside: avoid;">
          <h2 style="color: #081B8B; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #081B8B;">${data.deviceType} Analysis</h2>
          
          ${data.screenshot ? `
            <div style="text-align: center; margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 10px;">How Your Site Looks on ${data.deviceType}</h3>
              <img src="${data.screenshot}" alt="${data.deviceType} Screenshot" style="max-width: 300px; border: 1px solid #ccc; border-radius: 8px;" />
            </div>
          ` : ''}

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Overall ${data.deviceType} Score</h3>
            <div style="display: inline-flex; align-items: center; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px; margin-bottom: 20px;">
              <div style="font-size: 36px; font-weight: bold; color: ${data.overallGrade.color.includes('green') ? '#059669' : data.overallGrade.color.includes('yellow') ? '#d97706' : data.overallGrade.color.includes('orange') ? '#ea580c' : '#dc2626'};">
                ${data.overallGrade.grade}
              </div>
              <div>
                <div style="font-weight: 600; color: #333;">Overall Score</div>
                <div style="color: #666; font-size: 14px;">${data.overallScore}/100</div>
              </div>
              <div style="font-size: 24px;">${data.overallGrade.emoji}</div>
            </div>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">${data.deviceType} Category Breakdown</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px; margin-bottom: 20px;">
              ${Object.entries(data.scores).map(([category, score]: [string, any]) => {
                const grade = data.getGrade(score);
                const gradeColor = grade.color.includes('green') ? '#059669' : grade.color.includes('yellow') ? '#d97706' : grade.color.includes('orange') ? '#ea580c' : '#dc2626';
                return `
                  <div style="text-align: center; padding: 10px; background: #f8f9fa; border-radius: 8px;">
                    <div style="font-size: 24px; font-weight: bold; color: ${gradeColor};">${grade.grade}</div>
                    <div style="font-size: 12px; font-weight: 600; color: #333; margin: 5px 0;">${category}</div>
                    <div style="font-size: 10px; color: #666;">${score}/100</div>
                    <div style="font-size: 16px;">${grade.emoji}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          ${data.findings.needsAttention.length > 0 ? `
            <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #ef4444;">
              <h4 style="color: #991b1b; margin: 0 0 10px 0;">⚠️ ${data.deviceType} - Areas for Improvement</h4>
              <ul style="color: #991b1b; margin: 0; padding-left: 20px;">
                ${data.findings.needsAttention.map((finding: string) => `<li style="margin-bottom: 5px;">${finding}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${data.findings.looksGood.length > 0 ? `
            <div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #22c55e;">
              <h4 style="color: #166534; margin: 0 0 10px 0;">✅ ${data.deviceType} - Looking Good</h4>
              <ul style="color: #166534; margin: 0; padding-left: 20px;">
                ${data.findings.looksGood.map((finding: string) => `<li style="margin-bottom: 5px;">${finding}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `;
    };

    const reportContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Website Audit Report - ${auditedUrl}</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
          .header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #081B8B; }
          .logo { max-width: 200px; margin-bottom: 20px; }
          h1 { color: #081B8B; margin-bottom: 10px; }
          .url { word-break: break-all; color: #666; }
          .combined-score { text-align: center; margin: 30px 0; padding: 20px; background: #f8f9fa; border-radius: 12px; }
          .device-comparison { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
          .device-summary { padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: center; }
          @media print { .device-comparison { display: block; } .device-summary { margin-bottom: 15px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <svg width="200" height="60" viewBox="0 0 200 60" style="margin-bottom: 20px;">
            <text x="100" y="25" text-anchor="middle" style="font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; fill: #081B8B;">Forte Web Designs</text>
            <text x="100" y="45" text-anchor="middle" style="font-family: Arial, sans-serif; font-size: 12px; fill: #666;">Professional Web Solutions</text>
          </svg>
          <h1>Website Audit Report</h1>
          <p class="url">${auditedUrl}</p>
          <p style="color: #666; font-size: 14px;">Generated on ${new Date().toLocaleDateString()} by Forte SiteCheckup™</p>
        </div>

        <div class="combined-score">
          <h2 style="color: #333; margin-bottom: 15px;">Combined Desktop & Mobile Score</h2>
          <div style="display: inline-flex; align-items: center; gap: 20px;">
            <div style="font-size: 48px; font-weight: bold; color: ${combinedGrade.color.includes('green') ? '#059669' : combinedGrade.color.includes('yellow') ? '#d97706' : combinedGrade.color.includes('orange') ? '#ea580c' : '#dc2626'};">
              ${combinedGrade.grade}
            </div>
            <div>
              <div style="font-weight: 600; color: #333; font-size: 18px;">Overall Score</div>
              <div style="color: #666;">${combinedScore}/100</div>
            </div>
            <div style="font-size: 36px;">${combinedGrade.emoji}</div>
          </div>
          <p style="margin-top: 15px; color: #666; max-width: 500px;">${getSummaryText()}</p>
        </div>

        ${desktopData && mobileData ? `
          <div class="device-comparison">
            <div class="device-summary">
              <h3 style="color: #081B8B; margin-bottom: 10px;">🖥️ Desktop Score</h3>
              <div style="font-size: 32px; font-weight: bold; color: ${desktopData.overallGrade.color.includes('green') ? '#059669' : desktopData.overallGrade.color.includes('yellow') ? '#d97706' : desktopData.overallGrade.color.includes('orange') ? '#ea580c' : '#dc2626'};">
                ${desktopData.overallGrade.grade}
              </div>
              <div style="color: #666;">${desktopData.overallScore}/100</div>
            </div>
            <div class="device-summary">
              <h3 style="color: #081B8B; margin-bottom: 10px;">📱 Mobile Score</h3>
              <div style="font-size: 32px; font-weight: bold; color: ${mobileData.overallGrade.color.includes('green') ? '#059669' : mobileData.overallGrade.color.includes('yellow') ? '#d97706' : mobileData.overallGrade.color.includes('orange') ? '#ea580c' : '#dc2626'};">
                ${mobileData.overallGrade.grade}
              </div>
              <div style="color: #666;">${mobileData.overallScore}/100</div>
            </div>
          </div>
        ` : ''}

        ${generateDeviceSection(desktopData)}
        ${generateDeviceSection(mobileData)}

        <div style="margin-top: 40px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #ccc; padding-top: 20px;">
          <p style="margin: 5px 0; font-weight: bold;">Report generated by Forte SiteCheckup™</p>
          <p style="margin: 5px 0;">Need help implementing these improvements? Contact Forte Web Designs</p>
          <p style="margin: 5px 0;">Phone: 817-873-6655 • Email: seth@fortewebdesigns.com</p>
          <p style="margin: 5px 0;">Visit: fortewebdesigns.com</p>
        </div>
      </body>
      </html>
    `;

    // Create a blob with the HTML content
    const blob = new Blob([reportContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Create download link
    const link = document.createElement('a');
    link.href = url;
    link.download = `website-audit-report-desktop-mobile-${auditedUrl.replace(/[^a-zA-Z0-9]/g, '-')}-${new Date().toISOString().split('T')[0]}.html`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-8 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Results for <span className="break-all text-blue-600">{auditedUrl}</span>
        </h2>
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
          Desktop & Mobile Website Health Overview
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {getSummaryText()}
        </p>
      </div>

      {/* Download PDF Section */}
      <div className="mb-6 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
          <p className="text-blue-800 dark:text-blue-200 mb-3 text-sm">
            📄 Get your complete desktop & mobile audit report with personalized recommendations
          </p>
          <button
            onClick={handleDownloadClick}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Report
          </button>

          {/* Email Form Modal */}
          {showEmailForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <form onSubmit={handleEmailSubmit} className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Get Your Detailed Report
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Enter your email to download the complete desktop & mobile audit report with actionable recommendations.
                </p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 dark:bg-gray-700 dark:text-white text-sm"
                  required
                  disabled={isSubmitting}
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Downloading...' : 'Download Report'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEmailForm(false)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800 text-sm"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Combined Overall Score */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className={`text-4xl font-bold ${combinedGrade.color}`}>
            {combinedGrade.grade}
          </div>
          <div className="text-left">
            <div className="font-medium text-gray-900 dark:text-white">Combined Score</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{combinedScore}/100</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">Desktop + Mobile Average</div>
          </div>
          <div className="text-2xl">{combinedGrade.emoji}</div>
        </div>
      </div>

      {/* Device Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Desktop Results */}
        {desktopData && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">🖥️</div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Desktop Results</h3>
                <div className={`text-2xl font-bold ${desktopData.overallGrade.color}`}>
                  {desktopData.overallGrade.grade} - {desktopData.overallScore}/100
                </div>
              </div>
            </div>

            {/* Desktop Screenshot */}
            {desktopData.screenshot && (
              <div ref={screenshotRef} className="text-center mb-4">
                <img
                  src={desktopData.screenshot}
                  alt="Desktop Screenshot"
                  className="max-w-full h-auto mx-auto rounded-lg shadow-md"
                  style={{ maxHeight: '200px' }}
                />
              </div>
            )}

            {/* Desktop Category Grades */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {Object.entries(desktopData.scores).map(([category, score]) => {
                const grade = desktopData.getGrade(score);
                return (
                  <div key={`desktop-${category}`} className="text-center p-2 bg-white dark:bg-gray-700 rounded-lg">
                    <div className={`text-lg font-bold ${grade.color}`}>{grade.grade}</div>
                    <div className="text-xs font-medium text-gray-900 dark:text-white">{category}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{score}/100</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Mobile Results */}
        {mobileData && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">📱</div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Mobile Results</h3>
                <div className={`text-2xl font-bold ${mobileData.overallGrade.color}`}>
                  {mobileData.overallGrade.grade} - {mobileData.overallScore}/100
                </div>
              </div>
            </div>

            {/* Mobile Screenshot */}
            {mobileData.screenshot && (
              <div className="text-center mb-4">
                <img
                  src={mobileData.screenshot}
                  alt="Mobile Screenshot"
                  className="max-w-full h-auto mx-auto rounded-lg shadow-md"
                  style={{ maxHeight: '200px' }}
                />
              </div>
            )}

            {/* Mobile Category Grades */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {Object.entries(mobileData.scores).map(([category, score]) => {
                const grade = mobileData.getGrade(score);
                return (
                  <div key={`mobile-${category}`} className="text-center p-2 bg-white dark:bg-gray-700 rounded-lg">
                    <div className={`text-lg font-bold ${grade.color}`}>{grade.grade}</div>
                    <div className="text-xs font-medium text-gray-900 dark:text-white">{category}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{score}/100</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Combined Findings */}
      <div ref={gradesRef} className="space-y-4 mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Key Findings Across Desktop & Mobile
        </h3>

        {/* Combine all findings from both devices */}
        {(() => {
          const allNeedsAttention: string[] = [];
          const allLooksGood: string[] = [];

          if (desktopData) {
            allNeedsAttention.push(...desktopData.findings.needsAttention);
            allLooksGood.push(...desktopData.findings.looksGood);
          }
          if (mobileData) {
            allNeedsAttention.push(...mobileData.findings.needsAttention);
            allLooksGood.push(...mobileData.findings.looksGood);
          }

          // Remove duplicates
          const uniqueNeedsAttention = [...new Set(allNeedsAttention)];
          const uniqueLooksGood = [...new Set(allLooksGood)];

          return (
            <>
              {uniqueNeedsAttention.length > 0 && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <h4 className="font-medium text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                    ⚠️ Areas for Improvement
                  </h4>
                  <ul className="space-y-2 text-red-700 dark:text-red-300">
                    {uniqueNeedsAttention.map((finding, index) => (
                      <li key={index} className="text-sm">• {finding}</li>
                    ))}
                  </ul>
                </div>
              )}

              {uniqueLooksGood.length > 0 && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                    ✅ Looking Good
                  </h4>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    {uniqueLooksGood.map((finding, index) => (
                      <li key={index} className="text-sm">• {finding}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          );
        })()}
      </div>

      {/* CTA */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-center">
        {combinedScore >= 80 ? (
          <>
            <p className="text-blue-800 dark:text-blue-200 mb-3">
              🎉 Your site is performing well across desktop and mobile! Protect your hard-earned rankings with our <strong>Forte Care™</strong> plan - ongoing optimization, security monitoring, and monthly health reports to keep you ahead of Google's constant algorithm changes.
            </p>
            <a
              href="/solutions/care"
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors mr-3"
            >
              🛡️ Learn About Forte Care™
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Get Custom Quote
            </a>
          </>
        ) : (
          <>
            <p className="text-blue-800 dark:text-blue-200 mb-3">
              Want help fixing these issues on both desktop and mobile? Forte Web Designs can optimize your site for better performance and more customers across all devices.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Get Help From Forte
            </a>
          </>
        )}
      </div>
    </div>
  );
}
