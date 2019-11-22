<template>
    <b-card-group deck>
        <!-- {{ articles }} -->
            <b-card :img-src="card.attributes.featured_image" v-for="card in articles" :key="card.attributes.title">
                <!-- <b-card-img top :src="card.attributes.featured_image"></b-card-img> -->
                <nuxt-link :to="`articles/${formatSlug(card.attributes.title)}`" class="th__link">
                    <b-card-title>{{ card.attributes.title }}</b-card-title>
                    <b-card-text>
                        <p v-if="card.attributes.description == ''">{{ excerpt(card.html) }}</p>
                        <p v-else>{{ card.attributes.description }}</p>
                    </b-card-text>
                </nuxt-link>
            </b-card>
    </b-card-group>
</template>

<script>
import util from '~/assets/js/utils/global_func'

export default {
    props: {
        articles: Array,
    },
    methods: {
        formatSlug( text ) {
            return util.formatSlug(text)
        },
        excerpt( text ) {
            return text.substring(3, 75) + ' ...';
        }
    }
}
</script>

<style lang="scss" scoped>
.th {
    &__link {
        &:after {
            @include position(absolute, 0,0,0,0);
            content: '';
        }
    }
}
</style>