import { GatsbyConfig } from 'gatsby';

module.exports = {
  siteMetadata: {
    title:       `Gatsby + Typescript Starter`,
    description: `Starter project for gatsby with typescript.`,
    author:      `Gabriel Terwesten`,
  },
  plugins:      [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name:             `gatsby-typescript-starter`,
        short_name:       `starter`,
        start_url:        `/`,
        background_color: `#663399`,
        theme_color:      `#663399`,
        display:          `minimal-ui`,
        icon:             `src/images/gatsby-icon.png`, // This path is relative to the root of the
                                                        // site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
} as GatsbyConfig;
