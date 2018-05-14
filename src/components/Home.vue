<template>
<div id="Home">

</div>
</template>

<script>
import firebase from 'firebase'
import {messaging, db} from '../main'

export default {
  name: 'Home',
  created () {
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
  }
}
</script>

<style scoped>

</style>
