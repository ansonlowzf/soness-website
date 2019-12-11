import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"

import { Avatar, Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  headingTopMargin: {
    marginTop: `1em`,
  },
  sectionMargin: {
    marginTop: `2em`,
    marginBottom: `2em`,
  },
  linkText: {
    textDecoration: `none`,
    color: theme.palette.common.black,
  },
  bigAvatar: {
    width: 220,
    height: 220,
  },
}))

const ContactPage = () => {
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
    <Layout>
      <div className={classes.root}>
        <Grid container direction="column" alignItems="center">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className={classes.headingTopMargin}
          >
            Contact Me
          </Typography>

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

          <Typography
            variant="h6"
            component="p"
            gutterBottom
            className={classes.headingTopMargin}
          >
            Phone: 018-787 4184
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            geminicmy@gmail.com
          </Typography>
        </Grid>
      </div>
    </Layout>
  )
}

export default ContactPage
