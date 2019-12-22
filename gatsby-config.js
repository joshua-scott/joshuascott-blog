module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `joshuascott.io`,
    author: `Joshua Scott`,
    description: `Personal blog by Joshua Scott`,
    social: [
      {
        name: `email`,
        url: `mailto:hello@joshuascott.io`,
      },
      {
        name: `github`,
        url: `https://joshuascott.io/github`,
      },
      {
        name: `twitter`,
        url: `https://joshuascott.io/twitter`,
      },
    ],
  },
}
