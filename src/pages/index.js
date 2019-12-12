import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"

import Layout from "../components/Layout"
import { Button, Grid, Typography } from "@material-ui/core"

const ImageBackground = styled(BackgroundImage)`
  background-position: center center;
  background-size: cover;
  height: calc(100vh - 64px);
`

const IndexPage = () => {
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
    <>
      <SEO title="Homepage" />
      <Layout>
        <ImageBackground
          Tag="section"
          fluid={data.placeholderImage.childImageSharp.fluid}
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
            <Grid item style={{ padding: `1em` }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                style={{ color: `white` }}
              >
                Son &amp; Ness Enterprise
              </Typography>
              <Typography
                variant="h4"
                component="p"
                gutterBottom
                style={{ color: `white`, marginBottom: `1em` }}
              >
                Wholesales Raw Honey in Kuala Lumpur
              </Typography>
              <Link
                to="/product/mixed-flower-honey"
                style={{ textDecoration: `none` }}
              >
                <Button
                  variant="contained"
                  aria-label="product page"
                  color="secondary"
                  size="large"
                >
                  Discover &rarr;
                </Button>
              </Link>
            </Grid>
          </Grid>
        </ImageBackground>
      </Layout>
    </>
  )
}

export default IndexPage
