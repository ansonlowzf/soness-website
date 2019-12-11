import React, { useState } from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/styles"
import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

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
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: "none",
    color: theme.palette.common.black,
  },
}))

const NavLinks = [
  { title: `ABOUT US`, path: `/about-us` },
  { title: `PRODUCT`, path: `/product/mixed-flower-honey` },
  { title: `CONTACT US`, path: `/contact-us` },
  { title: `FAQ`, path: `/faq` },
]

const TopNavigation = () => {
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

  const sideDrawer = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component="nav" aria-labelledby="side navigation">
        {NavLinks.map(({ title, path }) => (
          <Link to={path} key={title}>
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
          <ListItem button>
            <ListItemText primary={title} />
          </ListItem>
        </Link>
      ))}
    </List>
  )

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar style={{ justifyContent: `space-between` }}>
            <Link to="/" className={classes.linkText}>
              <Typography variant="h6" className={classes.title}>
                Son &amp; Ness Enterprise
              </Typography>
            </Link>

            <Hidden mdUp>
              <IconButton
                edge="end"
                aria-label="drawer menu"
                onClick={toggleDrawer("right", true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>

            <Hidden smDown>{MainNav}</Hidden>
          </Toolbar>
        </Container>
      </AppBar>

      <nav aria-label="side drawer">
        <Hidden mdUp>
          <SwipeableDrawer
            anchor="right"
            open={state.right}
            onOpen={toggleDrawer("right", true)}
            onClose={toggleDrawer("right", false)}
          >
            {sideDrawer("right")}
          </SwipeableDrawer>
        </Hidden>
      </nav>
    </div>
  )
}

export default TopNavigation
