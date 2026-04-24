import type { Metadata } from 'next';
import { Award, Target, Heart, Users } from 'lucide-react';
import { AGENTS } from '@/data/data';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about EstateHaven — our story, our team, and our commitment to exceptional real estate service.',
};

const VALUES = [
  { icon: Target, title: 'Precision',   description: 'We approach every transaction with meticulous attention to detail and a commitment to getting it right.'        },
  { icon: Heart,  title: 'Integrity',   description: 'Honesty and transparency are the foundation of every relationship we build with our clients.'                   },
  { icon: Users,  title: 'Partnership', description: 'We work alongside you as true partners — not just agents — invested in your success.'                           },
  { icon: Award,  title: 'Excellence',  description: 'We hold ourselves to the highest standards in everything we do, from service to results.'                       },
];

const MILESTONES = [
  { year: '2009', event: 'EstateHaven Founded',   desc: 'Started with a small team of three agents and a vision for better real estate service.'             },
  { year: '2013', event: '$500M in Sales',         desc: 'Reached our first half-billion milestone, establishing our reputation in the luxury market.'        },
  { year: '2017', event: 'National Expansion',     desc: 'Expanded operations to 12 major markets across the United States.'                                  },
  { year: '2021', event: '2,000 Properties Sold',  desc: 'A landmark achievement — 2,000 families helped find their perfect home.'                            },
  { year: '2024', event: '$4.2B Total Volume',      desc: 'Now one of the most recognised luxury real estate firms in the country.'                            },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-header">
        <div className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop)' }} />
        <div className="container-site relative z-10 max-w-2xl">
          <span className="eyebrow block mb-3">Our Story</span>
          <h1 className="heading-1 text-white mb-6">Redefining the Real Estate Experience</h1>
          <span className="divider-accent block mb-6" />
          <p className="text-xl text-white/70 leading-relaxed">
            Since 2009, EstateHaven has been connecting discerning buyers and sellers with exceptional properties — and delivering a level of service that turns transactions into lifelong relationships.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="eyebrow block mb-3">Our Mission</span>
              <h2 className="heading-1 mb-6">
                More Than Transactions —<br />
                <em className="italic text-[var(--color-accent)]">We Build Legacies</em>
              </h2>
              <span className="divider-accent block mb-6" />
              <p className="text-lg text-[var(--color-neutral-500)] leading-relaxed mb-5">
                We believe that finding the right home is one of life's most meaningful experiences. Our mission is to make that process extraordinary — combining market expertise, personal attention, and access to the finest properties.
              </p>
              <p className="text-[var(--color-neutral-500)] leading-relaxed">
                Every client receives our full commitment. We don't just find properties — we listen deeply, understand your vision, and work tirelessly until we've found the perfect match.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop"
                alt="Our team"
                className="w-full rounded-3xl block"
                style={{ boxShadow: 'var(--shadow-glass)' }}
              />
              <div className="absolute -bottom-6 -left-6 bg-[var(--color-accent)] rounded-2xl px-8 py-6"
                style={{ boxShadow: '0 16px 40px rgba(200,169,110,0.4)' }}>
                <div className="font-display text-4xl font-bold text-white leading-none">15+</div>
                <div className="text-sm text-white/80 mt-1">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-cream">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-3">What Drives Us</span>
            <h2 className="heading-1">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-[var(--color-neutral-200)]"
                style={{ boxShadow: 'var(--shadow-card)' }}>
                <div className="w-14 h-14 rounded-xl bg-[var(--color-cream)] border border-[var(--color-neutral-200)] flex items-center justify-center mb-6">
                  <Icon size={24} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-[var(--color-neutral-500)] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-3">Our Journey</span>
            <h2 className="heading-1">Milestones That Matter</h2>
          </div>
          <div className="max-w-2xl mx-auto relative">
            {/* Spine line */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-[var(--color-neutral-200)]"
              style={{ left: 'calc(6rem + 1px)' }} />
            <div className="flex flex-col gap-10">
              {MILESTONES.map(({ year, event, desc }) => (
                <div key={year} className="flex gap-8 items-start">
                  <div className="w-24 shrink-0 text-right font-display text-xl font-bold text-[var(--color-accent)] pt-0.5">
                    {year}
                  </div>
                  <div className="relative pl-8">
                    {/* Dot */}
                    <div className="absolute -left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--color-accent)]"
                      style={{ boxShadow: '0 0 0 3px var(--color-off-white), 0 0 0 5px var(--color-accent)' }} />
                    <h3 className="font-display text-lg font-semibold mb-1">{event}</h3>
                    <p className="text-sm text-[var(--color-neutral-500)] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-cream" id="team">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-3">The People Behind It All</span>
            <h2 className="heading-1">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AGENTS.map(agent => (
              <div key={agent._id} className="bg-white rounded-2xl overflow-hidden border border-[var(--color-neutral-200)]"
                style={{ boxShadow: 'var(--shadow-card)' }}>
                <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
                  <img
                    src={typeof agent.photo === 'string' ? agent.photo : ''}
                    alt={agent.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="divider-accent block mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-1">{agent.name}</h3>
                  <p className="eyebrow mb-4">{agent.title}</p>
                  {agent.bio && <p className="text-sm text-[var(--color-neutral-500)] leading-relaxed mb-5">{agent.bio}</p>}
                  <div className="flex gap-6">
                    {agent.listings && (
                      <div>
                        <div className="font-display text-xl font-bold text-[var(--color-primary)]">{agent.listings}</div>
                        <div className="text-xs text-[var(--color-neutral-400)] uppercase tracking-wider">Active</div>
                      </div>
                    )}
                    {agent.soldProperties && (
                      <div>
                        <div className="font-display text-xl font-bold text-[var(--color-primary)]">{agent.soldProperties}</div>
                        <div className="text-xs text-[var(--color-neutral-400)] uppercase tracking-wider">Sold</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
