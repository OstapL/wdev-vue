import Vue from 'vue';
import VueResource from 'vue-resource';
import './foundation';
import * as firebase from 'firebase'

import App from './App';
import router from './router';
import { store } from './store'
Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created() {
    firebase.initializeApp({
        apiKey: "AIzaSyA_7ylkMKqy855O7iiJ3WHSfMILl1pv2sQ",
        authDomain: "webdev-vue.firebaseapp.com",
        databaseURL: "https://webdev-vue.firebaseio.com",
        projectId: "webdev-vue",
        storageBucket: "webdev-vue.appspot.com",
        messagingSenderId: "88701941783",
    })
  }
});
