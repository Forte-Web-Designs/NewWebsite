"use client";

interface AuditResults {
  desktop: any;
  mobile: any;
}

interface SEOResultsProps {
  results: AuditResults | null;
  auditedUrl: string;
  selectedDevice: string;
  gradesRef?: React.RefObject<HTMLDivElement | null>;
}

export default function SEOResults({ results, auditedUrl, selectedDevice, gradesRef }: SEOResultsProps) {
  if (!results) return null;

  const currentResults = selectedDevice === 'Desktop' ? results.desktop : results.mobile;
  
  if (!currentResults?.lighthouseResult) {
    return (
      <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
        <p className="text-red-700 dark:text-red-300">
          Failed to analyze the website. Please check the URL and try again.
        </p>
      </div>
    );
  }

  const lighthouse = currentResults.lighthouseResult;
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
      findings.looksGood.push("Your website loads quickly, so visitors can see your business right away.");
    } else {
      if (audits['first-contentful-paint']?.score < 1) {
        const seconds = Math.round((audits['first-contentful-paint']?.numericValue || 0) / 100) / 10;
        findings.needsAttention.push(
          `Your site is slow to show content (${seconds}s). Even a short delay can cause potential customers to leave before they see what you offer.`
        );
      }
      if (audits['largest-contentful-paint']?.score < 1) {
        findings.needsAttention.push(
          `The main part of your homepage is slow to appear (${audits['largest-contentful-paint']?.displayValue}). Many visitors won't wait for slow pages to load.`
        );
      }
    }

    // SEO findings
    if (scores.Meta >= 90) {
      findings.looksGood.push("Your page titles and meta descriptions are well-optimized for search engines.");
    } else {
      if (audits['document-title']?.score < 1) {
        findings.needsAttention.push("Your page title could be more descriptive to help people find you in Google search results.");
      }
      if (audits['meta-description']?.score < 1) {
        findings.needsAttention.push("Adding compelling meta descriptions will help your pages stand out in search results.");
      }
    }

    // Accessibility findings
    if (scores.Accessibility >= 90) {
      findings.looksGood.push("Your website is accessible to people with disabilities.");
    } else {
      findings.needsAttention.push("Some accessibility improvements could help you reach more customers and avoid potential legal issues.");
    }

    return findings;
  };

  const findings = generateFindings();

  const getSummaryText = () => {
    if (overallScore >= 90) {
      return "Great news! Your website is in excellent shape. Just a few small tweaks could make it even better for your customers.";
    } else if (overallScore >= 80) {
      return "Your website is doing well, but there are a few areas that could help you attract even more customers.";
    } else {
      return "Your website needs some attention in a few important areas. Fixing these will help you get more visitors and leads.";
    }
  };

  return (
    <div className="mt-8 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Results for <span className="break-all text-blue-600">{auditedUrl}</span>
        </h2>
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
          Website Health Overview ({selectedDevice} View)
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {getSummaryText()}
        </p>
      </div>

      {/* Screenshot */}
      {screenshot && (
        <div className="text-center mb-6">
          <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
            How Your Site Looks to Visitors ({selectedDevice})
          </h3>
          <img
            src={screenshot}
            alt="Website Screenshot"
            className="max-w-sm w-full mx-auto rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Overall Grade */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className={`text-4xl font-bold ${overallGrade.color}`}>
            {overallGrade.grade}
          </div>
          <div className="text-left">
            <div className="font-medium text-gray-900 dark:text-white">Overall Score</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{overallScore}/100</div>
          </div>
          <div className="text-2xl">{overallGrade.emoji}</div>
        </div>
      </div>

      {/* Category Grades */}
      <div ref={gradesRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {Object.entries(scores).map(([category, score]) => {
          const grade = getGrade(score);
          return (
            <div key={category} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className={`text-2xl font-bold ${grade.color}`}>{grade.grade}</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">{category}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{score}/100</div>
              <div className="text-lg">{grade.emoji}</div>
            </div>
          );
        })}
      </div>

      {/* Findings */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">What We Found</h3>
        
        {findings.needsAttention.length > 0 && (
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
              ⚠️ Needs Attention
            </h4>
            <ul className="space-y-2 text-yellow-700 dark:text-yellow-300">
              {findings.needsAttention.map((finding, index) => (
                <li key={index} className="text-sm">• {finding}</li>
              ))}
            </ul>
          </div>
        )}

        {findings.looksGood.length > 0 && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h4 className="font-medium text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
              ✅ Looking Good
            </h4>
            <ul className="space-y-2 text-green-700 dark:text-green-300">
              {findings.looksGood.map((finding, index) => (
                <li key={index} className="text-sm">• {finding}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-center">
        {overallScore >= 80 ? (
          <>
            <p className="text-blue-800 dark:text-blue-200 mb-3">
              🎉 Your site is performing well! Protect your hard-earned rankings with our <strong>Forte Care™</strong> plan - ongoing optimization, security monitoring, and monthly health reports to keep you ahead of Google's constant algorithm changes.
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
              Want help fixing these issues? Forte Web Designs can optimize your site for better performance and more customers.
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
