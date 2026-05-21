"use client";
import { galleryCategory } from "@/data/data";
import { useState } from "react";
import Gallery from "../ui/Gallery";
import { Galleries } from "@/types";

export default function GalleryContainer({
  filteredGalleries,
}: {
  filteredGalleries: Galleries;
}) {
  const [active, setActive] = useState<string>();
  return (
    <div className="container-site">
      <div className="section">
        <div className="sticky top-[95px] z-50 bg-neutral-50/90 backdrop-blur-md">
          <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide bg-neutral-50 py-2">
            {galleryCategory.map((item, i) => (
              <button
                onClick={() => {
                  setActive(item._id);
                  document.getElementById(item.slug)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`px-6 py-4 ${active === item._id ? "bg-primary text-neutral-50" : "bg-neutral-50 text-neutral-950"} transition`}
                key={item._id}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div>
          {filteredGalleries.map((item, i) => (
            <Gallery key={item._id} gallery={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
