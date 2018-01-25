import * as firebase from 'firebase'

export default {
  state: {
    user: null,
    loading: false,
    error: null,
    users: []
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoadedUsers (state, payload) {
      state.users = payload
    },
    createUserData (state, payload) {
      state.users.push(payload)
    },
  },
  actions: {
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredBlogs: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredBlogs: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {
        id: payload.uid,
        registeredBlogs: []
      })
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    createUserData ({commit, getters}, payload) {
      const user = {
        userName: payload.userName,
        userPosition: payload.userPosition,
        creatorId: getters.user.id
      }
      let key
      firebase.database().ref('users').push(user)
        .then((data) => {
          key = data.key
          return key
        })
        .then(() => {
          commit('createUserData', {
            ...user,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    loadUsers ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('users').once('value')
        .then((data) => {
          const users = []
          const obj = data.val()
          for (let key in obj) {
            users.push({
              id: key,
              userName: obj[key].userName,
              userPosition: obj[key].userPosition,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedUsers', users)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    fetchUserData ({commit, getters}) {
      commit('setLoading', true)
      firebase.database().ref('/blogs/' + getters.user.id).once('value')
        .then(data => {
          const values = data.val()
          // let registeredBlogs = []
          console.log(values)
        })
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    users (state) {
      return state.users
    },
    loadedUser (state) {
      return (userId) => {
        return state.users.find((user) => {
          return user.id === userId
        })
      }
    }
  }
}
