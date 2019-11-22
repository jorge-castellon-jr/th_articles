<template>
    <b-row class="th__footer">
        <b-col md="7">
            <h2>About the Org</h2>
            <p>{{ json.about_organization }}</p>
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
        }
    }
}
</script>

<style lang="scss" scoped>
.th {
    &__footer {
        max-width: 80%;
        margin: 150px auto 0;
    }
}
</style>