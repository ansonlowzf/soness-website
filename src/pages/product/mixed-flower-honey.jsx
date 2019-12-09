import React from "react"
import styled from "styled-components"
import Layout from "../../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import TopNavigation from "../../components/top-nav"
import ProductDisplay from "../../components/product-display"

const ProductLinkNavigation = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProductPage = () => {
  const MixedFlowerHoney = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "honey-in-bottle.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366, maxHeight: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <TopNavigation />
        <ProductDisplay
          title={`Mixed Flower Honey`}
          price={`RM 580 / 10kg / Bottle`}
          imageData={MixedFlowerHoney.placeholderImage.childImageSharp.fluid}
          description={`Most fragrant honey in our list, countless flower surround the beehive.
          Multiple flower fragrant smell and taste sweet only. Honey is filtered
          and pack in food grade bottles`}
        />
        <ProductLinkNavigation>
          <Link to="/product/royal-jelly">&larr;Previous</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product/royal-jelly">Next&rarr;</Link>
        </ProductLinkNavigation>
      </Layout>
    </>
  )
}

export default ProductPage
