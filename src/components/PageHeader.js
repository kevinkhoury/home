import React from 'react'
import PropTypes from 'prop-types'

const PageHeader = ({ header, subheader, missionStatement }) => (
  <header className="page-head">
    <h1 className="page-head-title">{header}</h1>
    {!!subheader && <p className="page-head-description">{subheader}</p>}
    {!!missionStatement && (
      <p className="page-head-mission-statement">{missionStatement}</p>
    )}
  </header>
)

PageHeader.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  missionStatement: PropTypes.string,
}

export default PageHeader
