import React from 'react'
import PropTypes from 'prop-types'
import PostCard from './PostCard'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { addTrailingSlash } from '../utils'
import { featuredImagePropTypes } from '../proptypes'

const Moment = moment().constructor

const PostFeed = ({ isPreview, posts }) => (
  <div className="post-feed">
    {!isPreview &&
      !!posts &&
      !!posts.length &&
      posts.map(({ image, slug, pageTitle, date }, index) => {
        return (
          <PostCard
            key={uuidv4()}
            count={index}
            image={image}
            slug={addTrailingSlash(slug)}
            pageTitle={pageTitle}
            date={date}
          />
        )
      })}
    {!isPreview && (!posts || !posts.length) && (
      <PostCard
        count={0}
        pageTitle="No posts yet. Please check back again soon!"
      />
    )}
    {!!isPreview && (
      <PostCard
        count={0}
        pageTitle="Your posts will appear here in reverse chronological order"
      />
    )}
  </div>
)

PostFeed.propTypes = {
  isPreview: PropTypes.bool,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      image: featuredImagePropTypes,
      slug: PropTypes.string,
      pageTitle: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Moment),
    }),
  ),
}

export default PostFeed
