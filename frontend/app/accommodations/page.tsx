import { Suspense } from 'react';
import PropertiesClient from './PropertiesClient';
import { getAccommodations } from '@/(core)/fetch/getAccomodations';
import AccomodationsHero from '@/components/sections/AccomodationsHero';

export default async function PropertiesPage() {

  const accommodations = await getAccommodations()

  console.log("showing accommodations from accommodation page", accommodations)

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-neutral-400">Loading accommodations…</div>
      </div>
    }>
      <AccomodationsHero />
    </Suspense>
  );
}
