import React from "react"
import PropTypes from "prop-types"
import CssBaseline from "@material-ui/core"

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
