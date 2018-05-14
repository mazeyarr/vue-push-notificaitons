<template>
  <div id="app">
    <nav-bar v-if="this.authenticated"></nav-bar>
    <div v-if="this.authenticated" class="page-header header-filter parralax" data-parallax="true"></div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import firebase from 'firebase'
import {messaging} from './main'

export default {
  name: 'App',
  data () {
    return {
      authenticated: false
    }
  },
  components: {
    'nav-bar': NavBar
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      this.authenticated = !!user
    })

    messaging.onMessage((payload) => {
      this.$swal({
        type: 'info',
        title: payload.notification.title,
        text: payload.notification.body
      })
    })
  }
}
</script>

<style>
.parralax{
  background-image: url(/static/img/back.jpg);
  transform: translate3d(0px, 0px, 0px);
}
</style>
