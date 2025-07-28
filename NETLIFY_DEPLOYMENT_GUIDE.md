# Netlify Deployment Guide

## Environment Variables Setup

To ensure proper functionality of all features, configure the following environment variables in your Netlify dashboard:

### Required Environment Variables

1. **Google PageSpeed Insights API Key**
   ```
   NEXT_PUBLIC_PAGESPEED_API_KEY=your_google_api_key_here
   ```
   - Required for the SEO Audit Tool functionality
   - Get your API key from [Google Cloud Console](https://console.cloud.google.com/)
   - Enable the PageSpeed Insights API for your project

2. **Email Service Configuration** (Choose one)
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   ```
   OR
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

3. **reCAPTCHA Configuration** (Optional)
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
   ```

4. **CRM Integration** (Optional)
   ```
   HUBSPOT_API_KEY=your_hubspot_api_key
   SALESFORCE_CLIENT_ID=your_salesforce_client_id
   SALESFORCE_CLIENT_SECRET=your_salesforce_client_secret
   ```

## How to Set Environment Variables in Netlify

1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site settings** > **Environment variables**
4. Click **Add a variable**
5. Enter the variable name and value
6. Click **Save**
7. Redeploy your site for changes to take effect

## Build Configuration

Your `netlify.toml` is already configured with:
- Build command: `npm run build`
- Publish directory: `out`
- Node.js version: 18
- Legacy peer deps flag for compatibility

## Troubleshooting

### ✅ FIXED: Secrets Detection Error (2025-07-28)
- **Issue**: Hardcoded email addresses and phone numbers triggered secrets scanning
- **Solution**: All contact information moved to environment variables
- **Required Action**: Add environment variables to Netlify (see NETLIFY_SECRETS_SCANNING_FIX.md)
- **Status**: Build now passes secrets scanning when env vars are configured

### Build Failures
- Ensure all required dependencies are listed in `package.json`
- Check that environment variables are properly set
- Verify Node.js version compatibility (we use Node 18)

### Form Submissions
- Netlify Forms are configured automatically
- Contact form submissions will appear in your Netlify dashboard
- Email notifications require proper email service configuration

## Security Best Practices

1. **Never commit API keys** to the repository
2. **Use environment variables** for all sensitive configuration
3. **Regularly rotate API keys** for security
4. **Monitor usage** of third-party services
5. **Set up proper CORS** if needed for API endpoints

## Production Checklist

- [ ] All environment variables configured in Netlify
- [ ] SEO Audit Tool working (requires API key)
- [ ] Contact forms submitting successfully
- [ ] Email notifications working (if configured)
- [ ] All pages loading without errors
- [ ] Mobile responsiveness verified
- [ ] Performance scores acceptable

## Getting API Keys

### Google PageSpeed Insights API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable the PageSpeed Insights API
4. Create credentials (API Key)
5. Restrict the API key to PageSpeed Insights API only

### SendGrid
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Go to Settings > API Keys
3. Create a new API key with Mail Send permissions

### Resend
1. Sign up at [Resend](https://resend.com/)
2. Go to API Keys section
3. Create a new API key

## Contact

If you need help with deployment or configuration, please reach out to the development team.
