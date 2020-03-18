import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: `3em`,
    padding: `1.5em`,
    backgroundColor: theme.palette.primary.main,
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Typography
        align="center"
        variant="body1"
        component="p"
        style={{ color: `white` }}
      >
        © 2018 - {new Date().getFullYear()}, Son &amp; Ness Enterprise
      </Typography>
    </footer>
  )
}

export default Footer
