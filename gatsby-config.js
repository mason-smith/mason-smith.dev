module.exports = {
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `WeirdJS`,
    author: `Mason Smith`,
    description: `Just some casual thoughts about JavaScript, TypeScript, and general software development practices`,
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/mason-smith-979316b6/`,
      },
      {
        name: `github`,
        url: `https://github.com/mason-smith`,
      },
    ],
  },
}
