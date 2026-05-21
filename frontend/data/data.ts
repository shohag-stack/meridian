// ============================================================
// RAYSO.STUDIO — Mock Data
// Replace these with Sanity GROQ queries when integrating CMS.
// ============================================================

import type {
  Accommodation,
  BlogPost,
  ExperienceItem,
  Facilities,
  FAQItem,
  Gallery,
} from "@/types";

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
        url: "https://assets.lummi.ai/assets/QmX74f4cu1uD4rhgCneM6rc4cWS7W4dfNs3t8Nw8M24cNP?auto=format&w=1500",
      },
      {
        label: "Sunset Lounge Deck",
        url: "https://assets.lummi.ai/assets/QmXVxC1XSYyxyYUbBiCdiKi35MH7BhFHuUozhUPGmz7amp?auto=format&w=1500",
      },
      {
        url: "https://assets.lummi.ai/assets/QmNkXpP88AQ2xwL6ZwsveSEWRATLju3VKXrM6kiTTTqXoS?auto=format&w=1500",
      },
      {
        url: "https://assets.lummi.ai/assets/QmSFJ5Uv7SVVHhSE1YW2bVdBdxz3U5xKjzXmsyuGUn942t?auto=format&w=1500",
      },
      {
        url: "https://assets.lummi.ai/assets/QmfNdUrTnRMLzex7ntSJTVFsCinXwaEdmZ1fcJy3c6pGgW?auto=format&w=1500",
      },
      {
        url: "https://assets.lummi.ai/assets/QmQGcdj8JhrEbrSaTueZKKLvi6kZWzQayaexmLM2JPpRRX?auto=format&w=1500",
      },
    ],

    shortDescription:
      "Spacious and serene, this villa offers ideal comfort for small families or two couples.",

    description:
      "Designed to combine spaciousness and elegance, the Family Room category offers connected luxury living spaces with premium comfort and ocean-inspired interiors.",

    features: [
      "Private Infinity Pool",
      "Ocean View Terrace",
      "Outdoor Rain Shower",
      "Direct Lagoon Access",
      "Sunset Lounge Deck",
    ],

    maxGuests: 4,

    amenities: {
      wifi: true,
      bath: true,
      desk: true,
      hairdryer: true,
      tv: true,
      showerHead: true,
      slippers: true,
      curtains: true,
      bathrobes: true,
      balcony: true,
      ac: true,
      nonSmoking: true,
      refrigerator: true,
      towel: true,
      kettle: true,
    },

    availability: "available",

    createdAt: "2026-05-14T10:00:00Z",
    updatedAt: "2026-05-14T10:00:00Z",
  },

  {
    _id: "room-2",
    slug: "garden-suite-resort",

    title: "Garden Suite",
    subTitle: "A peaceful retreat surrounded by tropical greenery",

    type: "suite",

    featured: true,
    face: "garden",

    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    roomSize: 950,
    beds: "1 King Bed",

    mainImage:
      "https://assets.lummi.ai/assets/QmXVxC1XSYyxyYUbBiCdiKi35MH7BhFHuUozhUPGmz7amp?auto=format&w=1500",

    gallery: [
      {
        label: "Garden Lounge",
        url: "https://assets.lummi.ai/assets/QmSFJ5Uv7SVVHhSE1YW2bVdBdxz3U5xKjzXmsyuGUn942t?auto=format&w=1500",
      },
      {
        label: "Luxury Bedroom",
        url: "https://assets.lummi.ai/assets/QmNkXpP88AQ2xwL6ZwsveSEWRATLju3VKXrM6kiTTTqXoS?auto=format&w=1500",
      },
      {
        url: "https://assets.lummi.ai/assets/QmQGcdj8JhrEbrSaTueZKKLvi6kZWzQayaexmLM2JPpRRX?auto=format&w=1500",
      },
    ],

    shortDescription:
      "Elegant suite designed for relaxation and tropical comfort.",

    description:
      "This garden-facing suite blends indoor comfort with outdoor serenity for a luxurious island experience.",

    features: [
      "Private Terrace",
      "Garden View",
      "Rain Shower",
      "Lounge Area",
      "King Bed",
    ],

    maxGuests: 3,

    amenities: {
      wifi: true,
      bath: true,
      desk: true,
      hairdryer: true,
      tv: true,
      showerHead: true,
      slippers: true,
      curtains: true,
      bathrobes: true,
      balcony: true,
      ac: true,
      nonSmoking: true,
      refrigerator: true,
      towel: true,
      kettle: true,
    },

    availability: "available",

    createdAt: "2026-05-15T10:00:00Z",
    updatedAt: "2026-05-15T10:00:00Z",
  },

  {
    _id: "room-3",
    slug: "sunset-water-villa",

    title: "Sunset Water Villa",
    subTitle: "Romantic overwater escape with stunning sunset views",

    type: "villa",

    featured: true,
    face: "ocean",

    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    roomSize: 1200,
    beds: "1 King Bed",

    mainImage:
      "https://assets.lummi.ai/assets/QmNkXpP88AQ2xwL6ZwsveSEWRATLju3VKXrM6kiTTTqXoS?auto=format&w=1500",

    gallery: [
      {
        label: "Ocean Deck",
        url: "https://assets.lummi.ai/assets/QmX74f4cu1uD4rhgCneM6rc4cWS7W4dfNs3t8Nw8M24cNP?auto=format&w=1500",
      },
      {
        label: "Luxury Bathroom",
        url: "https://assets.lummi.ai/assets/QmfNdUrTnRMLzex7ntSJTVFsCinXwaEdmZ1fcJy3c6pGgW?auto=format&w=1500",
      },
    ],

    shortDescription:
      "A romantic villa floating above crystal-clear turquoise waters.",

    description:
      "Crafted for couples seeking luxury, privacy, and uninterrupted ocean sunsets.",

    features: [
      "Lagoon Access",
      "Private Deck",
      "Outdoor Bath",
      "Ocean Views",
      "Sunset Lounge",
    ],

    maxGuests: 2,

    amenities: {
      wifi: true,
      bath: true,
      desk: true,
      hairdryer: true,
      tv: true,
      showerHead: true,
      slippers: true,
      curtains: true,
      bathrobes: true,
      balcony: true,
      ac: true,
      nonSmoking: true,
      refrigerator: true,
      towel: true,
      kettle: true,
    },

    availability: "available",

    createdAt: "2026-05-16T10:00:00Z",
    updatedAt: "2026-05-16T10:00:00Z",
  },

  {
  _id: "room-4",
  slug: "royal-family-suite",

  title: "Royal Family Suite",
  subTitle: "Spacious comfort designed for memorable family stays",

  type: "suite",

  featured: false,
  face: "garden",

  guests: 6,
  bedrooms: 3,
  bathrooms: 2,
  roomSize: 2200,
  beds: "3 Queen Beds",

  mainImage:
    "https://assets.lummi.ai/assets/QmSFJ5Uv7SVVHhSE1YW2bVdBdxz3U5xKjzXmsyuGUn942t?auto=format&w=1500",

  gallery: [
    {
      label: "Family Lounge",
      url: "https://assets.lummi.ai/assets/QmQGcdj8JhrEbrSaTueZKKLvi6kZWzQayaexmLM2JPpRRX?auto=format&w=1500",
    },
    {
      label: "Dining Space",
      url: "https://assets.lummi.ai/assets/QmfNdUrTnRMLzex7ntSJTVFsCinXwaEdmZ1fcJy3c6pGgW?auto=format&w=1500",
    },
  ],

  shortDescription:
    "A spacious suite tailored for families and group travelers.",

  description:
    "Featuring multiple bedrooms, generous lounge spaces, and elegant interiors designed for comfort and privacy.",

  features: [
    "Private Balcony",
    "Family Lounge",
    "Dining Area",
    "Garden View",
    "Rain Shower",
  ],

  maxGuests: 6,

  amenities: {
    wifi: true,
    bath: true,
    desk: true,
    hairdryer: true,
    tv: true,
    showerHead: true,
    slippers: true,
    curtains: true,
    bathrobes: true,
    balcony: true,
    ac: true,
    nonSmoking: true,
    refrigerator: true,
    towel: true,
    kettle: true,
  },

  availability: "available",

  createdAt: "2026-05-17T10:00:00Z",
  updatedAt: "2026-05-17T10:00:00Z",
},

