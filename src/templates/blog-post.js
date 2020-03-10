import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Button, Container, Grid, Typography } from "@material-ui/core"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Container maxWidth="sm" style={{ marginBottom: `7em` }}>
        <article>
          <header>
            <Typography
              component="h1"
              variant="h3"
              gutterBottom
              style={{ marginTop: `2em` }}
            >
              {post.frontmatter.title}
            </Typography>
            <Typography
              component="p"
              variant="body1"
              color="textSecondary"
              paragraph
            >
              {post.frontmatter.date}
            </Typography>
          </header>
          <Typography component="p" variant="body1">
            <MDXRenderer>{post.body}</MDXRenderer>
          </Typography>
        </article>
      </Container>

      <Container maxWidth="md" style={{ marginBottom: `7em` }}>
        <nav>
          <Grid container justify="space-between">
            <Grid container item xs={6} justify="flex-start">
              {previous && (
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    aria-label="previous"
                    color="primary"
                    size="large"
                  >
                    ← {previous.frontmatter.title}
                  </Button>
                </Link>
              )}
            </Grid>
            <Grid container item xs={6} justify="flex-end">
              {next && (
                <Link
                  to={next.fields.slug}
                  rel="next"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    aria-label="next"
                    color="primary"
                    size="large"
                  >
                    {next.frontmatter.title} →
                  </Button>
                </Link>
              )}
            </Grid>
          </Grid>
        </nav>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
