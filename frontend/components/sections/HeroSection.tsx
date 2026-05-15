"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";

export default function HeroSection() {
  const router = useRouter();
  const [status, setStatus] = useState<"for-sale" | "for-rent">("for-sale");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [scrollY, setScrollY] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const p = new URLSearchParams();
    if (status) p.set("status", status);
    if (location) p.set("city", location);
    if (propertyType) p.set("type", propertyType);
    if (budget) p.set("maxPrice", budget);
    router.push(`/properties?${p.toString()}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      // style={{
      //   backgroundImage:
      //     "url('/img/hero.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
        loop
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <div
        className="container mx-auto absolute z-10 min-w-full"
        style={{ paddingTop: "var(--spacing-navbar)" }}
      >
        <div className="mx-auto text-center flex flex-col items-center" style={{

    transform: `translateY(${scrollY * 0.5}px)`,

  }}>
          {/* Headline */}
          <h1 className="heading-1 text-center leading-none md:text-[300px] md:leading-50 font-serif text-white mb-6 opacity-0 animate-fade-in-up delay-200">
            Meridian
          </h1>

          <p className="text-2xl text-center text-white max-w-3xl mb-12 opacity-0 animate-fade-in-up delay-300">
            Book your dream vacation today and let us take care of the rest.
          </p>
          {/* Button */}
          <button className="btn btn-secondary-outlined"> Book Rooms </button>
        </div>
      </div>
    </section>
  );
}
