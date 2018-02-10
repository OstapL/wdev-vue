<template lang="pug">
  div#profile
    section(v-if="loading").loading
      .load
        i.fa.fa-cog.fa-spin.fa-3x.fa-fw
    h2.text-center Profile

    form(v-on:submit.prevent="onCreateUserData" v-if="dataValid").row
      .columns.large-6.medium-6.small-12
        label User Name
        input(type="text" name="name" id="name" required v-model="userName" )
      .columns.large-6.medium-6.small-12
        label Position
        input(type="text" name="position" id="position" required v-model="userPosition")
      .columns.large-12.medium-12.small-12
        p Post Image
        .large-3
          button(@click="onPickFile").button.small.expanded.main Upload Image
          input(type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked")
        .large-12
          img(:src="imageUrl")
      .columns
        .large-3.float-right
          button( type="submit").button.small.expanded.main Submit
    .row(v-else)
      .columns.large-4.medium-5.small-12
        .profile__user__info
          .profile__user-image-wrap
            img(:src="user.imageUrl" alt="").autor-img
          h4.text-center {{ user.userName }}
          h4.light.text-center {{ user.userPosition }}
      .columns.large-8.medium-7.small-12
        h3.text-center List of blog
        hr
        ul(v-for="blog in blogs").blogs__list
          li
            router-link(v-bind:to="'/blogs/' + blog.id") {{ blog.title }}



</template>

<script>
export default {
  data () {
    return {
      userName: '',
      userPosition: '',
      imageUrl: '',
      image: null
    }
  },
  computed: {
    dataValid () {
      return this.user == undefined
    },
    user () {
      const userId = this.$store.getters.user.id
      for(let key in this.$store.getters.users) {
        if(userId === this.$store.getters.users[key].creatorId)
        return this.$store.getters.users[key]
      }
    },
    blogs () {
      const blogs =  this.$store.getters.loadedPosts
      const user = this.user.creatorId
      const result = blogs.filter(function (blog, i) {
        return blog.creatorId === user
      })
      return result
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onCreateUserData () {
      const userData = {
        userName: this.userName,
        userPosition: this.userPosition,
        image: this.image,
      }
      this.$store.dispatch('createUserData', userData)
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}
</script>

<style lang="sass">
@import '../../styles/pages/profile';
.loading
  position: relative
  height: 100vh
  width: 100%
  .load
    transform: translate(-50%, -50%)
    position: absolute
    left: 50%
    top: 40%
    i
      color: #F0F2F3

</style>
