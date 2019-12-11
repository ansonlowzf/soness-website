import React from "react"
import Layout from "../../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import { products } from "../../products"

import ProductDisplay from "../../components/product-display"

const MixedFlowerHoneyPage = () => {
  const title = products[0].title
  const price = products[0].price
  const description = products[0].description
  const previousProduct = products[0].previousProduct
  const nextProduct = products[0].nextProduct

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
        <ProductDisplay
          imageData={MixedFlowerHoney.placeholderImage.childImageSharp.fluid}
          title={title}
          price={price}
          description={description}
          previousProduct={previousProduct}
          nextProduct={nextProduct}
        />
      </Layout>
    </>
  )
}

export default MixedFlowerHoneyPage
