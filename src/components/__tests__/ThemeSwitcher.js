import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import ThemeSwitcher from '../ThemeSwitcher'
import userEvent from '@testing-library/user-event'
import { useSiteMeta as useSiteMetaMock } from '../../hooks'

const DEFAULT_PROPS = {
  colorScheme: 'green',
  setColorScheme: jest.fn(),
  fontScheme: 'roboto',
  setFontScheme: jest.fn(),
  previewOpen: true,
  setPreviewOpen: jest.fn(),
}

jest.mock('../../hooks', () => ({
  useSiteMeta: jest.fn(),
}))

jest.mock('uuid', () => ({
  v4: jest
    .fn(() => {
      const { v4 } = jest.requireActual('uuid')
      return v4()
    })
    .mockImplementationOnce(() => 'uuid1')
    .mockImplementationOnce(() => 'uuid2')
    .mockImplementationOnce(() => 'uuid3')
    .mockImplementationOnce(() => 'uuid4'),
}))

beforeEach(() => {
  useSiteMetaMock.mockImplementation(() => ({
    colorOptions: [
      { value: 'green', label: 'green' },
      { value: 'red', label: 'red' },
    ],
    fontOptions: [
      { value: 'roboto', label: 'roboto' },
      { value: 'arial', label: 'arial' },
    ],
  }))
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('ThemeSwitcher', () => {
  it('snapshot renders properly', () => {
    const tree = renderer.create(<ThemeSwitcher {...DEFAULT_PROPS} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('toggles theme switcher menu on button click', () => {
    render(<ThemeSwitcher {...DEFAULT_PROPS} />)
    userEvent.click(screen.getByRole('button'))
    expect(DEFAULT_PROPS.setPreviewOpen.mock.calls.length).toBe(1)
  })
  it('updates font on font selection', () => {
    render(<ThemeSwitcher {...DEFAULT_PROPS} />)
    userEvent.selectOptions(screen.getByLabelText('Font Scheme'), 'arial')
    expect(DEFAULT_PROPS.setFontScheme.mock.calls.length).toBe(1)
  })
  it('updates color on color selection', () => {
    render(<ThemeSwitcher {...DEFAULT_PROPS} />)
    userEvent.selectOptions(screen.getByLabelText('Color Scheme'), 'red')
    expect(DEFAULT_PROPS.setColorScheme.mock.calls.length).toBe(1)
  })
})
