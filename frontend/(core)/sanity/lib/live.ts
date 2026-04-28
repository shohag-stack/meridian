import { client } from "./client";

export const sanityFetch = async (query: string, params = {}) => {
  if (!client) return null;

  return client.fetch(query, params);
};