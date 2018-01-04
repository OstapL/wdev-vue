<template lang="pug">
  div
    app-header
    app-canvas

    #content.off-canvas-content(data-off-canvas-content data-transition="push")
      router-view
    app-footer
</template>

<script>

import header from './components/general/header';
import footer from './components/general/footer';
import rightCanvasMenu from './components/general/offcanvas';
export default {
  components: {
    'app-header': header,
    'app-footer': footer,
    'app-canvas': rightCanvasMenu
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
