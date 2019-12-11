import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Typography, Grid, Paper } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  headingTopMargin: {
    marginTop: `1em`,
  },
  sectionMargin: {
    marginTop: `2em`,
    marginBottom: `2em`,
  },
  linkText: {
    textDecoration: `none`,
    color: theme.palette.common.black,
  },
}))

const ProductDisplay = ({
  imageData,
  title,
  price,
  description,
  previousProduct,
  nextProduct,
}) => {
  const classes = useStyles()

  return (
    <>
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
        {price}
      </Typography>

      <Grid container justify="center" className={classes.headingTopMargin}>
        <Grid item xs={11} md={5}>
          <Paper>
            <Img fluid={imageData} />
          </Paper>
        </Grid>
      </Grid>

      <Grid container justify="center" className={classes.headingTopMargin}>
        <Grid item xs={11} md={4}>
          <Typography variant="body1" component="p" gutterBottom>
            {description}
          </Typography>
        </Grid>
      </Grid>

      <Grid container justify="center" className={classes.headingTopMargin}>
        <Grid
          container
          item
          justify="space-between"
          xs={11}
          md={5}
          className={classes.sectionMargin}
        >
          <Button variant="contained" color="primary">
            <Link to={previousProduct} className={classes.linkText}>
              Previous
            </Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to={nextProduct} className={classes.linkText}>
              Next
            </Link>
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default ProductDisplay
