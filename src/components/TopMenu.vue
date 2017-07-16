<template lang="html">
  <div class="ui menu">
    <router-link to='/' class="item" active-class="active" exact>Home</router-link>


    <div class="right menu">
      <router-link to='/profile' class="item" active-class="active" exact>Profile</router-link>
      <router-link v-if="!currentUser" to='/signin' class="header item" active-class="active" exact>Sing in</router-link>
      <div v-else @click="signOut" class="link item">Sing Out</div>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    currentUser: null
  }),
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('curent user: ' + user)
      this.currentUser = user
    })
  },
  methods: {
    signOut () {
      firebase.auth().signOut()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
