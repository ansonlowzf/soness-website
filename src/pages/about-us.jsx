import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Grid, Typography } from "@material-ui/core"
import Footer from "../components/footer"

const useStyles = makeStyles({
  headingTopMargin: {
    marginTop: `1em`,
  },
  sectionMargin: {
    marginTop: `2em`,
    marginBottom: `2em`,
  },
})

const AboutUs = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        gutterBottom
        className={classes.headingTopMargin}
      >
        About Us
      </Typography>

      <Grid container justify="center">
        <Grid item xs={10} md={4}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={classes.headingTopMargin}
          >
            What Do We Do?
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            Wholesale &amp; resales raw honey
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={classes.headingTopMargin}
          >
            How We Get Raw Honey?
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            We travel several states, from Seremban, Melaka, Johor &amp; Bukit
            Mertajam to purchase honey directly from bee farmer.
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={classes.headingTopMargin}
          >
            How We Wholesale Honey?
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            {`Bee farmer sell in a bundle. Then, we filter and pack in 10kg bottle and wholesale in Kuala Lumpur. You get raw honey for real, welcome you send to the lab testing`}
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={classes.headingTopMargin}
          >
            Why We do Wholesale Raw Honey?
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            {`For sure, we need to earn money. Apart from that, we also gain satisfaction from doing the healthcare business. Most importantly, government officer used to say "It's hard to buy raw honey from the market". Well, we make it available in KL`}
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={classes.headingTopMargin}
          >
            Who Buy From Us
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            <ol>
              <li>Regular honey drinker for healthcare purpose</li>
              <li>Honey fabricator</li>
              <li>Build their honey brand and business</li>
            </ol>
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={classes.headingTopMargin}
          >
            Conclusion
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            <ul>
              <li>The first time, you drink honey - you feel nothing. </li>
              <li>
                You drink for one month - you feel like you not easy to get
                tired.
              </li>
              <li>
                You drink for 1 year; people around you feel like you are
                different.
              </li>
              <li>
                You drink honey for 10 years; you will feel like you are 10
                years younger than people around.
              </li>
            </ul>
          </Typography>

          <Grid
            container
            item
            direction="column"
            alignItems="center"
            className={classes.sectionMargin}
          >
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              className={classes.headingTopMargin}
            >
              Start Your Honey Business With Us
            </Typography>
            <Link
              to="/contact-us"
              style={{
                textDecoration: `none`,
                color: `black`,
                fontWeight: `bolder`,
                padding: `0.5em 1em`,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.headingTopMargin}
                style={{
                  padding: `0.75em 1.5em`,
                  fontWeight: `bold`,
                  letterSpacing: `1.5px`,
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Layout>
  )
}

export default AboutUs
