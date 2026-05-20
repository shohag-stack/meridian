import { Form } from "@/types";
import sendEmail from "./sendEmail";

export async function sendContactEmail(form: Form) {

    const [firstName, ...rest] = form.name.split(" ");
  const lastName = rest.join(" ") || "";

  return sendEmail({
    ...form,
    firstName,
    lastName,
  });
}