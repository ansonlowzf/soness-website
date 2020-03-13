import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container, Typography } from "@material-ui/core"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article style={{ marginTop: `7rem` }}>
        <Container maxWidth="sm">
          <header>
            <Typography component="h1" variant="h3" gutterBottom>
              {post.frontmatter.title}
            </Typography>
            <Typography component="p" variant="body2" paragraph>
              {post.frontmatter.date}
            </Typography>
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr
            style={{
              marginTop: `3em`,
              marginBottom: `3em`,
            }}
          />
        </Container>
      </article>

      <nav>
        <Container maxWidth="md">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <Typography component="p" variant="body1">
                    ← {previous.frontmatter.title}
                  </Typography>
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  <Typography component="p" variant="body1">
                    {next.frontmatter.title} →
                  </Typography>
                </Link>
              )}
            </li>
          </ul>
        </Container>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
