import { Container, Grid, Typography } from "@material-ui/core"
import React from "react"
import Footer from "../components/footer"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const RecipePage = () => {
  return (
    <Layout>
      <SEO title="Recipe" />
      <Container maxWidth="sm">
        <Grid container direction="column">
          <Typography
            align="center"
            component="h1"
            variant="h2"
            gutterBottom
            style={{ marginTop: `1.5em` }}
          >
            Honey Recipe
          </Typography>

          <Typography component="h2" variant="h4" gutterBottom color="primary">
            Vinegar Wolfberry Honey
          </Typography>

          <Typography component="h3" variant="h5" gutterBottom>
            {`Benefit & Good for`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            <ol>
              <li>Enhance the role of liver fat metabolism</li>
              <li>People who consume a lot of meat, alcohol</li>
              <li>Reduce organ inner fat</li>
              <li>
                Maintain blood sugar level especially to people who have low
                blood sugar
              </li>
              <li>Antioxidant for eyes and skin</li>
            </ol>
          </Typography>

          <Typography component="h3" variant="h5" gutterBottom>
            {`Materials`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            <ol>
              <li>{`Dried wolfberry 500g`}</li>
              <li>{`Vinegar 300ml (Choose your favourite vinegar)`}</li>
              <li>{`Raw honey 120g (Choose your favourite, we recommend mixed flower honey)`}</li>
            </ol>
            {`There is no one for all rules, make the taste you like the most by mixing different vinegar & raw honey`}
          </Typography>

          <Typography component="h3" variant="h5" gutterBottom>
            {`Fabrication process:-`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            <ol>
              <li>{`Wash wolfberries with clean water`}</li>
              <li>{`Leave wolfberry  dried on a clean cloth`}</li>
              <li>{`You could use 50-degree heat's oven to speed up the drying process`}</li>
              <li>{`Put the wolfberries into a glass container`}</li>
              <li>{`Pour in vinegar and raw honey (Ratio 1: 0.4)`}</li>
              <li>{`Stir and mix evenly`}</li>
              <li>{`Close the container tight`}</li>
              <li>{`Enjoy your vinegar wolfberry honey or resales after 24 hours`}</li>
            </ol>
            <Typography component="p" variant="body1" gutterBottom>
              {`The wolfberry drying process is very important`}
            </Typography>
            <Typography component="p" variant="body1" gutterBottom>
              {`The wolfberry drying process is very important`}
            </Typography>
            <Typography component="p" variant="body1" gutterBottom>
              {`The wolfberry drying process is very important`}
            </Typography>
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`Important thing must repeat 3 times, extra water in wolfberry might
            increase the moisture level of the honey and cause fermentation`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`Fully absorbed the vinegar will expand, and become soft`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`Do not surprise to see the wolfberry become big`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {` Elder people can eat it easily`}
          </Typography>
        </Grid>
      </Container>
      <Footer />
    </Layout>
  )
}

export default RecipePage
