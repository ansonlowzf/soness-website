import {
  AppBar,
  Container,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Fab,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Home, Menu, KeyboardArrowUp } from "@material-ui/icons"
import { Link } from "gatsby"
import React, { useState } from "react"

import BackToTop from "./BackToTop"
import HideHeaderOnScroll from "./HideHeaderOnScroll"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 250,
  },
  linkText: {
    textDecoration: "none",
    color: theme.palette.common.black,
  },
  drawerLinkText: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  isActive: {
    color: theme.palette.secondary.main,
  },
}))

const NavLinks = [
  { title: `ABOUT US`, path: `/about-us` },
  { title: `PRODUCT`, path: `/product/mixed-flower-honey` },
  { title: `SUPPLIER`, path: `/supplier` },
  { title: `BLOG`, path: `/blog` },
]

const Header = () => {
  const classes = useStyles()

  const [state, setState] = useState({
    right: false,
  })
  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ ...state, [side]: open })
  }

  const drawer = side => (
    <div
      className={classes.drawer}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component="nav" aria-labelledby="drawer">
        {NavLinks.map(({ title, path }) => (
          <Link
            to={path}
            key={title}
            className={classes.drawerLinkText}
            activeClassName={classes.isActive}
          >
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  const MainNav = (
    <List
      component="nav"
      aria-labelledby="main navigation"
      style={{ display: `flex` }}
    >
      {NavLinks.map(({ title, path }) => (
        <Link to={path} key={title} className={classes.linkText}>
          <ListItem button style={{ color: `white` }}>
            <ListItemText primary={title} />
          </ListItem>
        </Link>
      ))}
    </List>
  )
  return (
    <>
      <div className={classes.root}>
        <HideHeaderOnScroll>
          <AppBar position="fixed">
            <Container maxWidth="lg">
              <Toolbar style={{ justifyContent: `space-between` }}>
                <Link to="/">
                  <IconButton>
                    <Home fontSize="large" style={{ color: `white` }} />
                  </IconButton>
                </Link>

                <Hidden mdUp>
                  <IconButton
                    edge="end"
                    aria-label="drawer menu"
                    onClick={toggleDrawer("right", true)}
                  >
                    <Menu style={{ color: `white` }} />
                  </IconButton>
                </Hidden>

                <Hidden smDown>{MainNav}</Hidden>
              </Toolbar>
            </Container>
          </AppBar>
        </HideHeaderOnScroll>
        <Toolbar id="back-to-top-anchor" />
      </div>

      <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>

      <Hidden mdUp>
        <Drawer
          anchor="right"
          open={state.right}
          onOpen={toggleDrawer("right", true)}
          onClose={toggleDrawer("right", false)}
        >
          {drawer("right")}
        </Drawer>
      </Hidden>
    </>
  )
}

export default Header
