import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

//---IMPORT component---
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import User from '@/components/User'
import SignIn from '@/components/SignIn'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/',name: '', component: Home},
    {path: '/profile', component: Profile, meta: {requiresAuth: true} },
    {path: '/user/:id', component: User},
    {path: '/signin', component: SignIn}
  ]
})

/*Profile
ถ้ายังไม่ Login หน้าเพจจะถูก redirect ไปที่หน้าเพจ SignIn แต่ถ้า Login แล้วก็จะแสดงหน้าได้
และแก้ปัญหาเมื่อกด reload หน้าใหม่
*/
router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.requiresAuth)) { //ถ้า to.matched มีบางอันที่ตัว meta มี requiresAuth
    const cancal = firebase.auth().onAuthStateChanged((user) => {   //แก้ปัญหาเวลากด Reload หน้าเพจ เพื่อไม่ให้ถูก redirect ไปLogin อีก
      if (user) {
        next()
        return
      }
      next ({path: '/signin', query: { redirect: to.fullPath}})
    })
      return
  }
  next()
})

export default router
//-------

/*Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Test
    }
  ]
})
*/
