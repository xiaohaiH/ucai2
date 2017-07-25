import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* 首页 */
import Home from '@/view/Home/Home'
/* note页面 */
import Note from '@/view/Note/Note.vue'
/* 电影 */
// import Movie from '@/view/Movie/Movie.vue'
/* 广播 */
import Broadcast from '@/view/Broadcast/Broadcast.vue'
/* Book页面 */
import Book from '@/view/Book/Book.vue'
/* BookIntroduce页面 */
import BookIntroduce from '@/view/Book/BookIntroduce.vue'
/* BookRankList页面  书籍排行榜 */
import BookRankList from '@/view/Book/BookRankList.vue'




/*  */

import '@/assets/bootstrap/css/bootstrap.css'
import '@/assets/bootstrap/js/bootstrap.min.js'
let Router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/vueProject/',
      name: 'home',
      components: {
        default: Home
      }
    },
    {
      path: '/vueProject/note/:id',
      name: 'note',
      components: {
        default: Note
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
      path: '/vueProject/broadcast',
      name: 'broadcast',
      components: {
        default: Broadcast
      }
    },
    {
      path: '/vueProject/book',
      name: 'book',
      components: {
        default: Book
      }
    },
    {
      path: '/vueProject/book/subject/:id',
      name: 'bookIntroduce',
      components: {
        default: BookIntroduce
      }
    },
    {
      path: '/vueProject/book/subject/bookRankList/:type',
      name: 'bookRankList',
      components: {
        default: BookRankList
      }
    }
  ]
})

export default Router
