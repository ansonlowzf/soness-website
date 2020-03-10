import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container, Typography } from "@material-ui/core"

const BlogIndex = ({ data }) => {
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO title="Blog posts" />
      <Container maxWidth="sm" style={{ marginTop: `7em` }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <Typography component="h3" variant="h5" gutterBottom>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </Typography>
                <Typography component="p" variant="caption">
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
            </article>
          )
        })}
      </Container>
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
