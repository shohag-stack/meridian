export const POST_QUERIES = `
*[_type == "post"]{
...,
  "excerpt": pt::text(body),
  "slug": slug.current,
  "mainImage": mainImage.asset->url
    
  
}[0...20]
`


export const SINGLE_POST_QUERY = `
*[_type == "post" && slug.current == $slug][0]{
  ...,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  body,
}
`;


export const ALL_POST_SLUG = `*[_type == "post"]{
"slug": slug.current
}`