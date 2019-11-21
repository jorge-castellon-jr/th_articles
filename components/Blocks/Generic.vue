<template>
    <b-row>
        <b-col class="th__generic" v-html="block.content">
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