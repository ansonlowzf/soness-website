import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Typography } from "@material-ui/core"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const BlogIndex = ({ data }) => {
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO title="All posts" />
      <Container
        maxWidth="sm"
        style={{ marginTop: `7rem`, marginBottom: `3rem` }}
      >
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          BLOG
        </Typography>
      </Container>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <Container maxWidth="sm">
              <header>
                <Typography component="h3" variant="h5" gutterBottom>
                  <Link to={node.fields.slug}>{title}</Link>
                </Typography>
                <Typography component="p" variant="caption" paragraph>
                  {node.frontmatter.date}
                </Typography>
              </header>
              <section>
                <Typography
                  component="p"
                  variant="body1"
                  paragraph
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt,
                  }}
                />
              </section>
            </Container>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
