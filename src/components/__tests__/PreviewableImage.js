import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import PreviewableImage from '../PreviewableImage'

const M_D_IMG = {
  d: {
    childImageSharp: {
      fluid: {
        foobar: `desktop fluid`,
      },
    },
  },
  m: {
    childImageSharp: { fluid: { foobar: `mobile fluid` } },
  },
}

const DEFAULT_PROPS = {
  src: {
    childImageSharp: {
      fluid: { foobar: `basic fluid` },
      original: {
        height: 100,
        width: 200,
      },
    },
  },
  isPreview: false,
  alt: 'alttext',
  caption: 'captiontext',
}

jest.mock('gatsby-image', () => (props) => (
  <div data-testid="gatsby-image">{JSON.stringify(props)}</div>
))

afterEach(() => {
  jest.clearAllMocks()
})

describe('PreviewableImage', () => {
  it('snapshot renders properly', () => {
    const tree = renderer.create(<PreviewableImage {...DEFAULT_PROPS} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('creates a gatsby image if given childImageSharp', () => {
    render(<PreviewableImage {...DEFAULT_PROPS} />)
    const img = screen.getByTestId('gatsby-image')
    expect(img.innerHTML).toMatch(/"className":"gatsby-resp-image-image"/)
  })
  it('creates a caption if given', () => {
    render(<PreviewableImage {...DEFAULT_PROPS} />)
    const caption = screen.getByText(/captiontext/)
    expect(caption).toBeTruthy()
  })
  it('combines desktop and mobile image sources if given', () => {
    const props = { ...DEFAULT_PROPS, src: M_D_IMG }
    render(<PreviewableImage {...props} />)
    const img = screen.getByTestId('gatsby-image')
    expect(img.innerHTML).toMatch(/desktop fluid/)
    expect(img.innerHTML).toMatch(/mobile fluid/)
  })
  it('creates a normal image if given a string', () => {
    render(<PreviewableImage src="/foobar.jpg" alt="alttext" />)
    const img = screen.getByAltText('alttext')
    expect(img.getAttribute('src')).toBe('/foobar.jpg')
  })
})
