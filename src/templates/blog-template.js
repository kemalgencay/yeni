import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, date, localImages },
      body,
    },
  },
}) => {
  return (
    <Layout>
      {localImages ? (
        <GatsbyImage
          image={getImage(localImages.childrenImageSharp[0])}
          alt={title}
        />
      ) : null}
      <h3>{`${title}`}</h3>
      <h4>{`${date}`}</h4>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default BlogTemplate
