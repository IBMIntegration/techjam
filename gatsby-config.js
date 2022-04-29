module.exports = {
  siteMetadata: {
    title: 'Integration Tech Jam',
    description: 'Automation SWAT Team presents the Integration Tech Jam',
    keywords: 'ibm,swat,cp4i,techjam',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Automation SWAT Integration',
        icon: 'src/images/favicon.svg',
        short_name: 'Automation SWAT Integration',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://pages.github.ibm.com/cloud-integration-swat/techjam/',
          subDirectory: '/',
        },
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-zoom`,
            options: {
              margin: 100,
              background: "#161616",
              container: {
                // width: 720,
                // height: 480,
                // top: 64,
                // bottom: 64,
                // right: 50,
                left: 200,
              }
            }
          }
        ],
      },
    }
  ],
  pathPrefix: "/cloud-integration-swat/techjam/",
};
