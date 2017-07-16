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

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.matched.some((x) => x.meta.requiresAuth)) { //ถ้า to.matched มีบางอันที่ตัว meta มี requiresAuth
    if(firebase.auth().currentUser) {
      next()
      return
    }
    next({ path: '/signin', query: { redirect: to.fullPath}})
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
