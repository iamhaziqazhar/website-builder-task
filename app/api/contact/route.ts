import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    // Server-side validation
    const { name, email, message } = body;

    if (!name?.trim()) {
      return NextResponse.json(
        { error: 'Name is required.' },
        { status: 400 }
      );
    }

    if (!email?.trim() || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!message?.trim() || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters.' },
        { status: 400 }
      );
    }

    // In production you would:
    // 1. Send via Resend / SendGrid / Nodemailer
    // 2. Store in a database (Supabase, PlanetScale, etc.)
    // 3. Post to a Slack/Discord webhook
    //
    // For this demo we log and return success.
    console.log('[Contact Form Submission]', {
      name: name.trim(),
      email: email.trim(),
      company: body.company?.trim() ?? '—',
      budget: body.budget ?? '—',
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Thank you! We will be in touch within 48 hours.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// Method not allowed for non-POST requests
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
