import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import { WhatsApp, Email } from "@material-ui/icons"

import { Avatar, Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  headingTopMargin: {
    marginTop: `1em`,
  },
  bigAvatar: {
    width: 220,
    height: 220,
  },
})

const Contact = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "aness-chee.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ marginBottom: `7.5em` }}
      >
        <Avatar className={classes.bigAvatar}>
          <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        </Avatar>

        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          className={classes.headingTopMargin}
        >
          Aness Chee
        </Typography>

        <WhatsApp fontSize="large" className={classes.headingTopMargin} />
        <Typography
          variant="h6"
          component="p"
          gutterBottom
          style={{ marginTop: `0.5em` }}
        >
          018-787 4184
        </Typography>

        <Typography variant="p" component="p" gutterBottom>
          Please WhasApp in case I not picking up phone
        </Typography>

        <Email fontSize="large" className={classes.headingTopMargin} />
        <Typography
          variant="h6"
          component="p"
          gutterBottom
          style={{ marginTop: `0.5em` }}
        >
          geminicmy@gmail.com
        </Typography>
      </Grid>
    </div>
  )
}

export default Contact
