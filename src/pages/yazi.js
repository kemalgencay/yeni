import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import * as styles from "./blog.module.scss"

const Page = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  return (
    <Layout>
      <ul>
        {nodes.map((post, index) => {
          const {
            slug,
            frontmatter: { title },
          } = post
          return (
            <li key={index}>
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
