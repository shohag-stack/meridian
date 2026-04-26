import { Award, Users, Home, TrendingUp, Shield, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const STATS = [
  { value: '2,400+', label: 'Properties Sold',      description: "Delivering timeless, functional spaces through innovation, precision, and client-focused design excellence."     },
  { value: '1,200+', label: 'Happy Clients',       description: "Delivering timeless, functional spaces through innovation, precision, and client-focused design excellence." },
  { value: '15+',    label: 'Years of Experience',description: "Delivering timeless, functional spaces through innovation, precision, and client-focused design excellence." },
  { value: '$4.2B',  label: 'In Sales Volume',     description: "Delivering timeless, functional spaces through innovation, precision, and client-focused design excellence." },
];

const WHY_US = [
  { icon: Star,       title: 'Exclusive Listings',   description: 'Access to off-market properties and exclusive listings not available through traditional channels.'          },
  { icon: Shield,     title: 'Expert Guidance',       description: 'Our seasoned advisors guide you through every step with market expertise and white-glove service.'          },
  { icon: Users,      title: 'Dedicated Support',     description: 'Your personal agent is available around the clock to answer questions and provide updates.'                 },
];

export function StatsSection() {
  return (
    <section className="section">
      <div className="container-site">

        <div className="flex items-start mb-24 flex-wrap gap-10 md:gap-30">
          <div className='w-full lg:w-[35%] shrink-0 aspect-3/4 relative'>
            <Image fill alt='about us' src={'/img/about-stats.jpg'} />
          </div>
          <div className='flex-1'>
            <span className="eyebrow block mb-3">About us</span>
            <h3 className="heading-4 text-neutral-900">
              We believe great architecture begins with a deep understanding of people, place, and purpose. Every line we draw & every material we choose is by a commitment to timeless design.
            </h3>
            <button className='btn btn-lg btn-primary mt-20'>
                know more about us
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ value, label, description }) => (
            <div key={label} className="text-left px-4">
              <div className="font-display heading-3 font-medium leading-none mb-4">{value}</div>
              <div className="text-xl font-bold text-neutral-900 mb-2">{label}</div>
              <div className='w-full h-[1px] my-4 bg-neutral-200'/>
              <div className="text-base font-medium text-neutral-700">{description}</div>
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
              The EstateHaven Difference
            </h2>
            <p className="text-lg font-medium text-neutral-700 leading-relaxed mt-6 mb-10">
              We combine decades of market expertise with a deeply personal approach to help you find — or sell — a home that exceeds your expectations.
            </p>
            <div className="flex flex-col gap-10">
              {WHY_US.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-8">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h3 className="text-2xl font-display font-semibold text-neutral-900 mb-1">{title}</h3>
                    <p className="text-md text-neutral-700 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right collage */}
          <div className="relative h-[560px] hidden lg:block">
            <div className="absolute top-0 left-0 w-[68%] h-[62%] overflow-hidden"
              >
              <Image fill src="/img/why-choose-1.png"
                alt="Luxury interior" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-[70%] h-[70%] overflow-hidden"
              >
              <Image fill src="/img/why-choose-2.png"
                alt="Modern home" className="w-full h-full object-cover" />
            </div>
            {/* Badge */}
            <div className="absolute bottom-[20%] left-[2%] bg-accent rounded-2xl px-6 py-5"
              style={{ boxShadow: '0 12px 32px rgba(200,169,110,0.4)' }}>
              <div className="font-display text-6xl font-semibold text-white leading-none">15+</div>
              <div className="text-base font-bold text-white/80 uppercase tracking-wider mt-1">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
