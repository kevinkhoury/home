import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const query = useStaticQuery(
    graphql`
      query NavPagesQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "menu-data" } }) {
          frontmatter {
            menuItems {
              slug
              label
            }
          }
        }
      }
    `,
  )
  const { menuItems } = query.markdownRemark.frontmatter
  return menuItems.map(({ slug: orginalSlug, label }) => {
    // normalize to initial and trailing slash
    const slug =
      orginalSlug === '/'
        ? orginalSlug
        : `/${orginalSlug
            .split('/')
            .filter(x => x)
            .join('/')}/`
    return { slug, label }
  })
  // return query.markdownRemark.frontmatter.menuItems
}
