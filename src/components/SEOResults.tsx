"use client";

import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants/contact';
import { optimizeScreenshotForMobile, getMobileScreenshotMessage } from '../utils/mobileScreenshotUtils';

interface DeviceResults {
  lighthouseResult?: {
    audits: Record<string, any>;
    categories: Record<string, { score: number }>;
    [key: string]: any;
  };
  [key: string]: any;
}

interface AuditResults {
  desktop: DeviceResults;
  mobile: DeviceResults;
}

interface SEOResultsProps {
  results: AuditResults | null;
  auditedUrl: string;
  headerRef?: React.RefObject<HTMLDivElement | null>;
  gradesRef?: React.RefObject<HTMLDivElement | null>;
  screenshotRef?: React.RefObject<HTMLDivElement | null>;
}

export default function SEOResults({ results, auditedUrl, headerRef, gradesRef, screenshotRef }: SEOResultsProps) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  
  if (!results) return null;

  // Check if this is Forte Web Designs domain for marketing purposes
  const isForteWebDesigns = (url: string): boolean => {
    try {
      const domain = new URL(url).hostname.toLowerCase();
      return domain === 'www.fortewebdesigns.com' || domain === 'fortewebdesigns.com';
    } catch {
      return false;
    }
  };

  const isOwnDomain = isForteWebDesigns(auditedUrl);

  // Helper function to process results for a specific device
  const processDeviceResults = (deviceResults: DeviceResults, deviceType: 'Desktop' | 'Mobile') => {
    if (!deviceResults?.lighthouseResult) {
      return null;
    }

    const lighthouse = deviceResults.lighthouseResult;
    const audits = lighthouse.audits;
    const categories = lighthouse.categories;

    // For marketing purposes - show perfect scores for our own domain
    if (isOwnDomain) {
      const perfectScores = {
        Performance: 100,
        Meta: 100,
        Headings: 100,
        Images: 100,
        Schema: 100,
        Accessibility: 100,
        Links: 100
      };

      const getGrade = (score: number) => {
        if (score >= 90) return { grade: 'A', emoji: '🟢', color: 'text-green-600' };
        if (score >= 80) return { grade: 'B', emoji: '🟡', color: 'text-yellow-600' };
        if (score >= 70) return { grade: 'C', emoji: '🟠', color: 'text-orange-600' };
        return { grade: 'D', emoji: '🔴', color: 'text-red-600' };
      };

      return {
        deviceType,
        scores: perfectScores,
        overallScore: 100,
        overallGrade: getGrade(100),
        getGrade,
        screenshot: lighthouse.audits['final-screenshot']?.details?.data,
        findings: {
          needsAttention: [],
          looksGood: [
            `Your ${deviceType.toLowerCase()} site loads instantly, providing an exceptional user experience.`,
            `Perfect SEO optimization ensures maximum search engine visibility.`,
            `Outstanding accessibility standards make your site usable by everyone.`,
            `Advanced technical implementation sets the standard for modern web design.`,
            `Schema markup and structured data are expertly configured for rich search results.`
          ]
        }
      };
    }

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

      // Performance findings - Use more realistic thresholds
      if (scores.Performance >= 95) {
        findings.looksGood.push(`Your ${deviceType.toLowerCase()} site loads quickly, so visitors can see your business right away.`);
      } else {
        if (audits['first-contentful-paint']?.score < 1) {
          const seconds = Math.round((audits['first-contentful-paint']?.numericValue || 0) / 100) / 10;
          findings.needsAttention.push(
            `Your ${deviceType.toLowerCase()} site takes ${seconds}s to show content. Visitors leave within 3 seconds if your site doesn't load fast enough - you could be losing customers every day.`
          );
        }
        if (audits['largest-contentful-paint']?.score < 1) {
          findings.needsAttention.push(
            `Your main content takes ${audits['largest-contentful-paint']?.displayValue} to appear on ${deviceType.toLowerCase()}. Most potential customers won't wait - they'll go to your competitors instead.`
          );
        }
        if (audits['cumulative-layout-shift']?.score < 1) {
          findings.needsAttention.push(`Your ${deviceType.toLowerCase()} page moves around while loading. When customers try to click your contact button or phone number, the page shifts and they click the wrong thing - this frustrates visitors and costs you leads.`);
        }
        // Add general performance improvement if score is moderate
        if (scores.Performance < 90 && scores.Performance >= 70) {
          findings.needsAttention.push(`Your ${deviceType.toLowerCase()} site loads okay, but it could be much faster. Every second of delay costs you 7% of potential customers - speed improvements directly increase your sales.`);
        }
      }

      // SEO findings - More comprehensive checks
      if (scores.Meta >= 95) {
        findings.looksGood.push(`Your ${deviceType.toLowerCase()} site has good search engine optimization basics in place.`);
      } else {
        if (audits['meta-description']?.score < 1) {
          findings.needsAttention.push(`Your ${deviceType.toLowerCase()} site is missing compelling descriptions in Google search results. Without these, fewer people will click on your business when they search for your services.`);
        }
        if (audits['document-title']?.score < 1) {
          findings.needsAttention.push(`Your ${deviceType.toLowerCase()} page titles aren't optimized for search. This means your business isn't showing up when customers search for what you offer.`);
        }
        if (audits['structured-data']?.score < 1) {
          findings.needsAttention.push(`Your ${deviceType.toLowerCase()} site is missing special code that helps Google understand your business. Adding this can make your business stand out with star ratings, hours, and contact info right in search results.`);
        }
        // Add general SEO improvement if score is moderate
        if (scores.Meta < 90 && scores.Meta >= 70) {
          findings.needsAttention.push(`Your ${deviceType.toLowerCase()} site's search engine visibility could be much better. With proper optimization, more customers could find your business when they're actively looking for your services.`);
        }
      }

      // Accessibility findings - More comprehensive checks
      if (scores.Accessibility >= 95) {
        findings.looksGood.push(`Your ${deviceType.toLowerCase()} site is accessible to users with disabilities, which is great for both customers and search rankings.`);
      } else {
        if (audits['color-contrast']?.score < 1) {
          findings.needsAttention.push(`Some text on your ${deviceType.toLowerCase()} site is hard to read. When customers can't easily read your prices, services, or contact info, you lose sales.`);
        }
        if (audits['image-alt']?.score < 1) {
          findings.needsAttention.push(`Your ${deviceType.toLowerCase()} images are missing descriptions. This not only hurts your Google rankings but also makes your site unusable for visually impaired customers.`);
        }
        if (audits['button-name']?.score < 1) {
          findings.needsAttention.push(`Some buttons on your ${deviceType.toLowerCase()} site don't have clear labels. Customers get confused about what actions to take, leading to lost conversions.`);
        }
        // Add general accessibility improvement if score is moderate
        if (scores.Accessibility < 90 && scores.Accessibility >= 70) {
          findings.needsAttention.push(`Your ${deviceType.toLowerCase()} site could work better for all customers. Making it more accessible also improves your Google rankings and opens your business to more potential customers.`);
        }
      }

      // Mobile-specific findings
      if (deviceType === 'Mobile') {
        if (audits['viewport']?.score < 1) {
          findings.needsAttention.push('Your site doesn\'t display properly on phones and tablets. With 60% of customers browsing on mobile, you\'re potentially losing more than half your business.');
        }
        if (audits['tap-targets']?.score < 1) {
          findings.needsAttention.push('Your buttons and links are too small or close together on mobile. Customers can\'t easily tap your phone number or contact forms, which directly costs you leads.');
        }
      }

      // Failsafe: Ensure there are always some realistic findings for improvement
      // Most real websites have at least some areas that could be optimized
      if (findings.needsAttention.length === 0) {
        // Add common optimization opportunities for high-performing sites
        if (deviceType === 'Mobile') {
          findings.needsAttention.push('Your mobile site is performing well, but there are advanced speed optimizations that could reduce bounce rate and increase the time customers spend browsing your services.');
        } else {
          findings.needsAttention.push('Your desktop site has solid fundamentals, but there are proven techniques to make it even faster and more engaging for potential customers.');
        }
        
        // Add a general improvement suggestion
        if (overallScore >= 90) {
          findings.needsAttention.push(`Even high-performing sites like yours can benefit from advanced ${deviceType.toLowerCase()} optimization techniques to stay ahead of competitors and maximize your online presence.`);
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
    // If already successful, just download again without asking for email
    if (showSuccessMessage) {
      downloadPDF();
      return;
    }
    setShowEmailForm(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    
    if (!userEmail.trim()) {
      setEmailError('Email is required');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Submit email to Netlify form with detailed lead qualification data
      const formData = new FormData();
      formData.append('form-name', 'audit-report-download');
      formData.append('email', userEmail);
      formData.append('website-url', auditedUrl);
      formData.append('device-type', 'Desktop & Mobile');
      formData.append('overall-score', combinedScore.toString());
      
      // Add detailed scores for lead qualification
      if (desktopData) {
        formData.append('desktop-performance', desktopData.scores.Performance.toString());
        formData.append('desktop-seo', desktopData.scores.Meta.toString());
        formData.append('desktop-accessibility', desktopData.scores.Accessibility.toString());
        formData.append('desktop-overall', desktopData.overallScore.toString());
      }
      
      if (mobileData) {
        formData.append('mobile-performance', mobileData.scores.Performance.toString());
        formData.append('mobile-seo', mobileData.scores.Meta.toString());
        formData.append('mobile-accessibility', mobileData.scores.Accessibility.toString());
        formData.append('mobile-overall', mobileData.overallScore.toString());
      }
      
      // Add business insights for lead qualification
      const needsAttentionCount = (desktopData?.findings.needsAttention?.length || 0) + (mobileData?.findings.needsAttention?.length || 0);
      const looksGoodCount = (desktopData?.findings.looksGood?.length || 0) + (mobileData?.findings.looksGood?.length || 0);
      
      formData.append('issues-found', needsAttentionCount.toString());
      formData.append('positive-findings', looksGoodCount.toString());
      formData.append('lead-quality', combinedScore < 70 ? 'High - Multiple Issues' : combinedScore < 85 ? 'Medium - Some Issues' : 'Low - Few Issues');
      formData.append('timestamp', new Date().toISOString());
      
      // Add top issues for context
      const allIssues = [
        ...(desktopData?.findings.needsAttention || []),
        ...(mobileData?.findings.needsAttention || [])
      ];
      if (allIssues.length > 0) {
        formData.append('top-issues', allIssues.slice(0, 3).join(' | '));
      }

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
      
      // Save email to localStorage for future auto-fill
      localStorage.setItem('auditReportEmail', userEmail);
      
      // Show success message
      setSubmittedEmail(userEmail);
      setShowSuccessMessage(true);
      setShowEmailForm(false);
      setUserEmail('');
      
      // Remove auto-hide timer - user must manually dismiss
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

    const generateDeviceSection = (data: typeof desktopData | typeof mobileData) => {
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
          <h2 style="color: #333; margin-bottom: 15px; text-align: center;">Combined Desktop & Mobile Score</h2>
          <div style="display: flex; align-items: center; justify-content: center; gap: 20px;">
            <div style="font-size: 48px; font-weight: bold; color: ${combinedGrade.color.includes('green') ? '#059669' : combinedGrade.color.includes('yellow') ? '#d97706' : combinedGrade.color.includes('orange') ? '#ea580c' : '#dc2626'};">
              ${combinedGrade.grade}
            </div>
            <div style="text-align: center;">
              <div style="font-weight: 600; color: #333; font-size: 18px;">Overall Score</div>
              <div style="color: #666;">${combinedScore}/100</div>
            </div>
            <div style="font-size: 36px;">${combinedGrade.emoji}</div>
          </div>
          <p style="margin-top: 15px; color: #666; max-width: 500px; text-align: center; margin-left: auto; margin-right: auto;">${getSummaryText()}</p>
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
          <p style="margin: 5px 0;">Phone: {CONTACT_INFO.phone.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')} • Email: {CONTACT_INFO.email}</p>
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
      <div ref={headerRef} className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Results for <span className="break-all text-blue-600">{auditedUrl}</span>
        </h2>
        
        {/* Mobile Orange CTA Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => {
              const gradesElement = document.querySelector('[data-mobile-scroll-target]');
              if (gradesElement) {
                // Custom slow scroll function that allows users to see screenshots
                const slowScrollToElement = (element: Element) => {
                  const elementRect = element.getBoundingClientRect();
                  const elementTop = elementRect.top + window.pageYOffset;
                  const windowHeight = window.innerHeight;
                  const targetPosition = elementTop - (windowHeight / 2 - elementRect.height / 2);
                  const startPosition = window.pageYOffset;
                  const distance = targetPosition - startPosition;
                  const duration = 2500; // 2.5 seconds for slower scroll
                  let start: number | null = null;

                  const animation = (currentTime: number) => {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    // Ease-in-out animation curve for smooth experience
                    const ease = progress < 0.5 
                      ? 2 * progress * progress 
                      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                    
                    window.scrollTo(0, startPosition + distance * ease);
                    
                    if (timeElapsed < duration) {
                      requestAnimationFrame(animation);
                    }
                  };

                  requestAnimationFrame(animation);
                };

                slowScrollToElement(gradesElement);
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Scroll down to see full analysis
          </button>
        </div>

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
            {showSuccessMessage ? 'Download Again' : 'Download Full Report'}
          </button>

          {/* Email Form Modal */}
          {showEmailForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <form onSubmit={handleEmailSubmit} className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setShowEmailForm(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  disabled={isSubmitting}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Get Your Detailed Report
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Enter your email to download the complete desktop & mobile audit report with actionable recommendations.
                </p>
                <input
                  type="email"
                  placeholder={userEmail ? userEmail : "your@email.com"}
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                    if (emailError) setEmailError(''); // Clear error when user starts typing
                  }}
                  className={`w-full px-3 py-2 border rounded-lg mb-4 text-sm transition-colors ${
                    emailError 
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20'
                  } dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2`}
                  required
                  disabled={isSubmitting}
                  autoComplete="email"
                />
                {emailError && (
                  <div className="mb-3 text-red-500 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {emailError}
                  </div>
                )}
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

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="mb-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border-2 border-green-200 dark:border-green-800 shadow-lg">
            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-3">
                Success! Your Download Should Start Soon
              </h3>
              <p className="text-green-700 dark:text-green-300 mb-4 leading-relaxed">
                Thank you! Your detailed SEO audit report download should begin automatically. 
                If it doesn't start, you can click the "Download Again" button below.
              </p>
              <div className="text-green-600 dark:text-green-400 text-sm mb-4">
                <span className="font-semibold">What's next?</span> Review your report and feel free to reach out if you have any questions about improving your website's performance.
              </div>
              <button
                onClick={() => {
                  setShowSuccessMessage(false);
                  setSubmittedEmail('');
                }}
                className="inline-flex items-center gap-2 text-green-500 dark:text-green-400 text-sm hover:text-green-600 dark:hover:text-green-300 underline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Combined Overall Score */}
      <div className="text-center mb-6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className={`text-4xl font-bold ${combinedGrade.color}`}>
            {combinedGrade.grade}
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="font-medium text-gray-900 dark:text-white">Combined Score</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{combinedScore}/100</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">Desktop + Mobile Average</div>
          </div>
          <div className="text-2xl">{combinedGrade.emoji}</div>
        </div>
      </div>

      {/* Perfect Score Congratulatory Message */}
      {combinedScore === 100 && (
        <div className="mb-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800 shadow-lg">
          <div className="text-center">
            <div className="text-4xl mb-3">🎉🏆🎉</div>
            <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-3">
              PERFECT SCORE ACHIEVED!
            </h3>
            <p className="text-purple-700 dark:text-purple-300 text-lg mb-4 leading-relaxed">
              Congratulations! You've achieved a flawless 100/100 score across both desktop and mobile! 🚀 
              Your website is absolutely crushing it with lightning-fast speeds, bulletproof security, 
              perfect mobile optimization, and flawless SEO fundamentals.
            </p>
            <div className="text-purple-600 dark:text-purple-400 text-sm mb-4">
              <span className="font-semibold">Fun fact:</span> Only 0.1% of websites achieve a perfect combined score. 
              You're in the elite league of web performance! 🌟
            </div>
            <div className="text-purple-500 dark:text-purple-500 text-xs italic">
              "Excellence is not a destination; it's a continuous journey. Keep being awesome!" 💪
            </div>
          </div>
        </div>
      )}

      {/* Device Comparison Cards */}
      <div className="flex justify-center mb-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Desktop Results */}
        {desktopData && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-4 md:justify-start justify-center">
              <div className="text-2xl">🖥️</div>
              <div className="md:text-left text-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Desktop Results</h3>
                <div className={`text-2xl font-bold ${desktopData.overallGrade.color}`}>
                  {desktopData.overallGrade.grade} - {desktopData.overallScore}/100
                </div>
              </div>
            </div>

            {/* Desktop Screenshot - Mobile Optimized */}
            {desktopData.screenshot ? (
              <div ref={screenshotRef} className="text-center mb-4">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                  {getMobileScreenshotMessage('desktop')}
                </div>
                <img
                  {...optimizeScreenshotForMobile(desktopData.screenshot, 'desktop')}
                  alt="Desktop Screenshot"
                  className="max-w-full h-auto mx-auto rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700"
                />
                <div className="text-xs text-gray-500 mt-2">
                  ✅ Real website screenshot • Tap to view full size
                </div>
              </div>
            ) : (
              <div className="text-center mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  📸 Desktop screenshot not available - but your performance data is ready below!
                </div>
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
            <div className="flex items-center gap-3 mb-4 md:justify-start justify-center">
              <div className="text-2xl">📱</div>
              <div className="md:text-left text-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Mobile Results</h3>
                <div className={`text-2xl font-bold ${mobileData.overallGrade.color}`}>
                  {mobileData.overallGrade.grade} - {mobileData.overallScore}/100
                </div>
              </div>
            </div>

            {/* Mobile Screenshot - Mobile Optimized */}
            {mobileData.screenshot ? (
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                  {getMobileScreenshotMessage('mobile')}
                </div>
                <img
                  {...optimizeScreenshotForMobile(mobileData.screenshot, 'mobile')}
                  alt="Mobile Screenshot"
                  className="max-w-full h-auto mx-auto rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700"
                />
                <div className="text-xs text-gray-500 mt-2">
                  ✅ Real mobile screenshot • Tap to view full size
                </div>
              </div>
            ) : (
              <div className="text-center mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  📱 Mobile screenshot not available - but your performance data is ready below!
                </div>
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
      </div>

      {/* Combined Findings */}
      <div ref={gradesRef} data-mobile-scroll-target className="space-y-4 mb-6">
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
