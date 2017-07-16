<template>
  <div class="ui-segment">
    <h2 class="ui header" >Sign In</h2>
    <div @click="signIn" class="ui google plus button"><i class="google plus icon"></i>Sign In With Google Plus</div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  //ป้องกันไม่ให้ user กลับเข้าหน้า Login หลังจากที่ login ไปแล้วด้วยการพิมพ์เข้าทาง url โดยครง
  beforeRouteEnter (to, from, next) {
    const cancal = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next (to.query.redirect || '/') //ถ้าใน url มี redirect ก็ให้กลับไปที่หน้าเพจที่ redirect ไว้ แต่ถ้าไม่มีการ redirect ใน url ก็ในไป Home
        return
      }
      next()
    })
  },
  methods: {
    signIn () {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(() => {
          this.$router.replace(this.$route.query.redirect || '/')
        })
    }
  }
}
</script>
