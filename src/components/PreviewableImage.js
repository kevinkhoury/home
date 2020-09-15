import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const PreviewableImage = ({ src, isPreview, alt, caption }) => {
  const sources =
    !!isPreview || typeof src === 'string'
      ? null
      : !!src.childImageSharp
      ? src.childImageSharp.fluid
      : !!src.m && !!src.d
      ? [
          src.m.childImageSharp.fluid,
          {
            ...src.d.childImageSharp.fluid,
            media: `(min-width: 768px)`,
          },
        ]
      : null
  return (
    <Fragment>
      {!!sources ? (
        <Img className="gatsby-resp-image-image" fluid={sources} alt={alt} />
      ) : (
        <img className="gatsby-resp-image-image" src={src} alt={alt} />
      )}
      {!!caption && <figcaption>{caption}</figcaption>}
    </Fragment>
  )
}

PreviewableImage.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  isPreview: PropTypes.bool,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
}

export default PreviewableImage
