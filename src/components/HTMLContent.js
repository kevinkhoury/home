import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import convert from 'react-attr-converter'
import Img from 'gatsby-image'
import { InView } from 'react-intersection-observer'

function convertStyles(styleString) {
  const styles = styleString.split(';').filter((i) => i)
  const output = {}
  if (!styles.length) {
    return output
  }
  styles.forEach((style) => {
    const [name, value] = style.split(':').map((s) => s.trim())
    const jsName = name
      .split('-')
      .map((part, i) =>
        i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1),
      )
      .join('')
    output[jsName] = value
  })
  return output
}

function attribsToProps(attribs) {
  const props = { style: {} }
  if (typeof attribs !== 'object') {
    return props
  }
  Object.keys(attribs).forEach((key) => {
    if (key === 'style') {
      const styles = convertStyles(attribs.style)
      props.style = styles
    } else if (key !== 'src') {
      props[convert(key)] = attribs[key]
    }
  })
  return props
}

function parseImg(attribs, images) {
  const fileParts = attribs.src.split('/')
  const filename = fileParts.pop()
  const props = attribsToProps(attribs)
  const childImg = images.filter(
    (image) => image.childImageSharp.fluid.originalName === filename,
  )[0]
  props.style.width = childImg.childImageSharp.fluid.presentationWidth + 'px'
  if (!props.style.maxWidth) {
    props.style.maxWidth = '100%'
  }
  Object.keys(props).forEach((key) => {
    if (!['className', 'alt', 'style'].includes(key)) {
      delete props[key]
    }
  })
  if (!props.alt) {
    props.alt = childImg.childImageSharp.fluid.originalName
  }
  return <Img {...props} Tag="span" fluid={childImg.childImageSharp.fluid} />
}

function parseIframe(attribs) {
  const props = attribsToProps(attribs)
  return (
    <InView triggerOnce={true}>
      {({ inView, ref }) => {
        const orgSrc = attribs.src.slice(0)
        return (
          <iframe
            {...props}
            ref={ref}
            src={inView ? orgSrc : ''}
            title={!!attribs.title ? attribs.title : 'Embedded content'}
            loading="lazy"
          />
        )
      }}
    </InView>
  )
}

export const HTMLContent = ({ content, className, style, inlineImages }) => {
  const nodes = parse(content, {
    trim: true,
    replace: ({ name, attribs }) => {
      //lazyload iframes
      if (name === 'iframe') {
        return parseIframe(attribs)
      }
      // process images, only jpg and png
      if (
        name === 'img' &&
        (!('class' in attribs) || attribs['class'].indexOf('gatsby-') === -1) &&
        attribs.src &&
        (attribs.src.indexOf('.jpg') !== -1 ||
          attribs.src.indexOf('.png') !== -1) &&
        !!inlineImages &&
        !!inlineImages.length &&
        !inlineImages.includes(null)
      ) {
        return parseImg(attribs, inlineImages)
      }
    },
  })

  return !!className || !!style ? (
    <div
      className={!!className ? className : undefined}
      style={!!style && !!Object.keys(style).length ? style : undefined}
    >
      {nodes}
    </div>
  ) : (
    nodes
  )
}

HTMLContent.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  inlineImages: PropTypes.array,
}

export default HTMLContent
