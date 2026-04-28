import { client } from "@/(core)/sanity/lib/client";
import { PROPERTIES } from "@/data/data";
import { getAllPropertiesQueries } from "../sanity/queries/propertyQueries";
import { Property } from "@/types/index";

const hasSanity = !!(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_DATASET
);

export async function getProperties(): Promise<Property[]> {
  if (!hasSanity) return PROPERTIES;
  return client.fetch(getAllPropertiesQueries);
}
