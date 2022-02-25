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
      {/* <h3>Dersler</h3> */}
      <ol className={styles.posts}>
        {nodes.map((post, index) => {
          const {
            slug,
            frontmatter: { title },
          } = post
          return (
            <li key={index} className={styles.post}>
              <Link to={`/blog/${slug}`}>{title}</Link>
            </li>
          )
        })}
      </ol>
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
