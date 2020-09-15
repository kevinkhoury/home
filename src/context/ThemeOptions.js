import React, { createContext, useState } from 'react'
import { useSiteData } from '../hooks'

export const ThemeOptionsContext = createContext('')

export const ThemeOptionsProvider = ({ children }) => {
  const {
    themeOptions: {
      colorScheme: initialColorScheme,
      fontScheme: initialFontScheme,
    },
  } = useSiteData()
  const [colorScheme, setColorScheme] = useState(initialColorScheme)
  const [fontScheme, setFontScheme] = useState(initialFontScheme)
  const [previewOpen, setPreviewOpen] = useState(false)

  return (
    <ThemeOptionsContext.Provider
      value={{
        colorScheme,
        setColorScheme,
        fontScheme,
        setFontScheme,
        previewOpen,
        setPreviewOpen,
      }}
    >
      {children}
    </ThemeOptionsContext.Provider>
  )
}
