module.exports = {
  siteMetadata: {
    title: `Öğrenmek yaparak olur`,
    picture: `${__dirname}/src/images/header1.jpg`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-sass`,
      implementation: require(`node-sass`)
    }
  ]
};
