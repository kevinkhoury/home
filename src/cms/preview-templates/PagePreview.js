import React from 'react'
import { toHTML, findImgPath } from '../utils'
import { PageTemplate } from '../../templates/page'

const PagePreview = ({ entry, getAsset, widgetFor }) => {
  const templateKey = entry.getIn(['data', 'templateKey'])
  const header = entry.getIn(['data', 'header']) || '(Article Header)'
  const subheader = entry.getIn(['data', 'subheader']) || ''
  const featuredImage = {
    src: findImgPath(getAsset(entry.getIn(['data', 'featuredImage', 'src']))),
    alt: entry.getIn(['data', 'featuredImage', 'alt']) || '',
    caption: entry.getIn(['data', 'featuredImage', 'caption']) || '',
  }
  const learnMoreButton = {
    link: entry.getIn(['data', 'learnMoreButton', 'link']) || '/about/',
    label: entry.getIn(['data', 'learnMoreButton', 'label']) || 'Read More',
  }
  const longBiography_MD = toHTML(entry.getIn(['data', 'longBiography_MD']))
  const missionStatement = entry.getIn(['data', 'missionStatement']) || ''
  const shortBiography = entry.getIn(['data', 'shortBiography']) || ''
  const formText = {
    name: entry.getIn(['data', 'formText', 'name']) || '',
    email: entry.getIn(['data', 'formText', 'email']) || '',
    message: entry.getIn(['data', 'formText', 'message']) || '',
    submit: entry.getIn(['data', 'formText', 'submit']) || '',
  }
  const extraContent = toHTML(entry.getIn(['data', 'body']))

  return (
    <div className="londn">
      <PageTemplate
        header={header}
        subheader={subheader}
        templateKey={templateKey}
        cssSlug="preview"
        missionStatement={missionStatement}
        shortBiography={shortBiography}
        longBiography_MD={longBiography_MD}
        featuredImage={featuredImage}
        extraContent={extraContent}
        inlineImages={[]}
        recentPosts={[]}
        isPreview={true}
        formText={formText}
        learnMoreButton={learnMoreButton}
      />
    </div>
  )
}

export default PagePreview
