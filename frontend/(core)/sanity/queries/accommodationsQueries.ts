const GETALLACCOMMODATIONS = `
  *[_type == "accommodation"] | order(featured desc, title asc) {
    _id,
    "slug": slug.current,
    title,
    subTitle,
    type,
    featured,
    face,
    guests,
    bedrooms,
    bathrooms,
    roomSize,
    beds,
    "mainImage": mainImage.asset->url,
    gallery[] {
      label,
      "asset": { "url": asset->url }
    },
    shortDescription,
    description,
    features,
    amenities,
    availability,
    unavailablePeriods[] {
      from,
      to
    },
    _createdAt,
    _updatedAt
  }
`;

const ACCOMMODATIONBYSLUG = `
  *[_type == "accommodation" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    subTitle,
    type,
    featured,
    face,
    guests,
    bedrooms,
    bathrooms,
    roomSize,
    beds,
    "mainImage": mainImage.asset->url,
    gallery[] {
      label,
      "url": asset.asset->url
    },
    shortDescription,
    description,
    features,
    amenities,
    availability,
    unavailablePeriods[] {
      from,
      to
    },
    _createdAt,
    _updatedAt
  }
`;

const ACCOMMODATIONSSLUGS = `
  *[_type == "accommodation"]{
    "slug": slug.current
  }
`;

export {
  GETALLACCOMMODATIONS,
  ACCOMMODATIONBYSLUG,
  ACCOMMODATIONSSLUGS,
};