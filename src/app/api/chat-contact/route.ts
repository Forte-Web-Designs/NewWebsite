import { NextRequest, NextResponse } from 'next/server';import { NextRequest, NextResponse } from 'next/server';import { NextRequest, NextResponse } from 'next/server';import { NextRequest, NextResponse } from 'next/server';



export async function POST(request: NextRequest) {

  try {

    const body = await request.json();export async function POST(request: NextRequest) {

    const { name, email, phone, company, message } = body;

  try {

    console.log('Chat Contact Form Submission:', {

      name,    const body = await request.json();export async function POST(request: NextRequest) {export async function POST(request: NextRequest) {

      email,

      phone,    const { name, email, phone, company, message } = body;

      company,

      message,  try {  try {

      timestamp: new Date().toISOString(),

      source: 'AI Chat Widget'    console.log('Chat Contact Form Submission:', {

    });

      name,    const body = await request.json();    const body = await request.json();

    return NextResponse.json(

      { success: true, message: 'Contact form submitted successfully' },      email,

      { status: 200 }

    );      phone,    const { name, email, phone, company, message } = body;    const { name, email, phone, company, message } = body;

  } catch (error) {

    console.error('Error processing chat contact form:', error);      company,

    return NextResponse.json(

      { success: false, message: 'Failed to submit contact form' },      message,

      { status: 500 }

    );      timestamp: new Date().toISOString(),

  }

}      source: 'AI Chat Widget'    // Here you would typically:    // Here you would typically:

    });

    // 1. Save to database    // 1. Save to database

    return NextResponse.json(

      { success: true, message: 'Contact form submitted successfully' },    // 2. Send email notification    // 2. Send email notification

      { status: 200 }

    );    // 3. Add to CRM    // 3. Add to CRM

  } catch (error) {

    console.error('Error processing chat contact form:', error);        

    return NextResponse.json(

      { success: false, message: 'Failed to submit contact form' },    // For now, we'll just log it (you can see this in your deployment logs)    // For now, we'll just log it (you can see this in your deployment logs)

      { status: 500 }

    );    console.log('Chat Contact Form Submission:', {    console.log('Chat Contact Form Submission:', {

  }

}      name,      name,

      email,      email,

      phone,      phone,

      company,      company,

      message,      message,

      timestamp: new Date().toISOString(),      timestamp: new Date().toISOString(),

      source: 'AI Chat Widget'      source: 'AI Chat Widget'

    });    });



    // Simulate email sending (replace with your email service)    // Simulate email sending (replace with your email service)

    // You could use services like:    // You could use services like:

    // - Resend    // - Resend

    // - SendGrid    // - SendGrid

    // - Nodemailer    // - Nodemailer

    // - EmailJS    // - EmailJS



    return NextResponse.json(    return NextResponse.json(

      { success: true, message: 'Contact form submitted successfully' },      { success: true, message: 'Contact form submitted successfully' },

      { status: 200 }      { status: 200 }

    );    );

  } catch (error) {  } catch (error) {

    console.error('Error processing chat contact form:', error);    console.error('Error processing chat contact form:', error);

    return NextResponse.json(    return NextResponse.json(

      { success: false, message: 'Failed to submit contact form' },      { success: false, message: 'Failed to submit contact form' },

      { status: 500 }      { status: 500 }

    );    );

  }  }

}}
