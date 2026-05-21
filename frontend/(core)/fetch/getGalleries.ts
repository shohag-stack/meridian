import { galleries } from "@/data/data";
import { Galleries } from "@/types";
import { client, isSanityConfigured } from "../sanity/lib/client";
import { GALLERY_QUERIES } from "../sanity/queries/postQueries";

export async function getGalleries(): Promise<Galleries> {
  if (!isSanityConfigured || !client) return galleries;

  try {
    const galleries = await client.fetch(GALLERY_QUERIES);
    return galleries;
  } catch (err) {
    console.log("error fetching blog post from sanity", err);
    return galleries;
  }
}
