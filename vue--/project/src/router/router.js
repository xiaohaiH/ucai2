import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

/* 首页 */
import Home from '@/view/Home/Home'
/* note页面 */
import Note from '@/view/Note/Note.vue'

/*  */

import '@/assets/bootstrap/css/bootstrap.css'
import '@/assets/bootstrap/js/bootstrap.min.js'
let Router = new vueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home
      }
    },
    {
      path: '/note/:id',
      name: 'note',
      components: {
        default: Note
      }
    }
  ]
})

export default Router
