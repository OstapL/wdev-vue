import Vue from 'vue'
import Vuex from 'vuex'

import blog from './blogs'
import shared from './shared'
import users from './users'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    blog: blog,
    users: users,
    shared: shared
  }
})
