<template>
  <div class="VueToNuxtLogo">
    <img :src="home.home_logo" :alt="`${home.home_name} Logo`" />
  </div>
</template>

<script>
import homeJSON from '~/content/data/home.json'

export default {
  data () {
    return {
      home: homeJSON
    }
  }
}
</script>
