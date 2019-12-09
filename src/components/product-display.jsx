import React, { useState } from "react"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import { Paper, Tabs, Tab } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

const ProductDisplay = ({ title, price, imageData, description }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <h1 style={{ textAlign: `center` }}>{title}</h1>
      <p style={{ textAlign: `center` }}>{price}</p>

      <div style={{ maxWidth: `500px`, margin: `0 auto` }}>
        <Img fluid={imageData} />
      </div>

      <p style={{ maxWidth: `500px`, margin: `1em auto` }}>{description}</p>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    </>
  )
}

export default ProductDisplay
