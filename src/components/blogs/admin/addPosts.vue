
<template lang="pug">
  section#add-blogs
    .row
      .columns
        h2.text-center Add Blog post
        hr.line
    form(v-on:submit.prevent="onCreatePost").row.align-middle
      .columns.large-4.medium-4.small-12
        input(type="text" name="title" id="title" required v-model="title" placeholder="Post Title")
      .columns.large-4.medium-4.small-12
        button(v-on:click.prevent="addHashtag").button.small.expanded.main add hashtag
      .columns.large-4.medium-4.small-12
        div(v-for="(hashtag, index) in hashtags").hashtags__input
          input(type="text" name="hashtags" id="hashtags" required v-model="hashtag.value" placeholder="Hashtags").input-group-field
          button(v-on:click.prevent="deleteHashtag(index)") -
      .columns.large-12.medium-12.small-12
        quill-editor(v-model="content"
          ref="myQuillEditor")
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
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  components: {
    quillEditor
  },
  data () {
    return {
      title: '',
      imageUrl: '',
      content: '',
      hashtags: [ ],
      date: null,
      image: null,
    }
  },

  computed: {
    formValid () {
      return this.title !== '' &&
        this.content !== '' &&
        this.hashtags !== '' &&
        this.imageUrl !== ''
    },
    editor() {
        return this.$refs.myQuillEditor.quill
      }
  },
  methods: {
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    },
    addHashtag () {
      this.hashtags.push({ value: '' });
    },
    deleteHashtag (index) {
      this.hashtags.splice(index, 1);
    },
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
      this.$router.push('/blogs/all-post')
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
  .ql-container
    min-height: 300px
</style>
