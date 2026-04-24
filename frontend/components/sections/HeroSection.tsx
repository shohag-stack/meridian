'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin } from 'lucide-react';

export default function HeroSection() {
  const router = useRouter();
  const [status, setStatus]           = useState<'for-sale' | 'for-rent'>('for-sale');
  const [location, setLocation]       = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget]           = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const p = new URLSearchParams();
    if (status)       p.set('status',   status);
    if (location)     p.set('city',     location);
    if (propertyType) p.set('type',     propertyType);
    if (budget)       p.set('maxPrice', budget);
    router.push(`/properties?${p.toString()}`);
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 overlay-solid" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,20,35,0.2) 0%, transparent 60%)' }} />

      {/* Left accent line */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-[var(--color-accent)]" />

      <div className="container-site relative z-10 w-full" style={{ paddingTop: 'var(--spacing-navbar)' }}>
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-3 mb-6 opacity-0 animate-fade-in-up delay-100"
          >
            <div className="w-0.5 h-5 bg-[var(--color-accent)]" />
            <span className="eyebrow text-[var(--color-accent-light)]">Premium Real Estate</span>
          </div>

          {/* Headline */}
          <h1
            className="display-1 text-white mb-6 opacity-0 animate-fade-in-up delay-200"
          >
            Find Your<br />
            <em className="text-[var(--color-accent-light)] italic">Dream Home</em><br />
            With Us
          </h1>

          <p className="text-lg text-white/70 leading-relaxed max-w-lg mb-12 opacity-0 animate-fade-in-up delay-300">
            Explore an exclusive collection of luxury properties, handpicked by our expert team to match your vision of the perfect home.
          </p>

          {/* Search widget */}
          <div className="bg-white/97 backdrop-blur-xl rounded-3xl p-7 max-w-2xl opacity-0 animate-fade-in-up delay-400"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.25)' }}>

            {/* Buy / Rent toggle */}
            <div className="flex gap-1 p-1 bg-[var(--color-neutral-100)] rounded-full w-fit mb-6">
              {(['for-sale', 'for-rent'] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={[
                    'btn btn-sm rounded-full border-none transition-all duration-250',
                    status === s
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-transparent text-[var(--color-neutral-400)]',
                  ].join(' ')}
                >
                  {s === 'for-sale' ? 'Buy' : 'Rent'}
                </button>
              ))}
            </div>

            <form onSubmit={handleSearch}>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto] gap-3 mb-3">
                {/* Location */}
                <div className="relative">
                  <MapPin size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-neutral-400)] pointer-events-none" />
                  <input
                    className="input pl-9"
                    placeholder="City or neighborhood"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                  />
                </div>
                {/* Type */}
                <select className="input select" value={propertyType} onChange={e => setPropertyType(e.target.value)}>
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="townhouse">Townhouse</option>
                </select>
                {/* Budget */}
                <select className="input select" value={budget} onChange={e => setBudget(e.target.value)}>
                  <option value="">Max Budget</option>
                  <option value="500000">$500K</option>
                  <option value="1000000">$1M</option>
                  <option value="2000000">$2M</option>
                  <option value="5000000">$5M</option>
                  <option value="10000000">$10M+</option>
                </select>
                {/* CTA */}
                <button type="submit" className="btn btn-primary whitespace-nowrap">
                  <Search size={15} /> Search
                </button>
              </div>
            </form>

            {/* Quick links */}
            <div className="flex gap-2 flex-wrap items-center">
              <span className="text-xs text-[var(--color-neutral-400)]">Popular:</span>
              {['New York', 'Beverly Hills', 'Miami Beach', 'San Francisco'].map(city => (
                <button
                  key={city}
                  onClick={() => router.push(`/properties?city=${city}`)}
                  className="text-xs text-[var(--color-neutral-600)] border border-[var(--color-neutral-200)] rounded-full px-3 py-1 bg-transparent cursor-pointer transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Floating stats — bottom right */}
        <div className="absolute bottom-12 right-10 hidden lg:flex flex-col items-end gap-6 opacity-0 animate-fade-in-up delay-500">
          {[
            { value: '2,400+', label: 'Properties Sold' },
            { value: '$4.2B',  label: 'Total Value'     },
            { value: '98%',    label: 'Client Satisfaction' },
          ].map(stat => (
            <div key={stat.label} className="text-right">
              <div className="font-display text-3xl font-bold text-white leading-none">{stat.value}</div>
              <div className="text-xs text-white/50 uppercase tracking-[0.15em] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40">
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }} />
      </div>
    </section>
  );
}
