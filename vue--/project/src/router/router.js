import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* 首页 */
import Home from '@/view/Home/Home'
/* 电影 */
// import Movie from '@/view/Movie/Movie.vue'
/* 广播 */
import Broadcast from '@/view/Broadcast/Broadcast.vue'
/* note页面 */
import Note from '@/view/Note/Note.vue'

/*  */

import '@/assets/bootstrap/css/bootstrap.css'
import '@/assets/bootstrap/js/bootstrap.min.js'
let Router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home
      }
    },
    // {
    //   path: '/movie',
    //   name: 'movie',
    //   components: {
    //     default: Movie
    //   }
    // },
    {
      path: '/broadcast',
      name: 'broadcast',
      components: {
        default: Broadcast
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
