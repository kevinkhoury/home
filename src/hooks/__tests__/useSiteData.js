import { renderHook } from '@testing-library/react-hooks'
import useSiteData from '../useSiteData'
import { useStaticQuery } from 'gatsby'

const data = {
  markdownRemark: {
    frontmatter: {
      name: 'name',
      jobTitle: 'jobTitle',
      siteName: 'siteName',
      siteUrl: 'siteUrl',
      socialLinks: [
        {
          twitter: {
            url: 'url',
            show: true,
          },
        },
        {
          facebook: {
            url: 'url',
            show: true,
          },
        },
        {
          linkedin: {
            url: 'url',
            show: true,
          },
        },
        {
          pinterest: {
            url: 'url',
            show: true,
          },
        },
        {
          instagram: {
            url: 'url',
            show: true,
          },
        },
      ],
      themeOptions: {
        colorScheme: 'colorScheme',
        fontScheme: 'fontScheme',
        showThemeSwitcher: true,
      },
      fallbackImage: {
        childImageSharp: {
          original: {
            height: 100,
            width: 100,
          },
          fluid: {
            originalName: 'originalName',
          },
        },
      },
    },
  },
}

useStaticQuery.mockImplementation(() => data)

afterEach(() => {
  jest.clearAllMocks()
})

describe('useSiteData', () => {
  it('returns site data from frontmatter', () => {
    const { result } = renderHook(() => useSiteData())
    expect(result.current).toEqual(data.markdownRemark.frontmatter)
  })
})
