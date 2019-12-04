import React from "react"
import Img from "gatsby-image"

const ProductDisplay = ({ title, price, imageData, description }) => {
  return (
    <>
      <h1 style={{ textAlign: `center` }}>{title}</h1>
      <p style={{ textAlign: `center` }}>{price}</p>

      <div style={{ maxWidth: `500px`, margin: `0 auto` }}>
        <Img fluid={imageData} />
      </div>

      <p style={{ maxWidth: `500px`, margin: `1em auto` }}>{description}</p>
    </>
  )
}

export default ProductDisplay
