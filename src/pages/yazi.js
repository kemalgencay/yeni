import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import * as styles from "./yazi.module.scss"

const Page = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  return (
    <Layout>
      <ol className={styles.posts}>
        {nodes.map((post, index) => {
          const {
            slug,
            frontmatter: { title },
          } = post
          return (
            <li key={index} className={styles.post}>
              <Link to={`/yazi/${slug}`}>{title}</Link>
            </li>
          )
        })}
      </ol>
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
