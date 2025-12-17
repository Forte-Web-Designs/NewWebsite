# Email Campaign Integration Guide

## 🎯 Overview
This guide shows you how to integrate your dynamic landing pages with popular email marketing platforms to create personalized experiences for your plumbing business prospects.

## 📧 Email Platform Integration

### 1. Mailchimp Integration

**URL Template:**
```
https://www.fortewebdesigns.com/plumbing-landing/?business=*|COMPANY|*&owner=*|FNAME|*%20*|LNAME|*&location=*|CITY|*&phone=*|PHONE|*&email=*|EMAIL|*&utm_source=mailchimp&utm_medium=email&utm_campaign=plumbing_outreach
```

**Merge Tags:**
- `*|COMPANY|*` - Business name
- `*|FNAME|*` - First name
- `*|LNAME|*` - Last name
- `*|CITY|*` - City
- `*|PHONE|*` - Phone number
- `*|EMAIL|*` - Email address

**Example Email Content:**
```html
<h2>Hi *|FNAME|*, Ready to Get *|COMPANY|* More Customers?</h2>
<p>We help plumbing businesses in *|CITY|* get found online and book more jobs.</p>
<a href="https://www.fortewebdesigns.com/plumbing-landing/?business=*|COMPANY|*&owner=*|FNAME|*%20*|LNAME|*&location=*|CITY|*&phone=*|PHONE|*&email=*|EMAIL|*&utm_source=mailchimp&utm_medium=email&utm_campaign=plumbing_outreach">
  See Your Custom Website Demo
</a>
```

### 2. ConvertKit Integration

**URL Template:**
```
https://www.fortewebdesigns.com/plumbing-landing/?business={{subscriber.company}}&owner={{subscriber.first_name}}&location={{subscriber.city}}&phone={{subscriber.phone}}&email={{subscriber.email}}&utm_source=convertkit&utm_medium=email&utm_campaign=plumbing_outreach
```

**Liquid Tags:**
- `{{subscriber.company}}` - Business name
- `{{subscriber.first_name}}` - First name
- `{{subscriber.city}}` - City
- `{{subscriber.phone}}` - Phone number
- `{{subscriber.email}}` - Email address

### 3. ActiveCampaign Integration

**URL Template:**
```
https://www.fortewebdesigns.com/plumbing-landing/?business=%ORGNAME%&owner=%FIRSTNAME%&location=%CITY%&phone=%PHONE%&email=%EMAIL%&utm_source=activecampaign&utm_medium=email&utm_campaign=plumbing_outreach
```

**Personalization Tags:**
- `%ORGNAME%` - Organization/Company name
- `%FIRSTNAME%` - First name
- `%CITY%` - City
- `%PHONE%` - Phone number
- `%EMAIL%` - Email address

### 4. Constant Contact Integration

**URL Template:**
```
https://www.fortewebdesigns.com/plumbing-landing/?business=${organizationname}&owner=${firstname}&location=${city}&phone=${phone}&email=${email}&utm_source=constantcontact&utm_medium=email&utm_campaign=plumbing_outreach
```

**Merge Fields:**
- `${organizationname}` - Organization name
- `${firstname}` - First name
- `${city}` - City
- `${phone}` - Phone number
- `${email}` - Email address

## 📊 Email Campaign Examples

### Campaign 1: Cold Outreach

**Subject:** "Custom Website for [Business Name] - See Demo"

**Email Content:**
```html
Hi [First Name],

I noticed [Business Name] doesn't have a strong online presence in [City].

Most plumbing businesses lose 60% of potential customers because they can't be found online.

I've created a custom website mockup specifically for [Business Name] that shows how we can help you:

✅ Get found on Google for "[City] plumber"
✅ Convert more website visitors into paying customers
✅ Look more professional than your competition

Click here to see your custom demo:
[LANDING PAGE URL]

Best regards,
Seth
Forte Web Designs
```

### Campaign 2: Follow-up Sequence

**Email 1 - Day 0:** Introduction + Landing Page
**Email 2 - Day 3:** Case study from similar business
**Email 3 - Day 7:** Limited time offer
**Email 4 - Day 14:** Final follow-up

### Campaign 3: Segmented by Location

Create separate campaigns for different cities with location-specific messaging:
- Dallas plumbers
- Fort Worth plumbers
- Austin plumbers