{
  _id: "room-5",
  slug: "lagoon-premium-villa",

  title: "Lagoon Premium Villa",
  subTitle: "Luxury living above crystal-clear waters",

  type: "villa",

  featured: true,
  face: "lagoon",

  guests: 2,
  bedrooms: 1,
  bathrooms: 1,
  roomSize: 1350,
  beds: "1 King Bed",

  mainImage:
    "https://assets.lummi.ai/assets/QmfNdUrTnRMLzex7ntSJTVFsCinXwaEdmZ1fcJy3c6pGgW?auto=format&w=1500",

  gallery: [
    {
      label: "Infinity Pool",
      url: "https://assets.lummi.ai/assets/QmX74f4cu1uD4rhgCneM6rc4cWS7W4dfNs3t8Nw8M24cNP?auto=format&w=1500",
    },
    {
      label: "Ocean Bedroom",
      url: "https://assets.lummi.ai/assets/QmNkXpP88AQ2xwL6ZwsveSEWRATLju3VKXrM6kiTTTqXoS?auto=format&w=1500",
    },
  ],

  shortDescription:
    "An elegant villa combining privacy, luxury, and oceanfront serenity.",

  description:
    "This premium lagoon villa offers expansive indoor-outdoor living with uninterrupted tropical views.",

  features: [
    "Private Pool",
    "Lagoon Deck",
    "Outdoor Bath",
    "Ocean Access",
    "Sun Lounge",
  ],

  maxGuests: 2,

  amenities: {
    wifi: true,
    bath: true,
    desk: true,
    hairdryer: true,
    tv: true,
    showerHead: true,
    slippers: true,
    curtains: true,
    bathrobes: true,
    balcony: true,
    ac: true,
    nonSmoking: true,
    refrigerator: true,
    towel: true,
    kettle: true,
  },

  availability: "available",

  createdAt: "2026-05-18T10:00:00Z",
  updatedAt: "2026-05-18T10:00:00Z",
},

