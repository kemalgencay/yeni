import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Page = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  return (
    <Layout>
      <h3>Görüşlerim</h3>
      <ul>
        {nodes.map((post, index) => {
          const {
            slug,
            frontmatter: { title },
          } = post
          return (
            <li key={index} style={{ padding: "1rem" }}>
              <Link to={`/yazi/${slug}`}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { variant: { eq: "yazi" } } }) {
      nodes {
        slug
        frontmatter {
          date
          title
          variant
        }
      }
    }
  }
`

export default Page
