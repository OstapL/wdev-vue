<template lang="pug">
  #is-home
    section#main-page-top-baner
      video(poster="../../assets/bg-top-main.jpg" playsinline autoplay muted loop)#main-video
        source(src="../../assets/video/video.mp4" type="video/mp4")
      .align-center.center-wrap
        .row.align-center
          .columns.large-12.medium-12.small-12
            h1.big We always strive for excellence
        .row.align-center
          h4.light Perfection is not attainable, but we're passionate about all parts of the development process, even if they're not visible to the end user.
        hr.line
      a(href="#main-page-offer")#mouse.mouse
        .mouse-icon
          .wheel
    section#main-page-offer
      .row(data-tabs)#offer-tabs
        li.columns.large-2.medium-4.small-4.tabs-title.item.is-active
          a(href="#panel1" aria-selected="true")
            img(src="../../assets/icons/laptop.svg").icons.icons-laptop
            h5 Web development
        li.columns.large-2.medium-4.small-4.tabs-title.item
          a(href="#panel2" aria-selected="true")
            img(src="../../assets/icons/phone.svg").icons.icons-phone
            h5 Mobile development
        li.columns.large-2.medium-4.small-4.tabs-title.item
          a(href="#panel3" aria-selected="true")
            img(src="../../assets/icons/ui.svg").icons.icons-ui
            h5 UI/UX development
        li.columns.large-2.medium-4.small-4.tabs-title.item
          a(href="#panel4" aria-selected="true")
            img(src="../../assets/icons/clock.svg").icons.icons-clock
            h5 Speed optimization
        li.columns.large-2.medium-4.small-4.tabs-title.item
          a(href="#panel5" aria-selected="true")
            img(src="../../assets/icons/support.svg").icons.icons-support
            h5 Ongoing support
        li.columns.large-2.medium-4.small-4.tabs-title.item
          a(href="#panel6" aria-selected="true")
            img(src="../../assets/icons/audit.svg").icons.icons-audit
            h5 Consulting and audit
</template>

<script>

export default {
  data() {
    return {
      msg: 'home page',
    };
  },
  methods: {

  },
};
</script>

<style lang="sass" scoped>
  @import '/../../styles/pages/main';
</style>
