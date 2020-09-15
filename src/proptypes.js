import PropTypes from 'prop-types'

export const featuredImagePropTypes = PropTypes.shape({
  src: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.object.isRequired,
      original: PropTypes.shape({
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }),
  d: PropTypes.shape({
    childImageSharp: PropTypes.object.isRequired,
  }),
  m: PropTypes.shape({
    childImageSharp: PropTypes.object.isRequired,
  }),
  square: PropTypes.shape({
    childImageSharp: PropTypes.object.isRequired,
  }),
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
})
