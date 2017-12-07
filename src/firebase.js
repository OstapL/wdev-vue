import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyA_7ylkMKqy855O7iiJ3WHSfMILl1pv2sQ",
    authDomain: "webdev-vue.firebaseapp.com",
    databaseURL: "https://webdev-vue.firebaseio.com",
    projectId: "webdev-vue",
    storageBucket: "webdev-vue.appspot.com",
    messagingSenderId: "88701941783",
  });

export const db = app.database();
export const postsRef = db.ref('posts');