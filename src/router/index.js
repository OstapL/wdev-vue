import Vue from 'vue'
import Router from 'vue-router'

// Components
import home from '../components/pages/home'
import about from '../components/pages/about'
import contact from '../components/pages/contact'

// blogs
import allposts from '../components/blogs/pages/allPosts'
import singlepost from '../components/blogs/pages/singlePost'
// blog admin
import addpost from '../components/blogs/admin/addPosts'
import signup from '../components/users/Signup'
import signin from '../components/users/Signin'
import AuthGuard from './auth-guard'
import Profile from '../components/users/Profile'
import userDara from '../components/users/user'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // routes
    { name: 'home', path: '/', component: home },
    { name: 'about', path: '/about', component: about },
    { name: 'contact', path: '/contact', component: contact },
    // blogs
    { name: 'allposts', path: '/blogs/all-post', component: allposts },
    { name: 'singlepost', path: '/blogs/:id', props: true, component: singlepost },
    // blog admin
    { name: 'addpost', path: '/blogs/admin/add-post', component: addpost, beforeEnter: AuthGuard},
    { name: 'signup', path: '/signup', component: signup },
    { name: 'signin', path: '/signin', component: signin },
    { name: 'profile', path: '/profile', component: Profile},
    { name: 'userDara', path: '/user/:id', props: true,  component: userDara }
  ],
});
