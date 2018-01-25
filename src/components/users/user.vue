<template lang="pug">
  div
    p name {{ user.userName }}
    p Position {{ user.userPosition }}
    p Cr {{ user.creatorId }}


</template>

<script>
export default {
  props: ['id'],
  computed: {
    user () {
      return this.$store.getters.loadedUser(this.id)
    }
  }
}
</script>

<style>

</style>
