<template>
<div id="Profile">
  <div class="main main-raised">
    <div class="profile-content">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <div class="profile">
              <div class="avatar">
                <img src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/21557949_1867795259914620_7623488418021264092_n.jpg?_nc_cat=0&oh=94129ac6ba5125b91e4384759ea2cbf3&oe=5B5DEAF4" alt="Circle Image" class="img-raised rounded-circle img-fluid">
              </div>
              <div class="name">
                <h3 class="title">{{ name }}</h3>
                <h6>{{ email }}</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="description text-center">
          <p></p>
        </div>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <div class="profile-tabs">
              <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" role="tab" data-toggle="tab" @click="showNotify">
                    <i class="material-icons">camera</i> Notifcations
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" role="tab" data-toggle="tab" @click="showinfo">
                    <i class="material-icons">palette</i> Info
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" role="tab" data-toggle="tab" @click="showMessages">
                    <i class="material-icons">favorite</i> Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tab-content tab-space">
          <div class="tab-pane active text-center gallery">
            <div class="row">
              <div class="col-md-12">
                <transition name="fade">
                  <notify v-if="show.notify"></notify>
                  <info v-if="show.info"></info>
                  <send v-if="show.messages"></send>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
import Notify from '@/components/profile/Notify'
import Info from '@/components/profile/Info'
import Send from '@/components/profile/Send'

export default {
  name: 'Profile',
  data () {
    return {
      name: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email,
      show: {
        notify: true,
        info: false,
        messages: false
      }
    }
  },
  methods: {
    showNotify () {
      this.show.notify = true
      this.show.info = false
      this.show.messages = false
    },
    showinfo () {
      this.show.info = true
      this.show.notify = false
      this.show.messages = false
    },
    showMessages () {
      this.show.messages = true
      this.show.notify = false
      this.show.info = false
    }
  },
  beforeCreate () {
    document.body.className = 'profile-page'
  },
  components: {
    'notify': Notify,
    'info': Info,
    'send': Send
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
