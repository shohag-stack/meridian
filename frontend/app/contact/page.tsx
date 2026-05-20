"use client";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "@/types";
import { sendContactEmail } from "@/(core)/lib/sendContactEmail";
import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { contactHeader } from "@/data/data";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<Form>();

  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const onSubmit: SubmitHandler<Form> = async (value) => {
    try {
      const res = await sendContactEmail(value);
      if (res.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("idle");
      }
    } catch (err) {
      console.log("error", err);
      setStatus("idle");
    }
  };

  return (
    <>
    <PageHeader header={contactHeader} />
      <section className="section-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
            {/* Contact info */}
            <div>
              <h2 className="heading-2 mb-2">Contact Information</h2>

              <div className="flex flex-col gap-8 mb-10">
                {[
                  {
                    icon: MapPin,
                    title: "Our Office",
                    lines: [
                      "1400 Fifth Avenue, Suite 300",
                      "New York, NY 10010",
                    ],
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    lines: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: [
                      "hello@meridian.com",
                      "reservations@meridian.com",
                    ],
                  },
                  {
                    icon: Clock,
                    title: "Office Hours",
                    lines: ["Mon – Fri: 9am – 7pm", "Sat – Sun: 10am – 5pm"],
                  },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center shrink-0">
                      <Icon size={19} className="text-primary-light" />
                    </div>
                    <div>
                      <div className="text-lg font-medium text-neutral-950 mb-1">
                        {title}
                      </div>
                      {lines.map((l) => (
                        <div key={l} className="text-base text-neutral-700">
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-4 md:p-10">
              {isSubmitSuccessful ? (
                <div className="text-center py-12 flex flex-col items-center gap-5">
                  <div
                    className="w-18 h-18 rounded-full flex items-center justify-center"
                    style={{ background: "var(--bg-neutral-300)" }}
                  >
                    <CheckCircle size={36} className="text-primary" />
                  </div>
                  <h3 className="heading-3 text-primary">Message Sent!</h3>
                  <p className="text-neutral-500 max-w-sm">
                    Thank you for reaching out. One of our agents will be in
                    touch within 24 hours.
                  </p>
                  <button className="btn btn-secondary" onClick={() => reset()}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="heading-2 uppercase">
                    Send Us a Message
                  </h2>
                  <p className="text-base text-neutral-600 mb-8">
                    Fill out the form and we'll get back to you shortly.
                  </p>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="label-text">Full Name *</label>
                        <input
                          className="input"
                          placeholder="John Smith"
                          {...register("name", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="label-text">Email Address *</label>
                        <input
                          className="input"
                          type="email"
                          placeholder="john@email.com"
                          {...register("email", { required: true })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="label-text">Phone Number</label>
                        <input
                          className="input"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          {...register("phone", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="label-text">Country *</label>
                        <input
                          className="input"
                          {...register("country", { required: true })}
                          placeholder="Thailand"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <label className="label-text">Subject</label>
                      <input
                        className="input"
                        placeholder="How can we help you?"
                        {...register("subject")}
                      />
                    </div>
                    <div>
                      <label className="label-text">Message *</label>
                      <textarea
                        className="input"
                        rows={5}
                        placeholder="Tell us about your situation and how we can help. The more details you provide, the better we can assist you."
                        style={{ resize: "vertical" }}
                        {...register("message", { required: true })}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-full gap-2"
                      disabled={status === "submitting"}
                    >
                      <Send size={17} />{" "}
                      {status === "submitting"
                        ? "Sending..."
                        : status === "success"
                          ? "Sent ✔"
                          : "Send Message"}
                    </button>
                    <p className="text-xs text-neutral-400 text-center">
                      By submitting, you agree to our Privacy Policy. We never
                      share your information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24">
              

        <div className="container-site">
          {/* Map placeholder */}
          <div className="rounded-xl overflow-hidden border border-neutral-200 h-140">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${process.env.NEXT_PUBLIC_OFFICE_ADDRESS}, New York, NY`,
              )}&output=embed`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
