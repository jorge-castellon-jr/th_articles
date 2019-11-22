<template>
    <b-row class="th__row">
        <b-col>
            <b-img :src="article.attributes.featured_image" alt="article.attributes.title" />
            <h1 class="title">{{ article.attributes.title }}</h1>
            <span v-html="article.html"></span>
        </b-col>
    </b-row>
</template>

<script>
import util from '~/assets/js/utils/global_func'
import companyJSON from '~/content/data/home.json'

export default {
    // layout: 'articles',
    head() {
        return {
            title: this.article.attributes.title || '',
            meta: [
                { hid: 'description', name: 'description', content: this.article.attributes.description || '' },
                { hid: 'robots', name: 'robots', content: this.article.attributes.robots_ ? 'noindex' : '' }
            ],
            __dangerouslyDisableSanitizers: ['script'],
            script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }]
        }
    },
    async asyncData ({ params }) {
        try {
            let singleArticle = await util.getSingle( 'articles/' + params.articles ),
                // articles = await util.getAllArticles(),
                url = "https://th-articles.netlify.com/",
                currentarticle = url + params.articles,
                logoURL = url + companyJSON.company_logo
                
            return {
                article: singleArticle.default,
                company: companyJSON,
                structuredData: {
                    "@context": "http://schema.org",
                    "@graph": [
                        {
                            "@type": "Organization",
                            "name": companyJSON.company_name || '',
                            "address": {
                            "@type": "PostalAddress",
                            "addressLocality": companyJSON.company_city || '',
                            "addressRegion": companyJSON.state || '',
                            "postalCode": companyJSON.company_zip || '',
                            "streetAddress": companyJSON.company_address || '',
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
                            "name": singleArticle.default.attributes.title || "Did not work",
                            "description": singleArticle.default.attributes.description || "Did not work",
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
        // navbar,
        // footerbar,
        // Blocks
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