import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Resend API key is missing" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, company, message } = await request.json();

    await resend.emails.send({
      from: "Arcvale Consulting <info@arcvaleconsulting.com>",
      to: "info@arcvaleconsulting.com",
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}