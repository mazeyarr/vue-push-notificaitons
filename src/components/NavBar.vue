<template>
  <nav class="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg " color-on-scroll="100" id="sectionsNav">
    <div class="container">
      <div class="navbar-translate">
        <router-link :to="{name: 'Home'}" class="navbar-brand">Push Notify</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="dropdown nav-item">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="material-icons">account_box</i> {{ name }}
            </a>
            <div class="dropdown-menu dropdown-with-icons">
              <router-link :to="{name: 'Profile'}" class="dropdown-item">
                <i class="material-icons">account_box</i> My Profile
              </router-link>
              <a class="dropdown-item" @click="logout">
                <i class="material-icons">exit_to_app</i> logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'NavBar',
  data () {
    return {
      name: firebase.auth().currentUser.displayName
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.push({name: 'Login'})
      })
    }
  }
}
</script>

<style scoped>

</style>
