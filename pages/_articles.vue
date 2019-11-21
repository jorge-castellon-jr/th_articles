<template>
    <b-row class="th__row">
        <navbar :json="home" :articles="articles" />
        <b-row>
            <b-col>
                <h1 class="title">{{ article.title }}</h1>
                <Blocks :blocks="article.blocks" />
            </b-col>
        </b-row>
        <footerbar :articles="articles" />
    </b-row>
</template>

<script>
import util from '~/assets/js/utils/global_func'
import homeJSON from '~/content/data/home.json'

// Components
import navbar from '~/components/navbar.vue'
import footerbar from '~/components/footerbar.vue'
import Blocks from '~/components/Blocks.vue'

export default {
    head() {
        return {
            title: this.article.title || '',
            meta: [
                { hid: 'description', name: 'description', content: this.article.description || '' },
                { hid: 'robots', name: 'robots', content: this.article.robots_ ? 'noindex' : '' }
            ],
            __dangerouslyDisableSanitizers: ['script'],
            script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }]
        }
    },
    async asyncData ({ params }) {
        try {
            let singleArticle = await util.getArticle( 'articles/' + params.articles ),
                articles = await util.getAllArticles( 'articles'),
                url = "https://edge-pro.netlify.com/",
                currentarticle = url + params.articles,
                logoURL = url + homeJSON.home_logo
                
            return {
                article: singlearticle.default.attributes,
                articles: articles,
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
                            "@type": "Webarticle",
                            "url": currentarticle,
                            "name": singlearticle.default.attributes.title || "Did not work",
                            "description": singlearticle.default.attributes.description || "Did not work",
                            "isPartOf": {
                                "@type": "WebSite",
                                "@id": url,
                            }
                        }
                    ]
                },
            }
        } catch (err) {
            console.error(err)
            return false
        }
    },
    components: {
        navbar,
        footerbar,
        Blocks
    }
}
</script>

<style lang="scss" scoped>
.th {
    &__row {
        flex-direction: column;
        
        .title {
            font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
                'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            display: block;
            font-weight: 300;
            font-size: 100px;
            color: #35495e;
            letter-spacing: 1px;
            text-align: center;
        }
    }

    &__block {
        margin: 75px auto;
        padding: 50px 0;
    }
}
</style>