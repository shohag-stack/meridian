"use client";

import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square, MapPin, Users } from "lucide-react";
import type { Accommodation } from "@/types";
import { StatItem } from "./StatItem";

interface Props {
  accommodation: Accommodation;
  variant?: "default" | "horizontal";
}

export default function AccommodationCard({
  accommodation,
  variant = "default",
}: Props) {
  const img =
    typeof accommodation.mainImage === "string"
      ? accommodation.mainImage
      : "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80";

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: accommodation.currency || "USD",
    maximumFractionDigits: 0,
  }).format(accommodation.pricePerNight);

  if (variant === "horizontal") {
    return (
      <Link
        href={`/accommodations/${accommodation.slug}`}
        className="property-card flex flex-row overflow-hidden"
      >
        {/* Image */}
        <div className="w-72 shrink-0 relative overflow-hidden">
          <Image
            src={img}
            alt={accommodation.title}
            fill
            className="card-img"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Type */}
          <div className="absolute top-4 left-4">
            <span className="badge badge-rent capitalize">
              {accommodation.type.replace("-", " ")}
            </span>
          </div>

          {/* Price */}
          <div className="absolute bottom-4 left-4">
            <span className="font-display text-2xl text-white font-semibold">
              {price}
            </span>

            <p className="text-white/80 text-sm">per night</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-center flex-1">
          <span className="eyebrow mb-2">
            {accommodation.resortName}
          </span>

          <h3 className="heading-5 text-neutral-900 mb-3">
            {accommodation.title}
          </h3>

          <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 mb-5">
            {accommodation.shortDescription ||
              accommodation.description}
          </p>

          <div className="flex gap-5 mb-5 flex-wrap">
            <StatItem
              icon={Users}
              value={accommodation.guests}
              label="Guests"
            />

            {accommodation.bedrooms && (
              <StatItem
                icon={Bed}
                value={accommodation.bedrooms}
                label="Rooms"
              />
            )}

            {accommodation.bathrooms && (
              <StatItem
                icon={Bath}
                value={accommodation.bathrooms}
                label="Baths"
              />
            )}

            {accommodation.roomSize && (
              <StatItem
                icon={Square}
                value={accommodation.roomSize}
                label="Sqft"
              />
            )}
          </div>

          <div className="flex items-center gap-1.5 text-sm text-neutral-500">
            <MapPin size={16} />
            <span>
              {accommodation.city}, {accommodation.country}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/accommodations/${accommodation.slug}`}
      className="property-card group"
    >
      {/* Image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingBottom: "70%" }}
      >
        <Image
          src={img}
          alt={accommodation.title}
          fill
          className="card-img"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          <span className="badge badge-rent capitalize">
            {accommodation.type.replace("-", " ")}
          </span>

          {accommodation.newArrival && (
            <span className="badge badge-featured">
              New
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Stats */}
        <div className="flex gap-5 mb-2 flex-wrap">
          <StatItem
            icon={Users}
            value={accommodation.guests}
            label="Guests"
          />

          {accommodation.bedrooms && (
            <StatItem
              icon={Bed}
              value={accommodation.bedrooms}
              label="Rooms"
            />
          )}

          {accommodation.bathrooms && (
            <StatItem
              icon={Bath}
              value={accommodation.bathrooms}
              label="Baths"
            />
          )}
        </div>

        {/* Animated title */}
        <div className="overflow-hidden h-[2.2em] mb-2">
          <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:-translate-y-1/2">
            <h3 className="font-display text-2xl text-neutral-950 leading-tight line-clamp-1">
              {accommodation.title}
            </h3>

            <h3 className="font-display text-2xl text-neutral-950 leading-tight line-clamp-1">
              {accommodation.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <div className="flex items-center gap-1.5">
          <span className="text-md text-neutral-700 line-clamp-3 mb-8">
            {accommodation.description}
          </span>
        </div>

        <button className="btn btn-primary">
          Book Now
        </button>
      </div>
    </Link>
  );
}