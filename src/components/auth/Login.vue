<template>
<auth>
  <form class="form" method="" action="">
    <!--Social Media Links-->
    <div class="card-header card-header-primary text-center">
      <h4>Login</h4>
    </div>

    <!--Login Form-->
    <p class="text-divider">Fill in the required information</p>
    <div class="card-body">
      <span class="bmd-form-group">
        <div class="input-group">
          <span class="input-group-addon">
            <i class="material-icons">email</i>
          </span>
          <input type="email" class="form-control" placeholder="Email..." v-model="email">
        </div>
      </span>

      <span class="bmd-form-group">
        <div class="input-group">
          <span class="input-group-addon">
            <i class="material-icons">lock_outline</i>
          </span>
          <input type="password" class="form-control" placeholder="Password..." v-model="password">
        </div>
      </span>
    </div>

    <div class="card-footer justify-content-center">
      <a class="btn btn-primary btnLogin" @click="authenticate">Login</a>
    </div>

    <div class="card-footer justify-content-center" id="createAccountContainer">
      <router-link :to="{name: 'Register'}">Create an account</router-link>
    </div>
  </form>
</auth>
</template>

<script>
import Auth from '@/components/auth/Auth'
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    'auth': Auth
  },
  methods: {
    authenticate () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.push({name: 'Home'})
        })
        .catch((err) => {
          this.$swal({
            type: 'error',
            title: 'Error Occurd',
            text: err
          })
        })
    }
  }
}
</script>

<style scoped>
.btnLogin {
  color: #ffffff !important;
}
#createAccountContainer{
  padding-top: 0px;
}
</style>
