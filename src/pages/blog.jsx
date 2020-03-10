import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

const BlogList = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1
          style={{ display: `inline-block`, borderBottom: `1px solid black` }}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMdx.totalCount} Posts</h4>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              style={{ textDecoration: `none`, color: `inherit` }}
            >
              <h3 style={{ marginBottom: `2em` }}>
                {node.frontmatter.title}
                <span style={{ color: `#bbb` }}>- {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
export default BlogList
