import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ProductDisplayContainer = styled.section`
  height: calc(100vh - 10vh);
`

const ProductDisplay = () => {
  return (
    <ProductDisplayContainer>
      <h1 style={{ textAlign: `center` }}>Mix Flower Honey</h1>
      <p style={{ textAlign: `center` }}>RM 580 / 10 KG / Bottle</p>

      <div>
        <img src="#" alt="product" />
      </div>
      <p style={{ maxWidth: `600px` }}>
        Most fragrant honey in our list, countless flower surround the beehive.
        Multi flower fragrant smell and taste sweet only. Honey is filtered and
        pack in food grade bottles
      </p>
      <Link>Next</Link>
    </ProductDisplayContainer>
  )
}

export default ProductDisplay
