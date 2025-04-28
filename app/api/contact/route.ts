// IMPORTS
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/shared/email-template";

const resend = new Resend(process.env.RESEND_API_KEY); // Use env variable for security

export async function POST(req: Request) {
  try {
    const { name, email, subject, description } = await req.json();

    if (!email || !name || !subject || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "amin.dev.tech@gmail.com",
      subject: subject,
      react: EmailTemplate({
        name,
        description,
        email,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to send email. Error: ${error}` },
      { status: 500 }
    );
  }
}
