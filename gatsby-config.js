module.exports = {
  siteMetadata: {
    title: 'Luoming Zhang - Profolio Website',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Luoming Zhang',
        short_name: 'Luoming',
        start_url: '/',
        background_color: '#111',
        theme_color: '#111',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-transformer-sharp`
    },
    `gatsby-plugin-sharp`,
  ],
};
