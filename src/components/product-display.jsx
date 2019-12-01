import React from "react"
import styled from "styled-components"

const ProductDisplayContainer = styled.section`
  display: flex;
  flex-direction: column;
  outline: 1px solid black;
  height: calc(100vh - 10vh);
`

const ProductHeader = styled.header`
  flex-basis: auto;
  display: flex;
  justify-content: space-between;
  flex-basis: 20%;
`

const ProductDisplay = () => {
  return (
    <ProductDisplayContainer>
      <ProductHeader>
        <h2>Mix Flower Honey</h2>
        <p>RM 580</p>
      </ProductHeader>
      <div style={{ flexBasis: `50%` }}>
        <img src="#" alt="product" />
      </div>
      <p>This is a description</p>
    </ProductDisplayContainer>
  )
}

export default ProductDisplay
