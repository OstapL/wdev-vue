<template lang="pug">
  section#single-post
    .row.align-center
      .columns.large-10.medium-10.small-12
        .autor
          img(src="../../../assets/team/ceo.png" alt="").autor-img
          .autor-name
            // h4 {{ blog.author }}
            // h4.light {{ blog.position }}
          h4.light.date {{ blog.date | date}}
        .content
          h2.text-center {{ blog.title }}
          hr.line
          p {{ blog.content }}
          img(src="../../../assets/blog/popular.png" alt="")
        .social-heshtags
          .heshtags
            span {{ blog.hashtags }}&nbsp;
      .columns.large-12.medium-12.small-12
        .social-block
          a(href="#").circle.fbShare
            i(aria-hidden="true").fa.fa-facebook
          a(href="#" target="_blank").circle.twitterShare
            i(aria-hidden="true").fa.fa-twitter
          a(href="#" target="_blank").circle.linkedinShare
            i(aria-hidden="true").fa.fa-linkedin
    //- var background = 'background: url(' + (require('img/blog/one-post.png')) + ') center center no-repeat; background-size: cover;';
    .row.more-posts
      .columns.large-4.medium-6.small-12
        .more-one
          a(href="#")
            .background(style="background: url('../assets/blog/one-post.png') center center no-repeat; background-size: cover;")
            .text-wrap
              h4 IOLIinteractive blog article and more
              .date-more
                h6.light Jul 20, 2017
                i(aria-hidden="true").fa.fa-long-arrow-right
      .columns.large-4.medium-6.small-12
        .more-one
          a(href="#")
            .background(style=background)
            .text-wrap
              h4 IOLIinteractive blog article and
              .date-more
                h6.light Jul 20, 2017
                i(aria-hidden="true").fa.fa-long-arrow-right
      .columns.large-4.medium-6.small-12
        .more-one
          a(href="#")
            .background(style=background)
            .text-wrap
              h4 IOLIinteractive blog article and more
              .date-more
                h6.light Jul 20, 2017
                i(aria-hidden="true").fa.fa-long-arrow-right
</template>

<script>
export default {
  props: ['id'],
  computed: {
    blog () {
      return this.$store.getters.loadedPost(this.id)
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style lang="sass">
  @import '../../../styles/pages/blog';
</style>
