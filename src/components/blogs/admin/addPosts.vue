
<template lang="pug">
  section#add-blogs
    .row
      .columns
        h2.text-center Add Blog post
        hr.line
    form(v-if="!submitted").row
      .columns.large-6.medium-6.small-12
        label Post Title
        input(type="text" name="" required v-model="blog.title")
      .columns.large-3.medium-3.small-12
        label Author
        input(type="text" name="" required v-model="blog.author")
      .columns.large-3.medium-3.small-12
        label Author position
        input(type="text" name="" required v-model="blog.position")
      .columns.large-6.medium-6.small-12
        label Date
        input(type="date" name="" required v-model="blog.date")
      .columns.large-6.medium-6.small-12
        label Heshtags
        input(type="text" name="" required v-model="blog.hashtags")
      .columns.large-12.medium-12.small-12
        textarea(placeholder="content" v-model="blog.content")
      .columns
        .large-3.float-right
          button(v-on:click.prevent="post").button.small.expanded.main Submit
    div(v-if="submitted")
      .row
        h2 Thanks for adding new post {{ blog.author }}
    .row
      .columns.small-12
        hr.line
      .columns.small-12.text-center
        h2 Preview
      .columns.large-12
        h3 Title: {{ blog.title }}
      .columns.large-4
        h3 Author: {{ blog.author }}
      .columns.large-5
        h3 Author position: {{ blog.position }}
      .columns.large-3
        h3  Date: {{ blog.date }}
      .columns.large-12
        h3 Heshtags: {{ blog.hashtags }}
      .columns.large-12
        h3 Content
        p {{ blog.content }}



</template>

<script>

export default {
  data () {
    return {
      blog: {
        title: '',
        content: '',
        hashtags: '',
        author: '',
        position: '',
      },
      submitted: false,
    };
  },
  methods: {
    post: function() {
      this.$http.post('https://webdev-vue.firebaseio.com/posts.json', this.blog).then(function(data) {
        this.submitted = true;
      });
    },
  },
};
</script>

<style lang="sass">
  @import '../../../styles/pages/blog';
</style>
