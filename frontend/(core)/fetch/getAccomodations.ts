import { ACCOMMODATION } from "@/data/data";
import { client, isSanityConfigured } from "../sanity/lib/client";
import {
  getAllPropertiesQueries,
  PROPERTY_BY_SLUG,
} from "../sanity/queries/propertyQueries";
import { Accommodation } from "@/types";

export async function getAccommodations(): Promise<Accommodation[]> {
  if (!isSanityConfigured || !client) return ACCOMMODATION;

  try {
    return await client.fetch(getAllPropertiesQueries);
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
    return await client.fetch(PROPERTY_BY_SLUG, { slug: slug });
  } catch (e) {
    console.error("Sanity fetch failed, falling back to dummy data", e);
    return ACCOMMODATION.find((item) => item.slug === slug) ?? null;
  }
}
