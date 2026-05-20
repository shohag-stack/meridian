import type { Metadata } from "next";
import {
  getAccommodations,
  getAccommodationsBySlug,
} from "@/(core)/fetch/getAccomodations";
import { notFound } from "next/navigation";

import AccommodationHeader from "@/components/sections/AccommodationHeader";
import AccommodationDetails from "@/components/sections/AccommodationDetails";
import AccommodationSlider from "@/components/sections/AccommodationSlider";
import AccommodationAmenities from "@/components/sections/AccommodationAmenities";

interface Props {
  params: Promise<{ slug: string }>;
}

const ACCOMMODATIONS = await getAccommodations();

export async function generateStaticParams() {
  return ACCOMMODATIONS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const accommodation = ACCOMMODATIONS.find((p) => p.slug === slug);
  if (!accommodation) return { title: "Accommodation Not Found" };
  return {
    title: accommodation.title,
    description:
      accommodation.shortDescription || accommodation.description.slice(0, 160),
  };
}

export default async function AccommodationPage({ params }: Props) {
  const { slug } = await params;
  const accommodation = await getAccommodationsBySlug({ slug });


  console.log("showing accommodation:", accommodation);

  if (!accommodation) notFound();

  return (
    <>
      <AccommodationHeader accommodation={accommodation} />
      <AccommodationDetails accommodation={accommodation} />
      <AccommodationSlider accommodation={accommodation} />
      <AccommodationAmenities accommodation={accommodation} />
    </>
  );
}
