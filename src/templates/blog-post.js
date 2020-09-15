import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, PreviewableImage, HTMLContent } from '../components'
import { useSiteData } from '../hooks'
import { featuredImagePropTypes } from '../proptypes'
import { seoProps, getValidDates } from '../utils'

const Moment = moment().constructor

export const BlogPostTemplate = ({
  pageTitle,
  name,
  date,
  dateModified,
  content,
  featuredImage,
  isPreview,
  inlineImages,
}) => {
  const hasImg =
    featuredImage &&
    featuredImage.src &&
    (featuredImage.src.childImageSharp ||
      (typeof featuredImage.src === 'string' && featuredImage.src.length > 1))

  return (
    <article
      className={`post-content post-template ${
        hasImg ? 'with-image' : 'no-image'
      }`}
      style={{ padding: 0 }}
    >
      <header className="page-head">
        <h1 className="page-head-title">{pageTitle}</h1>
        {!isPreview && (
          <div className="post-meta">
            <span className="blog-post-author">by {name}</span>
            <br />
            <time
              dateTime={date.format('YYYY-MM-DD')}
              className="post-meta-date"
            >
              Published: {date.format('MMM D, YYYY')}
            </time>
            {dateModified.isValid() &&
              !dateModified.startOf('day').isSame(date.startOf('day')) && (
                <time
                  dateTime={dateModified.format('YYYY-MM-DD')}
                  className="post-meta-date modified"
                >
                  <br />
                  Last updated: {dateModified.format('MMM D, YYYY')}
                </time>
              )}
          </div>
        )}
      </header>
      <section className="post-content-body">
        {!!hasImg && (
          <figure
            className="gatsby-resp-image-card-full"
            style={{ marginBottom: '2em' }}
          >
            <PreviewableImage
              isPreview={isPreview}
              src={featuredImage.src}
              alt={featuredImage.alt}
              caption={featuredImage.caption}
            />
          </figure>
        )}
        <HTMLContent
          className="post-content-body-text"
          content={content}
          inlineImages={inlineImages}
        />
      </section>
    </article>
  )
}

const BlogPost = ({ data }) => {
  const { name } = useSiteData()
  const {
    pageTitle,
    featuredImage,
    date: userDate,
  } = data.markdownRemark.frontmatter
  const {
    gitAuthorTime,
    gitCreatedTime,
    inlineImages,
  } = data.markdownRemark.fields
  const { date, dateModified } = getValidDates(
    userDate,
    gitAuthorTime,
    gitCreatedTime,
  )
  const pageProps = {
    pageTitle,
    name,
    date,
    dateModified,
    featuredImage,
    content: data.markdownRemark.html,
    inlineImages,
  }
  return (
    <Layout seoProps={seoProps(data)}>
      <BlogPostTemplate {...pageProps} />
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Moment).isRequired,
  dateModified: PropTypes.instanceOf(Moment).isRequired,
  content: PropTypes.string.isRequired,
  featuredImage: featuredImagePropTypes,
  isPreview: PropTypes.bool,
  inlineImages: PropTypes.array,
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
        gitAuthorTime
        gitCreatedTime
        inlineImages {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
      frontmatter {
        templateKey
        pageTitle
        metaDescription
        schemaType
        date(formatString: "MMM D, YYYY")
        featuredImage {
          src {
            childImageSharp {
              fluid(
                maxWidth: 1200
                maxHeight: 675
                quality: 80
                cropFocus: CENTER
              ) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
              original {
                height
                width
              }
            }
          }
          alt
          caption
        }
      }
    }
  }
`
