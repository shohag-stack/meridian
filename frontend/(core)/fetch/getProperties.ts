// lib/getProperties.ts
import { client, isSanityConfigured } from "@/(core)/sanity/lib/client";
import { getAllPropertiesQueries } from "../sanity/queries/propertyQueries";
import { PROPERTIES } from "@/data/data";
import { Property } from "@/types";

export async function getProperties(): Promise<Property[]> {
  if (!isSanityConfigured) return PROPERTIES;

  try {
    return await client.fetch(getAllPropertiesQueries);
  } catch (e) {
    console.error("Sanity fetch failed, falling back to dummy data", e);
    return PROPERTIES;
  }
}