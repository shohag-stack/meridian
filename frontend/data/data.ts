// ============================================================
// RAYSO.STUDIO — Mock Data
// Replace these with Sanity GROQ queries when integrating CMS.
// ============================================================

import type { Property, BlogPost, Testimonial, PropertyAgent } from '@/types';

export const AGENTS: PropertyAgent[] = [
  {
    _id: 'agent-1',
    name: 'Alexandra Morrison',
    title: 'Senior Property Consultant',
    phone: '+1 (555) 234-5678',
    email: 'alexandra@estatehaven.com',
    photo: '/img/team-1.png',
    bio: 'With over 12 years in luxury real estate, Alexandra has helped hundreds of families find their dream homes.',
    listings: 24,
    soldProperties: 186,
  },
  {
    _id: 'agent-2',
    name: 'James Whitfield',
    title: 'Luxury Estates Specialist',
    phone: '+1 (555) 345-6789',
    email: 'james@estatehaven.com',
    photo: '/img/team-2.png',
    bio: 'Specializing in high-end residential properties, James brings unmatched market expertise.',
    listings: 18,
    soldProperties: 142,
  },
  {
    _id: 'agent-3',
    name: 'Sophia Chen',
    title: 'Residential Sales Expert',
    phone: '+1 (555) 456-7890',
    email: 'sophia@estatehaven.com',
    photo: '/img/team-3.png',
    bio: 'A data-driven approach combined with a passion for design makes Sophia a top performer.',
    listings: 31,
    soldProperties: 203,
  },

  {
    _id: 'agent-4',
    name: 'Sophia Chen',
    title: 'Residential Sales Expert',
    phone: '+1 (555) 456-7890',
    email: 'sophia@estatehaven.com',
    photo: '/img/team-4.png',
    bio: 'A data-driven approach combined with a passion for design makes Sophia a top performer.',
    listings: 31,
    soldProperties: 203,
  },
];

