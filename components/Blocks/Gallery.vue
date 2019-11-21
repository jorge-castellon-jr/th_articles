<template>
    <b-row>
        <!-- {{getCol(block.columns)}} -->
        <b-col :cols="getCol(block.columns)" v-for="img in block.gallery" :key="img">
            <b-img-lazy :src="img" alt="" />
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        block: Object
    },
    methods: {
        getCol( col ) {
            return 12 / col
        }
    }
}
</script>

<style lang="scss" scoped>
.row {
    max-width: 750px;
    margin: 0 auto;
}
img {
    padding: 15px 0;
}
@for $i from 2 through 6 {
    .col-#{$i} {
        display: flex
    }
}
</style>