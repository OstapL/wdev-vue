<template lang="pug">
  div
    app-header
    #content
      router-view
    app-footer
</template>

<script>

import header from './components/general/header.vue';
import footer from './components/general/footer.vue';

export default {
  components: {
    'app-header': header,
    'app-footer': footer
  },
  data () {
    return {
      msg: 'Welcome to Your App'
    }
  }
}
</script>

<style lang="scss">
  @import './style/app';
</style>
