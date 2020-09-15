import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import InlineBackgroundImage from '../InlineBackgroundImage'

const DEFAULT_PROPS = {
  src: {
    childImageSharp: {
      fluid: {},
    },
  },
  alt: 'alttext',
  children: <div>children</div>,
}

jest.mock('gatsby-image', () => (props) => (
  <div data-testid="gatsby-image">{JSON.stringify(props)}</div>
))

afterEach(() => {
  jest.clearAllMocks()
})

describe('InlineBackgroundImage', () => {
  it('snapshot renders properly', () => {
    const tree = renderer.create(<InlineBackgroundImage {...DEFAULT_PROPS} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('accepts a childImageSharp for src and converts it to a fluid prop', () => {
    const props = { ...DEFAULT_PROPS }
    render(<InlineBackgroundImage {...props} />)
    const elem = screen.getByTestId('gatsby-image')
    expect(elem.innerHTML).toMatch(/"fluid":{}/)
  })
  it('accepts a string for src', () => {
    const props = { ...DEFAULT_PROPS, src: '/foobar.jpg' }
    render(<InlineBackgroundImage {...props} />)
    const elem = screen.getByAltText('alttext')
    expect(elem.getAttribute('src')).toEqual('/foobar.jpg')
  })
  it('accepts a fluid prop instead of src', () => {
    const props = { alt: 'alttext', children: <div>children</div>, fluid: {} }
    render(<InlineBackgroundImage {...props} />)
    const elem = screen.getByTestId('gatsby-image')
    expect(elem.innerHTML).toMatch(/"fluid":{}/)
  })
  it('prefers a childImageSharp src over a fluid prop', () => {
    const props = { ...DEFAULT_PROPS, fluid: { src: 'not me' } }
    render(<InlineBackgroundImage {...props} />)
    const elem = screen.getByTestId('gatsby-image')
    expect(elem.innerHTML).not.toMatch(/"not me"/)
  })
  it('accepts an array for the fluid prop', () => {
    const props = {
      alt: 'alttext',
      children: <div>children</div>,
      fluid: ['fluid1', 'fluid2'],
    }
    render(<InlineBackgroundImage {...props} />)
    const elem = screen.getByTestId('gatsby-image')
    expect(elem.innerHTML).toMatch(/"fluid1","fluid2"/)
  })
  it('accepts a custom rgba value for the overlayColor if well-formed', () => {
    const propsValid = {
      ...DEFAULT_PROPS,
      overlayColor: 'rgba(255, 255,      255,0.35)',
    }
    const propsInvalid = {
      ...DEFAULT_PROPS,
      overlayColor: 'foobar',
    }
    render(
      <div>
        <div data-testid="valid">
          <InlineBackgroundImage {...propsValid} />
        </div>
        <div data-testid="invalid">
          <InlineBackgroundImage {...propsInvalid} />
        </div>
      </div>,
    )
    const valid = screen.getByTestId('valid').querySelector('.is-overlay')
    const invalid = screen.getByTestId('invalid').querySelector('.is-overlay')
    expect(valid.style.backgroundColor).toEqual('rgba(255, 255, 255, 0.35)')
    expect(invalid.style.backgroundColor).not.toBe('foobar')
  })
  // it('', () =>{  })
  // it('', () =>{  })
  // it('', () =>{  })
  // it('', () =>{  })
  // it('', () =>{  })
  // it('', () =>{  })
  // it('', () =>{  })
  // it('', () =>{  })
})
