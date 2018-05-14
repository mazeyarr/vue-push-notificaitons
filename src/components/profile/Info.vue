<template>
<div id="Info">
  <div class="form-group bmd-form-group">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
            <i class="material-icons">group</i>
        </span>
      </div>
      <input type="text" class="form-control" placeholder="Name" v-model="name">
    </div>
  </div>
  <button class="btn btn-success" @click="saveProfile">Save</button>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Info',
  data () {
    return {
      name: firebase.auth().currentUser.displayName
    }
  },
  methods: {
    saveProfile () {
      firebase.auth().currentUser.updateProfile({
        displayName: this.name
      }).then(() => this.$swal({
        type: 'success',
        title: 'Saved!',
        text: 'Profile has been saved!'
      }))
    }
  }
}
</script>

<style scoped>

</style>
