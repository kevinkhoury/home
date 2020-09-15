import React, {
  useState as useStateMock,
  useContext as useContextMock,
} from 'react'
import { useSiteData as useSiteDataMock } from '../../hooks'
import moment from 'moment'
import MockDate from 'mockdate'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import Layout from '../Layout'

const DEFAULT_PROPS = {
  seoProps: {
    pageTitle: 'pagetitle',
    metaDescription: 'metadescription',
    featuredImage: {
      src: {
        childImageSharp: {
          fluid: {},
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
  },
  children: <div>children</div>,
}

jest.mock('../SEO', () => () => 'SEO')
jest.mock('../Fonts', () => () => 'Fonts')
jest.mock('../Nav', () => () => 'Nav')
jest.mock('../ThemeSwitcher', () => () => 'ThemeSwitcher')
jest.mock('../../context/ThemeOptions', () => () => 'ThemeOptionsContext')
jest.mock('../../hooks', () => ({
  useSiteData: jest.fn(),
}))
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useContext: jest.fn(),
}))

beforeEach(() => {
  MockDate.set('2020-01-01')
  useStateMock.mockImplementation((init) => [init, jest.fn()])
  useContextMock.mockImplementation(() => ({
    colorScheme: 'colorScheme',
    setColorScheme: jest.fn(),
    fontScheme: 'fontScheme',
    setFontScheme: jest.fn(),
    previewOpen: true,
    setPreviewOpen: jest.fn(),
  }))
  useSiteDataMock.mockImplementation(() => ({
    name: 'name',
    siteName: 'siteName',
    themeOptions: {
      showThemeSwitcher: true,
      fontScheme: 'fontScheme',
    },
  }))
})

afterEach(() => {
  MockDate.reset()
  jest.clearAllMocks()
})

describe('Layout', () => {
  it('snapshot renders properly', () => {
    const tree = renderer.create(<Layout {...DEFAULT_PROPS} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('shows theme switcher with default context mock', () => {
    render(<Layout {...DEFAULT_PROPS} />)
    const result = screen.getByText(/ThemeSwitcher/)
    expect(result).toBeTruthy()
  })
})
