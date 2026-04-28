const FEATURED_QUERIES = `*[_type == "property" && featured == true]{
...,
mainImage{
asset->{url}
},

gallery[]{
asset->{url}
}

}[0...3]
`;

const getAllPropertiesQueries = `*[_type == "property" && defined(slug.current)]{
...,
"slug": slug.current,
"mainImage": mainImage.asset->url,
"gallery": gallery[].asset->url,
}`;

const PROPERTY_BY_SLUG = `
  *[_type == "property" && slug.current == $slug][0]{
    ...,
"slug": slug.current,
"mainImage": mainImage.asset->url,
gallery[]{
  asset->{url}
},
agent->{
  _id,
  name,
  title,
  "photo": photo.asset->url,
  "listings": count(*[_type == "property" && agent._ref == ^._id && status != "sold"]),
  "soldProperties": count(*[_type == "property" && agent._ref == ^._id && status == "sold"])
}
  }
`;

const PROPERTY_SLUGS = `
  *[_type == "property"]{
    "slug": slug.current
  }
`;

export {
  FEATURED_QUERIES,
  PROPERTY_BY_SLUG,
  PROPERTY_SLUGS,
  getAllPropertiesQueries,
};
