import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/data';

export default function TestimonialsSection() {
  return (
    <section className="section-dark relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(200,169,110,0.05)' }} />

      <div className="container-site relative z-10">
        <div className="text-center mb-16">
          <span className="eyebrow block mb-3">Client Stories</span>
          <h2 className="heading-1 text-white mb-4">
            What Our Clients <em className="italic text-accent-light">Say</em>
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Don't just take our word for it — hear from the families and investors who've trusted us with their most important decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map(t => (
            <div
              key={t._id}
              className="relative rounded-2xl p-8 backdrop-blur-xs"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Quote size={26} className="text-accent opacity-50 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} fill="var(--color-accent)" className="text-accent" />
                ))}
              </div>

              <p className="text-sm text-white/70 leading-relaxed mb-6">"{t.content}"</p>

              <div className="flex items-center gap-3">
                {t.photo && (
                  <img
                    src={typeof t.photo === 'string' ? t.photo : ''}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-accent/40"
                  />
                )}
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/40 mt-0.5">
                    {t.propertyBought ? `Purchased: ${t.propertyBought}` : t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
