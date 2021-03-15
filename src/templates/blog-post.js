import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPost = ({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <span>
          Posted on {post.frontmatter.date}{" "}
          <span> / </span> {post.timeToRead} min read
        </span>
        <hr />
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      timeToRead
      html
    }
  }
`

export default BlogPost