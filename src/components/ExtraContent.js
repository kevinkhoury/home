import React from 'react'
import HTMLContent from './HTMLContent'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'

const ExtraContent = ({ content, page, inlineImages }) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <section
      ref={ref}
      className={`extra-content extra-content-${page} ${
        inView ? `in-view visible` : 'in-view'
      }`}
    >
      <hr />
      <HTMLContent
        className="extra-content-holder"
        content={content}
        inlineImages={inlineImages}
      />
    </section>
  )
}

ExtraContent.propTypes = {
  content: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  inlineImages: PropTypes.array,
}

export default ExtraContent
