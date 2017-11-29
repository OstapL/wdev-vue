<template lang="pug">
  header
    .top-bar#top-menu
      .row.align-center
        ul.menu.menu-center
          router-link(to="/").show-for-small-only.logo
            img(src="../../assets/logo.svg" alt="Webdevelop.pro")
          li
            router-link(to="about") About
          li
            a(href="portfolio.html") Portfolio
          li.logo.show-for-medium
            router-link(to="/")
              img(src="../../assets/logo.svg" alt="Webdevelop.pro")
          li
            router-link(to="contact") Contacts
          li
            a(href="#") Blog
</template>


<script>
export default {

}
</script>

<style scoped>

</style>