import React from "react"
import Layout from "../../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import { products } from "../../products"

import ProductDisplay from "../../components/product-display"
import Footer from "../../components/footer"

const RoyalJellyPage = () => {
  const title = products[2].title
  const wholesalePrice = products[2].wholesalePrice
  const resellerPrice = products[2].resellerPrice
  const description = products[2].description
  const previousProduct = products[2].previousProduct
  const nextProduct = products[2].nextProduct

  const RoyalJelly = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "royal-jelly.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1260, maxHeight: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <ProductDisplay
          imageData={RoyalJelly.placeholderImage.childImageSharp.fluid}
          title={title}
          wholesalePrice={wholesalePrice}
          resellerPrice={resellerPrice}
          description={description}
          previousProduct={previousProduct}
          nextProduct={nextProduct}
        />
        <Footer />
      </Layout>
    </>
  )
}

export default RoyalJellyPage
