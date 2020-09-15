import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import ExtraContent from '../ExtraContent'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

jest.mock('../HTMLContent', () => () => 'HTMLContent')

const DEFAULT_PROPS = {
  content: 'foobar',
  page: 'foobar',
  inlineImages: [],
}

afterEach(() => {
  jest.clearAllMocks()
})

describe('ExtraContent', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<ExtraContent {...DEFAULT_PROPS} />)
    mockAllIsIntersecting(true)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('adds `visible` class when in view', () => {
    render(<ExtraContent {...DEFAULT_PROPS} />)
    mockAllIsIntersecting(true)
    const elem = screen.getByText('HTMLContent')
    expect(elem.classList.contains('visible')).toBe(true)
  })
  it('removes `visible` class when not in view', () => {
    render(<ExtraContent {...DEFAULT_PROPS} />)
    mockAllIsIntersecting(false)
    const elem = screen.getByText('HTMLContent')
    expect(elem.classList.contains('visible')).toBe(false)
  })
})
