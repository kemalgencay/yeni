import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import * as styles from './yazi.module.scss';

const Page = ({
  data: {
    allMdx: { nodes }
  }
}) => {
  return (
    <Layout>
      <ol className={styles.posts}>
        {nodes.map((post, index) => {
          const {
            slug,
            frontmatter: { title }
          } = post;
          return (
            <li key={index} className={styles.post}>
              <Link to={`/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { variant: { eq: "yazi" } } }) {
      nodes {
        slug
        frontmatter {
          date(formatString: "DDDD MMMM yyyy", locale: "tr")
          title
          variant
        }
      }
    }
  }
`;

export default Page;