{
  _id: "room-6",
  slug: "executive-ocean-suite",

  title: "Executive Ocean Suite",
  subTitle: "Sophisticated comfort with panoramic sea views",

  type: "suite",

  featured: false,
  face: "ocean",

  guests: 3,
  bedrooms: 1,
  bathrooms: 1,
  roomSize: 1100,
  beds: "1 King Bed",

  mainImage:
    "https://assets.lummi.ai/assets/QmQGcdj8JhrEbrSaTueZKKLvi6kZWzQayaexmLM2JPpRRX?auto=format&w=1500",

  gallery: [
    {
      label: "Ocean Balcony",
      url: "https://assets.lummi.ai/assets/QmXVxC1XSYyxyYUbBiCdiKi35MH7BhFHuUozhUPGmz7amp?auto=format&w=1500",
    },
  ],

  shortDescription:
    "Premium ocean-facing suite perfect for leisure and business stays.",

  description:
    "Designed with refined interiors, luxury bedding, and calming ocean-inspired details.",

  features: [
    "Ocean Balcony",
    "Workspace",
    "Rain Shower",
    "Luxury Bedding",
    "Mini Bar",
  ],

  maxGuests: 3,

  amenities: {
    wifi: true,
    bath: true,
    desk: true,
    hairdryer: true,
    tv: true,
    showerHead: true,
    slippers: true,
    curtains: true,
    bathrobes: true,
    balcony: true,
    ac: true,
    nonSmoking: true,
    refrigerator: true,
    towel: true,
    kettle: true,
  },

  availability: "available",

  createdAt: "2026-05-19T10:00:00Z",
  updatedAt: "2026-05-19T10:00:00Z",
},

