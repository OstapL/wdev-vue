import * as firebase from 'firebase'

export default {
  state: {
    loadedPosts: [],
    loading: false,
    error: null
  },
  mutations: {
    setLoadedPosts (state, payload) {
      state.loadedPosts = payload
    },
    createPosts (state, payload) {
      state.loadedPosts.push(payload)
    },
    updatePost (state, payload) {
      const blog = state.loadedPosts.find(blog => {
        return blog.id === payload.id
      })
      if (payload.title) {
        blog.title = payload.title
      }
      if (payload.hashtags) {
        blog.hashtags = payload.hashtags
      }
      if (payload.content) {
        blog.content = payload.content
      }
    }
  },
  actions: {
    loadPosts ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('blogs').once('value')
        .then((data) => {
          const blogs = []
          const obj = data.val()
          for (let key in obj) {
            blogs.push({
              id: key,
              title: obj[key].title,
              content: obj[key].content,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              hashtags: obj[key].hashtags,
              creatorId: obj[key].creatorId
            })
          }
          const users = []
          firebase.database().ref('users').once('value')
            .then((data) => {
              const obj = data.val()
              for (let key in obj) {
                id: key,
                creatorId: obj[key].creatorId,
                userName: obj[key].userName,
                userPosition: obj[key].userPosition

              }
            })
          // ходить по списку блогов и для каждого блога находить пользователя в  массиве users
          commit('setLoadedPosts', blogs)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    createdPosts ({commit, getters}, payload) {
      const blog = {
        title: payload.title,
        content: payload.content,
        date: payload.date.toISOString(),
        hashtags: payload.hashtags,
        creatorId: getters.users.id
      }
      let key
      let imageUrl
      firebase.database().ref('blogs').push(blog)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('blogs/' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          imageUrl = fileData.metadata.downloadURLs[0]
          return firebase.database().ref('blogs').child(key).update({imageUrl: imageUrl})
        })
        .then(() => {
          commit('createPosts', {
            ...blog,
            imageUrl: imageUrl,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    updatePostData ({commit}, payload) {
      commit('setLoading', true)
      const updateObj = {}
      if (payload.title) {
        updateObj.title = payload.title
      }
      if (payload.hashtags) {
        updateObj.hashtags = payload.hashtags
      }
      if (payload.content) {
        updateObj.content = payload.content
      }
      firebase.database().ref('blogs').child(payload.id).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updatePost', payload)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    }
  },
  getters: {
    loadedPosts (state) {
      return state.loadedPosts.sort((blogA, blogB) => {
        return blogA.date > blogB.date
      })
    },
    loadedPost (state) {
      return (blogId) => {
        return state.loadedPosts.find((blog) => {
          return blog.id === blogId
        })
      }
    }
  }
}
