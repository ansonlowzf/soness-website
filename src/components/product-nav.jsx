import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavContainer = styled.div`
  height: 8vh;
  display: flex;
  align-items: flex-end;
  margin-bottom: 2em;
`
const ProductWrapper = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 300px;

  a {
    text-decoration: none;

    &:hover {
      color: red;
    }
  }
`

const ProductNavbar = () => {
  return (
    <NavContainer>
      <ProductWrapper>
        <Link to="/product/mixed-flower-honey">Mixed Flower Honey</Link>
        <Link to="/product/royal-jelly">Royal Jelly</Link>
      </ProductWrapper>
    </NavContainer>
  )
}

export default ProductNavbar
