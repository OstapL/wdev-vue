<template lang="pug">
  #offCanvas(data-off-canvas data-transition="overlap").off-canvas.position-right
    h5.title.light Profile menu
    ul(v-if="userIsAuthenticated")
      li
        router-link(:to="{path: '/profile'}") Profile
      li
        router-link(:to="{path: '/blogs/admin/add-post'}") Add Post
      li
        a(href="#" @click="onLogout") Log out
    ul(v-else)
      li
        router-link(to="signin") Sign In
      li
        router-link(to="signup") Sign Up

</template>

<script>
export default {
  mounted() {
    this.offCanvas = new Foundation.OffCanvas($('#offCanvas'));
  },
  destroyed() {
    this.offCanvas.destroy();
  },
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="sass">
  @import '../../styles/color';
  @import '../../styles/settings';
  @import '../../styles/components/mixins';
  .off-canvas
    background: #083d77
    .title
      text-align: center
      border-bottom: solid 1px white
      color: white
    ul
      list-style-type: none
      margin-left: 0
      li
        a
          color: white
          display: block
          text-transform: uppercase
          padding: 5px 10px
          &:hover
            background-color: rgba(255,255,255, 0.3)


</style>
