
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
      .columns
        .large-3.float-right
          button(:disabled="!formValid" type="submit").button.small.expanded.main Submit



</template>

<script>

export default {
  data () {
    return {
      title: '',
      content: '',
      hashtags: ''
    }
  },
  computed: {
    formValid () {
      return this.title !== '' &&
        this.content !== '' &&
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
        hashtags: this.hashtags
      }
      this.$store.dispatch('createdPosts', postData)
      console.log(postData)
    }
  },
};
</script>

<style lang="sass">
  @import '../../../styles/pages/blog';
</style>
