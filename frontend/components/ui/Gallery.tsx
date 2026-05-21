import { Gallery as galleryTypes } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  gallery: galleryTypes;
};

export default function Gallery({ gallery }: Props) {
  return (
    <div id={gallery.slug} className="py-15">
      <h2 className="heading-2">{gallery.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {gallery.images?.map((img, i) => (
          <div key={img._id} className="aspect-3/4 relative overflow-hidden">
            <Image
              className="object-cover"
              src={img.url}
              fill
              alt={img._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
