import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const isSanityConfigured = !!(projectId && dataset);

export const client = createClient({
  projectId: projectId ?? "placeholder",
  dataset: dataset ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});