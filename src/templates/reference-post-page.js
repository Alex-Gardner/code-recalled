import React from "react"
import { Link, graphql } from "gatsby"

export default function ReferencePage({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <header className="ref-page-header">
        <Link to="/">&larr; {data.site.siteMetadata.title}</Link>
      </header>
      <h1 className="ref-page-title">{post.frontmatter.title}</h1>
      <div
        className="main-ref-content-holder"
        id="main-ref-content-holder"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
