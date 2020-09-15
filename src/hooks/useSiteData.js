import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const query = useStaticQuery(
    graphql`
      query SiteDataQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "site-data" } }) {
          frontmatter {
            name
            jobTitle
            siteName
            siteUrl
            socialLinks {
              twitter {
                url
                show
              }
              facebook {
                url
                show
              }
              linkedin {
                url
                show
              }
              pinterest {
                url
                show
              }
              instagram {
                url
                show
              }
            }
            themeOptions {
              colorScheme
              fontScheme
              showThemeSwitcher
            }
            fallbackImage {
              childImageSharp {
                original {
                  height
                  width
                }
                fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid_withWebp
                  originalName
                }
              }
            }
          }
        }
      }
    `,
  )
  return query.markdownRemark.frontmatter
}
