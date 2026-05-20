import React from "react";

export default function SectionHeader({eyebrow,title, description}: {eyebrow?: string,title?:string, description?: string}) {
  return (
    <div className="flex justify-center text-center items-end mb-14 flex-wrap gap-6">
      <div className="max-w-lg">
        <span className="eyebrow block">{eyebrow}</span>
        <h2 className="heading-2 text-neutral-950">
          {title || "Welcome to The World of Luxury and Comfort"}
        </h2>
        <p>
          {description || "Phi Phi the Beach Resort is a dream location for any visitor looking for either an eventful or relaxing holiday. Situated on the quiet Long Beach, which overlooks the stunning Maya bay island"}
        </p>
      </div>
    </div>
  );
}
