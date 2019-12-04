import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import ProductNavbar from "../../components/product-nav"
import ProductDisplay from "../../components/product-display"

const ProductLinkNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
`

const ProductPage = () => {
  const RoyalJelly = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "royal-jelly.jpg" }) {
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
      <ProductNavbar />
      <Layout>
        <ProductDisplay
          title={`Royal Jelly`}
          price={`RM 200 / 0.25kg / Bottle`}
          imageData={RoyalJelly.placeholderImage.childImageSharp.fluid}
          description={`Must keep in freezer`}
        />
        <ProductLinkNavigation>
          <Link to="/product/mixed-flower-honey">&larr;Previous</Link>
          <Link>Contact</Link>
          <Link to="/product/mixed-flower-honey">Next&rarr;</Link>
        </ProductLinkNavigation>
      </Layout>
    </>
  )
}

export default ProductPage
