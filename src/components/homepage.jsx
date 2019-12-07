import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-position: center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Homepage = () => {
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
          <Link to="/product/mixed-flower-honey">Products &rarr;</Link>
        </TextBox>
      </BackgroundOverlay>
    </ImageBackground>
  )
}

export default Homepage
