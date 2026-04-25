"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";

export default function HeroSection() {
  const router = useRouter();
  const [status, setStatus] = useState<"for-sale" | "for-rent">("for-sale");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const p = new URLSearchParams();
    if (status) p.set("status", status);
    if (location) p.set("city", location);
    if (propertyType) p.set("type", propertyType);
    if (budget) p.set("maxPrice", budget);
    router.push(`/properties?${p.toString()}`);
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/img/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div
        className="container-site relative z-10 w-full"
        style={{ paddingTop: "var(--spacing-navbar)" }}
      >
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-[120px] leading-30 text-white mb-6 opacity-0 animate-fade-in-up delay-200">
            Find Your Dream Home
          </h1>

          <p className="text-xl font-semibold text-white leading-relaxed max-w-2xl mb-12 opacity-0 animate-fade-in-up delay-300">
            These should help convey a sense of aspiration and possibility,
            which are often associated with the real estate market.
          </p>
        </div>

        <div className="max-w-7xl">
          {/* Search widget */}
          <div
            className="bg-white/97 backdrop-blur-xl p-7 opacity-0 animate-fade-in-up delay-400"
            style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}
          >
            {/* Buy / Rent toggle */}
            <div className="flex gap-1 p-1 bg-neutral-100 w-fit mb-6">
              {(["for-sale", "for-rent"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={[
                    "btn btn-sm border-none transition-all duration-250",
                    status === s
                      ? "bg-primary text-white"
                      : "bg-transparent text-neutral-400",
                  ].join(" ")}
                >
                  {s === "for-sale" ? "Buy" : "Rent"}
                </button>
              ))}
            </div>

            <form onSubmit={handleSearch}>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto] gap-3 mb-3">
                {/* Location */}
                <div className="relative">
                  <MapPin
                    size={14}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                  />
                  <input
                    className="input pl-9"
                    placeholder="City or neighborhood"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                {/* Type */}
                <select
                  className="input select"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="townhouse">Townhouse</option>
                </select>
                {/* Budget */}
                <select
                  className="input select"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option value="">Max Budget</option>
                  <option value="500000">$500K</option>
                  <option value="1000000">$1M</option>
                  <option value="2000000">$2M</option>
                  <option value="5000000">$5M</option>
                  <option value="10000000">$10M+</option>
                </select>
                {/* CTA */}
                <button
                  type="submit"
                  className="btn btn-primary whitespace-nowrap"
                >
                  <Search size={15} /> Search
                </button>
              </div>
            </form>

            {/* Quick links */}
            <div className="flex gap-2 flex-wrap items-center">
              <span className="text-xs text-neutral-400">Popular:</span>
              {[
                "New York",
                "Beverly Hills",
                "Miami Beach",
                "San Francisco",
              ].map((city) => (
                <button
                  key={city}
                  onClick={() => router.push(`/properties?city=${city}`)}
                  className="text-xs text-neutral-600 border border-neutral-200 px-3 py-1 bg-transparent cursor-pointer transition-all duration-200 hover:border-accent hover:text-accent"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
