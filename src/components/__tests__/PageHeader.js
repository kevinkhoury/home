import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import PageHeader from '../PageHeader'

const DEFAULT_PROPS = {
  header: 'header',
  subheader: 'subheader',
  missionStatement: 'missionStatement',
}

describe('PageHeader', () => {
  it('snapshot renders properly', () => {
    const tree = renderer.create(<PageHeader {...DEFAULT_PROPS} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('renders all props as text', () => {
    render(<PageHeader {...DEFAULT_PROPS} />)
    const header = screen.getByText('header')
    const subheader = screen.getByText('header')
    const missionStatement = screen.getByText('missionStatement')

    expect(header).toBeTruthy()
    expect(subheader).toBeTruthy()
    expect(missionStatement).toBeTruthy()
  })
  it('renders only header if that is all that is provided', () => {
    render(<PageHeader header="header" />)
    const header = screen.getByText('header')
    expect(header).toBeTruthy()
    expect(screen.queryByText('subheader')).toBeNull()
    expect(screen.queryByText('missionStatement')).toBeNull()
  })
})
