import React from "react"
import Layout from "../components/Layout"

import ProductNavbar from "../components/product-nav"
import ProductDisplay from "../components/product-display"

const ProductPage = () => {
  return (
    <>
      <ProductNavbar />
      <Layout>
        <ProductDisplay />
      </Layout>
    </>
  )
}

export default ProductPage
