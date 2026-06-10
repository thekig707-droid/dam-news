// Sanity se aapki saari news fetch karne ka jadui code
export const homeArticlesQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    description,
    "datePublished": publishedAt,
    "authorName": author->name,
    categories[]->{
      title
    }
  }
`;