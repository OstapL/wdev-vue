import Vue from 'vue';
import VueResource from 'vue-resource';
import './foundation';

import App from './App';
import router from './router';

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
