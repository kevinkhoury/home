import {
  isValidRGBA,
  seoProps,
  getValidDates,
  addTrailingSlash,
  __RewireAPI__ as utils,
} from '../utils'

const mockValidDate = jest.fn(() => ({
  date: '2020',
  dateModified: '2020',
}))

afterEach(() => {
  jest.clearAllMocks()
  __rewire_reset_all__()
})

describe('isValidRGBA', () => {
  it('returns false when input is not a string', () => {
    const result = isValidRGBA({})
    expect(result).toBe(false)
  })
  it('returns false when input is malformed', () => {
    const result = isValidRGBA('foobar rgba(54,54,)')
    expect(result).toBe(false)
  })
  it('returns true when input is an rgba string, regardless of whitespace', () => {
    expect(isValidRGBA('rgba(54,54,0,1)')).toBe(true)
    expect(isValidRGBA('rgba(  54, 54, 0, 0.545)')).toBe(true)
  })
})

describe('seoProps', () => {
  it('flattens graphql data into the SEO props format', () => {
    utils.__Rewire__('getValidDates', mockValidDate)
    const data = {
      markdownRemark: {
        fields: {
          slug: '',
          gitAuthorTime: '2020-01-01',
          gitCreatedTime: '2020-01-01',
        },
        frontmatter: {
          templateKey: '',
          featuredImage: '',
          schemaType: '',
          metaDescription: '',
          pageTitle: '',
          date: '2020-01-01',
        },
      },
    }
    const result = seoProps(data)
    expect(result).toEqual({
      date: '2020',
      dateModified: '2020',
      featuredImage: null,
      metaDescription: '',
      pageTitle: '',
      schemaType: '',
      slug: '',
      templateKey: '',
    })
  })
})

const gitAuthorTime = '2020-08-04T12:59:15-07:00'
const gitCreatedTime = '2020-05-12T13:46:03-07:00'

describe('getValidDates', () => {
  it('prefers date over gitCreatedTime', () => {
    const result = getValidDates('Jan 1, 2020', gitAuthorTime, gitCreatedTime)
    expect(result.date.format('YYYY-MM-DD')).toBe('2020-01-01')
  })
  it('takes gitCreatedTime if date is invalid', () => {
    const result = getValidDates('', gitAuthorTime, gitCreatedTime)
    expect(result.date.format('YYYY-MM-DD')).toBe('2020-05-12')
  })
  it('uses date for modifiedDate if invalid', () => {
    const result = getValidDates('Jan 1, 2020', '', gitCreatedTime)
    expect(result.dateModified.format('YYYY-MM-DD')).toBe('2020-01-01')
  })
})

describe('addTrailingSlash', () => {
  it('returns a single slash for the homepage', () => {
    expect(addTrailingSlash('/')).toBe('/')
  })
  it('adds trailing slashes but only if needed', () => {
    expect(addTrailingSlash('/foo/bar')).toBe('/foo/bar/')
    expect(addTrailingSlash('/foo/bazbaz/')).toBe('/foo/bazbaz/')
  })
})
