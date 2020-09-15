import { renderHook } from '@testing-library/react-hooks'
import useNavPages from '../useNavPages'
import { useStaticQuery } from 'gatsby'

useStaticQuery.mockImplementation(() => ({
  markdownRemark: {
    frontmatter: {
      menuItems: [
        { slug: '/', label: 'Home' },
        { slug: '/foobar1', label: 'foobar1' },
        { slug: '/blog/foobar2', label: 'foobar2' },
        { slug: '/foobar3', label: 'foobar3' },
        { slug: '/foobar4', label: 'foobar4' },
      ],
    },
  },
}))

afterEach(() => {
  jest.clearAllMocks()
})

describe('useNavPages', () => {
  it('returns and formats all menu items with trailing slashes', () => {
    const { result } = renderHook(() => useNavPages())
    expect(result.current).toEqual([
      { slug: '/', label: 'Home' },
      { slug: '/foobar1/', label: 'foobar1' },
      { slug: '/blog/foobar2/', label: 'foobar2' },
      { slug: '/foobar3/', label: 'foobar3' },
      { slug: '/foobar4/', label: 'foobar4' },
    ])
  })
})
