<template>
    <b-row align-v="center">
        <b-col class="th__col" v-for="col in block.columns" :key="col.type">
            <img v-if="col.type === 'Image'" :src="col.column_image" alt="">
            <span v-if="col.type == 'Content'" v-html="col.column_content"></span>
            <b-button v-if="col.button_" :href="col.button_link">{{ col.button_label }}</b-button>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        block: Object
    }
}
</script>

<style lang="scss" scoped>
.row {
    max-width: 750px;
    margin: 0 auto;
}

</style>