import { Divider, Grid, Typography } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "../../components/footer"
import Layout from "../../components/Layout"
import ProductDisplay from "../../components/product-display"
import SEO from "../../components/seo"
import { products } from "../../products"

const MixedFlowerHoneyPage = () => {
  const title = products[0].title
  const wholesalePrice = products[0].wholesalePrice
  const resellerPrice = products[0].resellerPrice
  const description = products[0].description
  const previousProduct = products[0].previousProduct
  const nextProduct = products[0].nextProduct

  const MixedFlowerHoney = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "soness-flower-honey.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Mixed Flower Honey" />
      <ProductDisplay
        imageData={MixedFlowerHoney.placeholderImage.childImageSharp.fluid}
        title={title}
        wholesalePrice={wholesalePrice}
        resellerPrice={resellerPrice}
        description={description}
        previousProduct={previousProduct}
        nextProduct={nextProduct}
      />

      <Grid container direction="column" alignItems="center">
        <Grid item xs={11} md={4}>
          <Divider style={{ margin: `1em 0` }} />
          <Typography component="h2" variant="h5">
            {`Important! Raw honey VS Pure Honey?`}
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            color="error"
            gutterBottom
          >
            {`Must read!`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {` Raw honey is not equivalent to pure honey!`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`Raw honey is not equivalent to pure honey!`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`Raw honey is not equivalent to pure honey!`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`It's so important that we must repeat it three times`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`Raw honey refers to honey direct harvest from bee hives without any fabrication process`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`Pure honey refers to honey which was pasteurized (a technique to heat and kill micro bacteria). Honey sold in shopping's centre all go through this process. Without this process, honey cannot be stored for long times. You will see the plastic bottle expand like a balloon.`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`Raw honey contains live yeast. When the moisture level is high enough the yeast will grow, fermenting some of the sugars, it creates carbon dioxide and acetic acid. This is the reasons why fermented raw honey smell like beer. `}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`The fermentation process also causes the air content inside the bottle to expand. If you put a glass bottle of raw honey under the sun and close it tightly, big possible the bottle will break.`}
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            color="error"
            gutterBottom
          >
            {`The below content is extremely important!`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`Live yeast benefits adult's digest system but NOT for children under 2 years old who not yet develop a complete digest system. It may cause infant botulism. It's a form of food poisoning which is dangerous to children`}
          </Typography>
          <Typography component="h2" variant="h5" gutterBottom>
            {`Conclusion`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`1. Do not store raw honey at the place which exposes to sunlight`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`2. Close bottle tight, do not let raw honey contact to water or exposes to air condition.`}
          </Typography>
          <Typography component="p" variant="body1" gutterBottom>
            {`3. If you want to store for long period, keep it in fridge`}
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </Layout>
  )
}

export default MixedFlowerHoneyPage
