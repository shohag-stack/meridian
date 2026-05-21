import { Suspense } from "react";
import AccomodationsHero from "@/components/sections/AccomodationsHero";
import { SearchParams } from "@/types";
import { getAccommodations } from "@/(core)/fetch/getAccomodations";
import AccommodationCard from "@/components/ui/AccommodationCard";

export default async function PropertiesPage({searchParams}: {searchParams: SearchParams} ) {


  const { adults, children } = await searchParams;
  const allAccommodations = await getAccommodations();
  const guestsRequested =
    adults || children
      ? (Number(adults) || 0) + (Number(children) || 0)
      : 0;
 
  // Filter by guest capacity if your accommodation objects expose a maxGuests field.
  // Adjust the predicate to match your actual data shape.
  const filtered = allAccommodations.filter((a) => {
    if (guestsRequested > 0 && a.maxGuests && a.maxGuests < guestsRequested) return false;
    return true;
  });

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-neutral-400">Loading accommodations…</div>
        </div>
      }
    >
      <AccomodationsHero />
      {/* Pass filtered accommodations to your listing component */}
      <div className="container-site section">
        <p className="font-body text-sm text-neutral-500 mb-8">
          {filtered.length} accommodation{filtered.length !== 1 ? "s" : ""}{" "}
          available
        </p>
 
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="heading-4 mb-2">
              No accommodations found
            </p>
            <p className="font-body text-sm">
              Try adjusting your dates or guest count.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((accommodation) => (
              <AccommodationCard
                key={accommodation._id}
                accommodation={accommodation}
              />
            ))}
          </div>
        )}
      </div>
    </Suspense>
  );
}
