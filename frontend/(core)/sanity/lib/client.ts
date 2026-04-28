import { createClient, type SanityClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const isSanityConfigured = !!(
  projectId && projectId.trim().length > 0 &&
  dataset && dataset.trim().length > 0
);

// Only create the client if configured — never call createClient with empty values
export const client: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset: dataset!,
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;