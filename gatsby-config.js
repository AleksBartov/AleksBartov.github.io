/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `сайт священника Александра Бартова`,
        short_name: `сайтСвященника`,
        description: `сайт священника Александра Бартова`,
        lang: `ru`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#596275`,
        theme_color: `#596275`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
