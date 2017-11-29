<template lang="pug">
  footer
    .row.align-middle.footer-line
      .columns.large-3.medium-6.small-12
        .latest-news
          label(for="Receive latest news:") Receive latest news:
            form(action="//webdevelop.us16.list-manage.com/subscribe/post" method="post")#mailchimp.input-group
              input(type="email" name="EMAIL" value="" placeholder="Email").input-group-field
              input(type="hidden" name="u" value="e663bedb74b4c93eb17f9d5c9")
              input(type="hidden" name="id" value="06b85b143d")
              .input-group-button
                button(type="submit").button Ok

      .columns.large-2.medium-6.small-12.footer-left-menu
        ul.menu.center-menu.vertical
          li
            router-link(to="about")
              h5 Who we are
          li
            a(href="")
              h5 Portfolio
          li
            router-link(to="contact")
              h5 Contacts
          li
            a(href="")
              h5 Blog
      .columns.large-4.medium-6.small-6.addres-wrap
        .address
          .left
            img(src="../../assets/icons/location-pin.svg").icons.icons-clock
          .right.city
            h4 USA
            h4.light New York
        .address
          .left
            span
              i.fa.fa-phone-square(aria-hidden="true")
          .right
            span
              a(href="tel:+16463309071") +16463309071
        .address
          .left
            span
              i.fa.fa-envelope-square(aria-hidden="true")
          .right
            span
              a(href="mailto:manager@webdevelop.pro") manager@webdevelop.pro
      .columns.large-3.medium-6.small-6.footer-contact-two-columns.addres-wrap
        .address
          .left
            img.icons.icons-clock(src="../../assets/icons/location-pin.svg")
          .right.city
            h4 Ukraine
            h4.light Kyiv
        .address
          .left
            span
              i.fa.fa-phone-square(aria-hidden="true")
          .right
            span
              a(href="tel:+380634405605") +380634405605
        .address
          .left
            span
              i.fa.fa-envelope-square(aria-hidden="true")
          .right
            span
              a(href="mailto:manager@webdevelop.pro") manager@webdevelop.pro
    .row
      .columns.large-12.medium-12.small-12
        hr.footer-hr
        p.by 2017 by Webdevelop.pro.

</template>


<script>
export default {

}
</script>

<style scoped>

</style>