<template>
    <b-row class="th__row">
        <navbar :json="home" />
        <b-row>
            <b-col>
                <h1 class="title">{{ page.title }}</h1>
                <Blocks :blocks="page.blocks" />
            </b-col>
        </b-row>
        <footerbar :pages="pages" />
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
            title: this.page.title || '',
            meta: [
                { hid: 'description', name: 'description', content: this.page.description || '' },
                { hid: 'robots', name: 'robots', content: this.page.robots_ ? 'noindex' : '' }
            ],
            __dangerouslyDisableSanitizers: ['script'],
            script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }]
        }
    },
    async asyncData ({ params }) {
        try {
            let singlepage = await util.getSingle( 'pages/' + params.pages ),
                pages = await util.getAllPages(),
                url = "https://th-articles.netlify.com/",
                currentpage = url + params.pages,
                logoURL = url + homeJSON.home_logo
                
            return {
                page: singlepage.default.attributes,
                pages: pages,
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
                            "@type": "Webpage",
                            "url": currentpage,
                            "name": singlepage.default.attributes.title || "Did not work",
                            "description": singlepage.default.attributes.description || "Did not work",
                            "isPartOf": {
                                "@type": "WebSite",
                                "@id": url,
                            }
                        }
                    ]
                },
            }
        } catch (err) {
            console.log('oh no wrong page')
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