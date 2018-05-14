<template>
<div id="Messages">
  <button class="btn btn-success" @click="sendToSubscribers">Send Messages</button>
</div>
</template>

<script>
import {db} from '../../main'
import axios from 'axios'

export default {
  name: 'Send',
  methods: {
    sendToSubscribers () {
      let users = db.collection('users')
      users.where('notify', '==', true).get()
        .then((result) => {
          let tokens = []
          result.forEach((user) => {
            tokens.push(user.data().token)
          })
          const params = new URLSearchParams()
          params.append('tokens', tokens)
          axios({
            method: 'post',
            url: 'http://localhost/',
            data: params
          })
        }).catch((err) => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
