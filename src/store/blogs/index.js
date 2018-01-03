import * as firebase from 'firebase'

export default {
  state: {
    loadedPosts: []
  },
  mutations: {
    setLoadedPosts (state, payload) {
      state.loadedPosts = payload
    },
    createPosts (state, payload) {
      state.loadedPosts.push(payload)
    }
  },
  actions: {
    loadPosts ({commit}) {
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
              hashtags: obj[key].hashtags
            })
          }
          commit('setLoadedPosts', blogs)
        })
        .catch(
          (error) => {
            console.log(error)
          }
        )
    },
    createdPosts ({commit}, payload) {
      const blog = {
        title: payload.title,
        content: payload.content,
        date: payload.date.toISOString(),
        hashtags: payload.hashtags
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
