import React from 'react'
import renderer from 'react-test-renderer'

import NoScript from '../NoScript'

describe('NoScript', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NoScript />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
