import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import moment from 'moment'
import PostFeed from '../PostFeed'

const mockPost = (id) => ({
  image: {
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
      childImageSharp: {
        fluid: {
          foobar: `${id} desktop fluid`,
        },
      },
    },
    m: {
      childImageSharp: { fluid: { foobar: `${id} mobile fluid` } },
    },
    alt: `${id}alt`,
    caption: `${id}caption`,
  },
  slug: `/${id}`,
  pageTitle: `${id}`,
  date: moment('20200101', 'YYYYMMDD'),
})

const DEFAULT_PROPS = {
  isPreview: false,
  posts: [mockPost('foo'), mockPost('bar'), mockPost('baz')],
}

jest.mock('../PostCard', () => (props) => (
  <div data-testid="postcard">{JSON.stringify(props)}</div>
))

jest.mock('uuid', () => ({
  v4: jest
    .fn(() => {
      const { v4 } = jest.requireActual('uuid')
      return v4()
    })
    .mockImplementationOnce(() => 'uuid1')
    .mockImplementationOnce(() => 'uuid2')
    .mockImplementationOnce(() => 'uuid3'),
}))

afterEach(() => {
  jest.clearAllMocks()
})

describe('PostFeed', () => {
  it('snapshot renders properly', () => {
    const tree = renderer.create(<PostFeed {...DEFAULT_PROPS} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('generates a card for each post', () => {
    render(<PostFeed {...DEFAULT_PROPS} />)
    const foo = screen.getByText(/"alt":"fooalt"/)
    const bar = screen.getByText(/"alt":"baralt"/)
    const baz = screen.getByText(/"alt":"bazalt"/)
    expect(foo).toBeTruthy()
    expect(bar).toBeTruthy()
    expect(baz).toBeTruthy()
  })
  it('generates a placeholder during preview', () => {
    const props = { ...DEFAULT_PROPS, isPreview: true }
    render(<PostFeed {...props} />)
    const result = screen.getByText(
      /Your posts will appear here in reverse chronological order/,
    )
    expect(result).toBeTruthy()
  })
  it('generates a placeholder when there are no posts', () => {
    const props = { ...DEFAULT_PROPS, posts: [] }
    render(<PostFeed {...props} />)
    const result = screen.getByText(
      /No posts yet\. Please check back again soon!/,
    )
    expect(result).toBeTruthy()
  })
})
