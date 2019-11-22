<template>
  <b-row>
    <b-col>
    <logo />
    <h1 class="title">
      edgepro
    </h1>
    <h2 class="subtitle">
      My mathematical Nuxt.js project
    </h2>
    <RecentArticles :articles="articles" />
    <div class="links">
      <p v-for="page in pages" :key="page.attributes.title">
        <nuxt-link :to="`/${formatSlug(page.attributes.title)}`">
          {{ page.attributes.title }}
        </nuxt-link>
      </p>
    </div>
    </b-col>
  </b-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import util from '~/assets/js/utils/global_func'
import homeJSON from '~/content/data/home.json'

// Components
import RecentArticles from '~/components/RecentArticles.vue'

export default {
  head () {
    return {
      title: 'home',
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }]
    }
  },
  async asyncData () {
    let url = "https://th-articles.netlify.com",
        logoURL = url + homeJSON.home_logo

    return {
      pages: await util.getAllPages(),
      articles: await util.getAllArticles(),
      structuredData: {
        "@context": "http://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "name": homeJSON.home_name || '',
            "address": {
              "@type": "PostalAddress",
              "addressLocality": homeJSON.home_city || '',
              "addressRegion": homeJSON.state || '',
              "postalCode": homeJSON.home_zip || '',
              "streetAddress": homeJSON.home_address || '',
              },
            "url": url,
            "logo": logoURL,
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-916-582-2335",
                "contactType": "Customer service"
            },
          },
          {
            "@type": "WebSite",
            "@id": url,
            "url": url,
            "name": "Title placed here",
            "description": "Description goes here and blah blah blah blah blah blah"
          },
          {
            "@type": "WebPage",
            "url": url,
            "isPartOf": {
              "@id": url,
              "name": homeJSON.home_name || ''
            }
          }
        ]
      },
    }
  },
  components: {
    Logo,
    RecentArticles
  },
  methods: {
    formatSlug( text ){
      return util.formatSlug(text)
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
