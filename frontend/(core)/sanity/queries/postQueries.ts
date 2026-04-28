export const POST_QUERIES = `
*[_type == "post"]{
  _id,
  title,
  slug,
  excerpt,
  featuredImage{
    asset->{
      url
    }
  }
}[0...20]
`


export const SINGLE_POST_QUERY = `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  excerpt,
  "slug": slug.current,
  publishedAt,
  featuredImage{
    asset->{
      url
    }
  },
  author{
    name,
    image{
      asset->{
        url
      }
    }
  },
  body
}
`;


export const ALL_POST_SLUG = `*[_type == "post"]{
"slug": slug.current
}`