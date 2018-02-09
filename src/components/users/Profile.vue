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

<style>

</style>
