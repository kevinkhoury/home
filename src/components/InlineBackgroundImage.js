import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { isValidRGBA } from '../utils'

const InlineBackgroundImage = ({
  extraClasses,
  padding,
  justifyContent,
  fluid,
  src,
  alt,
  styles,
  overlayColor,
  children,
}) => {
  const basename = 'inline-bg-img'
  const customStyles = styles || {}

  const defaultStyles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    ...customStyles,
  }

  const containerStyles = {
    padding: padding ? padding : 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: justifyContent ? justifyContent : 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }

  const image =
    typeof src === 'object' && src.childImageSharp ? (
      <Img
        className={`${basename}-image`}
        fluid={src.childImageSharp.fluid}
        alt={alt}
        style={defaultStyles}
      />
    ) : !!fluid ? (
      <Img
        className={`${basename}-image`}
        fluid={fluid}
        alt={alt}
        style={defaultStyles}
      />
    ) : (
      <img
        className={`${basename}-image`}
        alt={alt}
        src={src}
        style={defaultStyles}
      />
    )

  return (
    <div className={basename} style={{ overflow: 'hidden' }}>
      <div className={`${basename}-underlay-wrapper`}>
        {image}
        <div
          className="is-overlay"
          style={{
            backgroundColor: isValidRGBA(overlayColor)
              ? overlayColor
              : 'rgba(0,0,0,0.65)',
          }}
        />
      </div>
      <div
        className={`is-overlay ${extraClasses ? extraClasses : ''}`}
        style={containerStyles}
      >
        {children}
      </div>
    </div>
  )
}

InlineBackgroundImage.propTypes = {
  extraClasses: PropTypes.string,
  padding: PropTypes.string,
  justifyContent: PropTypes.string,
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      childImageSharp: PropTypes.object,
    }),
  ]),
  fluid: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  alt: PropTypes.string.isRequired,
  styles: PropTypes.object,
  overlayColor: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default InlineBackgroundImage
