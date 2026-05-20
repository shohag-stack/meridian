import { ACCOMMODATION } from "@/data/data";
import { client, isSanityConfigured } from "../sanity/lib/client";
import {
  GETALLACCOMMODATIONS,
  ACCOMMODATIONBYSLUG,
} from "../sanity/queries/accommodationsQueries";
import { Accommodation } from "@/types";

export async function getAccommodations(): Promise<Accommodation[]> {
  if (!isSanityConfigured || !client) return ACCOMMODATION;

  try {
    return await client.fetch(GETALLACCOMMODATIONS);
  } catch (e) {
    console.error("Sanity fetch failed, falling back to dummy data", e);
    return ACCOMMODATION;
  }
}

export async function getAccommodationsBySlug({
  slug,
}: {
  slug: string;
}): Promise<Accommodation | null> {
  if (!isSanityConfigured || !client)
    return ACCOMMODATION.find((item) => item.slug === slug) ?? null;

  try {
    return await client.fetch(ACCOMMODATIONBYSLUG, { slug: slug });
  } catch (e) {
    console.error("Sanity fetch failed, falling back to dummy data", e);
    return ACCOMMODATION.find((item) => item.slug === slug) ?? null;
  }
}
