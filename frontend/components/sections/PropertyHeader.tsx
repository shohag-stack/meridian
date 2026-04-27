import React from 'react'
import { Property } from '@/types'
import { Map } from 'lucide-react'

export default function PropertyHeader({property}: {property: Property}) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage:`url(${property.gallery?.[0] || property.mainImage}`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div
        className="container-site relative z-10 w-full"
        style={{ paddingTop: "var(--spacing-navbar)" }}
      >
        <div className="max-w-3xl">
            <span className={`badge animate-fade-in-up delay-100 badge-${property.status === 'for-sale' ? 'sale' : 'rent'}`}>
                  {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                </span>
          {/* Headline */}
          <h1 className="text-[50px] md:text-[120px] leading-30 text-white mb-6 opacity-0 animate-fade-in-up delay-200">
            {property.title}
          </h1>

          <p className="text-xl flex gap-2 items-center font-semibold text-white leading-relaxed max-w-2xl mb-12 opacity-0 animate-fade-in-up delay-300">
            <Map /> {property.address}
          </p>
        </div>
      </div>
    </section>
  )
}
