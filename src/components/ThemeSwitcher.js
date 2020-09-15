/* eslint jsx-a11y/no-onchange: 0 */ // --> OFF

import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { useSiteMeta } from '../hooks'

const ThemeSwitcher = ({
  colorScheme,
  setColorScheme,
  fontScheme,
  setFontScheme,
  previewOpen,
  setPreviewOpen,
}) => {
  const { colorOptions, fontOptions } = useSiteMeta()

  const outerStyle = {
    position: 'fixed',
    top: '80px',
    left: '20px',
    zIndex: '50',
    boxShadow: '3px 3px 5px rgba(0,0,0,0.25)',
    borderRadius: '0.5rem',
    background: '#fff',
  }

  const wrapperStyle = {
    padding: previewOpen ? '10px' : '0',
    width: 'auto',
    height: 'auto',
    maxHeight: previewOpen ? '300px' : '30px',
    maxWidth: previewOpen ? '220px' : '30px',
    transition: 'all 0.15s ease',
    overflow: 'hidden',
  }

  const buttonStyle = {
    padding: '0 5px',
    lineHeight: '30px',
    height: '30px',
    margin: '0',
    display: 'block',
    width: '30px',
    position: 'absolute',
    right: previewOpen ? '-10px' : '0',
    top: previewOpen ? '-10px' : '0',
    outline: 'none',
    boxShadow: 'none',
  }

  const togglePreview = () => {
    setPreviewOpen(!previewOpen)
  }

  return (
    <div id="theme-switcher" style={outerStyle}>
      <button onClick={togglePreview} style={buttonStyle}>
        {previewOpen ? '×' : 'P'}
      </button>
      <div style={wrapperStyle}>
        <strong>Preview Theme Options</strong>
        <div style={{ marginBottom: '0.75em' }}>
          NOTE: This does not save changes, it only previews
        </div>
        <label htmlFor="theme-preview-colors">Color Scheme</label>
        <select
          id="theme-preview-colors"
          onChange={(e) => {
            setColorScheme(e.target.value)
          }}
          value={colorScheme}
        >
          {colorOptions.map(({ value, label }) => (
            <option key={uuidv4()} value={value}>
              {label}
            </option>
          ))}
        </select>
        <label htmlFor="theme-preview-fonts">Font Scheme</label>
        <select
          id="theme-preview-fonts"
          onChange={(e) => {
            setFontScheme(e.target.value)
          }}
          value={fontScheme}
        >
          {fontOptions.map(({ value, label }) => (
            <option key={uuidv4()} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

ThemeSwitcher.propTypes = {
  colorScheme: PropTypes.string.isRequired,
  setColorScheme: PropTypes.func.isRequired,
  fontScheme: PropTypes.string.isRequired,
  setFontScheme: PropTypes.func.isRequired,
  previewOpen: PropTypes.bool.isRequired,
  setPreviewOpen: PropTypes.func.isRequired,
}

export default ThemeSwitcher
