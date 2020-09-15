import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import moment from 'moment'
import PostCard from '../PostCard'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

const DEFAULT_PROPS = {
  count: 0,
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
          foobar: 'desktop fluid',
        },
      },
    },
    m: {
      childImageSharp: { fluid: { foobar: 'mobile fluid' } },
    },
    alt: 'imgalt',
    caption: 'imgcaption',
  },
  slug: '/foobar',
  pageTitle: 'pagetitle',
  date: moment('20200101', 'YYYYMMDD'),
}

jest.mock('../InlineBackgroundImage', () => (props) => {
  const safeProps = { ...props, children: undefined }
  return (
    <div data-testid="bg-image" className="bg-image">
      {JSON.stringify(safeProps)}
      {props.children}
    </div>
  )
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('PostCard', () => {
  it('snapshot renders properly', () => {
    const tree = renderer.create(<PostCard {...DEFAULT_PROPS} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('renders an image and slug only if provided', () => {
    const minimalProps = { count: 3, pageTitle: 'No posts yet' }
    render(
      <div>
        <div data-testid="full">
          <PostCard {...DEFAULT_PROPS} />
        </div>
        <div data-testid="minimal">
          <PostCard {...minimalProps} />
        </div>
      </div>,
    )
    mockAllIsIntersecting(true)
    const full = screen.getByTestId('full')
    const minimal = screen.getByTestId('minimal')
    expect(full.querySelector('.post-card-date')).toBeTruthy()
    expect(full.querySelector('.post-card-link')).toBeTruthy()
    expect(full.querySelector('.bg-image')).toBeTruthy()
    expect(minimal.querySelector('.post-card-date')).toBeNull()
    expect(minimal.querySelector('.post-card-link')).toBeNull()
    expect(minimal.querySelector('.bg-image')).toBeNull()
  })
  it('renders different container classes and images for every 4th card', () => {
    const smallProps = { ...DEFAULT_PROPS, count: 1 }
    render(
      <div>
        <div data-testid="large">
          <PostCard {...DEFAULT_PROPS} />
        </div>
        <div data-testid="small">
          <PostCard {...smallProps} />
        </div>
      </div>,
    )
    mockAllIsIntersecting(true)
    const small = screen.getByTestId('small').querySelector('.post')
    const large = screen.getByTestId('large').querySelector('.post')
    expect(small.classList.contains('post-card-large')).not.toBeTruthy()
    expect(large.classList.contains('post-card-large')).toBeTruthy()
    expect(small.classList.contains('with-image')).toBeTruthy()
    expect(large.classList.contains('with-image')).toBeTruthy()
    expect(small.querySelector('.bg-image').innerHTML).not.toMatch(
      /desktop fluid/,
    )
    expect(large.querySelector('.bg-image').innerHTML).toMatch(/desktop fluid/)
  })
})
