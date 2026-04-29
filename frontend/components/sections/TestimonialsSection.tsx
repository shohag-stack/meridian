import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/data';


export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden section">
      {/* Decorative blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none bg-accent" />

      <div className="container-site relative z-10">
        <div className="text-center mb-16">
          <span className="eyebrow block mb-3">Client Stories</span>
          <h2 className="heading-2 mb-4">
            What Our Clients <em className="italic">Say</em>
          </h2>
          <p className="text-neutral-700 font-semibold max-w-lg mx-auto leading-relaxed">
            Don't just take our word for it — hear from the families and investors who've trusted us with their most important decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map(t => (
            <div
              key={t._id}
              className="relative rounded-2xl p-8 backdrop-blur-xs border border-neutral-200"
            >

              <div className="flex items-center gap-4 mb-4 md:mb-20 pb-8 border-b border-b-neutral-200">
                {t.photo && (
                  <img
                    src={typeof t.photo === 'string' ? t.photo : ''}
                    alt={t.name}
                    className="w-18 h-18 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="text-xl font-semibold text-neutral-900">{t.name}</div>
                  <div className="text-md font-medium text-neutral-700 mt-0.5">
                    {t.propertyBought ? `Purchased: ${t.propertyBought}` : t.role}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-2 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="var(--color-accent)" className="text-accent" />
                ))}
              </div>

              <p className="text-xl font-semibold text-neutral-900 leading-relaxed mb-6">"{t.content}"</p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
