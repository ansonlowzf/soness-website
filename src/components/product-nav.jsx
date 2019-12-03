import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

const NavContainer = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2em;
`
const ProductWrapper = styled.div`
  max-width: 980px;
`

const ProductNavbar = () => {
  return (
    <NavContainer>
      <ProductWrapper>
        <Link>Mixed Flower Honey</Link>
      </ProductWrapper>
    </NavContainer>
  )
}

export default ProductNavbar
