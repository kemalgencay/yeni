module.exports = {
  siteMetadata: {
    title: "Öğrenmek yaparak olur",
    picture: "${__dirname}/src/images/header1.jpg",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          quality: 90,
          formats: ["auto", "webp", "avif"],
          placeholder: "blurred",
        },
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("node-sass"),
      },
    },
  ],
}
