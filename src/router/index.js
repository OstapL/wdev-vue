import Vue from 'vue';
import Router from 'vue-router';

// Components
import home from '../components/pages/home';
import about from '../components/pages/about';
import contact from '../components/pages/contact';

// blogs
import allposts from '../components/blogs/pages/allPosts';
import singlepost from '../components/blogs/pages/singlePost';
// blog admin
import addpost from '../components/blogs/admin/addPosts';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    // routes
    { name: 'home', path: '/', component: home },
    { name: 'about', path: '/about', component: about },
    { name: 'contact', path: '/contact', component: contact },
    // blogs
    { name: 'allposts', path: '/blogs/all-post', component: allposts },
    { name: 'singlepost', path: '/blogs/:id', component: singlepost },
    // blog admin
    { name: 'addpost', path: '/blogs/admin/add-post', component: addpost },
  ],
});
