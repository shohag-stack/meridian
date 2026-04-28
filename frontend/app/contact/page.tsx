'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', interest: '' });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

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
              <div className="rounded-2xl border border-neutral-200 h-56 bg-neutral-100 flex flex-col items-center justify-center gap-3">
                <MapPin size={30} className="text-accent" />
                <span className="text-sm text-neutral-400">Map integration goes here</span>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center gap-5">
                  <div className="w-18 h-18 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(45,122,79,0.1)' }}>
                    <CheckCircle size={36} className="text-success" />
                  </div>
                  <h3 className="heading-3">Message Sent!</h3>
                  <p className="text-neutral-500 max-w-sm">
                    Thank you for reaching out. One of our agents will be in touch within 24 hours.
                  </p>
                  <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="heading-3 mb-1">Send Us a Message</h2>
                  <p className="text-sm text-neutral-500 mb-8">Fill out the form and we'll get back to you shortly.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="label-text">Full Name *</label>
                        <input className="input" placeholder="John Smith" required
                          value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                      </div>
                      <div>
                        <label className="label-text">Email Address *</label>
                        <input className="input" type="email" placeholder="john@email.com" required
                          value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="label-text">Phone Number</label>
                        <input className="input" type="tel" placeholder="+1 (555) 000-0000"
                          value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                      </div>
                      <div>
                        <label className="label-text">I'm Interested In</label>
                        <select className="input select" value={form.interest}
                          onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}>
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
                      <input className="input" placeholder="How can we help you?"
                        value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
                    </div>
                    <div>
                      <label className="label-text">Message *</label>
                      <textarea className="input" rows={5} required
                        placeholder="Tell us about your property goals, timeline, budget, or specific requirements..."
                        style={{ resize: 'vertical' }}
                        value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-full gap-2">
                      <Send size={17} /> Send Message
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
