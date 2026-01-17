'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  problem: z.string().min(10),
});

export async function sendContactEmail(data: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: 'Invalid fields.' };
  }

  const { name, company, email, problem } = validatedFields.data;

  if (!process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASSWORD) {
    console.error('Missing email server credentials in .env.local');
    return { error: 'Server is not configured to send emails.' };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_SERVER_USER,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Problem Description:</strong></p>
      <p>${problem.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: 'Email sent successfully!' };
  } catch (error) {
    console.error('Nodemailer error:', error);
    return { error: 'Failed to send email.' };
  }
}
