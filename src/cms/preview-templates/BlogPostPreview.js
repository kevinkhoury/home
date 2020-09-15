import React from 'react'
import { toHTML, findImgPath } from '../utils'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, getAsset, widgetFor }) => {
  const pageTitle = entry.getIn(['data', 'pageTitle']) || '(Article Title)'
  const featuredImage = {
    src: findImgPath(getAsset(entry.getIn(['data', 'featuredImage', 'src']))),
    alt: entry.getIn(['data', 'featuredImage', 'alt']) || '',
    caption: entry.getIn(['data', 'featuredImage', 'caption']) || '',
  }
  const content = toHTML(entry.getIn(['data', 'body']))
  return (
    <div className="londn">
      <BlogPostTemplate
        pageTitle={pageTitle}
        featuredImage={featuredImage}
        content={content}
        isPreview={true}
      />
    </div>
  )
}

export default BlogPostPreview
