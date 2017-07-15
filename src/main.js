import Vue from 'vue'
//import router from './router'
import router from './router/router'
import firebase from 'firebase'

import ('style-loader!jquery/dist/jquery.min.js')
import ('style-loader!semantic-ui-css/semantic.min.js')
import ('style-loader!semantic-ui-css/semantic.min.css')
import App from './App'


Vue.config.productionTip = false


  firebase.initializeApp({
      apiKey: 'AIzaSyBLzFWrGrPkdFHZro1HaLrYZ7p98LEa0Oc',
      authDomain: 'twitty-taiji.firebaseapp.com',
      databaseURL: 'https://twitty-taiji.firebaseio.com',
      projectId: 'twitty-taiji',
      storageBucket: 'twitty-taiji.appspot.com',
      messagingSenderId: '1024958408899'
    })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App) //== ...App
})
