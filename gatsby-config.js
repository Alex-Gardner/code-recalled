module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Code, Recalled`,
    description: `Projects and Snippets Useful For Frontend Dev`,
    author: `Alex Gardner`,
    lang: `en`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Code, Recalled`,
        short_name: `Code, Recalled`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/images/article-icons/favicon.svg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
        gfm: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
