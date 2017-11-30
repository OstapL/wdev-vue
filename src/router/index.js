import Vue from 'vue';
import Router from 'vue-router';

// Components
import home from '../components/pages/home';
import about from '../components/pages/about';
import contact from '../components/pages/contact';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    // routes
    { name: 'home', path: '/', component: home },
    { name: 'about', path: '/about', component: about },
    { name: 'contact', path: '/contact', component: contact },
  ],
});
