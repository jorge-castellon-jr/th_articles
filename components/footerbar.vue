<template>
    <b-navbar>
        <b-collapse is-nav>
            <b-navbar-nav>
                <b-nav-item v-for="page in pages" :key="page.attributes.title">
                    <nuxt-link :to="`/${formatSlug(page.attributes.title)}`">
                        {{ page.attributes.title }}
                    </nuxt-link>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import util from '~/assets/js/utils/global_func'

export default {
    props: {
        pages: Array
    },
    methods: {
        formatSlug( text ){
            return util.formatSlug(text)
        }
    }
}
</script>