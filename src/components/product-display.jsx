import React from "react"
import { Link } from "gatsby"

import HeroImage from "../components/image-gatsby/home-hero"

const ProductDisplay = () => {
  return (
    <>
      <h1 style={{ textAlign: `center` }}>Mix Flower Honey</h1>
      <p style={{ textAlign: `center` }}>RM 580 / 10 KG / Bottle</p>
      <div style={{ maxWidth: `500px`, margin: `0 auto` }}>
        <HeroImage />
      </div>

      <p style={{ maxWidth: `500px`, margin: `1em auto` }}>
        Most fragrant honey in our list, countless flower surround the beehive.
        Multiple flower fragrant smell and taste sweet only. Honey is filtered
        and pack in food grade bottles
      </p>

      <Link>Next</Link>
    </>
  )
}

export default ProductDisplay
