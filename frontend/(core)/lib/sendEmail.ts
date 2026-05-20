"use server";

import { Form } from "@/types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export default async function sendEmail(form: Form) {
  const {
    firstName,
    lastName,
    email,
    phone,
    message,
    subject,
  } = form;
  const fullName = `${firstName} ${lastName}`;

const toEmail = process.env.CONTACT_EMAIL!;

  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!toEmail) {
    throw new Error("CONTACT_EMAIL is not defined in environment variables");
  }

  if (!fromEmail) {
    throw new Error(
      "RESEND_FROM_EMAIL is not defined in environment variables",
    );
  }

const html =`
      <h2 style="margin-bottom: 8px;">📩 New Contact Message</h2>
<p style="color:#666; margin-top:0;">
  You’ve received a new message from your website contact form.
</p>

<hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

<h3 style="margin-bottom:10px;">👤 Contact Details</h3>

<p style="margin:4px 0;"><strong>Name:</strong> ${fullName}</p>
<p style="margin:4px 0;"><strong>Email:</strong> 
  <a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">
    ${email}
  </a>
</p>
<p style="margin:4px 0;"><strong>Phone:</strong> 
  <a href="tel:${phone}" style="color:#2563eb; text-decoration:none;">
    ${phone}
  </a>
</p>

<hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

<h3 style="margin-bottom:10px;">💬 Message</h3>

<div style="background:#f9fafb; padding:12px 14px; border-radius:8px; line-height:1.6; color:#111;">
  ${message}
</div>

<hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

<p style="font-size:12px; color:#777;">
  Tip: You can reply directly to this email to respond to the sender.
</p>
    `;

  try {
    const res = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: subject || "New Contact Form Message",
      html: html,
      replyTo: email
    });
    console.log(res);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    return { success: false, message: "Failed to send email" };
  }
}
