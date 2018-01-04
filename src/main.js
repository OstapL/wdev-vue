import Vue from 'vue';
import VueResource from 'vue-resource';
import './foundation';
import * as firebase from 'firebase'
import DateFilter from './filters/date'
import App from './App';
import router from './router';
import { store } from './store'

Vue.use(VueResource);
Vue.filter('date', DateFilter);

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
      storageBucket: "gs://webdev-vue.appspot.com",
      messagingSenderId: "88701941783"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadPosts')
  }
});
