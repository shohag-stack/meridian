'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import type { Property } from '@/types';
import { formatPrice, formatArea } from '@/data/data';

interface Props {
  property: Property;
  variant?: 'default' | 'horizontal';
}

export default function PropertyCard({ property, variant = 'default' }: Props) {
  const img = typeof property.mainImage === 'string'
    ? property.mainImage
    : 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop';

  if (variant === 'horizontal') {
    return (
      <Link href={`/property/${property.slug}`} className="property-card flex flex-row">
        <div className="w-64 shrink-0 relative overflow-hidden">
          <Image src={img} alt={property.title} fill className="card-img" />
          <div className="absolute top-3 left-3 flex gap-1.5">
            <span className={`badge badge-${property.status === 'for-sale' ? 'sale' : 'rent'}`}>
              {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col justify-center flex-1">
          <span className="eyebrow mb-1">{property.neighborhood || property.city}</span>
          <h3 className="heading-3 text-[var(--color-neutral-900)] mb-2">{property.title}</h3>
          <p className="text-sm text-[var(--color-neutral-500)] leading-relaxed line-clamp-2 mb-4">
            {property.shortDescription || property.description}
          </p>
          <div className="flex gap-5 mb-4 flex-wrap">
            <StatItem icon={Bed}    value={property.bedrooms}               label="beds" />
            <StatItem icon={Bath}   value={property.bathrooms}              label="baths" />
            <StatItem icon={Square} value={`${formatArea(property.area)} sqft`} />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-bold text-[var(--color-primary)]">
              {formatPrice(property.price, property.priceFrequency)}
            </span>
            <span className="flex items-center gap-1 text-xs text-[var(--color-neutral-400)]">
              <MapPin size={11} />{property.city}, {property.state}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/property/${property.slug}`} className="property-card">
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: '65%' }}>
        <Image
          src={img}
          alt={property.title}
          fill
          className="card-img"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient */}
        <div className="absolute inset-0 overlay-dark pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          <span className={`badge badge-${property.status === 'for-sale' ? 'sale' : 'rent'}`}>
            {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
          </span>
          {property.newListing && <span className="badge badge-featured">New</span>}
        </div>

        {/* Wishlist */}
        <button
          onClick={e => { e.preventDefault(); e.stopPropagation(); }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border-none flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white hover:scale-110"
          aria-label="Save property"
        >
          <Heart size={14} className="text-[var(--color-neutral-500)]" />
        </button>

        {/* Price */}
        <div className="absolute bottom-3 left-3 right-3">
          <span className="font-display text-xl font-bold text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            {formatPrice(property.price, property.priceFrequency)}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <span className="eyebrow block mb-1">{property.neighborhood || property.city}</span>

        <h3 className="font-display text-lg font-semibold text-[var(--color-neutral-900)] leading-snug mb-2 line-clamp-1">
          {property.title}
        </h3>

        <div className="flex items-center gap-1.5 mb-4">
          <MapPin size={12} className="text-[var(--color-neutral-400)] shrink-0" />
          <span className="text-sm text-[var(--color-neutral-400)] truncate">
            {property.address.split(',').slice(-2).join(',').trim()}
          </span>
        </div>

        <div className="h-px bg-[var(--color-neutral-100)] mb-4" />

        <div className="flex gap-5">
          <StatItem icon={Bed}    value={property.bedrooms}   label="Beds" />
          <StatItem icon={Bath}   value={property.bathrooms}  label="Baths" />
          <StatItem icon={Square} value={formatArea(property.area)} label="Sqft" />
        </div>
      </div>
    </Link>
  );
}

function StatItem({ icon: Icon, value, label }: { icon: typeof Bed; value: string | number; label?: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon size={13} className="text-[var(--color-neutral-400)] shrink-0" />
      <span className="text-sm font-medium text-[var(--color-neutral-600)]">
        {value}
        {label && <span className="text-[var(--color-neutral-400)] font-normal"> {label}</span>}
      </span>
    </div>
  );
}
