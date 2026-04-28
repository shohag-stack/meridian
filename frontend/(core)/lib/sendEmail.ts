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
}

export default async function sendEmail(form: Form) {
  const {
    firstName,
    lastName,
    email,
    phone,
    budget,
    hearAboutUs,
    projectDetails,
  } = form;
  const fullName = `${firstName} ${lastName}`;

  const toEmail = process.env.CONTACT_EMAIL;
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
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>How they heard about us:</strong> ${hearAboutUs}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails}</p>
      `,
    });
    console.log(res);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    return { success: false, message: "Failed to send email" };
  }
}
