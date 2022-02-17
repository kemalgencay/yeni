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
      <h3>Dersler</h3>
      <ul>
        {nodes.map((post, index) => {
          const {
            slug,
            frontmatter: { title },
          } = post
          return (
            <li key={index} style={{ padding: "1rem" }}>
              <Link to={`/blog/${slug}`}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { variant: { eq: "blog" } } }) {
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
