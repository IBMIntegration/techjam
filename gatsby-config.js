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
    }
  ],
  pathPrefix: "/cloud-integration-swat/techjam/",
};