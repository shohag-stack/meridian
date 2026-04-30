"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface Form {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hearAboutUs: string;
  businessType: string;
  service: string;
  website: string;
  projectDetails: string;
  budget: string;
  to: string;
  property: string
}

export default async function sendEmail(form: Form) {
  const {
    firstName,
    lastName,
    email,
    phone,
    budget,
    projectDetails,
    property
  } = form;
  const fullName = `${firstName} ${lastName}`;

  const toEmail = form.to;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!toEmail) {
    throw new Error("CONTACT_EMAIL is not defined in environment variables");
  }

  if (!fromEmail) {
    throw new Error(
      "RESEND_FROM_EMAIL is not defined in environment variables",
    );
  }

  try {
    const res = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New inquiry from ${fullName}`,
      html: `
        <h2>🏡 New Property Inquiry</h2>

          <p>You have received a new inquiry from a potential buyer.</p>

          <hr />

          <h3>👤 Contact Details</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <hr />

          <h3>📌 Inquiry Details</h3>
          <p><strong>Property:</strong> ${property}</p>
          <p><strong>Budget:</strong> ${budget}</p>

          <p><strong>Message:</strong></p>
          <p style="background:#f5f5f5; padding:10px; border-radius:6px;">
            ${projectDetails}
          </p>

          <hr />

          <p style="font-size:12px; color:#777;">
            You can reply directly to this email to respond to the client.
          </p>
      `,
    });
    console.log(res);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    return { success: false, message: "Failed to send email" };
  }
}
