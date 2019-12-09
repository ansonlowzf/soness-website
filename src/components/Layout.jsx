import React from "react"
import PropTypes from "prop-types"
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core"
import green from "@material-ui/core/colors/green"

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
})

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
