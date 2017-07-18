import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)


import Home from '@/view/Home/Home'
let Router = new vueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    components: {
      default: Home
    }
  }]
})

export default Router
