import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"

import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { green } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
})

const ImageBackground = styled(BackgroundImage)`
  background-position: center center;
  background-size: cover;
  height: 100vh;
`

const BackgroundOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 1em;
  }
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
      <ThemeProvider theme={theme}>
        <ImageBackground
          Tag="section"
          fluid={data.placeholderImage.childImageSharp.fluid}
        >
          <BackgroundOverlay>
            <TextBox>
              <h1 style={{ color: `white` }}>Son &amp; Ness Enterprise</h1>
              <p style={{ fontSize: `1.5rem`, color: `white` }}>
                Wholesales Raw Honey in Kuala Lumpur
              </p>
              <Link
                to="/product/mixed-flower-honey"
                style={{ textDecoration: `none` }}
              >
                <Button
                  variant="contained"
                  aria-label="product page"
                  color="primary"
                  size="large"
                >
                  Product &rarr;
                </Button>
              </Link>
            </TextBox>
          </BackgroundOverlay>
        </ImageBackground>
      </ThemeProvider>
    </>
  )
}

export default IndexPage
