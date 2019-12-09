import React from "react"
import Layout from "../../components/Layout"
import { useStaticQuery, graphql } from "gatsby"

import ProductDisplay from "../../components/product-display"

const Honey = [
  {
    title: `Mixed Flower Honey`,
    price: `RM 580 / 10 kg / Bottle`,
    description: `Most fragrant honey in our list, countless flower surround the beehive.
Multiple flower fragrant smell and taste sweet only. Honey is filtered
and pack in food grade bottles`,
  },
]

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
        <ProductDisplay
          title={`Mixed Flower Honey`}
          price={`RM 580 / 10kg / Bottle`}
          imageData={MixedFlowerHoney.placeholderImage.childImageSharp.fluid}
          description={`Most fragrant honey in our list, countless flower surround the beehive.
          Multiple flower fragrant smell and taste sweet only. Honey is filtered
          and pack in food grade bottles`}
        />
      </Layout>
    </>
  )
}

export default ProductPage
