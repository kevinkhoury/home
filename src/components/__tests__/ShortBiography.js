import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import ShortBiography from '../ShortBiography'

const DEFAULT_PROPS = {
  learnMoreButton: {
    link: 'link',
    label: 'label',
  },
  shortBiography: 'shortBiography',
  image: {
    src: {
      childImageSharp: {
        fluid: {},
        original: {
          height: 100,
          width: 100,
        },
      },
    },
    m: {
      childImageSharp: {},
    },
    d: {
      childImageSharp: {},
    },
    square: {
      childImageSharp: {},
    },
    alt: 'alttext',
    caption: 'captiontext',
  },
  isPreview: false,
}

jest.mock('./PreviewableImage', () => () => 'previewableImage')

afterEach(() => {
  jest.clearAllMocks()
})

describe('ShortBiography', () => {
  it('snapshot renders properly', () => {
    const tree = renderer.create(<ShortBiography {...DEFAULT_PROPS} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('renders empty divs if no content provided', () => {
    render(<ShortBiography />)
    expect(screen.queryByText('label')).toBeNull()
    expect(screen.queryByText('shortBiography')).toBeNull()
    expect(screen.queryByAltText('alttext')).toBeNull()
    expect(screen.queryByText('captiontext')).toBeNull()
  })
})
