import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/layout';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function BlogTemplate({
  data: {
    mdx: {
      frontmatter: { title, date, localImages },
      body
    }
  }
}) {
  return (
    <Layout>
      <h3>{`${title}`}</h3>
      <h4>{`${date}`}</h4>
      <MDXProvider
        components={{
          GatsbyImage: (props) => <GatsbyImage alt={props.alt} image={getImage(props.image)} />
        }}
      >
        <MDXRenderer localImages={localImages}>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
}

export default BlogTemplate;
