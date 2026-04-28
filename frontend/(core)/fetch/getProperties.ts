import { PROPERTIES } from "@/data/data";
import { client, isSanityConfigured } from "../sanity/lib/client";
import { getAllPropertiesQueries, PROPERTY_BY_SLUG } from "../sanity/queries/propertyQueries";
import { Property } from "@/types";

export async function getProperties(): Promise<Property[]> {
  if (!isSanityConfigured || !client) return PROPERTIES;

  try {
    return await client.fetch(getAllPropertiesQueries);
  } catch (e) {
    console.error("Sanity fetch failed, falling back to dummy data", e);
    return PROPERTIES;
  }
}


export async function getPropertyBySlug({slug}: {slug: string}): Promise<Property | null>{

  if (!isSanityConfigured || !client) return PROPERTIES.find((item) => item.slug === slug) ?? null;

  try {
    return await client.fetch(PROPERTY_BY_SLUG, {slug: slug});
  } catch (e) {
    console.error("Sanity fetch failed, falling back to dummy data", e);
    return PROPERTIES.find((item) => item.slug === slug) ?? null;
  }

}