export const PROPERTIES: Property[] = [
  {
    _id: 'prop-1',
    slug: 'luxury-penthouse-downtown',
    title: 'The Meridian Penthouse',
    status: 'for-sale',
    type: 'penthouse',
    price: 4850000,
    featured: true,
    newListing: true,
    address: '1200 Park Avenue, Penthouse',
    city: 'New York',
    state: 'NY',
    zipCode: '10128',
    neighborhood: 'Upper East Side',
    bedrooms: 4,
    bathrooms: 4.5,
    garages: 2,
    area: 4200,
    lotSize: 0,
    yearBuilt: 2021,
    floors: 2,
    mainImage: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmTnfRH2CksXLv1NGYsqjCM6BXR5WP2BaQj1oPQ4WaZLcs_kqn653.avif',
    gallery: [ {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmPr7ZsLPPoyeJgPpbw1KscGgAadrTdkxtHBDWMQRRW2N7_be2l5u.avif'}},
                {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmdprfJvhYmtNr9U9JNbFjV75bT25xXmkUNkk9ePLxsPiP_mtbhvu.avif'}},
                {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmT56yUdVS7r9vXWyeZQBktDoVLeTLQz3xmm6YFbhCxHP4_hmpkrn.avif'}},
    ],
    description: 'An extraordinary duplex penthouse perched atop one of the city\'s most prestigious addresses. Soaring 12-foot ceilings, floor-to-ceiling glass walls, and a 1,200 sq ft wraparound terrace with unobstructed skyline views define this one-of-a-kind residence.',
    shortDescription: 'Duplex penthouse with panoramic skyline views and private terrace.',
    features: ['Panoramic Skyline Views', 'Private Wraparound Terrace', 'Smart Home System', 'Chef\'s Kitchen', 'Wine Cellar', 'Private Elevator', 'Home Theater', 'Rooftop Pool Access'],
    amenities: ['24/7 Concierge', 'Doorman', 'Fitness Center', 'Spa', 'Residents Lounge'],
    agent: AGENTS[0],
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-10T10:00:00Z',
  },
  {
    _id: 'prop-2',
    slug: 'modern-villa-beverly-hills',
    title: 'Casa Serena Villa',
    status: 'for-sale',
    type: 'villa',
    price: 8200000,
    featured: true,
    newListing: false,
    address: '550 Benedict Canyon Drive',
    city: 'Beverly Hills',
    state: 'CA',
    zipCode: '90210',
    neighborhood: 'Benedict Canyon',
    bedrooms: 6,
    bathrooms: 7,
    garages: 3,
    area: 8800,
    lotSize: 22000,
    yearBuilt: 2019,
    floors: 2,
    mainImage: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362597/QmXX4NNBg9UnkSNhUnmEppHFhfcY1nSfeybs3SVPYmhaTW_cmelgo.avif',
    gallery: [ {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmPr7ZsLPPoyeJgPpbw1KscGgAadrTdkxtHBDWMQRRW2N7_be2l5u.avif'}},
                {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmdprfJvhYmtNr9U9JNbFjV75bT25xXmkUNkk9ePLxsPiP_mtbhvu.avif'}},
                {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmT56yUdVS7r9vXWyeZQBktDoVLeTLQz3xmm6YFbhCxHP4_hmpkrn.avif'}},
    ],
    description: 'A masterpiece of contemporary architecture set behind private gates in the coveted Benedict Canyon. This bespoke villa seamlessly merges indoor and outdoor living with retractable glass walls that open to expansive terraces, an infinity pool, and manicured gardens.',
    shortDescription: 'Contemporary gated villa with infinity pool and canyon views.',
    features: ['Infinity Pool & Spa', 'Home Automation', 'Movie Theater', 'Wine Cellar', 'Gym', 'Guest House', 'Tennis Court', 'Solar Panels'],
    amenities: ['Private Gate', 'Security System', 'Smart Irrigation', 'EV Charging'],
    agent: AGENTS[1],
    createdAt: '2024-02-20T10:00:00Z',
    updatedAt: '2024-02-20T10:00:00Z',
  },
  {
    _id: 'prop-3',
    slug: 'waterfront-estate-miami',
    title: 'Azure Bay Residence',
    status: 'for-sale',
    type: 'house',
    price: 6750000,
    featured: true,
    newListing: true,
    address: '3400 Bay Shore Drive',
    city: 'Miami Beach',
    state: 'FL',
    zipCode: '33140',
    neighborhood: 'Sunset Islands',
    bedrooms: 5,
    bathrooms: 5.5,
    garages: 2,
    area: 6400,
    lotSize: 18000,
    yearBuilt: 2022,
    floors: 2,
    mainImage: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362597/QmaNkSh7suVAjasho4VzETvP9McqjL8cGpa8HvZdNfiHyY_eghmvq.avif',
    gallery: [ {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmPr7ZsLPPoyeJgPpbw1KscGgAadrTdkxtHBDWMQRRW2N7_be2l5u.avif'}},
                {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmdprfJvhYmtNr9U9JNbFjV75bT25xXmkUNkk9ePLxsPiP_mtbhvu.avif'}},
                {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmT56yUdVS7r9vXWyeZQBktDoVLeTLQz3xmm6YFbhCxHP4_hmpkrn.avif'}},
    ],
    description: 'Newly constructed waterfront estate on exclusive Sunset Islands. Designed by award-winning architect Marco Silva, this residence features boat dock access, direct bay views, and impeccable interiors curated by a renowned design firm.',
    shortDescription: 'Waterfront estate with private dock and direct bay views.',
    features: ['Private Boat Dock', 'Waterfront Pool', 'Summer Kitchen', 'Fire Pit', 'Smart Home', '10,000 lb Boat Lift'],
    amenities: ['Gated Community', 'Private Beach Access', 'Security Patrol'],
    agent: AGENTS[2],
    createdAt: '2024-03-01T10:00:00Z',
    updatedAt: '2024-03-01T10:00:00Z',
  },
  {
    _id: 'prop-4',
    slug: 'modern-apartment-chicago',
    title: 'The Lakeview Residence',
    status: 'for-rent',
    type: 'apartment',
    price: 8500,
    priceFrequency: 'month',
    featured: false,
    newListing: true,
    address: '2600 N Lakeview Ave, Unit 1502',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60614',
    neighborhood: 'Lincoln Park',
    bedrooms: 3,
    bathrooms: 2,
    garages: 1,
    area: 2100,
    yearBuilt: 2020,
    mainImage: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362597/QmaNkSh7suVAjasho4VzETvP9McqjL8cGpa8HvZdNfiHyY_eghmvq.avif',
    gallery: [ {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmPr7ZsLPPoyeJgPpbw1KscGgAadrTdkxtHBDWMQRRW2N7_be2l5u.avif'}},
                {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmdprfJvhYmtNr9U9JNbFjV75bT25xXmkUNkk9ePLxsPiP_mtbhvu.avif'}},
                {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmT56yUdVS7r9vXWyeZQBktDoVLeTLQz3xmm6YFbhCxHP4_hmpkrn.avif'}},
    ],
    description: 'Stunning high-floor residence overlooking Lake Michigan in the heart of Lincoln Park. Floor-to-ceiling windows, premium finishes, and a chef\'s kitchen make this a rare luxury rental opportunity.',
    shortDescription: 'High-floor lake view apartment with premium finishes.',
    features: ['Lake Michigan Views', 'Chef\'s Kitchen', 'In-Unit Washer/Dryer', 'Heated Floors'],
    agent: AGENTS[0],
    createdAt: '2024-03-12T10:00:00Z',
    updatedAt: '2024-03-12T10:00:00Z',
  },
  {
    _id: 'prop-5',
    slug: 'townhouse-brooklyn',
    title: 'Brooklyn Heights Townhouse',
    status: 'for-sale',
    type: 'townhouse',
    price: 3200000,
    featured: false,
    newListing: false,
    address: '54 Willow Street',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '11201',
    neighborhood: 'Brooklyn Heights',
    bedrooms: 5,
    bathrooms: 3.5,
    garages: 1,
    area: 4600,
    yearBuilt: 1895,
    floors: 4,
    mainImage: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362597/QmWcqCGdfoRy2D5ChJcfQDwe4Aqr3CwUEVnZtvx9sME7GK_epkvqp.avif',
    gallery: [ {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmPr7ZsLPPoyeJgPpbw1KscGgAadrTdkxtHBDWMQRRW2N7_be2l5u.avif'}},
                {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmdprfJvhYmtNr9U9JNbFjV75bT25xXmkUNkk9ePLxsPiP_mtbhvu.avif'}},
                {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmT56yUdVS7r9vXWyeZQBktDoVLeTLQz3xmm6YFbhCxHP4_hmpkrn.avif'}},
    ],
    description: 'A rare opportunity to own a meticulously restored brownstone in coveted Brooklyn Heights. This four-story townhouse retains original architectural details while featuring thoughtful modern updates throughout.',
    shortDescription: 'Restored brownstone in coveted Brooklyn Heights.',
    features: ['Gut-Renovated Kitchen', 'Original Fireplaces', 'Private Garden', 'Rooftop Terrace', 'Wine Room'],
    agent: AGENTS[1],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    _id: 'prop-6',
    slug: 'condo-san-francisco',
    title: 'Pacific Heights Condo',
    status: 'for-rent',
    type: 'condo',
    price: 6200,
    priceFrequency: 'month',
    featured: false,
    newListing: false,
    address: '2800 Pacific Avenue, #4D',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94115',
    neighborhood: 'Pacific Heights',
    bedrooms: 2,
    bathrooms: 2,
    area: 1650,
    yearBuilt: 2018,
    mainImage: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362597/Qmb8QFfcVgGXXSJjx7wjZQFCbiu8psPFp7iZk9SpkTHzf9_exscj3.avif',
    gallery: [ {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmPr7ZsLPPoyeJgPpbw1KscGgAadrTdkxtHBDWMQRRW2N7_be2l5u.avif'}},
                {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmdprfJvhYmtNr9U9JNbFjV75bT25xXmkUNkk9ePLxsPiP_mtbhvu.avif'}},
                {asset: { url: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmT56yUdVS7r9vXWyeZQBktDoVLeTLQz3xmm6YFbhCxHP4_hmpkrn.avif'}},
    ],
    description: 'Sophisticated condo in one of San Francisco\'s most desirable neighborhoods. Bask in stunning bay and Golden Gate Bridge views from the wraparound terrace while enjoying the finest finishes throughout.',
    shortDescription: 'Bay view condo with wraparound terrace in Pacific Heights.',
    features: ['Golden Gate Bridge Views', 'Wraparound Terrace', 'Chef\'s Kitchen', 'Doorman'],
    agent: AGENTS[2],
    createdAt: '2024-02-05T10:00:00Z',
    updatedAt: '2024-02-05T10:00:00Z',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    _id: 'blog-1',
    slug: 'luxury-real-estate-trends-2024',
    title: 'Luxury Real Estate Trends Reshaping the Market in 2024',
    excerpt: 'From wellness-focused amenities to sustainable design, discover the defining trends that are shaping high-end residential real estate this year.',
    mainImage: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362597/QmWcqCGdfoRy2D5ChJcfQDwe4Aqr3CwUEVnZtvx9sME7GK_epkvqp.avif',


    publishedAt: '2024-03-08T10:00:00Z',
    readingTime: 6,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands."
          }
        ]
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority"
          }
        ]
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration."
          }
        ]
      }
    ]
  },
  {
    _id: 'blog-2',
    slug: 'guide-to-buying-first-luxury-home',
    title: 'The Definitive Guide to Purchasing Your First Luxury Home',
    excerpt: 'Navigating the luxury real estate market requires a different playbook. Here\'s everything you need to know before making your move.',
    mainImage: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmdprfJvhYmtNr9U9JNbFjV75bT25xXmkUNkk9ePLxsPiP_mtbhvu.avif',

    publishedAt: '2024-02-22T10:00:00Z',
    readingTime: 9,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands."
          }
        ]
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority"
          }
        ]
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration."
          }
        ]
      }
    ]
  },
  {
    _id: 'blog-3',
    slug: 'neighborhood-spotlight-brooklyn-heights',
    title: 'Neighborhood Spotlight: Why Brooklyn Heights Is the New Gold Standard',
    excerpt: 'Cobblestone streets, iconic brownstones, and sweeping Manhattan views — Brooklyn Heights has cemented its status as one of America\'s most coveted addresses.',
    mainImage: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmPr7ZsLPPoyeJgPpbw1KscGgAadrTdkxtHBDWMQRRW2N7_be2l5u.avif',


    publishedAt: '2024-02-10T10:00:00Z',
    readingTime: 5,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands."
          }
        ]
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority"
          }
        ]
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration."
          }
        ]
      }
    ]
  },

  {
    _id: 'blog-4',
    slug: 'guide-to-buying-first-luxury-home',
    title: 'The Definitive Guide to Purchasing Your First Luxury Home',
    excerpt: 'Navigating the luxury real estate market requires a different playbook. Here\'s everything you need to know before making your move.',
    mainImage: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362597/Qmb8QFfcVgGXXSJjx7wjZQFCbiu8psPFp7iZk9SpkTHzf9_exscj3.avif',

    publishedAt: '2024-02-22T10:00:00Z',
    readingTime: 9,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands."
          }
        ]
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority"
          }
        ]
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration."
          }
        ]
      }
    ]
  },
  {
    _id: 'blog-5',
    slug: 'neighborhood-spotlight-brooklyn-heights',
    title: 'Neighborhood Spotlight: Why Brooklyn Heights Is the New Gold Standard',
    excerpt: 'Cobblestone streets, iconic brownstones, and sweeping Manhattan views — Brooklyn Heights has cemented its status as one of America\'s most coveted addresses.',
    mainImage: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362597/QmXX4NNBg9UnkSNhUnmEppHFhfcY1nSfeybs3SVPYmhaTW_cmelgo.avif',
    publishedAt: '2024-02-10T10:00:00Z',
    readingTime: 5,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands."
          }
        ]
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority"
          }
        ]
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration."
          }
        ]
      }
    ]
  },

  {
    _id: 'blog-6',
    slug: 'neighborhood-spotlight-brooklyn-heights',
    title: 'Neighborhood Spotlight: Why Brooklyn Heights Is the New Gold Standard',
    excerpt: 'Cobblestone streets, iconic brownstones, and sweeping Manhattan views — Brooklyn Heights has cemented its status as one of America\'s most coveted addresses.',
    mainImage: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362598/QmT56yUdVS7r9vXWyeZQBktDoVLeTLQz3xmm6YFbhCxHP4_hmpkrn.avif',

    publishedAt: '2024-02-10T10:00:00Z',
    readingTime: 5,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands."
          }
        ]
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority"
          }
        ]
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration."
          }
        ]
      }
    ]
  },

  {
    _id: 'blog-7',
    slug: 'neighborhood-spotlight-brooklyn-heights',
    title: 'Neighborhood Spotlight: Why Brooklyn Heights Is the New Gold Standard',
    excerpt: 'Cobblestone streets, iconic brownstones, and sweeping Manhattan views — Brooklyn Heights has cemented its status as one of America\'s most coveted addresses.',
    mainImage: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777362597/QmaNkSh7suVAjasho4VzETvP9McqjL8cGpa8HvZdNfiHyY_eghmvq.avif',

    publishedAt: '2024-02-10T10:00:00Z',
    readingTime: 5,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "The luxury real estate market continues to evolve rapidly, driven by lifestyle shifts, remote work, and sustainability demands."
          }
        ]
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Wellness Becomes a Priority"
          }
        ]
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text:
              "Buyers are now prioritizing wellness-focused amenities such as home spas, gyms, and natural lighting integration."
          }
        ]
      }
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    _id: 'test-1',
    name: 'Robert & Claire Ashford',
    role: 'Purchased in Beverly Hills',
    photo: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=100&h=100&fit=crop',
    rating: 5,
    content: 'Working with the EstateHaven team was an exceptional experience from beginning to end. They understood exactly what we were looking for and found us a home that exceeded every expectation.',
    propertyBought: 'Casa Serena Villa',
  },
  {
    _id: 'test-2',
    name: 'Daniel Mercer',
    role: 'Purchased in Manhattan',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    content: 'The professionalism and market knowledge demonstrated throughout our purchase process was unmatched. Highly recommend to anyone looking for a truly white-glove real estate experience.',
    propertyBought: 'The Meridian Penthouse',
  },
  {
    _id: 'test-3',
    name: 'Isabelle Torres',
    role: 'Rented in Chicago',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    rating: 5,
    content: 'I\'ve worked with real estate agents across three cities, and EstateHaven stands apart. Responsive, honest, and genuinely invested in finding the right fit rather than just closing a deal.',
  },
];

// Utility functions
export const formatPrice = (price: number, frequency?: string | null): string => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
  
  if (frequency) return `${formatted}/${frequency === 'month' ? 'mo' : 'yr'}`;
  return formatted;
};

export const formatArea = (area: number): string => {
  return new Intl.NumberFormat('en-US').format(area);
};

export const getPropertyTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    house: 'House', apartment: 'Apartment', condo: 'Condo', villa: 'Villa',
    penthouse: 'Penthouse', townhouse: 'Townhouse', land: 'Land', commercial: 'Commercial',
  };
  return labels[type] || type;
};

export const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  });
};
