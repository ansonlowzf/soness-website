import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HomepageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Homepage = () => {
  return (
    <HomepageContainer>
      <div>
        <h1>Son &amp; Ness Enterprise</h1>
        <p style={{ fontSize: `1.5rem` }}>
          Wholesales Raw Honey in Kuala Lumpur
        </p>
        <Link to="/products">Products &rarr;</Link>
      </div>
    </HomepageContainer>
  )
}

export default Homepage
