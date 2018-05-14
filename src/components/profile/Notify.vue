<template>
<div id="Notifications">
  <div class="togglebutton">
    <label>
      <input type="checkbox" v-if="isSubscribed" checked @click="checkBoxToggle">
      <input type="checkbox" v-if="!isSubscribed" @click="checkBoxToggle">
      <span class="toggle"></span>
      Notify me on updates
    </label>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
import {db, messaging} from '../../main'

export default {
  name: 'Notifications',
  data () {
    return {
      isSubscribed: false
    }
  },
  created () {
    db.collection('users').doc(firebase.auth().currentUser.uid)
      .onSnapshot((doc) => {
        this.isSubscribed = doc.data().notify
      })
  },
  methods: {
    checkBoxToggle () {
      let user = db.collection('users').doc(firebase.auth().currentUser.uid)
      if (this.isSubscribed) {
        user.update({notify: false}).then(() => {
          this.isSubscribed = false
          this.$swal({
            type: 'success',
            title: 'Unsubscribed from notifications',
            text: 'You wil not receive anymore messages from us'
          })
        })
      } else {
        user.get().then((doc) => {
          if (doc.data().notify == null) {
            messaging.requestPermission()
              .then(() => {
                messaging.getToken()
                  .then((token) => {
                    db.collection('users').doc(firebase.auth().currentUser.uid).update({
                      token: token,
                      notify: true
                    })
                  })
              })
              .catch((err) => console.log(err))
          } else {
            user.update({notify: true}).then(() => {
              this.isSubscribed = true
              this.$swal({
                type: 'success',
                title: 'Thanks!',
                text: 'Thanks for subscribing to notifications'
              })
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
