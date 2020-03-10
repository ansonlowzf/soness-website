import React from "react"
import Header from "./Header"
import { CssBaseline } from "@material-ui/core"
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import { green, amber } from "@material-ui/core/colors"
import Footer from "./Footer"

let theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: amber,
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

export default Layout
