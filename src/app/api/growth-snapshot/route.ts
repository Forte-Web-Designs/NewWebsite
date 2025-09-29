import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { businessName, email, phone, websiteUrl, cityServiceArea, notes } = body;

    // Validate required fields
    if (!businessName || !email) {
      return NextResponse.json(
        { success: false, message: 'Business name and email are required' },
        { status: 400 }
      );
    }

    // Log the Growth Snapshot request
    console.log('Growth Snapshot Request:', {
      businessName,
      email,
      phone,
      websiteUrl,
      cityServiceArea,
      notes,
      timestamp: new Date().toISOString(),
      source: 'Homepage Growth Snapshot Form'
    });

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification to the team
    // 3. Add to CRM system
    // 4. Send confirmation email to the customer
    // 5. Create a task to prepare the growth snapshot
    
    // For now, we'll simulate success
    // In production, you might use services like:
    // - Airtable or database for storage
    // - SendGrid/Resend for emails
    // - Zapier for automation
    // - Google Sheets for simple tracking

    return NextResponse.json(
      { 
        success: true, 
        message: 'Growth Snapshot request received! We\'ll prepare your snapshot and send it within 24 hours.',
        data: {
          businessName,
          email,
          estimatedDelivery: '24 hours'
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing Growth Snapshot request:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit Growth Snapshot request' },
      { status: 500 }
    );
  }
}
