
<template lang="pug">
  div
    button(data-toggle="editPostModal").edit-button
      i.fa.fa-pencil-square-o
    #editPostModal.full.reveal(data-reveal)
      .columns
        button(data-close type="button" @click="closeReveal" aria-label="Close reveal").close-button
          span(aria-hidden="true") &times;
        h3.text-center {{ editTitle }}
      .columns.large-6.medium-6.small-12
        label Post Title
        input(type="text" name="title" id="title" required v-model="editTitle")
      .columns.large-6.medium-6.small-12
        label Heshtags
        div(v-for="hashtag in editHeshtags").hashtags__input
          input(type="text" name="hashtags" id="hashtags" v-model="hashtag.value" required  placeholder="Hashtags").input-group-field
      .columns.large-12.medium-12.small-12
        quill-editor(v-model="editContent"
          ref="myQuillEditor")
      .columns
        .large-3.float-right
          button(type="submit" @click="onSaveChanges").button.small.expanded.main.update-button Update Post

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
  props: ['blog'],
  data () {
    return {
      editTitle: this.blog.title,
      editHeshtags: this.blog.hashtags,
      editContent: this.blog.content
    }
  },
  name: 'reveal',
  mounted() {
    this.reveal = new Foundation.Reveal($('#editPostModal'), {
      animationIn: 'scale-in-up',
    });
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    openReveal() {
      this.reveal.open();
    },
    closeReveal () {
      this.reveal.close()
    },
    onSaveChanges () {
      if (this.editTitle.trim() === ''  || this.editContent.trim() === '') {
        return
      }
      this.$store.dispatch('updatePostData', {
        id: this.blog.id,
        title: this.editTitle,
        hashtags: this.editHeshtag,
        content: this.editContent
      })
      this.reveal.close()
    }
  },
  destroyed() {
    this.reveal.destroy();
  },
};
</script>

<style lang="sass">
  .edit-button
    font-size: 30px
    cursore: pointer
    float: right
    position: relative
    top: -20px
    &:hover
      opacity: 0.7
  .update-button
    margin-top: 30px
</style>
