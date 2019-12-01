import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `minmax(1em, 1fr) minmax(0px, 37.5rem) minmax(1em, 1fr)`,
        }}
      >
        <main style={{ gridColumn: `2/-2` }}>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
