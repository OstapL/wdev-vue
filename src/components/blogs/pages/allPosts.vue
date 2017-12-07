<template lang="pug">
  section#blog-list
    //.popular
      .row.align-center
        .columns.large-10.medium-10.small-12
          .some-popular
            img(src="../../../assets/blog/popular.png" alt="").preview-img
            .row
              .columns.large-5.medium-12.small-12
                h3 Type something for the title of this article
                hr.line
                .autor-date
                  .autor
                    img(src="../../../assets/team/ceo.png" alt="")
                    h6.light Vladislav Tarasenko
                  .date
                    h4.light Jul 20, 2017

              .columns.large-7.medium-12.small-12
                .read-more-text
                  p Client have MVP product build with very customized Joomla CMS. It was a big chunk of spaghetti code without any documentation and with a lot of different bugs and problems. Also, hole process of the creation new lead page was very slow and unoptimized, client have a lot of complains about how software…
                a(href="#").button.small.expanded.main Read more
    .all-posts
      .row
        .columns.large-4.medium-6.small-12(v-for="blog in blogs")
          router-link(v-bind:to="'/blogs/' + blog.id")
            .one-post
              img(src="../../../assets/blog/one-post.png" alt="").img-post
              .text-more
                h4 {{ blog.title }}
                hr.line
                p.text {{ blog.content }}
                .date-more
                  h6.light {{ blog.date }}
                  i(aria-hidden="true").fa.fa-long-arrow-right
</template>

<script>

export default {
  data () {
        return {
          blogs: [],
          search: '',
        }
    },
  created() {
    this.$http.get('https://webdev-vue.firebaseio.com/posts.json').then(function(data){
        return data.json()
    }).then(function(data){
        var blogsArray = [];
        for (let key in data){
            data[key].id = key;
            blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
    });
  },
  methods: {

  },
};
</script>

<style lang="sass">
  @import '../../../styles/pages/blog';
</style>
