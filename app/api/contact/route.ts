import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      company,
      budgetRange,
      timeline,
      projectDescription,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !projectDescription) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email content
    const emailContent = `
      <h2>New Project Inquiry from ${firstName} ${lastName}</h2>
      
      <h3>Contact Information:</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      
      <h3>Project Details:</h3>
      ${budgetRange ? `<p><strong>Budget Range:</strong> ${budgetRange}</p>` : ""}
      ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
      
      <h3>Project Description:</h3>
      <p style="white-space: pre-wrap;">${projectDescription}</p>
      
      <hr>
      <p><em>This inquiry was submitted through the AmbMar LLC contact form.</em></p>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: "inquiry@ambmar.com",
      to: ["ambmar.llc@gmail.com"], // Fixed the typo in the email address
      subject: `New Project Inquiry: ${firstName} ${lastName}`,
      html: emailContent,
      replyTo: email, // This allows you to reply directly to the person who sent the inquiry
    });

    return NextResponse.json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
