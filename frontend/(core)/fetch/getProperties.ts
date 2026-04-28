import { PROPERTIES } from "@/data/data";
import { client, isSanityConfigured } from "../sanity/lib/client";
import { getAllPropertiesQueries } from "../sanity/queries/propertyQueries";
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
