import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import HTMLContent from '../HTMLContent'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

const DEFAULT_PROPS = {
  content: '<div class="fooclass">foobar</div>',
  className: 'foobar',
  style: {},
  inlineImages: [],
}

const INLINE_IMAGES = [
  {
    childImageSharp: {
      fluid: {
        originalName: 'foobar.jpg',
        presentationWidth: '600',
      },
    },
  },
  {
    childImageSharp: {
      fluid: {
        originalName: 'bazbaz.jpg',
        presentationWidth: '555',
      },
    },
  },
]

jest.mock('gatsby-image', () => (props) => (
  <div data-testid="gatsby-image">{JSON.stringify(props)}</div>
))

const mockParseIframe = jest.fn(() => 'iframe mocked')
const mockParseImg = jest.fn(() => 'img mocked')

afterEach(() => {
  jest.clearAllMocks()
  __rewire_reset_all__()
})

describe('HTMLContent', () => {
  it(`snapshot renders correctly`, () => {
    const tree = renderer.create(<HTMLContent {...DEFAULT_PROPS} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('adds custom classnames and styles if provided', () => {
    const props = { ...DEFAULT_PROPS, style: { maxHeight: '100px' } }
    render(<HTMLContent {...props} />)
    const elem = screen.getByText('foobar').parentElement
    expect(elem.style.maxHeight).toEqual('100px')
    expect(elem.classList.contains('foobar')).toBe(true)
  })

  it('parses iframes from the html string', () => {
    HTMLContent.__set__('parseIframe', mockParseIframe)
    HTMLContent.__set__('parseImg', mockParseImg)
    render(
      <HTMLContent
        {...DEFAULT_PROPS}
        content={'<iframe src="http://foobar.com"></iframe>'}
      />,
    )
    expect(mockParseIframe).toHaveBeenCalled()
    expect(mockParseImg).not.toHaveBeenCalled()
  })

  it('does not parse images from the html string if no inline images are provided', () => {
    HTMLContent.__set__('parseIframe', mockParseIframe)
    HTMLContent.__set__('parseImg', mockParseImg)
    render(
      <HTMLContent
        {...DEFAULT_PROPS}
        content={'<img src="/img/foobar.jpg" alt="foobar alt">'}
      />,
    )
    expect(mockParseIframe).not.toHaveBeenCalled()
    expect(mockParseImg).not.toHaveBeenCalled()
  })

  it('parses images from the html string if inline images are provided', () => {
    HTMLContent.__set__('parseIframe', mockParseIframe)
    HTMLContent.__set__('parseImg', mockParseImg)
    render(
      <HTMLContent
        {...DEFAULT_PROPS}
        content={'<img src="/img/foobar.jpg" alt="foobar alt">'}
        inlineImages={[{ src: 'foobar.jpg' }]}
      />,
    )
    expect(mockParseIframe).not.toHaveBeenCalled()
    expect(mockParseImg).toHaveBeenCalled()
  })
})

describe('parseIframe', () => {
  it('renders an iframe with no source if not in view', () => {
    const parseIframe = HTMLContent.__get__('parseIframe')
    const attribs = { src: '/foobar.html' }
    HTMLContent.__set__('attribsToProps', jest.fn().mockReturnValue(attribs))
    render(parseIframe(attribs))
    mockAllIsIntersecting(false)
    const iframe = screen.getByTitle('Embedded content')
    expect(iframe.getAttribute('src')).toBe('')
  })

  it('renders an iframe with a source if in view', () => {
    const parseIframe = HTMLContent.__get__('parseIframe')
    const attribs = { src: '/foobar.html' }
    HTMLContent.__set__('attribsToProps', jest.fn().mockReturnValue(attribs))
    render(parseIframe(attribs))
    mockAllIsIntersecting(true)
    const iframe = screen.getByTitle('Embedded content')
    expect(iframe.getAttribute('src')).toBe('/foobar.html')
  })
})

describe('parseImg', () => {
  it('throws an error if no matching image is found', () => {
    const parseImg = HTMLContent.__get__('parseImg')
    const attribs = { class: 'imgclass', alt: 'imgalt' }
    HTMLContent.__set__('attribsToProps', jest.fn().mockReturnValue(attribs))
    expect(() => {
      render(parseImg(attribs, []))
    }).toThrow()
  })
  it('returns a gatsby image with className, alt, fluid, and style props only', () => {
    const parseImg = HTMLContent.__get__('parseImg')
    const attribs = {
      class: 'imgclass',
      alt: 'imgalt',
      src: '/img/foobar.jpg',
      rel: 'invalid',
    }
    render(parseImg(attribs, INLINE_IMAGES))
    const elem = screen.getByTestId('gatsby-image')
    expect(elem.innerHTML).toMatch(/"alt":"imgalt"/)
    expect(elem.innerHTML).toMatch(/"className":"imgclass"/)
    expect(elem.innerHTML).toMatch(/"fluid":{"originalName":"foobar.jpg"/)
    expect(elem.innerHTML).toMatch(
      /"style":{"width":"600px","maxWidth":"100%"}/,
    )
    expect(elem.innerHTML).not.toMatch(/"rel":"invalid"/)
  })
  it('generates an alt tag if none is provided', () => {
    const parseImg = HTMLContent.__get__('parseImg')
    const attribs = {
      class: 'imgclass',
      src: '/img/foobar.jpg',
      rel: 'invalid',
    }
    render(parseImg(attribs, INLINE_IMAGES))
    const elem = screen.getByTestId('gatsby-image')
    expect(elem.innerHTML).toMatch(/"alt":"foobar.jpg"/)
  })
})

describe('attribsToProps', () => {
  it('returns an empty object when given no input', () => {
    const attribsToProps = HTMLContent.__get__('attribsToProps')
    const result = attribsToProps()
    expect(result).toEqual({ style: {} })
  })
  it('strips the src attribute if present but preserves others', () => {
    const attribsToProps = HTMLContent.__get__('attribsToProps')
    const result = attribsToProps({
      src: '/img/foobar.jpg',
      alt: 'alttext',
      class: 'classname',
    })
    expect(result).toEqual({
      style: {},
      alt: 'alttext',
      className: 'classname',
    })
  })
  it('converts styles to their JS equivalent', () => {
    const attribsToProps = HTMLContent.__get__('attribsToProps')
    const result = attribsToProps({
      style: 'max-width:100%;max-height:50px',
    })
    expect(result).toEqual({
      style: {
        maxWidth: '100%',
        maxHeight: '50px',
      },
    })
  })
})

describe('convertStyles', () => {
  it('returns an empty object if there are no styles found', () => {
    const convertStyles = HTMLContent.__get__('convertStyles')
    const result = convertStyles('')
    expect(result).toEqual({})
  })
  it('camelcases all styles, regardless of whitespace', () => {
    const convertStyles = HTMLContent.__get__('convertStyles')
    const styles =
      '         max-width: 100px;foobar:30; border: 1px solid green'
    const result = convertStyles(styles)
    expect(result).toEqual({
      maxWidth: '100px',
      foobar: '30',
      border: '1px solid green',
    })
  })
})
