<template lang="pug">
  section(v-if="loading").loading
    .load
      i.fa.fa-cog.fa-spin.fa-3x.fa-fw
  section#single-post(v-else)
    .row.align-center
      .columns.large-10.medium-10.small-12
        template(v-if="userIsCreator")
          app-edit-post-modal(v-bind:blog="blog")

        // .autor
          img(src="../../../assets/team/ceo.png" alt="").autor-img
          .autor-name
            h4 {{ user.userName }}
            // h4.light {{ blog.userPosition }}
          h4.light.date {{ blog.date | date}}
        .content
          h2.text-center {{ blog.title }}
          hr.line
          div(v-html="blog.content")
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
    user () {
        return this.$store.getters.loadedUser(this.id)
    },

    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if (!this.userIsAuthenticated) {
        return false
      }
      return this.$store.getters.user.id === this.blog.creatorId
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style lang="sass">
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

  @import '../../../styles/pages/blog';
</style>
