import Vue from 'vue'
import VueRouter from 'vue-router'

//---IMPORT component---
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import User from '@/components/User'
import SingIn from '@/components/SingIn'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/',name: '', component: Home},
    {path: '/profile', component: Profile, meta: {requiresAuth: true} },
    {path: '/user/:id', component: User},
    {path: '/singin', component: SingIn}
  ]
})


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
