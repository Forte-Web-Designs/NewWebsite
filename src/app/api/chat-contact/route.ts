import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, chatHistory } = body;

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM
    
    // For now, we'll just log it (you can see this in your deployment logs)
    console.log('Chat Contact Form Submission:', {
      name,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString(),
      source: 'AI Chat Widget'
    });

    // Simulate email sending (replace with your email service)
    // You could use services like:
    // - Resend
    // - SendGrid
    // - Nodemailer
    // - EmailJS

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing chat contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
