"use client";
import { Accommodation } from "@/types";
import useEmblaCarousel from "embla-carousel-react";
import { MoveLeft, MoveRight } from "lucide-react";

export default function AccommodationSlider({
  accommodation,
}: {
  accommodation: Accommodation;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false });

  const goToPrev = () => {
    emblaApi?.scrollPrev();
  };

  const goToNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <div>
      <div className="embla relative">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {accommodation.gallery?.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_70%] md:flex-[0_0_70%] px-1 relative"
              >
                <div className="overflow-hidden">
                  <img
                    src={image.url}
                    alt=""
                    className="w-full h-[500px] object-cover"
                  />
                    {image.label && (
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-50 heading-1 font-medium">
                        {image.label}
                      </div>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 flex justify-between w-full">
          <button className="embla__prev slide-btn" onClick={goToPrev}>
            <MoveLeft/>
          </button>
          <button className="embla__next slide-btn" onClick={goToNext}>
            <MoveRight/>
          </button>
        </div>
      </div>
    </div>
  );
}
