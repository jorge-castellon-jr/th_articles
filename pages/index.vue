<template>
  <b-row>
    <b-col>
      <b-img fluid :src="home.home_image"/>
      <h1 class="subtitle">
        {{ home.sub_headline }}
      </h1>
      <RecentArticles :articles="articles" />
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
      home: homeJSON,
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

.subtitle {
  padding: 50px 0 0;
  max-width: 80%;
}
</style>
