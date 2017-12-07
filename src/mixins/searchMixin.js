export default {
    computed: {
        filteredBlogs: function() {
          return this.blog.filter((blog) => {
            return blog.title.match(this.search)
          });
        }
    }
}