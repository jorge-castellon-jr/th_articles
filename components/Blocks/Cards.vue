<template>
    <b-row align-v="center"> 
        <b-col class="th__col">
            <b-card-group deck>
                <b-card
                    v-for="card in block.cards"
                    :key="card.card_title"
                    :title="card.card_title"
                    :img-src="card.card_image"
                    :class="`th__col-${block.card_columns}`"
                    >
                    <b-card-text>
                        <span v-html="card.card_content"></span>
                    </b-card-text>
                    <b-button v-if="card.button_" :href="card.button_link">{{ card.button_label }}</b-button>
                </b-card>
            </b-card-group>
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
.th {
    &__col {
        .card-deck {
            justify-content: space-between;
        }
    }
}
@for $i from 2 through 6 {
    .th__col-#{$i} {
        width: calc( 100% / #{$i} - 30px );
        flex: initial;
        margin-bottom: 30px;
    }
}

</style>