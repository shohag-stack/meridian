import { MILESTONES } from "@/data/page/about";
import React from "react";

export default function Timeline() {
  return (
    <section className="section">
      <div className="container-site">
        <div className="text-center mb-16">
          <span className="eyebrow block mb-3">Our Journey</span>
          <h2 className="heading-2">Milestones That Matter</h2>
        </div>
        <div className="max-w-2xl mx-auto relative">
          <div className="flex flex-col">
            {MILESTONES.map(({ year, event, desc }, i) => (
              <div
                key={year}
                className="relative bg-white p-8 flex flex-col items-start gap-6
                   border border-neutral-100
                   -mt-6 first:mt-0
                   transition-all duration-500 ease-out
                   hover:-translate-y-3 hover:shadow-xl
                   hover:bg-accent group"
                style={{ zIndex: 10 + i }}
              >
                <div
                  className="shrink-0 text-right font-display heading-5 font-bold text-accent pt-0.5 transition-colors duration-500
                    group-hover:text-neutral-950"
                >
                  {year}
                </div>
                <div className="relative">
                  <h3 className="font-display heading-5 font-semibold mb-1">
                    {event}
                  </h3>
                  <p className="text-base text-neutral-700 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
