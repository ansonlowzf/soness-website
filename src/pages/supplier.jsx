import { Divider, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Language, Room } from "@material-ui/icons"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const useStyles = makeStyles({
  headingTopMargin: {
    marginTop: `1.5em`,
  },
  sectionMargin: {
    marginTop: `2em`,
    marginBottom: `2em`,
  },
})

const SupplierPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Supplier" />
      <Grid container direction="column" alignItems="center">
        <Grid item xs={11} md={6}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            className={classes.headingTopMargin}
          >
            {` Recommended Supplier`}
          </Typography>
        </Grid>

        <Grid item xs={11} md={6}>
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            className={classes.headingTopMargin}
          >
            {`Bottle & Container`}
          </Typography>
          <Divider />
        </Grid>

        <Grid item xs={11} md={6}>
          <Typography
            component="h3"
            variant="h6"
            align="center"
            gutterBottom
            className={classes.headingTopMargin}
          >
            {`Glass & Plastic Packaging Sdn Bhd`}
          </Typography>
          <Typography
            component="p"
            variant="body1"
            align="center"
            gutterBottom
            className={classes.headingTopMargin}
          >
            {`You could find the most glass & plastic bottle's sizes & types to pack your honey`}
          </Typography>
        </Grid>

        <Language fontSize="large" style={{ marginTop: `1em` }} />
        <a href="https://www.glassplastic.com/">
          https://www.glassplastic.com/
        </a>

        <Room fontSize="large" style={{ marginTop: `1em` }} />
        <a href="https://g.page/glassplasticsb?share">Google Maps</a>
        <address>
          15 Jalan TSB 8, Taman Industri Sungai Buloh, 47000 Petaling Jaya
        </address>
      </Grid>
    </Layout>
  )
}

export default SupplierPage
