import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "aness-chee.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div style={{ textAlign: `center` }}>
      <h1>Contact Me</h1>

      <Img
        style={{ borderRadius: `50%` }}
        fixed={data.placeholderImage.childImageSharp.fixed}
      />

      <section>
        <p>Phone: 018-787 4184</p>
        <p>geminicmy@gmail.com</p>
      </section>
    </div>
  )
}

export default ContactPage
