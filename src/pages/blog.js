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
      <ol className={styles.posts}>
        {nodes.map((post, index) => {
          const {
            slug,
            frontmatter: { title, date },
          } = post
          return (
            <li key={index} className={styles.post}>
              <Link to={`/${slug}`}>
                {title} {date}
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { variant: { eq: "blog" } } }
    ) {
      nodes {
        slug
        frontmatter {
          date(formatString: "DD MMMM yyyy", locale: "tr")
          title
          variant
        }
      }
    }
  }
`

export default Page
