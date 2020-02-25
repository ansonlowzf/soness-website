import React from "react"
import PropTypes from "prop-types"
import Header from "../components/header"
import { CssBaseline } from "@material-ui/core"
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import { green, amber } from "@material-ui/core/colors"
import Footer from "./footer"

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
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
