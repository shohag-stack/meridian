import React from "react";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/data";
import Link from "next/link";
import Image from "next/image";

export default function Facilities() {
  return (
    <div className="facilities section bg-neutral-50">
      <div className="container-site">
        <SectionHeader
          eyebrow="Facilities & Services"
          title="Everything You Need, Right
                Where You Stay"
          description="Enjoy the comforts of home with the luxury of a resort. From fully equipped kitchens and laundry machines to daily housekeeping and butler services, every detail is designed to elevate your stay. Relax on the terrace."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-2">
        {experiences.map((exp) => (
          <Link
            key={exp.label}
            href={exp.href ?? "#"}
            className={[
              "group relative overflow-hidden cursor-pointer",
              exp.span === "wide" ? "col-span-2" : "col-span-1",
              // Fixed heights per row
              "h-[550px]",
            ].join(" ")}
          >
            {/* Image */}
            <Image
              src={exp.image}
              alt={exp.label}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Dark gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-6/12 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

            {/* Label */}
            <div className="absolute bottom-6 left-6">
              <span className="font-display text-white text-2xl md:text-3xl uppercase">
                {exp.label}
              </span>
            </div>
          </Link>
        ))}
      </div>

      </div>
    </div>
  );
}
