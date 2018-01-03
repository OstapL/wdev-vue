<template lang="pug">
  div
    app-header
    #content
      router-view
    app-footer
</template>

<script>

import header from './components/general/header';
import footer from './components/general/footer';
export default {
  components: {
    'app-header': header,
    'app-footer': footer
  },
  data() {
    return {
      msg: 'Welcome to Your App',
    };
  },
};
</script>

<style lang="scss">
  @import 'styles/app';
</style>
