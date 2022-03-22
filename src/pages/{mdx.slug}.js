import React, { Fragment } from "react"
import { graphql } from "gatsby"

import YaziTemplate from "../templates/yazi-template"
import BlogTemplate from "../templates/blog-template"

const MdxPage = ({
  data,
  data: {
    mdx: {
      frontmatter: { variant },
    },
  },
}) => {
  const templates = {
    yazi: <YaziTemplate data={data} />,
    blog: <BlogTemplate data={data} />,
  }

  return <Fragment>{templates[variant] ? templates[variant] : null}</Fragment>
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD MMMM yyyy", locale: "tr")
        variant
        featuredImage {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default MdxPage
