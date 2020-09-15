import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const query = useStaticQuery(
    graphql`
      query QuerySiteMetadata {
        site {
          siteMetadata {
            title
            colorOptions {
              value
              label
            }
            fontOptions {
              value
              label
            }
          }
        }
      }
    `,
  )
  return query.site.siteMetadata
}
