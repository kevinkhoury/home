import React, { Fragment, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'
import Fonts from './Fonts'
import { Link } from 'gatsby'
import ThemeSwitcher from './ThemeSwitcher'
import { ThemeOptionsContext } from '../context/ThemeOptions'
import { useSiteData } from '../hooks'
import SEO, { seoPropTypes } from './SEO'

import '../style/all.sass'

const Layout = ({ seoProps, children }) => {
  const [toggleNav, setToggleNav] = useState(false)
  const {
    colorScheme,
    setColorScheme,
    fontScheme,
    setFontScheme,
    previewOpen,
    setPreviewOpen,
  } = useContext(ThemeOptionsContext)
  const {
    name,
    siteName,
    themeOptions: { showThemeSwitcher, fontScheme: ssrFontScheme },
  } = useSiteData()

  return (
    <Fragment>
      <Fonts
        fontScheme={typeof window === 'undefined' ? ssrFontScheme : fontScheme}
      />
      <SEO {...seoProps} />
      <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
        <header className="site-head">
          <div className="site-head-container">
            <Nav
              toggleNav={toggleNav}
              setToggleNav={setToggleNav}
              siteName={siteName}
            />
            {!!showThemeSwitcher && (
              <ThemeSwitcher
                colorScheme={colorScheme}
                setColorScheme={setColorScheme}
                fontScheme={fontScheme}
                setFontScheme={setFontScheme}
                previewOpen={previewOpen}
                setPreviewOpen={setPreviewOpen}
              />
            )}
          </div>
        </header>

        <main id="site-main" className="site-main">
          <div id="swup" className="transition-fade">
            {children}
          </div>
        </main>

        <footer className="site-foot">
          &copy; {new Date().getFullYear()} <Link to={`/`}>{name}</Link>, all
          rights reserved.
        </footer>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  seoProps: PropTypes.shape(seoPropTypes).isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
