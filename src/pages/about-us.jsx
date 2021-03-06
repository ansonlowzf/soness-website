import { Container, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
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
  pictureMarginBottom: {
    marginBottom: `2em`,
  },
})

const AboutUs = () => {
  const classes = useStyles()

  //#region Photo Data
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
  //#endregion

  return (
    <Layout>
      <SEO title="About Us" />
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          className={classes.headingTopMargin}
        >
          About Us
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          className={classes.headingTopMargin}
        >
          {`Son & Ness Enterprise`}
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          align="center"
          gutterBottom
          className={classes.headingTopMargin}
        >
          {`Raw Honey Wholeseller`}
        </Typography>
        <Typography variant="body1" component="p" align="center" paragraph>
          {`We travel several states, from Seremban, Melaka, Johor & Bukit
              Mertajam to purchase honey directly from beekeeper.`}
        </Typography>
        <Typography variant="body1" component="p" align="center" paragraph>
          {`We filter & pack the raw honey in 10 kg with food grade bottle. Then, wholesale in Kuala Lumpur`}
        </Typography>

        <Grid
          container
          item
          xs
          justify="center"
          className={classes.pictureMarginBottom}
        >
          <Typography className={classes.headingTopMargin}>
            {`How Do We Wholesale The Honey?`}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {`Bee farmer sell in a bundle. Then, We filtered and packed in 10kg food grade's bottle and wholesale in Kuala Lumpur. You get real raw honey, welcome you send to lab test.`}
          </Typography>
        </Grid>

        <iframe
          title="visiting bee farm in Johor"
          style={{
            position: `relative`,
            width: `100%`,
            height: `300px`,
            marginBottom: `3em`,
          }}
          src="https://www.youtube.com/embed/lwPCWqd58WE"
          scrolling="no"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <Grid
          container
          justify="center"
          className={classes.pictureMarginBottom}
        >
          <Grid item xs>
            <Img fluid={data.placeholderImage1.childImageSharp.fluid} />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          className={classes.pictureMarginBottom}
        >
          <Grid item xs>
            <Img fluid={data.placeholderImage2.childImageSharp.fluid} />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          className={classes.pictureMarginBottom}
        >
          <Grid item xs>
            <Img fluid={data.placeholderImage3.childImageSharp.fluid} />
          </Grid>
        </Grid>

        <Typography variant="body1" component="p" paragraph>
          <ul>
            <li>The first time, you drink honey - you feel nothing. </li>
            <li>
              You drink for one month - you feel like you not easy to get tired.
            </li>
            <li>
              You drink for 1 year; people around you feel like you are
              different.
            </li>
            <li>
              You drink honey for 10 years; you will feel like you are 10 years
              younger than people around.
            </li>
          </ul>
        </Typography>
        <Typography variant="h6" component="p" align="center">
          {`It's a great opportunity to start natural healthcare business`}
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          className={classes.headingTopMargin}
        >
          Start Your Honey Business With Us
        </Typography>
      </Container>
    </Layout>
  )
}

export default AboutUs