## 🔧 Technical Setup

### 1. Email Service Configuration

Add to your `.env.local` file:
```bash
# Email service (choose one)
SENDGRID_API_KEY=your_api_key
ZAPIER_WEBHOOK_URL=your_webhook_url
MAKE_WEBHOOK_URL=your_webhook_url

# Analytics
GA_MEASUREMENT_ID=G-XXXXXXXXXX
GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX
```

### 2. Install Dependencies

```bash
npm install @sendgrid/mail
# OR
npm install resend
```

### 3. Set Up Form Handling

The contact form automatically captures:
- Lead information
- Landing page context
- UTM parameters
- Timestamp and user data

## 📈 Analytics & Tracking

### 1. Google Analytics Events

Track these events automatically:
```javascript
// Landing page view
gtag('event', 'page_view', {
  'business_name': params.business,
  'utm_source': params.utm_source,
  'utm_campaign': params.utm_campaign
});

// Form submission
gtag('event', 'conversion', {
  'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
  'business_name': params.business
});
```

### 2. Email Platform Tracking

**Track these metrics:**
- Email open rate
- Click-through rate to landing page
- Landing page conversion rate
- Form submission rate
- Phone call conversions

### 3. UTM Parameter Setup

Always include these UTM parameters:
- `utm_source`: email platform (mailchimp, convertkit, etc.)
- `utm_medium`: email
- `utm_campaign`: campaign name (plumbing_outreach, cold_email_1, etc.)

## 🎨 Email Template Examples

### Template 1: Professional

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Custom Website for {{business}}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #1e40af;">Hi {{first_name}},</h1>
        
        <p>I've been researching plumbing businesses in {{city}} and noticed that {{business}} could benefit from a stronger online presence.</p>
        
        <p>Most potential customers search for "plumber near me" on Google, and if you're not showing up, you're losing business to competitors.</p>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">What {{business}} gets:</h3>
            <ul>
                <li>Professional website that loads in under 2 seconds</li>
                <li>Local SEO to get found for "{{city}} plumber"</li>
                <li>Mobile-responsive design</li>
                <li>Unlimited updates and hosting</li>
            </ul>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="{{landing_page_url}}" style="background: #1e40af; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                See {{business}}'s Custom Demo
            </a>
        </div>
        
        <p>No upfront costs, cancel anytime.</p>
        
        <p>Best regards,<br>
        Seth Forte<br>
        Forte Web Designs<br>
        (214) 555-0123</p>
    </div>
</body>
</html>
```

### Template 2: Text-based (Higher Deliverability)

```
Hi {{first_name}},

I was looking at plumbing businesses in {{city}} and noticed {{business}} could use a better online presence.

Here's the thing - 87% of customers search for "plumber near me" on Google before calling anyone.

If {{business}} isn't showing up, you're losing customers to competitors every day.

I've put together a custom website demo specifically for {{business}} that shows how we can help you:

→ Get found on Google for "{{city}} plumber"
→ Convert more visitors into paying customers  
→ Look more professional than competitors

See your custom demo here:
{{landing_page_url}}

No upfront costs, cancel anytime.

Best,
Seth
Forte Web Designs
(214) 555-0123

P.S. - This demo is specifically for {{business}} and includes your actual business information.
```

## 🚀 Launch Checklist

### Before Sending Emails:

- [ ] Test landing page with all parameter combinations
- [ ] Verify email service integration
- [ ] Set up analytics tracking
- [ ] Test form submissions
- [ ] Check mobile responsiveness
- [ ] Verify phone number links work
- [ ] Test with real business data

### Email Campaign Setup:

- [ ] Upload contact list with required fields
- [ ] Set up merge tags/personalization
- [ ] Test email with sample data
- [ ] Set up automated follow-up sequence
- [ ] Configure tracking and analytics
- [ ] Schedule send times for optimal engagement

### Post-Launch Monitoring:

- [ ] Monitor email deliverability
- [ ] Track landing page conversion rates
- [ ] Respond to form submissions quickly
- [ ] Follow up with phone calls
- [ ] Optimize based on performance data

## 📞 Support

For technical issues or questions:
- Check browser console for JavaScript errors
- Verify URL parameter encoding
- Test with simplified parameters first
- Monitor form submission logs

Your email campaign integration is now ready! 🎉
