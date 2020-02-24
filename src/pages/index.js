import { Button, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import styled from "styled-components"
import Contact from "../components/contact"
import Faq from "../components/faq"
import Heading2 from "../components/heading2"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import SonessButton from "../components/sonessButton"
import { questionAnswers } from "../question-answer"

const ImageBackground = styled(BackgroundImage)`
  background-position: center center;
  background-size: cover;
  height: calc(100vh - 64px);
`

const useStyles = makeStyles({
  sectionMarginBottom: {
    marginBottom: `7.5em`,
  },
})

const IndexPage = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "honey-in-bottle.jpg" }) {
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
      <SEO title="Home" />
      <ImageBackground
        Tag="section"
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ marginBottom: `10em` }}
      >
        <Grid
          style={{
            width: `100%`,
            height: `100%`,
            backgroundColor: `rgba(0, 0, 0, 0.5)`,
          }}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item xs={11} md={5} style={{ padding: `1em` }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              style={{ color: `white` }}
            >
              {`Start Your Honey Business Today`}
            </Typography>
            <Typography
              variant="h4"
              component="p"
              paragraph
              style={{ color: `white`, marginBottom: `1em` }}
            >
              {`Genuine Raw Honey Direct from Bee Farm`}
            </Typography>
            <a href="#about" style={{ textDecoration: `none` }}>
              <Button
                variant="contained"
                aria-label="about us"
                color="secondary"
                size="large"
                style={{
                  padding: `0.75em 1.5em`,
                  fontWeight: `bold`,
                  letterSpacing: `1.5px`,
                }}
              >
                Explore &rarr;
              </Button>
            </a>
          </Grid>
        </Grid>
      </ImageBackground>

      <Heading2 title="ABOUT US" idPath="about" />
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.sectionMarginBottom}
      >
        <Grid item xs={11}>
          <Typography variant="h4" component="h3" align="center" gutterBottom>
            {`Son & Ness Enterprise`}
          </Typography>
        </Grid>
        <Grid item xs={11} md={4}>
          <Typography variant="body1" component="p" align="center" paragraph>
            {`We wholesales raw honey from 10 kg onwards, start your honey business with low commitment`}
          </Typography>
        </Grid>
        <SonessButton linkUrl={`/about-us`} buttonText={`Know More`} />
      </Grid>

      <Heading2 title="Product" />
      <Grid container justify="center" className={classes.sectionMarginBottom}>
        <Grid item xs={11} md={3}>
          <Typography component="h3" variant="h6" align="center">
            Mixed Flower Honey
          </Typography>
          <SonessButton
            buttonText="Check Out"
            linkUrl="/product/mixed-flower-honey"
          />
        </Grid>
        <Grid item xs={11} md={3}>
          <Typography component="h3" variant="h6" align="center">
            Royal Jelly
          </Typography>
          <SonessButton buttonText="Check Out" linkUrl="/product/royal-jelly" />
        </Grid>
      </Grid>

      <Heading2 title="Contact Me" />
      <Contact idPath="contact-me" />

      <Heading2 title="Frequently Ask Question" />
      <Grid container justify="center">
        <Grid item xs={11} md={5}>
          {questionAnswers.map(({ ...props }) => (
            <Faq key="index" {...props} />
          ))}
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
