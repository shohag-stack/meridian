import { VALUES } from "@/data/page/about";
import Image from "next/image";
import React from "react";

export default function Values() {
  return (
    <section className="section-dark">
      <div className="w-full">
        <div className="text-center mb-16">
          <span className="eyebrow block mb-3">What Drives Us</span>
          <h2 className="heading-2 text-neutral-50">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ image, title, description }) => (
            <div key={title} className="relative h-150 overflow-hidden group">
              <Image
                src={image}
                alt="rayso-studio-real-estate-estate-heaven"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 group-hover:bg-black/20 transition-all" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute inset-0 z-10 flex flex-col justify-end text-white p-10">
                <div className="overflow-hidden h-[2.5em]">
                  <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:-translate-y-3/6">
                    {/* Original */}
                    <h3 className="font-display heading-4 font-semibold mb-3">
                      {title}
                    </h3>

                    {/* Duplicate */}
                    <h3 className="font-display heading-4 font-semibold mb-3">
                      {title}
                    </h3>
                  </div>
                </div>
                <p className="text-md font-medium text-neutral-50 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
