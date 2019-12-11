import React, { useState } from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Paper, Tabs, Tab } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

const TabFooter = ({ products }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {products.map((products, index) => (
          <Tab key={index} label={products.product} />
        ))}
      </Tabs>
    </Paper>
  )
}

export default TabFooter
