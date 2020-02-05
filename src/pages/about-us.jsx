import { Button, Container, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Footer from "../components/footer"
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
      <Grid container direction="column" alignItems="center">
        <Grid item xs={11}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            className={classes.headingTopMargin}
          >
            {`About Us`}
          </Typography>
        </Grid>

        <Grid container direction="column" item xs={11} md={3}>
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            className={classes.headingTopMargin}
          >
            {`What Do We Do?`}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {`Wholesale & supply raw honey to resellers in Kuala Lumpur`}
          </Typography>
        </Grid>

        <Grid
          container
          item
          justify="center"
          className={classes.headingTopMargin}
        >
          <Grid item xs={11} md={3}>
            <Img fluid={data.placeholderImage1.childImageSharp.fluid} />
          </Grid>
        </Grid>

        <Grid container item xs={11} md={3}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={classes.headingTopMargin}
          >
            {`How Do We Get Raw Honey?`}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {`We travel several states, from Seremban, Melaka, Johor & Bukit
          Mertajam to purchase raw honey directly from beekeepers.`}
          </Typography>
        </Grid>

        <Grid container item xs={11} md={3}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={classes.headingTopMargin}
          >
            {`How Do We Wholesale The Honey?`}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {`Bee farmer sell in a bundle. Then, We filtered and packed in 10kg food grade's bottle and wholesale in Kuala Lumpur. You get real raw honey, welcome you send to lab test.`}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} className={classes.headingTopMargin}>
          <iframe
            title="visiting bee farm in Johor"
            height="250"
            src="https://www.youtube.com/embed/lwPCWqd58WE"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Grid>

        <Grid container item xs={10} md={3}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={classes.headingTopMargin}
          >
            Why we do wholesale raw honey?
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {`Of course, we need to earn money for living. Apart from that, we also gain satisfaction from doing the healthcare business. Most importantly, government officer and newspaper also reported: "It's hard to get real raw honey from the market". Raw honey is easier accessible and available in KL now.`}
          </Typography>
        </Grid>

        <Grid
          container
          item
          justify="center"
          className={classes.headingTopMargin}
        >
          <Grid item xs={11} md={3}>
            <Img fluid={data.placeholderImage2.childImageSharp.fluid} />
          </Grid>
        </Grid>

        <Grid container direction="column" item xs={11} md={3}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={classes.headingTopMargin}
          >
            {`Who buy from us`}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            <ol>
              <li>Regular honey drinkers who need a bigger quantity</li>
              <li>Honey fabricator who makes honey healthcare product</li>
              <li>
                Companies which want to deliver healthcare gifts to their
                customers
              </li>
              <li>Build their honey brand and business</li>
              <li>Beauty salon which uses honey for facial program</li>
            </ol>
          </Typography>
        </Grid>

        <Grid
          container
          item
          justify="center"
          className={classes.headingTopMargin}
        >
          <Grid item xs={11} md={3}>
            <Img fluid={data.placeholderImage3.childImageSharp.fluid} />
          </Grid>
        </Grid>
        <Grid container item xs={11} md={3}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={classes.headingTopMargin}
          >
            {`Conclusion`}
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
        </Grid>

        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.sectionMargin}
        >
          <Typography variant="h6" component="p">
            {`It's great opportunity to start natural aging business`}
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            className={classes.headingTopMargin}
          >
            {`Start Your Honey Business Journey With Us`}
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

      <Footer />
    </Layout>
  )
}

export default AboutUs
