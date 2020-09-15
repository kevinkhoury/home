import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

import Fonts from '../Fonts'

const fontList = ['muli', 'lora', 'proza', 'rubik', 'popp']

describe('Fonts', () => {
  fontList.forEach((font) => {
    it(`renders ${font} correctly`, () => {
      const tree = renderer.create(<Fonts fontScheme={font} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('fails on invalid input', () => {
    expect(() => {
      render(<Font />)
    }).toThrow()
    expect(() => {
      render(<Font fontScheme="foobar" />)
    }).toThrow()
  })
})
