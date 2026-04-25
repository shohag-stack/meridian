import { Award, Users, Home, TrendingUp, Shield, Star } from 'lucide-react';

const STATS = [
  { value: '2,400+', label: 'Properties Sold',     icon: Home       },
  { value: '1,200+', label: 'Happy Clients',        icon: Users      },
  { value: '15+',    label: 'Years of Experience',  icon: Award      },
  { value: '$4.2B',  label: 'In Sales Volume',      icon: TrendingUp },
];

const WHY_US = [
  { icon: Star,       title: 'Exclusive Listings',   description: 'Access to off-market properties and exclusive listings not available through traditional channels.'          },
  { icon: Shield,     title: 'Expert Guidance',       description: 'Our seasoned advisors guide you through every step with market expertise and white-glove service.'          },
  { icon: TrendingUp, title: 'Investment Intelligence',description: 'Data-driven insights to help you make informed decisions that maximise your investment potential.'           },
  { icon: Users,      title: 'Dedicated Support',     description: 'Your personal agent is available around the clock to answer questions and provide updates.'                 },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center px-4">
              <div className="w-13 h-13 rounded-xl mx-auto mb-5 flex items-center justify-center"
                style={{ background: 'rgba(200,169,110,0.15)', border: '1px solid rgba(200,169,110,0.3)' }}>
                <Icon size={22} className="text-accent" />
              </div>
              <div className="font-display text-4xl font-bold text-white leading-none mb-2">{value}</div>
              <div className="text-xs text-white/55 uppercase tracking-[0.15em]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUsSection() {
  return (
    <section className="section-cream">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left copy */}
          <div>
            <span className="eyebrow block mb-3">Why Choose Us</span>
            <h2 className="heading-1 text-neutral-900 mb-6">
              The EstateHaven<br />
              <em className="italic text-accent">Difference</em>
            </h2>
            <span className="divider-accent" />
            <p className="text-lg text-neutral-500 leading-relaxed mt-6 mb-10">
              We combine decades of market expertise with a deeply personal approach to help you find — or sell — a home that exceeds your expectations.
            </p>
            <div className="flex flex-col gap-6">
              {WHY_US.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0"
                    style={{ boxShadow: 'var(--shadow-card)' }}>
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-neutral-900 mb-1">{title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right collage */}
          <div className="relative h-[560px] hidden lg:block">
            <div className="absolute top-0 left-0 w-[68%] h-[62%] rounded-3xl overflow-hidden"
              style={{ boxShadow: 'var(--shadow-glass)' }}>
              <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500&h=400&fit=crop"
                alt="Luxury interior" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-[58%] h-[52%] rounded-3xl overflow-hidden"
              style={{ boxShadow: 'var(--shadow-glass)' }}>
              <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=500&h=400&fit=crop"
                alt="Modern home" className="w-full h-full object-cover" />
            </div>
            {/* Badge */}
            <div className="absolute bottom-[20%] left-[2%] bg-accent rounded-2xl px-6 py-5"
              style={{ boxShadow: '0 12px 32px rgba(200,169,110,0.4)' }}>
              <div className="font-display text-3xl font-bold text-white leading-none">15+</div>
              <div className="text-xs text-white/80 uppercase tracking-wider mt-1">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
