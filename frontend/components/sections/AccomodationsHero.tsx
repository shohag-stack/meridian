import { getAccommodations } from "@/(core)/fetch/getAccomodations";
import Image from "next/image";
import React from "react";
import HotelBookingFilter from "../HotelBookingFilter";

export default async function AccomodationsHero() {

    const accomdations = await getAccommodations();


  return (
    <div className="relative min-h-screen w-full">
      <Image
        src={'/img/accommodationsHero.jpg'}
        alt="Accommodation Hero"
        fill
        className="object-cover"
      />

      {/* Content */}
      <div className="container-site absolute py-20 inset-0 z-30 flex items-end">
            <HotelBookingFilter />
      </div>
    </div>
  );
}
