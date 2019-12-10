<template>
    <b-row class="th__footer">
        <b-col md="7">
            <h2><nuxt-link to="/about-us">About the Org</nuxt-link></h2>
            <!-- <p>{{ json.about_organization }}</p> -->
            <span>© Copyright {{ currentYear() }}, The Foundation for Harmony and Prosperity, All Rights Reserved.</span>
        </b-col>
        <b-col></b-col>
    </b-row>
</template>

<script>
import util from '~/assets/js/utils/global_func'

export default {
    props: {
        json: Object
    },
    methods: {
        formatSlug( text ){
            return util.formatSlug(text)
        },
        currentYear() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped>
.th {
    &__footer {
        max-width: 80%;
        margin: 150px auto 50px;
    }
}
</style>