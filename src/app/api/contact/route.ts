
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = ContactFormSchema.parse(body);

    // Save to Firestore
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      createdAt: serverTimestamp(),
    });

    // Send email with Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'prospeera7@gmail.com',
      subject: 'New Contact Form Submission',
      html: `<p>You have a new contact form submission:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 400 });
    }

    console.error('Error processing contact form:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
