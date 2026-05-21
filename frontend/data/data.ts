// ============================================================
// RAYSO.STUDIO — Mock Data
// Replace these with Sanity GROQ queries when integrating CMS.
// ============================================================

import type { Accommodation, BlogPost, ExperienceItem, Facilities } from "@/types";

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
      "Designed to combine spaciousness and elegance, the Family Room category offers 45 m² distributed across two connected rooms: one of 20 m², featuring a Queen bed and a bathroom with a rain shower; and a second, 25 m², with King or twin bed and a full bathroom with bathtub. Ideal for up to four guests, this elegant and light-filled room offers city views and a layout that ensures both privacy and relaxation for every member of the family. ",

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
  shortDescription: "You can contact us using the form, one of the links below, or by calling us directly to find out more.",
  mainImage: "/img/contact-header.png",
}


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
  shortDescription: "Travel is the ultimate way to explore the world, embrace new cultures, and create unforgettable memories. Whether you’re wandering through ancient streets.",
  mainImage: "/img/facilities.jpg"
}

export const facilities: Facilities[] = [
  {
    _id: "1",
    title: "Online Room Booking",
    description: "Book rooms effortlessly with real-time updates, instant confirmation, and secure pricing for a smooth travel experience.",
    thumbImage: 'https://assets.lummi.ai/assets/QmXw8XxZHvESeMzFbPyfwxH7rKTAXiTJ2pYQgiLDb8e7CS?auto=format&w=1500'
  },
  {
    _id: '2',
    title: "Event & Conference Room",
    description: "Reserve professional spaces for meetings or events with instant confirmation, scheduling, and transparent cost details.",
    thumbImage: "https://assets.lummi.ai/assets/QmZehJnWEczKmPVdUgFDzGevwAUdNnRW1XDhtHjhY8tkRg?auto=format&w=1500"
  },
  {
    _id: "3",
    title: "Custom Travel Planning",
    description: "Plan your dream trip with tailored itineraries, live updates, instant booking, and fair transparent pricing anytime.",
    thumbImage: "https://assets.lummi.ai/assets/QmexYXhc3faH3H9qmbgcmG6eUpPeUdVe1cdjbZCQeRmP6o?auto=format&w=1500"
  },
  {
    _id: "4",
    title: "Corporate Stay Management",
    description: "Simplify corporate travel with managed stays, instant confirmation, and real-time availability designed for business comfort.",
    thumbImage: "https://assets.lummi.ai/assets/QmeSMohAxgj6E2aXzmUqgzV6MP9UxEyKWbjYLAYEivSZWV?auto=format&w=1500"
  },
  {
    _id: "5",
    title: "City Tour Arrangements",
    description: "Discover top attractions with guided tours, instant booking, flexible timing, and transparent pricing for every traveler.",
    thumbImage: "https://assets.lummi.ai/assets/QmXwLu5Nta5jzVg5kA2Zx23TFknhYodrFPCs75AP2PkzAf?auto=format&w=1500"
  },
  {
    _id: "6",
    title: "Multi-Destination Packages",
    description: "Explore multiple cities seamlessly with flexible routes, instant booking, real-time updates, and transparent travel costs.",
    thumbImage: "https://assets.lummi.ai/assets/QmVVJKuxFXsSrt7kUNhyggjWHma7hKxgsLvu5WS98Nd4fp?auto=format&w=1500"
  },
  {
    _id: "7",
    title: "Corporate Stay Management",
    description: "Simplify corporate travel with managed stays, instant confirmation, and real-time availability designed for business comfort.",
    thumbImage: "https://assets.lummi.ai/assets/QmSvvpVLcFh5aGeHbymbWiZLVrpKttTRmgNPqa5eVRiUV7?auto=format&w=1500"
  },
  {
    _id: "8",
    title: "City Tour Arrangements",
    description: "Discover top attractions with guided tours, instant booking, flexible timing, and transparent pricing for every traveler.",
    thumbImage: "https://assets.lummi.ai/assets/QmUNf6GeXJdZMy14K3eaUyFGDJhnsBtuZAc5kuSGoD9Rj3?auto=format&w=1500"
  },
  {
    _id: "6",
    title: "Multi-Destination Packages",
    description: "Explore multiple cities seamlessly with flexible routes, instant booking, real-time updates, and transparent travel costs.",
    thumbImage: "https://assets.lummi.ai/assets/QmSmJF2C8ymsRtC59riGmH48SmmvT1q9WJY4EEuASysZWj?auto=format&w=1500"
  },
]