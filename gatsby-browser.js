import React from 'react'
import { ThemeOptionsProvider } from './src/context/ThemeOptions'

export const wrapRootElement = ({ element }) => (
  <ThemeOptionsProvider>{element}</ThemeOptionsProvider>
)

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This website has been updated. Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
