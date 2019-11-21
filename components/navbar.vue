<template>
    <b-navbar class="th__nav">
        <nuxt-link to="/">
            <b-navbar-brand>
                <img :src="`${json.home_logo}`" :alt="`${json.home_name} Logo`">
                <!-- {{ json.home_name }} -->
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
        height: 120px;
        // background: linear-gradient(to bottom, rgba(255,255,255,1) 0, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);
        margin-bottom: 75px;
        display: flex;
        justify-content: center;
        z-index: 10;
        img {
            max-height: 100px;
        }
    }
}
.navbar-collapse {
    flex-grow: 0;
}
</style>