import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Typography, Grid, Paper } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  headingTopMargin: {
    marginTop: `1em`,
  },
  textTopMargin: {
    marginTop: `2.5em`,
  },
  sectionMargin: {
    marginTop: `2em`,
    marginBottom: `2em`,
  },
  linkText: {
    textDecoration: `none`,
    color: theme.palette.common.black,
  },
  isActive: {
    color: theme.palette.secondary.main,
  },
}))

const ProductDisplay = ({
  imageData,
  title,
  wholesalePrice,
  resellerPrice,
  description,
  previousProduct,
  nextProduct,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        gutterBottom
        className={classes.headingTopMargin}
      >
        {title}
      </Typography>

      <Typography variant="h6" component="p" align="center" gutterBottom>
        {wholesalePrice}
      </Typography>
      <Typography variant="h6" component="p" align="center" gutterBottom>
        {resellerPrice}
      </Typography>

      <Grid container justify="center" className={classes.headingTopMargin}>
        <Grid container item justify="space-between" xs={11} md={5}>
          <Link to={previousProduct} className={classes.linkText}>
            <Button variant="contained" color="primary">
              Previous
            </Button>
          </Link>
          <Link to={nextProduct} className={classes.linkText}>
            <Button variant="contained" color="primary">
              Next
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Grid container justify="center" className={classes.headingTopMargin}>
        <Grid item xs={11} md={5}>
          <Paper>
            <Img fluid={imageData} />
          </Paper>
        </Grid>
      </Grid>

      <Grid container justify="center" className={classes.textTopMargin}>
        <Grid item xs={11} md={4}>
          <Typography variant="body1" component="p" gutterBottom>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductDisplay
