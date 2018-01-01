import Vue from 'vue'
import Vuex from 'vuex'

import blog from './blogs'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    blog: blog
  }
})
