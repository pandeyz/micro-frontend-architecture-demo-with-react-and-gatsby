/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // 'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-federation',
      options: {
        ssr: process.env.MF_SSR !== 'false',
        federationConfig: {
          name: 'MICRO',
          // From where it will get the remote components
          remotes: {
            // remote: 'remote@http://localhost:8081/remoteEntry.js',
            // remote: 'remote@http://localhost:8080/',
            FIRST_APP: "FIRST_APP@http://localhost:8080/",
          },
        },
      },
    },
  ],
}
