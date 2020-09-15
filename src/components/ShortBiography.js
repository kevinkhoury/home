import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { addTrailingSlash } from '../utils'
import PreviewableImage from './PreviewableImage'
import { featuredImagePropTypes } from '../proptypes'

const ShortBiography = ({
  learnMoreButton,
  shortBiography,
  image,
  isPreview,
}) => (
  <div className="row" style={{ alignItems: 'center' }}>
    <div className="col-6">
      {!!shortBiography && <p>{shortBiography}</p>}
      {!!learnMoreButton && (
        <Link className="button" to={addTrailingSlash(learnMoreButton.link)}>
          {learnMoreButton.label}
        </Link>
      )}
    </div>
    <div className="col-6">
      {!!image && !!image.src && !!image.alt && (
        <figure className="gatsby-resp-image-card-no-margin">
          <PreviewableImage
            isPreview={isPreview}
            src={isPreview ? image.src : image.square}
            alt={image.alt}
            caption={image.caption}
          />
        </figure>
      )}
    </div>
  </div>
)

ShortBiography.propTypes = {
  learnMoreButton: PropTypes.shape({
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  shortBiography: PropTypes.string,
  image: featuredImagePropTypes,
  isPreview: PropTypes.bool,
}

export default ShortBiography
