/* eslint react/jsx-no-target-blank: 0 */ // --> OFF

import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { useNavPages, useSiteData } from '../hooks'

const NavLink = ({ slug, name }) => {
  const linkClass = 'nav-' + name.replace(' ', '-').toLowerCase()
  return (
    <li className={linkClass}>
      <Link to={slug}>{name}</Link>
    </li>
  )
}

NavLink.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const SocialLink = ({ slug, name }) => (
  <a className="social-link" rel="noopener" target="_blank" href={slug}>
    {name}
  </a>
)

SocialLink.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const Nav = ({ toggleNav, setToggleNav, siteName }) => {
  const navPages = useNavPages()
  const {
    socialLinks: { twitter, facebook, linkedin, pinterest, instagram },
  } = useSiteData()
  const socialLinks = [
    // get any social sites that we have
    { Twitter: twitter },
    { Facebook: facebook },
    { LinkedIn: linkedin },
    { Pinterest: pinterest },
    { Instagram: instagram },
  ].filter(
    (item) =>
      !!Object.values(item)[0] &&
      !!Object.values(item)[0].url &&
      !!Object.values(item)[0].show,
  )

  return (
    <Fragment>
      <button
        className="nav-burger"
        onClick={() => setToggleNav(!toggleNav)}
        aria-label="Open or close menu"
      >
        <div className="hamburger hamburger--collapse">
          <div className="hamburger-box">
            <div className="hamburger-inner" />
          </div>
        </div>
      </button>
      <nav id="swup" className="site-head-left">
        <ul className="nav">
          {!!navPages &&
            navPages.length > 1 &&
            navPages.map((page) => (
              <NavLink slug={page.slug} name={page.label} key={uuidv4()} />
            ))}
        </ul>
      </nav>
      <div className="site-head-center">
        <Link className="site-head-logo" to={`/`}>
          {siteName}
        </Link>
      </div>
      <div className="site-head-right">
        <div className="social-links">
          {!!socialLinks &&
            !!socialLinks.length &&
            socialLinks.map((social) => (
              <SocialLink
                slug={Object.values(social)[0].url}
                name={Object.keys(social)[0]}
                key={uuidv4()}
              />
            ))}
        </div>
      </div>
    </Fragment>
  )
}

Nav.propTypes = {
  toggleNav: PropTypes.bool.isRequired,
  siteName: PropTypes.string.isRequired,
}

export default Nav
