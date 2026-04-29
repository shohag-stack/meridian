// ============================================================
// RAYSO.STUDIO — Real Estate Template Types
// These interfaces mirror your Sanity CMS schema.
// When you integrate Sanity, replace mock data with GROQ queries.
// ============================================================

import { PortableTextBlock } from "next-sanity";

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

export type PropertyStatus = 'for-sale' | 'for-rent' | 'sold' | 'off-market';
export type PropertyType = 'house' | 'apartment' | 'condo' | 'villa' | 'penthouse' | 'townhouse' | 'land' | 'commercial';

export interface PropertyAgent {
  _id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  photo?: string;
  bio?: string;
  listings?: number;
  soldProperties?: number;
}

export interface PropertyFeature {
  icon: string;
  label: string;
}

export interface Property {
  _id: string;
  slug: string;
  title: string;
  status: PropertyStatus;
  type: PropertyType;
  price: number;
  priceFrequency?: 'month' | 'year' | null; // for rentals
  featured: boolean;
  newListing: boolean;
  
  // Location
  address: string;
  city: string;
  state: string;
  zipCode: string;
  neighborhood?: string;
  coordinates?: { lat: number; lng: number };
  
  // Details
  bedrooms: number;
  bathrooms: number;
  garages?: number;
  area: number; // sqft
  lotSize?: number; // sqft
  yearBuilt?: number;
  floors?: number;
  
  // Media
  mainImage: SanityImage | string;
  gallery?: SliderImage[];
  
  // Content
  description: string;
  shortDescription?: string;
  features?: string[];
  amenities?: string[];
  
  // Relations
  agent?: PropertyAgent;
  
  // Meta
  createdAt: string;
  updatedAt: string;
}

export type SliderImage = {
  asset: {
    url: string;
  };
};

export interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  mainImage: string;
  publishedAt: string;
  readingTime?: number;
  body: PortableTextBlock[]; // Uncomment when Sanity is integrated
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  photo?: SanityImage | string;
  rating: number;
  content: string;
  propertyBought?: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  logo?: SanityImage | string;
  phone: string;
  email: string;
  address: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
}

// Utility type for filter state
export interface PropertyFilters {
  status?: PropertyStatus | 'all';
  type?: PropertyType | 'all';
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  city?: string;
  minArea?: number;
  maxArea?: number;
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'oldest' | 'area-asc' | 'area-desc';
}
