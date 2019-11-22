<template>
    <b-navbar class="th__nav">
        <nuxt-link to="/">
            <b-navbar-brand>
                <img :src="`${json.company_logo}`" :alt="`${json.company_name} Logo`">
                <!-- {{ json.company_name }} -->
            </b-navbar-brand>
        </nuxt-link>
    </b-navbar>
</template>

<script>
import util from '~/assets/js/utils/global_func'

export default {
    props: {
        json: Object,
    }
}
</script>

<style lang="scss" scoped>
.th {
    &__nav {
        // height: 100px;
        // background: linear-gradient(to bottom, rgba(255,255,255,1) 0, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);
        margin: 60px auto;
        display: flex;
        justify-content: center;
        z-index: 10;
        img {
            max-width: 250px;
        }
    }
}
.navbar-collapse {
    flex-grow: 0;
}
</style>