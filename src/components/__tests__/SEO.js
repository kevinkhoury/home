import React, { useContext as useContextMock } from 'react'
import moment from 'moment'
import renderer from 'react-test-renderer'
import { render, screen, waitFor } from '@testing-library/react'
import SEO from '../SEO'
import {
  useSiteData as useSiteDataMock,
  useStructuredData as useStructuredDataMock,
  useStructuredData,
} from '../../hooks'

const DEFAULT_PROPS = {
  pageTitle: 'pageTitle',
  metaDescription: 'metaDescription',
  featuredImage: {
    src: {
      childImageSharp: {
        fluid: {
          originalName: 'foobar.jpg',
        },
        original: {
          height: 100,
          width: 200,
        },
      },
    },
    d: {
      childImageSharp: {},
    },
    m: {
      childImageSharp: {},
    },
    alt: 'imgalt',
    caption: 'imgcaption',
  },
  slug: '/foobar',
  date: moment('20200101', 'YYYYMMDD'),
  dateModified: moment('20200101', 'YYYYMMDD'),
  templateKey: 'templatekey',
  schemaType: 'schematype',
}

jest.mock('../../context/ThemeOptions', () => () => 'ThemeOptionsContext')
jest.mock('react-device-detect', () => ({ isMobile: jest.fn() }))
jest.mock('../../hooks', () => ({
  useSiteData: jest.fn(),
  useStructuredData: jest.fn(),
}))
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}))

function mockSocialLink(show) {
  return {
    url: 'https://foobar.com',
    show: !!show,
  }
}

beforeEach(() => {
  useContextMock.mockImplementation(() => ({
    colorScheme: 'colorScheme',
    fontScheme: 'fontScheme',
  }))
  useSiteDataMock.mockImplementation(() => ({
    name: 'name',
    siteName: 'siteName',
    jobTitle: 'jobTitle',
    siteUrl: 'siteUrl',
    socialLinks: {
      twitter: { url: 'https://twitter.com/foobar', show: true },
      facebook: mockSocialLink(true),
      linkedin: mockSocialLink(false),
      pinterest: mockSocialLink(true),
      instagram: mockSocialLink(false),
    },
    fallbackImage: {
      childImageSharp: {
        original: {
          height: 100,
          width: 200,
        },
        fluid: {
          originalName: 'fallback.jpg',
        },
      },
    },
  }))
  useStructuredData.mockImplementation((props) => JSON.stringify(props))
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('SEO', () => {
  it('snapshot renders properly', () => {
    const tree = renderer.create(<SEO {...DEFAULT_PROPS} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('creates a document head with all parameters', async () => {
    render(<SEO {...DEFAULT_PROPS} />)
    await waitFor(() => expect(document.title).toEqual('pageTitle'))
    expect(
      document.head
        .querySelector('[name="description"]')
        .getAttribute('content'),
    ).toEqual('metaDescription')
    expect(
      document.head
        .querySelector('[property="og:type"]')
        .getAttribute('content'),
    ).toEqual('webpage')
    expect(
      document.head
        .querySelector('[property="og:title"]')
        .getAttribute('content'),
    ).toEqual('pageTitle')
    expect(
      document.head
        .querySelector('[property="og:description"]')
        .getAttribute('content'),
    ).toEqual('metaDescription')
    expect(
      document.head
        .querySelector('[property="og:url"]')
        .getAttribute('content'),
    ).toEqual('siteUrl/foobar/')
    expect(
      document.head.querySelector('[property="article:author"]'),
    ).toBeNull()
    expect(
      document.head
        .querySelector('[property="og:image"]')
        .getAttribute('content'),
    ).toEqual('siteUrl/img/foobar.jpg')
    expect(
      document.head
        .querySelector('[name="twitter:site"]')
        .getAttribute('content'),
    ).toEqual('@foobar')
    expect(
      document.head
        .querySelector('[name="twitter:title"]')
        .getAttribute('content'),
    ).toEqual('pageTitle')
    expect(
      document.head
        .querySelector('[name="twitter:description"]')
        .getAttribute('content'),
    ).toEqual('metaDescription')
    expect(
      document.head
        .querySelector('[name="twitter:image"]')
        .getAttribute('content'),
    ).toEqual('siteUrl/img/foobar.jpg')
    expect(
      document.head.querySelector('[type="application/ld+json"]').innerHTML,
    ).toMatch(/"sameAs":\[/)
  })
})

describe('buildImage', () => {
  it('formats image data for schema into `url`, `width`, and `height`', () => {
    const buildImage = SEO.__get__('buildImage')
    const { siteUrl, fallbackImage } = useSiteDataMock()
    const result = buildImage(fallbackImage, siteUrl)
    expect(result.url).toBe('siteUrl/img/fallback.jpg')
    expect(result.width).toBe(200)
    expect(result.height).toBe(100)
  })
})
