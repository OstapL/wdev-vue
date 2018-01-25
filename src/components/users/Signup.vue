<template lang="pug">
  section#sign
    form(@submit.prevent="onSignup").login-box
      .row.collapse.expanded
        .small-12.medium-6.column.small-order-2.medium-order-1
          .login-box-form-section
            h1.login-box-title Sign up
            // input(type="text" name="username" placeholder="Username").login-box-input
            input(type="email" name="email" placeholder="E-mail" v-model="email").login-box-input
            input(type="password" name="password" placeholder="Password" v-model="password").login-box-input
            input(type="password" name="confirmPassword" placeholder="Retype password" v-model="confirmPassword").login-box-input
            input(type="submit" name="signup_submit" value="Sign me up").button.login-box-submit-button
          .or OR
        .small-12.medium-6.column.small-order-1.medium-order-2.login-box-social-section
          .login-box-social-section-inner
            span.login-box-social-headline Sign in with your social network
            a(href="#").login-box-social-button-facebook Log in with facebook
            a(href="#").login-box-social-button-google Log in with Google+
            a(href="#").login-box-social-button-twitter Log in with GitHub
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePassword () {
      return this.password !== this.confirmPassword ? 'Password do not match' : ''
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/profile') // redirect to main page after user click submit btn
      }
    }
  },
  methods: {
    onSignup () {
      // Vuex
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style lang="sass">
@import '/../../styles/pages/sign';
</style>
