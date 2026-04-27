"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback } from "react";
import Image from "next/image";
import { SliderImage } from "@/types/index";

export default function PropertySlider({
  sliders,
}: {
  sliders: SliderImage[];
}) {
  const autoplay = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
  });
  const [emblaImageRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [autoplay],
  );

  const [emblaThumbRef, emblaThumbApi] = useEmblaCarousel({});

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !emblaThumbApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, emblaThumbApi],
  );

  return (
    <div>
      <div className="embla relative">
        <div className="embla__viewport" ref={emblaImageRef}>
          <div className="embla__container">
            {sliders.map((item, idx) => (
              <div
                className="w-full embla_slide overflow-hidden relative h-[200px] md:h-[600px]"
                key={idx}
              >
                {item?.asset?.url && (
                  <Image
                    src={item.asset.url}
                    fill
                    alt={idx.toString()}
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center embla embla_thumb">
              <div className="embla__viewport" ref={emblaThumbRef}>
                <div className="embla__container">
                  {sliders.map((item, index) => (
                    <div
                      key={index}
                      className="embla_slide cursor-pointer relative h-[100px] w-[150px] p-2 border border-white"
                      onClick={() => onThumbClick(index)}
                    >
                      {item?.asset?.url && (
                        <Image
                          src={item.asset.url}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}
