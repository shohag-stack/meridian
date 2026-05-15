import { Accommodation } from "@/types";
import React from "react";

export default function AccommodationDetails({accommodation}: {accommodation: Accommodation}) {
  return (
    <section className="container-site section">
      <div className="flex justify-center text-center mb-14 gap-6">
        <div className="max-w-lg">
          <h2 className="heading-2">
            {accommodation.subTitle}
          </h2>
          <p className="text-xl">{accommodation.description}</p>
          <button className="btn btn-primary"> Book Now </button>
        </div>
      </div>
    </section>
  );
}
