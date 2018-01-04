
<template lang="pug">
  section#add-blogs
    .row
      .columns
        h2.text-center Add Blog post
        hr.line
    form(v-on:submit.prevent="onCreatePost").row
      .columns.large-6.medium-6.small-12
        label Post Title
        input(type="text" name="title" id="title" required v-model="title")
      .columns.large-6.medium-6.small-12
        label Heshtags
        input(type="text" name="hashtags" id="hashtags" required v-model="hashtags")
      .columns.large-12.medium-12.small-12
        textarea(placeholder="content" name="content" id="content" v-model="content")
      .columns.large-12.medium-12.small-12
        p Post Image
        .large-3
          button(@click="onPickFile").button.small.expanded.main Upload Image
          input(type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked")
        .large-12
          img(:src="imageUrl")
      .columns
        .large-3.float-right
          button(:disabled="!formValid" type="submit").button.small.expanded.main Submit



</template>

<script>

export default {
  data () {
    return {
      title: '',
      imageUrl: '',
      content: '',
      hashtags: '',
      date: null,
      image: null
    }
  },
  computed: {
    formValid () {
      return this.title !== '' &&
        this.content !== '' &&
        this.imageUrl !== '' &&
        this.hashtags !== ''
    }
  },
  methods: {
    onCreatePost () {
      if (!this.formValid) {
        return
      }
      const postData = {
        title: this.title,
        content: this.content,
        image: this.image,
        date: new Date(),
        hashtags: this.hashtags
      }
      this.$store.dispatch('createdPosts', postData)
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
  },
};
</script>

<style lang="sass">
  #add-blogs
    margin-top: 100px
  @import '../../../styles/pages/blog';
</style>
