module.exports = {
  siteMetadata: {"bodyBackgroundColor":"#eafdff","primaryColor":"#4dd0e1","secondaryColor":"#424242","sidebarColor":"#eeeeee","textColor":"#616161","amazonWidthValue":"100","h1SizeValue":1,"h2SizeValue":1,"h3SizeValue":1,"headerSizeValue":1,"logoPositionValue":"50","sidebarWidthValue":"20","siteLogo":"https://firebasestorage.googleapis.com/v0/b/automatic-web-dashboard-back.appspot.com/o/JBEqCPjH5HQUBNcmUAjDr8wDW8L2%2Fthumb_480_b9w26pimbdl.png?alt=media&token=d14be65d-ba61-4a0c-8843-26abb3f9e82c","templateWidthValue":"80","textSizeValue":1,"useAmazonSearch":true,"useFooterWidth":false,"useHeaderWhite":false,"useLogo":true,"useMenu":false,"useMenuWidth":false,"useSidebar":false,"useTransparentContentBackground":false,"genrePrincipalKeyword":"m","singularPrincipalKeyword":"cristal murano","pluralPrincipalKeyword":"cristales muranos","siteDescription":"Sitio web sobre cristal murano","siteUrl":"https://cristalmurano.es","siteFavicon":"https://firebasestorage.googleapis.com/v0/b/automatic-web-dashboard-back.appspot.com/o/JBEqCPjH5HQUBNcmUAjDr8wDW8L2%2Fthumb_480_u9gtc1p5kfe.png?alt=media&token=6ecf2420-ab2c-4055-b990-707a38a56dfa","siteLanguage":"es","siteName":"Cristal murano"},
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name":"Cristal murano","short_name":"Cristal murano","start_url":"/","background_color":"#4dd0e1","theme_color":"#4dd0e1","display":"minimal-ui","icon":"src/images/favicon.png"
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-LYSG7VSTM4', // leave empty if you want to disable the tracker
          cookieName: 'google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        // googleTagManager: {
        //   trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-google-tagmanager', // default
        //   dataLayerName: 'dataLayer', // default
        // },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-facebook-pixel', // default
        // },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/cookies`, `/goto`]
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-offline'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
