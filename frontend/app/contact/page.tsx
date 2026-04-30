'use client';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form } from '@/types';
import { sendContactEmail } from '@/(core)/lib/sendContactEmail';
import { useState } from 'react';


export default function ContactPage() {

  const {register, handleSubmit,reset ,formState: {isSubmitting, isSubmitSuccessful}} = useForm<Form>()

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const onSubmit: SubmitHandler<Form> = async (value) => {
    try{
      const res = await sendContactEmail(value)
      if(res.success){
        setStatus('success');
        reset()
      }
      else {
        setStatus("idle")
      }
    }
    catch(err){
      console.log("error", err);
      setStatus("idle");
    } 
  };

  return (
    <>
      <PageHeader path='/img/listingbg1.png' title='Get in Touch'  eyebrow='Reach Out' subtitle="Whether you&apos;re ready to buy, sell, or simply explore your options — our team is here to help." />

      <section className="section-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

            {/* Contact info */}
            <div>
              <h2 className="heading-2 mb-2">Contact Information</h2>
              <span className="divider-accent mb-8" />

              <div className="flex flex-col gap-8 mb-10">
                {[
                  { icon: MapPin, title: 'Our Office',   lines: ['1400 Fifth Avenue, Suite 300', 'New York, NY 10010'] },
                  { icon: Phone,  title: 'Phone',         lines: ['+1 (555) 123-4567', '+1 (555) 765-4321'] },
                  { icon: Mail,   title: 'Email',         lines: ['hello@estatehaven.com', 'listings@estatehaven.com'] },
                  { icon: Clock,  title: 'Office Hours',  lines: ['Mon – Fri: 9am – 7pm', 'Sat – Sun: 10am – 5pm'] },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center shrink-0">
                      <Icon size={19} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-xl text-neutral-900 mb-1">{title}</div>
                      {lines.map(l => <div key={l} className="text-base text-neutral-500">{l}</div>)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-neutral-200 h-56">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      `new york`
                    )}&output=embed`}
                  />
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-4 md:p-10">
              {isSubmitSuccessful ? (
                <div className="text-center py-12 flex flex-col items-center gap-5">
                  <div className="w-18 h-18 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(45,122,79,0.1)' }}>
                    <CheckCircle size={36} className="text-accent" />
                  </div>
                  <h3 className="heading-3">Message Sent!</h3>
                  <p className="text-neutral-500 max-w-sm">
                    Thank you for reaching out. One of our agents will be in touch within 24 hours.
                  </p>
                  <button className="btn btn-secondary" onClick={() => reset()}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="heading-3 mb-1">Send Us a Message</h2>
                  <p className="text-sm text-neutral-500 mb-8">Fill out the form and we'll get back to you shortly.</p>

                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="label-text">Full Name *</label>
                        <input className="input" placeholder="John Smith" {...register('name', {required: true})} />
                      </div>
                      <div>
                        <label className="label-text">Email Address *</label>
                        <input className="input" type="email" placeholder="john@email.com" {...register("email", {required: true})} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="label-text">Phone Number</label>
                        <input className="input" type="tel" placeholder="+1 (555) 000-0000" {...register("phone", {required: true})}/>
                      </div>
                      <div>
                        <label className="label-text">I'm Interested In</label>
                        <select className="input select" {...register("interest")}>
                          <option value="">Select...</option>
                          <option value="buying">Buying a Property</option>
                          <option value="selling">Selling a Property</option>
                          <option value="renting">Renting</option>
                          <option value="investing">Investment Advice</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="label-text">Subject</label>
                      <input className="input" placeholder="How can we help you?" {...register("subject")} />
                    </div>
                    <div>
                      <label className="label-text">Message *</label>
                      <textarea className="input" rows={5}
                        placeholder="Tell us about your property goals, timeline, budget, or specific requirements..."
                        style={{ resize: 'vertical' }} {...register("message", {required: true})} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-full gap-2" disabled={status === "submitting"}>
                      <Send size={17} /> {status === "submitting"
                                            ? "Sending..."
                                            : status === "success"
                                            ? "Sent ✔"
                                            : "Send Message"}
                    </button>
                    <p className="text-xs text-neutral-400 text-center">
                      By submitting, you agree to our Privacy Policy. We never share your information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
