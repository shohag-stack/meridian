// ============================================================
// RAYSO.STUDIO — Mock Data
// Replace these with Sanity GROQ queries when integrating CMS.
// ============================================================

import type { Accommodation, BlogPost, Testimonial } from "@/types";

export const ACCOMMODATION: Accommodation[] = [
  {
    _id: "room-1",
    slug: "ocean-villa-maldives",

    title: "Superior Villa",
    subTitle: "Comfort and style for the whole family",

    type: "villa",

    featured: true,
    face: "ocean",

    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    roomSize: 1800,
    beds: "2 King Beds",

    mainImage:
      "https://assets.lummi.ai/assets/QmXQ3MnNdEvAxCX2cvr7EtdXWkTfBdV6nV7kknEEA6jRin?auto=format&w=1500",

    gallery: [
      {
        label: "Private Infinity Pool",
        asset: {
          url: "https://assets.lummi.ai/assets/QmX74f4cu1uD4rhgCneM6rc4cWS7W4dfNs3t8Nw8M24cNP?auto=format&w=1500",
        },
      },
      {
        label: "Sunset Lounge Deck",
        asset: {
          url: "https://assets.lummi.ai/assets/QmXVxC1XSYyxyYUbBiCdiKi35MH7BhFHuUozhUPGmz7amp?auto=format&w=1500",
        },
      },

      {
        asset: {
          url: "https://assets.lummi.ai/assets/QmNkXpP88AQ2xwL6ZwsveSEWRATLju3VKXrM6kiTTTqXoS?auto=format&w=1500",
        },
      },

      {
        asset: {
          url: "https://assets.lummi.ai/assets/QmSFJ5Uv7SVVHhSE1YW2bVdBdxz3U5xKjzXmsyuGUn942t?auto=format&w=1500",
        },
      },
      {
        asset: {
          url: "https://assets.lummi.ai/assets/QmfNdUrTnRMLzex7ntSJTVFsCinXwaEdmZ1fcJy3c6pGgW?auto=format&w=1500",
        },
      },
      {
        asset: {
          url: "https://assets.lummi.ai/assets/QmQGcdj8JhrEbrSaTueZKKLvi6kZWzQayaexmLM2JPpRRX?auto=format&w=1500",
        },
      },
    ],

    shortDescription:
      "Spacious and serene, this villa offers ideal comfort for small families or two couples.",

    description:
      "Designed to combine spaciousness and elegance, the Family Room category offers 45 m² distributed across two connected rooms: one of 20 m², featuring a Queen bed and a bathroom with a rain shower; and a second, 25 m², with King or twin bed and a full bathroom with bathtub. Ideal for up to four guests, this elegant and light-filled room offers city views and a layout that ensures both privacy and relaxation for every member of the family. ",

    features: [
      "Private Infinity Pool",
      "Ocean View Terrace",
      "Outdoor Rain Shower",
      "Direct Lagoon Access",
      "Sunset Lounge Deck",
    ],

    amenities: [
      {
        icon: "wifi",
        title: "Internet",
        description: "Free Wi-Fi",
      },

      {
        icon: "bath",
        title: "Bathroom",
        description: "Private bathroom",
      },
      {
        icon: "desk",
        title: "Practicle - Phone,safe, and desk",
        description: "Phone, safe, and desk",
      },

      {
        icon: "hairdryer",
        title: "Hair Dryer",
        description: "Free hair dryer",
      },

      {
        icon: "tv",
        title: "Entertainment",
        description: "Cable channels and smart TV",
      },
      {
        icon: "showerHead",
        title: "Shower Head",
        description: "Rain shower with movable shower head",
      },
      {
        icon: "slippers",
        title: "Slippers",
        description: "Comfortable slippers for your stay",
      }, {
        icon: "curtains",
        title: "Blackout Curtains",
        description: "Sleep - Blackout drapes and curtains"
      },
      {
        icon: "bathrobes",
        title: "Bathrobes",
        description: "Soft bathrobes for your comfort",
      },
      {
        icon: "balcony",
        title: "Private balcony",
        description: "Enjoy your own outdoor space with stunning views",
      },
      {
        icon: "ac",
        title: "Air Conditioning",
        description: "Comfort - Air conditioning and daily housekeeping",
      },
      {
        icon: "nonSmoking",
        title: "Non-smoking",
        description: "Non-smoking rooms"
      },
      {
        icon: "refrigerator",
        title: "Refrigerator",
        description: "Refrigerator and complimentary water"
      },
      {
        icon: "towel",
        title: "Towels",
        description: "Beach bag and pool towel"
      },
      {
        icon: "kettle",
        title: "Kettle",
        description: "Coffee and tea tray set with kettle"
      },


    ],

    availability: "available",

    createdAt: "2026-05-14T10:00:00Z",
    updatedAt: "2026-05-14T10:00:00Z",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    _id: "blog-1",
    slug: "luxury-real-estate-trends-2024",
    title: "Luxury Real Estate Trends Reshaping the Market in 2024",
    excerpt:
      "From wellness-focused amenities to sustainable design, discover the defining trends that are shaping high-end residential real estate this year.",
    mainImage:
      "https://res.cloudinary.com/dq9ckspti/image/upload/v1777362597/QmWcqCGdfoRy2D5ChJcfQDwe4Aqr3CwUEVnZtvx9sME7GK_epkvqp.avif",

    publishedAt: "2024-03-08T10:00:00Z",
    readingTime: 6,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration.",
          },
        ],
      },
    ],
  },
  {
    _id: "blog-2",
    slug: "guide-to-buying-first-luxury-home",
    title: "The Definitive Guide to Purchasing Your First Luxury Home",
    excerpt:
      "Navigating the luxury real estate market requires a different playbook. Here's everything you need to know before making your move.",
    mainImage:
      "https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmdprfJvhYmtNr9U9JNbFjV75bT25xXmkUNkk9ePLxsPiP_mtbhvu.avif",

    publishedAt: "2024-02-22T10:00:00Z",
    readingTime: 9,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration.",
          },
        ],
      },
    ],
  },
  {
    _id: "blog-3",
    slug: "neighborhood-spotlight-brooklyn-heights",
    title:
      "Neighborhood Spotlight: Why Brooklyn Heights Is the New Gold Standard",
    excerpt:
      "Cobblestone streets, iconic brownstones, and sweeping Manhattan views — Brooklyn Heights has cemented its status as one of America's most coveted addresses.",
    mainImage:
      "https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmPr7ZsLPPoyeJgPpbw1KscGgAadrTdkxtHBDWMQRRW2N7_be2l5u.avif",

    publishedAt: "2024-02-10T10:00:00Z",
    readingTime: 5,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration.",
          },
        ],
      },
    ],
  },

  {
    _id: "blog-4",
    slug: "guide-to-buying-first-luxury-home",
    title: "The Definitive Guide to Purchasing Your First Luxury Home",
    excerpt:
      "Navigating the luxury real estate market requires a different playbook. Here's everything you need to know before making your move.",
    mainImage:
      "https://res.cloudinary.com/dq9ckspti/image/upload/v1777362597/Qmb8QFfcVgGXXSJjx7wjZQFCbiu8psPFp7iZk9SpkTHzf9_exscj3.avif",

    publishedAt: "2024-02-22T10:00:00Z",
    readingTime: 9,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration.",
          },
        ],
      },
    ],
  },
  {
    _id: "blog-5",
    slug: "neighborhood-spotlight-brooklyn-heights",
    title:
      "Neighborhood Spotlight: Why Brooklyn Heights Is the New Gold Standard",
    excerpt:
      "Cobblestone streets, iconic brownstones, and sweeping Manhattan views — Brooklyn Heights has cemented its status as one of America's most coveted addresses.",
    mainImage:
      "https://res.cloudinary.com/dq9ckspti/image/upload/v1777362597/QmXX4NNBg9UnkSNhUnmEppHFhfcY1nSfeybs3SVPYmhaTW_cmelgo.avif",
    publishedAt: "2024-02-10T10:00:00Z",
    readingTime: 5,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands.",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration.",
          },
        ],
      },
    ],
  },

  {
    _id: "blog-6",
    slug: "neighborhood-spotlight-brooklyn-heights",
    title:
      "Neighborhood Spotlight: Why Brooklyn Heights Is the New Gold Standard",
    excerpt:
      "Cobblestone streets, iconic brownstones, and sweeping Manhattan views — Brooklyn Heights has cemented its status as one of America's most coveted addresses.",
    mainImage:
      "https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmT56yUdVS7r9vXWyeZQBktDoVLeTLQz3xmm6YFbhCxHP4_hmpkrn.avif",

    publishedAt: "2024-02-10T10:00:00Z",
    readingTime: 5,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands.",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration.",
          },
        ],
      },
    ],
  },

  {
    _id: "blog-7",
    slug: "neighborhood-spotlight-brooklyn-heights",
    title:
      "Neighborhood Spotlight: Why Brooklyn Heights Is the New Gold Standard",
    excerpt:
      "Cobblestone streets, iconic brownstones, and sweeping Manhattan views — Brooklyn Heights has cemented its status as one of America's most coveted addresses.",
    mainImage:
      "https://res.cloudinary.com/dq9ckspti/image/upload/v1777362597/QmaNkSh7suVAjasho4VzETvP9McqjL8cGpa8HvZdNfiHyY_eghmvq.avif",

    publishedAt: "2024-02-10T10:00:00Z",
    readingTime: 5,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration.",
          },
        ],
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    _id: "test-1",
    name: "Robert & Claire Ashford",
    role: "Purchased in Beverly Hills",
    photo:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=100&h=100&fit=crop",
    rating: 5,
    content:
      "Working with the EstateHaven team was an exceptional experience from beginning to end. They understood exactly what we were looking for and found us a home that exceeded every expectation.",
    propertyBought: "Casa Serena Villa",
  },
  {
    _id: "test-2",
    name: "Daniel Mercer",
    role: "Purchased in Manhattan",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    content:
      "The professionalism and market knowledge demonstrated throughout our purchase process was unmatched. Highly recommend to anyone looking for a truly white-glove real estate experience.",
    propertyBought: "The Meridian Penthouse",
  },
  {
    _id: "test-3",
    name: "Isabelle Torres",
    role: "Rented in Chicago",
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    rating: 5,
    content:
      "I've worked with real estate agents across three cities, and EstateHaven stands apart. Responsive, honest, and genuinely invested in finding the right fit rather than just closing a deal.",
  },
];

// Utility functions
export const formatPrice = (
  price: number,
  frequency?: string | null,
): string => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

  if (frequency) return `${formatted}/${frequency === "month" ? "mo" : "yr"}`;
  return formatted;
};

export const formatArea = (area: number): string => {
  return new Intl.NumberFormat("en-US").format(area);
};

export const getPropertyTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    house: "House",
    apartment: "Apartment",
    condo: "Condo",
    villa: "Villa",
    penthouse: "Penthouse",
    townhouse: "Townhouse",
    land: "Land",
    commercial: "Commercial",
  };
  return labels[type] || type;
};

export const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
