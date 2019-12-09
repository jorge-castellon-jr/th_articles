<template>
    <b-row class="th__row">
        <b-col>
            <b-navbar class="th__nav">
                <b-navbar-brand>
                    <nuxt-link to="/">
                        <img :src="`${json.company_logo}`" :alt="`${json.company_name} Logo`">
                        <!-- {{ json.company_name }} -->
                    </nuxt-link>
                </b-navbar-brand>
                <b-collapse is-nav>
                    <b-navbar-nav align="right" fill>
                        <b-nav-item v-for="link in navList.links" :key="link.name" href="">
                            <nuxt-link :to="parseLink(link)">{{ link.name }}</nuxt-link>
                        </b-nav-item>
                    </b-navbar-nav>
                    </b-collapse>
            </b-navbar>
        </b-col>
    </b-row>
</template>

<script>
import util from '~/assets/js/utils/global_func'

import navList from '~/content/data/nav.json'

export default {
    data () {
        return {
            navList
        }
    },
    props: {
        json: Object,
    },
    methods: {
        parseLink( ob ) {

            switch (ob.template) {
                case 'plain-link':
                    return ob.url
                    break;
                case 'page-link':
                    var r = ob.page.split("/")
                    return r[r.length -1].slice(0,-3)
                    break;
                case 'article-link':
                    return ob.article
                    break;
                default:
                    return ob
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.th {
    &__row {
        border-bottom: 1px solid var(--home-primary);
        margin: 20px -15px 60px;
    }
    &__nav {
        // height: 100px;
        // background: linear-gradient(to bottom, rgba(255,255,255,1) 0, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        z-index: 10;
        img {
            max-width: 250px;
        }
        ul {
            list-style: none;
            margin: 0;
            .nav-link {
                // margin: 0 5px;
                padding: 0;
                a {
                    color: var(--home-primary);
                    padding: 20px;

                    &:hover {
                        color: var(--home-secondary)
                    }
                }
            }
        }
    }
}
.navbar-collapse {
    flex-grow: 0;
}
</style>