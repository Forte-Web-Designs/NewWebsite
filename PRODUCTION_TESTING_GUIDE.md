# Production Testing Guide - Dynamic Landing Pages

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)
Your project is already configured for Netlify with the `netlify.toml` file.

**Deploy Steps:**
1. **Push to Git** (if not already done):
   ```bash
   git add .
   git commit -m "Add dynamic landing pages"
   git push origin main
   ```

2. **Netlify Auto-Deploy**: If connected, Netlify will automatically build and deploy

3. **Manual Deploy**: 
   - Zip the `out/` folder
   - Drag and drop to Netlify dashboard
   - Or use Netlify CLI: `netlify deploy --prod --dir=out`

### Option 2: Local Production Testing
Test the production build locally before deploying:

```bash
# Serve the static files locally
npx serve out -p 3000

# Or use Python (if you have it)
cd out && python3 -m http.server 3000

# Or use Node.js
cd out && npx http-server -p 3000
```

### Option 3: Other Static Hosts
- **Vercel**: Connect GitHub repo, auto-deploys
- **GitHub Pages**: Enable in repo settings
- **Cloudflare Pages**: Connect GitHub, auto-deploys
- **AWS S3**: Upload `out/` folder contents

## 🧪 Production Testing Checklist

### 1. Basic Landing Page Tests

**Test URL Structure:**
```
https://yourdomain.com/plumbing-landing/
```

**With Parameters:**
```
https://yourdomain.com/plumbing-landing/?business=ABC%20Plumbing&owner=John%20Smith&location=Dallas&phone=(214)%20555-0123
```

### 2. Parameter Testing Matrix

**Test Case 1: Full Parameters**
```
?business=Kartalci%20Plumbing&owner=Akif%20Kartalci&location=Dallas&phone=(214)%20555-0123
```
**Expected:** "Custom Website for Kartalci Plumbing", "Hi Akif, We help plumbing businesses in Dallas..."

**Test Case 2: Business Only**
```
?business=Quick%20Fix%20Plumbing
```
**Expected:** "Custom Website for Quick Fix Plumbing", generic greeting

**Test Case 3: No Parameters**
```
/plumbing-landing/
```
**Expected:** "Custom Website for Your Plumbing Business", generic content

**Test Case 4: UTM Tracking**
```
?business=ABC%20Plumbing&utm_source=email&utm_medium=newsletter&utm_campaign=january_2025
```
**Expected:** Content displays correctly, UTM params captured

### 3. Email Campaign Integration Tests

**Test with Real Email Services:**

**Mailchimp URL Example:**
```
https://yourdomain.com/plumbing-landing/?business=*|COMPANY|*&owner=*|FNAME|*%20*|LNAME|*&location=*|CITY|*&utm_source=mailchimp&utm_medium=email&utm_campaign=plumbing_outreach
```

**ConvertKit URL Example:**
```
https://yourdomain.com/plumbing-landing/?business={{subscriber.company}}&owner={{subscriber.first_name}}&location={{subscriber.city}}&utm_source=convertkit
```

### 4. Cross-Browser Testing

**Test in:**
- ✅ Chrome (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile) 
- ✅ Firefox (Desktop & Mobile)
- ✅ Edge (Desktop)

**Mobile Testing:**
- iPhone Safari
- Android Chrome
- Tablet views

### 5. Performance Testing

**Tools to Use:**
- Google PageSpeed Insights
- GTMetrix
- WebPageTest
- Lighthouse

**Target Metrics:**
- Loading: < 2 seconds
- FCP: < 1.5 seconds
- LCP: < 2.5 seconds
- CLS: < 0.1

### 6. URL Encoding Tests

**Special Characters:**
```
?business=A%26B%20Plumbing%20%26%20Heating&owner=José%20García&location=San%20José
```

**Spaces and Punctuation:**
```
?business=Mike's%20Premier%20Plumbing&phone=(214)%20555-0123&location=Fort%20Worth,%20TX
```

## 📊 Analytics Setup

### 1. Google Analytics 4
Add to your production site:
```javascript
// Track parameter events
gtag('event', 'landing_page_view', {
  'business_name': params.business,
  'has_owner': !!params.owner,
  'location': params.location,
  'utm_source': params.utm_source
});
```

### 2. Facebook Pixel (if using)
```javascript
fbq('track', 'ViewContent', {
  content_name: `Landing Page - ${params.business}`,
  content_category: 'Plumbing Landing'
});
```

### 3. Conversion Tracking
Track when users:
- Fill out contact forms
- Click phone numbers
- Request quotes

## 🛠️ Troubleshooting Guide

### Issue: Parameters Not Loading
**Symptoms:** Default content shows even with URL parameters
**Solution:** Check URL encoding, ensure JavaScript is enabled

### Issue: Mobile Display Problems
**Symptoms:** Text overflow, broken layout on mobile
**Solution:** Test responsive breakpoints, check viewport meta tag

### Issue: Slow Loading
**Symptoms:** Long loading times, poor user experience
**Solution:** Check bundle size, optimize images, test CDN

### Issue: Email Service Integration
**Symptoms:** Variables not replacing correctly
**Solution:** Check email service documentation, test merge tags

## 🔍 Quality Assurance Tests

### Content Validation
- [ ] Business name displays correctly
- [ ] Owner greeting appears when provided
- [ ] Location-specific messaging works
- [ ] Phone number displays properly
- [ ] Fallback content works without parameters

### Technical Validation
- [ ] No JavaScript errors in console
- [ ] All images load correctly
- [ ] Forms submit properly
- [ ] Mobile responsiveness works
- [ ] Loading animation appears briefly

### SEO Validation
- [ ] Page titles update dynamically
- [ ] Meta descriptions include business name
- [ ] Structured data validates
- [ ] URLs are clean and readable

## 📈 Success Metrics

**Track These KPIs:**
- **Landing Page Views**: Total visits to /plumbing-landing/
- **Parameter Usage**: % of visits with URL parameters
- **Conversion Rate**: Form submissions / page views
- **Bounce Rate**: Should be lower for personalized visits
- **Time on Page**: Should be higher with personalization
- **Mobile vs Desktop**: Conversion rate comparison

## 🎯 A/B Testing Ideas

**Test Variations:**
1. **Headlines**: "Custom Website" vs "Professional Website"
2. **CTAs**: "Get Started" vs "Get Your Quote" vs "Schedule Consultation"
3. **Colors**: Different industry color schemes
4. **Images**: Stock photos vs custom graphics
5. **Copy Length**: Short vs detailed descriptions

## 🚨 Production Deployment Checklist

Before going live:
- [ ] Test all parameter combinations
- [ ] Verify mobile responsiveness
- [ ] Check loading performance
- [ ] Test email integration
- [ ] Set up analytics tracking
- [ ] Configure error monitoring
- [ ] Test form submissions
- [ ] Verify SSL certificate
- [ ] Check 404 error handling
- [ ] Test with real business data

## 📞 Contact Information

For production issues or questions:
- Check browser console for JavaScript errors
- Verify URL parameter encoding
- Test with simplified parameters first
- Check network tab for failed requests

Your dynamic landing page system is now production-ready! 🎉
