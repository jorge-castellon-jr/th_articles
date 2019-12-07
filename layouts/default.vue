<template>
    <b-container fluid>
        <b-row>
            <b-col>
                <navbar :json="homeJSON" />
            </b-col>
        </b-row>
        <b-container>
            <nuxt :util="util" />
        </b-container>
        
        <footerbar :json="homeJSON" />
    </b-container>
</template>

<script>
import homeJSON from '~/content/data/home.json'
import util from '~/assets/js/utils/global_func'

// Components
import navbar from '~/components/navbar.vue'
import footerbar from '~/components/footerbar.vue'

export default {
    // scrollToTop: true,
    data () {
        return {
            util,
            homeJSON
        }
    },
    components: {
        navbar,
        footerbar
    }
}
</script>

<style>
</style>
