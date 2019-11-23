import path from "path";

const glob = require('glob');
const dynamicRoutes = getDynamicPaths({
  'articles': 'content/articles/*.md',
  '': 'content/pages/*.md',
});

export default {
  mode: 'universal',
  router: {
    scrollBehavior (to, from, savedPosition) {
      // if (savedPosition) {
      //   return window.scrollTo({ top: savedPosition.x, behavior: 'smooth' })
      // }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  /*
  ** Headers of the article
  */
  head: {
    title: process.env.npm_package_name || 'Nuxt Articles Site',
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/index.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // '@nuxtjs/google-analytics'
  ],

  /*
  ** Google Analytics UA ID
  ** Please uncomment to be able to use google Analytics
  */
  googleAnalytics: {
  //   id: 'UA-12301-2'
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  styleResources: {
    scss: [
      './assets/scss/utils/index.scss',
    ]
  },
  robots: {
    UserAgent: '*',
    Disallow: '/admin',
    Allow: '/media/',
    Allow: '/sitemap.xml'
  },
  sitemap: {
    hostname: 'https://th-articles.netlify.com/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

      // add frontmatter-markdown-loader
      config.module.rules.push({
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
          include: [
            path.resolve(__dirname, "content/articles"),
            path.resolve(__dirname, "content/pages"),
          ]
      })
    }
  },
  generate: {
    routes: dynamicRoutes
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */

/* referenced https://github.com/jake-101/bael-template */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      const filepathGlob = urlFilepathTable[url];
      const routes = glob
        .sync(filepathGlob)
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
      return routes
    })
  );
}