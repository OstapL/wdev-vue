<template lang="pug">
  section#contact
    .top-header.scroll-paralax
      .background(style="background: url('./../../assets/Bitmap.png') center center no-repeat; background-size: cover;")
      .row.text-center
        .columns.text-wrap
          h2 Contacts
          h4.light Contact us, and we will not keep you waiting. Our managers will contact you, very soon.
          hr.line
    .contact-form
      form.contactForm(method="POST" novalidate)
        .header
          .left-text
            h4 USA
            p.city New York
            p.phone
              a(href="tel:+16094140871") +16094140871
            p.email
              a(href="mailto:manager@webdevelop.pro") manager@webdevelop.pro
          i(aria-hidden="true").fa.fa-hand-peace-o
          .right-text
            h4 Ukraine
            p.city Kyiv
            p.phone
              a(href="tel:+380634405605") +380634405605
            p.email
              a(href="mailto:manager@webdevelop.pro") manager@webdevelop.pro
        .group
          input(type="text" name="name" maxlength="100" placeholder="Your name")#name
        .group
          input(type="email" name="email" maxlength="100" placeholder="Your email")#email
        .group
          select(name="subject")#subject
            option(value="") You are curious about:
            option(value="Start a new project") Start a new project
            option(value="Supporting the existing project") Supporting the existing project
            option(value="Partnership") Partnership
            option(value="Other") Other
        .group
          textarea(name="message" placeholder="Message")#message
        button(type="submit").button.small.expanded.main Send
  
</template>

<script>

export default {
  data() {
    return {
      msg: 'Contact page',
    };
  },
  methods: {

  },
};
</script>

<style lang="sass">
  @import '/../../styles/pages/contact';
</style>
