import React from 'react'
import {
  useSiteData as useSiteDataMock,
  useNavPages as useNavPagesMock,
} from '../../hooks'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Nav from '../Nav'

const DEFAULT_PROPS = {
  toggleNav: false,
  setToggleNav: jest.fn(),
  siteName: 'foobar.com',
}

jest.mock('../../hooks', () => ({
  useSiteData: jest.fn(),
  useNavPages: jest.fn(),
}))

function mockSocialLink(show) {
  return {
    url: 'https://foobar.com',
    show: !!show,
  }
}

beforeEach(() => {
  useSiteDataMock.mockImplementation(() => ({
    socialLinks: {
      twitter: mockSocialLink(true),
      facebook: mockSocialLink(true),
      linkedin: mockSocialLink(false),
      pinterest: mockSocialLink(true),
      instagram: mockSocialLink(false),
    },
  }))
  useNavPagesMock.mockImplementation(() => [
    {
      slug: '/foobar1',
      label: 'Foobar1',
    },
    {
      slug: '/foobar2',
      label: 'Foobar2',
    },
    {
      slug: '/foobar3',
      label: 'Foobar3',
    },
  ])
})

afterEach(() => {
  jest.clearAllMocks()
  __rewire_reset_all__()
})

describe('Nav', () => {
  it('snapshot renders properly', () => {
    const tree = renderer.create(<Nav {...DEFAULT_PROPS} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('renders all nav items', () => {
    render(<Nav {...DEFAULT_PROPS} />)
    const result1 = screen.getByText(/Foobar1/)
    const result2 = screen.getByText(/Foobar1/)
    const result3 = screen.getByText(/Foobar3/)
    expect(result1).toBeTruthy()
    expect(result2).toBeTruthy()
    expect(result3).toBeTruthy()
  })
  it('renders only social nav items marked with show === true', () => {
    render(<Nav {...DEFAULT_PROPS} />)
    const result1 = screen.getByText(/Twitter/)
    const result2 = screen.getByText(/Facebook/)
    const result3 = screen.getByText(/Pinterest/)
    expect(result1).toBeTruthy()
    expect(result2).toBeTruthy()
    expect(result3).toBeTruthy()
  })
  it('toggles nav on button click', () => {
    render(<Nav {...DEFAULT_PROPS} />)
    userEvent.click(screen.getByRole('button'))
    expect(DEFAULT_PROPS.setToggleNav.mock.calls.length).toBe(1)
  })
})

describe('SocialLink', () => {
  it('snapshot renders properly', () => {
    const SocialLink = Nav.__get__('SocialLink')
    const tree = renderer.create(<SocialLink slug="/slug" name="name" />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('NavLink', () => {
  it('snapshot renders properly', () => {
    const NavLink = Nav.__get__('NavLink')
    const tree = renderer.create(<NavLink slug="/slug" name="Name" />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
