import useStructuredData from '../useStructuredData'

const mockWebpageSchema = jest.fn(() => ({ webpage: 'webpage' }))
const mockArticleSchema = jest.fn(() => ({ article: 'article' }))
const mockBuildImage = jest.fn(() => ({ image: 'image' }))
const mockPersonSchema = jest.fn(() => ({ person: 'person' }))
const mockPublisherSchema = jest.fn(() => ({ publisher: 'publisher' }))

afterEach(() => {
  jest.clearAllMocks()
  __rewire_reset_all__()
})

describe('useStructuredData', () => {
  it('returns article schema for blog posts and webpage schema for pages', () => {
    const dataPage = { templateKey: 'foobar-page' }
    const dataPost = { templateKey: 'foobar-post' }
    const dataArchive = { templateKey: 'foobar-archive' }
    useStructuredData.__set__('webpageSchema', mockWebpageSchema)
    useStructuredData.__set__('articleSchema', mockArticleSchema)
    useStructuredData(dataPage)
    useStructuredData(dataPost)
    useStructuredData(dataArchive)
    expect(mockWebpageSchema).toHaveBeenCalledTimes(2)
    expect(mockArticleSchema).toHaveBeenCalledTimes(1)
  })
})

describe('articleSchema', () => {
  it('returns a schema.org-compatible json string', () => {
    useStructuredData.__set__('buildImage', mockBuildImage)
    useStructuredData.__set__('personSchema', mockPersonSchema)
    useStructuredData.__set__('publisherSchema', mockPublisherSchema)
    const articleSchema = useStructuredData.__get__('articleSchema')
    const data = {
      headline: '',
      url: '',
      description: '',
      image: {},
      fallbackImage: {},
      dateModified: '',
      datePublished: '',
      name: '',
      siteName: '',
      jobTitle: '',
      sameAs: [],
    }
    const expected =
      '[{"person":"person"},{"publisher":"publisher"},{"@context":"http://schema.org","@type":"BlogPosting","headline":"","url":"","description":"","image":{"image":"image"},"author":{"@id":"#person"},"datePublished":"","dateModified":"","publisher":{"@id":"#publisher"},"mainEntityOfPage":{"@type":"WebPage","@id":""}}]'
    expect(articleSchema(data)).toEqual(expected)
    expect(mockBuildImage).toHaveBeenCalledTimes(1)
    expect(mockPersonSchema).toHaveBeenCalledTimes(1)
    expect(mockPublisherSchema).toHaveBeenCalledTimes(1)
  })
})

describe('webpageSchema', () => {
  it('returns a schema.org-compatible json string', () => {
    useStructuredData.__set__('buildImage', mockBuildImage)
    useStructuredData.__set__('personSchema', mockPersonSchema)
    const webpageSchema = useStructuredData.__get__('webpageSchema')
    const data = {
      headline: '',
      url: '',
      description: '',
      image: {},
      name: '',
      jobTitle: '',
      schemaType: '',
      sameAs: [],
    }
    const expected =
      '[{"person":"person"},{"@context":"http://schema.org","@type":"","headline":"","url":"","description":"","primaryImageOfPage":{"image":"image"},"author":{"@id":"#person"},"copyrightHolder":{"@id":"#person"}}]'
    expect(webpageSchema(data)).toEqual(expected)
    expect(mockBuildImage).toHaveBeenCalledTimes(1)
    expect(mockPersonSchema).toHaveBeenCalledTimes(1)
  })
})

describe('publisherSchema', () => {
  it('returns an object of schema.org data', () => {
    useStructuredData.__set__('buildImage', mockBuildImage)
    const publisherSchema = useStructuredData.__get__('publisherSchema')
    const data = {
      siteName: '',
      logo: '',
    }
    const expected = {
      '@context': 'http://schema.org/',
      '@id': '#publisher',
      '@type': 'Organization',
      logo: { image: 'image' },
      name: '',
    }
    expect(publisherSchema(data)).toEqual(expected)
    expect(mockBuildImage).toHaveBeenCalledTimes(1)
  })
})

describe('personSchema', () => {
  it('returns an object of schema.org data', () => {
    const personSchema = useStructuredData.__get__('personSchema')
    const data = {
      name: '',
      jobTitle: '',
      sameAs: [],
    }
    const expected = {
      '@context': 'http://schema.org/',
      '@id': '#person',
      '@type': 'Person',
      jobTitle: '',
      name: '',
      sameAs: [],
    }
    expect(personSchema(data)).toEqual(expected)
  })
})

describe('buildImage', () => {
  it('returns an object of schema.org data', () => {
    const buildImage = useStructuredData.__get__('buildImage')
    const data = {
      url: '',
      height: 100,
      width: 100,
    }
    const expected = {
      '@context': 'http://schema.org/',
      '@type': 'ImageObject',
      url: '',
      height: 100,
      width: 100,
    }
    expect(buildImage(data)).toEqual(expected)
  })
})
