<template>
  <div class="VueToNuxtLogo">
    <img :src="home.company_logo" :alt="`${home.company_name} Logo`" />
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
