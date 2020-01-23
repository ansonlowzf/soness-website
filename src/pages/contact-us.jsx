import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import { WhatsApp, Email } from "@material-ui/icons"

import { Avatar, Grid, Typography } from "@material-ui/core"
import Footer from "../components/footer"

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
      <SEO title="Contact Us" />
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
      <Footer />
    </Layout>
  )
}

export default ContactPage
