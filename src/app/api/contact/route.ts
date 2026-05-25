
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { google } from 'googleapis';
import { Resend } from 'resend';

const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, email, message } = ContactFormSchema.parse(body);

    // Save to Google Sheets
    try {
      const spreadsheetId = '15rAnP3OsJyWl3iObEivgxKo6mhvSsqnRRe5ehpCDaRQ';

      const auth = new google.auth.GoogleAuth({
        // Use credentials from the JSON file in development,
        // and Application Default Credentials in production.
        credentials: process.env.NODE_ENV !== 'production' 
            ? require('@/../google-sheets-credentials.json') 
            : undefined,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });
      const timestamp = new Date().toISOString();

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1!A:D',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[name, email, message, timestamp]],
        },
      });
    } catch (error) {
      return new Response('Error saving to database.', { status: 500 });
    }

    // Send email with Resend
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'prospeera7@gmail.com',
        subject: 'New Contact Form Submission',
        html: `<p>You have a new contact form submission:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });
    } catch (error) {
      return new Response('Error sending email.', { status: 500 });
    }

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 400 });
    }

    return new Response('Internal Server Error', { status: 500 });
  }
}