{
  _id: "room-7",
  slug: "honeymoon-beach-villa",

  title: "Honeymoon Beach Villa",
  subTitle: "Private beachfront escape crafted for couples",

  type: "villa",

  featured: true,
  face: "beach",

  guests: 2,
  bedrooms: 1,
  bathrooms: 1,
  roomSize: 1450,
  beds: "1 King Bed",

  mainImage:
    "https://assets.lummi.ai/assets/QmX74f4cu1uD4rhgCneM6rc4cWS7W4dfNs3t8Nw8M24cNP?auto=format&w=1500",

  gallery: [
    {
      label: "Beach Lounge",
      url: "https://assets.lummi.ai/assets/QmSFJ5Uv7SVVHhSE1YW2bVdBdxz3U5xKjzXmsyuGUn942t?auto=format&w=1500",
    },
  ],

  shortDescription:
    "Romantic beachfront villa offering privacy and tropical luxury.",

  description:
    "Enjoy intimate beachfront living with elegant interiors and relaxing outdoor spaces.",

  features: [
    "Beach Access",
    "Outdoor Dining",
    "Private Terrace",
    "King Bed",
    "Rain Shower",
  ],

  maxGuests: 2,

  amenities: {
    wifi: true,
    bath: true,
    desk: true,
    hairdryer: true,
    tv: true,
    showerHead: true,
    slippers: true,
    curtains: true,
    bathrobes: true,
    balcony: true,
    ac: true,
    nonSmoking: true,
    refrigerator: true,
    towel: true,
    kettle: true,
  },

  availability: "available",

  createdAt: "2026-05-20T10:00:00Z",
  updatedAt: "2026-05-20T10:00:00Z",
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
      "https://assets.lummi.ai/assets/QmWsfMVzu4nygwUEhoBdydPtFcuiwVvgspEgK5pXqaEgXU?auto=format&w=1500",

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
      "https://assets.lummi.ai/assets/QmZehJnWEczKmPVdUgFDzGevwAUdNnRW1XDhtHjhY8tkRg?auto=format&w=1500",

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
      "Why Brooklyn Heights Is the New Gold Standard",
    excerpt:
      "Cobblestone streets, iconic brownstones, and sweeping Manhattan views — Brooklyn Heights has cemented its status as one of America's most coveted addresses.",
    mainImage:
      "https://assets.lummi.ai/assets/QmR1iNjXGH6SCPPTC7zrxRVVzXx2xoQDGvhDMn4D1b9MSr?auto=format&w=1500",

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
    title: "Why Brooklyn Heights Is the New Gold Standard",
    excerpt:
      "Cobblestone streets, iconic brownstones, and sweeping Manhattan views — Brooklyn Heights has cemented its status as one of America's most coveted addresses.",
    mainImage:
      "https://assets.lummi.ai/assets/QmSmJF2C8ymsRtC59riGmH48SmmvT1q9WJY4EEuASysZWj?auto=format&w=1500",
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
    title:"Why Brooklyn Heights Is the New Gold Standard",
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
      "Why Brooklyn Heights Is the New Gold Standard",
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

export const contactHeader = {
  title: "Contact Us",
  shortDescription:
    "You can contact us using the form, one of the links below, or by calling us directly to find out more.",
  mainImage: "/img/contact-header.png",
};

export const experiences: ExperienceItem[] = [
  {
    label: "Sea Series",
    image:
      "https://assets.lummi.ai/assets/QmXRLbDGcHeyTjvpA3G4iKVXJifKSJpZxAijoo57DNCUL8?auto=format&w=1500",
    href: "#",
    span: "wide",
  },
  {
    label: "Beachfront",
    image:
      "https://assets.lummi.ai/assets/QmRTiU6cofR8Kxe8Z7L6jZZHGPaKLqrjUTFLmYR7afHFxo?auto=format&w=1500",
    href: "#",
    span: "normal",
  },
  {
    label: "Picnic",
    image:
      "https://assets.lummi.ai/assets/QmPr5zjtKcMR6YFFfmGx3FLhpqmthbZKs1UbsXYXZjXGY3?auto=format&w=1500",
    href: "#",
    span: "normal",
  },
  {
    label: "Thai Massage",
    image:
      "https://assets.lummi.ai/assets/QmYJTV3nf9LDjbczLSg3sznuDLZxSRHjryHaB94pCkU6oe?auto=format&w=1500",
    href: "#",
    span: "normal",
  },
  {
    label: "Fitness",
    image:
      "https://assets.lummi.ai/assets/QmPCYrsKv3JEAzikCSu2M9EBqkW2iKf4hMKkhKLTNk2abL?auto=format&w=1500",
    href: "#",
    span: "normal",
  },
];

export const facilitiesHeader = {
  title: "Facilities",
  shortDescription:
    "Travel is the ultimate way to explore the world, embrace new cultures, and create unforgettable memories. Whether you’re wandering through ancient streets.",
  mainImage: "/img/facilities.jpg",
};

export const facilities: Facilities[] = [
  {
    _id: "1",
    title: "Online Room Booking",
    description:
      "Book rooms effortlessly with real-time updates, instant confirmation, and secure pricing for a smooth travel experience.",
    thumbImage:
      "https://assets.lummi.ai/assets/QmXw8XxZHvESeMzFbPyfwxH7rKTAXiTJ2pYQgiLDb8e7CS?auto=format&w=1500",
  },
  {
    _id: "2",
    title: "Event & Conference Room",
    description:
      "Reserve professional spaces for meetings or events with instant confirmation, scheduling, and transparent cost details.",
    thumbImage:
      "https://assets.lummi.ai/assets/QmZehJnWEczKmPVdUgFDzGevwAUdNnRW1XDhtHjhY8tkRg?auto=format&w=1500",
  },
  {
    _id: "3",
    title: "Custom Travel Planning",
    description:
      "Plan your dream trip with tailored itineraries, live updates, instant booking, and fair transparent pricing anytime.",
    thumbImage:
      "https://assets.lummi.ai/assets/QmexYXhc3faH3H9qmbgcmG6eUpPeUdVe1cdjbZCQeRmP6o?auto=format&w=1500",
  },
  {
    _id: "4",
    title: "Corporate Stay Management",
    description:
      "Simplify corporate travel with managed stays, instant confirmation, and real-time availability designed for business comfort.",
    thumbImage:
      "https://assets.lummi.ai/assets/QmeSMohAxgj6E2aXzmUqgzV6MP9UxEyKWbjYLAYEivSZWV?auto=format&w=1500",
  },
  {
    _id: "5",
    title: "City Tour Arrangements",
    description:
      "Discover top attractions with guided tours, instant booking, flexible timing, and transparent pricing for every traveler.",
    thumbImage:
      "https://assets.lummi.ai/assets/QmXwLu5Nta5jzVg5kA2Zx23TFknhYodrFPCs75AP2PkzAf?auto=format&w=1500",
  },
  {
    _id: "6",
    title: "Multi-Destination Packages",
    description:
      "Explore multiple cities seamlessly with flexible routes, instant booking, real-time updates, and transparent travel costs.",
    thumbImage:
      "https://assets.lummi.ai/assets/QmVVJKuxFXsSrt7kUNhyggjWHma7hKxgsLvu5WS98Nd4fp?auto=format&w=1500",
  },
  {
    _id: "7",
    title: "Corporate Stay Management",
    description:
      "Simplify corporate travel with managed stays, instant confirmation, and real-time availability designed for business comfort.",
    thumbImage:
      "https://assets.lummi.ai/assets/QmSvvpVLcFh5aGeHbymbWiZLVrpKttTRmgNPqa5eVRiUV7?auto=format&w=1500",
  },
  {
    _id: "8",
    title: "City Tour Arrangements",
    description:
      "Discover top attractions with guided tours, instant booking, flexible timing, and transparent pricing for every traveler.",
    thumbImage:
      "https://assets.lummi.ai/assets/QmUNf6GeXJdZMy14K3eaUyFGDJhnsBtuZAc5kuSGoD9Rj3?auto=format&w=1500",
  },
  {
    _id: "6",
    title: "Multi-Destination Packages",
    description:
      "Explore multiple cities seamlessly with flexible routes, instant booking, real-time updates, and transparent travel costs.",
    thumbImage:
      "https://assets.lummi.ai/assets/QmSmJF2C8ymsRtC59riGmH48SmmvT1q9WJY4EEuASysZWj?auto=format&w=1500",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Getting started with Fortune?",
    answer:
      "Make the best models with the best data. Scale Data Engine leverages your enterprise data, and with Scale Generative AI Platform, safely unlocks the value of AI.",
  },
  {
    question: "Integration options?",
    answer:
      "We support a wide range of integrations including REST APIs, webhooks, and native connectors for popular platforms like Salesforce, HubSpot, and Slack.",
  },
  {
    question: "Data security measures?",
    answer:
      "All data is encrypted in transit and at rest using AES-256. We are SOC 2 Type II certified and comply with GDPR and CCPA regulations.",
  },
  {
    question: "Fortune's reporting and analytics?",
    answer:
      "Fortune provides real-time dashboards, custom report builders, and exportable data in CSV or PDF formats so your team can make informed decisions.",
  },
  {
    question: "Support options for Fortune?",
    answer:
      "We offer 24/7 email support, live chat during business hours, and dedicated account managers for enterprise plans.",
  },
];

export const galleryHeader = {
  title: "Gallery",
  shortDescription:
    "Explore our stunning gallery showcasing the beauty and elegance of our properties, amenities, and unforgettable experiences that await you at our resort.",
  mainImage: "/img/contact-header.jpg",
};

export const galleryCategory = [
  {
    _id: "1",
    title: "Overview",
    slug: "overview",
  },
  {
    _id: "2",
    title: "Stay",
    slug: "stay",
  },
  {
    _id: "3",
    title: "Eat & Drink",
    slug: "eatdrink",
  },
  {
    _id: "4",
    title: "Pool",
    slug: "pool",
  },
  {
    _id: "5",
    title: "Meetings & Events",
    slug: "meetings",
  },
  {
    _id: "6",
    title: "Others",
    slug: "others",
  },
];

export const galleries: Gallery[] = [
  {
    _id: "1",
    title: "Overview",
    slug: "overview",
    images: [
      {
        _id: "1",
        url: "https://assets.lummi.ai/assets/QmWsfMVzu4nygwUEhoBdydPtFcuiwVvgspEgK5pXqaEgXU?auto=format&w=1500",
      },

      {
        _id: "2",
        url: "https://assets.lummi.ai/assets/QmXw8XxZHvESeMzFbPyfwxH7rKTAXiTJ2pYQgiLDb8e7CS?auto=format&w=1500",
      },
      {
        _id: "3",
        url: "https://assets.lummi.ai/assets/Qmd9v1fkAGREd44bkru9p73c7YsJvGRVTEGAKQnSgvmJk7?auto=format&w=1500",
      },
    ],
  },

  {
    _id: "2",
    title: "Stay",
    slug: "stay",
    images: [
      {
        _id: "1",
        url: "https://assets.lummi.ai/assets/QmSmJF2C8ymsRtC59riGmH48SmmvT1q9WJY4EEuASysZWj?auto=format&w=1500",
      },

      {
        _id: "2",
        url: "https://assets.lummi.ai/assets/QmZehJnWEczKmPVdUgFDzGevwAUdNnRW1XDhtHjhY8tkRg?auto=format&w=1500",
      },
      {
        _id: "3",
        url: "https://assets.lummi.ai/assets/QmR1iNjXGH6SCPPTC7zrxRVVzXx2xoQDGvhDMn4D1b9MSr?auto=format&w=1500",
      },
    ],
  },
];
