import React from "react"
import Layout from "../components/Layout"
import { makeStyles } from "@material-ui/core/styles"
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
  Typography,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons/"

import { questionAnswers } from "../question-answer"
import Footer from "../components/footer"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  sectionMargin: {
    marginTop: `1em`,
    marginBottom: `1em`,
  },
}))

const FaqPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Grid container justify="center">
        <Grid item xs={11} md={5}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className={classes.sectionMargin}
          >
            {`Frequently Ask Question (FAQ)`}
          </Typography>
          {questionAnswers.map(({ question, answer }) => (
            <ExpansionPanel key={question}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography className={classes.heading}>{question}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>{answer}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </Grid>
      </Grid>
      <Footer />
    </Layout>
  )
}

export default FaqPage
