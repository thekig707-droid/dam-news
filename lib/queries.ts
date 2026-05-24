import { groq } from 'next-sanity'

export const homeArticlesQuery = groq`
  *[_type == "article"] | order(datePublished desc) {
    _id,
    title,
    slug,
    mainImage,
    description,
    datePublished,
    "authorName": author->name
  }
`

export const singleArticleQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    ...,
    "authorName": author->name,
    "authorYoutube": author->youtube,
    "authorInstagram": author->instagram,
    "authorFacebook": author->facebook
  }
`