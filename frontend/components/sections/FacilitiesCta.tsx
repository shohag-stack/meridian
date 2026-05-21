'use client'

import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function FacilitiesCta() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = window.innerHeight - rect.top;

      const speed = progress * 0.30;

      if (imageInnerRef.current) {
        imageInnerRef.current.style.transform =
          `translateY(${speed * 0.20}px) scale(1.5)`;
      }

      if (containerRef.current) {
        containerRef.current.style.transform =
          `translateY(${speed * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen bg-primary relative overflow-hidden"
    >
      {/* Background FIXED WRAPPER */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={imageInnerRef}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/img/facilities-cta.jpg"
            alt="facilities-cta"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div
        ref={containerRef}
        className="absolute inset-0 mt-24 z-20 flex items-start will-change-transform"
      >
        <div className="container-site">
          <div className="bg-neutral-50 w-fit p-8">
            <h1 className="heading-2">Need Any Tour Plan?</h1>
            <p className="max-w-lg">
              Travel is not just about seeing iconic landmarks or ticking
              destinations off a list it’s about the emotions.
            </p>
            <button className="btn btn-primary">Book Your Stay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}