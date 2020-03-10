import React from "react"
import { Grid, Button } from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  linkStyle: {
    textDecoration: `none`,
  },
  buttonStyle: {
    padding: `0.75em 1.5em`,
    margin: `3em auto`,
    color: `white`,
  },
})

const SonessButton = ({ linkUrl, buttonText }) => {
  const classes = useStyles()
  return (
    <Grid container justify="center">
      <Grid item>
        <Link to={linkUrl} className={classes.linkStyle}>
          <Button
            variant="contained"
            aria-label={buttonText}
            color="primary"
            size="large"
            className={classes.buttonStyle}
          >
            {buttonText}
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default SonessButton
