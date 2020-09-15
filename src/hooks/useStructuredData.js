const buildImage = (image) => ({
  '@context': 'http://schema.org/',
  '@type': 'ImageObject',
  url: image.url,
  height: image.height,
  width: image.width,
})

const personSchema = ({ name, jobTitle, sameAs }) => ({
  '@context': 'http://schema.org/',
  '@type': 'Person',
  '@id': '#person',
  name,
  jobTitle,
  sameAs,
})

const publisherSchema = ({ siteName, logo }) => ({
  '@context': 'http://schema.org/',
  '@type': 'Organization',
  '@id': '#publisher',
  name: siteName,
  logo: buildImage(logo),
})

const webpageSchema = ({
  headline,
  url,
  description,
  image,
  name,
  jobTitle,
  schemaType,
  sameAs,
}) => {
  const pageSchema = {
    '@context': 'http://schema.org',
    '@type': schemaType,
    headline,
    url,
    description,
    primaryImageOfPage: buildImage(image),
    author: {
      '@id': '#person',
    },
    copyrightHolder: {
      '@id': '#person',
    },
  }

  return JSON.stringify([personSchema({ name, jobTitle, sameAs }), pageSchema])
}

const articleSchema = ({
  headline,
  url,
  description,
  image,
  fallbackImage,
  datePublished,
  dateModified,
  name,
  siteName,
  jobTitle,
  sameAs,
}) => {
  const articleSchema = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    headline,
    url,
    description,
    image: buildImage(image),
    author: {
      '@id': '#person',
    },
    datePublished,
    dateModified,
    publisher: {
      '@id': '#publisher',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return JSON.stringify([
    personSchema({ name, jobTitle, sameAs }),
    publisherSchema({ siteName, logo: fallbackImage }),
    articleSchema,
  ])
}

export default function (data) {
  const isPage = data.templateKey.indexOf('-page') !== -1
  const isArticle = data.templateKey.indexOf('-post') !== -1
  const isArchive = data.templateKey.indexOf('-archive') !== -1

  if (isPage || isArchive) {
    return webpageSchema(data)
  } else if (isArticle) {
    return articleSchema(data)
  }
}
