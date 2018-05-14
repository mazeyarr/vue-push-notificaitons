import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import Home from '@/components/Home'
import Profile from '@/components/Profile'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        next()
      } else {
        // User has not been authenticated
        next({name: 'Login'})
      }
    })
  } else {
    next()
  }
})

export default router
