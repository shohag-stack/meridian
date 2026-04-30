import { Form } from "@/types";
import sendEmail from "./sendEmail";

export async function sendContactEmail(form: Form) {

    const [firstName, ...rest] = form.name.split(" ");
  const lastName = rest.join(" ") || "";

  console.log('seding email from contact page to email', form)

  return sendEmail({
    ...form,
    firstName,
    lastName,
    subject: `New contact from ${form.firstName}`,
    template: "contact",
  });
}