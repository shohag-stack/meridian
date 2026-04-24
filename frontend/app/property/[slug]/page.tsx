import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Bed, Bath, Square, Car, MapPin, Calendar,
  CheckCircle, Phone, Mail, Share2, Heart, ChevronRight
} from 'lucide-react';
import PropertyCard from '@/components/ui/PropertyCard';
import { PROPERTIES, formatPrice, formatArea, getPropertyTypeLabel, formatDate } from '@/data/data';
import type { Metadata } from 'next';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return PROPERTIES.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = PROPERTIES.find(p => p.slug === slug);
  if (!property) return { title: 'Property Not Found' };
  return { title: property.title, description: property.shortDescription || property.description.slice(0, 160) };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = PROPERTIES.find(p => p.slug === slug);
  if (!property) notFound();

  const agent   = property.agent;
  const gallery = [
    typeof property.mainImage === 'string' ? property.mainImage : '',
    ...(property.gallery?.map(g => typeof g === 'string' ? g : '') ?? []),
  ].filter(Boolean);

  const related = PROPERTIES.filter(p => p._id !== property._id && p.city === property.city).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[var(--color-primary)]" style={{ paddingTop: 'calc(var(--spacing-navbar) + 1.5rem)', paddingBottom: '1.5rem' }}>
        <div className="container-site">
          <nav className="flex items-center gap-2 text-sm text-white/50 flex-wrap">
            <Link href="/"           className="text-white/50 no-underline hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link href="/properties" className="text-white/50 no-underline hover:text-white/80 transition-colors">Properties</Link>
            <ChevronRight size={13} />
            <span className="text-white/85 truncate max-w-xs">{property.title}</span>
          </nav>
        </div>
      </div>

      <div className="container-site pt-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">

          {/* ─── LEFT ─────────────────────────────────────────── */}
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className={`badge badge-${property.status === 'for-sale' ? 'sale' : 'rent'}`}>
                  {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                </span>
                <span className="badge badge-outline">{getPropertyTypeLabel(property.type)}</span>
                {property.newListing && <span className="badge badge-featured">New Listing</span>}
              </div>

              <h1 className="heading-1 mb-3">{property.title}</h1>

              <div className="flex items-center gap-2 text-[var(--color-neutral-400)] mb-5">
                <MapPin size={14} className="shrink-0" />
                <span className="text-base">{property.address}, {property.city}, {property.state} {property.zipCode}</span>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="font-display text-4xl font-bold text-[var(--color-primary)]">
                  {formatPrice(property.price, property.priceFrequency)}
                </span>
                <div className="flex gap-3">
                  <button className="btn btn-ghost btn-sm gap-1.5"><Heart size={14}/> Save</button>
                  <button className="btn btn-ghost btn-sm gap-1.5"><Share2 size={14}/> Share</button>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-10 rounded-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-glass)' }}>
              <div className="relative w-full" style={{ paddingBottom: '56%' }}>
                <img
                  src={gallery[0] || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=700&fit=crop'}
                  alt={property.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {gallery.length > 1 && (
                <div className={`grid gap-1`} style={{ gridTemplateColumns: `repeat(${Math.min(gallery.length - 1, 4)}, 1fr)` }}>
                  {gallery.slice(1, 5).map((img, i) => (
                    <div key={i} className="relative cursor-pointer overflow-hidden" style={{ paddingBottom: '66%' }}>
                      <img src={img} alt={`View ${i + 2}`} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-400" />
                      {i === 3 && gallery.length > 5 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">+{gallery.length - 5} more</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
              {[
                { icon: Bed,      value: property.bedrooms,                   label: 'Bedrooms'   },
                { icon: Bath,     value: property.bathrooms,                  label: 'Bathrooms'  },
                { icon: Square,   value: `${formatArea(property.area)} sqft`, label: 'Living Area'},
                ...(property.garages   ? [{ icon: Car,      value: property.garages,   label: 'Garages'    }] : []),
                ...(property.yearBuilt ? [{ icon: Calendar,  value: property.yearBuilt, label: 'Year Built' }] : []),
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-white border border-[var(--color-neutral-200)] rounded-xl p-5 text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <Icon size={20} className="text-[var(--color-accent)] mx-auto mb-2" />
                  <div className="font-display text-xl font-bold text-[var(--color-primary)] mb-1">{value}</div>
                  <div className="text-xs text-[var(--color-neutral-400)] uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mb-10">
              <h2 className="heading-2 mb-4">About This Property</h2>
              <span className="divider-accent block mb-6" />
              <p className="text-lg text-[var(--color-neutral-500)] leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            {property.features && property.features.length > 0 && (
              <div className="mb-10">
                <h2 className="heading-2 mb-4">Features & Amenities</h2>
                <span className="divider-accent block mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {property.features.map(feat => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <CheckCircle size={15} className="text-[var(--color-accent)] shrink-0" />
                      <span className="text-sm font-medium text-[var(--color-neutral-900)]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Details table */}
            <div className="mb-14">
              <h2 className="heading-2 mb-4">Property Details</h2>
              <span className="divider-accent block mb-6" />
              <div className="bg-white border border-[var(--color-neutral-200)] rounded-2xl overflow-hidden">
                {[
                  { label: 'Property Type', value: getPropertyTypeLabel(property.type) },
                  { label: 'Status',        value: property.status === 'for-sale' ? 'For Sale' : 'For Rent' },
                  { label: 'Bedrooms',      value: property.bedrooms    },
                  { label: 'Bathrooms',     value: property.bathrooms   },
                  { label: 'Living Area',   value: `${formatArea(property.area)} sq ft` },
                  ...(property.lotSize   ? [{ label: 'Lot Size',    value: `${formatArea(property.lotSize)} sq ft` }] : []),
                  ...(property.yearBuilt ? [{ label: 'Year Built',  value: property.yearBuilt  }] : []),
                  ...(property.floors    ? [{ label: 'Floors',      value: property.floors     }] : []),
                  { label: 'City',     value: `${property.city}, ${property.state}` },
                  { label: 'Zip Code', value: property.zipCode },
                  ...(property.neighborhood ? [{ label: 'Neighborhood', value: property.neighborhood }] : []),
                  { label: 'Listed',   value: formatDate(property.createdAt) },
                ].map(({ label, value }, i) => (
                  <div
                    key={label}
                    className={`flex justify-between items-center px-5 py-3.5 border-b border-[var(--color-neutral-100)] last:border-b-0 ${i % 2 === 1 ? 'bg-[var(--color-neutral-50)]' : 'bg-transparent'}`}
                  >
                    <span className="text-sm text-[var(--color-neutral-400)]">{label}</span>
                    <span className="text-sm font-semibold text-[var(--color-neutral-900)]">{String(value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── RIGHT SIDEBAR ────────────────────────────────── */}
          <div className="sticky" style={{ top: 'calc(var(--spacing-navbar) + 2rem)' }}>
            {agent && (
              <div className="bg-white rounded-2xl border border-[var(--color-neutral-200)] overflow-hidden mb-5"
                style={{ boxShadow: 'var(--shadow-card)' }}>
                {/* Top accent bar */}
                <div className="h-1.5" style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }} />
                <div className="p-7">
                  <div className="flex gap-4 items-center mb-6">
                    <img
                      src={typeof agent.photo === 'string' ? agent.photo : ''}
                      alt={agent.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[var(--color-accent)]"
                    />
                    <div>
                      <div className="font-display font-semibold text-lg text-[var(--color-neutral-900)]">{agent.name}</div>
                      <div className="text-sm text-[var(--color-neutral-400)] mb-1">{agent.title}</div>
                      <div className="flex gap-4">
                        {agent.listings      && <span className="text-xs text-[var(--color-neutral-400)]"><b className="text-[var(--color-primary)]">{agent.listings}</b> listings</span>}
                        {agent.soldProperties && <span className="text-xs text-[var(--color-neutral-400)]"><b className="text-[var(--color-primary)]">{agent.soldProperties}</b> sold</span>}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mb-4">
                    <input className="input" placeholder="Your Name" />
                    <input className="input" type="email" placeholder="Email Address" />
                    <input className="input" type="tel" placeholder="Phone Number" />
                    <textarea
                      className="input"
                      rows={3}
                      placeholder={`I'm interested in ${property.title}...`}
                      style={{ resize: 'none' }}
                    />
                    <button className="btn btn-primary w-full">Send Message</button>
                  </div>

                  <div className="flex gap-3">
                    <a href={`tel:${agent.phone}`} className="btn btn-ghost btn-sm flex-1 gap-1.5">
                      <Phone size={13}/> Call
                    </a>
                    <a href={`mailto:${agent.email}`} className="btn btn-ghost btn-sm flex-1 gap-1.5">
                      <Mail size={13}/> Email
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Schedule tour */}
            <div className="bg-[var(--color-primary)] rounded-2xl p-7 text-white">
              <h3 className="font-display text-xl font-semibold mb-2">Schedule a Tour</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                See this property in person. Our agents are available 7 days a week.
              </p>
              <Link href="/contact"
                className="btn btn-primary w-full"
                style={{ background: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}>
                Book a Viewing
              </Link>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24">
            <span className="eyebrow block mb-2">More in {property.city}</span>
            <h2 className="heading-2 mb-10">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {related.map(p => <PropertyCard key={p._id} property={p} />)}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
