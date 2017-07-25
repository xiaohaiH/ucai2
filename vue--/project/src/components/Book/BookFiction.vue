<template>
  <div class="container-fluid">

    <div class="fictionTitle">
      <h4 class="pull-left">最受关注图书｜虚构类</h4>
      <router-link to="/vueProject/book/subject/bookRankList/hotFiction/" tag="a" class="pull-right">更多</router-link>
    </div>

    <div>
         <swipe callback="jsonp1" sendJson="https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?os=ios&callback=jsonp1&start=0&count=8&loc_id=0&_=1500621296825"></swipe>
    </div>

  </div>
</template>

<script>
/* 引入样式 */
import '@/assets/css/Book/BookFiction.css'

/* 引入轮播图 */
import Swipe from './Swipe.vue'

  export default {
    name: 'bookFiction',
    data(){
      return {
      }
    },
    components: {
      swipe: Swipe
    }
  }
</script>
