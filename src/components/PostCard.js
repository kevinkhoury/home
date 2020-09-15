import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import moment from 'moment'
import InlineBackgroundImage from './InlineBackgroundImage'
import { featuredImagePropTypes } from '../proptypes'

const Moment = moment().constructor

const PostCard = ({ count, image, slug, pageTitle, date }) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  const isLarge = count % 3 === 0
  const classNames = [
    'post',
    'post-card',
    isLarge ? `post-card-large` : null,
    !!image ? `with-image` : `no-image`,
    inView ? 'in-view visible' : 'in-view',
  ]
    .filter((x) => x)
    .join(' ')

  const innerContent = (
    <div className="post-card-content">
      <div className="post-card-text">
        <h2 className="post-card-title">{pageTitle}</h2>
        {!!date && (
          <time dateTime={date.format('YYYY-MM-DD')} className="post-card-date">
            {date.format('MMM D, YYYY')}
          </time>
        )}
      </div>
    </div>
  )

  const content = !!slug ? (
    <Link to={slug} className="post-card-link">
      {innerContent}
    </Link>
  ) : (
    innerContent
  )

  const sources = !image
    ? null
    : !isLarge
    ? image.m.childImageSharp.fluid
    : [
        image.m.childImageSharp.fluid,
        {
          ...image.d.childImageSharp.fluid,
          media: `(min-width: 700px)`,
        },
      ]

  return (
    <article ref={ref} className={classNames}>
      {!!image ? (
        <InlineBackgroundImage fluid={sources} alt={image.alt}>
          {content}
        </InlineBackgroundImage>
      ) : (
        content
      )}
    </article>
  )
}

export const postPropTypes = {
  count: PropTypes.number.isRequired,
  image: featuredImagePropTypes,
  slug: PropTypes.string,
  pageTitle: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Moment),
}

PostCard.propTypes = postPropTypes

export default PostCard
