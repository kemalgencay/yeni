import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"

const BlogTemplate = ({
  data: {
    mdx: {
      frontmatter: { title },
      body,
    },
  },
}) => {
  return (
    <Layout>
      <h3>{`${title}`}</h3>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default BlogTemplate
