import React from "react"
import Layout from "../../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import { products } from "../../products"

import ProductDisplay from "../../components/product-display"
import Footer from "../../components/footer"

const MixedFlowerHoneyPage = () => {
  const title = products[0].title
  const wholesalePrice = products[0].wholesalePrice
  const resellerPrice = products[0].resellerPrice
  const description = products[0].description
  const previousProduct = products[0].previousProduct
  const nextProduct = products[0].nextProduct

  const MixedFlowerHoney = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mixed-flower-honey.jpg" }) {
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
          imageData={MixedFlowerHoney.placeholderImage.childImageSharp.fluid}
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

export default MixedFlowerHoneyPage
