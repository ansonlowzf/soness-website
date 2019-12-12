import React from "react"
import PropTypes from "prop-types"
import TopNavigation from "../components/top-nav"
import { CssBaseline } from "@material-ui/core"
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import { green, amber } from "@material-ui/core/colors"

let theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: amber,
  },
  typography: {
    h2: {
      fontWeight: 700,
    },
  },
})

theme = responsiveFontSizes(theme)

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <TopNavigation />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
