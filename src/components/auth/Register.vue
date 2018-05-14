<template>
<auth>
  <form class="form" method="" action="">
    <!--Social Media Links-->
    <div class="card-header card-header-primary text-center">
      <h4>Register</h4>
    </div>

    <!--Login Form-->
    <p class="text-divider">Or Be Classical</p>
    <div class="card-body">
      <span class="bmd-form-group">
        <div class="input-group">
          <span class="input-group-addon">
            <i class="material-icons">email</i>
          </span>
          <input type="text" class="form-control" placeholder="Name..." v-model="name">
        </div>
      </span>

      <span>
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
      <a class="btn btn-primary btnRegister" @click="register">Register</a>
    </div>
  </form>
</auth>
</template>

<script>
import Auth from '@/components/auth/Auth'
import firebase from 'firebase'
import { db } from '../../main'

export default {
  name: 'Register',
  components: {
    'auth': Auth
  },
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          user.updateProfile({
            displayName: this.name
          }).then(() => {
            db.collection('users').doc(user.uid).set({
              name: this.name
            }).then(() => {
              this.$router.push({name: 'Home'})
            }).catch((dbError) => this.$swal({
              type: 'error',
              title: 'Error Occurd',
              text: dbError
            }))
          })
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style scoped>
.btnRegister{
  color: #ffffff !important;
}
</style>
