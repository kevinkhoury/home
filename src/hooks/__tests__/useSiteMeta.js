import { renderHook } from '@testing-library/react-hooks'
import useSiteMeta from '../useSiteMeta'
import { useStaticQuery } from 'gatsby'

const data = {
  site: {
    siteMetadata: {
      title: 'title',
      colorOptions: {
        value: 'value',
        label: 'label',
      },
      fontOptions: {
        value: 'value',
        label: 'label',
      },
    },
  },
}

useStaticQuery.mockImplementation(() => data)

afterEach(() => {
  jest.clearAllMocks()
})

describe('useSiteMeta', () => {
  it('returns site data from frontmatter', () => {
    const { result } = renderHook(() => useSiteMeta())
    expect(result.current).toEqual(data.site.siteMetadata)
  })
})
