<template>
    <div class="th__blocks">
        <div v-for="block in blocks" :key="block.template" class="th__block">
            <!-- {{ block }} -->
            <Columns v-if="block.template === 'columns'" :block="block" />
            <Gallery v-else-if="block.template === 'gallery'" :block="block" />
            <Generic v-else-if="block.template === 'content'" :block="block" />
            <Cards v-else-if="block.template === 'cards'" :block="block" />
            <span v-else v-html="block.html" class="th__block-html"></span>
        </div>
    </div>
</template>

<script>
import Generic from '~/components/Blocks/Generic.vue'
import Columns from '~/components/Blocks/Columns.vue'
import Gallery from '~/components/Blocks/Gallery.vue'
import Cards from '~/components/Blocks/Cards.vue'

export default {
    props: {
        blocks: Array
    },
    components: {
        Columns,
        Generic,
        Gallery,
        Cards,
    }
}
</script>

<style lang="scss" scoped>
.th {
    &__block {
        margin: 30px auto;
        padding: 10px 0;
        &-html {
            display: flex;
            justify-content: center;
        }
    }
}
</style>