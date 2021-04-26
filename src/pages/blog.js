import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              timeToRead
              frontmatter {
                date(formatString: "DD MMMM, YYYY")
                title
              }
              id
              fields {
                slug
              }
              excerpt(pruneLength: 50)
            }
          }
        }
        
      }
    `
  )
  return (
    <Layout>
      <SEO title="Blog Posts" />
      <ul style={{listStyle: `none`}}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.id}>
               <h2 style={{marginBottom: `0`}}>
                <Link to={`/posts/${edge.node.fields.slug}/`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
               <div>
                <span>
                  Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                  {edge.node.timeToRead} min read
                </span>
              </div>
              <p style={{marginTop: `1em`}}>{edge.node.excerpt}</p>
              <div style={{paddingBottom: `1em`, marginBottom: `1.5em`, fontSize: `smaller`, fontStyle: `italic`}}>
                <Link to={`/posts/${edge.node.fields.slug}/`}> READ MORE >> </Link>
                <hr style={{paddingBottom: `0.25em`, marginTop: `0.25em`}} />
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog