"use client";
import Image from "next/image";
import { PropertyAgent } from "@/types";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendAgentEmail } from "@/(core)/lib/sendAgentEmail";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Sidebar({
  agent,
  title,
}: {
  agent: PropertyAgent;
  title: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { isLoading, isSubmitSuccessful },
    reset,
  } = useForm<Inputs>();


  const [status, setStatus] = useState<"idle" | "submitting" | "success">('idle')

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await sendAgentEmail(data, agent, title);
      if (res.success === true){
        setStatus('success')
        reset()
      }
      else {
        setStatus('idle')
      };
    } catch (err) {
      console.log("error", err);
      setStatus("idle");
    }
  };

  return (
    <div
      className="sticky"
      style={{ top: "calc(var(--spacing-navbar) + 2rem)" }}
    >
      {agent && (
        <div className="bg-white overflow-hidden mb-5">
          {/* Top accent bar */}
          <div
            className="h-1.5"
            style={{
              background:
                "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
            }}
          />
          <div className="p-7">
            <div className="flex gap-4 items-center mb-6">
              <Image
                src={agent.photo || "/placeholder.png"}
                alt={agent.name}
                className=" w-16 h-16 rounded-full object-cover border-2 border-accent"
                width={70}
                height={70}
              />
              <div>
                <div className="font-display font-semibold text-lg text-neutral-900">
                  {agent.name}
                </div>
                <div className="text-md text-neutral-700 mb-1">
                  {agent.title}
                </div>
                <div className="flex gap-4">
                  <span className="text-sm text-neutral-700">
                    <b className="text-primary">{agent.listings}</b> listings
                  </span>

                  <span className="text-sm text-neutral-700">
                    <b className="text-primary">{agent.soldProperties}</b> sold
                  </span>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3 mb-4"
            >
              <input
                {...register("name")}
                className="input"
                placeholder="Your Name"
              />
              <input
                className="input"
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true })}
              />
              <input
                {...register("phone", { required: true })}
                className="input"
                type="tel"
                placeholder="Phone Number"
              />
              <textarea
                className="input"
                rows={3}
                placeholder={`I'm interested in ${title}...`}
                style={{ resize: "none" }}
                {...register("message")}
              />
              <button className="btn btn-primary w-full" disabled={ status === "submitting"}>
                {status === "submitting"
                  ? "Sending..."
                  : status === "success"
                    ? "Sent ✔"
                    : "Send Message"}{" "}
              </button>
            </form>

            <div className="flex gap-3">
              <a
                href={`tel:${agent.phone}`}
                className="btn btn-secondary btn-sm flex-1 gap-1.5"
              >
                <Phone size={13} /> Call
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="btn btn-secondary btn-sm flex-1 gap-1.5"
              >
                <Mail size={13} /> Email
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Schedule tour */}
      <div className="bg-white p-7 text-white">
        <h3 className="font-display text-neutral-900 text-xl font-semibold mb-2">
          Schedule a Tour
        </h3>
        <p className="text-sm text-neutral-700 leading-relaxed mb-6">
          See this property in person. Our agents are available 7 days a week.
        </p>
        <Link
          href="/contact"
          className="btn btn-primary w-full"
          style={{
            background: "var(--color-accent)",
            borderColor: "var(--color-accent)",
          }}
        >
          Book a Viewing
        </Link>
      </div>
    </div>
  );
}
