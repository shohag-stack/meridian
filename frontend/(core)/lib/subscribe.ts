'use server'
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface Subscribe {
  email: string;
}

export default async function subscribe(form: Subscribe) {
  const { email } = form;

  try {
    const res = await resend.contacts.create({
      email: email,
    });

    console.log('error from subscribe action', res)

    if(res) {
      return {
        success: "you have been subscriped",
        data: res
      }
    }

  } catch (error) {
    console.log("subscription failed", error);
  }
}
