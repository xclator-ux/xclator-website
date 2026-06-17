import { NextResponse } from "next/server";
import { COMPANY } from "@/lib/company";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string; // honeypot
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  const { name, email, subject, message, company } = body;

  // Honeypot — silently accept bots without sending anything.
  if (company && company.trim() !== "") {
    return NextResponse.json({ success: true, message: "Thanks — we'll be in touch." });
  }

  // Validation
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, message: "Please fill in all fields." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || COMPANY.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Xclator Website <onboarding@resend.dev>";

  // Graceful fallback when email isn't configured — never crash the build/runtime.
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY not set — message logged but not emailed:",
      { name, email, subject }
    );
    return NextResponse.json(
      {
        success: false,
        message:
          "Email isn't configured yet. Please reach us directly at " + COMPANY.email + ".",
      },
      { status: 200 }
    );
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email.trim(),
      subject: `[Xclator Contact] ${subject.trim()}`,
      text:
        `New contact form submission\n\n` +
        `Name: ${name.trim()}\n` +
        `Email: ${email.trim()}\n` +
        `Subject: ${subject.trim()}\n\n` +
        `Message:\n${message.trim()}\n`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Something went wrong sending your message. Please email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Thanks — we'll be in touch shortly." });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please email us directly at " + COMPANY.email + "." },
      { status: 500 }
    );
  }
}
