import React, { Fragment, useState, useContext } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Fonts from '../components/Fonts'
import Nav from '../components/Nav'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { useSiteData } from '../hooks'
import { ThemeOptionsContext } from '../context/ThemeOptions'
import '../style/all.sass'

const NotFoundPage = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const {
    name,
    favicon,
    siteName,
    themeOptions: { showThemeSwitcher, fontScheme: ssrFontScheme },
  } = useSiteData()
  const { colorScheme, setColorScheme, fontScheme, setFontScheme } = useContext(
    ThemeOptionsContext,
  )

  return (
    <Fragment>
      <Fonts
        fontScheme={typeof window === 'undefined' ? ssrFontScheme : fontScheme}
      />
      <Helmet bodyAttributes={{ class: 'frontend' }}>
        <html lang="en" className={`${colorScheme} ${fontScheme}`} />
        <title>Page Not Found</title>
        <meta name="robots" content="no-index, no-follow" />
        <meta
          name="description"
          content="Whoops! You entered a route that doesn&rsquo;t exist"
        />
        {!!favicon && !!favicon.childImageSharp && (
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={favicon.childImageSharp.fixed.src}
          />
        )}
      </Helmet>

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
              />
            )}
          </div>
        </header>

        <main id="site-main" className="site-main">
          <div id="swup" className="transition-fade">
            <div
              className="post-content page-template no-image"
              style={{ padding: 0 }}
            >
              <header className="page-head">
                <h1 className="page-head-title">Not Found</h1>
                <p className="page-head-description">
                  You just hit a route that doesn&#39;t exist... the sadness.
                </p>
              </header>
            </div>
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

export default NotFoundPage
