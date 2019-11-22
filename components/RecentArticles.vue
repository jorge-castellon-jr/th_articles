<template>
    <div class="th__recent">
        <h2>Articles</h2>
        <b-row v-for="card in articles" :key="card.attributes.title" align-v="center">
            <b-col md="6">
                <nuxt-link :to="`articles/${formatSlug(card.attributes.title)}`" class="th__link">
                    <b-img :src="card.attributes.featured_image"></b-img>
                </nuxt-link>
            </b-col>
            <b-col class="th__right">
                <nuxt-link :to="`articles/${formatSlug(card.attributes.title)}`" class="th__link">
                    <h2>{{ card.attributes.title }}</h2>
                    <p v-if="card.attributes.description == ''">{{ excerpt(card.html) }}</p>
                    <p v-else>{{ card.attributes.description }}</p>
                </nuxt-link>
            </b-col>
        </b-row>
    </div>
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
            return text.substring(3, 150) + ' ...';
        }
    }
}
</script>

<style lang="scss" scoped>
.th {
    &__recent {
        max-width: 80%;
        margin: 150px auto 0;
        text-align: left;

        h2 {
            max-width: none;
        }
        .row {
            margin-top: 40px;
        }
    }
    &__link {
        &:after {
            @include position(absolute, 0,0,0,0);
            content: '';
        }
    }
}
</style>