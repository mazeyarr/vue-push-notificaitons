// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/firestore'
import sweetalert2 from 'vue-sweetalert2'

Vue.use(sweetalert2)

let config = {
  apiKey: 'AIzaSyCaMcthRk4wWkr1DlsEHCpUOFIXOVk81KQ',
  authDomain: 'vue-admin-6ac2a.firebaseapp.com',
  databaseURL: 'https://vue-admin-6ac2a.firebaseio.com',
  projectId: 'vue-admin-6ac2a',
  storageBucket: 'vue-admin-6ac2a.appspot.com',
  messagingSenderId: '249875113753'
}
firebase.initializeApp(config)

Vue.config.productionTip = false

export const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})

export const messaging = firebase.messaging()
navigator.serviceWorker.register('./static/firebase-messaging-sw.js').then((registration) => {
  console.log('Registering worker..')
  messaging.useServiceWorker(registration)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
