import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

import ProductNavbar from "../components/product-nav"
import ProductDisplay from "../components/product-display"

const ProductPage = () => {
  return (
    <Layout>
      <ProductNavbar />
      <ProductDisplay />
    </Layout>
  )
}

export default ProductPage
