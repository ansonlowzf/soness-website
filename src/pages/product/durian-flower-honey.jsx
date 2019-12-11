import React from "react"
import Layout from "../../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import { products } from "../../products"

import ProductDisplay from "../../components/product-display"

const DurianFlowerHoney = () => {
  const title = products[1].title
  const price = products[1].price
  const description = products[1].description
  const previousProduct = products[1].previousProduct
  const nextProduct = products[1].nextProduct

  const DurianFlowerHoney = useStaticQuery(graphql`
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
          imageData={DurianFlowerHoney.placeholderImage.childImageSharp.fluid}
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

export default DurianFlowerHoney
