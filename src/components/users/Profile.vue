<template lang="pug">
  div
    h2.text-center Profile
    form(v-on:submit.prevent="onCreateUserData").row
      .columns.large-6.medium-6.small-12
        label User Name
        input(type="text" name="name" id="name" required v-model="userName")
      .columns.large-6.medium-6.small-12
        label Position
        input(type="text" name="position" id="position" required v-model="userPosition")
      .columns
        .large-3.float-right
          button( type="submit").button.small.expanded.main Submit
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      userPosition: ''
    }
  },
  methods: {
    onCreateUserData () {
      const userData = {
        userName: this.userName,
        userPosition: this.userPosition
      }
      this.$store.dispatch('createUserData', userData)
    },
  }
}
</script>

<style>

</style>
