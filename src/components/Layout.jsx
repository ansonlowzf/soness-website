import React from "react"
import PropTypes from "prop-types"
import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core"
import green from "@material-ui/core/colors/green"

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
})

const Layout = ({ children }) => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <main>{children}</main>
      </MuiThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
