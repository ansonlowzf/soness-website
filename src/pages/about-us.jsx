import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Container, Grid, Typography } from "@material-ui/core"
import Footer from "../components/footer"

const useStyles = makeStyles({
  headingTopMargin: {
    marginTop: `1.5em`,
  },
  sectionMargin: {
    marginTop: `2em`,
    marginBottom: `2em`,
  },
})

const AboutUs = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      placeholderImage1: file(relativePath: { eq: "honey-with-wax.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage2: file(relativePath: { eq: "bee-farm.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage3: file(relativePath: { eq: "honeybee-working.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About Us" />
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          className={classes.headingTopMargin}
        >
          About Us
        </Typography>

        <Grid container direction="column" alignItems="center">
          <Grid container item xs={10} md={5}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className={classes.headingTopMargin}
            >
              What Do We Do?
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Wholesale &amp; supply raw honey to reseller in Kuala Lumpur
            </Typography>
          </Grid>

          <Grid
            container
            item
            justify="center"
            className={classes.headingTopMargin}
          >
            <Grid item xs={12} md={4}>
              <Img fluid={data.placeholderImage1.childImageSharp.fluid} />
            </Grid>
          </Grid>

          <Grid container item xs={10} md={5}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className={classes.headingTopMargin}
            >
              How we get raw honey?
            </Typography>

            <Typography variant="body1" component="p" gutterBottom>
              We travel several states, from Seremban, Melaka, Johor &amp; Bukit
              Mertajam to purchase honey directly from bee farmer.
            </Typography>
          </Grid>

          <Grid container item xs={10} md={5}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className={classes.headingTopMargin}
            >
              How we wholesale raw honey?
            </Typography>

            <Typography variant="body1" component="p" gutterBottom>
              {`Bee farmer sell in a bundle. We filter and pack in 10kg food grade bottle and wholesale in Kuala Lumpur. You get raw honey for real, welcome you send to the lab testing`}
            </Typography>
          </Grid>

          <iframe
            className={classes.headingTopMargin}
            title="visiting bee farm in Johor"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lwPCWqd58WE"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <Grid container item xs={10} md={5}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className={classes.headingTopMargin}
            >
              Why we do wholesale raw honey?
            </Typography>

            <Typography variant="body1" component="p" gutterBottom>
              {`To earn money. Apart from that, we also gain satisfaction from doing the healthcare business. Most importantly, government officer used to say "It's hard to buy raw honey from the market". Well, you could get raw honey in KL now`}
            </Typography>
          </Grid>

          <Grid
            container
            item
            justify="center"
            className={classes.headingTopMargin}
          >
            <Grid item xs={12} md={4}>
              <Img fluid={data.placeholderImage2.childImageSharp.fluid} />
            </Grid>
          </Grid>

          <Grid container item xs={10} md={5}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className={classes.headingTopMargin}
            >
              Who buy from us
            </Typography>

            <Typography variant="body1" component="p" gutterBottom>
              <ol>
                <li>Regular honey drinker for healthcare purpose</li>
                <li>Honey fabricator</li>
                <li>Build their honey brand and business</li>
              </ol>
            </Typography>
          </Grid>

          <Grid
            container
            item
            justify="center"
            className={classes.headingTopMargin}
          >
            <Grid item xs={12} md={5}>
              <Img fluid={data.placeholderImage3.childImageSharp.fluid} />
            </Grid>
          </Grid>

          <Grid container item xs={10} md={5}>
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
            <Typography variant="h6" component="p">
              {`It's great opportunity to start natural aging business`}
            </Typography>
          </Grid>

          <Grid
            container
            item
            direction="column"
            justify="center"
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
                  letterSpacing: `1.25px`,
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Layout>
  )
}

export default AboutUs
