import React from "react"
import Layout from "../components/Layout"
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
    <Layout>
      <h1 style={{ textAlign: `center` }}>Contact Me</h1>

      <Img
        style={{ borderRadius: `50%` }}
        fixed={data.placeholderImage.childImageSharp.fixed}
      />

      <section>
        <p>Phone: 018-787 4184</p>
        <p>geminicmy@gmail.com</p>
      </section>
    </Layout>
  )
}

export default ContactPage
