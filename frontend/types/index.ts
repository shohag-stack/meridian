import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Message } from './../../node_modules/react-hook-form/dist/types/errors.d';
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


export interface Form {
  name: string,
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  country: string;
  subject?: string;
  message?: string;
  budget?: string;
  to: string;
}

export interface ContactForm {
  name: string,
  email: string,
  phone: string,
  subject: string[],
  message: string,
  interest: string,
}


export interface amenities {
  icon: string;
  title: string;
  description: string;
}

export interface Accommodation {
  _id: string;
  slug: string;

  // Basic
  title: string;
  subTitle?: string;
  type:
    | "villa"
    | "suite"
    | "deluxe-room"
    | "ocean-view-room"
    | "bungalow"
    | "presidential-suite";

  featured?: boolean;
  face: string;

  // Capacity
  guests: number;
  maxGuests?: number;
  bedrooms?: number;
  bathrooms?: number;
  roomSize?: number; // sqft or sqm
  beds?: string;


  // Media
  mainImage: StaticImport | string;
  gallery?: SliderImage[];

  // Content
  shortDescription?: string;
  description: string;

  features?: string[];
  amenities?: amenities[];

  // Booking
  availability?: "available" | "limited" | "booked";

  // Meta
  createdAt: string;
  updatedAt: string;
}

export type SliderImage = {
  label?: string;
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



export interface BookingFormValues {
  adults: number;
  children: number;
  checkIn: string;
  checkOut: string;
  promoCode: string;
}


export interface CounterProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
}

export interface DateFieldProps {
  label: string;
  value: string;
  min?: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error?: string;
  name: string;
}

export interface SearchParams {
  checkIn?:  string;
  checkOut?: string;
  adults?:   string;
  children?: string;
  promo?:    string;
}
