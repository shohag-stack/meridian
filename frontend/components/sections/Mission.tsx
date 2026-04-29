import Image from "next/image";
import React from "react";

export default function Mission() {
  return (
    <section className="section">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="eyebrow block mb-3">Our Mission</span>
            <h2 className="heading-2 mb-6">
              More Than Transactions We Build Legacies
            </h2>
            <p className="text-xl text-neutral-900 font-semibold leading-relaxed mb-5">
              We believe that finding the right home is one of life's most
              meaningful experiences. Our mission is to make that process
              extraordinary — combining market expertise, personal attention,
              and access to the finest properties.
            </p>
            <p className="text-neutral-700 font-medium leading-relaxed">
              Every client receives our full commitment. We don't just find
              properties — we listen deeply, understand your vision, and work
              tirelessly until we've found the perfect match.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-ratio-3/4 relative h-[700px] overflow-hidden">
              <Image
                src="/img/about-page.png"
                alt="Our team"
                className="block object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
