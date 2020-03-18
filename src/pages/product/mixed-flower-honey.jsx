import { Container, Divider, Typography } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
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
      <Container maxWidth="sm">
        <Divider style={{ margin: `3em 0` }} />
        <Typography component="h2" variant="h5" color="primary" gutterBottom>
          {`Must Read! Raw honey VS Pure Honey?`}
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {` Raw honey is not pure honey!`}
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {`Raw honey is not pure honey!`}
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {`Raw honey is not pure honey!`}
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {`It's so important that we must repeat it three times`}
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {`Raw honey refers to honey direct harvest from bee hives without any fabrication process`}
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {`Pure honey refers to honey which was pasteurized (a technique to heat and kill micro bacteria). Honey sold in shopping's centre all go through this process. Then only, honey can store for longer times.`}
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {`Raw honey contains live yeast. That why you might see some bubble floating on the top. This is not a deterioration. This is one of the natural behaviours of genuine raw honey. When you open a raw honey bottle, it may "pop" every time you open it.`}
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {`Raw honey absorbs water in the air. As long as the moisture level is high enough, the yeast will grow. It fermenting some of the glucose(natural sugar), creates carbon dioxide and acetic acid. This is the reasons why fermented raw honey smell like beer.`}
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {`The fermentation process also causes the air space inside the bottle to expand. If you put a glass bottle of raw honey under the sun and close it tightly, big possible the bottle will break. Or if you store in a plastic bottle, it will expand like a balloon`}
        </Typography>

        <Typography component="p" variant="body1" color="error" paragraph>
          {`The below content is extremely important!`}
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {`Live yeast benefits adult's digest system but NOT for children under 2 years old who not yet develop a complete digest system. It may cause infant botulism. It's a form of food poisoning which is dangerous to children`}
        </Typography>
        <Typography component="h2" variant="h5" paragraph color="primary">
          {`Conclusion`}
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          <ol>
            <li>{`Do not store raw honey at the place where exposes to sunlight. Keep it in room temperature or cool place.`}</li>
            <li>{`Close bottle tight, do not let raw honey exposes to air condition.`}</li>
            <li>{`If you want to store for longer's period, keep it in the fridge. It might crystalize. Don't worry, just put in 40-degree water. It will back to normal honey again.`}</li>
            <li>{`Do not use a wet spoon to take raw honey.`}</li>
          </ol>
        </Typography>
      </Container>
    </Layout>
  )
}

export default MixedFlowerHoneyPage
