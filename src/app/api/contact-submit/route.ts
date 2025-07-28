import { NextRequest, NextResponse } from 'next/server';

interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  business: string;
  message: string;
  landingPageBusiness?: string;
  landingPageOwner?: string;
  landingPageLocation?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  timestamp?: string;
  userAgent?: string;
  referrer?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactSubmission = await request.json();
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you can integrate with your preferred email service
    // Examples: SendGrid, Mailgun, Resend, etc.
    
    console.log('Contact form submission:', {
      ...data,
      submittedAt: new Date().toISOString()
    });

    // Option 1: Send via email service (example with SendGrid)
    if (process.env.SENDGRID_API_KEY) {
      await sendEmailWithSendGrid(data);
    }
    
    // Option 2: Save to database
    // await saveToDatabase(data);
    
    // Option 3: Send to CRM/automation platform
    // await sendToCRM(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function sendEmailWithSendGrid(data: ContactSubmission) {
  // Example SendGrid integration
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'seth@fortewebdesigns.com', // Your email
    from: 'noreply@fortewebdesigns.com', // Verified sender
    subject: `New Lead from ${data.landingPageBusiness || data.business || 'Landing Page'}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Business:</strong> ${data.business || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
      
      <hr>
      <h3>Landing Page Context</h3>
      <p><strong>Landing Page Business:</strong> ${data.landingPageBusiness || 'N/A'}</p>
      <p><strong>Landing Page Owner:</strong> ${data.landingPageOwner || 'N/A'}</p>
      <p><strong>Landing Page Location:</strong> ${data.landingPageLocation || 'N/A'}</p>
      <p><strong>UTM Source:</strong> ${data.utmSource || 'N/A'}</p>
      <p><strong>UTM Medium:</strong> ${data.utmMedium || 'N/A'}</p>
      <p><strong>UTM Campaign:</strong> ${data.utmCampaign || 'N/A'}</p>
      <p><strong>Referrer:</strong> ${data.referrer || 'N/A'}</p>
      <p><strong>User Agent:</strong> ${data.userAgent || 'N/A'}</p>
      <p><strong>Submitted:</strong> ${data.timestamp || 'N/A'}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Alternative: Simple fetch to Zapier webhook
async function sendToZapier(data: ContactSubmission) {
  if (!process.env.ZAPIER_WEBHOOK_URL) return;
  
  try {
    await fetch(process.env.ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.error('Error sending to Zapier:', error);
  }
}

// Alternative: Send to Make.com (formerly Integromat)
async function sendToMake(data: ContactSubmission) {
  if (!process.env.MAKE_WEBHOOK_URL) return;
  
  try {
    await fetch(process.env.MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.error('Error sending to Make:', error);
  }
}
