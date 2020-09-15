import React, { useContext } from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeOptionsProvider, ThemeOptionsContext } from '../ThemeOptions'

jest.mock('../../hooks', () => ({
  useSiteData: jest.fn().mockReturnValue({
    themeOptions: {
      colorScheme: 'colorScheme',
      fontScheme: 'fontScheme',
      showThemeSwitcher: true,
    },
  }),
}))

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn((init) => [init, jest.fn(() => 'mocked')]),
}))

afterEach(() => {
  jest.clearAllMocks()
})

const Consumer = () => {
  const {
    colorScheme,
    setColorScheme,
    fontScheme,
    setFontScheme,
    previewOpen,
    setPreviewOpen,
  } = useContext(ThemeOptionsContext)

  return (
    <div data-testid="context">
      {JSON.stringify({
        colorScheme,
        setColorScheme: setColorScheme(),
        fontScheme,
        setFontScheme: setFontScheme(),
        previewOpen,
        setPreviewOpen: setPreviewOpen(),
      })}
    </div>
  )
}

describe('ThemeOptionsProvider', () => {
  it('returns current theme options and the toggles to change them', () => {
    render(
      <ThemeOptionsProvider>
        <Consumer />
      </ThemeOptionsProvider>,
    )
    const result = screen.getByTestId('context').innerHTML
    expect(result).toEqual(
      '{"colorScheme":"colorScheme","setColorScheme":"mocked","fontScheme":"fontScheme","setFontScheme":"mocked","previewOpen":false,"setPreviewOpen":"mocked"}',
    )
  })
})
