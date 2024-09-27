export const allBlogs = `query MyQuery {
  gingerBlogs {
    content
    slug
    title
    releaseDate
    images {
      url
    }
  }
}`