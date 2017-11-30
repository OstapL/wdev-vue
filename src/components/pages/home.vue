<template lang="pug">
  div#is-home
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
      .row
        .columns.large-12.medium-12.small-12
          .tabs-content(data-tabs-content="offer-tabs")
            #panel1.tabs-panel.is-active
              .row
                .columns.large-4.medium-4.small-12
                  h3 Design, develop, host and manage websites.
                  h4.light Individual custom development
                .columns.large-8.medium-8.small-12
                  p We are passionate about technologies and beautiful software. We are strict in terms of bugs and codebase. And we believe from client site development process can be fun and seamless.
                  p The first step is to determine your needs. We start with a thorough consultation to define the scope of your project and its technical requirements. Then comes the design phase, beginning with pre-built "sketches" and further consultation, and finally we use our experience to build a site that will maximize your user's experience, and, for e-commerce sites, your revenue flow.

            #panel2.tabs-panel.tabs-panel
              .row
                .columns.large-4.medium-4.small-12
                  h3 Mobile development.
                  h4.light Responsive design for you
                .columns.large-8.medium-8.small-12
                  p According to the latest research from Strategy Analytics, worldwide HTML5 phone sales surged from 336 million units in 2011 to 1 billion units in 2013. According to ABI, there will be more than 2 billion units in 2016.
                  p We can design, develops, hosts and manages mobile websites based on the latest technology across practically any device. Our HTML5 development tools also allow the mobile website to be wrapped as an app for the major smartphone OS platforms. We also using Sketch software which helps to develop mobile-friendly design more quickly.

            #panel3.tabs-panel
              .row
                .columns.large-4.medium-4.small-12
                  h3 UI/UX development.
                  h4.light Your customer's experience
                .columns.large-8.medium-8.small-12
                  p Our creative development process goes well beyond building an attractive site. Too many web development firms design for design's sake, without considering the actual experience of the customers their clients want to attract and keep.
                  p Beneath the surface, there must be a structure that drives a satisfying, effective user experience for every visitor, carefully designed and tailored to focus end users on what is most important. Real business based on the sales and user growth, we know that and we take care of your business as about our own.
            
            #panel4.tabs-panel
              .row
                .columns.large-4.medium-4.small-12
                  h3 Speed optimization.
                  h4.light Excellent SEO
                .columns.large-8.medium-8.small-12
                  p Web page loading speed is the most crucial part of a site's usability and SEO. Google considers page speed to be one of the 200 ranking factors that influence a website’s position in organic search results and is known to enrich user experience. If your website does not load quickly chances are you will lose site visitors to your competition in a matter of seconds.
                  p For improve your site speed optimization, we are working in 10 different direction that includes both client-side optimizations and server-side optimizations.

            #panel5.tabs-panel
              .row
                .columns.large-4.medium-4.small-12
                  h3 Ongoing support.
                  h4.light We help you understand your customers
                .columns.large-8.medium-8.small-12
                  p Every successful website is a work in progress. A site is never really finished -- here's always things to tweak and change. And the more you learn about your web visitors, the more you can modify the design and add new functions, based on how people use the website.
                  p Webdevelop.pro supplies reliable, safe, economical and scalable informational systems that help you understand your customers. We love long-term contracts and all our solution is built with highly scalable foundation.
            #panel6.tabs-panel
              .row
                .columns.large-4.medium-4.small-12
                  h3 Consulting and audit.
                  h4.light Get our advice!
                .columns.large-8.medium-8.small-12
                  p Quite often all you need is some good advice. This can be an audit that will pack a punch for your project, or simple optimization that will increase your app's reliability. We'll always lend a hand to help you reach your goals.
                  p We will be glad to help with any technical question, or business decision, which is in our scope or skills, no matter if you already have a product or just want to start a new one. Please shot us an email at 
                    a(href="mailto:manager@webdevelop.pro") manager@webdevelop.pro 
                    | or ask your question in the 
                    a(href="#say-hello-main") contact form.
    section#main-page-line
      img(src="../../assets/dashed-line.svg").line-dashed
      .row
        .columns
          .circle-main.idea.wow.bounceInLeft
            span
              h4 Idea
              hr
              p.newtext Let's split all complex task to simple subtasks, and challenge any part of the problem.
          .circle-main.method.wow.bounceInUp
            span
              h4 Method
              hr
              p.newtext Let's split all complex task into simple subtasks.
          .circle-main.realization.wow.bounceInRight
            span
              h4 Realization
              hr
              p.newtext Working software is the primary measure of progress.
      h1.big Approach
    section#main-page-winners
      .row
        .columns.small-12




          h2.text-center Why are we winners?
          h4.light.text-center We pay a lot of attention to technical excellence and good design.
          hr.line
      .row.item.animateClass
        .columns.large-6.medium-12.small-12
          .left.one
            i.fa.fa-refresh(animateAttribute="rotateIn").animated
        .columns.large-6.medium-12.small-12
          h3 Agile development cycle
          p Quality software depends on reflects how well it complies with or conforms to a given design, based on functional requirements or specifications for one side, and on how it meets non-functional requirements that support the delivery of the functional requirements, such as robustness or maintainability on other.
          p We love Agile, and use this methodology on a daily basis planning iterations and performing scrum meetings. This allows us to deliver your application incrementally, rather than making you wait for long periods and major deployments.

      .row.item.animateClass
        .columns.large-6.medium-12.small-12.text-right
          h3 Test driven development
          p We care about our code not less that you do. We have build-in desire create maintainable and sustainable solutions. Working with short development cycle, splitting requirements into specific small cases, improving features and working with legacy code only after tests cases done.
          p These simple principles allow us to do not afraid to refactor our code, to throw away legacy codebase and, what most important, to reflect immediately on the business logic changes. Make an urgency changes during the working process is not a problem for us.
        .columns.large-6.medium-12.small-12.order-small-first
          .right.two
            i.fa.fa-check(animateAttribute="rollIn").animated

      .row.item.animateClass
        .columns.large-6.medium-12.small-12
          .left.three
            i.fa.fa-sitemap(animateAttribute="flipInX").animated
        .columns.large-6.medium-12.small-12
          h3 Microservices solutions
          p Microservices gives you tons of our advantages and pros. Each microservice have it is own small functionality which is tested, covered with tests and since we don't have very different tasks, we have a pretty simple codebase and we can use different languages whatever language fits better.
          p Each microservice have a few developers, and each developer has more responsibilities and full understanding of serving task. Evolutionary Design. Small Codebase. Easy to Scale. Easy to Deploy. System Resilience.

      .row.item.animateClass
        .columns.large-6.medium-12.small-12.text-right
          h3 Communication
          p The main key to successful projects its communication and getting in touch with all development project, at every stage of development.
          p Open communication is key to the implementation of any project. All our clients can actively participate in the development process and have 24/7 access to their project teams. We work in close cooperation with you to deliver your project as seamlessly as possible.
        .columns.large-6.medium-12.small-12.order-small-first
          .right.fo
            i.fa.fa-commenting-o(animateAttribute="flipInY").animated
    section#logo-refs
      .row
        .column.large-3.medium-3.small-3.logo-refs-item.first-line
          img(src="../../assets/logo/pyton.svg" alt="pyton").pyton
        .column.large-3.medium-3.small-3.logo-refs-item.first-line
          img(src="../../assets/logo/django.svg" alt="django").django
        .column.large-3.medium-3.small-3.logo-refs-item.first-line
          img(src="../../assets/logo/flask.svg" alt="flask").flask
        .column.large-3.medium-3.small-3.logo-refs-item.first-line
          img(src="../../assets/logo/sketch-mac-icon@2x.svg" alt="sketch").sketch

        .column.large-3.medium-3.small-3.logo-refs-item.second-line
          img(src="../../assets/logo/backbone.svg" alt="backbone").backbone
        .column.large-3.medium-3.small-3.logo-refs-item.second-line
          img(src="../../assets/logo/type-script.svg" alt="type-script").type-script
        .column.large-3.medium-3.small-3.logo-refs-item.second-line
          img(src="../../assets/logo/angular-js.svg" alt="angular-js").angular-js
        .column.large-3.medium-3.small-3.logo-refs-item.second-line
          img(src="../../assets/logo/js.svg" alt="js").js

        .column.large-3.medium-3.small-3.logo-refs-item.three-line
          img(src="../../assets/logo/go.svg" alt="go").go
        .column.large-3.medium-3.small-3.logo-refs-item.three-line
          img(src="../../assets/logo/node-js.svg" alt="node-js").node-js
        .column.large-3.medium-3.small-3.logo-refs-item.three-line
          img(src="../../assets/logo/mysql.svg" alt="mysql").mysql
        .column.large-3.medium-3.small-3.logo-refs-item.three-line
          img(src="../../assets/logo/postgresql.svg" alt="postgresql").postgresql


        .column.large-3.medium-3.small-3.logo-refs-item.four-line
          img(src="../../assets/logo/html5.svg" alt="html5").html5
        .column.large-3.medium-3.small-3.logo-refs-item.four-line
          img(src="../../assets/logo/CSS3.svg" alt="CSS3").css3
        .column.large-3.medium-3.small-3.logo-refs-item.four-line
          img(src="../../assets/logo/yeti.svg" alt="foundation").foundation
        .column.large-3.medium-3.small-3.logo-refs-item.four-line
          img(src="../../assets/logo/boostrap.svg" alt="boostrap").boostrap
    section#say-hello-main
      .row.align-justify.align-middle
        .columns.large-5.medium-6.small-12
          .left-say-hello
            h2 Say hello!
            h4.light Say hello to us, and we will not keep you waiting. Our managers will contact you, very soon.
            hr.line
            i(aria-hidden="true").fa.fa-hand-peace-o
        .column.large-6.medium-6.small-12
          .right-say-hello
            form(method="POST" novalidate).contactForm
              .group
                input(type="text" name="name" maxlength="100" id="name" placeholder="Your name")
              .group
                input(type="email" name="email" maxlength="100" id="email" placeholder="Your email")
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

            #successful-send.popups
              h3 Successfully sent!
              i.fa.fa-check.circle-icon

            #unsuccessful-sent.popups
              h3 Message not sent!
              i.fa.fa-uncheck.circle-icon
</template>

<script>

export default {
  mounted() {
    this.tabs = new Foundation.Tabs($('#offer-tabs'), {
      // These options can be declarative using the data attributes
      matchHeight: false,
    });
    document.querySelector('header').style.position = 'absolute';
  },
  data() {
    return {
      msg: 'home page',
    };
  },
  destroyed() {
    this.tabs.destroy();
    document.querySelector('header').style.position = 'absolute';
  },
  methods: {

  },
};
</script>

<style lang="sass" scoped>
  @import '/../../styles/pages/main';
</style>
